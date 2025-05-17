'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/layout';
import { AdminService } from '@/lib/services/admin-service';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FoundCard {
  id: string;
  card_type: string;
  name_on_card: string;
  location_found: string;
  finder_id: string;
  finder_name: string;
  finder_contact: string;
  created_at: string;
  status: 'pending' | 'matched' | 'returned' | 'rejected';
  image_url?: string;
  description?: string;
}

export default function FoundCardDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [card, setCard] = useState<FoundCard | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCard() {
      try {
        setLoading(true);
        // Since we don't have a specific method to get a single card, we'll get all and filter
        const cards = await AdminService.getAllFoundCards(true);
        const foundCard = cards.find(c => c.id === id);
        if (foundCard) {
          setCard(foundCard);
        } else {
          toast({
            title: 'Error',
            description: 'Card not found.',
            variant: 'destructive',
          });
          router.push('/admin/found-cards');
        }
      } catch (error) {
        console.error('Error loading card:', error);
        toast({
          title: 'Error',
          description: 'Failed to load card details. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    }
    
    if (id) {
      fetchCard();
    }
  }, [id, router, toast]);

  async function updateCardStatus(status: 'pending' | 'matched' | 'returned' | 'rejected') {
    if (!card) return;
    
    try {
      await AdminService.updateFoundCardStatus(card.id, status, true);
      toast({
        title: 'Success',
        description: `Card status updated to ${status}`,
      });
      // Update the card state
      setCard({ ...card, status });
    } catch (error) {
      console.error('Error updating card status:', error);
      toast({
        title: 'Error',
        description: 'Failed to update card status. Please try again.',
        variant: 'destructive',
      });
    }
  }

  function getStatusBadge(status: string) {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'matched':
        return <Badge variant="outline" className="bg-blue-100 text-blue-800">Matched</Badge>;
      case 'returned':
        return <Badge variant="outline" className="bg-green-100 text-green-800">Returned</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="bg-red-100 text-red-800">Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <p>Loading...</p>
        </div>
      </AdminLayout>
    );
  }

  if (!card) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <p>Card not found</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Found Card Details</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Card Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Card Type</p>
                  <p>{card.card_type}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Name on Card</p>
                  <p>{card.name_on_card}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Location Found</p>
                  <p>{card.location_found}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Date Reported</p>
                  <p>{new Date(card.created_at).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Status</p>
                  <div className="mt-1">{getStatusBadge(card.status)}</div>
                </div>
              </div>
              
              {card.description && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Description</p>
                  <p className="whitespace-pre-line">{card.description}</p>
                </div>
              )}
              
              {card.image_url && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Card Image</p>
                  <div className="mt-2 max-w-md">
                    <img 
                      src={card.image_url} 
                      alt="Card image" 
                      className="rounded-md border w-full object-cover"
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Finder Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Finder Name</p>
                  <p>{card.finder_name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Contact</p>
                  <p>{card.finder_contact}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Update Status</p>
                  <Select
                    value={card.status}
                    onValueChange={(value: 'pending' | 'matched' | 'returned' | 'rejected') => updateCardStatus(value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="matched">Matched</SelectItem>
                      <SelectItem value="returned">Returned</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
} 