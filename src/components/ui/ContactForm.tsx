"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  petType: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    petType: "kedi",
    subject: "randevu",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          petType: "kedi",
          subject: "randevu",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">
            Ad Soyad *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            placeholder="Adınız Soyadınız"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            placeholder="05XX XXX XX XX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
          E-posta
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          placeholder="ornek@email.com"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="petType" className="block text-sm font-medium text-dark mb-1">
            Evcil Hayvan Türü
          </label>
          <select
            id="petType"
            value={formData.petType}
            onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
          >
            <option value="kedi">Kedi</option>
            <option value="kopek">Köpek</option>
            <option value="diger">Diğer</option>
          </select>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-dark mb-1">
            Konu *
          </label>
          <select
            id="subject"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
          >
            <option value="randevu">Randevu Talebi</option>
            <option value="bilgi">Genel Bilgi</option>
            <option value="acil">Acil Durum</option>
            <option value="diger">Diğer</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">
          Mesajınız *
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
          placeholder="Mesajınızı yazın..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-white hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Gönderiliyor..." : "Mesaj Gönder"}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-sm text-center font-medium">
          Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm text-center font-medium">
          Bir hata oluştu. Lütfen tekrar deneyin veya bizi telefonla arayın.
        </p>
      )}
    </form>
  );
}
