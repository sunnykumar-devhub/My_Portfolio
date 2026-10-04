import type { Metadata } from 'next';
import ContactContainer from '../../src/Containers/ContactContainer';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Sunny Kumar for frontend engineering opportunities and collaboration.',
  alternates: { canonical: '/contact' },
};

const ContactPage = () => {
  return <ContactContainer standalone />;
};

export default ContactPage;
