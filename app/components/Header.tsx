"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import React from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState({email:"", password:""})

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
      <li className="font-bold text-gray-900 transition duration-300 hover:text-[var(--primary-color)]">
        {inet.name}
      </li>
    </Link>
  ));
  // function usreHandle(){
  //   axios.post('https://lola-uncompressible-kailee.ngrok-free.dev/users_api/users.php', 
  //     {
  //       name: "luay ",
  //       passowrd:"1547887997"
  //     }
  //   )
  // .then(function (response) {
  //   // handle success
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // }

  return (
    <>
      <header className="fixed top-0 backdrop-blur-sm bg-white/80 px-[var(--container-padding)] shadow-md flex justify-between w-full z-30">
        <nav className="py-4 flex justify-between items-center w-full">
          <Link href={"/"}>
            <div className="flex justify-center items-center gap-1">
              <span className="inline text-3xl icon-home text-[var(--primary-color)] " />
              <h1 className="text-gray-900 font-bold text-3xl transition duration-300 hover:text-[var(--primary-color)]">
                عقارك
              </h1>
            </div>
          </Link>

          {/* القائمة في الشاشات الكبيرة */}
          <ul className="hidden sm:flex items-center gap-7">
            {navList}
            <Link href={"#"}>
              <li className="bg-[var(--primary-color)] px-4 py-2 rounded-lg text-white font-bold hover:text-[var(--primary-color)] transition duration-300 hover:bg-white hover:outline">
                المفضلة
              </li>
            </Link>
            <button
              onClick={() => setShowForm(true)}
              className="bg-gray-900 px-4 py-2 rounded-lg text-white font-bold hover:bg-[var(--primary-color)] transition duration-300"
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
              <li className="text-center bg-[var(--primary-color)] px-4 py-2 rounded-lg text-white font-bold hover:text-[var(--primary-color)] transition duration-300 hover:bg-white hover:outline">
                المفضلة
              </li>
            </Link>
            <button
              onClick={() => setShowForm(true)}
              className="bg-gray-900 px-4 py-2 rounded-lg text-white font-bold hover:bg-[var(--primary-color)] transition duration-300"
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
            <h2 className="text-2xl font-bold text-center mb-4 text-[var(--primary-color)]">
              إنشاء حساب / تسجيل دخول
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-[var(--primary-color)]"
                onChange={(e)=>{
                  setUser({...user, email:e.target.value})
                }}
              />
              <input
                type="password"
                placeholder="كلمة المرور"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-[var(--primary-color)]"
                onChange={(e)=>{
                  setUser({...user, password:e.target.value})
                }}
              />
              <button
                type="submit"
                className="bg-[var(--primary-color)] text-white py-2 rounded-lg font-bold hover:bg-gray-900 transition duration-300"
                
              >
                تسجيل الدخول
              </button>
              <p className="text-center text-gray-600 text-sm">
                لا تملك حسابًا؟{" "}
                <a href="#" className="text-[var(--primary-color)] font-bold">
                  أنشئ حسابًا
                </a>
              </p>
            </form>
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
//         <li className="font-bold text-gray-900 transition duration-300 hover:text-[var(--primary-color)]">
//           {inet.name}
//         </li>
//       </Link>
//     );
//   });
//   return (
//     <header className="fixed top-0 backdrop-blur-sm bg-white/80 px-[var(--container-padding)] shadow-md flex justify-between w-full z-30">
//       <nav className=" py-4 flex justify-between items-center w-full p">
//         <Link href={"/"}>
//           <div className="flex justify-center items-center gap-1">
//             <span className="inline text-3xl icon-home text-[var(--primary-color)] " />
//             <h1 className="text-gray-900 font-bold text-3xl transition duration-300 hover:text-[var(--primary-color)]">
//               عقارك
//             </h1>
//           </div>
//         </Link>
//         <ul className=" hidden sm:flex items-center gap-7">
//           {navList}
//           <Link href={"#"}>
//             <li className="bg-[var(--primary-color)] px-4 py-2 rounded-lg text-white font-bold hover:text-[var(--primary-color)] transition duration-300 hover:bg-white hover:outline">
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
//             <li className="text-center bg-[var(--primary-color)] px-4 py-2 rounded-lg text-white font-bold hover:text-[var(--primary-color)] transition duration-300 hover:bg-white hover:outline">
//               المفضلة
//             </li>
//           </Link>
//         </ul>
//       </div>
//     </header>
//   );
// }
