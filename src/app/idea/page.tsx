'use client'

import SvgIcon from "@/components/SvgIcon";
import { Lock, User } from "@phosphor-icons/react";

export default function Idea() {
  return (
    <div className="flex flex-col h-screen bg-[rgb(30, 30, 47)]" style={{
      backgroundImage: `url('/cover2.jpg')`
    }}
    >
      <main className="flex flex-row h-full my-24 mx-80 shadow-2xl rounded-lg">
        <section className='flex w-4/12 justify-center items-center bg-white rounded-s-lg'>
          <form action="" className="flex flex-col justify-center p-24 space-y-6">
            <div className="flex flex-row items-center bg-inherit border-2 border-indigo-950 rounded-full w-full px-6">
              <User size={24} color="black" />
              <input type="text" placeholder="Username" className="bg-inherit px-3 py-4 font-bold text-indigo-950 border-none rounded-full focus:ring-0" />
            </div>
            <div className="flex flex-row items-center bg-inherit border-2 border-indigo-950 rounded-full w-full px-6">
              <Lock size={24} color="black" />
              <input type="text" placeholder="Password" className="bg-inherit px-3 py-4 font-bold text-indigo-950 border-none rounded-full focus:ring-0" />
            </div>
            <div className="flex justify-start items-center space-x-4 pl-4">
              <input type="checkbox" className="bg-inherit border-2  border-indigo-950 h-5 w-5 rounded-full" />
              <label className="text-indigo-950 font-bold">
                Remember Login
              </label>
            </div>
            <button className="flex justify-center bg-indigo-950 items-center rounded-full py-4 w-full px-6 font-medium">
              Sign In
            </button>
          </form>
        </section>
        <section className='flex w-screen justify-center items-start pt-20 bg-indigo-950 rounded-e-lg'>
          <div className="flex flex-col items-center p-24 space-y-3">
            <SvgIcon className="h-40" />
            <h1 className="text-8xl font-semibold">fuse</h1>
            <span className="text-white font-thin text-3xl">Management Central</span>
          </div>
        </section>
      </main>
      <footer className="flex w-screen justify-center items-center h-16 p-4 text-gray-500 font-light">
        Fuse Management Central
      </footer>
    </div>
  )
}