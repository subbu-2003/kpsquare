import React from "react";
import Link from "next/link";
import Image from "next/image";

const EventTicket = () => {
    return (
        <>
            <section className="dark:bg-darkmode pt-0">
               <div className="mt-16 mx-auto px-6 lg:px-20">

    {/* Section Heading */}
   
    {/* Main Content */}
 {/* Main Content */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-7">

    {/* grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-8 mx-7 */}

  {/* LEFT IMAGE — takes 1/3 */}
  <div className="lg:col-span-1 flex justify-start">
    <Image
      src="/images/portrait-modern-woman.png"
      alt="Founder"
      width={250}
      height={250}
      className="object-contain"
    />
  </div>

  {/* RIGHT CONTENT — takes 2/3 */}
  <div className="lg:col-span-2">
     <div className="text-center mb-12">
      <h2 className="text-4xl font-bold">
        Our <span className="text-blue-500">Achievements</span>
      </h2>
    </div>

   <p className="text-gray-600 text-base leading-relaxed mb-6 text-justify">
  KP Square Publication is a professionally managed document service center dedicated to offering modern, efficient, and high-quality document solutions.
 We combine advanced technology with expert service to ensure that every document looks its best — clean, clear, vibrant, and professionally finished.
  <br />
What started as a small printing center has grown into a trusted document partner for thousands of customers in and around Chennai, especially Anna Nagar, Thirumangalam, Kilpauk, Mogappair, and Aminjikarai.
</p>


 <div className="text-center">
  <h3 className="text-blue-500 font-semibold text-xl mt-6">
    MR. NARAYANASAMY ARUNACHALAM
  </h3>
  <p className="text-gray-600 font-medium">Founder</p>
  <p className="text-gray-600 mb-6">KP Square Publication</p>

  {/* BUTTONS */}
  <div className="flex justify-center gap-4 mt-4">
    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition">
      <i className="fa fa-print"></i> Quick Print
    </button>

    <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-100 transition">
      <i className="fa fa-info-circle"></i> About Us
    </button>
  </div>
</div>

  </div>

</div>

  </div>
            </section>
        </>
    );
};

export default EventTicket;
