"use client";
import { useState } from "react";
import { registerAxios } from "./AxiosLogic";

interface LoginFormProps {
setShowform: (value: boolean) => void;
setIsUser: (value: boolean) => void;
setSnackBarActive:(value:{show:boolean; text:string})=>void;
}
export default function RegisterForm({setShowform, setIsUser , setSnackBarActive}:LoginFormProps){
      
  const [newUser, setNewUser] = useState({
    first: "",
    last: "",
    city: "",
    phone: "",
    email: "",
    password: "",
  });
  interface formType {
    first_name: string;
    last_name: string;
    city: string;
    phone: string;
    email: string;
    password: string;
  }
  const isEmpty:boolean = newUser.first == ""|| newUser.last==""|| newUser.email==""|| newUser.city==""|| newUser.password==""|| newUser.phone=="" ;
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
            const user = response.data.user;
            const token:string = response.data.token;
            console.log(user)
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            setSnackBarActive({ show: true, text: "لقد تم انشاء حسابك بنجاح " });
            setTimeout(() => {
              setSnackBarActive({ show: false, text: "" });
            }, 2000);
            setShowform(false);
          } catch (error) {
            console.log(error);
          }
        }
      
    return(
        <>
        <form className="flex flex-col gap-4"
        onSubmit={(e) => {
                    userHandle();
                    e.preventDefault();
                  }}>
                <input
                  type="text"
                  placeholder="الاسم الأول"
                  required 
                  minLength={3}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-primary"
                  onChange={(e) => {
                    setNewUser({ ...newUser, first: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="اسم العائلة"
                  required 
                  minLength={3}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-primary"
                  onChange={(e) => {
                    setNewUser({ ...newUser, last: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="المدينة "
                  required 
                  minLength={3}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-primary"
                  onChange={(e) => {
                    setNewUser({ ...newUser, city: e.target.value });
                  }}
                />
                <input
                  type="number"
                  placeholder="رقم الهاتف "
                  minLength={8}
                  pattern="^[0-9]{7,15}$"
                  required 
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-primary"
                  onChange={(e) => {
                    setNewUser({ ...newUser, phone: e.target.value });
                  }}
                />
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  required 
                  pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-primary"
                  onChange={(e) => {
                    setNewUser({ ...newUser, email: e.target.value });
                  }}
                />
                <input
                  type="password"
                  placeholder="كلمة المرور"
                  required 
                  minLength={8}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-primary"
                  onChange={(e) => {
                    setNewUser({ ...newUser, password: e.target.value });
                  }}
                />
                <button
                  type="submit"
                  className= {`  ${isEmpty? "cursor-not-allowed bg-gray-600":"cursor-pointer bg-primary hover:bg-gray-900"} text-white py-2 rounded-lg font-bold  transition duration-300 `}
                  disabled={isEmpty}
                  
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
        </>
    )
}