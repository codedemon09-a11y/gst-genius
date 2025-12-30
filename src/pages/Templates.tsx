import { MainLayout } from '@/components/layout/MainLayout';
import { LocalStorageWarning } from '@/components/common/LocalStorageWarning';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Check, FileText, Sparkles, Layers } from 'lucide-react';

const templates = [
  { id: 'modern', name: 'Modern', description: 'Clean and minimal design', icon: Sparkles },
  { id: 'classic', name: 'Classic', description: 'Traditional professional look', icon: FileText },
  { id: 'compact', name: 'Compact', description: 'Space-efficient layout', icon: Layers },
];

const Templates = () => {
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="glass border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <template.icon className="h-6 w-6 text-primary" />
                  </div>
                  {template.id === 'modern' && (
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
                <Button variant="outline" className="w-full">
                  {template.id === 'modern' ? 'Active Template' : 'Use Template'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Templates;
