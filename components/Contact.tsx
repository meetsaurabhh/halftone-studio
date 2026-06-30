"use client";

import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";
import { Container, Reveal } from "./ui/primitives";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Record<Field, string>): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Tell us who you are.";
  if (!values.email.trim()) errors.email = "We need an email to reply.";
  else if (!emailPattern.test(values.email)) errors.email = "That email looks off.";
  if (values.message.trim().length < 10)
    errors.message = "A sentence or two helps — at least 10 characters.";
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (field: Field) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // No backend for this brief — we resolve locally and confirm.
    setSent(true);
    setValues({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 rounded-3xl border border-line bg-surface p-7 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="section-label">Start a project</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              Tell us what you&apos;re building.
            </h2>
            <p className="mt-4 max-w-sm text-muted">
              Send a few lines about the project and we&apos;ll get back within two
              working days. No forms-into-the-void here.
            </p>
            <p className="mt-8 font-mono text-sm text-muted">
              hello@halftone.studio
            </p>
          </Reveal>

          <Reveal delay={100}>
            {sent ? (
              <div className="flex h-full min-h-[18rem] flex-col items-start justify-center rounded-2xl border border-accent/40 bg-accent/5 p-8">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-bg">
                  <Check size={20} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-fg">
                  Message sent.
                </h3>
                <p className="mt-2 text-muted">
                  Thanks — we&apos;ve got it and will be in touch shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-ghost mt-6"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={onSubmit} className="grid gap-5">
                <FormField
                  id="name"
                  label="Name"
                  error={errors.name}
                >
                  <input
                    id="name"
                    type="text"
                    value={values.name}
                    onChange={update("name")}
                    placeholder="Ada Lovelace"
                    className="field"
                    aria-invalid={!!errors.name}
                  />
                </FormField>

                <FormField id="email" label="Email" error={errors.email}>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={update("email")}
                    placeholder="ada@studio.com"
                    className="field"
                    aria-invalid={!!errors.email}
                  />
                </FormField>

                <FormField id="message" label="Message" error={errors.message}>
                  <textarea
                    id="message"
                    rows={4}
                    value={values.message}
                    onChange={update("message")}
                    placeholder="A line or two about the project, timeline, and budget."
                    className="field resize-none"
                    aria-invalid={!!errors.message}
                  />
                </FormField>

                <button type="submit" className="btn-primary mt-1 w-fit">
                  Send message <Send size={15} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium text-fg">
        {label}
      </label>
      {children}
      {error && (
        <p className="text-sm text-clay" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
