import { Resend } from "resend";

console.log("Clé présente :", Boolean(process.env.RESEND_API_KEY));
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, subject, message } = await request.json();
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "desousaenzo0718@gmail.com",
    replyTo: email,
    subject: subject,
    text: `
        Nom: ${name}
        Email: ${email}
        Message: ${message}
        `,
  });
  if (data == null) {
    return Response.json(
      { message: `Impossible d'envoyer le mail` },
      { status: 500 },
      console.log(message),
    );
  }
  if (error == null) {
    return Response.json(
      { message: `Message transmis` },
      { status: `200` },
      console.log(message),
    );
  }
}
