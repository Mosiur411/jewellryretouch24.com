import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  let { data } = await request.json();
  if (request.method !== "POST") {
    return NextResponse.error("Method not allowed", { status: 405 });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      serviceType,
      instruction,
      fileLink,
    } = data;

    const transporterClientSent = nodemailer.createTransport({
      port: 567,
      host: "smtp.gmail.com",
      service: "gmail",
      auth: {
        user: "photoeditspecialist@gmail.com",
        pass: "kqzexpikmwcathnj",
      },
    });

    await transporterClientSent.sendMail({
      from: "photoeditspecialist@gmail.com",
      to: email,
      subject: "Welcome to Photoeditspecialist",
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
        <h2 style="color: #333;">Dear ${firstName},</h2>
        <p>Thank you for reaching out to <strong>PhotoEditSpecialist</strong>! We appreciate your interest in our professional photo editing services.</p>
        <p>Our team is dedicated to providing <strong>high-quality</strong> and <strong>precise</strong> edits to meet your needs. Whether you need background removal, retouching, color correction, or any other image enhancement, we are here to help!</p>
        
        <h3>What Happens Next?</h3>
        <ul>
          <li>✅ Our team will review your request and get back to you shortly.</li>
          <li>✅ If you have any specific requirements, feel free to share details with us.</li>
          <li>✅ We strive to provide fast and professional service to ensure your satisfaction.</li>
        </ul>
        
        <p>If you have any urgent requests, feel free to reply to this email or contact us directly.</p>

        <p>Looking forward to working with you!</p>
        
        <p>Best regards,</p>
        <p><strong>PhotoEditSpecialist Team</strong></p>
        <p>📧 <a href="mailto:photoeditspecialist@gmail.com">photoeditspecialist@gmail.com</a></p>
      </div>
    `,
    });
    await transporterClientSent.sendMail({
      from: "photoeditspecialist@gmail.com",
      to: 'rmdmostafizur350@gmail.com',
      subject: "Welcome to Photoeditspecialist",
      html: `
            <p>First Name: ${firstName}</p>
            <p>Last Name: ${lastName}</p>
            <p>Email: ${email}</p>
            <p>Phone Number: ${phoneNumber}</p>
            <p>Service Type: ${serviceType}</p>
            <p>File Link: ${fileLink}</p>
            <p>Instruction: ${instruction}</p>
        `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
