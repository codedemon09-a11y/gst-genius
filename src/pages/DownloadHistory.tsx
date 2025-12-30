import { MainLayout } from '@/components/layout/MainLayout';
import { LocalStorageWarning } from '@/components/common/LocalStorageWarning';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, FileText } from 'lucide-react';

const DownloadHistory = () => {
  return (
    <MainLayout>
      <LocalStorageWarning />
      
      <div className="container mx-auto px-4 py-6 lg:py-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
              <Download className="h-8 w-8 text-primary" />
              Download History
            </h1>
            <p className="text-muted-foreground mt-1">
              View your recently downloaded documents
            </p>
          </div>
        </div>

        <Card className="glass border-border/50">
          <CardHeader>
            <CardTitle>No Downloads Yet</CardTitle>
            <CardDescription>Your download history will appear here</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center py-12">
            <div className="h-20 w-20 rounded-full bg-muted/50 flex items-center justify-center mb-4">
              <FileText className="h-10 w-10 text-muted-foreground/50" />
            </div>
            <p className="text-muted-foreground text-center">
              When you print or download documents, they will be listed here for easy access.
            </p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default DownloadHistory;
