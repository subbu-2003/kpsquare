"use client";

import { useState } from "react";
import Image from "next/image";


const Printpage = () => {
  const [printType, setPrintType] = useState("Grayscale");
  const [printSize, setPrintSize] = useState("~A4");
  const [printMedia, setPrintMedia] = useState("Copier ~75gsm");
  const [printSide, setPrintSide] = useState("Double Side");
  const [pageCount, setPageCount] = useState(1);
  const [bindingType, setBindingType] = useState("");
  const [openBinding, setOpenBinding] = useState(true);
const [bindingColor, setBindingColor] = useState("Blue");
const [coverPage, setCoverPage] = useState("No Cover Page");
const [bindingOrientation, setBindingOrientation] = useState("Portrait");

const handleSendWhatsApp = () => {
  const message = `
📄 *Print & Binding Request*

🖨️ *Printing Specifications*
• ${printType} Print Out
• ${printSide}
• ${printSize}, ${printMedia}
• ${pageCount} Pages

📚 *Binding Specifications*
• Color: ${bindingColor || "Blue"}
• Type: ${bindingType || "Not selected"}
• Cover Page: ${coverPage || "No Cover Page"}
• Orientation: ${bindingOrientation || "Portrait"}

💬 Please confirm price and next steps.
  `.trim();

  const phoneNumber = "917502802800"; // ← replace with your WhatsApp number
  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
    "_blank"
  );
};



const bindingOptions = [
  { id: "Loose Sheets", label: "Loose Sheets", image: "/images/services/Loose Sheets.avif" },
  { id: "Corner Stapling", label: "Corner Stapling", image: "/images/services/Corner Stapling.avif" },
  { id: "Spiral Binding", label: "Spiral Binding", image: "/images/services/Metal Spiral Binding.avif" },
  { id: "Wire Binding", label: "Wire Binding", image: "/images/services/Wire-O Binding.avif" },
  { id: "Hard Binding", label: "Hard Binding", image: "/images/services/Hard Binding.jpg" },
  { id: "Soft Binding", label: "Soft Binding", image: "/images/services/Soft Binding.jpg" },
  { id: "Perfect Binding", label: "Perfect Binding", image: "/images/services/Hard Binding and Gold.jpg" },
  { id: "Rexin Binding", label: "Rexin Binding", image: "/images/services/Rexin Binding.jpg" },
];


  return (
    <section className="w-full mt-20 py-16 px-6 md:px-20 dark:bg-darkmode">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT — PRINTING & BINDING */}
        <div className="lg:col-span-2 space-y-8">

          {/* PRINTING SPECIFICATION */}
          <div className=" rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-semibold dark:text-white">
                Printing Specification
              </h1>
            </div>

            <div className="space-y-6">

              {/* Page Count */}
<div>
  <label className="block text-sm font-medium dark:text-white mb-2">
    Page Count
  </label>

  <div className="flex items-center gap-3">
    <button
      onClick={() => setPageCount((p) => Math.max(1, p - 1))}
      className="w-12 h-12 rounded-xl border text-lg font-semibold"
    >
      −
    </button>

    <input
      type="number"
      min="1"
      value={pageCount}
      onChange={(e) => setPageCount(Number(e.target.value))}
      className="w-full text-center rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
    />

    <button
      onClick={() => setPageCount((p) => p + 1)}
      className="w-12 h-12 rounded-xl border text-lg font-semibold"
    >
      +
    </button>
  </div>
</div>



              {/* Color */}
              <div>
                <label className="block text-sm font-medium dark:text-white mb-2">
                  Color / Grayscale Print
                </label>
                <select
                  value={printType}
                  onChange={(e) => setPrintType(e.target.value)}
                  className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option>Grayscale</option>
                  <option>Color</option>
                </select>
              </div>

              {/* Size */}
              <div>
                <label className="block text-sm font-medium dark:text-white mb-2">
                  Choose Print Size
                </label>
                <select
                  value={printSize}
                  onChange={(e) => setPrintSize(e.target.value)}
                  className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option>~A4</option>
                  <option>A3</option>
                  <option>A5</option>
                </select>
              </div>

              {/* Media */}
              <div>
                <label className="block text-sm font-medium dark:text-white mb-2">
                  Choose Print Media
                </label>
                <select
                  value={printMedia}
                  onChange={(e) => setPrintMedia(e.target.value)}
                  className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option>Copier ~75gsm</option>
                  <option>Copier ~100gsm</option>
                  <option>Glossy</option>
                </select>
              </div>

              {/* Sides */}
              <div>
                <label className="block text-sm font-medium dark:text-white mb-3">
                  Choose Print Sides
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setPrintSide("Single Side")}
                    className={`rounded-xl border py-3 font-medium transition ${
                      printSide === "Single Side"
                        ? "border-blue-500 ring-2 ring-blue-200 text-blue-600"
                        : " dark:text-white"
                    }`}
                  >
                    Single Side
                  </button>

                  <button
                    onClick={() => setPrintSide("Double Side")}
                    className={`rounded-xl border py-3 font-medium transition ${
                      printSide === "Double Side"
                        ? "border-blue-500 ring-2 ring-blue-200 text-blue-600"
                        : " dark:text-white"
                    }`}
                  >
                    Double Side
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* BINDING SPECIFICATION */}
         <div className="rounded-2xl border border-gray-200 dark:text-white shadow-sm">

  {/* Header */}
  <button
    onClick={() => setOpenBinding(!openBinding)}
    className="w-full flex justify-between items-center p-6"
  >
    <h2 className="text-lg font-semibold text-gray-900">
      Binding Specification
    </h2>
    <span
      className={`transition-transform ${
        openBinding ? "rotate-180" : ""
      }`}
    >
      V
    </span>
  </button>

  {/* Content */}
  {openBinding && (
    <div className="px-6 pb-6 space-y-6">

      {/* Binding Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {bindingOptions.map((item) => (
    <button
      key={item.id}
      onClick={() => setBindingType(item.label)}
      className={`rounded-xl border p-3 text-center transition
        ${
          bindingType === item.label
            ? "border-blue-500 ring-2 ring-blue-200"
            : "border-gray-200 hover:border-blue-300"
        }`}
    >
      <div className="relative h-[110px] w-full bg-gray-50 rounded-lg mb-3">
        <Image
          src={item.image}
          alt={item.label}
          fill
          className="object-contain p-3"
        />
      </div>

      <p className="text-sm font-medium dark:text-white">
        {item.label}
      </p>
    </button>
  ))}
</div>


      {/* Additional Info */}
      <div className="border-t pt-6 space-y-4">

        <h3 className="text-sm font-semibold dark:text-white">
          Additional Info for Binding
        </h3>

        <div>
          <label className="text-sm dark:text-white">
            Choose color for cotton board
          </label>
          <select
  value={bindingColor}
  onChange={(e) => setBindingColor(e.target.value)}
  className="mt-1 w-full rounded-lg border px-4 py-2"
>
  <option>Blue</option>
  <option>Black</option>
  <option>Brown</option>
</select>

        </div>

        <div>
          <label className="text-sm dark:text-white">
            Choose Cover Page options
          </label>
         <select
  value={coverPage}
  onChange={(e) => setCoverPage(e.target.value)}
  className="mt-1 w-full rounded-lg border px-4 py-2"
>
  <option>No Cover Page</option>
  <option>Printed Cover Page</option>
  <option>Laminated Cover Page</option>
</select>

        </div>

        <div>
          <label className="text-sm dark:text-white">
            Choose Binding Orientation
          </label>
        <select
  value={bindingOrientation}
  onChange={(e) => setBindingOrientation(e.target.value)}
  className="mt-1 w-full rounded-lg border px-4 py-2"
>
  <option>Portrait</option>
  <option>Landscape</option>
</select>

        </div>

      </div>
    </div>
  )}
</div>

        </div>

        {/* RIGHT — ITEM SUMMARY */}
        <div className=" rounded-2xl shadow-sm border border-gray-100 p-8 h-fit">
          <h3 className="text-xl font-semibold dark:text-white">
            Item Summary
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            0 documents uploaded
          </p>

          <div className="grid grid-cols-2 gap-6 text-sm  dark:text-white border-b pb-6">
            <div className="space-y-2">
  <p className="font-semibold dark:text-white">
    Printing Specifications
  </p>
  <p>{printType} Print Out</p>
  <p>{printSide}</p>
  <p>{printSize}, {printMedia}</p>
  <p>{pageCount} Pages</p>
</div>

            <div>
  <p className="font-semibold dark:text-white mb-2">
    Binding Specifications
  </p>
  <p>{bindingColor || "Blue"}</p>
  <p>{bindingType || "Not selected"}</p>
  <p>{coverPage || "No Cover Page"}</p>
  <p>{bindingOrientation || "Portrait"}</p>
</div>

          </div>

         <div className="mt-6 rounded-xl border border-green-100 p-4">
  <p className="text-sm font-medium text-green-700 text-center">
    💬 Price will be discussed on WhatsApp
  </p>
</div>


          <div className="flex items-center gap-2 mt-4 text-sm  dark:text-white">
            <input type="checkbox" className="rounded" />
            <span>Delete file after delivery</span>
          </div>

        <button
  onClick={handleSendWhatsApp}
  className="w-full mt-6 font-bold bg-gray-200 text-black py-3 rounded-xl
             hover:bg-blue-600 hover:text-white transition-colors duration-300"
>
  Send
</button>


        </div>
      </div>
    </section>
  );
};

export default Printpage;
