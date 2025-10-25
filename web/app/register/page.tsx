import { SignupForm } from '@/components/SignupForm';
import { AuthLayout } from '@/components/AuthLayout';

export const metadata = {
  title: 'Sign Up - AI Tools Explorer',
  description: 'Create your AI Tools Explorer account to access thousands of curated AI tools',
};

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join thousands of professionals discovering the best AI tools"
      showFooter
    >
      <SignupForm />
    </AuthLayout>
  );
}