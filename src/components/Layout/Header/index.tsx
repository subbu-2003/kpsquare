"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import Signin from "@/components/Auth/SignIn";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";
import { SuccessfullLogin } from "@/components/Auth/AuthDialog/SuccessfulLogin";
import { FailedLogin } from "@/components/Auth/AuthDialog/FailedLogin";
import { UserRegistered } from "@/components/Auth/AuthDialog/UserRegistered";
import AuthDialogContext from "@/app/context/AuthDialogContext";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();
  const authDialog = useContext(AuthDialogContext);

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const signInRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  /* Sticky Header */
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Outside Click */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;

      if (isSignInOpen && signInRef.current && !signInRef.current.contains(target)) {
        setIsSignInOpen(false);
      }

      if (navbarOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [navbarOpen, isSignInOpen]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full h-24 transition-all ${
          sticky
            ? "shadow-lg bg-white dark:bg-secondary"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Menu */}
            <ul className="hidden lg:flex flex-grow items-center justify-center space-x-6 py-6">
              {headerData.map((item, index) => (
                <HeaderLink key={index} item={item} />
              ))}
            </ul>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-8 w-8 flex items-center justify-center"
              >
                {theme === "dark" ? (
                  <Icon icon="solar:sun-bold" className="text-xl text-white" />
                ) : (
                  <Icon icon="solar:moon-bold" className="text-xl" />
                )}
              </button>

              {/* Desktop Contact */}
              <Link
                href="/contact"
                className="hidden lg:block btn_outline btn-2 rounded-lg"
              >
                <span className="px-4 py-2">Contact Us</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setNavbarOpen(true)}
                className="block lg:hidden p-2"
                aria-label="Open menu"
              >
                <span className="block w-6 h-0.5 bg-black dark:bg-white" />
                <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5" />
                <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {navbarOpen && <div className="fixed inset-0 bg-black/50 z-40" />}

      {/* ================= MOBILE MENU ================= */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white dark:bg-darkmode z-50 transition-transform duration-300 ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setNavbarOpen(false)}>
            <Icon icon="ic:round-close" className="text-2xl" />
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-4">
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} />
          ))}

          {/* ✅ MOBILE CONTACT BUTTON ONLY */}
          <Link
            href="/contact"
            onClick={() => setNavbarOpen(false)}
            className="mt-4 w-full text-center border border-primary text-primary py-2 rounded-lg hover:bg-primary hover:text-white transition"
          >
            Contact Us
          </Link>
        </nav>
      </div>

      {/* ================= SIGN IN MODAL (DESKTOP ONLY) ================= */}
      {isSignInOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div
            ref={signInRef}
            className="relative bg-white dark:bg-darklight rounded-lg px-8 py-12"
          >
            <button
              onClick={() => setIsSignInOpen(false)}
              className="absolute top-4 right-4"
            >
              <Icon icon="ic:round-close" className="text-xl" />
            </button>
            <Signin signInOpen={setIsSignInOpen} />
          </div>
        </div>
      )}

      {/* ================= AUTH ALERTS ================= */}
      {authDialog?.isSuccessDialogOpen && <SuccessfullLogin />}
      {authDialog?.isFailedDialogOpen && <FailedLogin />}
      {authDialog?.isUserRegistered && <UserRegistered />}
    </>
  );
};

export default Header;
