export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-12">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Privacy Policy
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">
          Privacy first, designed for creators.
        </h1>
        <p className="mt-6 max-w-3xl text-slate-400">
          This policy explains how ScriptForge AI collects, uses, and protects
          your data while providing secure access to short-form script
          generation services.
        </p>

        <section className="mt-12 space-y-8 text-slate-300">
          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Information we collect
            </h2>
            <p className="mt-4 text-slate-400">
              We collect only what is required to deliver the service and
              support your account. This includes your email address for launch
              notifications, usage metadata to improve script results, and
              support correspondence if you contact our team.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-400">
              <li>Email address for account access and updates.</li>
              <li>
                Service usage data such as script request volume and platform
                preferences.
              </li>
              <li>
                Device and browser information to improve performance and
                compatibility.
              </li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8">
            <h2 className="text-2xl font-semibold text-white">
              How we use data
            </h2>
            <p className="mt-4 text-slate-400">
              Your information is used to operate ScriptForge AI, send launch
              communications, and refine our AI models for better script output.
              We do not sell your email or personal data to third parties.
            </p>
            <p className="mt-4 text-slate-400">
              We may use anonymized usage signals to improve trend detection and
              script structure across the platform.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8">
            <h2 className="text-2xl font-semibold text-white">Data security</h2>
            <p className="mt-4 text-slate-400">
              All data transmitted through the site is encrypted over HTTPS. We
              implement secure access controls and encryption best practices to
              protect your email and script activity.
            </p>
            <p className="mt-4 text-slate-400">
              We retain only necessary data for launch access, product updates,
              and support. You can request deletion of your account data through
              support@scriptforge.ai.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Third-party service providers
            </h2>
            <p className="mt-4 text-slate-400">
              We use trusted third-party providers for email delivery,
              analytics, and payments. These providers process data on our
              behalf under strict confidentiality agreements.
            </p>
            <p className="mt-4 text-slate-400">
              We may share limited data with payment processors to complete
              billing when you upgrade to a paid plan.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
