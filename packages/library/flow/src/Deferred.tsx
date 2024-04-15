"use client";
import React, { useState, useEffect, useCallback, ReactNode } from "react";

type DeferredProps = {
  timeout: number;
  children: ReactNode;
  placeholder?: ReactNode;
};

export const Deferred: React.FC<DeferredProps> = React.memo(
  ({ timeout, children, placeholder }) => {
    const [isShown, setIsShown] = useState(false);

    const handleSetIsShown = useCallback(() => {
      setIsShown(true);
    }, []);

    useEffect(() => {
      const timer = setTimeout(handleSetIsShown, timeout);
      return () => clearTimeout(timer);
    }, [timeout, handleSetIsShown]);

    return isShown ? children : placeholder || null;
  },
);

export default Deferred;
