import { Suspense } from 'react';
import { TermsClient } from './terms-client';
import TermsLoading from './loading';

export const metadata = {
  title: 'Terms & Conditions - AI Tools Explorer',
  description: 'Read our comprehensive terms and conditions for using AI Tools Explorer. Learn about our policies, user responsibilities, and legal agreements.',
  keywords: 'terms, conditions, legal, privacy, usage policy, AI tools',
};

export default function TermsPage() {
  return (
    <Suspense fallback={<TermsLoading />}>
      <TermsClient />
    </Suspense>
  );
}