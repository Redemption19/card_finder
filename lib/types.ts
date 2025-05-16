// Card-related types
export enum CardType {
  GhanaCard = "Ghana Card",
  VoterID = "Voter's ID",
  DriversLicense = "Driver's License",
  NHIS = "NHIS Card",
  DebitCard = "Debit Card",
  CreditCard = "Credit Card",
  Passport = "Passport",
  StudentID = "Student ID",
  EmployeeID = "Employee ID",
  Other = "Other ID Card"
}

export enum CardStatus {
  Pending = "Pending Review",
  Approved = "Approved",
  Claimed = "Claimed",
  Returned = "Returned",
  Rejected = "Rejected"
}

export interface FoundCard {
  id: string;
  nameOnCard: string;
  cardType: CardType;
  lastFourDigits?: string;
  foundLocation: string;
  foundDate: string; // ISO date string
  description?: string;
  imageUrl?: string;
  status: CardStatus;
  finderUserId: string;
  finderContact: {
    phone?: string;
    email?: string;
  };
  claimedBy?: string; // User ID of the person who claimed the card
  claimedDate?: string; // ISO date string
  returnedDate?: string; // ISO date string
  tokenPaid?: boolean;
  tokenAmount?: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface LostCardReport {
  id: string;
  nameOnCard: string;
  cardType: CardType;
  lastFourDigits?: string;
  lostLocation?: string;
  lostDate?: string; // ISO date string
  description?: string;
  ownerUserId: string;
  ownerContact: {
    phone: string;
    email: string;
  };
  isFound?: boolean;
  foundCardId?: string; // Reference to the found card if there's a match
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

// User-related types
export enum UserRole {
  User = "user",
  Admin = "admin"
}

export interface User {
  id: string;
  email: string;
  phone?: string;
  displayName?: string;
  photoURL?: string;
  role: UserRole;
  foundCards?: string[]; // Array of found card IDs
  lostCards?: string[]; // Array of lost card IDs
  claimedCards?: string[]; // Array of claimed card IDs
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

// Transaction-related types
export enum PaymentMethod {
  MTNMobileMoney = "MTN Mobile Money",
  VodafoneCash = "Vodafone Cash",
  AirtelTigoMoney = "AirtelTigo Money",
  CardPayment = "Card Payment"
}

export interface Transaction {
  id: string;
  foundCardId: string;
  amount: number;
  paymentMethod: PaymentMethod;
  senderId: string; // User ID of the card owner
  recipientId: string; // User ID of the finder
  status: "pending" | "completed" | "failed";
  paymentReference?: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

// Notification-related types
export enum NotificationType {
  CardFound = "card_found",
  CardClaimed = "card_claimed",
  TokenPaid = "token_paid",
  CardReturned = "card_returned",
  SystemNotice = "system_notice"
}

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  relatedCardId?: string;
  isRead: boolean;
  createdAt: string; // ISO date string
}