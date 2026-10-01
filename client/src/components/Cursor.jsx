import { useEffect, useRef } from 'react';
export default function Cursor() {
  const dot = useRef(), ring = useRef();
  useEffect(() => {
    if (!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    let x = 0, y = 0, rx = 0, ry = 0, raf;
    const move = (e) => { x = e.clientX; y = e.clientY; dot.current.style.transform = `translate(${x}px,${y}px)`; };
    const over = (e) => ring.current.classList.toggle('is-hover', !!e.target.closest('a,button,input,textarea,.lift'));
    const loop = () => { rx += (x - rx) * 0.15; ry += (y - ry) * 0.15; ring.current.style.transform = `translate(${rx}px,${ry}px)`; raf = requestAnimationFrame(loop); };
    window.addEventListener('mousemove', move, { passive: true }); window.addEventListener('mouseover', over, { passive: true }); loop();
    document.body.classList.add('has-cursor');
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); document.body.classList.remove('has-cursor'); };
  }, []);
  return (<><div ref={ring} className="cur cur-ring" aria-hidden="true" /><div ref={dot} className="cur cur-dot" aria-hidden="true" /></>);
}
