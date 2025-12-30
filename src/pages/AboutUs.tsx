import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Target, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import AdSense from "@/components/AdSense";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - BillCraft Invoice Generator</title>
        <meta name="description" content="Learn about BillCraft - Your professional invoice and quotation generator. We help businesses create beautiful, GST-compliant documents." />
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
              <Building2 className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-3 md:mb-4" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">About BillCraft</h1>
              <p className="text-muted-foreground text-base md:text-lg">Professional Invoice & Quotation Generator</p>
            </div>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    Who We Are
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <p>
                    BillCraft is a dedicated team of professionals committed to simplifying business documentation. 
                    Our invoice and quotation generator is designed to help businesses of all sizes create 
                    professional, GST-compliant documents quickly and efficiently.
                  </p>
                  <p className="mt-4">
                    Founded with the vision of making professional invoicing accessible to everyone, we've helped 
                    thousands of businesses streamline their billing processes.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-primary" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <p>
                    Our mission is to empower businesses with easy-to-use tools that enhance their 
                    professional image. We believe that every business, regardless of size, deserves 
                    access to high-quality document generation tools.
                  </p>
                  <p className="mt-4">
                    We are committed to providing a seamless, user-friendly experience that saves time 
                    and helps businesses focus on what they do best.
                  </p>
                </CardContent>
              </Card>

              <AdSense />
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    What We Offer
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Professional GST-compliant invoice generation</li>
                    <li>Quotation and proforma invoice creation</li>
                    <li>Clean, print-ready professional templates</li>
                    <li>Easy-to-use, intuitive interface</li>
                    <li>Local document storage for privacy</li>
                    <li>Multiple document types support (Invoice, Quotation, Challan, etc.)</li>
                    <li>Automatic GST calculations (CGST, SGST, IGST)</li>
                    <li>Client management system</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary" />
                    Why Choose BillCraft?
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Free to Use:</strong> No hidden charges or subscriptions</li>
                    <li><strong>Privacy First:</strong> All data stored locally on your device</li>
                    <li><strong>GST Compliant:</strong> Fully compliant with Indian GST regulations</li>
                    <li><strong>Professional Templates:</strong> Clean, modern designs for your business</li>
                    <li><strong>No Registration:</strong> Start creating invoices immediately</li>
                    <li><strong>Mobile Friendly:</strong> Works on all devices</li>
                  </ul>
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

export default AboutUs;
