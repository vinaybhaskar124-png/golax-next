import Contact from "@/views/Contact";
import FAQPageSchema from "@/components/seo/FAQPageSchema";
import { contactFaqs } from "@/data/siteFaqs";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Contact Us – Free IT Consultation India & Global",
  description: "Contact Golax India for a free IT consultation — web development, software, mobile apps & digital marketing. Call +91 94700 24607. Serving India and 12+ countries.",
  keywords:
    "contact IT company India, free web development quote, software development consultation India, Golax India contact, IT company Patna phone number",
  canonicalUrl: "/contact",
});

export default function Page() {
  return (
    <>
      <FAQPageSchema faqs={contactFaqs} />
      <Contact />
    </>
  );
}
