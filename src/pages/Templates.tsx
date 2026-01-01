import { MainLayout } from '@/components/layout/MainLayout';
import { LocalStorageWarning } from '@/components/common/LocalStorageWarning';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Check, FileText, Sparkles, Layers, Briefcase } from 'lucide-react';
import { useInvoiceStore } from '@/hooks/useInvoiceStore';
import { TemplateStyle } from '@/types/invoice';
import { toast } from 'sonner';

const templates = [
  { id: 'modern' as TemplateStyle, name: 'Modern', description: 'Clean and minimal design', icon: Sparkles },
  { id: 'classic' as TemplateStyle, name: 'Classic', description: 'Traditional professional look', icon: FileText },
  { id: 'minimal' as TemplateStyle, name: 'Minimal', description: 'Simple and elegant', icon: Layers },
  { id: 'professional' as TemplateStyle, name: 'Professional', description: 'Business formal style', icon: Briefcase },
];

const Templates = () => {
  const { companySettings, updateCompanySettings, isLoaded } = useInvoiceStore();

  const handleSelectTemplate = (templateId: TemplateStyle) => {
    updateCompanySettings({
      ...companySettings,
      defaultTemplate: templateId,
    });
    toast.success(`Template changed to ${templates.find(t => t.id === templateId)?.name}`);
  };

  if (!isLoaded) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </MainLayout>
    );
  }

  const activeTemplate = companySettings.defaultTemplate || 'modern';

  return (
    <MainLayout>
      <LocalStorageWarning />
      
      <div className="container mx-auto px-4 py-6 lg:py-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
              <Palette className="h-8 w-8 text-primary" />
              Templates
            </h1>
            <p className="text-muted-foreground mt-1">
              Choose a template for your documents
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template) => {
            const isActive = template.id === activeTemplate;
            
            return (
              <Card 
                key={template.id} 
                className={`glass border-border/50 hover:border-primary/50 transition-colors cursor-pointer ${isActive ? 'border-primary ring-2 ring-primary/20' : ''}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <template.icon className="h-6 w-6 text-primary" />
                    </div>
                    {isActive && (
                      <span className="flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                        <Check className="h-3 w-3" /> Active
                      </span>
                    )}
                  </div>
                  <CardTitle className="mt-4">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[4/3] bg-muted/50 rounded-lg mb-4 flex items-center justify-center">
                    <FileText className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                  <Button 
                    variant={isActive ? "default" : "outline"} 
                    className="w-full"
                    onClick={() => handleSelectTemplate(template.id)}
                    disabled={isActive}
                  >
                    {isActive ? 'Active Template' : 'Use Template'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default Templates;
