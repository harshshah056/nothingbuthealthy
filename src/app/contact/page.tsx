"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { WHATSAPP_URL } from "@/utils/constants";

const faqs = [
  {
    question: "Can I skip a week on my plan?",
    answer:
      "Yes, you can pause your subscription anytime through the app or by messaging us on WhatsApp at least 48 hours before your next delivery.",
  },
  {
    question: "Is all the produce fresh?",
    answer:
      "Absolutely. We work with local farm partners to source seasonal, farm-fresh produce every single day.",
  },
  {
    question: "When do deliveries happen?",
    answer:
      "All deliveries are made fresh every morning between 6:00 AM and 9:00 AM.",
  },
];

const subjectOptions = [
  "Subscription Plan Inquiry",
  "Order Issue",
  "Vegetarian Catering Inquiry",
  "Partnership Proposal",
  "General Question",
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">
          <div className="md:col-span-7 z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold text-[10px] uppercase tracking-widest mb-6">
              Support Center
            </span>
            <h1 className="text-5xl md:text-[4.5rem] leading-[1.05] font-extrabold text-on-background mb-8 tracking-tighter">
              Let&apos;s Keep It{" "}
              <span className="text-primary italic">Fresh</span> Together.
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md mb-10 leading-relaxed">
              Whether you have a question about your subscription, need help
              with an order, or want to explore our corporate catering — we're
              here to help.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmyP0lsW0Gx0Yg_dnf9hR1ryEZMg4rMZyMya54PKArFLKZ7IdWN-BkCSbHXtwtN0On3PbViPcsQ-tJ18MhqW8TK686vQlpQQK4b_U_z010L1PG1zR49G86M-dUaDY-NW2_TBWjKCgespNER2Rb2YrFy4MQD9nbVYFlUpzc7dOC4O4E7v-2tJT7JPngv27VJUjnR3I1ZKHOfJAn5VAbdIdWGNFJGQ9iC7RQGJSatC1cPRMOOJ5G4dUSEsbav5fbmKja9_ZdmSBbyalE"
                alt="Fresh healthy meals and salads"
                width={600}
                height={500}
                unoptimized
                className="relative rounded-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary-container rounded-2xl p-10 text-white flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                <MaterialIcon icon="chat" filled className="text-white" size="28px" />
              </div>
              <h2 className="text-3xl font-extrabold mb-3 tracking-tight">
                Fastest Support?
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-md mb-8">
                Skip the wait. Message us directly on WhatsApp for instant help
                with orders, subscriptions, and meal customizations.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-bold rounded-full text-lg w-fit active:scale-95 transition-transform"
            >
              <MaterialIcon icon="chat" filled size="22px" />
              Chat Now on WhatsApp
            </a>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30">
            <div className="relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4GIHFn1l48FNdgJk1qp4I0jhOadBr0zwUdWHP7tt8LVlDPBywp9oauEzYWMtQaUEdT4n27nfWEAO8eZ8Trs_87LffU-HQWkDl2bPiwB2lUIg8-rYX3d8V-yUWFrS6e6o6ck_go5fkQInjO_3mO1gVkRjMhhMfssPn1zYVwYF2FQk9wt4TdVU8pRwU1uBCWTjqj806cwBqUDEgPj0d7JorfZEfd2eOgsVTRR9HPpRexOaUpdk459V7Y1RYuhlkynfMQGM8uiCpnCRJ"
                alt="Ahmedabad delivery zone map"
                width={400}
                height={300}
                unoptimized
                className="w-full object-cover"
              />
              <span className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-primary">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                Live Zone
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-extrabold text-on-background mb-1 tracking-tight">
                Delivery Zone
              </h3>
              <p className="text-on-surface-variant">
                Currently serving Ahmedabad
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          <div>
            <h2 className="text-3xl font-extrabold text-on-background mb-8 tracking-tight">
              Drop us a line
            </h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-surface-container-high border-none rounded-lg p-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all outline-none text-on-surface placeholder:text-on-surface-variant/60"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-surface-container-high border-none rounded-lg p-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all outline-none text-on-surface placeholder:text-on-surface-variant/60"
                />
              </div>
              <select
                defaultValue=""
                className="bg-surface-container-high border-none rounded-lg p-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all outline-none text-on-surface appearance-none"
              >
                <option value="" disabled>
                  Subject
                </option>
                {subjectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Message"
                rows={5}
                className="bg-surface-container-high border-none rounded-lg p-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all outline-none text-on-surface placeholder:text-on-surface-variant/60 resize-none"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-secondary text-on-secondary font-bold rounded-full text-lg w-fit active:scale-95 transition-transform mt-2"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-extrabold text-on-background tracking-tight">
                Frequently Asked
              </h2>
              <Link
                href="#"
                className="text-primary font-bold text-sm flex items-center gap-1 hover:underline"
              >
                View All FAQ
                <MaterialIcon icon="arrow_forward" size="18px" />
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/30"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="text-on-background font-bold text-lg pr-4">
                      {faq.question}
                    </span>
                    <MaterialIcon
                      icon={openFaq === index ? "expand_less" : "expand_more"}
                      className="text-on-surface-variant shrink-0"
                      size="24px"
                    />
                  </button>
                  {openFaq === index && (
                    <p className="text-on-surface-variant mt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
