"use client"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
interface cardProps{
  id:string;
  name:string;
  imageUrl:string;
  address:string;
  price:string;
  rooms:string;
  baths:string;
  area:string;
  propType:string;

}

export default  function  Card({ id, name, imageUrl, address, price, rooms, baths, area, propType }:cardProps) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [loading, setLoading] = useState(false);

    const favoriteHandler = async (e: React.MouseEvent) => {
    e.preventDefault(); // يمنع الانتقال للرابط
    e.stopPropagation();

    if (loading) return;

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const userId:string|null = localStorage.getItem("user")
      let  userId2={id:""};
      if(userId){

         userId2= JSON.parse(userId)
      }else{
        alert("يرجى تسجيل الدخول لإضافة عقار للمفضلة")
        return
      }
      const res = await axios.post(
        "https://uninfectious-emilia-unmarshaled.ngrok-free.dev/project/real_estate/favorite_toggle.php",
        { property_id: id,
          user_id: userId2.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setIsFavorite(!isFavorite);
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert("فشل تحديث المفضلة");
    } finally {
      setLoading(false);
    }
  };
    // const favoriteHandler =  axios.post('https://uninfectious-emilia-unmarshaled.ngrok-free.dev/project/real_estate/favorite_toggle.php',
    //   {
    //     "property_id": id
    //   },
    //   {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         "Content-Type": "application/json",
    //       },
    //     }
    // )
    // .then((response) => {
    //   console.log('Property favorite status toggled:', response.data);
    // })
  return (
    <article className="border border-gray-300  rounded-2xl  shadow-md hover:shadow-lg ">
      <div className="relative w-full h-60 overflow-hidden rounded-t-2xl">
      <Link href={`/properties/${id}`}>
        <Image
          className=" hover:scale-110 transition-all duration-300 object-cover cursor-pointer"
          src={imageUrl}
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          alt="propert"
        />
        </Link>
        <div 
        onClick={favoriteHandler}
         className="bg-gray-200/70 py-2 px-2  rounded-2xl absolute top-4 left-4  flex cursor-pointer">
          <span className={`${isFavorite?"icon-heart text-red-600":"icon-heart-outlined"} text-xl`}  />
        </div>
        <span className="bg-gray-200/90 px-3 py-1/2 rounded-lg absolute right-4 bottom-4">
          {propType}
        </span>
      </div>
      
      <h2 className="mt-6 pr-5 font-bold text-xl">  {name}</h2>
      <div className="text-gray-500 pr-5 mt-2 flex gap-1 items-center">
        <span className="icon-location" />
        {address}
      </div>
      <div className=" px-5 pt-4 ">
        <div className="flex gap-4 pb-4 border-b border-b-gray-300">
          <div className="flex gap-1 items-center text-gray-500">
            <span className="icon-bed"></span>{rooms}
          </div>
          <div className="flex gap-1 items-center text-gray-500">
            <span className="icon-bath"></span>{baths}
          </div>
          <div className="flex gap-1 items-center text-gray-500">
            <span className="icon-square"></span>{area} متر مربع
          </div>
        </div>
      </div>
      <p className="text-primary font-bold text-3xl pr-4 py-4">${price}</p>
    </article>
  );
}