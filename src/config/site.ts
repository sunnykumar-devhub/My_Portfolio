// Put your resume PDF in /public (e.g. public/Sunny_Kumar_Resume.pdf) and set this to its path,
// e.g. '/Sunny_Kumar_Resume.pdf'. While it is null the "Download Resume" button is hidden,
// because a missing file would be served as index.html by the Vercel SPA rewrite.
export const RESUME_URL: string | null = null;

// Free access key from https://web3forms.com (delivered to sunnykumar91728@gmail.com).
// Set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local and in the Vercel project's environment variables.
// Must be prefixed with NEXT_PUBLIC_ since it's read in the browser (ContactContainer is a client component).
export const WEB3FORMS_KEY: string | undefined = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export const CONTACT_EMAIL = 'sunnykumar91728@gmail.com';
