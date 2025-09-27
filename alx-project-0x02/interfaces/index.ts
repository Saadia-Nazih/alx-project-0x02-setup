export interface CardProps {
  title: string;
  content: string;
}

import { type ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

// Interfaccia per l'oggetto annidato 'address'
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

// Interfaccia principale per l'utente, che usa l'interfaccia Address
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: Address;
}