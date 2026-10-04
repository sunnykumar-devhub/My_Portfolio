export const SITE_URL = 'https://sunnykdev.vercel.app';

// Resume PDF served from /public. Keep it in sync with the LinkedIn resume.
export const RESUME_URL: string | null = '/Sunny_Kumar_Resume.pdf';

// Free access key from https://web3forms.com (delivered to sunnykumar91728@gmail.com).
// Set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local and in the Vercel project's environment variables.
// Must be prefixed with NEXT_PUBLIC_ since it's read in the browser (ContactContainer is a client component).
export const WEB3FORMS_KEY: string | undefined = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export const CONTACT_EMAIL = 'sunnykumar91728@gmail.com';
