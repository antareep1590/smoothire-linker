import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Building2, Mail, GraduationCap, Briefcase } from "lucide-react";

interface MergeItem {
  id: string;
  label: string;
  value: string;
  icon: React.ElementType;
  checked: boolean;
}

interface MergeChecklistProps {
  items?: MergeItem[];
  onToggle?: (id: string) => void;
}

const defaultItems: MergeItem[] = [
  {
    id: "company",
    label: "Current Company",
    value: "Tech Corp Inc.",
    icon: Building2,
    checked: true,
  },
  {
    id: "title",
    label: "Job Title",
    value: "Senior Software Engineer",
    icon: Briefcase,
    checked: true,
  },
  {
    id: "email",
    label: "Email Address",
    value: "john.doe@example.com",
    icon: Mail,
    checked: true,
  },
  {
    id: "education",
    label: "Education",
    value: "MSc Computer Science, Stanford",
    icon: GraduationCap,
    checked: true,
  },
];

export const MergeChecklist = ({ 
  items = defaultItems,
  onToggle 
}: MergeChecklistProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 space-y-4">
      <div>
        <h3 className="text-sm font-medium text-foreground mb-1">
          New Information from LinkedIn
        </h3>
        <p className="text-xs text-muted-foreground">
          No info will be overwritten—only new items are appended
        </p>
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div 
              key={item.id}
              className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <Checkbox 
                id={item.id}
                checked={item.checked}
                onCheckedChange={() => onToggle?.(item.id)}
                className="mt-1"
              />
              <div className="flex-1 min-w-0">
                <Label 
                  htmlFor={item.id}
                  className="flex items-center gap-2 text-sm font-medium text-foreground cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-muted-foreground shrink-0" />
                  {item.label}
                </Label>
                <p className="text-xs text-muted-foreground mt-1 break-words">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
