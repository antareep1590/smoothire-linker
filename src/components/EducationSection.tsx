import { GraduationCap, Calendar } from "lucide-react";
import { Label } from "./ui/label";

interface EducationEntry {
  institution: string;
  degree: string;
  endDate: string;
  isLatest?: boolean;
}

interface EducationSectionProps {
  entries: EducationEntry[];
}

export const EducationSection = ({ entries }: EducationSectionProps) => {
  const latestEntry = entries.find(e => e.isLatest) || entries[0];

  return (
    <div className="bg-card rounded-xl border border-border p-6 space-y-4">
      <div>
        <Label className="text-sm font-medium text-foreground">
          Education
        </Label>
        <p className="text-xs text-muted-foreground mt-1">
          Academic qualifications from LinkedIn
        </p>
      </div>

      <div className="space-y-4">
        {entries.map((entry, index) => (
          <div 
            key={index} 
            className={`space-y-3 ${entry.isLatest ? 'p-3 bg-secondary/30 rounded-lg border border-border' : ''}`}
          >
            <div className="flex items-start gap-3">
              <GraduationCap className="w-4 h-4 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{entry.degree}</p>
                <p className="text-xs text-muted-foreground">{entry.institution}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">
                  {entry.isLatest ? 'Latest Education End Date' : 'End Date'}
                </p>
                <p className="text-sm font-medium text-foreground">{entry.endDate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
