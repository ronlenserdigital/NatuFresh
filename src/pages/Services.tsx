import { Seo } from "../components/Seo";
import { WorkImage } from "../components/WorkImage";
import { IMAGES, SITE } from "../lib/site";
import { Link } from "react-router-dom";

const services = [
  {
    id: "office",
    title: "Office Cleaning",
    intro:
      "Keep your commercial office environment consistently clean, organized, and ready for staff and clients. We focus on high-touch points, work areas, and shared spaces that affect first impressions and daily comfort.",
    bullets: [
      "Workstations, desks, and surrounding areas",
      "Break rooms, kitchens, and beverage stations",
      "Meeting rooms, glass, and high-visibility touchpoints",
      "Dusting, trash removal, and detail finishing",
    ],
  },
  {
    id: "janitorial",
    title: "Janitorial Services",
    intro:
      "Ongoing janitorial support designed for business schedules — from nightly resets to after-hours service — so your facility looks maintained without interrupting core operations.",
    bullets: [
      "Restock-aware cleaning aligned with your traffic patterns",
      "Floors, trash, and public-facing spaces",
      "Consistent checklists and communication",
      "Adaptable as your team or footprint changes",
    ],
  },
  {
    id: "deep",
    title: "Deep Cleaning",
    intro:
      "When your commercial space needs a full reset, deep cleaning helps restore a baseline of cleanliness in offices, open floor plans, and high-use shared environments.",
    bullets: [
      "Detail work beyond routine maintenance",
      "Hard-to-reach and accumulated buildup areas",
      "Ideal for seasonal refreshes, transitions, and preparation",
      "Coordinated to minimize business disruption",
    ],
  },
  {
    id: "move",
    title: "Move-In / Move-Out Commercial Cleaning",
    intro:
      "Prepare commercial suites and business spaces for the next phase — from lease transitions to reconfiguration. We focus on presentation-ready handoff so the space is ready to work.",
    bullets: [
      "Surface, floor, and common-area pass-throughs",
      "Preparation for occupancy or return to landlord standards",
      "Scheduling that aligns with movers and your timeline",
      "Clear, commercial-focused results — not a generic checklist",
    ],
  },
  {
    id: "recurring",
    title: "Recurring Commercial Cleaning",
    intro:
      "Recurring office cleaning and janitorial support that keeps your environment stable week after week. Choose a cadence that matches your headcount, traffic, and industry expectations.",
    bullets: [
      "Daytime or after-hours options, where appropriate",
      "Reliable, repeatable service patterns",
      "Scales with your business schedule",
      "Helps support healthier workspace expectations long term",
    ],
  },
  {
    id: "floors",
    title: "Floors, Hallways & Common Areas",
    intro:
      "First impressions and daily safety often start with floors and traffic lanes. We maintain hallways, entry paths, and shared circulation areas in commercial properties so they look intentional and well cared for.",
    bullets: [
      "Hard-surface and walk-off areas in commercial settings",
      "Lobbies, corridors, and public circulation",
      "Consistent care for the paths people use most",
      "A cleaner baseline for the rest of your space",
    ],
  },
] as const;

export function Services() {
  return (
    <>
      <Seo
        title="Commercial Cleaning Services | Office & Janitorial Cleaning | NatuFresh"
        description="NatuFresh commercial cleaning services: office cleaning, janitorial services, green commercial cleaning, and commercial deep cleaning for business environments. Get a commercial cleaning company quote today."
      />

      <div className="border-b border-navy/5 bg-warm-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-deep-blue">
            Commercial only
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Commercial Cleaning Services
          </h1>
          <p className="mt-4 max-w-3xl text-balance text-lg text-navy/70">
            Professional cleaning solutions for offices, workspaces, commercial
            buildings, and shared business environments — with{" "}
            {SITE.yearsExperience} years of field experience and owner-led
            accountability.
          </p>
        </div>
      </div>

      <div className="space-y-0 bg-warm-white">
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`border-t border-navy/8 ${
              i % 2 === 0 ? "bg-warm-white" : "bg-light-gray/40"
            }`}
          >
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:items-start lg:gap-12 lg:px-8 lg:py-16">
              <div
                className={
                  i % 2 === 0
                    ? "lg:col-span-7"
                    : "order-1 lg:order-2 lg:col-span-7"
                }
              >
                <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-3 text-navy/75 leading-relaxed">{s.intro}</p>
                <ul className="mt-5 space-y-2.5 text-navy/80">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 pl-0">
                      <span
                        className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-deep-blue"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-navy/60">
                  Want pricing for this service?{" "}
                  <Link
                    to="/contact"
                    className="font-bold text-deep-blue hover:underline"
                  >
                    Request a commercial cleaning quote
                  </Link>{" "}
                  and we&apos;ll follow up to align scope, schedule, and
                  access.
                </p>
              </div>
              {i % 3 === 0 && (
                <div
                  className={
                    i % 2 === 0
                      ? "lg:col-span-5"
                      : "order-2 lg:order-1 lg:col-span-5"
                  }
                >
                  <WorkImage
                    src={IMAGES.hero}
                    alt="Commercial space — professional commercial cleaning"
                    aspect="video"
                    rounded="2xl"
                  />
                </div>
              )}
              {i % 3 === 1 && (
                <div
                  className={
                    i % 2 === 0
                      ? "lg:col-span-5"
                      : "order-2 lg:order-1 lg:col-span-5"
                  }
                >
                  <WorkImage
                    src={IMAGES.galleryA}
                    alt="Office and workspace commercial cleaning"
                    aspect="video"
                    rounded="2xl"
                  />
                </div>
              )}
              {i % 3 === 2 && (
                <div
                  className={
                    i % 2 === 0
                      ? "lg:col-span-5"
                      : "order-2 lg:order-1 lg:col-span-5"
                  }
                >
                  <WorkImage
                    src={IMAGES.galleryB}
                    alt="Long hallway and common area cleaning"
                    aspect="video"
                    rounded="2xl"
                  />
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      <section className="bg-navy py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Get a clear commercial scope and honest next steps
          </h2>
          <p className="mt-2 text-white/80">
            Share your building type, square footage range, and preferred
            schedule — we&apos;ll help you plan the right cleaning cadence.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-fresh-green px-8 text-sm font-bold text-navy transition hover:bg-white"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
