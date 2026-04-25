type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "default" | "inverse";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "default",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const inverse = variant === "inverse";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p
          className={`mb-4 text-xs font-semibold uppercase tracking-[0.24em] ${
            inverse ? "text-white/60" : "text-[color:#9f412c]"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-balance text-3xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-[2.85rem] lg:leading-[1.02] ${
          inverse ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-pretty text-base leading-7 sm:text-lg ${
            inverse ? "text-white/72" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
