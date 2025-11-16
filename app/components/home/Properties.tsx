export default function Properties() {
  return (
    <section className="px-container py-20">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-black text-3xl mb-5">العقارات المميزة</h1>
          <p className="text-gray-500">مجموعة مميزة من أفضل العقارات</p>
        </div>
        <button className="border border-gray-500/80 px-2 py-2 sm:px-4 sm:py-4  rounded-lg hover:bg-primary hover:text-white transition duration-300] flex items-center gap-2">
          عرض الكل <span className="icon-arrow-left" />
        </button>
      </div>
    </section>
  );
}
