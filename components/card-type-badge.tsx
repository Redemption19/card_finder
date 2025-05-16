"use client";

import { CardType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CreditCard, CreditCardIcon, Landmark, BookUser, Presentation as Identification, HeartPulse, BadgeCheck, Briefcase, FileCheck, FileQuestion } from "lucide-react";

interface CardTypeBadgeProps {
  cardType: CardType;
  className?: string;
  iconOnly?: boolean;
}

export function CardTypeBadge({ cardType, className, iconOnly = false }: CardTypeBadgeProps) {
  const getCardTypeDetails = (type: CardType) => {
    switch (type) {
      case CardType.GhanaCard:
        return {
          icon: <Identification className={iconOnly ? "h-5 w-5" : "h-4 w-4 mr-1"} />,
          color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
        };
      case CardType.VoterID:
        return {
          icon: <BadgeCheck className={iconOnly ? "h-5 w-5" : "h-4 w-4 mr-1"} />,
          color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
        };
      case CardType.DriversLicense:
        return {
          icon: <FileCheck className={iconOnly ? "h-5 w-5" : "h-4 w-4 mr-1"} />,
          color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
        };
      case CardType.NHIS:
        return {
          icon: <HeartPulse className={iconOnly ? "h-5 w-5" : "h-4 w-4 mr-1"} />,
          color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
        };
      case CardType.DebitCard:
      case CardType.CreditCard:
        return {
          icon: <CreditCardIcon className={iconOnly ? "h-5 w-5" : "h-4 w-4 mr-1"} />,
          color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
        };
      case CardType.Passport:
        return {
          icon: <Landmark className={iconOnly ? "h-5 w-5" : "h-4 w-4 mr-1"} />,
          color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
        };
      case CardType.StudentID:
        return {
          icon: <BookUser className={iconOnly ? "h-5 w-5" : "h-4 w-4 mr-1"} />,
          color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
        };
      case CardType.EmployeeID:
        return {
          icon: <Briefcase className={iconOnly ? "h-5 w-5" : "h-4 w-4 mr-1"} />,
          color: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300",
        };
      default:
        return {
          icon: <FileQuestion className={iconOnly ? "h-5 w-5" : "h-4 w-4 mr-1"} />,
          color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
        };
    }
  };

  const { icon, color } = getCardTypeDetails(cardType);

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        color,
        className
      )}
    >
      {icon}
      {!iconOnly && cardType}
    </span>
  );
}