"use client";
import React from "react";
import Image from "next/image";
import { speakers } from "@/app/api/data";
import { usePathname } from "next/navigation";
import Link from "next/link";

const WorkSpeakers = ({ showTitle = true }) => {
  const pathname = usePathname();
  return (
    <>
      <section className={` dark:bg-darkmode ${pathname === "/" ? "" : ""}`}>
        {showTitle && (
          <h2 className="text-center pb-12">World Class Speakers</h2>
        )}
         <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-8 mx-7">

    {/* Card 1 */}
    <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
      <Image src="/images/icons/branches.png" alt="Branches" width={60} height={60} className="mx-auto mb-4" />
      <h3 className="text-4xl font-bold text-blue-900">20+</h3>
      <p className="text-gray-600 mt-2">Branches in Chennai</p>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
      <Image src="/images/icons/revenue.png" alt="Revenue" width={60} height={60} className="mx-auto mb-4" />
      <h3 className="text-4xl font-bold text-blue-900">$12m+</h3>
      <p className="text-gray-600 mt-2">Annual Revenue Growth</p>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
      <Image src="/images/icons/customers.png" alt="Customers" width={60} height={60} className="mx-auto mb-4" />
      <h3 className="text-4xl font-bold text-blue-900">15k+</h3>
      <p className="text-gray-600 mt-2">Happy Customers</p>
    </div>

    {/* Card 4 */}
    <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
      <Image src="/images/icons/visitors.png" alt="Visitors" width={60} height={60} className="mx-auto mb-4" />
      <h3 className="text-4xl font-bold text-blue-900">20k+</h3>
      <p className="text-gray-600 mt-2">Daily Website Visitors</p>
    </div>

    {/* Card 5 */}
    <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
      <Image src="/images/icons/google.png" alt="Google Reviews" width={60} height={60} className="mx-auto mb-4" />
      <h3 className="text-4xl font-bold text-blue-900">4k+</h3>
      <p className="text-gray-600 mt-2">Google Review</p>
    </div>

  </div>
      </section>
    </>
  );
};

export default WorkSpeakers;
