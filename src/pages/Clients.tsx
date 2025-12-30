import { MainLayout } from '@/components/layout/MainLayout';
import { LocalStorageWarning } from '@/components/common/LocalStorageWarning';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Clients = () => {
  return (
    <MainLayout>
      <LocalStorageWarning />
      
      <div className="container mx-auto px-4 py-6 lg:py-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              Clients
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage your clients and customers
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Client
          </Button>
        </div>

        <div className="flex gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search clients..." className="pl-9" />
          </div>
        </div>

        <Card className="glass border-border/50">
          <CardHeader>
            <CardTitle>No Clients Yet</CardTitle>
            <CardDescription>Add your first client to get started</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center py-12">
            <div className="h-20 w-20 rounded-full bg-muted/50 flex items-center justify-center mb-4">
              <Users className="h-10 w-10 text-muted-foreground/50" />
            </div>
            <p className="text-muted-foreground text-center mb-4">
              Clients you add will appear here for quick selection when creating documents.
            </p>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Your First Client
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Clients;
