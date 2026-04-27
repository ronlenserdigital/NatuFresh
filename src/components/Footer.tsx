import { Link } from "react-router-dom";
import { LogoImage } from "./WorkImage";
import { SITE } from "../lib/site";

const services = [
  "Office cleaning services",
  "Janitorial cleaning services",
  "Deep cleaning",
  "Recurring office cleaning",
  "Move-in / move-out (commercial)",
  "Floors & common areas",
];

export function Footer() {
  const y = new Date().getFullYear();
  return (
    <footer className="border-t border-navy/8 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="mb-3 inline-block">
              <LogoImage className="h-9" height={36} width={200} />
            </Link>
            <p className="text-sm font-medium text-navy/75">{SITE.tagline}</p>
            <p className="mt-2 text-sm text-navy/60">
              A commercial cleaning company focused on healthy, professional
              business environments.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-navy/50">
              Services
            </h2>
            <ul className="mt-3 space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-navy/75 transition hover:text-deep-blue"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-navy/50">
              Contact
            </h2>
            <p className="mt-3 text-sm font-medium text-navy">NatuFresh LLC</p>
            <p className="mt-2 text-sm text-navy/75">
              <a
                className="hover:text-deep-blue"
                href={`tel:+1${SITE.phoneTel}`}
              >
                {SITE.phoneDisplay}
              </a>
            </p>
            <p className="text-sm text-navy/75">
              <a
                className="break-all hover:text-deep-blue"
                href={`mailto:${SITE.email}`}
              >
                {SITE.email}
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-navy/50">
              Get a quote
            </h2>
            <p className="mt-3 text-sm text-navy/70">
              Tell us about your facility and we&apos;ll follow up with a
              commercial cleaning plan.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex h-11 items-center justify-center rounded-lg bg-eco-green px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-fresh-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eco-green"
            >
              Request Commercial Quote
            </Link>
          </div>
        </div>
        <div className="mt-12 border-t border-navy/8 pt-8 text-center text-xs text-navy/45">
          © {y} NatuFresh LLC. Commercial cleaning services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
