export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-12">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Refund Policy
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">
          Hassle-free refunds for your peace of mind.
        </h1>
        <p className="mt-6 max-w-3xl text-slate-400">
          We want you to be completely satisfied with OrderSync. If you're not,
          here's how our refund process works.
        </p>

        <section className="mt-12 space-y-8 text-slate-300">
          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Refund Eligibility
            </h2>
            <p className="mt-4 text-slate-400">
              You can request a full refund within 30 days of your purchase if
              you're not satisfied with OrderSync. Refunds are available for
              unused credits and subscription cancellations.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-400">
              <li>Full refund within 30 days of purchase.</li>
              <li>Partial refunds for unused subscription time.</li>
              <li>No refunds for consumed credits or services.</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8">
            <h2 className="text-2xl font-semibold text-white">
              How to Request a Refund
            </h2>
            <p className="mt-4 text-slate-400">
              To request a refund, contact our support team with your order
              details. We'll process your request within 5-7 business days.
            </p>
            <p className="mt-4 text-slate-400">
              Email us at support@ordersync.com with:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-400">
              <li>Your order number</li>
              <li>Reason for the refund request</li>
              <li>Any relevant details about your experience</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Refund Processing
            </h2>
            <p className="mt-4 text-slate-400">
              Once approved, refunds will be processed to your original payment
              method. Processing times vary by payment provider but typically
              take 3-5 business days to appear in your account.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8">
            <h2 className="text-2xl font-semibold text-white">Exceptions</h2>
            <p className="mt-4 text-slate-400">
              Refunds are not available for:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-400">
              <li>Services already delivered and consumed</li>
              <li>Digital downloads after access has been granted</li>
              <li>Refunds requested after 30 days</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
