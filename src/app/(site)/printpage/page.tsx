import React from "react";
import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";
import Terms from "@/components/Terms";
import TicketSection from "@/components/Home/TicketSection";
import Printpage from "@/components/printpage";

export const metadata: Metadata = {
  title: "Terms & Conditions | KP Square Publication",
};

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/printpage", text: "Terms & Conditions" },
  ];

  return (
    <>
      

      <Printpage />

    </>
  );
};

export default Page;
