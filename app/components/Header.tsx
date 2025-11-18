"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import SnackBar from "./SnackBar";
import { loginAxios, registerAxios } from "./AuthForm/AxiosLogic";
import LoginForm from "./AuthForm/LoginForm";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [snackBarActive, setSnackBarActive] = useState({
    show: false,
    text: "",
  });

  const [user, setUser] = useState({ email: "", password: "" });
  const [newUser, setNewUser] = useState({
    first: "",
    last: "",
    city: "",
    phone: "",
    email: "",
    password: "",
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
  interface formType {
    first_name: string;
    last_name: string;
    city: string;
    phone: string;
    email: string;
    password: string;
  }
  const userForm: formType = {
    first_name: newUser.first,
    last_name: newUser.last,
    city: newUser.city,
    phone: newUser.phone,
    email: newUser.email,
    password: newUser.password,
  };
  async function userHandle() {
    try {
      const response = await registerAxios(userForm);
      console.log(response);
      setSnackBarActive({ show: true, text: "لقد تم انشاء حسابك بنجاح " });
      setTimeout(() => {
        setSnackBarActive({ show: false, text: "" });
      }, 2000);
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  }
  // login logic
  interface loginType {
    email: string;
    password: string;
  }
  const loginForm: loginType = {
    email: user.email,
    password: user.password,
  };
  async function loginHandle() {
    try {
      const response = await loginAxios(loginForm);
      console.log(response);
      setSnackBarActive({ show: true, text: "تم تسجيل الدخول بنجاح" });
      setTimeout(() => {
        setSnackBarActive({ show: false, text: "" });
        setShowForm(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

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
              <LoginForm setShowform= {setShowForm} setIsUser={setIsUser}/>
            )}
            {/* login form */}
            {/* register form */}
            {isUser && (
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="الاسم الأول"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-primary"
                  onChange={(e) => {
                    setNewUser({ ...newUser, first: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="اسم العائلة"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-primary"
                  onChange={(e) => {
                    setNewUser({ ...newUser, last: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="المدينة "
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-primary"
                  onChange={(e) => {
                    setNewUser({ ...newUser, city: e.target.value });
                  }}
                />
                <input
                  type="number"
                  placeholder="رقم الهاتف "
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-primary"
                  onChange={(e) => {
                    setNewUser({ ...newUser, phone: e.target.value });
                  }}
                />
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-primary"
                  onChange={(e) => {
                    setNewUser({ ...newUser, email: e.target.value });
                  }}
                />
                <input
                  type="password"
                  placeholder="كلمة المرور"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-primary"
                  onChange={(e) => {
                    setNewUser({ ...newUser, password: e.target.value });
                  }}
                />
                <button
                  type="submit"
                  className="bg-primary cursor-pointer text-white py-2 rounded-lg font-bold hover:bg-gray-900 transition duration-300"
                  onClick={(e) => {
                    userHandle();
                    e.preventDefault();
                  }}
                >
                  انشاء حساب
                </button>
                <p className="text-center text-gray-600 text-sm">
                  تملك حسابًا؟{" "}
                  <a
                    href="#"
                    className="text-primary font-bold"
                    onClick={() => {
                      setIsUser(false);
                    }}
                  >
                    تسجيل دخول
                  </a>
                </p>
              </form>
            )}
            {/* register form */}
          </div>
        </div>
      )}
    </>
  );
}

// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import React from "react";

// export default function Header() {
//   const [isAcitve, setIsActive] = React.useState(false);
//   interface navItem {
//     name: string;
//   }
//   const list: navItem[] = [
//     { name: "الرئيسية" },
//     { name: "العقارات" },
//     { name: "من نحن" },
//     { name: "اتصل بنا" },
//   ];
//   const navList = list.map((inet: navItem) => {
//     return (
//       <Link href={"#"} key={inet.name}>
//         <li className="font-bold text-gray-900 transition duration-300 hover:text-primary">
//           {inet.name}
//         </li>
//       </Link>
//     );
//   });
//   return (
//     <header className="fixed top-0 backdrop-blur-sm bg-white/80 px-container shadow-md flex justify-between w-full z-30">
//       <nav className=" py-4 flex justify-between items-center w-full p">
//         <Link href={"/"}>
//           <div className="flex justify-center items-center gap-1">
//             <span className="inline text-3xl icon-home text-primary " />
//             <h1 className="text-gray-900 font-bold text-3xl transition duration-300 hover:text-primary">
//               عقارك
//             </h1>
//           </div>
//         </Link>
//         <ul className=" hidden sm:flex items-center gap-7">
//           {navList}
//           <Link href={"#"}>
//             <li className="bg-primary px-4 py-2 rounded-lg text-white font-bold hover:text-primary transition duration-300 hover:bg-white hover:outline">
//               المفضلة
//             </li>
//           </Link>
//         </ul>
//         <span
//           className={`${
//             isAcitve ? "icon-cross" : "icon-menu"
//           } cursor-pointer transition duration-300 text-2xl inline sm:hidden `}
//           onClick={() => {
//             setIsActive(!isAcitve);
//           }}
//         />
//       </nav>
//       <div
//         className={`transition duration-300 ${
//           isAcitve ? "inline-block" : "hidden"
//         } w-full h-50 bg-white  sm:hidden fixed top-18 left-0`}
//       >
//         <ul className="flex flex-col gap-4 border-b-1 border-gray-500/50 px-4 py-2">
//           {navList}
//           <Link href={"#"}>
//             <li className="text-center bg-primary px-4 py-2 rounded-lg text-white font-bold hover:text-primary transition duration-300 hover:bg-white hover:outline">
//               المفضلة
//             </li>
//           </Link>
//         </ul>
//       </div>
//     </header>
//   );
// }
