import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: FC = () => {
    return (
        <footer className="bg-secondary pt-20 pb-10 border-t border-dark_border">
            <div className="container">

                {/* Top Section */}
                <div className="grid md:grid-cols-4 mt-20 grid-cols-1 gap-10 pb-12 border-b border-dark_border">

                    {/* Logo + Small Description */}
                    <div>
                        <Link href="/">
                            <Image
                                src="/images/logo/kp.png"
                                alt="Logo"
                                width={50}
                                height={60}
                                className="w-16"
                            />
                        </Link>
                        <p className="text-PaleCerulean mt-4 text-base">
                            Your trusted platform for events, conferences and more.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/aboutus">About Us</Link>
                            </li>
                            <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/service">Service</Link>
                            </li>
                            <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/blog">Blog</Link>
                            </li>
                             <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Terms & Policies */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-4">Terms & Policies</h3>
                        <ul className="space-y-2">
                            <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/terms">Terms & Conditions</Link>
                            </li>
                            <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/privacy">Privacy Policy</Link>
                            </li>
                             <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/paymentpolicy">Payment Policy</Link>
                            </li>
                            
                            <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/refundpolicy">Refund Policy</Link>
                            </li>
                             <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/deliverypolicy">Delivery Policy</Link>
                            </li>
                             <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/disclaimer">Disclaimer</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Icons */}
                  <div>
  <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>

  <ul className="flex items-center gap-5">

    {/* Facebook */}
    <li>
      <Link href="https://www.facebook.com/soundira.p?mibextid=9R9pXO" className="group">
        <img 
          src="/icons/facebook.png" 
          alt="Facebook" 
          className="w-9 h-9 group-hover:opacity-70"
        />
      </Link>
    </li>

    {/* Instagram */}
    <li>
      <Link href="https://www.instagram.com/kpsquarecopier_chennai?igsh=ZzhseGk1aWVqaTdi" className="group">
        <img 
          src="/icons/instagram.png" 
          alt="Instagram" 
          className="w-9 h-9 group-hover:opacity-70"
        />
      </Link>
    </li>

    {/* YouTube */}
    <li>
      <Link href="https://www.youtube.com/@kpsquaretnpsc" className="group">
        <img 
          src="/icons/youtube.png" 
          alt="YouTube" 
          className="w-9 h-9 group-hover:opacity-70"
        />
      </Link>
    </li>

    {/* Threads */}
    <li>
      <Link href="https://www.threads.com/@kpsquarepublication" className="group">
        <img 
          src="/icons/thread.png" 
          alt="Threads" 
          className="w-9 h-9 group-hover:opacity-70"
        />
      </Link>
    </li>

    {/* Google My Business */}
    <li>
      <Link href="https://share.google/Zguu1jKkFOfIvWzsV" className="group">
        <img 
          src="/icons/gmb.png" 
          alt="Google My Business" 
          className="w-7 h-7 group-hover:opacity-70"
        />
      </Link>
    </li>

  </ul>
</div>

                </div>

                {/* Bottom Section */}
<div className=" mt-5 pt-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

      {/* Left */}
      <p className="text-PaleCerulean text-center md:text-left">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">KP Square</span>{" "}
        All Rights Reserved
      </p>

      {/* Right */}
      <p className="flex items-center gap-1 text-PaleCerulean text-center">
        Made with
        <span className="text-red-500">❤️</span>
        by
        <Link
          href="https://e2o.in/"
          target="_blank"
          className="font-semibold text-primary hover:underline"
        >
          E2o Tech
        </Link>
      </p>

    </div>
  </div>
</div>


            </div>
        </footer>
    );
};

export default Footer;
