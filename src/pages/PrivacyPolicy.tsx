import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, Database, UserCheck, Mail, Cookie } from 'lucide-react';
import Footer from '@/components/Footer';
import AdSense from '@/components/AdSense';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - BillCraft Invoice Generator</title>
        <meta name="description" content="Privacy Policy for BillCraft Invoice Generator. Learn how we collect, use, and protect your personal information." />
      </Helmet>
      
      <div className="min-h-screen bg-background flex flex-col">
        <div className="flex-1 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>

            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-primary" />
                    Information We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <p>We collect information you provide directly to us, including:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Company and business information for invoice generation</li>
                    <li>Client details you add for creating documents</li>
                    <li>Usage data to improve our services</li>
                    <li>Technical information such as browser type and device information</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-primary" />
                    How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Provide, maintain, and improve our invoice generation services</li>
                    <li>Process and complete transactions</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Analyze usage patterns to enhance user experience</li>
                  </ul>
                </CardContent>
              </Card>

              <AdSense />

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-primary" />
                    Data Storage & Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <p>Your data security is our priority:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>All data is stored locally in your browser using localStorage</li>
                    <li>We do not store your business data on our servers</li>
                    <li>No sensitive financial information is transmitted to external servers</li>
                    <li>You maintain full control over your data at all times</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Cookie className="w-5 h-5 text-primary" />
                    Cookies and Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <p>We use cookies and similar tracking technologies to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Remember your preferences and settings</li>
                    <li>Understand how you use our service</li>
                    <li>Serve relevant advertisements through Google AdSense</li>
                    <li>Improve the overall user experience</li>
                  </ul>
                  <p className="mt-4">You can control cookies through your browser settings.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <UserCheck className="w-5 h-5 text-primary" />
                    Third-Party Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <p>We may use third-party services that collect information:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong>Google AdSense:</strong> We display advertisements through Google AdSense, which may use cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google's Ads Settings</a>.</li>
                    <li><strong>Analytics:</strong> We may use analytics services to understand how users interact with our application</li>
                  </ul>
                </CardContent>
              </Card>

              <AdSense />

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    Your Rights
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Access and export your data at any time</li>
                    <li>Delete your data by clearing browser storage</li>
                    <li>Opt out of personalized advertisements</li>
                    <li>Contact us with any privacy concerns</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <p>If you have any questions about this Privacy Policy, please contact us:</p>
                  <p className="mt-4">
                    <strong>Email:</strong> privacy@billcraft.com<br />
                    <strong>Website:</strong> www.billcraft.com
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
