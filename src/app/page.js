import Image from "next/image";
import { connectDB } from "../../lib/db";
import ContactForm from "../../components/contact-form";
import { createContact } from "../../actions/contact";

export default async function Home() {

  await connectDB();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-2xl font-bold mb-6">
        Contact Us
      </h1>
      <ContactForm action={createContact}/>
    </div>
  );
}
