import React from 'react'
import {  SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import ThemeToggle from './theme-toggle';
import { appConfig } from '@/configuration/app.config';
const Header = () => {
  return (
    <header className=" navbar bg-base-100 flex flex-row w-full">
       <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">{appConfig.title}</a>
  </div>
        <div className="mx-3">
    <ThemeToggle/>
        </div>
      <div className="flex mx-2">
    <SignedOut>
      <SignInButton mode="modal">
        <button className="btn btn-ghost text-xl"> Sign In</button>
      </SignInButton>
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
      </div>


  </header>
  )
}

export default Header