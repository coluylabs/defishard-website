# DefiShard Landing Page

Modern landing page for DefiShard - A security solution for DeFi using MPC 2-of-2 technology.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm run start
```

## 🛠️ Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/waitlist/      # Email waitlist endpoint
│   └── ...
├── components/             # React components
│   └── sections/          # Page sections
├── public/                # Static assets
└── scripts/               # Deployment scripts
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel --prod
```

### VPS (PM2 + Nginx)
```bash
sudo ./scripts/deploy.sh
```

## 📄 License

MIT License

---

**Made with ❤️ by the DefiShard Team**
