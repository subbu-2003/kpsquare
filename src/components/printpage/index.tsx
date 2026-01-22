"use client";

import { useState } from "react";

const Printpage = () => {
  const [printType, setPrintType] = useState("Grayscale");
  const [printSize, setPrintSize] = useState("~A4");
  const [printMedia, setPrintMedia] = useState("Copier ~75gsm");
  const [printSide, setPrintSide] = useState("Double Side");

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
          <div className=" rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Binding Specification
            </h2>

            <div className="space-y-4  dark:text-white">
              <div className="flex justify-between">
                <span>Binding Type</span>
                <span className="font-medium  dark:text-white">Loose Sheets</span>
              </div>
              <div className="flex justify-between">
                <span>Cover Page</span>
                <span className="font-medium  dark:text-white">No Cover Page</span>
              </div>
              <div className="flex justify-between">
                <span>Orientation</span>
                <span className="font-medium  dark:text-white">Portrait</span>
              </div>
            </div>
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
            <div>
              <p className="font-semibold  dark:text-white mb-2">
                Printing Specifications
              </p>
              <p>{printType} Print Out</p>
              <p>{printSide}</p>
              <p>{printSize}, {printMedia}</p>
            </div>

            <div>
              <p className="font-semibold  dark:text-white mb-2">
                Binding Specifications
              </p>
              <p>Loose Sheets</p>
              <p>No Cover Page</p>
              <p>Portrait</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <span className="text-lg font-semibold  dark:text-white">
              Price:
            </span>
            <span className="text-lg font-semibold text-blue-600">
              ₹0.00
            </span>
          </div>

          <div className="flex items-center gap-2 mt-4 text-sm  dark:text-white">
            <input type="checkbox" className="rounded" />
            <span>Delete file after delivery</span>
          </div>

         <button
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
