import Link from "next/link";
import { connectDB } from "../../lib/db";
import ContactForm from "../../components/contact-form";
import ThemeToggle from "../../components/theme-toggle";
import { createContact } from "../../actions/contact";

export default async function Home() {
  await connectDB();

  return (
    <main className="relative flex min-h-screen flex-1 items-center justify-center overflow-hidden bg-background px-5 py-12 text-foreground transition-colors duration-300 sm:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-sky-100/70 via-transparent to-transparent dark:from-sky-950/40" />
      <div className="relative w-full max-w-5xl">
        <header className="mb-16 flex items-center justify-between sm:mb-24">
          <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="flex size-10 items-center justify-center rounded-xl bg-sky-600 text-sm font-bold text-white shadow-lg shadow-sky-600/20">
              C
            </span>
            <span className="text-lg">Connect</span>
          </Link>
          <ThemeToggle />
        </header>

        <section className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16">
          <div className="max-w-md">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-400">
              Get in touch
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Let&apos;s start a conversation.
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400">
              Have a question or an idea? Send us a message and we&apos;ll get
              back to you as soon as we can.
            </p>
            <div className="mt-9 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex size-9 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                ↗
              </span>
              We&apos;re looking forward to hearing from you.
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-xl shadow-slate-900/5 backdrop-blur sm:p-9 dark:border-slate-800 dark:bg-slate-900/85 dark:shadow-black/20">
            <h2 className="text-xl font-semibold tracking-tight">Send a message</h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Fill out the form below and we&apos;ll be in touch.
            </p>
            <ContactForm action={createContact} />
          </div>
        </section>

        <footer className="mt-16 border-t border-slate-200/80 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
          We respect your privacy and will only use your details to respond.
        </footer>
      </div>
    </main>
  );
}
