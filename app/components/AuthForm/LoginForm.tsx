"use client";
import { loginAxios } from "./AxiosLogic";
import { useState } from "react";
import { useAuthStore } from "@/app/store/authStore";
interface LoginFormProps {
  setShowForm: (value: boolean) => void;
  setIsUser: (value: boolean) => void;
  setSnackBarActive:(value:{show:boolean; text:string})=>void;
}
export default function LoginForm({setShowForm, setIsUser , setSnackBarActive }:LoginFormProps) {
  const [user, setUser] = useState({ email: "", password: "" });
  const isEmpty:boolean = user.email==""|| user.password=="";
  const setUserData= useAuthStore((state)=>state.setUserData)
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
      const user = response.data.user;
            const token:string = response.data.token;
            setUserData(user)
            console.log(user)
            // localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
      setSnackBarActive({ show: true, text: "تم تسجيل الدخول بنجاح" });
      setShowForm(false);
      setTimeout(() => {
        setSnackBarActive({ show: false, text: "" });
        // window.location.reload();
      }, 2000);
      
    } catch (error) {
      console.log(error);
      setSnackBarActive({ show: true, text: "الايميل أو كلمة المرور خاطئة" });
      setTimeout(() => {
        setSnackBarActive({ show: false, text: "" });
      }, 2000);
    }
  }
  return (
    <form className="flex flex-col gap-4"
    onSubmit={(e) => {
          loginHandle();
          e.preventDefault();
          
        }}>
      <input
        type="email"
        placeholder="البريد الإلكتروني"
        required 
                  pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-primary"
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      />
      <input
        type="password"
        placeholder="كلمة المرور"
        required 
                  minLength={8}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-primary"
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      />
      <button
        type="submit"
        className={`  ${isEmpty? "cursor-not-allowed bg-gray-600":"cursor-pointer bg-primary hover:bg-gray-900"} text-white py-2 rounded-lg font-bold  transition duration-300 `}
        disabled={isEmpty}
        
      >
        تسجيل الدخول
      </button>

      <p className="text-center text-gray-600 text-sm">
        لا تملك حسابًا؟{" "}
        <a
          href="#"
          className="text-primary font-bold"
          onClick={() => {
            setIsUser(true);
          }}
        >
          أنشئ حسابًا
        </a>
      </p>
    </form>
  );
}
