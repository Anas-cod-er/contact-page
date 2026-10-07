"use client"
import Form from "next/form"

export default function ContactForm({ action }) {
  const fieldClassName =
    "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:focus:border-sky-400 dark:focus:bg-slate-950";

  return (
    <Form action={action} className="mt-7 flex flex-col gap-5">
      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
        Name
        <input
          name="name"
          placeholder="Your name"
          autoComplete="name"
          required
          className={fieldClassName}
        />
      </label>
      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
        Email
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
          className={fieldClassName}
        />
      </label>
      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
        Message
        <textarea
          name="message"
          placeholder="How can we help?"
          rows={5}
          required
          className={`${fieldClassName} resize-y`}
        />
      </label>
      <button className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 active:translate-y-px dark:bg-sky-500 dark:shadow-sky-950/40 dark:hover:bg-sky-400">
        Send message <span aria-hidden="true">→</span>
      </button>
    </Form>
  );
}