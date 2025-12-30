/**
 * HOME PAGE - GST Invoice Pro
 * 
 * AdSense ad placement follows Google policies:
 * - Ads are placed between content sections (not near nav/buttons/forms)
 * - Ads are clearly separated from main content
 */

import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import AdSense from '@/components/AdSense';
import {
  FileText,
  FileCheck,
  FileClock,
  Receipt,
  FolderOpen,
  Settings,
  Plus,
} from 'lucide-react';

const documentTypes = [
  { type: 'sale-invoice', label: 'Tax Invoice', icon: FileText, shortLabel: 'Tax Invoice' },
  { type: 'quotation', label: 'Quotation', icon: FileCheck, shortLabel: 'Quotation' },
  { type: 'proforma', label: 'Proforma', icon: FileClock, shortLabel: 'Proforma' },
  { type: 'bill', label: 'Bill', icon: Receipt, shortLabel: 'Bill' },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>GST Invoice Pro - Professional Billing</title>
        <meta name="description" content="Generate professional GST-compliant invoices, quotations, proforma invoices, and bills with automatic tax calculations." />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        {/* Header */}
        <header className="sticky top-0 z-40 glass border-b border-border/50">
          <div className="container mx-auto px-3 sm:px-4 py-3">
            <div className="flex items-center justify-between gap-2">
              {/* Logo */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-lg shrink-0">
                  <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <h1 className="font-bold text-sm sm:text-base text-foreground">GST Invoice Pro</h1>
                  <p className="text-xs text-muted-foreground hidden sm:block">Professional Billing</p>
                </div>
              </div>

              {/* Navigation Tabs - Desktop */}
              <nav className="hidden md:flex items-center gap-1 bg-muted/50 p-1 rounded-xl">
                {documentTypes.map((doc) => (
                  <Button
                    key={doc.type}
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate(`/create/${doc.type}`)}
                    className="gap-2 rounded-lg"
                  >
                    <doc.icon className="h-4 w-4" />
                    {doc.shortLabel}
                  </Button>
                ))}
              </nav>

              {/* Actions */}
              <div className="flex items-center gap-1 sm:gap-2">
                <Button variant="outline" size="sm" className="gap-1 sm:gap-2">
                  <FolderOpen className="h-4 w-4" />
                  <span className="hidden sm:inline">Documents</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-1 sm:gap-2">
                  <Settings className="h-4 w-4" />
                  <span className="hidden sm:inline">Settings</span>
                </Button>
                <Button size="sm" className="gap-1 sm:gap-2" onClick={() => navigate('/create/sale-invoice')}>
                  <Plus className="h-4 w-4" />
                  <span className="hidden sm:inline">New</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            {/* Hero Icon */}
            <div className="relative mb-6 sm:mb-8 inline-block">
              <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-3xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mx-auto">
                <FileText className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight">
              Create Your First Document
            </h2>
            
            {/* Description */}
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
              Generate professional GST-compliant invoices, quotations, proforma invoices, and bills with automatic tax calculations.
            </p>

            {/* Document Type Buttons */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-2">
              {documentTypes.map((doc) => (
                <Button
                  key={doc.type}
                  variant="outline"
                  size="lg"
                  onClick={() => navigate(`/create/${doc.type}`)}
                  className="gap-2 sm:gap-3 text-sm sm:text-base px-4 sm:px-6 py-5 sm:py-6 rounded-xl border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <doc.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  Create {doc.label}
                </Button>
              ))}
            </div>

            {/* AdSense */}
            <div className="mt-12 sm:mt-16 w-full max-w-2xl mx-auto">
              <AdSense />
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
