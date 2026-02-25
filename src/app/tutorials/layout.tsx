'use client';

import TutorialAuthGuard from '@/components/auth/tutorial-auth-guard';

export default function TutorialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use the shared auth guard component
  return <TutorialAuthGuard>{children}</TutorialAuthGuard>;
}

