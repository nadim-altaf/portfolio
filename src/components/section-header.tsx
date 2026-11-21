interface SectionHeaderProps {
  label: string;
  title: string | React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`${centered ? "text-center" : ""} ${className}`}
    >
      <div
        className={`inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[#00d4ff] mb-4 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="w-6 h-[2px] bg-[#00d4ff] rounded-xs" />
        {label}
      </div>

      <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.1] text-foreground">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-muted text-sm leading-[1.7] mt-3 ${
            centered ? "max-w-[480px] mx-auto" : "max-w-[540px]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
