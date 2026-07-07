import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Star,
  GraduationCap,
  Briefcase,
  Facebook,
  Youtube,
  Twitter,
  Instagram,
  Linkedin,
  Sparkle,
  Palette,
  Smartphone,
  Monitor,
  LayoutDashboard,
  PenTool,
  Menu,
  X,
}
 from "lucide-react";

import heroImg from "@/assets/my.jpeg";
import aboutImg from "@/assets/my.jpeg";
import projBeautyApp from "@/assets/project-beauty-app.jpg";
import projBeautyWeb from "@/assets/project-beauty-web.jpg";
import projCoffeeApp from "@/assets/project-coffee-app.jpg";
import projCoffeeWeb from "@/assets/project-coffee-web.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";


/* ---------------- shared bits ---------------- */


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={light ? "eyebrow-light" : "eyebrow"}>
      <span
        className={`inline-block h-px w-6 ${light ? "bg-white/60" : "bg-foreground/50"}`}
      />
      {children}
    </span>
  );
}

function PillButton({
  children,
  variant = "primary",
  href = "#",
}: {
  children: React.ReactNode;
  variant?: "primary" | "gold" | "ghost";
  href?: string;
}) {
  const base =
    "group inline-flex items-center gap-3 rounded-full pl-6 pr-1.5 py-1.5 font-medium transition-transform hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-brand text-brand-foreground"
      : variant === "gold"
        ? "bg-gold text-gold-foreground"
        : "bg-white text-foreground border border-border";
  const dot =
    variant === "primary"
      ? "bg-gold text-gold-foreground"
      : variant === "gold"
        ? "bg-brand text-brand-foreground"
        : "bg-gold text-gold-foreground";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      <span>{children}</span>
      <span
        className={`grid h-9 w-9 place-items-center rounded-full transition-transform group-hover:translate-x-0.5 ${dot}`}
      >
        <ArrowRight className="h-4 w-4" />
      </span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Services", "About", "Projects", "Blogs", "Reviews"];
  return (
    <header className="sticky top-4 z-50 mx-auto max-w-6xl px-4">
      <nav className="rounded-full bg-brand text-brand-foreground shadow-[0_4px_12px_-6px_oklch(0.42_0.09_145_/_0.25)]">
        <div className="flex items-center justify-between pl-3 pr-2 py-2">
          <a href="#home" className="flex items-center gap-2 pl-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-gold-foreground font-bold">
              SH
            </span>
            <span className="text-lg font-semibold">Shaheer.</span>
          </a>

          <ul className="hidden items-center gap-7 text-sm md:flex">
            {links.map((l, i) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className={`transition ${i === 0 ? "italic-accent" : "text-white/85 hover:text-white"}`} style={i === 0 ? { color: "var(--color-gold)" } : undefined}>
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href="#contact" className=" rounded-full bg-white text-foreground px-5 py-2.5 text-sm font-medium hover:bg-gold hover:text-gold-foreground transition">
              Contact Me
            </a>
            <button type="button" onClick={() => setOpen((v) => !v)} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 md:hidden" aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
           <div className="absolute left-0 right-0 top-full mt-2 mx-4 rounded-2xl bg-brand shadow-2xl md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block text-white/90 hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-14 pb-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="relative"
        >
          <motion.div variants={fadeUp} className="mb-6 inline-block">
            <span className="relative inline-block border border-gold/70 px-3 py-1 text-sm">
              Hello There!
              <span className="absolute -left-1 -top-1 h-2 w-2 border-l-2 border-t-2 border-gold" />
              <span className="absolute -right-1 -top-1 h-2 w-2 border-r-2 border-t-2 border-gold" />
              <span className="absolute -left-1 -bottom-1 h-2 w-2 border-l-2 border-b-2 border-gold" />
              <span className="absolute -right-1 -bottom-1 h-2 w-2 border-r-2 border-b-2 border-gold" />
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl"
          >
            I'm <span className="italic-accent">Shaheer Haider,</span>
            <br />
            Frontend developer
            <br />
            Based in Pakistan.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-md text-muted-foreground">
            I'm an experienced Frontend developer with 1+ years in the field, collaborating with
            various companies and startups.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <PillButton href="#projects">View My Portfolio</PillButton>
            <a
              href="#contact"
              className="rounded-full border border-border bg-white px-6 py-3 text-sm font-medium hover:border-brand transition"
            >
              Hire Me
            </a>
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
          <div className="absolute inset-0 top-8 left-6 rounded-full bg-gold" />
          <motion.img
            src={heroImg}
            alt="Shaheer Haider, Frontend developer"
            width={896}
            height={1024}
            className="relative z-10 h-full w-full rounded-[2.5rem] object-cover object-top"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          {/* floating chips */}
         
          <motion.span
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute z-20 bottom-16 left-0 rounded-full bg-brand px-4 py-1.5 text-sm text-brand-foreground shadow-lg"
          >
            Frontend developer
          </motion.span>
        </div>
      </div>

      {/* Angled marquee */}
      <MarqueeBar />
    </section>
  );
}

function MarqueeBar() {
  const items = ["HTML", "CSS", "Javascript", "React", "Responsive Web design", "Frontend developer"];
  const row = [...items, ...items, ...items];
  return (
    <div className="relative mt-16">
      <div className="relative -mx-2 overflow-hidden bg-[oklch(0.65_0.13_145)] py-4 text-[oklch(0.15_0.02_260)]">
        <div className="absolute inset-y-0 left-0 w-6 " />
        <div className="marquee flex w-max gap-10 text-2xl font-semibold whitespace-nowrap">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              {t}
              <Sparkle className="h-5 w-5 fill-current" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Services ---------------- */

function Services() {
  const services = [
    {
      icon: Monitor,
      title: "Responsive Web Development",
      desc: "Building fast, responsive, and user-friendly websites for all devices."
    },
    {
      icon: Smartphone,
      title: "React.js Applications",
      desc: "Creating modern single-page applications using React and reusable components."
    },
    {
      icon: LayoutDashboard,
      title: "Admin Dashboard Development",
      desc: "Developing clean and interactive dashboards with charts, tables, and analytics."
    },
    {
      icon: PenTool,
      title: "Figma to Code",
      desc: "Converting Figma and UI designs into pixel-perfect, responsive websites."
    },
    {
      icon: Sparkle,
      title: "API Integration",
      desc: "Connecting frontend applications with REST APIs and external services."
    },
    {
      icon: Palette,
      title: "Website Maintenance",
      desc: "Fixing bugs, improving performance, and maintaining existing web projects."
    },
  ]
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              <span className="italic-accent">Services</span> I Provide
            </h2>
          </div>
          <PillButton href="#services">View All Services</PillButton>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-secondary/60 p-6 "
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-white shadow ring-1 ring-border">
                <s.icon className="h-5 w-5 text-brand" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-1.5 text-sm text-foreground group-hover:text-brand"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5 text-gold" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

function About() {
  const stats = [
    { n: "20+", l: "Projects Completed" },
    { n: "10+", l: "Industries Covered" },
    { n: "1+", l: "Years of Experience" },
  ];
 const chips = [
  "Responsive Websites",
  "React Development",
  "Landing Pages",
  "Admin Dashboards",
  "Figma to Code",
  "API Integration",
  "Website Maintenance",
  "Performance Optimization",
  "Bug Fixing",
];
  return (
    <section id="about" className="bg-brand text-brand-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2">
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-8 rounded-full bg-gold" />
          <img
            src={aboutImg}
            alt="Olivia Smith"
            loading="lazy"
            width={768}
            height={768}
            className="relative z-10 h-full w-full rounded-full object-cover"
          />
          <div className="absolute inset-x-4 bottom-6 z-20 grid grid-cols-3 justify-items-center gap-2 text-[11px] font-medium">
            {chips.map((c, i) => (
              <span
                key={c}
                className={`rounded-full px-3 py-1 shadow ${
                  i % 2 === 0 ? "bg-gold text-gold-foreground" : "bg-white text-foreground"
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div>
          <Eyebrow light>About Me</Eyebrow>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Who is <span className="italic-accent">Shaheer Haider?</span>
          </h2>
          <p className="mt-4 max-w-lg text-white/80">
            I develop digital products that feel obvious in the hand and inevitable on the screen.
            From lean startups to Fortune 500 teams, I turn messy problems into calm, confident
            interfaces.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-bold italic-accent">{s.n}</div>
                <div className="mt-1 text-xs text-white/70">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <PillButton variant="gold" href="#">
              Download CV
            </PillButton>
            <span
              className="text-3xl text-gold"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Shaheer Haider
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */

function Projects() {
  const items = [
    {
      img: projBeautyApp,
      tags: ["UI/UX Design", "App Design", "Wireframe"],
      title: "Beauty Product — Ecommerce Mobile App Solution",
    },
    {
      img: projBeautyWeb,
      tags: ["UI/UX Design", "Web Design", "Wireframe"],
      title: "Beauty Product Mobile App Landing Page Design",
    },
    {
      img: projCoffeeApp,
      tags: ["UI/UX Design", "App Design", "Wireframe"],
      title: "Coffee Shop App — Coffee Ordering App Solution",
    },
    {
      img: projCoffeeWeb,
      tags: ["UI/UX Design", "Web Design", "Wireframe"],
      title: "Coffee Shop Mobile App Landing Page Design",
    },
  ];
  return (
    <section id="projects" className="bg-secondary/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>My Portfolio</Eyebrow>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              My Latest <span className="italic-accent">Projects</span>
            </h2>
          </div>
          <PillButton href="#projects">View All Projects</PillButton>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {items.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (i % 2) * 0.1 }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-border">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-gold px-3 py-1 text-xs font-medium text-gold-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold leading-snug">{p.title}</h3>
                <a
                  href="#"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground transition hover:bg-gold hover:text-gold-foreground"
                  aria-label="Open project"
                >
                  <Plus className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Journey ---------------- */

function Journey() {
  const edu = [
    { year: "2021 — 2023", school: "Fazaia College ", degree: "Intermediate in Pre-Eng" },
    { year: "2023 — 2027", school: "Lahore Garrison University", degree: "Bachelor in Computer Sciene" },
  ];
  const work = [
    { year: "2023 — 2024", school: "Corvit System", degree: "Frontend developer" },
    { year: "2025 — 2026", school: "Self‑Employed", degree: "Freelance" },
  ];
  const Card = ({
    icon: Icon,
    label,
    items,
  }: {
    icon: typeof GraduationCap;
    label: string;
    items: typeof edu;
  }) => (
    <div className="rounded-2xl bg-secondary/60 p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-gold text-gold-foreground">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-2xl font-bold">{label}</h3>
      </div>
      <ul className="space-y-6">
        {items.map((it) => (
          <li key={it.school} className="border-l border-border pl-4">
            <div className="text-xs text-muted-foreground">{it.year}</div>
            <div className="mt-1 text-lg font-semibold">{it.school}</div>
            <div className="text-sm text-muted-foreground">{it.degree}</div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Education & Work</Eyebrow>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            My <span className="italic-accent">Academic and Professional</span> Journey
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Card icon={GraduationCap} label="Education" items={edu} />
          <Card icon={Briefcase} label="Work Experience" items={work} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */

function Pricing() {
  const plans = [
    {
      name: "Hourly",
      price: "$5",
      per: "/ Hour",
      features: [
        "Product & UI design",
        "Async design reviews",
        "One live call per week",
        "Source files delivery",
      ],
    },
    {
      name: "Monthly",
      price: "$800",
      per: "/ Month",
      featured: true,
      features: [
        "Everything in Hourly",
        "Dedicated design partner",
        "Unlimited requests",
        "Priority Slack channel",
        "Design system upkeep",
        "Weekly working sessions",
      ],
    },
    {
      name: "Quarterly",
      price: "$2400",
      per: "/ Quarter",
      features: [
        "Everything in Monthly",
        "Discovery workshops",
        "Roadmap alignment",
        "Quarterly design audit",
        "On-site kickoff option",
        "Executive summary reports",
      ],
    },
  ];
  return (
    <section className="bg-brand text-brand-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow light>Pricing Table</Eyebrow>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              My <span className="italic-accent">Pricing Model</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-white/10 pl-6 pr-1.5 py-1.5 text-sm font-medium ring-1 ring-white/20 hover:bg-white/15"
          >
            Get Started
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-gold-foreground">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 transition ${
                p.featured
                  ? "bg-gold text-gold-foreground scale-[1.02] shadow-2xl"
                  : "bg-white/5 text-brand-foreground ring-1 ring-white/15"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">{p.name}</span>
                <span
                  className={`grid h-9 w-9 place-items-center rounded-full ${
                    p.featured ? "bg-white text-gold-foreground" : "bg-gold text-gold-foreground"
                  }`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-bold italic-accent" style={p.featured ? { color: "var(--color-brand)" } : undefined}>
                  {p.price}
                </span>
                <span className={p.featured ? "text-brand" : "text-white/70"}>{p.per}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      className={`mt-0.5 grid h-4 w-4 place-items-center rounded-full text-[10px] font-bold ${
                        p.featured
                          ? "bg-brand text-gold"
                          : "bg-gold text-gold-foreground"
                      }`}
                    >
                      ✓
                    </span>
                    <span className={p.featured ? "" : "text-white/85"}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    budget: "",
    country: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("sent");
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        budget: "",
        country: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>Contact Us</Eyebrow>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Let's Talk for <span className="italic-accent">Your Next Projects</span>
          </h2>
          <p className="mt-4 max-w-sm text-muted-foreground">
            Have a project in mind or just want to say hi? I'd love to hear about what you're
            building.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            {[
              { icon: Phone, label: "+92 3194457216" },
              { icon: Mail, label: "shaheermalik1000@gmail.com" },
              { icon: MapPin, label: "Gulshan, Park, Lahore Cantt 54000" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-gold-foreground">
                  <Icon className="h-4 w-4" />
                </span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field name="name" label="Your Name" placeholder="Ex: John Doe" value={formData.name} onChange={handleChange} />
          <Field name="email" label="Email" placeholder="example@gmail.com" type="email" value={formData.email} onChange={handleChange} />
          <Field name="phone" label="Phone" placeholder="Enter Phone Number" value={formData.phone} onChange={handleChange} />
          <Field name="interest" label="I'm Interested in" placeholder="Select" value={formData.interest} onChange={handleChange} />
          <Field name="budget" label="Budget Range (USD)" placeholder="Select Range" value={formData.budget} onChange={handleChange} />
          <Field name="country" label="Country" placeholder="Select Country" value={formData.country} onChange={handleChange} />
          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-medium">Your Message *</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Enter Here…"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-brand focus:outline-none"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex items-center gap-3 rounded-full bg-brand text-brand-foreground pl-6 pr-1.5 py-1.5 font-medium transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              <span>{status === "sending" ? "Sending..." : "Submit"}</span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-gold-foreground">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
            {status === "sent" && (
              <p className="text-green-600 mt-2 text-sm">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-2 text-sm">Kuch masla ho gaya, dobara try karein.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label} *</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-brand focus:outline-none"
      />
    </label>
  );
}

/* ---------------- Reviews ---------------- */

function Reviews() {
  const items = [
    {
      name: "Emma Reed",
      role: "PM, Northwind Labs",
      quote:
        "Olivia has an uncanny ability to translate rough ideas into confident designs. Our activation jumped 34% after her redesign.",
    },
    {
      name: "Leslie Alexander",
      role: "Founder, EV Charger Station",
      quote:
        "Working with Olivia felt like adding a senior partner to the team. She thinks in systems, ships in details, and always beats the brief.",
    },
    {
      name: "Albert Flores",
      role: "CTO, Software Agency",
      quote:
        "Rare combination of taste, speed and rigor. She elevated every single flow we handed her and left us with a design system that scales.",
    },
  ];
  return (
    <section id="reviews" className="bg-secondary/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Clients Reviews</Eyebrow>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            The Impact of My Work:
            <br />
            <span className="italic-accent">Client Reviews</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-2 text-sm font-semibold text-foreground">5.0</span>
              </div>
              <blockquote className="mt-4 text-sm text-muted-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-brand-foreground font-semibold">
                  {t.name[0]}
                </span>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Blogs ---------------- */

function Blogs() {
  const posts = [
    { img: blog1, tag: "App/UI Design", date: "21 May 2024", title: "Minimalist UI Design: Benefits and Best Practices" },
    { img: blog2, tag: "Website UI/UX Design", date: "30 May 2024", title: "Improving User Experience: Best Practices for Web Design" },
    { img: blog3, tag: "Color Theory", date: "11 May 2024", title: "Understanding the Color Wheel: Basics Every Designer Needs" },
  ];
  return (
    <section id="blogs" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>News & Blogs</Eyebrow>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Our Latest
              <br />
              <span className="italic-accent">News & Blogs</span>
            </h2>
          </div>
          <PillButton href="#blogs">View All Blogs</PillButton>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group">
              <div className="overflow-hidden rounded-2xl ring-1 ring-border">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-medium text-gold-foreground">
                  {p.tag}
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                  {p.date}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-brand transition">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A short primer with practical rules of thumb and examples from real projects.
              </p>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium"
              >
                Read More <ArrowRight className="h-3.5 w-3.5 text-gold" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("sent");
      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div>
      <h4 className="italic-accent text-lg">Get the latest information</h4>
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex items-center rounded-full border border-border bg-white p-1"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email address"
          className="flex-1 bg-transparent px-4 text-sm outline-none"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="grid h-9 w-9 place-items-center rounded-full bg-gold text-gold-foreground disabled:opacity-60"
          aria-label="Subscribe"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
      {status === "sent" && (
        <p className="mt-2 text-xs text-green-600">Subscribed successfully!</p>
      )}
      {status === "error" && (
        <p className="mt-2 text-xs text-red-600">Kuch masla ho gaya, dobara try karein.</p>
      )}
    </div>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="bg-white">
      <MarqueeBar />
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-6">
          <h3 className="text-3xl font-bold md:text-4xl">
            Let's <span className="italic-accent">Connect</span> there
          </h3>
          <PillButton href="https://calendly.com/shaheermalik1000/30min">Book a Call</PillButton>
        </div>
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-gold-foreground font-bold">
                SH
              </span>
              <span className="text-lg font-semibold">Shaheer.</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Frontend developer helping ambitious teams craft calm, confident digital products.
            </p>
            <div className="mt-5 flex gap-2">
  <a
    href="https://www.facebook.com/share/1BYB7vB6xt/"
    target="_blank"
    rel="noopener noreferrer"
    className="grid h-9 w-9 place-items-center rounded-full bg-gold text-gold-foreground hover:bg-brand hover:text-brand-foreground transition"
  >
    <Facebook className="h-4 w-4" />
  </a>

  <a
    href="https://www.instagram.com/shaheer._.malik1000?igsh=MXRoZnJjOGU5Z2I4aQ=="
    target="_blank"
    rel="noopener noreferrer"
    className="grid h-9 w-9 place-items-center rounded-full bg-gold text-gold-foreground hover:bg-brand hover:text-brand-foreground transition"
  >
    <Instagram className="h-4 w-4" />
  </a>

  <a
    href="https://www.linkedin.com/in/shaheer-haider-9613322a4?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    target="_blank"
    rel="noopener noreferrer"
    className="grid h-9 w-9 place-items-center rounded-full bg-gold text-gold-foreground hover:bg-brand hover:text-brand-foreground transition"
  >
    <Linkedin className="h-4 w-4" />
  </a>
</div>

          </div>
          <div>
            <h4 className="italic-accent text-lg">Navigation</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["Home", "Services", "About", "Projects", "Blogs", "Reviews"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="italic-accent text-lg">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>+92 3194457216</li>
              <li>shaheermalik1000@gmail.com</li>
              <li>Gulshan, Park, Lahore Cantt 54000</li>
            </ul>
          </div>
          <NewsletterForm />
        </div>
      </div>
      <div className="bg-brand text-brand-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-4 text-sm">
          <span>
            Copyright © 2026 <span className="italic-accent">Shaheer.</span> All Rights Reserved.
          </span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-gold">User Terms & Conditions</a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:text-gold">Privacy Policy</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Page ---------------- */

export default function Portfolio() {
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Journey />
        <Pricing />
        <Contact />
        <Reviews/>
        <Blogs />
      </main>
      <Footer />
    </div>
  );
}
