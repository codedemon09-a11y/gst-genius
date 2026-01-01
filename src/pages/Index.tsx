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
  LayoutDashboard,
  FileSpreadsheet,
  Users,
  Package,
  Calculator,
  Download,
  HelpCircle,
} from 'lucide-react';

const documentTypes = [
  { type: 'tax-invoice', label: 'Tax Invoice', icon: FileText, shortLabel: 'Tax Invoice' },
  { type: 'sale-invoice', label: 'Sales Invoice', icon: FileText, shortLabel: 'Sales Invoice' },
  { type: 'quotation', label: 'Quotation', icon: FileCheck, shortLabel: 'Quotation' },
  { type: 'proforma', label: 'Proforma', icon: FileClock, shortLabel: 'Proforma' },
  { type: 'bill', label: 'Bill', icon: Receipt, shortLabel: 'Bill' },
];

const quickActions = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, description: 'View analytics & overview' },
  { path: '/templates', label: 'Templates', icon: FileSpreadsheet, description: 'Manage document templates' },
  { path: '/clients', label: 'Clients', icon: Users, description: 'Manage your clients' },
  { path: '/products', label: 'Products', icon: Package, description: 'Product & service catalog' },
  { path: '/tax-settings', label: 'Tax Settings', icon: Calculator, description: 'Configure GST rates' },
  { path: '/download-history', label: 'Downloads', icon: Download, description: 'View download history' },
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
                <Button size="sm" className="gap-1 sm:gap-2" onClick={() => navigate('/create/tax-invoice')}>
                  <Plus className="h-4 w-4" />
                  <span className="hidden sm:inline">New</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-4 py-8 sm:py-12 relative z-10">
          <div className="max-w-6xl mx-auto animate-fade-in">
            {/* Hero Section */}
            <div className="text-center mb-10 sm:mb-12">
              <div className="relative mb-6 inline-block">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mx-auto">
                  <FileText className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-tight">
                GST Invoice Pro
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed px-2">
                Complete billing solution with invoices, quotations, client management, and tax calculations.
              </p>
            </div>

            {/* Create Documents Section */}
            <div className="mb-10 sm:mb-12">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 text-center">
                Create Documents
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {documentTypes.map((doc) => (
                  <Button
                    key={doc.type}
                    variant="outline"
                    onClick={() => navigate(`/create/${doc.type}`)}
                    className="flex flex-col items-center gap-2 sm:gap-3 h-auto py-5 sm:py-6 px-3 sm:px-4 rounded-xl border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    <doc.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    <span className="text-xs sm:text-sm font-medium">{doc.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Actions Section */}
            <div className="mb-10 sm:mb-12">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 text-center">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {quickActions.map((action) => (
                  <Button
                    key={action.path}
                    variant="ghost"
                    onClick={() => navigate(action.path)}
                    className="flex flex-col items-center gap-2 h-auto py-4 sm:py-5 px-3 rounded-xl bg-muted/30 hover:bg-muted/60 transition-all"
                  >
                    <action.icon className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">{action.label}</span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground text-center leading-tight hidden sm:block">
                      {action.description}
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            {/* AdSense */}
            <div className="w-full max-w-2xl mx-auto">
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
