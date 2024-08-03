'use client'
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const HoverCard = ({ items, className }) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);
    const [copied,setCopied] = useState("");
    const handleCopy = () => {
        setCopied(items[hoveredIndex].prompt)
       
        navigator.clipboard.writeText(items[hoveredIndex].prompt);
        
       
        setTimeout(() => setCopied(""), 3000);
        
    };
    return (
      <div className>
            
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10  ",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          href={""}
          
          className="relative  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
              <Card>
                  <div className="flex justify-between">
                      <div className="flex items-center">
                          
                          <img src="/assets/images/profile.jpg" alt="profile" className="h-6 w-6 rounded-full" />
                          <span className="flex flex-col px-2 text-xs text-gray-300">
                              
                              <p className="">
                                  {item.creator.username}
                            
                              </p>
                              <p>
                                  {item.creator.email}
                              </p>
                          </span>
                      </div>
                      <button  onClick={handleCopy}>
                          
                          <img src={copied === item.prompt ? "assets/icons/tick.svg"
                              :'assets/icons/copy.svg'
                          } alt="copy" className="h-6 w-6"/>
                      </button>
                  </div>
                  
                  <CardTitle>{item.prompt}</CardTitle>
                 
            <CardDescription>{item.tag}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
      </div>
  );
};

const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export default HoverCard;
export { Card, CardTitle, CardDescription };
