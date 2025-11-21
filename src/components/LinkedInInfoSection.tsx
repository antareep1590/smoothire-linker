import { Sparkles } from "lucide-react";
import { Label } from "./ui/label";
import { NewJobSection } from "./NewJobSection";
import { PreviousJobSection } from "./PreviousJobSection";
import { EducationSection } from "./EducationSection";

interface LinkedInInfoSectionProps {
  newJobData: {
    companyName: string;
    dateOfJoining?: string;
    location?: string;
    jobTitle: string;
  };
  previousJobData?: {
    companyName: string;
    endDate: string;
    location?: string;
    jobTitle?: string;
  };
  educationEntries: Array<{
    institution: string;
    degree: string;
    endDate: string;
    isLatest?: boolean;
  }>;
}

export const LinkedInInfoSection = ({ 
  newJobData, 
  previousJobData, 
  educationEntries 
}: LinkedInInfoSectionProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 space-y-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <Label className="text-sm font-medium text-foreground">
            New Information from LinkedIn
          </Label>
          <p className="text-xs text-muted-foreground mt-1">
            Latest data extracted from LinkedIn profile
          </p>
        </div>
        <span className="ai-badge shrink-0">
          <Sparkles className="w-3 h-3" />
          AI
        </span>
      </div>

      <div className="space-y-4">
        <div className="bg-background/50 rounded-lg p-4">
          <NewJobSection data={newJobData} />
        </div>

        {previousJobData && (
          <div className="bg-background/50 rounded-lg p-4">
            <PreviousJobSection data={previousJobData} />
          </div>
        )}

        <div className="bg-background/50 rounded-lg p-4">
          <EducationSection entries={educationEntries} />
        </div>
      </div>
    </div>
  );
};
