"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./sidebar";


import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const MyProfile = ({ data, handleEdit, handleDelete }) => {
 
  
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-black dark:bg-black w-full flex-1 max-w-7xl mx-auto border border-gray-500 dark:border-black overflow-hidden",
        "h-[80vh]" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden relative">
           
            <div className="mt-8 flex flex-col gap-2">
              <div className="mb-12 flex">

            <Image
                  src="/assets/images/image.png"
                  alt="User Avatar"
                  width={50}
                  height={50}
                  className="h-7 w-7 flex-shrink-0 rounded-full "
                />
                <p className="mx-4 "> PROMT VERSE</p>
              </div>
              <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/assets/images/home.svg"
                  alt="User Avatar"
                  width={50}
                  height={50}
                  className="h-7 w-7 flex-shrink-0 rounded-full"
                />
                <p className="mx-4 hover:text-lg">HOME</p>
                 {/* <p className="mx-4">{data && data.creator.username.slice(0,5)}</p> */}
                </div>
              </Link>
              <Link href="/profile">
              <div className="flex items-center mt-4">
              <Image
                  src="/assets/images/profile.svg"
                  alt="User Avatar"
                  width={50}
                  height={50}
                  className="h-7 w-7 flex-shrink-0 rounded-full"
                />
                 <p className="mx-4 hover:text-lg">{data[0] &&data[0].creator.username}</p>
              </div>
             </Link>
              <Link href="/">
              <div className="flex items-center mt-4">
              <Image
                  src="/assets/images/back.svg"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="h-6 w-6 flex-shrink-0 rounded-full"
                  />
                  
                  <p className="mx-5 hover:text-lg ">BACK</p>
                  </div>
                  </Link>
              
              <div className="flex items-center mt-4">
              <Image
                  src="/assets/images/brief.svg"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="h-6 w-6 flex-shrink-0 rounded-full"
                />
                 <p className="mx-5 hover:text-lg">GRID</p>
              </div>
             
            </div>
            
            <Image
                  src="/assets/images/profile.jpg"
                  alt="User Avatar"
                  width={60}
                  height={60}
                  className="h-8 w-8 flex-shrink-0 rounded-full absolute bottom-0"
            />
           
          </div>
          <div>
            
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard
       data={data}
       handleEdit={handleEdit }
       handleDelete={ handleDelete}/>
    </div>
  );
}

export default  MyProfile
// Dummy dashboard component with content
// Dummy dashboard component with content
const Dashboard = ({ data, handleEdit, handleDelete }) => {
  const array = data
 
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-gray-500 dark:border-neutral-700 bg-black dark:bg-black flex flex-col gap-2 flex-1 w-full h-full">
        RECENT
        <div className="flex gap-2">
          {array&&array.map((item, index) => (
            <div
              key={index}
              className="h-20 w-full rounded-lg bg-gray-900 dark:bg-gray-900 animate-pulse"
            >
              <div className="flex m-1 justify-between mx-3">
              <img src="/assets/icons/delete.svg" alt="profile" className="h-4 w-4 rounded-full" />
              <img src="/assets/icons/edit.svg" alt="profile" className="h-4 w-4 rounded-full" />
              </div>
              <p className="p-2 text-xs"> {item && item.prompt.slice(0,100)}</p>
            </div>
          ))}
        </div>
        ALL
        <div className="flex gap-2 flex-1">
          {array&&array.map((item) => (
            <div
              key={item}
              className="h-full w-full rounded-lg bg-gray-900 dark:bg-neutral-800 "
            >
               <div className="flex m-1 justify-between mx-3">
              <img src="/assets/icons/delete.svg" alt="profile" className="h-6 w-6 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer" onClick={() => handleDelete(item._id)}/>
              <img src="/assets/icons/edit.svg" alt="profile" className="h-6 w-6 rounded-full" />
              </div>
              <p className="p-2 text-sm">{item && item.prompt.slice(0.10)}</p>
              <p className="p-2 text-sm bg-slate-800">
                {item && item.tag}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


