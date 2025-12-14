import Card from "./Card";

export default function Properties() {
  return (
    <section className="px-container py-20">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="font-black text-3xl mb-5">العقارات المميزة</h1>
          <p className="text-gray-500">مجموعة مميزة من أفضل العقارات</p>
        </div>
        <button className="border border-gray-500/80 px-2 py-2 sm:px-4 sm:py-4  rounded-lg hover:bg-primary hover:text-white transition duration-300] flex items-center gap-2">
          عرض الكل <span className="icon-arrow-left" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      <Card/>
      <Card/>
      <Card/>
      </div>
    </section>
  );
}
