import type { BadgeProps } from "@/types";

export const Badge: React.FC<BadgeProps> = ({ text }) => (
  <span className="bg-white/20 px-2 py-1 mr-2 text-xs rounded-sm">{text}</span>
);
