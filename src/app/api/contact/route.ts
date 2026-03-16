import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactForm {
  name: string;
  phone: string;
  email?: string;
  petType: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();

    // Validation
    if (!body.name || !body.phone || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "Lütfen zorunlu alanları doldurun." },
        { status: 400 }
      );
    }

    // Phone validation
    const phoneRegex = /^[0-9+\s()-]{10,15}$/;
    if (!phoneRegex.test(body.phone)) {
      return NextResponse.json(
        { error: "Geçersiz telefon numarası." },
        { status: 400 }
      );
    }

    // Email validation (if provided)
    if (body.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email)) {
        return NextResponse.json(
          { error: "Geçersiz e-posta adresi." },
          { status: 400 }
        );
      }
    }

    const subjectMap: Record<string, string> = {
      randevu: "Randevu Talebi",
      bilgi: "Genel Bilgi",
      acil: "ACİL DURUM",
      diger: "Diğer",
    };

    const petTypeMap: Record<string, string> = {
      kedi: "Kedi",
      kopek: "Köpek",
      diger: "Diğer",
    };

    // Send email if SMTP is configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Mylia Veteriner Web" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || "info@myliaveteriner.com",
        subject: `[Web] ${subjectMap[body.subject] || body.subject} - ${body.name}`,
        html: `
          <h2>Yeni İletişim Formu Mesajı</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Ad Soyad</td><td style="padding: 8px; border: 1px solid #ddd;">${body.name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Telefon</td><td style="padding: 8px; border: 1px solid #ddd;">${body.phone}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">E-posta</td><td style="padding: 8px; border: 1px solid #ddd;">${body.email || "-"}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Evcil Hayvan</td><td style="padding: 8px; border: 1px solid #ddd;">${petTypeMap[body.petType] || body.petType}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Konu</td><td style="padding: 8px; border: 1px solid #ddd;">${subjectMap[body.subject] || body.subject}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Mesaj</td><td style="padding: 8px; border: 1px solid #ddd;">${body.message}</td></tr>
          </table>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Bir hata oluştu. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
