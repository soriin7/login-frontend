'use client'

import SvgIcon from "@/components/SvgIcon"
import { User, Lock } from "@phosphor-icons/react"

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex flex-row h-full">
        <section className='flex w-screen justify-end items-center'>
          <div className="flex flex-col items-center p-24 space-y-3">
            <SvgIcon className="h-28" />
            <h1 className="text-6xl font-semibold">fuse</h1>
            <span className="text-gray-500 font-light text-xl">Management Central</span>
          </div>
        </section>
        <section className='flex w-screen justify-start items-center'>
          <form action="" className="flex flex-col justify-center p-24 space-y-6">
            <div className="flex flex-row items-center bg-[#181825] rounded-full w-full px-6">
              <User size={24} />
              <input type="text" placeholder="Username" className="bg-inherit px-3 py-6 text-bold border-none rounded-full focus:ring-0" />
            </div>
            <div className="flex flex-row items-center bg-[#181825] rounded-full w-full px-6">
              <Lock size={24} />
              <input type="text" placeholder="Password" className="bg-inherit px-3 py-6 text-bold border-none rounded-full focus:ring-0" />
            </div>
            <div className="flex justify-center items-center space-x-4">
              <input type="checkbox" className="bg-[#27293D] h-5 w-5 rounded-full border-none" />
              <label>
                Remember Login
              </label>
            </div>
            <button className="flex justify-center bg-gradient-to-tr from-[#00BA8F] to-[#0647C6] items-center rounded-full py-6 w-full px-6 font-medium">
              Sign In
            </button>
          </form>
        </section>
      </main>
      <footer className="flex w-screen justify-center items-center h-16 p-4 text-gray-500 font-light">
        Fuse Management Central
      </footer>
    </div>
  )
}
