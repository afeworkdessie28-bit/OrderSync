export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-12">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Terms of Service
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">
          Terms for using ScriptForge AI
        </h1>
        <p className="mt-6 max-w-3xl text-slate-400">
          These terms describe how you may use ScriptForge AI and our
          responsibilities around payments, content, and service availability.
        </p>

        <section className="mt-12 space-y-8 text-slate-300">
          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Acceptance of terms
            </h2>
            <p className="mt-4 text-slate-400">
              By accessing ScriptForge AI, you agree to follow these terms. Use
              of the platform is subject to availability, and we may make
              changes to the service or terms with advance notice.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Subscriptions and billing
            </h2>
            <p className="mt-4 text-slate-400">
              We offer a free plan and a Pro subscription at $9 per month. Pro
              plan billing is handled through our payment provider and renews
              automatically until cancelled.
            </p>
            <p className="mt-4 text-slate-400">
              If you upgrade, your payment method will be charged immediately
              for the first billing period. You may cancel at any time through
              support email before the next renewal.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8">
            <h2 className="text-2xl font-semibold text-white">Refund policy</h2>
            <p className="mt-4 text-slate-400">
              Refunds are handled on a case-by-case basis. If you believe a
              refund is warranted, contact support@scriptforge.ai within 14 days
              of purchase and include your account details.
            </p>
            <p className="mt-4 text-slate-400">
              We aim to resolve requests promptly, but refunds may be subject to
              the payment processor’s policies.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8">
            <h2 className="text-2xl font-semibold text-white">
              User responsibilities
            </h2>
            <p className="mt-4 text-slate-400">
              You are responsible for providing accurate information and keeping
              your access credentials secure. Do not share access or misuse the
              service to generate harmful or prohibited content.
            </p>
            <p className="mt-4 text-slate-400">
              We reserve the right to suspend accounts that violate these terms
              or that misuse the platform’s AI tools.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
