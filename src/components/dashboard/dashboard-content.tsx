
"use client";

import {
  HeartPulse,
  CalendarDays,
  Droplets,
  Gauge,
} from 'lucide-react';
import { AppointmentsList } from '@/components/dashboard/appointments-list';
import { HealthInsightsCard } from '@/components/dashboard/health-insights-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { StatCard } from '@/components/dashboard/stat-card';
import { healthMetrics } from '@/lib/data';

export function DashboardContent() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Welcome back, Jane!</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
         <StatCard
          title="Heart Rate"
          value="72 bpm"
          icon={HeartPulse}
          description="Slightly above average"
          metricData={healthMetrics.heartRate}
          dataKey="rate"
        />
        <StatCard
          title="Blood Pressure"
          value="120/80"
          icon={Gauge}
          description="Within normal range"
          metricData={healthMetrics.bloodPressure}
          dataKey="systolic"
        />
        <StatCard
          title="Blood Sugar"
          value="95 mg/dL"
          icon={Droplets}
          description="Good control"
          metricData={healthMetrics.bloodSugar}
          dataKey="level"
        />
        <StatCard
          title="Upcoming Appointments"
          value="3"
          icon={CalendarDays}
          description="In the next 30 days"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-4">
            <HealthInsightsCard />
        </div>
        <div className="lg:col-span-3">
            <AppointmentsList />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/appointments">Schedule Appointment</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/records">View Medical Records</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
