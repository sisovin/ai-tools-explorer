import { LoginForm } from '@/components/LoginForm';
import { AuthLayout } from '@/components/AuthLayout';

export const metadata = {
  title: 'Login - AI Tools Explorer',
  description: 'Sign in to your AI Tools Explorer account',
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your account to continue exploring AI tools"
      showFooter
    >
      <LoginForm />
    </AuthLayout>
  );
}