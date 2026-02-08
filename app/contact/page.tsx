import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
export default function contact() {
  return (
    <section className="px-container py-26 text-center">
      <h1 className="text-5xl font-bold mb-6">اتصل بنا</h1>
      <p className="text-gray-600 text-xl">
        هل لديك أسئلة؟ يسعدنا التواصل معك. أرسل لنا رسالة وسنرد عليك في أقرب وقت
        ممكن.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5 mt-12">
        <article className=" border border-sky-700/40 py-8 px-10 rounded-xl min-w-52">
          <div className="  p-4 bg-sky-700/10 rounded-full inline-block">
            <FaWhatsapp size={30} color="rgb(71, 71, 233)" />
          </div>
          <h4 className="text-xl font-bold mt-4 mb-2">واتساب</h4>
          <p className="text-gray-600 mb-3 mt-4">
            {" "}
            للتواصل معنا عبر خدمة دردشة واتساب
          </p>
          <a
          className="text-sky-700"
            href="https://wa.me/905315040730"
            target="_blank"
            rel="noopener noreferrer"
          >
            تواصل معنا
          </a>
        </article>
        <article className=" border border-sky-700/40 py-8 px-10 rounded-xl min-w-52">
          <div className="  p-4 bg-sky-700/10 rounded-full inline-block">
            <MdOutlineEmail size={30} color="rgb(71, 71, 233)" />
          </div>
          <h4 className="text-xl font-bold mt-4 mb-2">البريد الإلكتروني</h4>
          <p className="text-gray-600 mb-3 mt-4">
            {" "}
            للتواصل معنا عبر البريد الإلكتروني
          </p>
          <a
          className="text-sky-700"
            href="mailto:louay.n.9@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            louay.n.9@gmail.com
          </a>
        </article>
        <article className=" border border-sky-700/40 py-8 px-10 rounded-xl ">
          <div className="  p-4 bg-sky-700/10 rounded-full inline-block">
            <FiPhone size={30} color="rgb(71, 71, 233)" />
          </div>
          <h4 className="text-xl font-bold mt-4 mb-2">الهاتف</h4>
          <p className="text-gray-600 mb-3 mt-4">
            {" "}
            للتواصل معنا عبر الهاتف
          </p>
          <a
          className="text-sky-700"
            href="tel:+905315040730"
            target="_blank"
            rel="noopener noreferrer"
          >
            اتصل بنا
          </a>
        </article>
    
      </div>
    </section>
  );
}
