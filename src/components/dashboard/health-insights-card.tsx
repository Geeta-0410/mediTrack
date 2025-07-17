"use client";

import { useState } from "react";
import { Loader2, Lightbulb } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getPersonalizedHealthInsights } from "@/ai/flows/personalized-health-insights";
import type { PersonalizedHealthInsightsOutput } from "@/ai/flows/personalized-health-insights";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  userProfile: z.string().min(10, {
    message: "Profile must be at least 10 characters.",
  }),
  historicalData: z.string().min(10, {
    message: "Historical data must be at least 10 characters.",
  }),
});

export function HealthInsightsCard() {
  const [isLoading, setIsLoading] = useState(false);
  const [insights, setInsights] =
    useState<PersonalizedHealthInsightsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userProfile: "45-year-old male, non-smoker, active lifestyle, history of high cholesterol.",
      historicalData: "Last check-up 6 months ago, LDL cholesterol was 140 mg/dL. No major surgeries. Takes statin medication daily.",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setInsights(null);
    try {
      const result = await getPersonalizedHealthInsights(values);
      setInsights(result);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate health insights. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-primary" />
          <CardTitle>Personalized Health Insights</CardTitle>
        </div>
        <CardDescription>
          Get health advice and insights based on your profile.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="userProfile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Profile</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 35-year-old female, active, no chronic conditions..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="historicalData"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Historical Data</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Recent lab results, diagnoses, lifestyle..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Lightbulb className="mr-2 h-4 w-4" />
              )}
              Get Advice
            </Button>
          </form>
        </Form>
      </CardContent>
      {insights && (
        <>
          <Separator className="my-4"/>
          <CardFooter className="flex-col items-start gap-4">
            <div>
                <h3 className="font-semibold">Personalized Advice</h3>
                <p className="text-sm text-muted-foreground">{insights.advice}</p>
            </div>
            <div>
                <h3 className="font-semibold">Key Insights</h3>
                <p className="text-sm text-muted-foreground">{insights.insights}</p>
            </div>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
