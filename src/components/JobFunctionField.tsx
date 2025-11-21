import { useState } from "react";
import { Sparkles, ChevronDown, AlertTriangle } from "lucide-react";
import { Label } from "./ui/label";
import { Alert, AlertDescription } from "./ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const jobFunctions = [
  "Software Engineering",
  "Product Management",
  "Sales & Business Development",
  "Marketing",
  "Design",
  "Data Science",
  "Human Resources",
  "Operations",
  "Finance",
  "Customer Success",
];

interface JobFunctionFieldProps {
  aiSuggestion?: string;
  value?: string;
  onChange?: (value: string) => void;
  expectedFunction?: string;
}

export const JobFunctionField = ({ 
  aiSuggestion = "Software Engineering", 
  value,
  onChange,
  expectedFunction
}: JobFunctionFieldProps) => {
  const [selectedFunction, setSelectedFunction] = useState(value || aiSuggestion);

  const handleChange = (newValue: string) => {
    setSelectedFunction(newValue);
    onChange?.(newValue);
  };

  const hasMismatch = expectedFunction && selectedFunction !== expectedFunction;

  return (
    <div className="bg-card rounded-xl border border-border p-6 space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <Label htmlFor="job-function" className="text-sm font-medium text-foreground">
            Job Function
          </Label>
          <p className="text-xs text-muted-foreground mt-1">
            Auto-populated by AI from LinkedIn profile
          </p>
        </div>
        <span className="ai-badge shrink-0">
          <Sparkles className="w-3 h-3" />
          AI
        </span>
      </div>

      <Select value={selectedFunction} onValueChange={handleChange}>
        <SelectTrigger id="job-function" className="w-full bg-background">
          <SelectValue placeholder="Select job function" />
        </SelectTrigger>
        <SelectContent className="bg-card">
          {jobFunctions.map((func) => (
            <SelectItem key={func} value={func}>
              {func}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {aiSuggestion && aiSuggestion !== selectedFunction && (
        <p className="text-xs text-muted-foreground">
          AI suggested: <span className="text-accent">{aiSuggestion}</span>
        </p>
      )}

      {hasMismatch && (
        <Alert variant="destructive" className="bg-destructive/10 border-destructive/50">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="text-sm">
            Warning: Job Function does not match with our system. Expected: <strong>{expectedFunction}</strong>. Please review.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};
