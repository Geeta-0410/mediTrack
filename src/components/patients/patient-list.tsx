"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { patients } from "@/lib/data";

export function PatientList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {patients.map((patient) => (
        <Card key={patient.id}>
          <CardHeader className="flex-row items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={patient.avatarUrl} alt={patient.name} />
              <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{patient.name}</CardTitle>
              <CardDescription>Last Visit: {patient.lastVisit}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-1">
            <p className="text-sm font-medium">Contact:</p>
            <p className="text-sm text-muted-foreground">{patient.email}</p>
            <p className="text-sm text-muted-foreground">{patient.phone}</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View Details</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
