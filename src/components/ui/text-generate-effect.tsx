
"use client";
import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  
  useEffect(() => {
    if (scope.current) {
      animate(
        scope.current,
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
        }
      );
    }
  }, [scope.current, animate, duration, filter]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-white text-2xl leading-snug tracking-wide">
          <motion.div 
            ref={scope}
            className="opacity-0 text-white"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {words}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
