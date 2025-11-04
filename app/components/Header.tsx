"use client";
import Link from "next/link";
import { useState } from "react";
import React from "react";

export default function Header() {
  const [isAcitve,setIsActive]=React.useState(false)
    interface navItem{
        name:string
    }
    const list:navItem[] =[{name:"الرئيسية"},{name:"العقارات"},{name:"من نحن"},{name:"اتصل بنا"}];
    const navList=list.map((inet:navItem)=>{
return (
    <Link href={"#"} key={inet.name}>
    <li className="font-bold text-gray-900 transition duration-300 hover:text-[var(--primary-color)]">{inet.name}</li>
    </Link>
)
    })
  return (
    <header className="fixed top-0 backdrop-blur-sm bg-white/60 px-[var(--container-padding)] shadow-md flex justify-between w-full">

    <nav className=" py-4 flex justify-between items-center w-full p">
        <Link href={"/"}>
      <div className="flex justify-center items-center gap-1">
        <span className="inline text-3xl icon-home text-[var(--primary-color)] " />
        <h1 className="text-gray-900 font-bold text-3xl transition duration-300 hover:text-[var(--primary-color)]">عقارك</h1>
      </div>
        </Link>
      <ul className=" hidden sm:flex items-center gap-7">
        {navList}
        <Link href={"#"}>
        <li className="bg-[var(--primary-color)] px-4 py-2 rounded-lg text-white font-bold hover:text-[var(--primary-color)] transition duration-300 hover:bg-white hover:outline">المفضلة</li>
        </Link>
      </ul>
      <span className={`${isAcitve?"icon-cross":"icon-menu"} cursor-pointer transition duration-300 text-2xl inline sm:hidden `}
      onClick={()=>{
        
        setIsActive(!isAcitve)
      }}/>
    </nav>
    <div className={ `transition duration-300 ${isAcitve?"inline-block":"hidden"} w-full h-50 bg-white  sm:hidden fixed top-18 left-0` }>
<ul className="flex flex-col gap-4 border-b-1 border-gray-500/50 px-4 py-2">
  {navList}
        <Link href={"#"}>
        <li className="text-center bg-[var(--primary-color)] px-4 py-2 rounded-lg text-white font-bold hover:text-[var(--primary-color)] transition duration-300 hover:bg-white hover:outline">المفضلة</li>
        </Link>
</ul>
    </div>

    </header>
  );
}
