import { NextResponse } from "next/server"
const nodemailer = require('nodemailer');

export async function POST(request) {
    let { data } = await request.json()
    if (request.method !== 'POST') {
        return NextResponse.error("Method not allowed", { status: 405 });
    }

    try {
        const { firstName, lastName, email, phoneNumber, serviceType, instruction } = data;
        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            port: 567,
            host: "smtp.gmail.com",
            service: 'gmail',
            auth: {
                user: 'mosiurislamwebdesign@gmail.com',
                pass: 'qxluvftskdklzard'
            },
        });

        // Send mail with defined transport object
        const info = await transporter.sendMail({
            from: 'mosiurislamwebdesign@gmail.com', // Sender address
            to: 'mosiurislam411@gmail.com', // List of recipients
            subject: 'New Form Submission', // Subject line
            html: `
                <p>First Name: ${firstName}</p>
                <p>Last Name: ${lastName}</p>
                <p>Email: ${email}</p>
                <p>Phone Number: ${phoneNumber}</p>
                <p>Service Type: ${serviceType}</p>
                <p>Instruction: ${instruction}</p>
            ` 
        });
        return NextResponse.json({success:true});
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.error('Internal Server Error', { status: 500 });
    }
    ;
}