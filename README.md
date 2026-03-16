# Free Portfolio Website Template

This is my old portfolio website, and I no longer need it.

You can use it for your own portfolio or personal site.

## Tech Stack

- HTML5
- CSS3 / SCSS (Sass)
- JavaScript (Vanilla JS)
- Bootstrap 5
- Vite
- Node.js + npm

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run in development

```bash
npm run dev
```

This starts the Vite dev server. Open the local URL shown in your terminal.

## Available Scripts

- `npm run dev` - Start the development server
- `npm start` - Start the development server (same as `dev`)
- `npm run build` - Build for production
- `npm run preview` - Preview the production build on port `8080`

## Build for Production

```bash
npm run build
npm run preview
```

## Contact Form Setup (Elastic Email)

1. Create an Elastic Email account.
2. Verify your sender email/domain in Elastic Email.
3. Generate an SMTP credential (username + SMTP password/API key).
4. In this project, create this file: `src/public/contact.config.json`
5. Copy the template from `src/public/contact.config.example.json` and fill in your real values:
   - `username`
   - `password`
   - `to`
   - `from`
6. Run the project with `npm run dev` and test the contact form.

Notes:
- `src/public/contact.config.json` is already ignored by git, so your credentials stay local.
- Never commit real SMTP credentials to this repository.

## License / Usage

Free to use and customize for your own projects.
