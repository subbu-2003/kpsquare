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
        Our <span className="text-blue-500">Achievements</span> in Nutshell
      </h2>
    </div>

   <p className="text-gray-600 text-base leading-relaxed mb-6 text-justify">
  Adyar Students Xerox has been a leader in the print services industry
  for over 30 years in Chennai, Tamil Nadu. As pioneers in print
  technology, we offer high-quality, affordable printing across 19+ branches
  in Chennai. Our adaptability to customer needs and numerous industry awards
  highlights our commitment to excellence.
  <br />
  We also provide state-of-the-art digital printing solutions, ensuring
  quick turnaround times and superior quality. Choose Adyar Students Xerox for
  all your print and digital printing needs.
</p>


 <div className="text-center">
  <h3 className="text-blue-500 font-semibold text-xl mt-6">
    MR. NARAYANASAMY ARUNACHALAM
  </h3>
  <p className="text-gray-600 font-medium">Founder - Chairman</p>
  <p className="text-gray-600 mb-6">Adyar Students Xerox Private Limited</p>

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
