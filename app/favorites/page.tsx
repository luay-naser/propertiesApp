"use client";
import { useEffect, useState } from "react";
import Card from "../components/home/Card";
import axios from "axios";
interface PropertyType {
  address: string;
  area: string;
  bathrooms: string;
  build_year: string;
  description: string;
  id: string;
  is_featured: string;
  main_image: string;
  name: string;
  price: string;
  property_type: string;
  rooms: string;
}

export default function Favorites() {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      const userId = JSON.parse(localStorage.getItem("user") || "{}").id;
      console.log(userId);
    axios.post(
        "/api/favorites",
        
           {
      "user_id": userId
    },
          
        
      )
      .then((response) => {
        setProperties(response.data.favorites || []);
        console.log("https://uninfectious-emilia-unmarshaled.ngrok-free.dev/project/real_estate/"+response.data.favorites[0].main_image);
        
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log(properties);
  return (
    <section className="px-container py-20">
      <div className="flex justify-between items-center mb-12 mt-4">
        <div>
          <h1 className="font-black text-3xl mb-5">المفضلة</h1>
          <p className="text-gray-500">قائمة العقارات التي قمت باضافتها الى المفضلة </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <Card/>
      <Card/>
      <Card/> */}
        {loading ? (
          <p className="text-gray-500">جاري التحميل...</p>
        ) : (
          properties.map((property) => (
            <Card
              key={property.id}
              id={property.id}
              name={property.name}
              imageUrl={"https://uninfectious-emilia-unmarshaled.ngrok-free.dev/project/real_estate/" +property.main_image}
              address={property.address}
              price={property.price}
              rooms={property.rooms}
              baths={property.bathrooms}
              area={property.area}
              propType={property.property_type}
            />
          ))
        )}
      </div>
    </section>
  );
}
