import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}   

export const Card = ({ title, children }: CardProps) => {
  return (
    <div className="p-4 border rounded">
      <h2>{title}</h2>
      <div className="mt-2">{children}</div>
    </div>
  );
};
