"use client";
import { useEffect, useState } from "react"
import { singOutAxios } from "./AuthForm/AxiosLogic";
interface userType{
    id:number;
    first_name:string;
    last_name:string;
    email:string;
    phone?:string;
    city?:string;
}


export default function Profail(){
    const [userInfo, setUserInfo] = useState<userType | null>(null);
    useEffect(() => {
      const data = localStorage.getItem("user");
      if (data) {
        const parsedUser: userType = JSON.parse(data);
        setUserInfo(parsedUser);
      }
    }, []);
    
    return (
        <>
        <section className="flex flex-col">

        <div className="grid grid-cols-2 gap-5 py-5">
          <p className="font-bold">الاسم: <span className="text-gray-700 mr-2">{userInfo?.first_name + " " +userInfo?.last_name }</span> </p>
          <p className="font-bold">الإيميل: <span className="text-gray-700 mr-2">{userInfo?.email}</span></p>
          <p className="font-bold">المدينة: <span className="text-gray-700 mr-2">{userInfo?.city}</span></p>
          <p className="font-bold">الهاتف: <span className="text-gray-700 mr-2">{userInfo?.phone}</span></p>
        </div>
        <button
        type="submit"
        className="cursor-pointer bg-primary hover:bg-gray-900 text-white py-2 px-4 rounded-lg font-bold  transition duration-300"
        onClick={async (e)=>{
          e.preventDefault();
          try {
           const date= localStorage.getItem("user");
           const userId= date ? JSON.parse(date).id : null;
            await singOutAxios(userId);
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            window.location.reload();
          } catch (error) {
            console.log(error);
          }
        }}>تسجيل الخروج</button>
        </section>
        
        </>
    )
}