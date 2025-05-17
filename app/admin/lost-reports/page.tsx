'use client';

import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import AdminLayout from '@/components/admin/layout';
import { AdminService } from '@/lib/services/admin-service';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, RotateCcw } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

// Define the LostReport interface to match the structure of your data
type ReportStatus = 'open' | 'matched' | 'closed';

interface OwnerContact {
  name: string;
  email: string;
  phone: string;
}

interface LostReport {
  id: string;
  card_type: string;
  name_on_card: string;
  owner_contact: OwnerContact;
  status: ReportStatus;
  created_at: string;
  last_four_digits?: string;
  description?: string;
}

export default function AdminLostReportsPage() {
  const { toast } = useToast();
  const [lostReports, setLostReports] = useState<LostReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedReport, setSelectedReport] = useState<LostReport | null>(null);

  useEffect(() => {
    async function fetchLostReports() {
      try {
        setLoading(true);
        const reportsData = await AdminService.getAllLostReports(true);
        setLostReports(reportsData);
      } catch (error) {
        console.error('Error loading lost reports:', error);
        toast({
          title: 'Error',
          description: 'Failed to load lost reports. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    }
    
    fetchLostReports();
  }, [toast]);

  function getStatusBadge(status: ReportStatus) {
    switch (status) {
      case 'open':
        return <Badge variant="outline" className="bg-blue-100 text-blue-800">Open</Badge>;
      case 'matched':
        return <Badge className="bg-green-100 text-green-800">Matched</Badge>;
      case 'closed':
        return <Badge variant="secondary">Closed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  }

  async function loadLostReports() {
    try {
      setLoading(true);
      const reportsData = await AdminService.getAllLostReports(true);
      setLostReports(reportsData);
    } catch (error) {
      console.error('Error loading lost reports:', error);
      toast({
        title: 'Error',
        description: 'Failed to load lost reports. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Lost Reports</h1>
          <Button onClick={loadLostReports} disabled={loading}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Manage Lost Reports</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-4">Loading...</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name on Card</TableHead>
                    <TableHead>Card Type</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date Reported</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lostReports.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center">
                        No lost reports to display
                      </TableCell>
                    </TableRow>
                  ) : (
                    lostReports.map((report) => (
                      <TableRow key={report.id}>
                        <TableCell>{report.name_on_card}</TableCell>
                        <TableCell>{report.card_type}</TableCell>
                        <TableCell>{report.owner_contact.name}</TableCell>
                        <TableCell>{getStatusBadge(report.status)}</TableCell>
                        <TableCell>
                          {new Date(report.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => setSelectedReport(report)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Report Details</DialogTitle>
                              </DialogHeader>
                              {selectedReport && (
                                <div className="space-y-4">
                                  <div>
                                    <h3 className="font-semibold mb-2">Card Information</h3>
                                    <p><span className="font-medium">Name on Card:</span> {selectedReport.name_on_card}</p>
                                    <p><span className="font-medium">Card Type:</span> {selectedReport.card_type}</p>
                                    {selectedReport.last_four_digits && (
                                      <p><span className="font-medium">Last 4 Digits:</span> {selectedReport.last_four_digits}</p>
                                    )}
                                    {selectedReport.description && (
                                      <p><span className="font-medium">Description:</span> {selectedReport.description}</p>
                                    )}
                                    <p><span className="font-medium">Status:</span> {selectedReport.status}</p>
                                    <p><span className="font-medium">Date Reported:</span> {new Date(selectedReport.created_at).toLocaleString()}</p>
                                  </div>
                                  <div>
                                    <h3 className="font-semibold mb-2">Owner Information</h3>
                                    <p><span className="font-medium">Name:</span> {selectedReport.owner_contact.name}</p>
                                    <p><span className="font-medium">Email:</span> {selectedReport.owner_contact.email}</p>
                                    <p><span className="font-medium">Phone:</span> {selectedReport.owner_contact.phone}</p>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}