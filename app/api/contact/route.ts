import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CONTACT_EMAIL } from "@/lib/constants";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: #36454f; padding: 24px; border-radius: 8px 8px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 22px;">New Enquiry — Bengal Consulting</h1>
  </div>
  <div style="border: 1px solid #e0e0e0; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 140px; color: #36454f;">Name</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #36454f;">Email</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #4682b4;">${email}</a></td>
      </tr>
      ${phone ? `<tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #36454f;">Phone / WhatsApp</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${phone}</td>
      </tr>` : ""}
      ${service ? `<tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #36454f;">Service Required</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${service}</td>
      </tr>` : ""}
      <tr>
        <td style="padding: 10px 0; font-weight: bold; color: #36454f; vertical-align: top;">Message</td>
        <td style="padding: 10px 0; white-space: pre-wrap;">${message}</td>
      </tr>
    </table>
    <div style="margin-top: 24px; padding: 16px; background: #f8fafc; border-radius: 6px; font-size: 12px; color: #708090;">
      Sent from the Bengal Consulting website contact form.
    </div>
  </div>
</body>
</html>`;

    await transporter.sendMail({
      from: `"Bengal Consulting Website" <${process.env.SMTP_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New Enquiry from ${name}${service ? ` — ${service}` : ""}`,
      html: emailHtml,
      text: `New enquiry from Bengal Consulting website\n\nName: ${name}\nEmail: ${email}\n${phone ? `Phone: ${phone}\n` : ""}${service ? `Service: ${service}\n` : ""}\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
