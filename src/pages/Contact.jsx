import Main from "../layout/Main";

import ContactForm from "../components/contact/ContactForm";
import ContactInfoItem from "../components/contact/ContactInfoItem";

import { Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <Main>
      <section className="relative flex items-center gap-6 min-h-screen py-(--nav-height) z-10 max-md:flex-col">
        <div className="flex flex-col w-[40%] max-md:w-full">
          <p className="eyebrow">Contact us</p>
          <h1 className="heading-lg mb-5">Let's Discuss Your Project</h1>
          <div className="accent-line"></div>
          <div className="mb-6">
            <p className="text-gray-dark">
              Have any questions or ready to start your project?
            </p>
            <p className="text-gray-dark">We would love to hear from you.</p>
          </div>
          <div className="flex flex-col gap-4">
            <ContactInfoItem
              Icon={Phone}
              title="Call Us"
              primary="(234) 345-4674"
              secondary="Mon - Fri: 8am - 6pm"
            />
            <ContactInfoItem
              Icon={Mail}
              title="Email Us"
              primary="info@gmsolutions.com"
              secondary="We reply within 24 hours"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 p-6 rounded-md shadow-md bg-gray-transparent max-md:w-full max-md:p-2">
          <h2 className="heading-sm mb-2">Send us a message</h2>
          <p className="mb-4 text-sm text-gray-dark">
            Fill out the form below and we will get back to you shortly
          </p>
          <ContactForm />
        </div>
      </section>
    </Main>
  );
}
