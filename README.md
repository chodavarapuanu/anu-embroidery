# Anu Embroidery

Anu Embroidery is a Kakinada blouse studio specialising in Maggam-inspired designs and computer embroidery for bridal, festive, and everyday wear.

The website includes:

 - Filterable blouse design gallery using the photos in `public/AE_Pictures/`
 - Indicative pricing and WhatsApp quote requests
 - YouTube video previews and Instagram/YouTube profile cards
 - Google Maps location, directions, phone, and WhatsApp contact actions
 - Responsive layout and local-business SEO metadata

## Local development

Requirements: Node.js 22 or newer and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build:

```sh
npm run build
```

## Cloudflare Pages

Connect the GitHub repository to Cloudflare Pages with these settings:

```text
Framework preset: None
Build command: npm run build
Build output directory: .output/public
Node.js version: 22
```

The shop photos are served from `public/AE_Pictures/` and are included automatically in the build.
# Environment files and local secrets
.env
.env.*
!.env.example
# Royal Blouse Atelier

Build a rich, grand, and elegant landing page for a boutique specializing in Maggam computer work and computer embroidery blouses run from home.

Key aspects to include:
1. Visual Design: Royal, traditional South Indian aesthetic with rich jewel tones (deep maroons, royal gold, temple silk accents, ivory/cream contrast), elegant typography, and traditional border motifs.
2. Hero Section: Grand headline showcasing bespoke Maggam & computer embroidery work, tagline highlighting home-boutique craftsmanship with affordable custom pricing, and quick action buttons ("Chat on WhatsApp", "View Designs").
3. Design Showcase & Video Gallery:
   - Video showcase section (designed for Instagram Reels/short video demos of embroidery in progress & finished blouses with video modal/player preview).
   - Filterable photo gallery by category (Bridal Heavy Maggam, Festive Computer Embroidery, Sleeve & Neck Concepts, Everyday Elegant).
4. Custom Pricing & Service Tiers: Clear breakdown explaining that prices are affordable and customized based on design density, thread work, and stone/zari detailing (with indicative starting price tiers/cards).
5. How to Order / Process: Simple step-by-step guide (Select design or send reference -> Provide blouse piece/measurements -> Crafting & embroidery -> Pickup or delivery).
6. About the Boutique: Warm story about running a dedicated home boutique with personal attention to detail for every bride and customer.
7. Location, Google Maps & Contact:
   - Full address with landmark details.
   - Interactive Google Maps embed/link with "Get Directions" button.
   - Direct floating WhatsApp chat CTA, direct phone call button, and visiting hours/appointment note.
   - Prominent social media links (Instagram, YouTube, Facebook).
8. Customer Reviews & Testimonials section.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e5a5c32c-b740-43c4-bbe5-78ae66438acb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
