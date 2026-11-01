// Pointer tilt for the hero visual and the game cards. Decorative only: the page is complete
// without it. No network, no storage; skipped on touch screens and for reduced motion.
(() => {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const tilt = (area, target, max) => {
    if (!area || !target) return;
    let frame = 0;
    area.addEventListener('pointermove', (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = area.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        target.style.setProperty('--tilt-x', `${(-y * max).toFixed(2)}deg`);
        target.style.setProperty('--tilt-y', `${(x * max).toFixed(2)}deg`);
      });
    });
    area.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame);
      target.style.removeProperty('--tilt-x');
      target.style.removeProperty('--tilt-y');
    });
  };

  tilt(document.querySelector('.hero'), document.querySelector('.hero-visual'), 9);
  document.querySelectorAll('.game-card').forEach((card) => tilt(card, card, 7));
})();
