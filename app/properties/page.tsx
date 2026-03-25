"use client";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import Card from "../components/home/Card";
import Link from "next/link";

export default function Properties() {
  const [properties, setProperties] = useState<any[]>([]);
  useEffect(() => {
    axios.get(
        "/api/propereties",
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      )
      .then((response) => {
        setProperties(response.data.data);
      });
  }, []);
  console.log(properties)
  return (
    <section className="px-container py-20">
      <div className="flex justify-between items-center mb-12 mt-4">
        <div>
          <h1 className="font-black text-3xl mb-5">العقارات </h1>
          <p className="text-gray-500">تصفح مجموعتنا من العقارات الرائعة </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <Card/>
      <Card/>
      <Card/> */}
        {properties.map((property) => (
          

          <Card
            key={property.id}
            id={property.id}
            name={property.name}
            imageUrl={property.main_image}
            address={property.address}
            price={property.price}
            rooms={property.rooms}
            baths={property.bathrooms}
            area={property.area}
            propType={property.property_type}
          />
         
        ))}
      </div>
    </section>
  );
}
