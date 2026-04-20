import { Button } from "../components/ui/button";
import { EmailCaptureForm } from "../components/email-capture-form";
import { FeatureCard } from "../components/feature-card";
import { PricingCard } from "../components/pricing-card";
import { SectionHeading } from "../components/section-heading";

const features = [
  {
    title: "AI Hook Generator",
    description:
      "Craft opening lines that stop the scroll with a single prompt. Example: “The one productivity trick top creators won’t tell you.”",
    badge: "Hook example",
    value: "“Stop doing this if you want 10x more views.”",
  },
  {
    title: "Trend-Based Script Engine",
    description:
      "Automatically align your script with current TikTok and Reels formats so your content feels native and timely.",
    badge: "Powered by",
    value: "real-time trend patterns",
  },
  {
    title: "Platform Optimization",
    description:
      "Receive output formatted for TikTok, Instagram Reels, or YouTube Shorts with the right pacing, CTA, and hook.",
    badge: "Format",
    value: "Short, punchy, platform-ready",
  },
  {
    title: "Script Variations",
    description:
      "Generate multiple versions of your idea to test voice, angle, and energy across fast-moving feeds.",
    badge: "Each idea returns",
    value: "3 optimized variations",
  },
];

const demoOutput = [
  {
    label: "Hook",
    text: "“Why your productivity routine is sabotaging you — and the 30-second fix.”",
  },
  {
    label: "Body",
    text: "“Most creators waste hours chasing the wrong workflow. Start with one simple checklist: plan your day, batch your tasks, and stop checking your phone every 20 minutes.”",
  },
  {
    label: "CTA",
    text: "“Save this script, post it today, and watch how much more energy your audience gets.”",
  },
];

const useCases = [
  "Short-form creators who need consistent viral ideas.",
  "Media agencies delivering faster social campaigns.",
  "Personal brands scaling authority with less effort.",
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-x-0 top-0 h-96 bg-hero-glow opacity-70 blur-3xl" />
      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-6 py-10 sm:px-8 lg:px-12">
        <header className="flex flex-col gap-8 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="inline-flex items-center rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm text-slate-300 shadow-sm backdrop-blur">
              Launching soon — early access waiting list
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Generate Viral Short-Form Scripts in 10 Seconds
            </h1>
            <p className="mt-6 max-w-2xl leading-8 text-slate-300 sm:text-lg">
              ScriptForge AI helps creators, agencies, and personal brands
              produce ready-to-post TikTok, Instagram Reels, and YouTube Shorts
              scripts with optimized hooks, pacing, and CTAs.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="primary">Join Early Access</Button>
              <Button variant="secondary">View Demo</Button>
            </div>
          </div>
          <div className="relative w-full max-w-xl rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow backdrop-blur-xl sm:p-8">
            <div className="mb-6 flex items-center justify-between rounded-3xl bg-slate-950/90 p-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Script preview
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Smart script generated for “Productivity tips”
                </p>
              </div>
              <span className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-400">
                Shorts
              </span>
            </div>
            <div className="space-y-4 rounded-[1.5rem] border border-slate-800/90 bg-slate-950 p-5 text-sm text-slate-300">
              <p className="font-semibold text-white">Hook</p>
              <p>“Stop doing this if you want 10x more views.”</p>
              <p className="font-semibold text-white">Body</p>
              <p>
                “Most creators chase content without a system. Start with one
                clear idea, then build a fast script around a hook, value, and
                action.”
              </p>
              <p className="font-semibold text-white">CTA</p>
              <p>“Use this script today and post by tonight.”</p>
            </div>
          </div>
        </header>

        <section className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Trusted by early creators
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">
                Used by 1,200+ creators (early access)
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["CreateCo", "SparkLab", "ReelRise", "PulseMedia"].map(
                (name) => (
                  <div
                    key={name}
                    className="rounded-3xl border border-slate-800/90 bg-slate-950/80 px-4 py-3 text-center text-sm text-slate-300"
                  >
                    {name}
                  </div>
                ),
              )}
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-slate-400">
            A credible, creator-first workflow built for fast production and
            predictable social growth. Secure payments, encrypted data, and AI
            support for launch-ready short-form scripts.
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-[repeat(2,minmax(0,1fr))]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl backdrop-blur-xl">
            <SectionHeading
              title="Features built for creators who publish daily"
              subtitle="Highly specific tools to move from idea to viral script without the guesswork."
            />
            <div className="mt-8 grid gap-4">
              {features.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl backdrop-blur-xl">
            <SectionHeading
              title="Live demo"
              subtitle="Watch the AI workflow in a polished SaaS preview."
            />
            <div className="mt-8 space-y-6 rounded-[1.75rem] border border-slate-800/90 bg-slate-950/80 p-6">
              <div className="flex items-center justify-between rounded-3xl bg-slate-900/90 px-4 py-3 text-slate-400">
                <span className="font-medium text-slate-200">Input</span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                  Text idea
                </span>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-5 text-sm text-slate-300">
                <p className="text-slate-100">How to stay productive</p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-800/90 bg-slate-950/90 p-5">
                <div className="mb-4 flex items-center justify-between text-slate-400">
                  <span className="font-medium text-slate-200">
                    Generated script
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em]">
                    Ready to copy
                  </span>
                </div>
                <div className="space-y-4">
                  {demoOutput.map((part) => (
                    <div key={part.label}>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        {part.label}
                      </p>
                      <p className="mt-2 text-slate-100">{part.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl backdrop-blur-xl">
            <SectionHeading
              title="How it works"
              subtitle="A few swift steps to publish your next viral short."
            />
            <ol className="mt-8 space-y-5 text-slate-300">
              <li className="rounded-3xl border border-slate-800/90 bg-slate-950/80 p-5">
                <p className="font-semibold text-white">1. Enter your idea</p>
                <p className="mt-2 text-slate-400">
                  Describe a topic, angle, or product and choose the platform
                  format.
                </p>
              </li>
              <li className="rounded-3xl border border-slate-800/90 bg-slate-950/80 p-5">
                <p className="font-semibold text-white">
                  2. AI generates multiple scripts
                </p>
                <p className="mt-2 text-slate-400">
                  Get optimized hooks, body copy, and CTAs in seconds with
                  variation options.
                </p>
              </li>
              <li className="rounded-3xl border border-slate-800/90 bg-slate-950/80 p-5">
                <p className="font-semibold text-white">
                  3. Copy, post, and grow
                </p>
                <p className="mt-2 text-slate-400">
                  Use the best version instantly, publish to your feed, and
                  refine your strategy with faster output.
                </p>
              </li>
            </ol>
          </div>

          <div className="lg:col-span-2 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl backdrop-blur-xl">
            <SectionHeading
              title="Pricing that fits launch creators"
              subtitle="Transparent plans for testing and scaling your video strategy."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <PricingCard
                plan="Free"
                price="$0"
                description="Limited generations for early access creators."
                features={[
                  "5 script generations per week",
                  "Basic hook presets",
                  "Community support",
                ]}
                highlight={false}
              />
              <PricingCard
                plan="Pro"
                price="$9/mo"
                description="Unlimited scripts, advanced hooks, and priority processing."
                features={[
                  "Unlimited script generations",
                  "Advanced hook generator",
                  "Priority AI processing",
                  "Platform-specific formatting",
                ]}
                highlight={true}
              />
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl backdrop-blur-xl">
          <SectionHeading
            title="Use cases"
            subtitle="Real creator workflows built for your launch."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {useCases.map((caseText) => (
              <div
                key={caseText}
                className="rounded-[1.75rem] border border-slate-800/90 bg-slate-950/80 p-6 text-slate-300"
              >
                <p className="font-semibold text-white">{caseText}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionHeading
                title="Start growing with AI-powered scripts"
                subtitle="Join the waiting list and get notified when ScriptForge AI launches."
              />
            </div>
            <div className="rounded-[1.75rem] border border-slate-800/90 bg-slate-950/90 p-6">
              <EmailCaptureForm />
              <p className="mt-4 text-sm text-slate-400">
                No credit card required. We only use your email to send launch
                access and product updates.
              </p>
            </div>
          </div>
        </section>

        <footer className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl backdrop-blur-xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center">
            <div>
              <p className="text-lg font-semibold text-white">ScriptForge AI</p>
              <p className="mt-2 max-w-xl text-slate-400">
                A premium script generation platform for short-form video
                creators seeking predictable content momentum.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <a href="/privacy-policy" className="transition hover:text-white">
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="transition hover:text-white"
              >
                Terms of Service
              </a>
              <a
                href="mailto:support@scriptforge.ai"
                className="transition hover:text-white"
              >
                support@scriptforge.ai
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-800/90 pt-6 text-sm text-slate-500">
            <p>
              Secure payments powered by trusted providers. Your data is
              encrypted and protected with modern cloud encryption standards.
            </p>
            <p className="mt-3">
              © {new Date().getFullYear()} ScriptForge AI. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
