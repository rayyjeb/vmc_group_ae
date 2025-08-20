import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const data = {
  facebookLink: "https://facebook.com/mvpblocks",
  instaLink: "https://instagram.com/mvpblocks",
  twitterLink: "https://twitter.com/mvpblocks",
  githubLink: "https://github.com/mvpblocks",
  dribbbleLink: "https://dribbble.com/mvpblocks",
  services: {
    webdev: "/web-development",
    webdesign: "/web-design",
    marketing: "/marketing",
    googleads: "/google-ads",
  },
  about: {
    history: "/company-history",
    team: "/meet-the-team",
    handbook: "/employee-handbook",
    careers: "/careers",
  },
  help: {
    faqs: "/faqs",
    support: "/support",
    livechat: "/live-chat",
  },
  contact: {
    email: "info@vmcgroupuae.com",
    phone: "04-2298205 | 052-3113329",
    address: "Dubai, UAE",
  },
  company: {
    name: "VMC General Trading LLC",
    description:
      "By embracing innovation at every stage—from sourcing and logistics to distribution and customer engagement—we ensure that our partners and clients benefit from the latest advancements in the industry.",
    logo: "/logo.webp",
  },
};

// const socialLinks = [
//   { icon: Facebook, label: "Facebook", href: data.facebookLink },
//   { icon: Instagram, label: "Instagram", href: data.instaLink },
//   { icon: Twitter, label: "Twitter", href: data.twitterLink },
//   { icon: Github, label: "GitHub", href: data.githubLink },
//   { icon: Dribbble, label: "Dribbble", href: data.dribbbleLink },
// ];

const aboutLinks = [
  { text: "Company History", href: data.about.history },
  { text: "About Us", href: data.about.team },
  { text: "Careers", href: data.about.careers },
];

const serviceLinks = [
  { text: "Food Packaging Solutions", href: data.services.webdev },
  { text: "Frozen Food Distribution", href: data.services.webdesign },
  { text: "Raw Food Supply", href: data.services.marketing },
  { text: "Daily Essentials", href: data.services.googleads },
];

const helpfulLinks = [
  { text: "FAQs", href: data.help.faqs },
  { text: "Support", href: data.help.support },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
  return (
    <footer className="mt-16 w-full place-self-end rounded-t-xl bg-secondary dark:bg-secondary/20">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex justify-center flex-col items-center lg:items-start">
            <div className="flex flex-col justify-center gap-2 text-primary items-center lg:items-start">
              <img
                src={data.company.logo || "/placeholder.svg"}
                alt="logo"
                className="size-18 rounded-full"
              />
              <span className="text-2xl font-semibold">{data.company.name}</span>
            </div>

            <p className="mt-6 w-full lg:max-w-md text-center leading-relaxed text-foreground/50 sm:text-left">
              {data.company.description}
            </p>

            {/* <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-primary transition hover:text-primary/80">
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">About Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text }) => (
                  <li key={text}>
                    <a className="text-secondary-foreground/70 transition">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Our Services</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text }) => (
                  <li key={text}>
                    <a className="text-secondary-foreground/70 transition">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Helpful Links</p>
              <ul className="mt-8 space-y-4 text-sm">
                {helpfulLinks.map(({ text }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 transition"
                    >
                      <span className="text-secondary-foreground/70 transition">{text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="#"
                    >
                      <Icon className="size-5 shrink-0 text-primary" />
                      {isAddress ? (
                        <address className="-mt-0.5 flex-1 not-italic text-secondary-foreground/70 transition">
                          {text}
                        </address>
                      ) : (
                        text === data.contact.phone ? (
                          <span className="flex-1 text-secondary-foreground/70 transition">
                            {text.split("|").map((num, idx) => (
                              <span key={idx} className={idx > 0 ? "block" : ""}>
                                {num.trim()}
                              </span>
                            ))}
                          </span>
                        ) : (
                          <span className="flex-1 text-secondary-foreground/70 transition">
                            {text}
                          </span>
                        )
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-secondary-foreground/70 mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; 2025 {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
