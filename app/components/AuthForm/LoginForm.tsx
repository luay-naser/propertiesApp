"use client";
import { loginAxios } from "./AxiosLogic";
import { useState } from "react";
interface LoginFormProps {
  setShowForm: (value: boolean) => void;
  setIsUser: (value: boolean) => void;
  setSnackBarActive:(value:{show:boolean; text:string})=>void;
}
export default function LoginForm({setShowForm, setIsUser , setSnackBarActive}:LoginFormProps) {
  const [user, setUser] = useState({ email: "", password: "" });

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
  return (
    <form className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="البريد الإلكتروني"
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-primary"
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      />
      <input
        type="password"
        placeholder="كلمة المرور"
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-primary"
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      />
      <button
        type="submit"
        className="bg-primary cursor-pointer text-white py-2 rounded-lg font-bold hover:bg-gray-900 transition duration-300"
        onClick={(e) => {
          loginHandle();
          e.preventDefault();
        }}
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
