import type { ExperienceCardProps } from "@/types";
import { Badge } from "../badge/badge";



export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  location,
  role,
  duration,
  responsibilities,
}) => (
  <div className="border border-white/20 p-2 rounded-lg mt-4">
    <div className="flex items-start justify-between">
      <div className="w-3/4">
        <div className="font-semibold text-xl tracking-wide flex items-center gap-2">
          {company}
          <Badge text={location} />
        </div>
        <p className="text-xs">{role}</p>
        <ul className="text-sm mt-5 text-white/40 text-justify space-y-2">
          {responsibilities.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xs text-white/50">{duration}</p>
      </div>
    </div>
  </div>
);
