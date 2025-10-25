'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail, Lock, User, Github, Globe, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

// Password strength indicator
const PasswordStrength = ({ password }: { password: string }) => {
  const getStrength = (pass: string) => {
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    return score;
  };

  const strength = getStrength(password);
  const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = [
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-blue-500',
    'bg-green-500',
  ];

  if (!password) return null;

  return (
    <div className="space-y-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded-full transition-colors ${index <= strength
                ? strengthColors[strength - 1]
                : 'bg-muted'
              }`}
          />
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        Password strength: <span className="font-medium">{strengthLabels[strength - 1] || 'Very Weak'}</span>
      </p>
    </div>
  );
};

// Password requirement checklist
const PasswordRequirements = ({ password }: { password: string }) => {
  const requirements = [
    { label: 'At least 8 characters', met: password.length >= 8 },
    { label: 'One uppercase letter', met: /[A-Z]/.test(password) },
    { label: 'One number', met: /[0-9]/.test(password) },
    { label: 'One special character', met: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <div className="space-y-2">
      {requirements.map((req, index) => (
        <div key={index} className="flex items-center gap-2">
          {req.met ? (
            <Check className="h-3 w-3 text-green-500" />
          ) : (
            <X className="h-3 w-3 text-muted-foreground" />
          )}
          <span
            className={`text-xs ${req.met ? 'text-green-600' : 'text-muted-foreground'
              }`}
          >
            {req.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export function SignupForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    subscribeNewsletter: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (!formData.agreeTerms) {
      toast.error('Please agree to the terms and conditions');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mock successful registration
      toast.success('Account created successfully! Welcome to AI Tools Explorer.');

      // Redirect to onboarding or dashboard
      setTimeout(() => {
        router.push('/onboarding');
      }, 1500);

    } catch {
      toast.error('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = (provider: string) => {
    toast.info(`Signing up with ${provider}...`);
    // Implement social signup logic here
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const passwordsMatch = formData.password === formData.confirmPassword;
  const isFormValid = formData.firstName && formData.lastName && formData.email &&
    formData.password && formData.confirmPassword && formData.agreeTerms;

  return (
    <div className="space-y-6">
      {/* Social Signup Buttons */}
      <div className="space-y-3">
        <Button
          type="button"
          variant="outline"
          className="w-full relative h-11"
          onClick={() => handleSocialSignup('GitHub')}
          disabled={isLoading}
        >
          <Github className="h-4 w-4 absolute left-4" />
          <span>Sign up with GitHub</span>
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-full relative h-11"
          onClick={() => handleSocialSignup('Google')}
          disabled={isLoading}
        >
          <Globe className="h-4 w-4 absolute left-4" />
          <span>Sign up with Google</span>
        </Button>
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-background text-muted-foreground">
            Or sign up with email
          </span>
        </div>
      </div>

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-sm font-medium">
              First name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
                className="pl-10 h-11 bg-background"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-sm font-medium">
              Last name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
                className="pl-10 h-11 bg-background"
                required
                disabled={isLoading}
              />
            </div>
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email address
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="pl-10 h-11 bg-background"
              required
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium">
            Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a strong password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              className="pl-10 pr-10 h-11 bg-background"
              required
              disabled={isLoading}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
              disabled={isLoading}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </div>

          {/* Password Strength & Requirements */}
          {formData.password && (
            <div className="space-y-3 p-3 rounded-lg bg-muted/30 border border-border/40">
              <PasswordStrength password={formData.password} />
              <PasswordRequirements password={formData.password} />
            </div>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirm password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
              className={`pl-10 pr-10 h-11 bg-background ${formData.confirmPassword && !passwordsMatch
                  ? 'border-red-500 focus:border-red-500'
                  : formData.confirmPassword && passwordsMatch
                    ? 'border-green-500 focus:border-green-500'
                    : ''
                }`}
              required
              disabled={isLoading}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              disabled={isLoading}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </div>

          {/* Password Match Indicator */}
          {formData.confirmPassword && (
            <div className="flex items-center gap-2 text-xs">
              {passwordsMatch ? (
                <>
                  <Check className="h-3 w-3 text-green-500" />
                  <span className="text-green-600">Passwords match</span>
                </>
              ) : (
                <>
                  <X className="h-3 w-3 text-red-500" />
                  <span className="text-red-600">Passwords do not match</span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Agreement Checkboxes */}
        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="agreeTerms"
              checked={formData.agreeTerms}
              onCheckedChange={(checked) => handleChange('agreeTerms', checked as boolean)}
              disabled={isLoading}
              className="mt-1"
            />
            <Label
              htmlFor="agreeTerms"
              className="text-sm font-normal text-muted-foreground cursor-pointer leading-relaxed"
            >
              I agree to the{' '}
              <Link
                href="/terms"
                className="text-primary hover:text-primary/80 underline"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy"
                className="text-primary hover:text-primary/80 underline"
              >
                Privacy Policy
              </Link>
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="subscribeNewsletter"
              checked={formData.subscribeNewsletter}
              onCheckedChange={(checked) => handleChange('subscribeNewsletter', checked as boolean)}
              disabled={isLoading}
              className="mt-1"
            />
            <Label
              htmlFor="subscribeNewsletter"
              className="text-sm font-normal text-muted-foreground cursor-pointer leading-relaxed"
            >
              Send me product updates, newsletters, and AI tool insights
            </Label>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-11 bg-primary hover:bg-primary/90 transition-colors"
          disabled={isLoading || !isFormValid || !passwordsMatch}
        >
          {isLoading ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
              Creating account...
            </>
          ) : (
            'Create account'
          )}
        </Button>
      </form>

      {/* Sign In Link */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>

      {/* Benefits List */}
      <div className="rounded-lg bg-primary/5 border border-primary/20 p-4 space-y-3">
        <h4 className="font-semibold text-sm text-foreground">
          🚀 Start your AI journey with:
        </h4>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li className="flex items-center gap-2">
            <Check className="h-3 w-3 text-green-500" />
            Access to 1,000+ curated AI tools
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-3 w-3 text-green-500" />
            Personalized tool recommendations
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-3 w-3 text-green-500" />
            Save and organize favorite tools
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-3 w-3 text-green-500" />
            Join the AI community
          </li>
        </ul>
      </div>
    </div>
  );
}