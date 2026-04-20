type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div>
      <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
        {title}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {subtitle}
      </h2>
    </div>
  );
}
