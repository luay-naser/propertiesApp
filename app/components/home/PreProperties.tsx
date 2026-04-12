"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "./Card";

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

export default function PreProperties() {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("/api/properties");
        const data = await res.json();

        setProperties(data.data || []);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const preProperties = properties.filter(
    (p) => p.is_featured === "1"
  );

  return (
    <section className="px-container py-20">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="font-black text-3xl mb-5">العقارات المميزة</h1>
          <p className="text-gray-500">مجموعة مميزة من أفضل العقارات</p>
        </div>

        <Link href="/properties">
          <button className="border border-gray-500/80 px-2 py-2 sm:px-4 sm:py-4 rounded-lg hover:bg-primary hover:text-white transition duration-300 flex items-center gap-2">
            عرض الكل <span className="icon-arrow-left" />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-gray-500">جاري التحميل...</p>
        ) : preProperties.length === 0 ? (
          <p className="text-gray-500">لا توجد عقارات مميزة حالياً</p>
        ) : (
          preProperties.map((p) => (
            <Card
              key={p.id}
              id={p.id}
              name={p.name}
              imageUrl={p.main_image}
              address={p.address}
              price={p.price}
              rooms={p.rooms}
              baths={p.bathrooms}
              area={p.area}
              propType={p.property_type}
            />
          ))
        )}
      </div>
    </section>
  );
}


// import Link from "next/link";
// import Card from "./Card";

// export default async function PreProperties() {
//     interface PropertyType {
//     address:string;
//     area:string;
//     bathrooms:string;
//     build_year:string;
//     description:string;
//     id:string;
//     is_featured:string;
//     main_image:string;
//     name:string;
//     price:string;
//     property_type:string;
//     rooms:string;

//   }
//   let properties: PropertyType[]  = [];

//   console.log(typeof properties);
//   try{
//  const baseUrl =
//   process.env.VERCEL_URL
//     ? `https://${process.env.VERCEL_URL}`
//     : "http://localhost:3000";

// const res = await fetch(`${baseUrl}/api/properties`, {
//   cache: "no-store",
// });

// const data = await res.json();
//     properties = data.data ;
//   }
//   catch(error){
//     console.error("API Error:", error);
//   }

   
//   const preProperties = properties.filter((p: PropertyType) => p.is_featured === "1");
  

//   console.log(properties);
//   return (
//     <section className="px-container py-20">
//       <div className="flex justify-between items-center mb-12">
//         <div>
//           <h1 className="font-black text-3xl mb-5">العقارات المميزة</h1>
//           <p className="text-gray-500">مجموعة مميزة من أفضل العقارات</p>
//         </div>
//         <Link href="/properties">
//         <button className="border border-gray-500/80 px-2 py-2 sm:px-4 sm:py-4  rounded-lg hover:bg-primary hover:text-white transition duration-300] flex items-center gap-2">
//           عرض الكل <span className="icon-arrow-left" />
//         </button>
//         </Link>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {properties.length === 0?(
//         <p className="text-gray-500">لا توجد عقارات مميزة حالياً</p>
//       ):(
//         preProperties.map((p:PropertyType)=>{
//           return(
            
//              <Card
//              key={p.id}
//             id={p.id}
//             name={p.name}
//             imageUrl={p.main_image}
//             address={p.address}
//             price={p.price}
//             rooms={p.rooms}
//             baths={p.bathrooms}
//             area={p.area}
//             propType={p.property_type}
//           />
          
//           )
//         })
//       )}
//       </div>
//     </section>
//   );
// }
