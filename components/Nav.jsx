"use client";
import React, { useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () =>{
  const {data:session} = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders=async () => {
      const res = await getProviders();
      setProviders(res);
    } 
      setUpProviders();
      
  }, []);
    
    
  return (
    <nav className="flex flex-between   w-4/5   shadow-lg shadow-gray-700 rounded-full p-2 mt-1 px-4 md:mx-28 mx-8 fixed bg-gradient-to-b from-slate-800 to-slate-900">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={100}
          height={150}
          className="object-contain rounded-l-3xl"
        />
        
      </Link>
          {/* Desktop navigation's */}
          <div>
          <p className="text-white text-center text-lg">
        {" "}
        Discover & Share
    
        <span className="orange_gradient text-center text-lg"> Best AI Prompts </span>
          </p>
          </div> 
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="rounded-full text-white text-sm  px-6 py-3 bg-gradient-to-b from-slate-800 to-slate-900 shadow-lg shadow-slate-600 h-12 font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ... hover:shadow-xl hover:shadow-white">
              Create Post
            </Link>
            <button type="button" className="text-primary-orange rounded-full  p-3 px-6 py-3 bg-gradient-to-b from-slate-800 to-slate-900 shadow-lg shadow-slate-600 h-12 font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ... hover:shadow-xl hover:shadow-white" onClick={signOut}>
              Sign Out
            </button>
            <Link href="/profile" className="rounded-full">
              <Image
                              src="/assets/images/profile.jpg"
                width={40}
                height={40}
                className="rounded-full h-10 w-10 mt-1"
                alt="profile"
              ></Image>
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
          </div>
          
          {/* mobile nav */}
          <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};
 
export default Nav;
