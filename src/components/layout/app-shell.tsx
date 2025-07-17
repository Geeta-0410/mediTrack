import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/icons/logo';
import { MainNav } from './main-nav';
import { UserNav } from './user-nav';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Droplets, Gauge, History } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold">MediTrack</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <MainNav />
          <SidebarSeparator className="my-4" />
           <div className="flex items-center gap-3 p-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://placehold.co/100x100.png" alt="Jane Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-base font-semibold">Jane Doe</p>
              <p className="text-sm text-muted-foreground">Patient</p>
            </div>
          </div>
           <div className='p-2 space-y-2'>
             <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-base">Patient Vitals</CardTitle>
                <CardDescription className="text-xs">Last check-up: 2 days ago</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-3">
                 <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Gauge className="h-4 w-4 text-muted-foreground" />
                    <span>Blood Pressure</span>
                  </div>
                  <span className="font-semibold">120/80</span>
                </div>
                 <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-muted-foreground" />
                    <span>Blood Sugar</span>
                  </div>
                  <span className="font-semibold">95 mg/dL</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <History className="h-4 w-4 text-muted-foreground" />
                    <span>Last Visit</span>
                  </div>
                  <span className="font-semibold">2023-10-15</span>
                </div>
                <Button asChild variant="outline" size="sm" className="w-full mt-2">
                  <Link href="/records">View Full Record</Link>
                </Button>
              </CardContent>
            </Card>
           </div>
        </SidebarContent>
        <SidebarFooter>
          <UserNav />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:h-16 sm:px-6 md:hidden">
          <SidebarTrigger />
          <div className="flex items-center gap-2">
            <Logo className="h-6 w-6 text-primary" />
            <span className="font-semibold">MediTrack</span>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
