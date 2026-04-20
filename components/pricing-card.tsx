type PricingCardProps = {
  plan: string;
  price: string;
  description: string;
  features: string[];
  highlight: boolean;
};

export function PricingCard({
  plan,
  price,
  description,
  features,
  highlight,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-[2rem] border p-6 shadow-xl transition ${
        highlight
          ? "border-purple-500/20 bg-purple-500/10 shadow-purple-500/10"
          : "border-slate-800/90 bg-slate-950/90"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
            {plan} plan
          </p>
          <p className="mt-3 text-4xl font-semibold text-white">{price}</p>
        </div>
        {highlight && (
          <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-purple-200">
            Most popular
          </span>
        )}
      </div>
      <p className="mt-6 text-slate-400">{description}</p>
      <ul className="mt-6 space-y-3 text-slate-300">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={`mt-8 w-full rounded-full py-3 text-sm font-semibold transition ${
          highlight
            ? "bg-purple-500 text-white hover:bg-purple-400"
            : "border border-slate-700 bg-slate-900 text-slate-100 hover:border-slate-600 hover:bg-slate-800"
        }`}
      >
        {highlight ? "Join Pro" : "Start Free"}
      </button>
    </div>
  );
}
