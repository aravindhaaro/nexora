import { useState, ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { siteContent } from "@/data/siteContent";

const RECIPIENT_EMAIL = siteContent.brand.email;

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be under 80 characters"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid contact number")
    .max(20, "Number is too long")
    .regex(/^[+\d][\d\s\-()]{6,19}$/, "Use digits, spaces, +, -, ( )"),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

type FormValues = z.infer<typeof schema>;

interface ContactDialogProps {
  trigger: ReactNode;
}

export function ContactDialog({ trigger }: ContactDialogProps) {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSending(true);
    try {
      // Build a mailto link with safely-encoded values
      const subject = `New inquiry from ${values.name}`;
      const body = [
        `Name: ${values.name}`,
        `Phone: ${values.phone}`,
        "",
        "Message:",
        values.message,
      ].join("\n");

      const href = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Open the user's email client
      window.location.href = href;

      // Brief animated success state
      await new Promise((r) => setTimeout(r, 600));
      setSent(true);
      toast({
        title: "Opening your email app",
        description: "Hit send there and your message will reach Nexora.",
      });

      // Reset after a moment so the dialog can be reused
      setTimeout(() => {
        setSent(false);
        setOpen(false);
        form.reset();
      }, 1800);
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) {
          setSent(false);
          form.reset();
        }
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-zinc-950 border border-white/10 text-white p-0 overflow-hidden">
        {/* Animated ambient gradient */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/5 blur-3xl animate-pulse"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/5 blur-3xl animate-pulse"
        />

        <div className="relative p-6 md:p-8">
          <DialogHeader className="space-y-2 text-left animate-fade-in">
            <div className="text-[10px] uppercase tracking-[0.4em] text-white/50">
              Nexora · Get in touch
            </div>
            <DialogTitle className="text-2xl md:text-3xl font-light tracking-tight text-white">
              Let's start a conversation.
            </DialogTitle>
            <DialogDescription className="text-white/60 text-sm">
              Tell us about your project and we'll be in touch shortly.
            </DialogDescription>
          </DialogHeader>

          {sent ? (
            <div className="py-12 flex flex-col items-center justify-center text-center animate-scale-in">
              <CheckCircle2 className="h-14 w-14 text-emerald-400 mb-4" />
              <p className="text-lg font-light">Message ready to send</p>
              <p className="text-white/50 text-sm mt-1">
                Your email app should now be open.
              </p>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-6 space-y-4 animate-fade-in"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-[0.2em] text-white/60">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          maxLength={80}
                          autoComplete="name"
                          placeholder="Your full name"
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-white/30 transition-all"
                        />
                      </FormControl>
                      <FormMessage className="text-rose-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-[0.2em] text-white/60">
                        Contact number
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          inputMode="tel"
                          maxLength={20}
                          autoComplete="tel"
                          placeholder="+974 70 480 335"
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-white/30 transition-all"
                        />
                      </FormControl>
                      <FormMessage className="text-rose-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-[0.2em] text-white/60">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={4}
                          maxLength={1000}
                          placeholder="Tell us about your packaging needs…"
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-white/30 resize-none transition-all"
                        />
                      </FormControl>
                      <div className="flex justify-between items-center">
                        <FormMessage className="text-rose-400" />
                        <span className="text-[10px] text-white/30 ml-auto">
                          {field.value?.length ?? 0}/1000
                        </span>
                      </div>
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  disabled={sending}
                  className="group relative w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium tracking-wide transition-all hover:bg-white/90 hover:scale-[1.02] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Preparing…
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-center text-white/30 pt-1">
                  Your message will be addressed to {RECIPIENT_EMAIL}
                </p>
              </form>
            </Form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
