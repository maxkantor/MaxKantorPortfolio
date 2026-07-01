import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

export function useCountUp(end, { duration = 1800, start = 0, enabled = true } = {}) {
  const [value, setValue] = useState(start);
  const [ref, setRef] = useState(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!enabled || !isInView) return undefined;

    let frameId;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(start + (end - start) * eased));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [duration, end, enabled, isInView, start]);

  return { ref: setRef, value };
}
