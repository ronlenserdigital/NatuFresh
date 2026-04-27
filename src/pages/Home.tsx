import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { WorkImage } from "../components/WorkImage";
import { IMAGES, SITE } from "../lib/site";

const trustBadges = [
  "12 Years of Experience",
  "Commercial Cleaning Only",
  "Green Cleaning Approach",
  "Owner-Led Service",
];

const statStrip = [
  "12 Years Experience",
  "Commercial Spaces",
  "Office & Janitorial Cleaning",
  "Flexible Cleaning Schedules",
];

const spaceCards = [
  {
    title: "Offices & Workspaces",
    body: "Reception areas, work floors, and meeting rooms kept consistent with a professional standard your team and visitors notice.",
  },
  {
    title: "Common Areas & Hallways",
    body: "High-traffic corridors, lobbies, and shared spaces that reflect how your business operates — polished, safe, and well maintained.",
  },
  {
    title: "Recurring Janitorial Cleaning",
    body: "Planned service on the schedule you need — daily, weekly, or custom — so your facility never falls behind on upkeep.",
  },
];

const servicePreview = [
  "Office Cleaning",
  "Janitorial Services",
  "Deep Cleaning",
  "Recurring Cleaning",
  "Move-In / Move-Out Commercial Cleaning",
  "Floors, Hallways & Common Areas",
];

const whyList = [
  "12 years of cleaning experience",
  "Commercial-focused service",
  "Flexible scheduling",
  "Detail-oriented cleaning",
  "Healthier workspace approach",
  "Owner-led accountability",
];

export function Home() {
  return (
    <>
      <Seo
        title="NatuFresh | Green Commercial Cleaning Services"
        description="Professional commercial cleaning company — office cleaning services, janitorial cleaning services, and green commercial cleaning for businesses. Eco-friendly commercial cleaning in Northern Virginia. Call NatuFresh today."
      />

      <section className="border-b border-navy/5 bg-warm-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-20 lg:pl-8 lg:pr-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-deep-blue">
              Commercial cleaning services
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl">
              Commercial Cleaning for Healthier Workspaces
            </h1>
            <p className="mt-4 max-w-xl text-balance text-lg text-navy/70">
              NatuFresh provides professional commercial cleaning backed by{" "}
              {SITE.yearsExperience} years of experience, helping offices,
              facilities, and business environments stay clean, fresh, and
              ready for work.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 min-w-[11rem] items-center justify-center rounded-lg bg-navy px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-deep-blue"
              >
                Request a Free Quote
              </Link>
              <a
                href={`tel:+1${SITE.phoneTel}`}
                className="inline-flex h-12 items-center justify-center rounded-lg border border-navy/15 bg-white px-5 text-sm font-semibold text-navy transition hover:border-deep-blue/40 hover:bg-soft-blue/50"
              >
                Call {SITE.phoneDisplay}
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2">
              {trustBadges.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 text-sm font-medium text-navy/80"
                >
                  <span
                    className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-fresh-green"
                    aria-hidden
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="overflow-hidden border border-navy/8 bg-light-gray shadow-card-lg">
              <WorkImage
                src={IMAGES.hero}
                alt="Commercial building hallway after professional cleaning"
                aspect="portrait"
                priority
                className="!max-h-[min(72vh,600px)] !border-0 !shadow-none"
                rounded="3xl"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm">
              <div className="rounded-2xl border border-white/30 bg-white/95 px-4 py-3 text-sm font-semibold text-navy shadow-card backdrop-blur-sm">
                Clean offices. Healthier workspaces. Reliable service.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-navy/8 bg-navy text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-3 px-4 py-4 sm:px-6 lg:justify-between lg:px-8">
          {statStrip.map((s) => (
            <div
              key={s}
              className="flex items-center gap-2 text-sm font-semibold tabular-nums"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-fresh-green"
                aria-hidden
              />
              {s}
            </div>
          ))}
        </div>
      </div>

      <section className="bg-warm-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Built for Commercial Spaces
            </h2>
            <p className="mt-3 text-lg text-navy/70">
              NatuFresh helps offices, commercial buildings, and business
              environments maintain a clean, professional appearance without
              disrupting daily operations.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {spaceCards.map((c) => (
              <article
                key={c.title}
                className="group rounded-2xl border border-navy/8 bg-white p-6 shadow-card transition hover:border-deep-blue/20 hover:shadow-card-lg"
              >
                <h3 className="text-lg font-bold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {c.body}
                </p>
                <div className="mt-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-deep-blue to-fresh-green opacity-0 transition group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-gray/80 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Real Work, Real Commercial Environments
          </h2>
          <p className="mt-2 max-w-2xl text-navy/65">
            Proof from real facility work — not stock imagery. A commercial
            cleaning company you can see before you call.
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <figure className="lg:col-span-2">
              <WorkImage
                src={IMAGES.galleryMain}
                alt="Commercial hallway — floors and surfaces professionally cleaned"
                aspect="wide"
                className="lg:max-h-72"
                rounded="2xl"
              />
              <figcaption className="mt-2 text-sm font-medium text-navy/60">
                Commercial hallway cleaning
              </figcaption>
            </figure>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <figure>
                <WorkImage
                  src={IMAGES.galleryA}
                  alt="Open office and cubicle area cleaning"
                  aspect="video"
                  rounded="2xl"
                />
                <figcaption className="mt-2 text-sm font-medium text-navy/60">
                  Office workspace cleaning
                </figcaption>
              </figure>
              <figure>
                <WorkImage
                  src={IMAGES.galleryB}
                  alt="Long commercial corridor and common area"
                  aspect="video"
                  rounded="2xl"
                />
                <figcaption className="mt-2 text-sm font-medium text-navy/60">
                  Clean floors and common areas
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warm-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Why Businesses Choose NatuFresh
              </h2>
              <p className="mt-3 text-navy/70">
                When you need a commercial cleaning company that shows up, pays
                attention, and keeps your business environment presentable, you
                want a team that knows commercial work — and backs it with
                experience.
              </p>
            </div>
            <ul className="space-y-3 rounded-2xl border border-navy/8 bg-white p-6 shadow-card sm:p-8">
              {whyList.map((w) => (
                <li key={w} className="flex gap-3 text-navy/85">
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-soft-green text-xs font-bold text-eco-green"
                    aria-hidden
                  >
                    ✓
                  </span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-navy/8 bg-soft-blue/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Commercial cleaning services, tailored to your building
          </h2>
          <p className="mt-2 max-w-2xl text-navy/65">
            From day-to-day office cleaning services to commercial deep
            cleaning and scheduled janitorial support — we keep B2B spaces
            consistent.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {servicePreview.map((s) => (
              <div
                key={s}
                className="rounded-xl border border-navy/8 bg-white px-4 py-3 text-sm font-semibold text-navy shadow-sm"
              >
                {s}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/services"
              className="text-sm font-bold text-deep-blue hover:underline"
            >
              View all commercial cleaning services →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-24">
        <div
          className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-deep-blue"
          aria-hidden
        />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fresh-green/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready for a cleaner, healthier workplace?
          </h2>
          <p className="mt-3 text-lg text-white/80">
            Request a commercial cleaning quote and let NatuFresh help keep your
            business environment spotless, fresh, and professional.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex h-12 min-w-[10rem] items-center justify-center rounded-lg bg-fresh-green px-6 text-sm font-bold text-navy transition hover:bg-white"
            >
              Request Quote
            </Link>
            <a
              href={`tel:+1${SITE.phoneTel}`}
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/25 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
