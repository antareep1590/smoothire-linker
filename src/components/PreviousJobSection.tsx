import { Building2, MapPin, Briefcase, Calendar } from "lucide-react";
import { Label } from "./ui/label";

interface PreviousJobData {
  companyName: string;
  endDate: string;
  location?: string;
  jobTitle?: string;
}

interface PreviousJobSectionProps {
  data?: PreviousJobData;
}

export const PreviousJobSection = ({ data }: PreviousJobSectionProps) => {
  if (!data) return null;

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-sm font-medium text-foreground">
          Previous Company End Date
        </Label>
        <p className="text-xs text-muted-foreground mt-1">
          Most recent previous position
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <Building2 className="w-4 h-4 text-muted-foreground mt-0.5" />
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Previous Company</p>
            <p className="text-sm font-medium text-foreground">{data.companyName}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Calendar className="w-4 h-4 text-muted-foreground mt-0.5" />
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">End Date</p>
            <p className="text-sm font-medium text-foreground">{data.endDate}</p>
          </div>
        </div>

        {data.jobTitle && (
          <div className="flex items-start gap-3">
            <Briefcase className="w-4 h-4 text-muted-foreground mt-0.5" />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Previous Job Title</p>
              <p className="text-sm font-medium text-foreground">{data.jobTitle}</p>
            </div>
          </div>
        )}

        {data.location ? (
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm font-medium text-foreground">{data.location}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm font-medium text-foreground">-</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
