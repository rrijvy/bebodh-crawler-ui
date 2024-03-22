import { Benefits } from "@/components/landing/benefits";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import { SectionTitle } from "@/components/landing/sectionTitle";
import { Video } from "@/components/landing/video";
import { Testimonials } from "@/components/landing/testimonials";
import { Footer } from "@/components/landing/footer";
import { Cta } from "@/components/landing/cta";
import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

export default function Home() {
  const benefitOne = {
    title: "Highlight your benefits",
    desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
    image: benefitOneImg,
    bullets: [
      {
        title: "Understand your customers",
        desc: "Then explain the first point breifly in one or two lines.",
      },
      {
        title: "Improve acquisition",
        desc: "Here you can add the next benefit point.",
      },
      {
        title: "Drive customer retention",
        desc: "This will be your last bullet point in this section.",
      },
    ],
  };

  const benefitTwo = {
    title: "Offer more benefits here",
    desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
    image: benefitTwoImg,
    bullets: [
      {
        title: "Mobile Responsive Template",
        desc: "Nextly is designed as a mobile first responsive template.",
      },
      {
        title: "Powered by Next.js & TailwindCSS",
        desc: "This template is powered by latest technologies and tools.",
      },
      {
        title: "Dark & Light Mode",
        desc: "Nextly comes with a zero-config light & dark mode. ",
      },
    ],
  };

  return (
    <main className="">
      <Navbar />
      <Hero />
      <SectionTitle align="left" pretitle="Nextly Benefits" title=" Why should you use this landing page">
        Nextly is a free landing page & marketing website template for startups and indie projects. Its built with Next.js & TailwindCSS.
        And its completely open-source.
      </SectionTitle>
      <Benefits {...benefitOne} />
      <Benefits imgPos="right" {...benefitTwo} />
      <SectionTitle align="left" pretitle="Watch a video" title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product. Analysts says a landing page with video has 3% more conversion
        rate. So, don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle align="left" pretitle="Testimonials" title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness. Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle align="left" pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the conversion rate as well as support or chat requests.
      </SectionTitle>
      <Cta />
      <Footer />
    </main>
  );
}
