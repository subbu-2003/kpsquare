import React from "react";
import Link from "next/link";
import Image from "next/image";

const ContactForm = () => {

    return (
        <>
            <section className="dark:bg-darkmode lg:pb-24 pb-16 pt-0">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
                        <div className="col-span-6">
                            <h2 className="max-w-72 text-[40px] leading-[3.4rem] font-bold mb-9 text-secondary">Get Online Consultation</h2>
                          <form className="flex flex-wrap w-full m-auto justify-between">

  {/* NAME */}
  <div className="sm:flex gap-3 w-full">
    <div className="mx-0 my-2.5 flex-1">
      <label className="pb-3 inline-block text-base text-SlateBlueText">
        Name*
      </label>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full text-base px-4 py-2.5 rounded-lg
        border border-border dark:border-dark_border
        dark:text-white dark:bg-darkmode
        transition-all duration-500
        focus:border-primary focus:outline-0"
      />
    </div>
  </div>

  {/* EMAIL */}
  <div className="sm:flex gap-3 w-full">
    <div className="mx-0 my-2.5 flex-1">
      <label className="pb-3 inline-block text-base text-SlateBlueText">
        Email Address*
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full text-base px-4 py-2.5 rounded-lg
        border border-border dark:border-dark_border
        dark:text-white dark:bg-darkmode
        transition-all duration-500
        focus:border-primary focus:outline-0"
      />
    </div>
  </div>

  {/* PHONE */}
  <div className="sm:flex gap-3 w-full">
    <div className="mx-0 my-2.5 flex-1">
      <label className="pb-3 inline-block text-base text-SlateBlueText">
        Phone Number*
      </label>
      <input
        type="tel"
        placeholder="Enter your phone number"
        className="w-full text-base px-4 py-2.5 rounded-lg
        border border-border dark:border-dark_border
        dark:text-white dark:bg-darkmode
        transition-all duration-500
        focus:border-primary focus:outline-0"
      />
    </div>
  </div>

  {/* LOCATION */}
  <div className="sm:flex gap-3 w-full">
    <div className="mx-0 my-2.5 flex-1">
      <label className="pb-3 inline-block text-base text-SlateBlueText">
        Location*
      </label>
      <input
        type="text"
        placeholder="Enter your location"
        className="w-full text-base px-4 py-2.5 rounded-lg
        border border-border dark:border-dark_border
        dark:text-white dark:bg-darkmode
        transition-all duration-500
        focus:border-primary focus:outline-0"
      />
    </div>
  </div>

  {/* SERVICE */}
  <div className="sm:flex gap-3 w-full">
    <div className="mx-0 my-2.5 flex-1">
      <label className="pb-3 inline-block text-base text-SlateBlueText">
        Service*
      </label>
      <input
        type="text"
        placeholder="Enter required service"
        className="w-full text-base px-4 py-2.5 rounded-lg
        border border-border dark:border-dark_border
        dark:text-white dark:bg-darkmode
        transition-all duration-500
        focus:border-primary focus:outline-0"
      />
    </div>
  </div>

  {/* BUTTON */}
  <div className="mx-0 my-4 w-full">
    <button
      type="submit"
      className="mt-4 btn btn-1 hover-filled-slide-down
      overflow-hidden rounded-lg w-full"
    >
      <span>Contact Us</span>
    </button>
  </div>

</form>

                        </div>
                        <div className="col-span-6">
                            <Image
                                src="/images/contact-page/contact.jpg"
                                alt="Contact"
                                width={1300}
                                height={0}
                                quality={100}
                                style={{ width: '100%', height: 'auto' }}
                                className="bg-no-repeat bg-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactForm;
