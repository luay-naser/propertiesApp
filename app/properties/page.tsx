// import Card from "../components/home/Card";
// import Link from "next/link";

// interface PropertyType {
//   address: string;
//   area: string;
//   bathrooms: string;
//   build_year: string;
//   description: string;
//   id: string;
//   is_featured: string;
//   main_image: string;
//   name: string;
//   price: string;
//   property_type: string;
//   rooms: string;
// }

// export default async function Properties() {
//   let properties: PropertyType[] = [];

//   try {
//     const res = await fetch(
//       "https://uninfectious-emilia-unmarshaled.ngrok-free.dev/project/real_estate/propreties.php",
//       {
//         headers: {
//           "ngrok-skip-browser-warning": "true",
//         },
//         cache: "no-store", // مهم لتحديث البيانات دائماً
//       }
//     );

//     const data = await res.json();
//     properties = data.data;
//   } catch (error) {
//     console.error("API Error:", error);
//   }

//   return (
//     <section className="px-container py-20">
//       <div className="flex justify-between items-center mb-12 mt-4">
//         <div>
//           <h1 className="font-black text-3xl mb-5">العقارات</h1>
//           <p className="text-gray-500">
//             تصفح مجموعتنا من العقارات الرائعة
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {properties.length === 0 ? (
//           <p className="text-gray-500">لا توجد عقارات حالياً</p>
//         ) : (
//           properties.map((property: PropertyType) => (
//             <Card
//               key={property.id}
//               id={property.id}
//               name={property.name}
//               imageUrl={property.main_image}
//               address={property.address}
//               price={property.price}
//               rooms={property.rooms}
//               baths={property.bathrooms}
//               area={property.area}
//               propType={property.property_type}
//             />
//           ))
//         )}
//       </div>
//     </section>
//   );
// }

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

export default function Properties() {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("/api/properties", {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((response) => {
        setProperties(response.data.data);
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
          <h1 className="font-black text-3xl mb-5">العقارات </h1>
          <p className="text-gray-500">تصفح مجموعتنا من العقارات الرائعة </p>
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
              imageUrl={property.main_image}
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
