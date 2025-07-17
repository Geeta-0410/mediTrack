import Link from 'next/link';
import { format } from 'date-fns';
import { Calendar, Clock } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { appointments } from '@/lib/data';
import type { Appointment } from '@/lib/data';

function AppointmentItem({ appointment }: { appointment: Appointment }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
      <div className="space-y-1">
        <p className="font-semibold">{appointment.department}</p>
        <p className="text-sm text-muted-foreground">with {appointment.doctor}</p>
      </div>
      <div className="text-right">
        <div className="flex items-center justify-end gap-2 text-sm">
          <Calendar className="h-4 w-4" />
          <span>{format(appointment.date, 'MMM dd, yyyy')}</span>
        </div>
        <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{appointment.time}</span>
        </div>
      </div>
    </div>
  );
}

export function AppointmentsList() {
  const upcomingAppointments = appointments.slice(0, 3);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
        <CardDescription>
          Here are your next scheduled appointments.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingAppointments.map((apt) => (
            <AppointmentItem key={apt.id} appointment={apt} />
          ))}
          <Button asChild variant="outline" className="w-full">
            <Link href="/appointments">View All Appointments</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
