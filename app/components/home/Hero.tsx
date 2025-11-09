import Image from "next/image"
export default function Hero(){
    return(
<section className="relative w-full h-screen flex items-center justify-center bg-slate-900/60">
  <Image
    src="/siteImages/heroImage.jpg"
    alt="hero image"
    fill
    className="object-cover -z-10"
  />

  <div className="text-center px-4 md:px-10">
    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
      ابحث عن منزل أحلامك
    </h1>
    <p className="text-white text-lg sm:text-xl md:text-2xl mb-14">
      اكتشف العقار المثالي من مجموعتنا الواسعة من المنازل والشقق والمساحات التجارية
    </p>

    <div className="w-full max-w-5xl mx-auto bg-white py-4 px-3 md:py-6 md:px-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 shadow-lg">
      
      {/* زر البحث */}
      <button className=" flex items-center gap-1 bg-[var(--primary-color)] text-white py-3 px-10 rounded-xl text-lg md:text-xl w-full md:w-auto">
        ابحث <span className="icon-search" />
      </button>

      {/* العنصر الأول */}
      <div className="border border-gray-400/60 py-2 px-4 rounded-xl flex items-center justify-between w-full md:w-1/3">
        <label htmlFor="نوع1" className="whitespace-nowrap">نوع العقار</label>
        <select
          id="نوع1"
          name="نوع العقار"
          defaultValue=""
          className="bg-transparent text-right outline-none "
        >
          <option value="" disabled hidden></option>
          <option value="شقة">شقة</option>
          <option value="منزل">منزل</option>
        </select>
      </div>

      {/* العنصر الثاني */}
      <div className="border border-gray-400/60 py-2 px-4 rounded-xl flex items-center justify-between w-full md:w-1/3">
        <label htmlFor="مدينة" className="whitespace-nowrap">المدينة</label>
        <select
          id="مدينة"
          name="المدينة"
          defaultValue=""
          className="bg-transparent text-right outline-none"
        >
          <option value="" disabled hidden></option>
          <option value="إسطنبول">إسطنبول</option>
          <option value="أنقرة">أنقرة</option>
        </select>
      </div>

      {/* العنصر الثالث */}
      <div className="border border-gray-400/60 py-2 px-4 rounded-xl flex items-center justify-between w-full md:w-1/3">
        <label htmlFor="السعر" className="whitespace-nowrap">السعر</label>
        <select
          id="السعر"
          name="السعر"
          defaultValue=""
          className="bg-transparent text-right outline-none"
        >
          <option value="" disabled hidden></option>
          <option value="100000">100,000 TL</option>
          <option value="200000">200,000 TL</option>
        </select>
      </div>

    </div>
  </div>
</section>

    )
}