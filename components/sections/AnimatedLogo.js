import { useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from '../../styles/AnimatedLogo.module.css';

/**
 * Logo Whale Diving animé : le haut de la queue et du mot WHALE part en particules
 * vers le haut (effet inspiré de Mood Prod), avec les points GPS
 * La Réunion · Saint-Gilles · Cap La Houssaye.
 * Image utilisée : /public/images/logo-animation.png (fond transparent).
 */
export default function AnimatedLogo({ className = '' }) {
  const hostRef = useRef(null);
  const plogoRef = useRef(null);
  const linesRef = useRef(null);

  useEffect(() => {
    if (!hostRef.current || !plogoRef.current || !linesRef.current) return;
    /* ================= RÉGLAGES ================= */
    const CFG = {
      logo: "/images/logo-animation.png",   // logo violet et rose, fond transparent
      violet: [69, 43, 103], rose: [238, 46, 96],
      logoHeight: 0.66,     // taille du logo dans le cadre
      logoBottom: 0.04,     // marge sous le logo (l'espace au-dessus sert aux particules)
      gap: 2,               // écart entre deux grains (px) : plus petit = plus dense
      size: [1.7, 2.3],     // taille des grains carrés (px)
      tailCut: 0.19,        // haut de la queue qui part en poussière (part du logo)
      texture: 0.7,         // bande de texture en grains sous la poussière (0.7 = 70 % de la zone qui part)
      whaleBand: [0.31, 0.62], letterHeight: 0.157,
      whaleCut: 0.25,       // part du haut des lettres WHALE qui part en particules (0.25 = un quart)
      rise: 0.40,           // hauteur de montée (part du cadre)
      spread: 0.10,         // léger écart gauche / droite
      wave: 12,             // ondulation des trajectoires (px)
      speed: 0.085,         // vitesse du flux
      shimmer: 0.12,        // scintillement des grains au repos
      // points GPS qui suivent les grains : coordonnées réelles + nom affiché dessous
      places: [
        {name: "La Réunion",      lat: -21.1151, lon: 55.5364},
        {name: "Saint-Gilles",    lat: -21.0547, lon: 55.2219},
        {name: "Cap La Houssaye", lat: -21.0186, lon: 55.2369},
      ],
    };
    /* ============================================ */

    const host = hostRef.current;
    const cv = plogoRef.current, ctx = cv.getContext("2d");
    const lc = linesRef.current, lx = lc.getContext("2d");
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W, H, box, solid, groups = {}, P = [], T = [], running = true, visible = true, t0 = performance.now();
    const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x-a)/(b-a))); return t*t*(3-2*t); };
    const VIO = `rgb(${CFG.violet})`, ROSE = `rgb(${CFG.rose})`;

    const img = new Image();
    let cancelled = false;
    img.onload = () => { if (cancelled) return; build(); requestAnimationFrame(frame); };
    img.src = CFG.logo;

    function build(){
      const r = host.getBoundingClientRect(); W = r.width; H = r.height;
      for (const c of [cv, lc]) { c.width = Math.round(W*DPR); c.height = Math.round(H*DPR); }
      ctx.setTransform(DPR,0,0,DPR,0,0); lx.setTransform(DPR,0,0,DPR,0,0);
      const narrow = W < 700;
      var lh = H*(narrow ? 0.6 : CFG.logoHeight), lw = lh*img.width/img.height;
      if (lw > W*0.92) { lw = W*0.92; lh = lw*img.height/img.width; }
      box = {x: (W-lw)/2, y: H - lh - H*CFG.logoBottom, w: lw, h: lh};

      // v = 1 tout en haut, 0 là où la poussière commence, négatif en dessous (−texture = fin de la transition)
      function zones(d, ow, s){
        const isRose = i => { const [vr, vg, vb] = CFG.violet, [rr, rg, rb] = CFG.rose;
          return (d[i]-rr)**2 + (d[i+1]-rg)**2 + (d[i+2]-rb)**2 < (d[i]-vr)**2 + (d[i+1]-vg)**2 + (d[i+2]-vb)**2; };
        const wA = (box.y + lh*CFG.whaleBand[0])*s, wB = (box.y + lh*CFG.whaleBand[1])*s, tailB = (box.y + lh*0.36)*s;
        const wTop = new Float32Array(ow).fill(-1);
        for (let x = 0; x < ow; x++) for (let y = wA|0; y < wB; y++) { const i = (y*ow + x)*4; if (d[i+3] > 128 && isRose(i)) { wTop[x] = y; break; } }
        return (x, y) => { const i = ((y|0)*ow + (x|0))*4, rose = isRose(i);
          if (!rose && y < tailB) return {rose, v: 1 - (y - box.y*s)/(lh*CFG.tailCut*s)};
          if (rose && y < wB && wTop[x|0] >= 0) return {rose, v: 1 - (y - wTop[x|0])/(lh*CFG.letterHeight*CFG.whaleCut*s)};
          return {rose, v: -9}; };
      }
      const solidAlpha = v => v <= -CFG.texture ? 1 : v <= 0 ? 1 - 0.8*smooth(-CFG.texture, 0, v) : 0.2*(1 - smooth(0, 0.35, v));

      // 1) le logo net, en couleurs pleines : il ne prend la texture qu'à l'approche de la poussière
      const f = DPR, sw = Math.ceil(W*f), sh = Math.ceil(H*f);
      solid = document.createElement("canvas"); solid.width = sw; solid.height = sh;
      const sc = solid.getContext("2d", {willReadFrequently: true}); sc.drawImage(img, box.x*f, box.y*f, lw*f, lh*f);
      const id = sc.getImageData(0, 0, sw, sh), sd = id.data, zs = zones(sd, sw, f);
      for (let y = 0; y < sh; y++) for (let x = 0; x < sw; x++) { const i = (y*sw + x)*4; if (sd[i+3] < 10) continue;
        const z = zs(x, y); if (z.v > -CFG.texture) sd[i+3] *= solidAlpha(z.v); }
      sc.putImageData(id, 0, 0);

      // 2) les grains : seulement dans la transition (texture) et dans la poussière qui monte
      const ow = Math.ceil(W), oh = Math.ceil(H);
      const off = document.createElement("canvas"); off.width = ow; off.height = oh;
      const o = off.getContext("2d", {willReadFrequently: true}); o.drawImage(img, box.x, box.y, lw, lh);
      const d = o.getImageData(0, 0, ow, oh).data, z1 = zones(d, ow, 1);
      const gap = narrow ? 1.6 : CFG.gap;
      P = []; groups = {[ROSE]: [], [VIO]: []};   // le rose passe derrière la queue
      for (let y = box.y; y < box.y + lh*0.62; y += gap) for (let x = box.x; x < box.x + lw; x += gap) {
        const i = ((y|0)*ow + (x|0))*4; if (d[i+3] < 110) continue;
        const z = z1(x, y); if (z.v <= -CFG.texture) continue;
        const p = {hx: x, hy: y, l: d[i+3]/255 * smooth(-CFG.texture, 0, z.v), k: z.v > 0 ? smooth(0, 1, z.v) : 0,
          s: (CFG.size[0] + Math.random()*(CFG.size[1]-CFG.size[0])) * (narrow ? 0.75 : 1),
          ph: Math.random(), sp: 0.55 + Math.random()*0.9, w: Math.random()*6.283, f: 0.6 + Math.random()*2.4,
          dx: Math.random(), dy: Math.random()};
        P.push(p); groups[z.rose ? ROSE : VIO].push(p);
      }

      // grains suivis par le viseur : 2 fixes, 4 qui s'envolent
      const pick = (moving, y0, y1, x0, x1) => { const c = P.filter(p => (moving ? p.k > 0.35 : p.k === 0) &&
          p.hy > box.y + box.h*y0 && p.hy < box.y + box.h*y1 && p.hx > box.x + box.w*x0 && p.hx < box.x + box.w*x1);
        return c.length ? c[(Math.random()*c.length)|0] : null; };
      // La Réunion : point fixe sur le logo · Saint-Gilles : s'envole du haut de WHALE · Cap La Houssaye : s'envole de la queue
      const fixed = {hx: box.x + box.w*0.22, hy: box.y + box.h*0.70, k: 0, l: 1};
      T = [fixed, pick(true, 0.38, 0.47, 0.3, 0.6), pick(true, 0, 0.1, 0.6, 0.8)];
      if (T.some(p => !p)) T = T.filter(Boolean);
      T.forEach(p => { p.sp = Math.min(p.sp, 0.7); });
    }

    // position d'un grain à l'instant t (même calcul pour les grains et le viseur)
    function pos(p, t){
      let x = p.hx, y = p.hy, a = p.l;
      if (p.k > 0 && !reduce) {
        const c = (t*CFG.speed*p.sp + p.ph) % 1;
        const travel = Math.pow(c, 2.2) * p.k;
        y -= travel * H * CFG.rise * (0.35 + 0.65*p.dx);
        x += travel * W * CFG.spread * (p.dy - 0.5) + Math.sin(c*6.283*1.5 + p.w) * CFG.wave * travel;
        a *= Math.max(0, 1 - travel*1.15);
        if (c < 0.05) a *= c/0.05;
      }
      return {x, y, a};
    }

    // lignes fines entre les points, crochets, coordonnées GPS qui défilent et nom du lieu dessous
    function hud(t){
      lx.clearRect(0, 0, W, H);
      if (T.length < 2) return;
      const fs = W < 700 ? 9 : 11, pts = T.map(p => pos(p, t));
      lx.textBaseline = "middle"; lx.lineWidth = 1;
      const ink = a => `rgba(13,33,55,${a})`;   // texte et lignes en bleu nuit
      for (let m = 0; m < pts.length; m++) { const A = pts[m], B = pts[(m + 1) % pts.length];
        lx.strokeStyle = `rgba(255,255,255,${0.4*Math.min(A.a + 0.3, B.a + 0.3, 1)})`; lx.beginPath(); lx.moveTo(A.x, A.y); lx.lineTo(B.x, B.y); lx.stroke(); }
      pts.forEach((q, n) => {
        const pl = CFG.places[n], al = Math.min(1, q.a + 0.45); if (!pl || al < 0.1) return;
        lx.fillStyle = ink(0.9*al); lx.fillRect(q.x - 1.5, q.y - 1.5, 3, 3);
        lx.strokeStyle = ink(0.6*al); const s = 6;   // crochets [ ]
        lx.beginPath(); lx.moveTo(q.x - s + 2, q.y - s); lx.lineTo(q.x - s, q.y - s); lx.lineTo(q.x - s, q.y + s); lx.lineTo(q.x - s + 2, q.y + s);
        lx.moveTo(q.x + s - 2, q.y - s); lx.lineTo(q.x + s, q.y - s); lx.lineTo(q.x + s, q.y + s); lx.lineTo(q.x + s - 2, q.y + s); lx.stroke();
        // les coordonnées bougent un peu avec le grain, autour du vrai lieu
        const lat = pl.lat - (q.y - T[n].hy)/box.h*0.004, lon = pl.lon + (q.x - T[n].hx)/box.w*0.004;
        const coords = `${Math.abs(lat).toFixed(4)}°S  ${lon.toFixed(4)}°E`;
        lx.font = `${fs}px "IBM Plex Mono", ui-monospace, Menlo, monospace`;
        const w1 = lx.measureText(coords).width, tx = Math.max(12, Math.min(q.x + 14, W - w1 - 12));
        lx.fillStyle = `rgba(190,205,219,${0.6*al})`;   // petit fond clair pour lire le texte sur le logo
        lx.fillRect(tx - 4, q.y - fs*1.4, w1 + 8, fs*2.85);
        lx.fillStyle = ink(0.62*al); lx.fillText(coords, tx, q.y - fs*0.65);
        lx.font = `500 ${fs}px "IBM Plex Mono", ui-monospace, Menlo, monospace`;
        lx.fillStyle = ink(0.92*al); lx.fillText(pl.name.toUpperCase(), tx, q.y + fs*0.75);
      });
    }

    function frame(now){
      if (cancelled || !(running && visible)) return;
      requestAnimationFrame(frame);
      const t = (now - t0)/1000;
      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(solid, 0, 0, W, H);
      for (const key in groups) {
        ctx.fillStyle = key;
        for (const p of groups[key]) {
          const q = pos(p, t);
          const a = q.a * (1 - CFG.shimmer + CFG.shimmer*Math.sin(t*p.f + p.w));   // grain qui scintille
          if (a < 0.03) continue;
          ctx.globalAlpha = a; ctx.fillRect(q.x, q.y, p.s, p.s);
        }
      }
      ctx.globalAlpha = 1;
      hud(t);
    }

    function resume(){ if (running && visible && box) requestAnimationFrame(frame); }
    const io = new IntersectionObserver(([e]) => { const w = visible; visible = e.isIntersecting; if (visible && !w) resume(); });
    io.observe(host);
    const onVis = () => { const w = running; running = !document.hidden; if (running && !w) resume(); };
    document.addEventListener("visibilitychange", onVis);
    let rt;
    const onResize = () => { clearTimeout(rt); rt = setTimeout(() => img.complete && build(), 150); };
    window.addEventListener("resize", onResize);
    return () => {
      cancelled = true; running = false;
      io.disconnect(); clearTimeout(rt);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap" />
      </Head>
      <div className={`${styles.wrap} ${className}`} ref={hostRef} role="img" aria-label="Whale Diving">
        <canvas ref={plogoRef} className={styles.canvas} aria-hidden="true" />
        <canvas ref={linesRef} className={styles.canvas} aria-hidden="true" />
      </div>
    </>
  );
}
