import { useState } from "react";
import { ChevronDown, ChevronUp, Star, Calendar } from "lucide-react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const hotlists = ["Top Talent", "Senior Developers", "Product Leaders", "Design Team"];
const stages = ["New", "Screening", "Interview", "Offer", "Hired"];

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

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="hotlist" className="text-sm font-medium text-foreground flex items-center gap-2">
                <Star className="w-4 h-4 text-muted-foreground" />
                Hotlist
              </Label>
              <Select>
                <SelectTrigger id="hotlist" className="bg-background">
                  <SelectValue placeholder="Select hotlist" />
                </SelectTrigger>
                <SelectContent className="bg-card">
                  {hotlists.map((list) => (
                    <SelectItem key={list} value={list}>
                      {list}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="stage" className="text-sm font-medium text-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                Stage
              </Label>
              <Select>
                <SelectTrigger id="stage" className="bg-background">
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent className="bg-card">
                  {stages.map((stage) => (
                    <SelectItem key={stage} value={stage}>
                      {stage}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
