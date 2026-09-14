import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ChevronRight,
  Clock3,
  ExternalLink,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Play,
  Quote,
  Scissors,
  Sparkles,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import bridalMaggam from "@/assets/blouse-bridal-heavy.jpeg";
import bridalDetail from "@/assets/blouse-bridal-detail.jpeg";
import festiveEmbroidery from "@/assets/blouse-festive.jpeg";
import festiveDetail from "@/assets/blouse-festive-detail.jpeg";
import everydayBlouse from "@/assets/blouse-simple.jpeg";
import elegantBlouse from "@/assets/blouse-elegant.jpeg";
import elegantDetail from "@/assets/blouse-elegant-detail.jpeg";

const WHATSAPP_NUMBER = "919298009020";
const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
const waGeneral = waLink("Hello, I saw your blouse works and want to know more details.");
const waQuote = (tier: string) =>
  waLink(`Hi, I want a price quote for a ${tier} maggam/computer embroidery blouse.`);
const waShareDesign = waLink("Hello, I have a blouse design to share. Are you taking orders?");
const address =
  "Annapurna Nilayam, Opposite Ramalayam, Near HP Petrol Bunk, Bhavnarayana Shop Street, Jagannaickpur, Kakinada";
const directionsUrl = "https://maps.app.goo.gl/Dfjh1MEsoRLrFaHo7";
const instagramUrl = "https://www.instagram.com/anuembroidery/";
const youtubeUrl = "https://www.youtube.com/@Anucreations7";
const shopCoordinates = "16.9412441,82.2315519";
const mapUrl = `https://www.google.com/maps?q=${shopCoordinates}&z=17&output=embed`;
const categories = [
  "All Designs",
  "Bridal Heavy Maggam",
  "Festive Computer Embroidery",
  "Sleeve & Neck Concepts",
  "Everyday Elegant",
] as const;

type Category = (typeof categories)[number];

const galleryFiles = import.meta.glob("../assets/gallery/**/*.jpeg", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const gallery = Object.entries(galleryFiles).map(([path, image]) => {
  const parts = path.split("/");
  const folder = parts[parts.length - 2] ?? "simple";
  const fileName = (parts[parts.length - 1] ?? "image.jpeg").replace(".jpeg", "");
  const categoryByFolder: Record<string, Category> = {
    heavy: "Bridal Heavy Maggam",
    festive: "Festive Computer Embroidery",
    simple: "Everyday Elegant",
    elegant: "Everyday Elegant",
  };
  const category = categoryByFolder[folder] ?? "Everyday Elegant";

  return {
    title: `${folder.charAt(0).toUpperCase()}${folder.slice(1)} ${fileName.split("-").pop()}`,
    category,
    image,
    detail: category === "Bridal Heavy Maggam" ? "Heavy embroidery detail" : "Computer embroidery design",
    position: "object-center",
  };
});

const reels = [
  { title: "Heavy embroidery details", id: "Uuds2P-yg7c", image: bridalDetail },
  { title: "A closer look at the details", id: "xZc-WpiHqAs", image: elegantBlouse },
  { title: "Finished festive blouse", id: "_puvDDbYbP4", image: festiveDetail },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anu Embroidery | Maggam Blouses in Kakinada" },
      {
        name: "description",
        content:
          "Bespoke Maggam designs and computer embroidery blouses, produced with precision by Anu Embroidery in Jagannaickpur, Kakinada.",
      },
      { name: "keywords", content: "computer embroidery blouses Kakinada, Maggam blouse designs, bridal blouse embroidery, blouse embroidery Jagannaickpur" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.placename", content: "Kakinada, Andhra Pradesh, India" },
      { property: "og:site_name", content: "Anu Embroidery" },
      { property: "og:title", content: "Anu Embroidery | Computer Embroidery Blouses in Kakinada" },
      {
        property: "og:description",
        content: "Traditional-inspired Maggam designs and elegant computer embroidery, produced with precision in Kakinada.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/Anu_Embroidery_Logo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Anu Embroidery | Computer Embroidery Blouses in Kakinada" },
      { name: "twitter:description", content: "Maggam-inspired designs and precise computer embroidery blouses from Jagannaickpur, Kakinada." },
      { name: "twitter:image", content: "/Anu_Embroidery_Logo.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Anu Embroidery",
          description:
            "Computer embroidery and Maggam-inspired blouse designs for bridal, festive, and everyday wear in Kakinada.",
          telephone: "+91 92980 09020",
          image: "/Anu_Embroidery_Logo.jpg",
          priceRange: "₹₹",
          areaServed: ["Kakinada", "Jagannaickpur"],
          knowsAbout: ["Computer embroidery", "Maggam blouse designs", "Bridal blouse embroidery"],
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Annapurna Nilayam, Opposite Ramalayam, Near HP Petrol Bunk, Bhavnarayana Shop Street, Jagannaickpur",
            addressLocality: "Kakinada",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 10:00-19:00",
          sameAs: [
            instagramUrl,
            youtubeUrl,
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl leading-tight text-foreground md:text-5xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-7 text-muted-foreground">{copy}</p> : null}
      <div className="ornament mx-auto mt-6" aria-hidden="true"><span /></div>
    </div>
  );
}

function Index() {
  const [activeCategory, setActiveCategory] = useState<Category>("All Designs");
  const [activeVideo, setActiveVideo] = useState<(typeof reels)[number] | null>(null);
  const filteredGallery = gallery.filter(
    (item) => activeCategory === "All Designs" || item.category === activeCategory,
  );

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-hero-border text-hero-foreground">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Anu Embroidery home">
            <img src="/Anu_Embroidery_Logo.jpg" alt="Anu Creations logo" className="h-12 w-12 rounded-full object-cover object-[50%_26%] ring-1 ring-gold/60" />
            <span>
              <span className="block font-display text-xl leading-none">Anu Embroidery</span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-hero-muted">Kakinada · Home Boutique</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.14em] md:flex" aria-label="Main navigation">
            <a href="#designs" className="transition-colors hover:text-gold">Designs</a>
            <a href="#pricing" className="transition-colors hover:text-gold">Pricing</a>
            <a href="#about" className="transition-colors hover:text-gold">Our Story</a>
            <a href="#social" className="transition-colors hover:text-gold">Social</a>
            <a href="#visit" className="transition-colors hover:text-gold">Visit</a>
          </nav>
          <Button asChild size="sm" className="border border-gold/50 bg-gold text-maroon hover:bg-gold-light">
            <a href={waGeneral} target="_blank" rel="noreferrer"><MessageCircle /> Enquire</a>
          </Button>
        </div>
      </header>

      <section id="top" className="hero-texture relative min-h-[760px] text-hero-foreground">
        <img
          src={bridalMaggam}
          alt="Maroon bridal blouse with intricate gold Maggam embroidery"
          width={1200}
          height={1504}
          className="absolute inset-0 h-full w-full object-cover object-[58%_45%] md:object-[72%_42%]"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-5 pb-20 pt-32 md:items-center md:px-8 md:pb-10">
          <div className="max-w-3xl md:w-3/5">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
              <span className="h-px w-10 bg-gold" /> Computer embroidered in Kakinada
            </p>
            <h1 className="font-display text-5xl leading-[0.98] md:text-7xl lg:text-8xl">
              Every blouse,<br /><span className="italic text-gold-light">beautifully precise.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-hero-muted md:text-lg">
              Bespoke Maggam designs and refined computer embroidery, produced on our embroidery machine from our home boutique—with personal attention and pricing made for you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded-none bg-gold px-6 text-maroon hover:bg-gold-light">
                <a href={waGeneral} target="_blank" rel="noreferrer"><MessageCircle /> Chat on WhatsApp</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-none border-hero-border bg-transparent px-6 text-hero-foreground hover:bg-hero-soft hover:text-hero-foreground">
                <a href="#designs">View Designs <ArrowDown /></a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 motif-border" />
      </section>

      <section className="bg-cream-deep py-14 md:py-18">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border px-5 md:grid-cols-4">
          {[
            ["01", "Personal attention"],
            ["02", "Custom design options"],
            ["03", "Precise machine finish"],
            ["04", "Affordable pricing"],
          ].map(([num, label], index) => (
            <div key={label} className={cn("px-5 py-5 text-center", index > 1 && "border-t md:border-t-0")}>
              <span className="font-display text-lg text-primary">{num}</span>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28" aria-labelledby="reels-heading">
        <SectionHeading eyebrow="From our embroidery machine" title="Precision in every detail" copy="See the clean precision behind every pattern, stitch, and finished silhouette." />
        <h2 id="reels-heading" className="sr-only">Video showcase</h2>
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {reels.map((reel, index) => (
            <button
              type="button"
              key={reel.id}
              onClick={() => setActiveVideo(reel)}
              className={cn("group relative aspect-[9/14] overflow-hidden text-left", index === 1 && "md:mt-10")}
              aria-label={`Play ${reel.title}`}
            >
              <img src={reel.image} alt="" width={index === 0 ? 1088 : 1200} height={index === 0 ? 1920 : 1504} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
              <span className="absolute inset-0 bg-media-overlay" />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-hero-foreground">
                <span><span className="block text-[10px] uppercase tracking-[0.22em] text-gold-light">Watch the reel</span><span className="mt-2 block font-display text-2xl">{reel.title}</span></span>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-hero-border bg-hero-soft"><Play className="ml-0.5 size-5 fill-current" /></span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section id="designs" className="bg-cream-deep px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Our design book" title="Designed to match your moment" copy="From heirloom bridal statements to delicate everyday details, each design is adapted to your fabric, occasion, and budget." />
        <div className="mx-auto mb-10 flex max-w-6xl gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filter designs">
          {categories.map((category) => (
            <Button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              variant="outline"
              onClick={() => setActiveCategory(category)}
              className={cn("shrink-0 rounded-none border-primary/20 bg-transparent", activeCategory === category && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground")}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
          {filteredGallery.map((item, index) => (
            <article key={item.title} className={cn("group relative overflow-hidden", index === 0 && filteredGallery.length > 3 && "md:row-span-2")}>
              <img src={item.image} alt={`${item.title} blouse embroidery design`} width={1200} height={1504} loading="lazy" className={cn("h-full min-h-72 w-full object-cover transition duration-700 group-hover:scale-[1.03] md:min-h-96", item.position)} />
              <div className="card-overlay absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-hero-foreground md:p-6">
                <p className="text-[9px] uppercase tracking-[0.18em] text-gold-light md:text-[10px]">{item.category}</p>
                <h3 className="mt-1 font-display text-xl md:text-3xl">{item.title}</h3>
                <p className="mt-1 text-xs text-hero-muted">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Thoughtful pricing" title="Designed around your vision" copy="Every quote is tailored to the design density, thread work, stones, beads, and zari detailing you choose." />
        <div className="mx-auto grid max-w-6xl border border-border md:grid-cols-3">
          {[
            { name: "Everyday Elegant", price: "₹1000", copy: "Graceful neck or sleeve accents with neat machine embroidery.", points: ["Light design density", "Thread embroidery", "Simple custom motif"] },
            { name: "Festive Signature", price: "₹3000", copy: "Richer patterns for celebrations, poojas, and special gatherings.", points: ["Medium design density", "Thread and zari", "Selected beads or stones"] },
            { name: "Bridal Heirloom", price: "₹4000", copy: "Statement Maggam work designed especially for your bridal look.", points: ["Heavy design density", "Zari, stones and kundan", "Detailed sleeve and neckline"] },
          ].map((tier, index) => (
            <article key={tier.name} className={cn("relative p-7 md:p-9", index > 0 && "border-t border-border md:border-l md:border-t-0", index === 1 && "bg-primary text-primary-foreground")}>
              {index === 1 ? <span className="absolute right-5 top-5 border border-gold/50 px-2 py-1 text-[9px] uppercase tracking-[0.16em] text-gold-light">Most requested</span> : null}
              <p className={cn("text-xs uppercase tracking-[0.18em] text-muted-foreground", index === 1 && "text-hero-muted")}>{tier.name}</p>
              <p className="mt-8 font-display text-5xl">{tier.price}<span className="ml-1 text-sm font-normal">onwards*</span></p>
              <p className={cn("mt-4 min-h-14 text-sm leading-6 text-muted-foreground", index === 1 && "text-hero-muted")}>{tier.copy}</p>
              <div className={cn("my-6 h-px bg-border", index === 1 && "bg-hero-border")} />
              <ul className="space-y-3 text-sm">
                {tier.points.map((point) => <li key={point} className="flex items-start gap-2"><Sparkles className="mt-0.5 size-4 shrink-0 text-gold" />{point}</li>)}
              </ul>
              <Button asChild variant={index === 1 ? "secondary" : "outline"} className="mt-8 w-full rounded-none">
                <a href={waQuote(tier.name)} target="_blank" rel="noreferrer">Request a quote <ArrowRight /></a>
              </Button>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-5 text-muted-foreground">*Sample starting prices shown for guidance. Your final quote depends on the blouse pattern, fabric, coverage, materials, and finishing selected.</p>
        <div className="mt-6 text-center">
          <Button asChild variant="outline" className="rounded-none">
            <a href={waShareDesign} target="_blank" rel="noreferrer"><Sparkles /> Have a design in mind? Share it on WhatsApp</a>
          </Button>
        </div>
      </section>

      <section className="bg-primary px-5 py-20 text-primary-foreground md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-gold-light">Simple & personal</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight md:text-5xl">From your idea to a beautifully embroidered blouse.</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {[
              ["01", "Choose your design", "Select from our work or send a reference you love."],
              ["02", "Share your blouse", "Provide the blouse piece and your measurements."],
              ["03", "We embroider it", "Your design is completed on our computer embroidery machine with precise settings."],
              ["04", "Collect or receive", "Pick it up from our boutique or arrange delivery."],
            ].map(([num, title, copy]) => (
              <div key={num}>
                <div className="flex items-center gap-3"><span className="font-display text-3xl text-gold">{num}</span><span className="h-px flex-1 bg-hero-border" /></div>
                <h3 className="mt-5 font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-hero-muted">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="grid lg:grid-cols-2">
        <div className="relative min-h-[540px] overflow-hidden">
          <img src={elegantDetail} alt="Computer embroidery detail on a blouse design" width={1088} height={1920} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-6 border border-hero-border md:inset-10" />
        </div>
        <div className="flex items-center bg-cream-deep px-6 py-20 md:px-16 lg:px-20">
          <div className="max-w-xl">
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Designed in Kakinada.<br />Finished with precision.</h2>
            <p className="mt-7 text-base leading-8 text-muted-foreground">Anu Embroidery is a dedicated home boutique in Jagannaickpur, Kakinada, specialising in Maggam-inspired designs and computer embroidery for blouses.</p>
            <p className="mt-5 text-base leading-8 text-muted-foreground">We prepare each design carefully for our embroidery machine so your blouse receives a clean, consistent finish. From a bride’s once-in-a-lifetime blouse to an elegant piece for a family celebration, every order is tailored to your fabric and occasion.</p>
            <div className="mt-8 flex items-center gap-4 border-t border-border pt-6"><Scissors className="size-6 text-primary" /><p className="font-display text-xl italic">“Your vision, embroidered with precision.”</p></div>
          </div>
        </div>
      </section>

      <section id="social" className="bg-cream-deep px-5 py-20 md:px-8 md:py-28" aria-labelledby="social-heading">
        <SectionHeading
          eyebrow="Follow our work"
          title="See the latest designs"
          copy="Browse new computer embroidery patterns, blouse details, and finished work from Anu Embroidery."
        />
        <h2 id="social-heading" className="sr-only">Anu Embroidery on Instagram and YouTube</h2>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="overflow-hidden border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border p-5">
              <div className="flex items-center gap-3">
                <Instagram className="size-6 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-2xl">Instagram</h3>
                  <p className="text-xs text-muted-foreground">@anuembroidery</p>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Page</span>
            </div>
            <div className="grid min-h-56 place-items-center bg-primary p-8 text-center text-primary-foreground">
              <div>
                <img src="/Anu_Embroidery_Logo.jpg" alt="Anu Embroidery Instagram profile" className="mx-auto size-20 rounded-full object-cover object-[50%_26%] ring-2 ring-gold" />
                <p className="mt-4 font-display text-2xl">Anu Embroidery</p>
                <p className="mt-2 text-sm text-hero-muted">Kakinada · Computer embroidery blouses</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 p-5">
              <p className="text-sm leading-6 text-muted-foreground">Design previews, festive blouse details, and new work.</p>
              <Button asChild size="sm" className="shrink-0 rounded-none">
                <a href={instagramUrl} target="_blank" rel="noreferrer">Visit page <ExternalLink /></a>
              </Button>
            </div>
          </article>

          <article className="overflow-hidden border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border p-5">
              <div className="flex items-center gap-3">
                <Youtube className="size-6 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-2xl">YouTube</h3>
                  <p className="text-xs text-muted-foreground">Anu Creations</p>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Channel</span>
            </div>
            <div className="aspect-video bg-primary">
              <iframe
                className="h-full w-full border-0"
                src="https://www.youtube-nocookie.com/embed/Uuds2P-yg7c?rel=0"
                title="Anu Creations computer embroidery video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-5">
              <p className="text-sm leading-6 text-muted-foreground">Watch embroidery details and finished blouse videos.</p>
              <Button asChild size="sm" className="shrink-0 rounded-none">
                <a href={youtubeUrl} target="_blank" rel="noreferrer">Visit channel <ExternalLink /></a>
              </Button>
            </div>
          </article>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Kind words" title="Loved by our customers" />
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {[
            ["The detail on my bridal blouse was exactly what I imagined. Anu listened patiently and made every motif feel special.", "Bridal customer"],
            ["Beautiful, neat work and very reasonable pricing. The blouse received so many compliments at our family function.", "Festive customer"],
            ["I shared one reference photo and the final design suited my saree perfectly. The personal care made all the difference.", "Returning customer"],
          ].map(([quote, person]) => (
            <figure key={quote} className="border border-border bg-card p-7">
              <Quote className="size-8 text-gold" />
              <blockquote className="mt-6 font-display text-xl leading-8">“{quote}”</blockquote>
              <figcaption className="mt-7 text-xs uppercase tracking-[0.16em] text-muted-foreground">— {person}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-muted-foreground">Sample review copy—replace with verified customer words when available.</p>
      </section>

      <section id="visit" className="bg-cream-deep px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl overflow-hidden border border-border bg-card lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-7 md:p-12">
            <p className="eyebrow">Visit or get in touch</p>
            <h2 className="mt-3 font-display text-4xl">Anu Embroidery</h2>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4"><MapPin className="mt-1 size-5 shrink-0 text-primary" /><div><p className="font-semibold">Home boutique</p><address className="mt-1 not-italic text-sm leading-6 text-muted-foreground">{address}</address></div></div>
              <div className="flex gap-4"><Clock3 className="mt-1 size-5 shrink-0 text-primary" /><div><p className="font-semibold">Visiting hours</p><p className="mt-1 text-sm text-muted-foreground">Daily, 10:00 AM – 7:00 PM</p><p className="mt-1 text-xs text-muted-foreground">Please call or message before visiting.</p></div></div>
              <div className="flex gap-4"><Phone className="mt-1 size-5 shrink-0 text-primary" /><div><p className="font-semibold">Call or WhatsApp</p><a href="tel:+919298009020" className="mt-1 block text-sm text-muted-foreground hover:text-primary">+91 92980 09020</a></div></div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-none"><a href={directionsUrl} target="_blank" rel="noreferrer"><MapPin /> Get Directions</a></Button>
              <Button asChild variant="outline" className="rounded-none"><a href="tel:+919298009020"><Phone /> Call Now</a></Button>
            </div>
            <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
              <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Anu Embroidery on Instagram" className="social-link"><Instagram /></a>
              <a href={youtubeUrl} target="_blank" rel="noreferrer" aria-label="Anu Embroidery on YouTube" className="social-link"><Youtube /></a>
              <span className="ml-2 text-xs text-muted-foreground">Follow our latest work</span>
            </div>
          </div>
          <div className="min-h-[420px] bg-muted">
            <iframe title="Map showing Anu Embroidery in Jagannaickpur, Kakinada" src={mapUrl} className="h-full min-h-[420px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </section>

      <footer className="motif-top bg-primary px-5 pb-8 pt-14 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-4">
            <img src="/Anu_Embroidery_Logo.jpg" alt="Anu Creations logo" className="h-20 w-20 rounded-full object-cover object-[50%_26%] ring-1 ring-gold/60" />
            <div><p className="font-display text-2xl">Anu Embroidery</p><p className="mt-1 text-xs text-hero-muted">Bespoke computer embroidery blouses in Kakinada.</p></div>
          </div>
          <p className="text-xs text-hero-muted">© 2026 Anu Embroidery · By appointment</p>
        </div>
      </footer>

      <a href={waGeneral} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-float transition-transform hover:scale-105" aria-label="Chat with Anu Embroidery on WhatsApp">
        <MessageCircle className="size-6" />
      </a>

      <Dialog open={Boolean(activeVideo)} onOpenChange={(open) => !open && setActiveVideo(null)}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-md border-gold/30 bg-primary p-3 text-primary-foreground sm:rounded-none">
          <DialogHeader className="px-2 pt-2">
            <DialogTitle className="font-display text-2xl">{activeVideo?.title}</DialogTitle>
            <DialogDescription className="text-hero-muted">From Anu Creations on YouTube</DialogDescription>
          </DialogHeader>
          {activeVideo ? (
            <div className="aspect-[9/14] overflow-hidden bg-muted">
              <iframe className="h-full w-full" src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`} title={activeVideo.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
            </div>
          ) : null}
          <a href={youtubeUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-2 text-xs uppercase tracking-[0.14em] text-gold-light">See more on YouTube <ChevronRight className="size-4" /></a>
        </DialogContent>
      </Dialog>
    </main>
  );
}