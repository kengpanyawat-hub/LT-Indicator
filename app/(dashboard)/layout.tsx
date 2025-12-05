import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import { DashboardShell } from '@/components/layout/dashboard-shell';
import { Toaster } from '@/components/ui/toaster';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <>
      <DashboardShell>{children}</DashboardShell>
      <Toaster />
    </>
  );
}
