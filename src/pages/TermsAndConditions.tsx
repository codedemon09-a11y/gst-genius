import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Scale, AlertTriangle, Shield, RefreshCw, Ban } from 'lucide-react';
import Footer from '@/components/Footer';
import AdSense from '@/components/AdSense';

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - BillCraft Invoice Generator</title>
        <meta name="description" content="Terms and Conditions for using BillCraft Invoice Generator. Read our terms of service, usage policies, and legal agreements." />
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

            <div className="text-center mb-8 md:mb-12">
              <Scale className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-3 md:mb-4" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">Terms and Conditions</h1>
              <p className="text-muted-foreground text-sm md:text-base">Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    Acceptance of Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <p>By accessing and using BillCraft Invoice Generator ("the Service"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Service.</p>
                  <p className="mt-4">These terms apply to all users of the Service, including browsers, customers, merchants, and content contributors.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    Use of Service
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Use the Service for any illegal or unauthorized purpose</li>
                    <li>Violate any laws in your jurisdiction while using the Service</li>
                    <li>Transmit any harmful code or viruses</li>
                    <li>Attempt to interfere with the proper working of the Service</li>
                    <li>Create fraudulent invoices or documents</li>
                    <li>Impersonate any person or entity</li>
                  </ul>
                </CardContent>
              </Card>

              <AdSense />

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                    Disclaimer of Warranties
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <p>The Service is provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Implied warranties of merchantability</li>
                    <li>Fitness for a particular purpose</li>
                    <li>Non-infringement</li>
                    <li>Accuracy or reliability of any information obtained through the Service</li>
                  </ul>
                  <p className="mt-4">We do not warrant that the Service will be uninterrupted, timely, secure, or error-free.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Ban className="w-5 h-5 text-primary" />
                    Limitation of Liability
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <p>In no event shall BillCraft, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Loss of profits, data, or other intangible losses</li>
                    <li>Damages resulting from your access to or use of the Service</li>
                    <li>Unauthorized access to your data</li>
                    <li>Any third-party conduct on the Service</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <RefreshCw className="w-5 h-5 text-primary" />
                    Changes to Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.</p>
                  <p className="mt-4">What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Scale className="w-5 h-5 text-primary" />
                    Governing Law
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
                  <p className="mt-4">Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in effect.</p>
                </CardContent>
              </Card>

              <AdSense />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TermsAndConditions;
