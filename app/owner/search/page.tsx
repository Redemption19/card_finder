"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search as SearchIcon, MapPin, Calendar, Info, CircleAlert, PlusCircle, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CardType, CardStatus, FoundCard } from "@/lib/types";
import { CardTypeBadge } from "@/components/card-type-badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import Link from "next/link";

const searchFormSchema = z.object({
  nameOnCard: z.string().min(2, "Name must be at least 2 characters"),
  cardType: z.nativeEnum(CardType).optional(),
  lastFourDigits: z.string()
    .max(4, "Cannot exceed 4 digits")
    .optional()
    .refine(val => !val || /^\d{4}$/.test(val), { 
      message: "Must be exactly 4 digits if provided",
    }),
  location: z.string().optional(),
});

type SearchFormValues = z.infer<typeof searchFormSchema>;

// Mock data for demonstration purposes
const mockFoundCards: FoundCard[] = [
  {
    id: "1",
    nameOnCard: "Kofi Annan",
    cardType: CardType.GhanaCard,
    foundLocation: "Accra Mall, Accra",
    foundDate: "2025-06-15T10:30:00Z",
    description: "Found near the food court entrance",
    status: CardStatus.Approved,
    finderUserId: "finder123",
    finderContact: {
      phone: "+233200000000",
      email: "finder@example.com",
    },
    createdAt: "2025-06-15T10:40:00Z",
    updatedAt: "2025-06-15T11:00:00Z",
  },
  {
    id: "2",
    nameOnCard: "Kwame Nkrumah",
    cardType: CardType.VoterID,
    foundLocation: "University of Ghana, Legon",
    foundDate: "2025-06-14T14:20:00Z",
    status: CardStatus.Approved,
    finderUserId: "finder456",
    finderContact: {
      phone: "+233210000000",
      email: "finder2@example.com",
    },
    createdAt: "2025-06-14T14:30:00Z",
    updatedAt: "2025-06-14T15:00:00Z",
  },
  {
    id: "3",
    nameOnCard: "Kwame Nkrumah",
    cardType: CardType.DebitCard,
    lastFourDigits: "4321",
    foundLocation: "Kotoka International Airport, Accra",
    foundDate: "2025-06-10T09:15:00Z",
    status: CardStatus.Approved,
    finderUserId: "finder789",
    finderContact: {
      phone: "+233220000000",
    },
    createdAt: "2025-06-10T09:30:00Z",
    updatedAt: "2025-06-10T10:00:00Z",
  },
];

export default function SearchCard() {
  const [searchResults, setSearchResults] = useState<FoundCard[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      nameOnCard: "",
      cardType: undefined,
      lastFourDigits: "",
      location: "",
    },
  });

  const onSubmit = async (data: SearchFormValues) => {
    setIsSearching(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Filter mock data based on search criteria
      const filteredResults = mockFoundCards.filter(card => {
        const nameMatch = card.nameOnCard.toLowerCase().includes(data.nameOnCard.toLowerCase());
        const cardTypeMatch = !data.cardType || card.cardType === data.cardType;
        const digitsMatch = !data.lastFourDigits || card.lastFourDigits === data.lastFourDigits;
        const locationMatch = !data.location || 
          card.foundLocation.toLowerCase().includes(data.location.toLowerCase());
        
        return nameMatch && cardTypeMatch && digitsMatch && locationMatch;
      });
      
      setSearchResults(filteredResults);
      setSearchPerformed(true);
    } catch (error) {
      console.error("Error searching for cards:", error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10">
      <Tabs defaultValue="search" className="max-w-4xl mx-auto">
        <TabsList className="mb-4 w-full">
          <TabsTrigger value="search" className="flex-1">Search For Cards</TabsTrigger>
          <TabsTrigger value="report" className="flex-1">Report Lost Card</TabsTrigger>
        </TabsList>
        
        <TabsContent value="search">
          <Card>
            <CardHeader className="bg-muted/50">
              <CardTitle className="text-2xl">Search For Your Card</CardTitle>
              <CardDescription>
                Enter your details to find if someone has reported your card
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="nameOnCard"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name on Card</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="cardType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Card Type (Optional)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select card type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {Object.values(CardType).map((type) => (
                                <SelectItem key={type} value={type}>
                                  <div className="flex items-center">
                                    <CardTypeBadge cardType={type as CardType} />
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="lastFourDigits"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last 4 Digits (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="1234" {...field} />
                          </FormControl>
                          <FormDescription>
                            For bank cards only
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Accra, Kumasi, etc." {...field} />
                          </FormControl>
                          <FormDescription>
                            Where you may have lost your card
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" disabled={isSearching}>
                      {isSearching ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Searching...
                        </>
                      ) : (
                        <>
                          <SearchIcon className="mr-2 h-4 w-4" />
                          Search
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          {searchPerformed && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Search Results</h2>
              {searchResults && searchResults.length > 0 ? (
                <div className="space-y-4">
                  {searchResults.map((card) => (
                    <Card key={card.id} className="overflow-hidden">
                      <div className="bg-primary/10 p-3 border-b flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CardTypeBadge cardType={card.cardType} />
                          <h3 className="font-semibold">{card.nameOnCard}</h3>
                        </div>
                        <div>
                          <Button size="sm">Claim This Card</Button>
                        </div>
                      </div>
                      <CardContent className="pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                                <div>
                                  <p className="text-sm font-medium">Found Location</p>
                                  <p className="text-sm text-muted-foreground">{card.foundLocation}</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground mt-1" />
                                <div>
                                  <p className="text-sm font-medium">Date Found</p>
                                  <p className="text-sm text-muted-foreground">
                                    {format(new Date(card.foundDate), "MMMM d, yyyy")}
                                  </p>
                                </div>
                              </div>
                              {card.lastFourDigits && (
                                <div className="flex items-start gap-2">
                                  <Info className="h-4 w-4 text-muted-foreground mt-1" />
                                  <div>
                                    <p className="text-sm font-medium">Last 4 Digits</p>
                                    <p className="text-sm text-muted-foreground">XXXX XXXX XXXX {card.lastFourDigits}</p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          <div>
                            {card.description && (
                              <div className="bg-muted/50 p-3 rounded-md">
                                <p className="text-sm font-medium">Additional Information</p>
                                <p className="text-sm text-muted-foreground">{card.description}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="pt-6 pb-4 text-center">
                    <CircleAlert className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">No Cards Found</h3>
                    <p className="text-muted-foreground mb-4">
                      We couldn't find any cards matching your search criteria. You can:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                      <Button variant="outline" onClick={() => form.reset()}>
                        Try Different Search
                      </Button>
                      <Button asChild>
                        <Link href="/owner/report">
                          <PlusCircle className="mr-2 h-4 w-4" />
                          Report Lost Card
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="report">
          <div className="text-center p-8">
            <h2 className="text-xl font-medium mb-4">Report Your Lost Card</h2>
            <p className="mb-6 text-muted-foreground">
              If you've lost your card, you can report it here and we'll notify you if someone finds it.
            </p>
            <Button asChild>
              <Link href="/owner/report">Go to Report Form</Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}