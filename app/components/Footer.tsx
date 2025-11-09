import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-15 px-[var(--container-padding)] border-t border-b-1 border-gray-500/50 pt-10 pb-6 ">
        <div className="flex flex-col items-start gap-4">
          <Link href={"/"}>
            <div className="flex justify-center items-center gap-1">
              <span className="inline text-2xl icon-home text-[var(--primary-color)] " />
              <h3 className="text-gray-900 font-bold text-2xl">عقارك</h3>
            </div>
          </Link>
          <p className="text-gray-500 text-md">
            شريكك الموثوق في العثور على العقار المثالي للإيجار أو البيع.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-gray-800">روابط سريعة</h3>
          <ul className="text-gray-500 flex flex-col gap-3 mt-4">
            <Link href={"#"}>
              <li className="hover:text-[var(--primary-color)]">الرئيسية</li>
            </Link>
            <Link href={"#"}>
              <li className="hover:text-[var(--primary-color)]">عقارات</li>
            </Link>
            <Link href={"#"}>
              <li className="hover:text-[var(--primary-color)]">من نحن</li>
            </Link>
            <Link href={"#"}>
              <li className="hover:text-[var(--primary-color)]">اتصل بنا</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-800">أنواع العقارات </h3>
          <ul className="text-gray-500 flex flex-col gap-3 mt-4">
            <Link href={"#"}>
              <li className="hover:text-[var(--primary-color)]">شقق</li>
            </Link>
            <Link href={"#"}>
              <li className="hover:text-[var(--primary-color)]">منازل</li>
            </Link>
            <Link href={"#"}>
              <li className="hover:text-[var(--primary-color)]">فيلات</li>
            </Link>
            <Link href={"#"}>
              <li className="hover:text-[var(--primary-color)]">تجاري</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-800">اتصل بنا</h3>
          <div className="flex items-center gap-3 mb-3 mt-4">
            <span className="icon-envelope text-[var(--primary-color)]" />
            <p className="text-gray-500">loauy.n.9@gmail.com</p>
          </div>
          <div className="flex items-center gap-3 ">
            <span className="icon-phone text-[var(--primary-color)]" />
            <p className="text-gray-500">905315040730+</p>
          </div>
          <div className="flex gap-4 mt-3">
            <Link href={"#"}>
              <span className="icon-facebook text-gray-500 text-xl hover:text-sky-600 hover:text-2xl transition duration-300" />
            </Link>

            <Link href={"#"}>
              <span className="icon-instagram text-gray-500 text-xl hover:text-sky-600 hover:text-2xl transition duration-300" />
            </Link>

            <Link href={"#"}>
              <span className="icon-linkedin text-gray-500 text-xl hover:text-sky-600 hover:text-2xl transition duration-300" />
            </Link>

            <Link href={"#"}>
              <span className="icon-twitter text-gray-500 text-xl hover:text-sky-600 hover:text-2xl transition duration-300" />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-gray-500 text-center py-6">
        {" "}
        2025 Akark. All rights reserved. ©
      </p>
    </footer>
  );
}
