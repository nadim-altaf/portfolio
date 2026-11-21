import { GithubIcon, LinkedinIcon, KaggleIcon, TwitterIcon } from "./icons";
import { siteConfig } from "@/data/site";

export function Footer() {
  const { footer } = siteConfig;

  const validSocials = footer.socials.filter(
    (item) => Boolean(item.url && item.url !== "#")
  );

  return (
    <footer className="border-t border-[var(--border-color)] py-10 px-6 flex flex-col items-center justify-center gap-4 text-center relative z-10">
      {validSocials.length > 0 && (
        <div className="flex gap-3">
          {validSocials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--surface2)] border border-[var(--border-color)] text-[var(--muted)] hover:text-[#00d4ff] hover:border-[#00d4ff] hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
              aria-label={`${social.name} Profile`}
            >
              {social.name === "GitHub" && <GithubIcon className="w-4 h-4" />}
              {social.name === "LinkedIn" && <LinkedinIcon className="w-4 h-4" />}
              {social.name === "Kaggle" && <KaggleIcon className="w-4 h-4" />}
              {social.name === "Twitter" && <TwitterIcon className="w-4 h-4" />}
            </a>
          ))}
        </div>
      )}

      <div className="text-xs text-[var(--muted)]">{footer.copy}</div>
    </footer>
  );
}
