const Contact = () => {
  return (
    <section className="max-w-4xl ml-20 pt-6 pb-12 px-2">
      <h2 className="text-3xl font-bold items-center gap-2 mb-2">
        <span> 👋</span> Contact
      </h2>
      <hr className="w-[1000px] border-t border-gray-600 mb-6" />

      <ul className="space-y-4 text-[17px] leading-relaxed">
        <li>
          ✉️ <a href="mailto:yetwin05@gm.gist.ac.kr" className="text-blue-500 hover:underline">yetwin05@gm.gist.ac.kr</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;