import React from "react";
import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";
import Terms from "@/components/Terms";
import TicketSection from "@/components/Home/TicketSection";

export const metadata: Metadata = {
  title: "Terms & Conditions | KP Square Publication",
};

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/terms", text: "Terms & Conditions" },
  ];

  return (
    <>
      <HeroSub
        title="Terms & Conditions"
        description="Please read our terms and conditions carefully before using our services."
        breadcrumbLinks={breadcrumbLinks}
      />

      <Terms />

    </>
  );
};

export default Page;
