declare module 'framer-motion' {
  import * as React from 'react';

  export interface AnimationProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    variants?: any;
    whileHover?: any;
    whileTap?: any;
    whileFocus?: any;
    whileDrag?: any;
    whileInView?: any;
    viewport?: any;
  }
  
  export type MotionProps = AnimationProps & React.HTMLAttributes<HTMLElement>;

  type MotionComponent<T extends keyof JSX.IntrinsicElements> = React.ForwardRefExoticComponent<
    React.PropsWithoutRef<JSX.IntrinsicElements[T] & MotionProps> & React.RefAttributes<HTMLElement>
  >;

  export interface MotionElements {
    div: MotionComponent<'div'>;
    span: MotionComponent<'span'>;
    p: MotionComponent<'p'>;
    h1: MotionComponent<'h1'>;
    h2: MotionComponent<'h2'>;
    h3: MotionComponent<'h3'>;
    h4: MotionComponent<'h4'>;
    h5: MotionComponent<'h5'>;
    h6: MotionComponent<'h6'>;
    ul: MotionComponent<'ul'>;
    li: MotionComponent<'li'>;
    // Add more HTML elements as needed
  }
  
  export const motion: MotionElements;
} 