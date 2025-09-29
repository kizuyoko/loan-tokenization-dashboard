import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}   

export const Card = ({ title, children }: CardProps) => {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-semibold text-center text-blue-800">{title}</h2>
      <div className="mt-2">{children}</div>
    </div>
  );
};
