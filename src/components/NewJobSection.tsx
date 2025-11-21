import { Building2, MapPin, Briefcase, Calendar } from "lucide-react";
import { Label } from "./ui/label";

interface NewJobData {
  companyName: string;
  dateOfJoining?: string;
  location?: string;
  jobTitle: string;
}

interface NewJobSectionProps {
  data: NewJobData;
}

export const NewJobSection = ({ data }: NewJobSectionProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label className="text-sm font-medium text-foreground">
          New Job
        </Label>
        <p className="text-xs text-muted-foreground mt-1">
          Latest position information
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <Building2 className="w-4 h-4 text-muted-foreground mt-0.5" />
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Company Name</p>
            <p className="text-sm font-medium text-foreground">{data.companyName}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Briefcase className="w-4 h-4 text-muted-foreground mt-0.5" />
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Job Title</p>
            <p className="text-sm font-medium text-foreground">{data.jobTitle}</p>
          </div>
        </div>

        {data.dateOfJoining && (
          <div className="flex items-start gap-3">
            <Calendar className="w-4 h-4 text-muted-foreground mt-0.5" />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Date of Joining</p>
              <p className="text-sm font-medium text-foreground">{data.dateOfJoining}</p>
            </div>
          </div>
        )}

        {data.location && (
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm font-medium text-foreground">{data.location}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
