import { Suspense } from 'react';
import { Metadata } from 'next';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Twitter,
  Linkedin,
  Github,
  Send,
  Building,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ContactForm from './contact-form';
import ContactLoading from './loading';

export const metadata: Metadata = {
  title: 'Contact Us - AI Tools Explorer',
  description: 'Get in touch with our team. We\'re here to help with sales, support, partnerships, and demos. 24/7 support available.',
  keywords: 'contact, support, sales, partnership, demo, AI tools, customer service',
  openGraph: {
    title: 'Contact Us - AI Tools Explorer',
    description: 'Get in touch with our team. We\'re here to help with sales, support, partnerships, and demos.',
    type: 'website',
  },
};

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get detailed help via email',
    contact: 'support@aitoolsexplorer.com',
    response: '24h response time',
    href: 'mailto:support@aitoolsexplorer.com',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our experts',
    contact: '+1 (555) 123-4567',
    response: 'Available 9 AM - 6 PM PST',
    href: 'tel:+15551234567',
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950/20'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Instant support via chat',
    contact: 'Available 24/7',
    response: 'Average response: 2 minutes',
    href: '#',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20'
  }
];

const officeLocations = [
  {
    city: 'San Francisco',
    address: '123 Tech Street, Suite 456\nSan Francisco, CA 94105',
    phone: '+1 (555) 123-4567',
    email: 'sf@aitoolsexplorer.com',
    hours: 'Mon-Fri: 9 AM - 6 PM PST'
  },
  {
    city: 'New York',
    address: '456 Innovation Ave, Floor 12\nNew York, NY 10001',
    phone: '+1 (555) 234-5678',
    email: 'ny@aitoolsexplorer.com',
    hours: 'Mon-Fri: 9 AM - 6 PM EST'
  },
  {
    city: 'London',
    address: '789 Digital Square, Level 5\nLondon, EC2A 1PQ',
    phone: '+44 20 7123 4567',
    email: 'london@aitoolsexplorer.com',
    hours: 'Mon-Fri: 9 AM - 6 PM GMT'
  }
];

const socialLinks = [
  {
    icon: Twitter,
    label: 'Follow us on Twitter',
    href: 'https://twitter.com/aitoolsexplorer',
    color: 'hover:text-blue-500'
  },
  {
    icon: Linkedin,
    label: 'Connect on LinkedIn',
    href: 'https://linkedin.com/company/aitoolsexplorer',
    color: 'hover:text-blue-600'
  },
  {
    icon: Github,
    label: 'View our GitHub',
    href: 'https://github.com/aitoolsexplorer',
    color: 'hover:text-gray-900 dark:hover:text-gray-100'
  }
];

const faqs = [
  {
    question: 'What are your response times for support inquiries?',
    answer: 'We typically respond to all support inquiries within 24 hours during business days. For urgent technical issues, we aim to respond within 4 hours. Enterprise customers receive priority support with guaranteed 1-hour response times.'
  },
  {
    question: 'Is phone support available?',
    answer: 'Yes, phone support is available Monday through Friday, 9 AM to 6 PM in your local time zone. Our expert support team can help with technical issues, account questions, and product guidance. For enterprise customers, we offer extended hours and dedicated support lines.'
  },
  {
    question: 'How can I schedule a product demo?',
    answer: 'You can schedule a personalized product demo by filling out our contact form with "Demo" as the inquiry type, or by emailing sales@aitoolsexplorer.com. Our sales team will reach out within 24 hours to arrange a convenient time. Demos typically last 30-45 minutes and can be conducted virtually or in-person.'
  },
  {
    question: 'Can I visit your offices?',
    answer: 'Yes, we welcome visitors to our offices in San Francisco, New York, and London. Please contact our local office in advance to schedule a visit. We can arrange meetings, tours, and presentations. Virtual meetings are also available for your convenience.'
  },
  {
    question: 'How do I report bugs or technical issues?',
    answer: 'You can report bugs through our contact form, email support@aitoolsexplorer.com, or use the in-app reporting feature. Please include detailed steps to reproduce the issue, your browser/OS information, and any error messages. Our technical team will investigate and provide updates.'
  },
  {
    question: 'Do you offer training and onboarding support?',
    answer: 'Absolutely! We provide comprehensive training and onboarding support for all customers. This includes personalized training sessions, detailed documentation, video tutorials, and dedicated success managers for enterprise accounts. Contact us to learn about our training programs.'
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Get in Touch
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Let&apos;s Build Something
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600"> Amazing </span>
            Together
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Have questions about our AI tools? Need help with implementation? Want to explore partnership opportunities?
            Our team is here to help you succeed. Reach out today and let&apos;s start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Send className="w-5 h-5 mr-2" />
              Send us a Message
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Multiple Ways to Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the contact method that works best for you. We&apos;re available through email, phone, and live chat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-border/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <method.icon className={`w-8 h-8 ${method.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <div className="space-y-2 mb-6">
                    <p className="font-medium text-foreground">{method.contact}</p>
                    <Badge variant="secondary" className="text-xs">
                      {method.response}
                    </Badge>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <a href={method.href} className="flex items-center justify-center gap-2">
                      <method.icon className="w-4 h-4" />
                      Contact Us
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Send us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>
              <Suspense fallback={<ContactLoading />}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Office Locations & Hours */}
            <div className="space-y-8">
              {/* Office Locations */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Building className="w-6 h-6" />
                  Our Offices
                </h3>
                <div className="space-y-6">
                  {officeLocations.map((office, index) => (
                    <Card key={index} className="border-border/40">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0">
                            <MapPin className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg mb-2">{office.city}</h4>
                            <p className="text-muted-foreground text-sm mb-3 whitespace-pre-line">
                              {office.address}
                            </p>
                            <div className="space-y-1 text-sm">
                              <p>
                                <span className="font-medium">Phone:</span>{' '}
                                <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="text-blue-600 hover:underline">
                                  {office.phone}
                                </a>
                              </p>
                              <p>
                                <span className="font-medium">Email:</span>{' '}
                                <a href={`mailto:${office.email}`} className="text-blue-600 hover:underline">
                                  {office.email}
                                </a>
                              </p>
                              <p className="text-muted-foreground">{office.hours}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <Card className="border-border/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Saturday - Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  <Separator />
                  <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      <strong>Enterprise Support:</strong> 24/7 dedicated support available for enterprise customers.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-border/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Stay connected and follow our latest updates on social media.
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <Button key={index} variant="outline" size="icon" asChild>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className={`transition-colors ${social.color}`}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Find Us Worldwide
            </h2>
            <p className="text-lg text-muted-foreground">
              Visit our offices or connect with us virtually from anywhere in the world.
            </p>
          </div>

          <div className="w-full h-96 bg-muted rounded-lg overflow-hidden">
            {/* Google Maps Embed - Replace with actual embed code */}
            <div className="w-full h-full bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive Google Map</p>
                <p className="text-sm text-muted-foreground mt-2">
                  San Francisco • New York • London
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services and support.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background border border-border/40 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}