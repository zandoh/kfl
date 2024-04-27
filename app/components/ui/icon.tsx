import { icons } from "lucide-react";

export type IconName = keyof typeof icons;

export const Icon = ({
  name,
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
}: {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}) => {
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      absoluteStrokeWidth={absoluteStrokeWidth}
    />
  );
};
