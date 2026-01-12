// Implement a useCycle hook that cycles through a sequence of values each time its function is called.
import { useCallback, useState } from 'react';

export default function useCycle<T>(...args: T[]) {
  const [index, setIndex] = useState(0);

  const cycle = useCallback(() => {
    setIndex((index) => (index + 1) % args.length);
  }, []);

  return [args[index], cycle] as const;
}
