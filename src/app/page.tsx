import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Quickprint from '@/components/Home/Quickprint';
import ThumbnailCarousel from '@/components/Home/Conferences';
import WorkSpeakers from '@/components/Home/WorkSpeakers';
import EventTicket from '@/components/Home/EventTicket';
import Highlight from '@/components/Home/YearHighlight/page';
import Upcoming from '@/components/Home/Upcoming';
import Testimonials from '@/components/Home/Testimonials';
import TicketSection from '@/components/Home/TicketSection';
export const metadata: Metadata = {
  title: "KP SQUARE",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Quickprint />
      <ThumbnailCarousel/>
       <EventTicket/>
      <WorkSpeakers/>
      {/* <Upcoming/> */}
      {/* <Highlight/> */}
      <TicketSection/>
    </main>
  )
}
