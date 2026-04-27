import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { LogoImage } from "./WorkImage";
import { LanguageToggle } from "./LanguageToggle";
import { SITE } from "../lib/site";
import { useLocale } from "../i18n/LocaleProvider";

export function Header() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  const nav = [
    { to: "/", label: t("nav.home"), end: true },
    { to: "/services", label: t("nav.services"), end: false },
    { to: "/about", label: t("nav.about"), end: false },
    { to: "/contact", label: t("nav.contact"), end: false },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors ${
      isActive ? "text-deep-blue" : "text-navy/70 hover:text-navy"
    }`;

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-[100] border-b transition-shadow duration-200 ${
        solid
          ? "border-navy/8 bg-white/95 shadow-header backdrop-blur-md"
          : "border-navy/5 bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex min-h-[4.75rem] items-center max-w-6xl justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-blue"
          onClick={() => setOpen(false)}
        >
          <LogoImage variant="header" />
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          <nav aria-label="Main">
            <ul className="flex items-center gap-5 xl:gap-7">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={linkClass}
                    end={item.end}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageToggle />
          <a
            href={`tel:+1${SITE.phoneTel}`}
            className="text-sm font-semibold text-navy tabular-nums"
          >
            {SITE.phoneDisplay}
          </a>
          <Link
            to="/contact"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-eco-green px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-deep-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-blue"
          >
            {t("nav.requestQuote")}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <a
            href={`tel:+1${SITE.phoneTel}`}
            className="text-xs font-bold text-navy tabular-nums sm:text-sm"
          >
            {SITE.phoneDisplay}
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-navy/10 bg-white text-navy shadow-sm"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          >
            {open ? (
              <svg
                className="h-5 w-5 text-navy"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 text-navy"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`fixed left-0 right-0 top-[4.75rem] z-[99] flex h-[calc(100dvh-4.75rem)] flex-col bg-warm-white transition lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav
          className="flex h-full min-h-0 flex-col overflow-y-auto border-t border-navy/8 bg-white px-4 py-6"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-lg font-semibold text-navy hover:bg-light-gray"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-auto border-t border-navy/8 pt-6">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex h-12 w-full items-center justify-center rounded-lg bg-eco-green text-base font-semibold text-white hover:bg-deep-blue"
            >
              {t("nav.requestQuote")}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
