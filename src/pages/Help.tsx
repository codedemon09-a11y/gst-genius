import { MainLayout } from '@/components/layout/MainLayout';
import { LocalStorageWarning } from '@/components/common/LocalStorageWarning';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, FileText, Building2, Users, Settings, CreditCard } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const helpSections = [
  {
    icon: FileText,
    title: 'Creating Documents',
    items: [
      { q: 'How do I create a new invoice?', a: 'Go to Sales Documents in the sidebar and select the document type you want to create. Fill in the required details and click Save.' },
      { q: 'Can I edit a saved document?', a: 'Yes, go to Saved Documents and click on the document you want to edit. Make your changes and save again.' },
      { q: 'How do I add line items?', a: 'In the document editor, use the Add Item button to add new line items. You can specify quantity, rate, and GST for each item.' },
    ],
  },
  {
    icon: Building2,
    title: 'Company Settings',
    items: [
      { q: 'How do I update my company details?', a: 'Go to Company Profile in the Manage section. Update your details and click Save Changes.' },
      { q: 'Can I add my company logo?', a: 'Yes, in Company Profile, you can upload your logo. It should be less than 500KB for best results.' },
    ],
  },
  {
    icon: CreditCard,
    title: 'GST & Taxes',
    items: [
      { q: 'How does GST calculation work?', a: 'GST is automatically calculated based on the rate you select for each item. For interstate transactions, IGST applies. For intrastate, CGST and SGST are split equally.' },
      { q: 'What is interstate vs intrastate?', a: 'Interstate is when seller and buyer are in different states (IGST applies). Intrastate is when both are in the same state (CGST + SGST applies).' },
    ],
  },
];

const Help = () => {
  return (
    <MainLayout>
      <LocalStorageWarning />
      
      <div className="container mx-auto px-4 py-6 lg:py-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
              <HelpCircle className="h-8 w-8 text-primary" />
              Help & Instructions
            </h1>
            <p className="text-muted-foreground mt-1">
              Learn how to use GST Invoice Pro effectively
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {helpSections.map((section) => (
            <Card key={section.title} className="glass border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {section.items.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger className="text-sm text-left">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Help;
