"use client";
import Link from "next/link";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";


// Sidebar context and hook
const SidebarContext = createContext();

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

// Sidebar provider
export const SidebarProvider = ({ children, open: openProp, setOpen: setOpenProp }) => {
  const [openState, setOpenState] = useState(false);
  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Main Sidebar component
export const Sidebar = ({ children, open, setOpen }) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen}>
      {children}
    </SidebarProvider>
  );
};

// Sidebar body
export const SidebarBody = (props) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...props} />
    </>
  );
};

// Desktop Sidebar component
export const DesktopSidebar = ({ className, children, ...props }) => {
  const { open, setOpen } = useSidebar();
  return (
    <motion.div
      className={`h-full px-4 py-4 hidden md:flex md:flex-col bg-gray-900 dark:bg-gray-800 w-[300px] flex-shrink-0 ${className}`}
      animate={{ width: open ? "400px" : "60px" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Mobile Sidebar component
export const MobileSidebar = ({ className, children, ...props }) => {
  const { open, setOpen } = useSidebar();
  return (
    <div
      className={`h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full ${className}`}
      {...props}
    >
      <div className="flex justify-end z-20 w-full">
       
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed h-full w-full inset-0 bg-gray-900 dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between ${className}`}
          >
            <div
              className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
              onClick={() => setOpen(!open)}
            >
            
            </div>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

