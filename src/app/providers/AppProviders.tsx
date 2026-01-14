import React from 'react';
import { QueryProvider } from './QueryProvider';
import '@/shared/lib/i18n';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <QueryProvider>
      {children}
    </QueryProvider>
  );
};
