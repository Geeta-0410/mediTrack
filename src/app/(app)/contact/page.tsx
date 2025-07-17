import { Mail, MessageSquare, Phone, Video } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ContactPage() {
  return (
    <main className="flex-1 space-y-4 p-4 sm:p-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-lg font-semibold md:text-2xl">Contact Support</h1>
        <p className="text-muted-foreground">
          Need help? Choose a communication channel below to get in touch with our support team.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <MessageSquare className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Secure Messaging</CardTitle>
                <CardDescription>Send us a quick message.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
             <div>
                <Label htmlFor="message-subject">Subject</Label>
                <Input id="message-subject" placeholder="e.g., Question about my prescription" />
             </div>
             <div>
                <Label htmlFor="message-body">Message</Label>
                <Textarea id="message-body" placeholder="Type your message here." rows={5} />
             </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Send Message</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Video className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Video Call</CardTitle>
                <CardDescription>Speak face-to-face with a provider.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Schedule a video consultation for non-emergency concerns. Our team is available from 9 AM to 5 PM on weekdays.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Request a Video Call</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
                <Mail className="h-8 w-8 text-primary" />
                <div>
                    <CardTitle>Direct Email</CardTitle>
                    <CardDescription>For non-urgent inquiries.</CardDescription>
                </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              You can email us directly at <a href="mailto:support@meditrack.com" className="font-medium text-primary hover:underline">support@meditrack.com</a>. We typically respond within 24 hours.
            </p>
            <div className='flex items-center gap-3 mt-4'>
                <Phone className='h-4 w-4 text-muted-foreground' />
                <p className='text-sm text-muted-foreground'>For emergencies, please call 911.</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full" variant="outline">
                <a href="mailto:support@meditrack.com">Open Email Client</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
