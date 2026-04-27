import { Seo } from "../components/Seo";
import { SITE } from "../lib/site";

export function Contact() {
  return (
    <>
      <Seo
        title="Request a Commercial Cleaning Quote | NatuFresh"
        description="Request a commercial cleaning quote from NatuFresh — professional commercial cleaning company for office cleaning services, janitorial services, and green commercial cleaning in your business space."
      />

      <div className="border-b border-navy/5 bg-warm-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Request a Commercial Cleaning Quote
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-navy/70">
            Tell us about your business space and NatuFresh will help you plan a
            cleaner, healthier workplace.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-light-gray/80 to-warm-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-navy/8 bg-white p-6 shadow-card sm:p-7">
              <h2 className="text-xs font-bold uppercase tracking-widest text-navy/45">
                Direct line
              </h2>
              <p className="mt-3 text-sm font-bold text-navy">{SITE.owner}</p>
              <p className="text-sm text-navy/55">Owner</p>
              <div className="mt-4 space-y-1 text-sm">
                <p>
                  <span className="text-navy/55">Phone: </span>
                  <a
                    className="font-bold text-deep-blue hover:underline"
                    href={`tel:+1${SITE.phoneTel}`}
                  >
                    {SITE.phoneDisplay}
                  </a>
                </p>
                <p>
                  <span className="text-navy/55">Email: </span>
                  <a
                    className="break-all font-bold text-deep-blue hover:underline"
                    href={`mailto:${SITE.email}`}
                  >
                    {SITE.email}
                  </a>
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-navy/55">
              NatuFresh provides commercial cleaning services to offices,
              facilities, and business properties.
            </p>
          </div>

          <div className="lg:col-span-8">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="rounded-2xl border border-navy/8 bg-white p-6 shadow-card-lg sm:p-8"
            >
              <input
                type="hidden"
                name="access_key"
                value="REPLACE_WITH_WEB3FORMS_ACCESS_KEY"
              />
              <input
                type="hidden"
                name="subject"
                value="New Commercial Cleaning Quote Request - NatuFresh"
              />
              <input
                type="hidden"
                name="from_name"
                value="NatuFresh Website"
              />
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-semibold text-navy">
                    Name <span className="text-eco-green">*</span>
                  </span>
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="h-12 w-full rounded-lg border border-navy/10 bg-warm-white px-3.5 text-sm text-navy outline-none ring-deep-blue/20 transition placeholder:text-navy/35 focus:border-deep-blue/50 focus:ring-4"
                    placeholder="Your name"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-semibold text-navy">
                    Company name
                  </span>
                  <input
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="h-12 w-full rounded-lg border border-navy/10 bg-warm-white px-3.5 text-sm text-navy outline-none ring-deep-blue/20 transition placeholder:text-navy/35 focus:border-deep-blue/50 focus:ring-4"
                    placeholder="Company or property name"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-navy">
                    Phone <span className="text-eco-green">*</span>
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="h-12 w-full rounded-lg border border-navy/10 bg-warm-white px-3.5 text-sm text-navy outline-none ring-deep-blue/20 transition placeholder:text-navy/35 focus:border-deep-blue/50 focus:ring-4"
                    placeholder="555-000-0000"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-navy">
                    Email <span className="text-eco-green">*</span>
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="h-12 w-full rounded-lg border border-navy/10 bg-warm-white px-3.5 text-sm text-navy outline-none ring-deep-blue/20 transition placeholder:text-navy/35 focus:border-deep-blue/50 focus:ring-4"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-semibold text-navy">
                    Property type
                  </span>
                  <input
                    name="property_type"
                    type="text"
                    className="h-12 w-full rounded-lg border border-navy/10 bg-warm-white px-3.5 text-sm text-navy outline-none ring-deep-blue/20 transition placeholder:text-navy/35 focus:border-deep-blue/50 focus:ring-4"
                    placeholder="Office suite, medical office, flex space, etc."
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-semibold text-navy">
                    Service needed <span className="text-eco-green">*</span>
                  </span>
                  <input
                    name="service_needed"
                    type="text"
                    required
                    className="h-12 w-full rounded-lg border border-navy/10 bg-warm-white px-3.5 text-sm text-navy outline-none ring-deep-blue/20 transition placeholder:text-navy/35 focus:border-deep-blue/50 focus:ring-4"
                    placeholder="e.g. recurring janitorial, deep cleaning, move-out"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-semibold text-navy">
                    Preferred cleaning frequency
                  </span>
                  <input
                    name="cleaning_frequency"
                    type="text"
                    className="h-12 w-full rounded-lg border border-navy/10 bg-warm-white px-3.5 text-sm text-navy outline-none ring-deep-blue/20 transition placeholder:text-navy/35 focus:border-deep-blue/50 focus:ring-4"
                    placeholder="Nightly, weekly, bi-weekly, one-time, etc."
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-semibold text-navy">
                    Best time to contact
                  </span>
                  <input
                    name="best_time_to_contact"
                    type="text"
                    className="h-12 w-full rounded-lg border border-navy/10 bg-warm-white px-3.5 text-sm text-navy outline-none ring-deep-blue/20 transition placeholder:text-navy/35 focus:border-deep-blue/50 focus:ring-4"
                    placeholder="Mornings, after 2pm, business hours only, etc."
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-semibold text-navy">
                    Message / details <span className="text-eco-green">*</span>
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full rounded-lg border border-navy/10 bg-warm-white px-3.5 py-3 text-sm text-navy outline-none ring-deep-blue/20 transition placeholder:text-navy/35 focus:border-deep-blue/50 focus:ring-4"
                    placeholder="Square footage (estimate), number of floors, access notes, and any must-haves."
                  />
                </label>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex min-h-12 w-full min-w-[12rem] items-center justify-center rounded-lg bg-gradient-to-r from-deep-blue to-eco-green px-8 py-3 text-sm font-bold text-white shadow-md transition hover:opacity-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-blue sm:w-auto"
                >
                  Request Commercial Cleaning Quote
                </button>
                <p className="mt-3 text-xs text-navy/45">
                  By submitting, you agree we may contact you about your
                  request. Add your Web3Forms access key before publishing.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
