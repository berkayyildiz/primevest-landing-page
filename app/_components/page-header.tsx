// Shared dark header for the inner pages: left-aligned, an eyebrow label,
// a serif title and the dual-rule signature underneath.
export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-ink pt-36 pb-16 sm:pt-40 sm:pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {eyebrow && <p className="eyebrow eyebrow-light mb-5">{eyebrow}</p>}
        <h1 className="font-display text-4xl sm:text-5xl text-paper leading-[1.1] max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/60 mt-6 max-w-2xl text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="dual-rule dual-rule-light mt-10" aria-hidden="true" />
      </div>
    </section>
  );
}
