import { useState } from "react";
import { Seo } from "../components/Seo";
import { IMAGES, SITE } from "../lib/site";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Owner-Led Service",
    body: "You work with a business that takes service personally. When expectations matter, owner-led accountability helps ensure follow-through, clear communication, and a standard that doesn’t get lost in handoffs — especially in commercial settings where quality shows up in the details.",
  },
  {
    title: "Green Cleaning for Healthy Living",
    body: "We approach commercial work with a healthier workspace mindset. That means a thoughtful, practical green cleaning approach that supports presentable, comfortable business spaces — with emphasis on the kinds of high-touch and high-visibility areas that matter in offices and commercial buildings.",
  },
  {
    title: "Built Around Trust, Detail, and Consistency",
    body: "Commercial clients need reliability: consistent scheduling, clear scope, and cleaning that looks intentional day after day. Our focus is the kind of work that makes your facility feel maintained — lobbies, circulation paths, restrooms, and work areas that reflect how you run your business.",
  },
  {
    title: "Professional Cleaning for Business Environments",
    body: "From office suites to common areas and long hallways, we focus on the reality of B2B facilities: foot traffic, shared surfaces, and time windows that can’t be wasted. The goal is simple — support a professional environment for employees, clients, and everyone who steps through the door.",
  },
] as const;

function BusinessCardImage() {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-navy/15 bg-light-gray text-xs text-navy/45">
        Add brand image: /images/business-card.jpg
      </div>
    );
  }
  return (
    <img
      src={IMAGES.businessCard}
      alt="NatuFresh business card"
      onError={() => setErr(true)}
      className="mx-auto h-auto max-h-52 w-full max-w-md object-contain"
      loading="lazy"
    />
  );
}

export function About() {
  return (
    <>
      <Seo
        title="About NatuFresh | 12 Years of Commercial Cleaning Experience"
        description="Meet NatuFresh: an owner-led commercial cleaning company in Northern Virginia. Professional office cleaning, janitorial services, and green commercial cleaning with 12 years of experience."
      />

      <div className="border-b border-navy/5 bg-warm-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            {SITE.yearsExperience} Years of Commercial Cleaning Experience
          </h1>
          <p className="mt-5 max-w-3xl text-balance text-lg text-navy/75">
            NatuFresh is an owner-led commercial cleaning company focused on
            keeping workplaces clean, fresh, and healthy. Led by{" "}
            {SITE.owner}, NatuFresh brings {SITE.yearsExperience} years of
            hands-on cleaning experience to offices, commercial spaces, and
            business environments.
          </p>
        </div>
      </div>

      <div className="bg-warm-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-16">
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-eco-green">
                Brand
              </p>
              <h2 className="text-2xl font-extrabold text-navy">
                Professional presentation
              </h2>
              <p className="text-sm text-navy/65">
                Your business card is a promise of attention to detail. We
                bring that same mindset to the cleaning work we perform on-site.
              </p>
              <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-navy/8 bg-white p-4 shadow-card">
                <BusinessCardImage />
              </div>
            </div>
          </div>
          <div className="space-y-12 lg:col-span-7">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-xl font-extrabold text-navy sm:text-2xl">
                  {s.title}
                </h2>
                <p className="mt-2 text-navy/75 leading-relaxed">{s.body}</p>
              </section>
            ))}
            <div className="rounded-2xl border border-navy/8 bg-soft-blue/40 p-6 sm:p-8">
              <h2 className="text-lg font-extrabold text-navy">
                Ready to talk commercial scope?
              </h2>
              <p className="mt-2 text-sm text-navy/70">
                Share a few details and we’ll recommend a service plan for your
                facility and schedule.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex h-12 items-center justify-center rounded-lg bg-navy px-6 text-sm font-bold text-white transition hover:bg-deep-blue"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
