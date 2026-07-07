// api/subscribe.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Newsletter <onboarding@resend.dev>",
      to: "shaheermalik1000@gmail.com",
      subject: "New Newsletter Subscriber",
      html: `
        <h2>New Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to subscribe" });
  }
}