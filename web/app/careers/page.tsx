import { Suspense } from 'react';
import { CareersClient } from './careers-client';
import CareersLoading from './loading';

export const metadata = {
  title: 'Careers - Join Our Team',
  description: 'Explore exciting career opportunities at AI Tools Explorer. Join us in democratizing AI tools for everyone.',
};

export default function CareersPage() {
  return (
    <Suspense fallback={<CareersLoading />}>
      <CareersClient />
    </Suspense>
  );
}