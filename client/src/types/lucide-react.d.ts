declare module 'lucide-react' {
  import * as React from 'react';
  
  export interface LucideProps extends React.SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
    strokeWidth?: string | number;
  }
  
  export type Icon = React.FC<LucideProps>;
  
  // Export all icons as named exports with consistent naming
  export const FileText: Icon;
  export const Users: Icon;
  export const Calendar: Icon;
  export const Award: Icon;
  export const Globe: Icon;
  export const ArrowUpRight: Icon;
  export const BookOpen: Icon;
  export const Book: Icon;
  export const BookMarked: Icon;
  export const BookOpenCheck: Icon;
  export const BookCheck: Icon;
  export const BookText: Icon;
  export const Library: Icon;
  export const Books: Icon;
  // BookOpen2 is likely one of these icons with a different name
  export { BookOpen as BookOpen2 }; // Alias BookOpen as BookOpen2
  export const ChevronDown: Icon;
  export const Download: Icon;
  export const Github: Icon; // Only this lowercase version exists
  export const Linkedin: Icon;
  export const Mail: Icon;
  export const ExternalLink: Icon;
  export const Tag: Icon;
  export const GraduationCap: Icon;
  export const Lightbulb: Icon;
  export const Languages: Icon;
  export const UserCircle: Icon;
  export const Menu: Icon;
  export const ArrowLeft: Icon;
  export const ArrowRight: Icon;
  export const Check: Icon;
  export const Circle: Icon;
  export const X: Icon;
  export const ChevronRight: Icon;
  export const ChevronLeft: Icon;
  export const MoreHorizontal: Icon;
  export const PanelLeft: Icon;
  export const ChevronUp: Icon;
  export const Search: Icon;
  export const Dot: Icon;
  export const AlertCircle: Icon;
} 