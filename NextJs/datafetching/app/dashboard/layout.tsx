import Link from "next/link";
import React from "react";
// import Link from 
// import {Link}
interface DashboardLayoutProps{
    children:React.ReactNode
}
const DashboardLayout: React.FC<DashboardLayoutProps> = (props)=>{
    return <>
        <div className="nav flex justify-between px-10 py-4 bg-slate-800 text-white">
            <h2>Logo</h2>
            <ul className="flex space-x-3">
                <li> <Link href="/dashboard"> Dashboard</Link></li>
                <li> <Link href="/dashboard/todos"> Todos</Link></li>
                <li> <Link href="/dashboard/users"> Users</Link></li>
                <li> <Link href="/dashboard/profile"> Profile</Link></li>

            </ul>
        </div>

        <div className="flex">
            <div className="sidebar bg-black h-screen w-[15vw] text-white shadow-lg">
                <ul className="flex flex-col space-y-4 pt-8 px-2 text-2xl">
                <li> <Link href="/dashboard"> Dashboard</Link></li>
                <li> <Link href="/dashboard/todos"> Todos</Link></li>
                <li> <Link href="/dashboard/users"> Users</Link></li>
                <li> <Link href="/dashboard/profile"> Profile</Link></li>
                </ul>
            </div>
        <div className="p-10 overflow-auto max-h-screen w-full">
            
            {props.children}
          
           
        </div>
        </div>
    </>
}

export default DashboardLayout;