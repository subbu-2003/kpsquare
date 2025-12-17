import React from "react";
import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";
import Terms from "@/components/Terms";
import TicketSection from "@/components/Home/TicketSection";
import Privacy from "@/components/privacy";

export const metadata: Metadata = {
  title: "Terms & Conditions | KP Square Publication",
};

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/privacy", text: "Policy and Privacy" },
  ];
  return (
    <>
      <HeroSub
        title="Privacy"
        description="Please read our terms and conditions carefully before using our services."
        breadcrumbLinks={breadcrumbLinks}
      />

      <Privacy />

    
    </>
  );
};

export default Page;
