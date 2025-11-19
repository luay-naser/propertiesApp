"use client";

import Link from "next/link";
import { useState } from "react";

import SnackBar from "./SnackBar";

import LoginForm from "./AuthForm/LoginForm";
import RegisterForm from "./AuthForm/RegisterForm";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [snackBarActive, setSnackBarActive] = useState({
    show: false,
    text: "",
  });

  const [isUser, setIsUser] = useState(false);

  interface navItem {
    name: string;
  }

  const list: navItem[] = [
    { name: "الرئيسية" },
    { name: "العقارات" },
    { name: "من نحن" },
    { name: "اتصل بنا" },
  ];

  const navList = list.map((inet: navItem) => (
    <Link href={"#"} key={inet.name}>
      <li className="font-bold text-gray-900 transition duration-300 hover:text-primary">
        {inet.name}
      </li>
    </Link>
  ));
  return (
    <>
      {snackBarActive.show && <SnackBar text={snackBarActive.text} />}
      <header className="fixed top-0 backdrop-blur-sm bg-white/80 px-container shadow-md flex justify-between w-full z-30">
        <nav className="py-4 flex justify-between items-center w-full">
          <Link href={"/"}>
            <div className="flex justify-center items-center gap-1">
              <span className="inline text-3xl icon-home text-primary " />
              <h1 className="text-gray-900 font-bold text-3xl transition duration-300 hover:text-primary">
                عقارك
              </h1>
            </div>
          </Link>

          {/* القائمة في الشاشات الكبيرة */}
          <ul className="hidden sm:flex items-center gap-7">
            {navList}
            <Link href={"#"}>
              <li className="bg-primary px-4 py-2 rounded-lg text-white font-bold hover:text-primary transition duration-300 hover:bg-white hover:outline">
                المفضلة
              </li>
            </Link>
            <button
              onClick={() => setShowForm(true)}
              className="bg-gray-900 px-4 py-2 rounded-lg text-white font-bold hover:bg-primary transition duration-300"
            >
              حسابي
            </button>
          </ul>

          {/* زر القائمة في الشاشات الصغيرة */}
          <span
            className={`${
              isActive ? "icon-cross" : "icon-menu"
            } cursor-pointer transition duration-300 text-2xl inline sm:hidden`}
            onClick={() => setIsActive(!isActive)}
          />
        </nav>

        {/* القائمة في الشاشات الصغيرة */}
        <div
          className={`transition duration-300 ${
            isActive ? "inline-block" : "hidden"
          } w-full bg-white sm:hidden fixed top-18 left-0`}
        >
          <ul className="flex flex-col gap-4 border-b border-gray-300 px-4 py-2">
            {navList}
            <Link href={"#"}>
              <li className="text-center bg-primary px-4 py-2 rounded-lg text-white font-bold hover:text-primary transition duration-300 hover:bg-white hover:outline">
                المفضلة
              </li>
            </Link>
            <button
              onClick={() => setShowForm(true)}
              className="bg-gray-900 px-4 py-2 cursor-pointer rounded-lg text-white font-bold hover:bg-primary transition duration-300"
            >
              حسابي
            </button>
          </ul>
        </div>
      </header>

      {/* فورم إنشاء حساب / تسجيل دخول */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md relative shadow-lg">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center mb-4 text-primary">
              إنشاء حساب / تسجيل دخول
            </h2>

            {/* login form */}
            {!isUser && (
              <LoginForm
                setShowForm={setShowForm}
                setIsUser={setIsUser}
                setSnackBarActive={setSnackBarActive}
              />
            )}
            {/* login form */}
            {/* register form */}
            {isUser && (
              <RegisterForm
                setShowform={setShowForm}
                setIsUser={setIsUser}
                setSnackBarActive={setSnackBarActive}
              />
            )}
            {/* register form */}
          </div>
        </div>
      )}
    </>
  );
}
