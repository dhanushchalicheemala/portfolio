import { VariantProps } from 'class-variance-authority';

declare module '@/components/ui/badge' {
  export interface BadgeProps extends VariantProps<typeof badgeVariants> {
    className?: string;
    children?: React.ReactNode;
  }
  
  export const Badge: React.FC<BadgeProps>;
} 