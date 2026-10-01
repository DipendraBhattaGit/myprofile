import nodemailer from 'nodemailer';
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const line = (s) => String(s).replace(/[\r\n]+/g, ' ');
let t;
const transport = () => (t ??= nodemailer.createTransport({
  host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT) || 465, secure: Number(process.env.SMTP_PORT) === 465,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
}));

export async function sendEnquiry({ name, email, subject, message }) {
  const when = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Kathmandu' });
  await transport().sendMail({
    from: `"Portfolio" <${process.env.SMTP_USER}>`, to: process.env.CONTACT_EMAIL, replyTo: `"${line(name)}" <${email}>`,
    subject: `Portfolio Enquiry: ${line(subject)}`,
    text: `New Portfolio Enquiry\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\nSubmitted: ${when}`,
    html: `<h2>New Portfolio Enquiry</h2><p><b>Name:</b> ${esc(name)}<br><b>Email:</b> ${esc(email)}<br><b>Subject:</b> ${esc(subject)}</p><p><b>Message:</b><br>${esc(message).replace(/\n/g, '<br>')}</p><p><small>Submitted: ${when}</small></p>`,
  });
}

export async function sendAutoReply({ name, email }) {
  await transport().sendMail({
    from: `"Dipendra Bhatta" <${process.env.SMTP_USER}>`, to: email, subject: 'Thanks for reaching out',
    text: `Hi ${line(name)},\n\nThank you for reaching out through my portfolio.\n\nI have received your message and will get back to you as soon as possible.\n\nBest regards,\nDipendra Bhatta\nFull-Stack Web Developer`,
  });
}
