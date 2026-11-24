import type { LucideProps } from "lucide-react";
import {
  GraduationCap,
  Zap,
  MapPin,
  Wrench,
  Code,
  Settings,
  BarChart3,
  Brain,
  Scroll,
  Award,
} from "lucide-react";

export type IconName =
  | "graduation-cap"
  | "zap"
  | "map-pin"
  | "wrench"
  | "code"
  | "settings"
  | "bar-chart"
  | "brain"
  | "scroll"
  | "award";

const iconMap = {
  "graduation-cap": GraduationCap,
  zap: Zap,
  "map-pin": MapPin,
  wrench: Wrench,
  code: Code,
  settings: Settings,
  "bar-chart": BarChart3,
  brain: Brain,
  scroll: Scroll,
  award: Award,
} as const;

interface AppIconProps extends LucideProps {
  name: IconName;
}

export function AppIcon({ name, ...props }: AppIconProps) {
  const Component = iconMap[name];
  if (!Component) return null;
  return <Component {...props} />;
}
