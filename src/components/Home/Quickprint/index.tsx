"use client";
import Image from "next/image";

const QuickPicks = () => {
  const items = [
    {
      badge: "A4 Printing",
      badgeColor: "bg-orange-500",
      title: "A4 Printouts",
      desc: "a4 print outs with corner stapling finishing",
      img: "/images/quickpicks/close-up-butterfly-glass-dome.jpg",
    },
    {
      badge: "PLAN PRINTING",
      badgeColor: "bg-blue-500",
      title: "Plan Print Outs",
      desc: "Engineering prints, large format prints: A0, A1, A2",
      img: "/images/quickpicks/close-up-butterfly-glass-dome.jpg",
    },
    {
      badge: "SPIRAL BINDING",
      badgeColor: "bg-pink-600",
      title: "Spiral Binding (A4)",
      desc: "a4 print outs with spiral binding",
      img: "/images/quickpicks/close-up-butterfly-glass-dome.jpg",
    },
    {
      badge: "BUSINESS CARDS",
      badgeColor: "bg-yellow-600",
      title: "Business Cards",
      desc: "Business Cards for standard printing. Marketing Material",
      img: "/images/quickpicks/close-up-butterfly-glass-dome.jpg",
    },
  ];

  return (
    <section className="bg-IcyBreeze dark:bg-darklight">
  <h2 className="text-4xl font-bold text-center mb-10">
    Quick <span className="text-sky-500">Picks</span>
  </h2>

  {/* Increased card gap */}
  <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mx-8">
    {items.map((item, index) => (
      <div
        key={index}
        className="
          bg-white rounded-xl shadow-lg p-5 border hover:shadow-2xl transition relative border-blue-700
          flex flex-col h-[430px] 
          w-full max-w-[660px] mx-auto 
        "
      >
        {/* Badge */}
        <span
          className={`absolute top-3 left-3 text-xs text-white px-3 py-1 rounded ${item.badgeColor}`}
        >
          {item.badge}
        </span>

        {/* Image */}
        <Image
          src={item.img}
          alt={item.title}
          width={300}
          height={200}
          className="w-full rounded-md mb-4 mt-6 h-[190px] object-cover"
        />

        {/* Title + Description */}
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-sky-700">
            {item.title}
          </h3>

          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>

        {/* Button fixed at bottom */}
        <button
          className="w-full mt-4 bg-sky-500 text-white py-3 rounded-lg font-medium 
                     flex items-center justify-center gap-2 hover:bg-sky-600 transition"
        >
          <i className="bi bi-printer"></i> Print Now
        </button>
      </div>
    ))}
  </div>

    </section>
  );
};

export default QuickPicks;
