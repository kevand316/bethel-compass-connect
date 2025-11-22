import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "Eligibility",
      questions: [
        {
          q: "Who is eligible for Bethel Residency housing?",
          a: "We serve individuals experiencing homelessness or housing instability, including veterans, seniors, those with mental health challenges, individuals re-entering from incarceration, and those experiencing chronic homelessness. Specific eligibility varies by program.",
        },
        {
          q: "Do you serve veterans?",
          a: "Yes, we welcome veterans and can help connect you with VA-specific benefits and services.",
        },
        {
          q: "Is there an age requirement?",
          a: "We serve adults 18 and older. We have experience working with seniors and can accommodate age-related needs.",
        },
      ],
    },
    {
      category: "Services & Amenities",
      questions: [
        {
          q: "What is included in the housing?",
          a: "All homes are fully furnished and include utilities (electricity, gas, water, cable, WiFi), appliances (washer, dryer, stove, refrigerator, microwave, dishwasher), kitchen equipment, bedding, toiletries, and a welcome pack with hygiene products.",
        },
        {
          q: "What services are provided?",
          a: "We provide 24/7 on-site management, daily meals by certified food handlers, medication reminders, transportation assistance, connections to social services, housing navigation, credit repair, job readiness support, and more.",
        },
        {
          q: "Is participation in services voluntary?",
          a: "Yes, while we strongly encourage engagement with supportive services, participation is voluntary. We create a supportive, judgment-free environment.",
        },
      ],
    },
    {
      category: "Application & Move-In",
      questions: [
        {
          q: "How do I apply?",
          a: "Contact us at (951) 216-3326 or info@bethelresidency.com to begin the application process. We can also accept referrals from social service agencies, hospitals, and county partners.",
        },
        {
          q: "How long does the application process take?",
          a: "Timeline varies based on program availability and individual circumstances. We work to move quickly once eligibility is confirmed.",
        },
        {
          q: "What do I need to bring when I move in?",
          a: "Homes are fully furnished and equipped. You only need to bring personal clothing and items. We provide bedding, toiletries, and kitchen supplies.",
        },
      ],
    },
    {
      category: "Funding & Costs",
      questions: [
        {
          q: "How is this funded?",
          a: "Our programs are funded through state and county sources, including CalAIM, SSDI/SSI contributions when applicable, and partnerships with local agencies. Many residents pay little to no out-of-pocket costs.",
        },
        {
          q: "Do I need to pay rent?",
          a: "Cost varies by program and individual circumstances. Many programs are fully funded through county partnerships or federal benefits. We work with each resident to determine their contribution based on income.",
        },
        {
          q: "Can I use my SSI/SSDI benefits?",
          a: "Yes, for some programs, SSI/SSDI benefits can be used to contribute toward housing costs. We help residents apply for and manage their benefits.",
        },
      ],
    },
    {
      category: "Length of Stay",
      questions: [
        {
          q: "How long can I stay?",
          a: "Length of stay depends on the program. Our transitional housing programs typically last 6-24 months, while we also offer rapid rehousing and permanent supportive housing options. We work with each resident to create an individualized plan.",
        },
        {
          q: "What happens after I leave?",
          a: "We provide housing navigation services to help residents find permanent housing. We assist with applications, connections to landlords, and transition support to ensure long-term stability.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Find answers to common questions about our programs and services
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="mx-auto max-w-3xl space-y-12">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="mb-6 text-2xl font-bold">{section.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {section.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`${section.category}-${index}`}
                    className="rounded-lg border bg-card px-6"
                  >
                    <AccordionTrigger className="text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 rounded-lg bg-muted/50 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold">Still Have Questions?</h3>
          <p className="mb-6 text-muted-foreground">
            We're here to help. Contact us directly for more information.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:9512163326"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90"
            >
              Call (951) 216-3326
            </a>
            <a
              href="mailto:info@bethelresidency.com"
              className="inline-flex items-center justify-center rounded-md border bg-background px-6 py-3 font-medium hover:bg-muted"
            >
              Email Us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
