export default function SectionHeader({ eyebrow, title }) {
  return (
    <div className="text-center mb-16">
      <p className="text-sm font-medium uppercase tracking-[0.15em] text-primary mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-dark leading-tight">
        {title}
      </h2>
    </div>
  );
}
