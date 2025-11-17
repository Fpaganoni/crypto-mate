<div align="center">
  <h1>CryptoMate</h1>
  <p><strong>A modern crypto project landing page built with cutting-edge web technologies</strong></p>
  
  ![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
  ![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
  ![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
  
</div>

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Memo.png" alt="About" width="25"/> About

**CryptoMate** is a modern web landing built with Next.js and TypeScript to showcase a cryptocurrency project/token. The site includes typical sections of a crypto project: hero, tokenomics, roadmap, how to buy, and community.

### Purpose

- <strong>Informational and marketing site</strong> for a token called <em>CryptoMate</em>
- <strong>Ready-to-deploy template</strong> compatible with Vercel or any Next.js-friendly hosting

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Hammer.png" alt="Tech" width="25"/> Key Technologies

<table>
  <tr>
    <td><strong>Framework</strong></td>
    <td><img src="https://img.shields.io/badge/Next.js-16-000?style=flat-square&logo=next.js"/> <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react"/></td>
  </tr>
  <tr>
    <td><strong>Language</strong></td>
    <td><img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript"/></td>
  </tr>
  <tr>
    <td><strong>Styling</strong></td>
    <td><img src="https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=flat-square&logo=tailwind-css"/> <img src="https://img.shields.io/badge/PostCSS-8.5-DD3A0A?style=flat-square&logo=postcss"/></td>
  </tr>
  <tr>
    <td><strong>UI Components</strong></td>
    <td><img src="https://img.shields.io/badge/Radix%20UI-Latest-8B5CF6?style=flat-square"/> <img src="https://img.shields.io/badge/Lucide%20React-0.454-F97316?style=flat-square"/></td>
  </tr>
  <tr>
    <td><strong>Forms & Validation</strong></td>
    <td><img src="https://img.shields.io/badge/React%20Hook%20Form-7.60-EC5990?style=flat-square"/> <img src="https://img.shields.io/badge/Zod-3.25-3068AD?style=flat-square"/></td>
  </tr>
  <tr>
    <td><strong>Charts & Data</strong></td>
    <td><img src="https://img.shields.io/badge/Recharts-Latest-8884D8?style=flat-square"/></td>
  </tr>
  <tr>
    <td><strong>Notifications</strong></td>
    <td><img src="https://img.shields.io/badge/Sonner-1.7-000000?style=flat-square"/></td>
  </tr>
  <tr>
    <td><strong>Theme Support</strong></td>
    <td><img src="https://img.shields.io/badge/Next%20Themes-0.4-000000?style=flat-square"/></td>
  </tr>
</table>

## 📁 Project Structure

<details>
<summary><strong>Click to expand directory tree</strong></summary>

```
crypto-mate/
├── app/                    # Main entry points & pages (Next.js app folder)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # UI Components
│   ├── hero.tsx           # Hero section
│   ├── tokenomics.tsx     # Tokenomics display
│   ├── roadmap.tsx        # Project roadmap
│   ├── how-to-buy.tsx     # Purchase guide
│   ├── community.tsx      # Community section
│   ├── header.tsx         # Navigation header
│   ├── footer.tsx         # Footer component
│   └── ui/                # Low-level reusable components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ...20+ other components
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities & helpers
├── public/                # Static assets
│   └── images/
├── styles/                # Global stylesheets
└── package.json           # Dependencies & scripts
```

</details>

## 🚀 Quick Start

### Installation

Make sure you have Node.js 18+ installed. This project uses `pnpm`:

```bash
pnpm install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

### Production Build

Build and start the production-ready application:

```bash
pnpm build
pnpm start
```

## 📋 Available Scripts

| Script       | Description                      |
| ------------ | -------------------------------- |
| `pnpm dev`   | Start development server         |
| `pnpm build` | Build for production             |
| `pnpm start` | Start production server          |
| `pnpm lint`  | Run ESLint to check code quality |

## 📦 Tech Stack at a Glance

<div align="center">

| Category               | Technologies                                       |
| ---------------------- | -------------------------------------------------- |
| **Frontend Framework** | Next.js 16, React 19, TypeScript 5                 |
| **Styling**            | Tailwind CSS v4, PostCSS, class-variance-authority |
| **Component Library**  | Radix UI (30+ accessible components)               |
| **Icons**              | Lucide React                                       |
| **Forms**              | React Hook Form + Zod validation                   |
| **Data Visualization** | Recharts                                           |
| **Notifications**      | Sonner                                             |
| **Theme Management**   | Next Themes (dark mode)                            |
| **UI Utilities**       | clsx, tailwind-merge                               |
| **Carousels**          | Embla Carousel                                     |
| **Utility**            | date-fns, input-otp, vaul                          |

</div>

## ✨ Features

- 🎨 **Modern UI** – Built with Tailwind CSS and Radix UI for accessibility
- 🌓 **Dark Mode** – Seamless theme switching with next-themes
- 📱 **Responsive Design** – Works perfectly on all device sizes
- 📊 **Data Visualization** – Interactive charts with Recharts
- 🔄 **Form Handling** – Robust forms with React Hook Form + Zod
- 🚀 **Performance** – Optimized Next.js 16 with app router
- ♿ **Accessible** – Built on Radix UI primitives
- 🎯 **Type-Safe** – Full TypeScript support

## 🎬 GitHub Tips (Make it Visual)

To enhance your GitHub presence:

1. **Add Screenshots** – Place demo screenshots in `public/images` and add them to this README
2. **Add a GIF** – Show the flow (hero → tokenomics → purchase) with a short recording
3. **Deploy to Vercel** – Add a "Deploy" badge linking to your live site
4. **Add GitHub Actions** – Set up CI/CD for automatic builds

Example badge for live site:

```markdown
[![Deploy with Vercel](https://www.cryptomate.website/)]
```

## 💼 LinkedIn Post Template

<blockquote>
  <p><strong>Launching CryptoMate! 🚀</strong></p>
  <p>I've been working on the official landing page for CryptoMate, a web project built with <strong>Next.js</strong> and <strong>TypeScript</strong> to showcase the token, explain tokenomics, roadmap, and guide the community on how to purchase.</p>
  <p>🛠️ <strong>Tech Stack:</strong></p>
  <ul>
    <li><strong>Frontend:</strong> Next.js 16 + React 19 + TypeScript</li>
    <li><strong>Styling:</strong> Tailwind CSS + Radix UI (30+ components)</li>
    <li><strong>Data:</strong> Recharts for visualizations</li>
    <li><strong>Forms:</strong> React Hook Form + Zod validation</li>
    <li><strong>Theme:</strong> Dark mode support with next-themes</li>
  </ul>
  <p>If you're interested in seeing how it turned out or collaborating on design/product, check out the repo: <a href="https://github.com/Fpaganoni/crypto-mate">github.com/Fpaganoni/crypto-mate</a></p>
  <p>Feedback and PRs welcome! 🙌</p>
</blockquote>

## 📄 License

This project is open source and available under the <a href="LICENSE">MIT License</a>.

## 🤝 Contributing

Contributions are welcome! Feel free to:

- <strong>Open an Issue</strong> – Report bugs or suggest features
- <strong>Submit a PR</strong> – For code improvements or new features
- <strong>Discuss Ideas</strong> – For major changes, open an issue first

## 👨‍💻 Author

<div align="center">

**Franco Paganoni**  
GitHub: [@Fpaganoni](https://github.com/Fpaganoni)

</div>

---

<div align="center">
  <p><em>Built with ❤️ using modern web technologies</em></p>
  <p>
    <a href="https://github.com/Fpaganoni/crypto-mate/stargazers">⭐ Star us on GitHub</a> •
    <a href="https://github.com/Fpaganoni/crypto-mate/issues">🐛 Report a Bug</a> •
    <a href="https://github.com/Fpaganoni/crypto-mate/pulls">💬 Send a PR</a>
  </p>
</div>
