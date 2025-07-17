// src/ai/flows/personalized-health-insights.ts
'use server';

/**
 * @fileOverview Provides personalized health advice and insights based on user data.
 *
 * - getPersonalizedHealthInsights - A function that generates personalized health advice.
 * - PersonalizedHealthInsightsInput - The input type for the getPersonalizedHealthInsights function.
 * - PersonalizedHealthInsightsOutput - The return type for the getPersonalizedHealthInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedHealthInsightsInputSchema = z.object({
  userProfile: z
    .string()
    .describe('The user profile including age, gender, and medical history.'),
  historicalData: z
    .string()
    .describe('The user historical health data, including previous diagnoses, lab results, and lifestyle information.'),
});
export type PersonalizedHealthInsightsInput = z.infer<typeof PersonalizedHealthInsightsInputSchema>;

const PersonalizedHealthInsightsOutputSchema = z.object({
  advice: z
    .string()
    .describe('Personalized health advice based on the user profile and historical data.'),
  insights: z
    .string()
    .describe('Personalized health insights based on the user profile and historical data.'),
});
export type PersonalizedHealthInsightsOutput = z.infer<typeof PersonalizedHealthInsightsOutputSchema>;

export async function getPersonalizedHealthInsights(
  input: PersonalizedHealthInsightsInput
): Promise<PersonalizedHealthInsightsOutput> {
  return personalizedHealthInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedHealthInsightsPrompt',
  input: {schema: PersonalizedHealthInsightsInputSchema},
  output: {schema: PersonalizedHealthInsightsOutputSchema},
  prompt: `You are an AI health assistant that provides personalized health advice and insights based on the user's profile and historical data.

  User Profile: {{{userProfile}}}
  Historical Data: {{{historicalData}}}

  Provide personalized health advice and insights based on the user's profile and historical data. Focus on proactive health management and informed decision-making.
  Return advice and insights in a clear and concise manner.`,
});

const personalizedHealthInsightsFlow = ai.defineFlow(
  {
    name: 'personalizedHealthInsightsFlow',
    inputSchema: PersonalizedHealthInsightsInputSchema,
    outputSchema: PersonalizedHealthInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
