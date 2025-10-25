export interface TermsSection {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  lastUpdated: string;
  category: 'legal' | 'usage' | 'privacy' | 'compliance';
  order: number;
}

export const termsSections: TermsSection[] = [
  {
    id: 'acceptance-of-terms',
    title: 'Acceptance of Terms',
    slug: 'acceptance-of-terms',
    summary: 'By accessing and using AI Tools Explorer, you accept and agree to be bound by the terms and provision of this agreement.',
    content: `By accessing and placing an order with AI Tools Explorer, you confirm that you are in agreement with and bound by the terms of service contained in the Terms & Conditions outlined below. These terms apply to the entire website and any email or other type of communication between you and AI Tools Explorer.

If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms & Conditions are considered an offer, acceptance is expressly limited to these Terms & Conditions.`,
    lastUpdated: '2024-01-15',
    category: 'legal',
    order: 1
  },
  {
    id: 'use-license',
    title: 'Use License',
    slug: 'use-license',
    summary: 'Permission is granted to temporarily download one copy of the materials on AI Tools Explorer for personal, non-commercial transitory viewing only.',
    content: `Permission is granted to temporarily download one copy of the materials (information or software) on AI Tools Explorer's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

- Modify or copy the materials
- Use the materials for any commercial purpose or for any public display (commercial or non-commercial)
- Attempt to decompile or reverse engineer any software contained on AI Tools Explorer's website
- Remove any copyright or other proprietary notations from the materials

This license shall automatically terminate if you violate any of these restrictions and may be terminated by AI Tools Explorer at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.`,
    lastUpdated: '2024-01-15',
    category: 'usage',
    order: 2
  },
  {
    id: 'user-responsibilities',
    title: 'User Responsibilities',
    slug: 'user-responsibilities',
    summary: 'Users are responsible for maintaining the confidentiality of their account and password and for restricting access to their computer.',
    content: `As a user of AI Tools Explorer, you are responsible for:

- Maintaining the confidentiality of your account and password
- Restricting access to your computer and account
- Accepting responsibility for all activities that occur under your account or password
- Ensuring that all information provided is accurate and up-to-date
- Complying with all applicable laws and regulations
- Respecting the rights of other users and third parties
- Not using the service for any illegal or unauthorized purpose

You agree to notify AI Tools Explorer immediately of any unauthorized use of your account or any other breach of security.`,
    lastUpdated: '2024-01-15',
    category: 'usage',
    order: 3
  },
  {
    id: 'acceptable-use-policy',
    title: 'Acceptable Use Policy',
    slug: 'acceptable-use-policy',
    summary: 'You agree not to use the service to conduct any activity that is illegal, harmful, or violates the rights of others.',
    content: `You agree not to use AI Tools Explorer to:

- Transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation
- Impersonate or attempt to impersonate AI Tools Explorer, a AI Tools Explorer employee, another user, or any other person or entity
- Engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the service, or which, as determined by us, may harm AI Tools Explorer or users of the service
- Use the service in any manner intended to damage, disable, overburden, or impair any AI Tools Explorer server or the network(s) connected to any AI Tools Explorer server
- Attempt to gain unauthorized access to any systems or networks connected to AI Tools Explorer
- Use any robot, spider, or other automatic device, process, or means to access the service for any purpose

AI Tools Explorer reserves the right to terminate your access immediately, with or without notice, and without liability to you, if AI Tools Explorer believes that you have violated any of these terms.`,
    lastUpdated: '2024-01-15',
    category: 'usage',
    order: 4
  },
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    slug: 'privacy-policy',
    summary: 'Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.',
    content: `AI Tools Explorer is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.

**Information We Collect:**
- Personal information you provide (name, email, etc.)
- Usage data and analytics
- Cookies and similar technologies
- Information from third-party services

**How We Use Your Information:**
- To provide and maintain our service
- To communicate with you about our services
- To improve our website and services
- To comply with legal obligations

**Information Sharing:**
We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.`,
    lastUpdated: '2024-01-15',
    category: 'privacy',
    order: 5
  },
  {
    id: 'data-security',
    title: 'Data Security',
    slug: 'data-security',
    summary: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.',
    content: `AI Tools Explorer takes the security of your data seriously. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.

**Security Measures:**
- Encryption of data in transit and at rest
- Regular security audits and assessments
- Access controls and authentication
- Secure development practices
- Regular backups and disaster recovery

**Data Retention:**
We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.

**Data Breaches:**
In the event of a data breach, we will notify affected users in accordance with applicable laws and regulations.`,
    lastUpdated: '2024-01-15',
    category: 'privacy',
    order: 6
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    slug: 'intellectual-property',
    summary: 'The service and its original content, features, and functionality are and will remain the exclusive property of AI Tools Explorer.',
    content: `The service and its original content, features, and functionality are and will remain the exclusive property of AI Tools Explorer and its licensors. The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.

**User Content:**
By posting content to the service, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, display, and distribute your content in connection with the service.

**DMCA Notice:**
If you believe that your work has been copied in a way that constitutes copyright infringement, please provide our copyright agent with the following information.`,
    lastUpdated: '2024-01-15',
    category: 'legal',
    order: 7
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    slug: 'disclaimer',
    summary: 'The information on this website is provided on an "as is" basis. AI Tools Explorer makes no warranties of any kind.',
    content: `The information on this website is provided on an "as is" basis. AI Tools Explorer makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

Further, AI Tools Explorer does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.

**AI Content Disclaimer:**
AI-generated content and tools are provided for informational purposes only. AI Tools Explorer does not guarantee the accuracy, completeness, or reliability of AI-generated content. Users should exercise caution and verify information independently.`,
    lastUpdated: '2024-01-15',
    category: 'legal',
    order: 8
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    slug: 'limitation-of-liability',
    summary: 'In no event shall AI Tools Explorer or its suppliers be liable for any damages arising out of the use or inability to use the service.',
    content: `In no event shall AI Tools Explorer, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:

- Your use or inability to use the service
- Any unauthorized access to or use of our servers and/or any personal information stored therein
- Any interruption or cessation of transmission to or from the service
- Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our service by any third party
- Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the service

This limitation of liability applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis.`,
    lastUpdated: '2024-01-15',
    category: 'legal',
    order: 9
  },
  {
    id: 'termination',
    title: 'Termination',
    slug: 'termination',
    summary: 'We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability.',
    content: `We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.

If you wish to terminate your account, you may simply discontinue using the service.

All provisions of the Terms which by their nature should survive termination shall survive, including, without limitation, ownership provisions, warranty disclaimers, and limitations of liability.`,
    lastUpdated: '2024-01-15',
    category: 'legal',
    order: 10
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    slug: 'governing-law',
    summary: 'These Terms shall be interpreted and governed by the laws of the jurisdiction in which AI Tools Explorer is incorporated.',
    content: `These Terms shall be interpreted and governed by the laws of the State of California, United States, without regard to its conflict of law provisions.

Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.

These Terms constitute the entire agreement between us regarding our service and supersede and replace any prior agreements we might have had regarding the service.`,
    lastUpdated: '2024-01-15',
    category: 'legal',
    order: 11
  },
  {
    id: 'changes-to-terms',
    title: 'Changes to Terms',
    slug: 'changes-to-terms',
    summary: 'We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice.',
    content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.

What constitutes a material change will be determined at our sole discretion.

By continuing to access or use our service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the service.`,
    lastUpdated: '2024-01-15',
    category: 'legal',
    order: 12
  },
  {
    id: 'contact-information',
    title: 'Contact Information',
    slug: 'contact-information',
    summary: 'If you have any questions about these Terms, please contact us using the information provided.',
    content: `If you have any questions about these Terms & Conditions, please contact us:

**Email:** legal@aitools.com
**Address:** 123 AI Street, Tech Valley, CA 94000, United States
**Phone:** +1 (555) 123-4567

We will respond to your inquiry within 48 hours during business days.`,
    lastUpdated: '2024-01-15',
    category: 'legal',
    order: 13
  }
];

export const getTermsSectionById = (id: string): TermsSection | undefined => {
  return termsSections.find(section => section.id === id);
};

export const getTermsSectionsByCategory = (category: string): TermsSection[] => {
  return termsSections.filter(section => section.category === category);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(termsSections.map(section => section.category)));
};