import * as React from 'react';

declare module 'react-icons/si' {
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }

  export type IconType = React.FC<IconBaseProps>;

  // Define all used icons
  export const SiPython: IconType;
  export const SiTensorflow: IconType;
  export const SiScikitlearn: IconType;
  export const SiPandas: IconType;
  export const SiJupyter: IconType;
  export const SiOpenai: IconType;
  export const SiReact: IconType;
  export const SiNextdotjs: IconType;
  export const SiJavascript: IconType;
  export const SiTypescript: IconType;
  export const SiFlask: IconType;
  export const SiDjango: IconType;
  export const SiDocker: IconType;
  export const SiAws: IconType;
  export const SiAmazonaws: IconType;
  export const SiAmazon: IconType;
  export const SiAmazonwebservices: IconType;
  export const SiAwslambda: IconType;
  export const SiAmazonec2: IconType;
  export const SiAwsamplify: IconType;
  export const SiAmazoncloudwatch: IconType;
  export const SiAwsfargate: IconType;
  export const SiMongodb: IconType;
  export const SiPostgresql: IconType;
  export const SiGit: IconType;
}

declare module 'react-icons/fi' {
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }

  export type IconType = React.FC<IconBaseProps>;

  export const FiGithub: IconType;
  export const FiLinkedin: IconType;
  export const FiTwitter: IconType;
} 