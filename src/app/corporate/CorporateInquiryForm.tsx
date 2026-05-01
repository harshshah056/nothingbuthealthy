"use client";

import { useState } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { WHATSAPP_NUMBER } from "@/utils/constants";
import { trackEvent } from "@/utils/analytics";

const orderTypes = [
  "Office daily breakfast",
  "Gym / fitness partner",
  "One-time event / launch",
  "Wedding / celebration",
  "Co-working space",
  "School / institution",
  "Other",
] as const;

const volumeOptions = [
  "20–50 servings",
  "50–100 servings",
  "100–300 servings",
  "300+ servings",
  "Not sure yet",
] as const;

const frequencyOptions = [
  "One-time delivery",
  "Weekly (Mon–Sat)",
  "Daily (Mon–Sat)",
  "Monthly subscription",
  "Custom schedule",
] as const;

const productOptions = [
  "Fruit bowls only",
  "Cold-pressed juices only",
  "Bowls + juices combo",
  "Need recommendation",
] as const;

export default function CorporateInquiryForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [orderType, setOrderType] = useState("");
  const [products, setProducts] = useState("");
  const [volume, setVolume] = useState("");
  const [frequency, setFrequency] = useState("");
  const [startDate, setStartDate] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const lines: string[] = [];
    lines.push("Hi Nothing But Healthy! I'd like a bulk / corporate quote.");
    lines.push("");
    lines.push("*Contact*");
    if (name) lines.push(`Name: ${name}`);
    if (company) lines.push(`Company / Org: ${company}`);
    if (phone) lines.push(`Phone: ${phone}`);
    if (email) lines.push(`Email: ${email}`);
    lines.push("");
    lines.push("*Requirement*");
    if (orderType) lines.push(`Order type: ${orderType}`);
    if (products) lines.push(`Products: ${products}`);
    if (volume) lines.push(`Estimated volume: ${volume}`);
    if (frequency) lines.push(`Frequency: ${frequency}`);
    if (startDate) lines.push(`Preferred start / event date: ${startDate}`);
    if (location) lines.push(`Delivery location (Ahmedabad): ${location}`);
    if (notes) {
      lines.push("");
      lines.push("*Additional notes*");
      lines.push(notes);
    }
    lines.push("");
    lines.push("Please share pricing and the next steps. Thank you!");

    trackEvent("corporate_inquiry", {
      source: "corporate-form",
      orderType: orderType || undefined,
      volume: volume || undefined,
      frequency: frequency || undefined,
    });
    trackEvent("whatsapp_click", {
      source: "corporate-form",
      orderType: orderType || undefined,
    });

    const text = encodeURIComponent(lines.join("\n"));
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const fieldClass =
    "w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-transparent text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface-container-lowest rounded-3xl p-6 md:p-10 space-y-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="bulk-name" className="block text-sm font-bold mb-2">
            Full name <span className="text-error">*</span>
          </label>
          <input
            id="bulk-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="bulk-company" className="block text-sm font-bold mb-2">
            Company / Org / Gym / Event <span className="text-error">*</span>
          </label>
          <input
            id="bulk-company"
            type="text"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g. Adani Corp HQ, Cult.fit Bodakdev, Sharma wedding"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="bulk-phone" className="block text-sm font-bold mb-2">
            WhatsApp / phone <span className="text-error">*</span>
          </label>
          <input
            id="bulk-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 ──── ──── ──"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="bulk-email" className="block text-sm font-bold mb-2">
            Email <span className="text-on-surface-variant/60 font-normal text-xs">(optional)</span>
          </label>
          <input
            id="bulk-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="bulk-type" className="block text-sm font-bold mb-2">
            Order type <span className="text-error">*</span>
          </label>
          <select
            id="bulk-type"
            required
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
            className={fieldClass}
          >
            <option value="" disabled>
              Choose an order type
            </option>
            {orderTypes.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="bulk-products" className="block text-sm font-bold mb-2">
            What do you need? <span className="text-error">*</span>
          </label>
          <select
            id="bulk-products"
            required
            value={products}
            onChange={(e) => setProducts(e.target.value)}
            className={fieldClass}
          >
            <option value="" disabled>
              Bowls, juices, or both
            </option>
            {productOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="bulk-volume" className="block text-sm font-bold mb-2">
            Estimated volume <span className="text-error">*</span>
          </label>
          <select
            id="bulk-volume"
            required
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className={fieldClass}
          >
            <option value="" disabled>
              Servings per delivery
            </option>
            {volumeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="bulk-frequency" className="block text-sm font-bold mb-2">
            Frequency <span className="text-error">*</span>
          </label>
          <select
            id="bulk-frequency"
            required
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className={fieldClass}
          >
            <option value="" disabled>
              How often?
            </option>
            {frequencyOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="bulk-date" className="block text-sm font-bold mb-2">
            Preferred start / event date
          </label>
          <input
            id="bulk-date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="bulk-location" className="block text-sm font-bold mb-2">
            Delivery area in Ahmedabad
          </label>
          <input
            id="bulk-location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. SG Highway, Bodakdev, Prahladnagar"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="bulk-notes" className="block text-sm font-bold mb-2">
          Additional notes
        </label>
        <textarea
          id="bulk-notes"
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Allergies, theme, packaging requests, dietary restrictions, headcount split…"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-bold text-base rounded-full hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Send inquiry on WhatsApp
      </button>

      <p className="text-xs text-on-surface-variant text-center leading-relaxed">
        Opens WhatsApp with your inquiry pre-filled. Our corporate team replies
        with pricing within{" "}
        <strong className="text-on-surface">2 business hours</strong> on weekdays.
      </p>

      <div className="flex items-center gap-2 justify-center text-xs text-on-surface-variant pt-2 border-t border-outline-variant/30">
        <MaterialIcon icon="lock" size="14px" />
        <span>Your details are sent directly to our team — never stored on the site.</span>
      </div>
    </form>
  );
}
