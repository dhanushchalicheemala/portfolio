declare module 'lucide-react' {
  import * as React from 'react';
  
  export interface LucideProps extends React.SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
    strokeWidth?: string | number;
  }
  
  export type Icon = React.FC<LucideProps>;
  
  // Add explicit GitHub -> Github alias
  export const Github: Icon;
  export { Github as GitHub };
} 