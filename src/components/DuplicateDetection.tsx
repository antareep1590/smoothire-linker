import { AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Alert, AlertDescription } from "./ui/alert";

interface DuplicateDetectionProps {
  hasDuplicate?: boolean;
  onViewProfile?: () => void;
}

export const DuplicateDetection = ({ 
  hasDuplicate = false,
  onViewProfile 
}: DuplicateDetectionProps) => {
  if (!hasDuplicate) return null;

  return (
    <Alert className="bg-muted border-border">
      <AlertCircle className="h-4 w-4 text-muted-foreground" />
      <AlertDescription className="flex items-center justify-between gap-4">
        <span className="text-sm text-foreground">
          Possible duplicate found in Smoothire database
        </span>
        <Button 
          variant="outline" 
          size="sm"
          onClick={onViewProfile}
          className="shrink-0"
        >
          View Profile
        </Button>
      </AlertDescription>
    </Alert>
  );
};
