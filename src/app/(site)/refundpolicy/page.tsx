import React from "react";
import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";
import Terms from "@/components/Terms";
import TicketSection from "@/components/Home/TicketSection";
import Privacy from "@/components/privacy";
import Paymentpolicy from "@/components/paymentpolicy";
import Refundpolicy from "@/components/refundpolicy";

export const metadata: Metadata = {
  title: "Terms & Conditions | KP Square Publication",
};

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/refundpolicy", text: "Payment Policy" },
  ];
  return (
    <>
      <HeroSub
        title="Refund Policy"
        description="Please read our terms and conditions carefully before using our services."
        breadcrumbLinks={breadcrumbLinks}
      />

      <Refundpolicy />

    
    </>
  );
};

export default Page;
