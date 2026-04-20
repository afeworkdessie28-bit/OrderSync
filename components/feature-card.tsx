type Feature = {
  title: string;
  description: string;
  badge: string;
  value: string;
};

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="rounded-[1.75rem] border border-slate-800/90 bg-slate-950/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-700">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
          {feature.badge}
        </p>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">
          {feature.value}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
      <p className="mt-3 text-slate-400">{feature.description}</p>
    </div>
  );
}
