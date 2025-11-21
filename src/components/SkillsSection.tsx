import { useState } from "react";
import { X, Plus, Sparkles, Trash2 } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

interface SkillsSectionProps {
  aiSuggestedSkills?: string[];
  onChange?: (skills: string[]) => void;
}

export const SkillsSection = ({ 
  aiSuggestedSkills = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "AWS",
    "System Design",
  ],
  onChange
}: SkillsSectionProps) => {
  const [skills, setSkills] = useState<string[]>(aiSuggestedSkills);
  const [newSkill, setNewSkill] = useState("");

  const removeSkill = (skillToRemove: string) => {
    const updated = skills.filter(skill => skill !== skillToRemove);
    setSkills(updated);
    onChange?.(updated);
  };

  const clearAllSkills = () => {
    setSkills([]);
    onChange?.([]);
  };

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      const updated = [...skills, newSkill.trim()];
      setSkills(updated);
      onChange?.(updated);
      setNewSkill("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6 space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <Label className="text-sm font-medium text-foreground">
            Relevant Skills
          </Label>
          <p className="text-xs text-muted-foreground mt-1">
            Skills mapped by AI from your org settings; edit as needed
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="ai-badge shrink-0">
            <Sparkles className="w-3 h-3" />
            AI
          </span>
          {skills.length > 0 && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                  <Trash2 className="w-3 h-3 mr-1" />
                  Clear All
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-card">
                <AlertDialogHeader>
                  <AlertDialogTitle>Clear all skills?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will remove all selected skills for this candidate. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={clearAllSkills} className="bg-destructive hover:bg-destructive/90">
                    Clear All
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </div>

      {skills.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="chip group">
              {skill}
              <button
                onClick={() => removeSkill(skill)}
                className="opacity-60 hover:opacity-100 transition-opacity"
                aria-label={`Remove ${skill}`}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      ) : (
        <div className="text-sm text-muted-foreground py-4 text-center">
          No skills selected
        </div>
      )}

      <div className="flex gap-2">
        <Input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a skill..."
          className="flex-1 bg-background"
        />
        <Button 
          onClick={addSkill}
          size="icon"
          variant="outline"
          disabled={!newSkill.trim()}
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
