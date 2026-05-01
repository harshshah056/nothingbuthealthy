"use client";

import { useState } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/utils/constants";
import { trackEvent } from "@/utils/analytics";

const faqs = [
  {
    question: "What's the fastest way to reach you?",
    answer:
      "WhatsApp is fastest. Message us at +91 96198 96648 between 8 AM and 8 PM, Monday to Saturday — we typically reply within 10 minutes during business hours.",
  },
  {
    question: "Which areas of Ahmedabad do you deliver to?",
    answer:
      "All major Ahmedabad pin codes — including Bodakdev, Vastrapur, Satellite, SG Highway, Prahladnagar, Bopal, Thaltej, Navrangpura, CG Road, Paldi, Maninagar, Naranpura, Sabarmati, and Chandkheda. Not sure if we cover your area? Send us your pin code on WhatsApp.",
  },
  {
    question: "What time do deliveries arrive?",
    answer:
      "Daily fruit bowls and juices arrive between 6:00 AM and 9:00 AM. Same-day orders aren't possible — we cut, press, and dispatch in the early morning, so orders need to be placed at least one day in advance.",
  },
  {
    question: "Can I pause or skip my fruit subscription?",
    answer:
      "Yes. Message us on WhatsApp at least 48 hours before your next delivery to pause, skip, or reschedule. There are no charges for pausing your subscription.",
  },
  {
    question: "Do you do corporate catering or office subscriptions?",
    answer:
      "Yes — fruit bowls, juice trays, and tiffins for offices, gyms, and co-working spaces across Ahmedabad. Email corporate@nbhealthy.com or visit our Corporate page for bulk pricing.",
  },
  {
    question: "How do I pay for my subscription?",
    answer:
      "We accept UPI (GPay, PhonePe, Paytm), all major cards, and direct bank transfer. Subscription plans are pre-paid; single orders can be paid on delivery via UPI.",
  },
];

const subjectOptions = [
  "Fruit Bowl Subscription",
  "Cold-Pressed Juice Subscription",
  "Combo Plan Inquiry",
  "Pause / Reschedule Order",
  "Corporate Catering",
  "Partnership Proposal",
  "General Question",
];

export default function ContactContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const lines: string[] = [];
    lines.push("Hi Nothing But Healthy! I'd like to get in touch.");
    lines.push("");
    if (name) lines.push(`*Name:* ${name}`);
    if (email) lines.push(`*Email:* ${email}`);
    if (subject) lines.push(`*Subject:* ${subject}`);
    if (message) {
      lines.push("");
      lines.push(`*Message:*`);
      lines.push(message);
    }

    trackEvent("whatsapp_click", { source: "contact-form" });
    const text = encodeURIComponent(lines.join("\n"));
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="px-6 md:px-12 mb-12 md:mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        <div>
          <p className="text-primary font-bold uppercase text-xs tracking-[0.2em] mb-3">
            Send a message
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-background mb-3 tracking-tight">
            Drop us a line
          </h2>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            Fill this in and your message gets pre-filled into WhatsApp — fastest
            way to get a real reply from a real human in Ahmedabad.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                aria-label="Full name"
                className="bg-surface-container-high border-none rounded-lg p-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all outline-none text-on-surface placeholder:text-on-surface-variant/60"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                aria-label="Email address"
                className="bg-surface-container-high border-none rounded-lg p-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all outline-none text-on-surface placeholder:text-on-surface-variant/60"
              />
            </div>
            <select
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              aria-label="Subject"
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
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what you need…"
              aria-label="Message"
              rows={5}
              className="bg-surface-container-high border-none rounded-lg p-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all outline-none text-on-surface placeholder:text-on-surface-variant/60 resize-none"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-primary text-on-primary font-bold rounded-full text-base w-fit active:scale-95 transition-transform mt-2 inline-flex items-center gap-2 cursor-pointer"
            >
              <MaterialIcon icon="chat" filled size="18px" />
              Send via WhatsApp
            </button>
            <p className="text-xs text-on-surface-variant mt-1">
              Opens WhatsApp with your message pre-filled. We reply within 10
              minutes during support hours.
            </p>
          </form>
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-primary font-bold uppercase text-xs tracking-[0.2em] mb-3">
                Quick answers
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-background tracking-tight">
                Frequently asked
              </h2>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("whatsapp_click", { source: "contact-faq-cta" })
              }
              className="hidden sm:flex text-primary font-bold text-sm items-center gap-1 hover:underline"
            >
              Ask on WhatsApp
              <MaterialIcon icon="arrow_forward" size="18px" />
            </a>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  className="flex items-center justify-between w-full text-left cursor-pointer"
                >
                  <span className="text-on-background font-bold text-base md:text-lg pr-4">
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
  );
}
