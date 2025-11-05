import { Building2, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface Application {
  id: string;
  company: string;
  companyLogo?: string;
  role: string;
  lastUpdate: string;
  status: "Applied" | "Interviewing" | "Hired" | "Rejected" | "Withdrawn";
}

interface PreviousApplicationsProps {
  applications?: Application[];
  showAll?: boolean;
  onSeeAll?: () => void;
}

const getStatusVariant = (status: Application["status"]) => {
  switch (status) {
    case "Hired":
      return "default";
    case "Interviewing":
      return "secondary";
    case "Applied":
      return "outline";
    case "Rejected":
    case "Withdrawn":
      return "destructive";
    default:
      return "outline";
  }
};

export const PreviousApplications = ({ 
  applications = [],
  showAll = false,
  onSeeAll 
}: PreviousApplicationsProps) => {
  const displayedApps = showAll ? applications : applications.slice(0, 5);
  const hasMore = applications.length > 5;

  if (applications.length === 0) {
    return null;
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-foreground">
          Previous Applications via Smoothire
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          This candidate has applied to {applications.length} {applications.length === 1 ? 'position' : 'positions'} through your portal
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {displayedApps.map((app) => (
          <div
            key={app.id}
            className="flex items-start gap-4 p-4 rounded-lg border border-border bg-background hover:bg-muted/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
              {app.companyLogo ? (
                <img 
                  src={app.companyLogo} 
                  alt={app.company}
                  className="w-10 h-10 rounded-lg object-cover"
                />
              ) : (
                <Building2 className="w-5 h-5 text-muted-foreground" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <div className="flex-1">
                  <h4 className="font-medium text-foreground text-sm leading-tight">
                    {app.role}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {app.company}
                  </p>
                </div>
                <Badge 
                  variant={getStatusVariant(app.status)}
                  className="flex-shrink-0"
                >
                  {app.status}
                </Badge>
              </div>
              
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Last updated {app.lastUpdate}</span>
              </div>
            </div>
          </div>
        ))}
        
        {hasMore && !showAll && (
          <Button
            variant="outline"
            size="sm"
            onClick={onSeeAll}
            className="w-full mt-2"
          >
            See All {applications.length} Applications
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
