# DefiShard Landing Page

![DefiShard](https://img.shields.io/badge/DefiShard-Your%20Key%20Never%20Exists-blue)
![Next.js](https://img.shields.io/badge/Next.js-14.1-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

Modern, responsive landing page for DefiShard - a security solution for DeFi using MPC (Multi-Party Computation) 2-of-2 technology.

## 🌟 About DefiShard

DefiShard eliminates the single point of failure in DeFi wallets by using true MPC technology with threshold signatures and secret sharing. Your private key never exists anywhere—not during generation, not during signing, not ever.

**Key Features:**
- ✅ Distributed key generation (no single point of failure)
- ✅ 2-of-2 threshold signatures with secret sharing
- ✅ Bank-grade security for DeFi
- ✅ Familiar 2FA-style UX
- ✅ Universal DeFi compatibility (all EVM chains)

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Coluylabs/defishard-website.git

# Navigate to project directory
cd defishard-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
defishard-website/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── waitlist/      # Email waitlist endpoint
│   ├── privacy/           # Privacy policy page
│   ├── terms/             # Terms of service page
│   ├── cookies/           # Cookie policy page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Features.tsx
│   │   ├── Security.tsx
│   │   ├── Stats.tsx
│   │   ├── FAQ.tsx
│   │   └── CTA.tsx
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer with links
│   └── EmailForm.tsx      # Waitlist form
├── public/                # Static assets
│   ├── icon.png
│   ├── defishard-wallet-v1.4.0.zip
│   └── defishard-v1.2.0-*.apk
└── ...config files
```

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** Vercel / VPS with PM2 + Nginx

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🎨 Features

### Landing Page Sections
1. **Hero** - Main value proposition with download CTAs
2. **Stats** - Key statistics about wallet security
3. **Problem** - Real-world attack examples
4. **How It Works** - MPC technology explanation
5. **Features** - Detailed feature showcase
6. **Security** - Technical deep dive
7. **FAQ** - Common questions
8. **CTA** - Download options for browser extension and mobile app

### Additional Pages
- Privacy Policy
- Terms of Service
- Cookie Policy

### Features
- 📱 Fully responsive design
- ⚡ Optimized performance (Lighthouse 90+)
- 🎭 Smooth animations with Framer Motion
- 📧 Email waitlist with API endpoint
- 🔒 SSL/HTTPS ready
- 🎨 Modern gradient mesh backgrounds
- ♿ Accessibility focused

## 🚀 Deployment

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Option 2: VPS with PM2 + Nginx

We provide deployment scripts for VPS hosting:

```bash
# Initial deployment
sudo ./deploy.sh

# Updates
./update.sh
```

The scripts will:
- Set up Nginx with SSL
- Configure PM2 for process management
- Build and deploy the Next.js application
- Set up auto-restart on server reboot

**Note:** Review and modify `deploy.sh` and `update.sh` to match your server configuration before running.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development (optional):

```bash
# No environment variables required for basic functionality
# Add your custom variables here if needed
```

### Customization

1. **Update Metadata:** Edit `app/layout.tsx` for SEO and meta tags
2. **Styling:** Modify `tailwind.config.ts` for colors and themes
3. **Content:** Update components in `components/sections/`
4. **Downloads:** Replace files in `public/` with your app versions

## 📊 Waitlist API

The landing page includes a built-in waitlist API:

**Endpoint:** `POST /api/waitlist`

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "message": "Successfully joined waitlist"
}
```

Data is stored in `data/waitlist.json` (automatically created).

## 🎯 SEO & Performance

- ✅ Meta tags configured
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ Semantic HTML structure
- ✅ Image optimization (WebP)
- ✅ Lazy loading
- ✅ Code splitting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website:** [defishard.com](https://defishard.com)
- **GitHub:** [github.com/Coluylabs](https://github.com/Coluylabs)
- **Twitter:** [@DefiShard](https://twitter.com/DefiShard)

## 📞 Support

For questions or support, please:
- Open an issue on GitHub
- Contact us at support@defishard.com
- Join our Discord community

## 🙏 Acknowledgments

Built with modern web technologies and best practices for DeFi security education.

---

**Made with ❤️ by the DefiShard Team**
