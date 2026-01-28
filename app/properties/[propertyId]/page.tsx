
import axios from "axios";
import Image from "next/image";


export default async function PropertyPage({
   params,
}: {
  params: { propertyId: string };
}) {
  const { propertyId } = await params;

  const res = await axios.get(
    `https://uninfectious-emilia-unmarshaled.ngrok-free.dev/project/real_estate/propreties.id.php?id=${propertyId}`,
    {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    }
  );

  const property = res.data.data;
  console.log(property);
  console.log( property.images);
  // const imagesArray =  JSON.parse(property.images);
  const images = property.images.map((image:string)=>{
    return (
      <Image key={image}
          src={image}
          alt="House"
          width={600}
          height={400}
          className="w-full md:w-1/2 h-auto object-cover rounded-xl"
          priority
        />
    )
  })
  
  return (
    <section className="px-container py-24">
      {/* الصورة الرئيسية */}
      <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
        <Image
          src={property.main_image}
          alt="House"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* الصور الثانوية */}
      <div className="py-4 flex flex-col md:flex-row gap-4 w-full">
        {images}
        {/* <Image
          src={property.images[0]}
          alt="House"
          width={600}
          height={400}
          className="w-full md:w-1/2 h-auto object-cover rounded-xl"
          priority
        />

        <Image
          src={property.images[1]}
          alt="House"
          width={600}
          height={400}
          className="w-full md:w-1/2 h-auto object-cover rounded-xl"
          priority
        /> */}
      </div>
      <div className="py-10">
        <h1 className="font-black text-3xl mb-5 "> {property.name} </h1>
        <div className="text-gray-500  mt-2 flex gap-1 items-center text-xl px-4">
          <span className="icon-location" />
          {property.address}
        </div>
        <p className="text-primary font-bold text-4xl leading py-4">${property.price}</p>
        {/* property information */}
        <div className="bg-sky-200/30 rounded-xl py-4 px-2">
          <div className=" px-5 pt-4 ">
            <div className="flex gap-4 pb-4 ">
              <div className="flex gap-2 items-center text-gray-500">
                <span className="icon-bed text-sky-500"></span>{property.rooms} غرف نوم
              </div>
              <div className="flex gap-2 items-center text-gray-500">
                <span className="icon-bath text-sky-500"></span>{property.bathrooms} حمامات
              </div>
              <div className="flex gap-2 items-center text-gray-500">
                <span className="icon-square text-sky-500"></span>{property.area}م ²
              </div>
              <div className="flex gap-2 items-center text-gray-500">
                <span className="icon-calendar-o text-sky-500"></span>{property.build_year} سنة
                البناء
              </div>
            </div>
          </div>
        </div>
      {/* property information */}
      <div className="mt-8 border border-gray-400 py-6 px-4 rounded-xl">
        <h3 className="font-bold mb-4 text-xl">تفاصيل العقار</h3>
        <p className="text-gray-600">{property.description}</p>
      </div>
      <div className="mt-8 border border-gray-400 py-6 px-4 rounded-xl">
        <h3 className="font-bold mb-4 text-xl"> مميزات</h3>
        <ul className="grid grid-cols-2">
          <li className="text-gray-600 mb-2"> <span className="icon-circle text-sky-500 text-[10px] ml-2"/>مسبح خاص</li>
          <li className="text-gray-600 mb-2"><span className="icon-circle text-sky-500 text-[10px] ml-2"/>حديقة واسعة</li>
          <li className="text-gray-600 mb-2"><span className="icon-circle text-sky-500 text-[10px] ml-2"/>موقف سيارات مغطى</li>
          <li className="text-gray-600 mb-2"><span className="icon-circle text-sky-500 text-[10px] ml-2"/>نظام أمني متقدم</li>
          <li className="text-gray-600 mb-2"><span className="icon-circle text-sky-500 text-[10px] ml-2"/>شرفة تطل على البحر</li>
        </ul>
      </div>
      </div>
    </section>
  );
}
