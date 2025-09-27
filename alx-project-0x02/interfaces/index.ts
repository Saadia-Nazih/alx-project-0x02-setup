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