import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export const NotesSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [notes, setNotes] = useState("");

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 flex items-center justify-between hover:bg-secondary/50 transition-colors"
      >
        <h3 className="text-sm font-medium text-foreground">
          Additional Information
        </h3>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        )}
      </button>

      {expanded && (
        <div className="px-6 pb-6 space-y-4 border-t border-border pt-4">
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-sm font-medium text-foreground">
              Notes
            </Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any relevant notes about this candidate..."
              className="min-h-[100px] bg-background resize-none"
            />
          </div>
        </div>
      )}
    </div>
  );
};
