"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { products } from "@/data/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Enter a valid phone number").max(30),
  business: z.string().trim().max(120).optional(),
  type: z.string().min(1, "Choose a signage type"),
  size: z.string().trim().max(100).optional(),
  budget: z.string().min(1, "Choose a budget range"),
  timeline: z.string().min(1, "Choose a timeline"),
  description: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(2000),
  consent: z.literal(true, { errorMap: () => ({ message: "Please agree to be contacted" }) }),
});
type Values = z.infer<typeof schema>;

const selectCls = "flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function Field({ label, error, children, id }: { label: string; error?: string | undefined; children: React.ReactNode; id: string }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}

export function QuoteForm({ defaultType = "" }: { defaultType?: string | undefined }) {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { type: defaultType },
  });

  if (done) return (
    <div role="status" className="rounded-xl border bg-card p-10 text-center">
      <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
      <h2 className="mt-4 text-2xl font-bold">Your request has been successfully submitted</h2>
      <p className="mt-2 text-muted-foreground">Thanks - our team will be in touch shortly with your quote.</p>
    </div>
  );

  const onSubmit = async () => {
    // Frontend only: connect a backend here to store and email submissions.
    await new Promise((r) => setTimeout(r, 600));
    setDone(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 rounded-xl border bg-card p-6 md:grid-cols-2 md:p-8">
      <Field id="name" label="Full name *" error={errors.name?.message}><Input id="name" {...register("name")} /></Field>
      <Field id="email" label="Email *" error={errors.email?.message}><Input id="email" type="email" {...register("email")} /></Field>
      <Field id="phone" label="Phone *" error={errors.phone?.message}><Input id="phone" type="tel" {...register("phone")} /></Field>
      <Field id="business" label="Business name" error={errors.business?.message}><Input id="business" {...register("business")} /></Field>
      <Field id="type" label="Signage type *" error={errors.type?.message}>
        <select id="type" className={selectCls} {...register("type")}>
          <option value="">Select a category</option>
          {products.map((p) => <option key={p.slug} value={p.slug}>{p.title}</option>)}
          <option value="other">Other / Not sure</option>
        </select>
      </Field>
      <Field id="size" label="Approximate size" error={errors.size?.message}><Input id="size" placeholder="e.g. 3m x 1m" {...register("size")} /></Field>
      <Field id="budget" label="Budget range *" error={errors.budget?.message}>
        <select id="budget" className={selectCls} {...register("budget")}>
          <option value="">Select budget</option>
          {["Under $1,000", "$1,000 – $5,000", "$5,000 – $15,000", "$15,000+"].map((b) => <option key={b}>{b}</option>)}
        </select>
      </Field>
      <Field id="timeline" label="Preferred timeline *" error={errors.timeline?.message}>
        <select id="timeline" className={selectCls} {...register("timeline")}>
          <option value="">Select timeline</option>
          {["ASAP", "Within 2 weeks", "Within 1 month", "1–3 months", "Flexible"].map((b) => <option key={b}>{b}</option>)}
        </select>
      </Field>
      <div className="md:col-span-2"><Field id="description" label="Project description *" error={errors.description?.message}><Textarea id="description" rows={5} {...register("description")} /></Field></div>
      <div className="md:col-span-2"><Field id="file" label="Logo / artwork (optional)"><Input id="file" type="file" accept="image/*,.pdf,.ai,.eps,.svg" /></Field></div>
      <div className="md:col-span-2">
        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" className="mt-1 h-4 w-4 accent-primary" {...register("consent")} />
          <span>I agree to be contacted about my enquiry in line with the Privacy Policy.</span>
        </label>
        {errors.consent && <p className="mt-1 text-sm text-destructive">{errors.consent.message}</p>}
      </div>
      <Button type="submit" variant="glow" size="xl" disabled={isSubmitting} className="md:col-span-2">{isSubmitting ? "Sending..." : "Submit Quote Request"}</Button>
    </form>
  );
}
