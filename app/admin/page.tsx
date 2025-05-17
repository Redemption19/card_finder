'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Users, Search, AlertTriangle } from 'lucide-react';
import AdminLayout from '@/components/admin/layout';
import AdminService from '@/lib/services/admin-service';
import { useToast } from '@/hooks/use-toast';

export default function AdminDashboardPage() {
  const { toast } = useToast();
  const [stats, setStats] = useState({
    totalFoundCards: 0,
    totalLostReports: 0,
    totalUsers: 0,
    pendingFoundCards: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboardData() {
      try {
        setLoading(true);
        const foundCards = await AdminService.getAllFoundCards(true);
        const lostReports = await AdminService.getAllLostReports(true);
        const users = await AdminService.getAllUsers(true);
        
        setStats({
          totalFoundCards: foundCards.length,
          totalLostReports: lostReports.length,
          totalUsers: users.length,
          pendingFoundCards: foundCards.filter(card => card.status === 'pending').length,
        });
      } catch (error) {
        console.error('Error loading dashboard data:', error);
        toast({
          title: 'Error',
          description: 'Failed to load dashboard data. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    }

    loadDashboardData();
  }, [toast]);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Found Cards</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {loading ? '...' : stats.totalFoundCards}
              </div>
              <p className="text-xs text-muted-foreground">
                Cards reported as found
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Lost Reports</CardTitle>
              <Search className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {loading ? '...' : stats.totalLostReports}
              </div>
              <p className="text-xs text-muted-foreground">
                Cards reported as lost
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {loading ? '...' : stats.totalUsers}
              </div>
              <p className="text-xs text-muted-foreground">
                Registered users
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {loading ? '...' : stats.pendingFoundCards}
              </div>
              <p className="text-xs text-muted-foreground">
                Cards awaiting approval
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="found-cards" className="space-y-4">
          <TabsList>
            <TabsTrigger value="found-cards">Found Cards</TabsTrigger>
            <TabsTrigger value="lost-reports">Lost Reports</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>
          <TabsContent value="found-cards" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Found Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  View and manage recently reported found cards.
                </p>
                {/* We'll implement the data table in the dedicated page */}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="lost-reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Lost Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  View and manage recently submitted lost card reports.
                </p>
                {/* We'll implement the data table in the dedicated page */}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  View and manage user accounts.
                </p>
                {/* We'll implement the data table in the dedicated page */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}