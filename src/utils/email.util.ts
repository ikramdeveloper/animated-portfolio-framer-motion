import { sendForm } from "@emailjs/browser";

const serviceId = String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
const templateId = String(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
const publicKey = String(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

export const sendEmail = async (form: HTMLFormElement) => {
  await sendForm(serviceId, templateId, form, publicKey);
};
