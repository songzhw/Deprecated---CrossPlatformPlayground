import React, { useEffect, useRef } from "react";

type FN = () => void
const defaultFn = () => {
};

export function useInterval(callback: FN, delay: number) {
  const ref = useRef<FN>(defaultFn);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      ref.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}