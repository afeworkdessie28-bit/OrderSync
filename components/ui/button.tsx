type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200";
  const variantStyles =
    variant === "primary"
      ? "bg-purple-500 text-white shadow-lg shadow-purple-500/20 hover:bg-purple-400"
      : "border border-slate-700 bg-slate-900/90 text-slate-100 hover:border-slate-600 hover:bg-slate-800";

  return (
    <button
      type="button"
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    />
  );
}
