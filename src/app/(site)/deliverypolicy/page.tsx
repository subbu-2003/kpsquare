import React from "react";
import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";
import Terms from "@/components/Terms";
import TicketSection from "@/components/Home/TicketSection";
import Privacy from "@/components/privacy";
import Paymentpolicy from "@/components/paymentpolicy";
import Deliverypolicy from "@/components/deliverypolicy";

export const metadata: Metadata = {
  title: "Terms & Conditions | KP Square Publication",
};

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/deliverypolicy", text: "Payment Policy" },
  ];
  return (
    <>
      <HeroSub
        title="Shipping & Delivery Policies"
        description="Please read our terms and conditions carefully before using our services."
        breadcrumbLinks={breadcrumbLinks}
      />

      <Deliverypolicy />

      
    </>
  );
};

export default Page;
