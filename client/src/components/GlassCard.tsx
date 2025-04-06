import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  [x: string]: any;
}

export default function GlassCard({ children, className = '', ...props }: GlassCardProps) {
  return (
    <div className={`glass rounded-2xl ${className}`} {...props}>
      {children}
    </div>
  );
}
