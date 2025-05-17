'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Check, X, Eye } from 'lucide-react';
import AdminLayout from '@/components/admin/layout';
import { AdminService } from '@/lib/services/admin-service';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

// Define the FoundCard interface to match the structure of your data
type CardStatus = 'pending' | 'matched' | 'returned' | 'rejected';

interface FoundCard {
  id: string;
  card_type: string;
  name_on_card: string;
  location_found: string;
  created_at: string;
  status: CardStatus;
}

export default function AdminFoundCardsPage() {
  const { toast } = useToast();
  const [foundCards, setFoundCards] = useState<FoundCard[]>([]);
  const [loading, setLoading] = useState(true);

  // Add the loadFoundCards function
  async function loadFoundCards() {
    try {
      setLoading(true);
      const cards = await AdminService.getAllFoundCards(true);
      setFoundCards(cards);
    } catch (error) {
      console.error('Error loading found cards:', error);
      toast({
        title: 'Error',
        description: 'Failed to load found cards. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadFoundCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update the status parameter type in the service call
  async function updateCardStatus(id: string, status: CardStatus) {
    try {
      await AdminService.updateFoundCardStatus(id, status, true);
      toast({
        title: 'Success',
        description: `Card status updated to ${status}`,
      });
      loadFoundCards(); // Reload the list
    } catch (error) {
      console.error('Error updating card status:', error);
      toast({
        title: 'Error',
        description: 'Failed to update card status. Please try again.',
        variant: 'destructive',
      });
    }
  }

  function getStatusBadge(status: CardStatus) {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Pending</Badge>;
      case 'matched':
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Matched</Badge>;
      case 'returned':
        return <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Returned</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Found Cards</h1>
          <Button onClick={loadFoundCards} disabled={loading}>
            Refresh
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Manage Found Cards</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-4">Loading...</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Card Type</TableHead>
                    <TableHead>Name on Card</TableHead>
                    <TableHead>Location Found</TableHead>
                    <TableHead>Date Reported</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {foundCards.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center">
                        No found cards to display
                      </TableCell>
                    </TableRow>
                  ) : (
                    foundCards.map((card) => (
                      <TableRow key={card.id}>
                        <TableCell>{card.card_type}</TableCell>
                        <TableCell>{card.name_on_card}</TableCell>
                        <TableCell>{card.location_found}</TableCell>
                        <TableCell>
                          {new Date(card.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{getStatusBadge(card.status)}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                            >
                              <Link href={`/admin/found-cards/${card.id}`}>
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Link>
                            </Button>
                            
                            {card.status === 'pending' && (
                              <>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-900 dark:hover:bg-green-800 dark:text-green-300"
                                  onClick={() => updateCardStatus(card.id, 'matched')}
                                >
                                  <Check className="h-4 w-4 mr-1" />
                                  Match
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="bg-red-100 hover:bg-red-200 text-red-800 dark:bg-red-900 dark:hover:bg-red-800 dark:text-red-300"
                                  onClick={() => updateCardStatus(card.id, 'rejected')}
                                >
                                  <X className="h-4 w-4 mr-1" />
                                  Reject
                                </Button>
                              </>
                            )}
                            
                            {card.status !== 'pending' && (
                              <Select
                                onValueChange={(value: CardStatus) => updateCardStatus(card.id, value)}
                                defaultValue={card.status}
                              >
                                <SelectTrigger className="w-[130px]">
                                  <SelectValue placeholder="Change status" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="pending">Pending</SelectItem>
                                  <SelectItem value="matched">Matched</SelectItem>
                                  <SelectItem value="returned">Returned</SelectItem>
                                  <SelectItem value="rejected">Rejected</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          </div>
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
