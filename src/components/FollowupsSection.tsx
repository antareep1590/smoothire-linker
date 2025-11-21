import { useState } from "react";
import { Users, Send } from "lucide-react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useToast } from "@/hooks/use-toast";

const followupTemplates = [
  "Send Resume Review",
  "Schedule HR Screening",
  "Request Feedback",
  "Technical Interview Prep",
  "Final Round Discussion",
];

const teamMembers = [
  "Sarah Johnson (HR Manager)",
  "Michael Chen (Tech Lead)",
  "Emily Rodriguez (Recruiter)",
  "David Kim (Hiring Manager)",
  "Lisa Anderson (VP Engineering)",
];

export const FollowupsSection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const { toast } = useToast();

  const handleAssign = () => {
    if (!selectedTemplate || !selectedEmployee) {
      toast({
        title: "Missing Information",
        description: "Please select both a follow-up template and an employee.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Follow-up Assigned",
      description: `${selectedTemplate} has been assigned to ${selectedEmployee}.`,
    });

    setSelectedTemplate("");
    setSelectedEmployee("");
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6 space-y-4">
      <div>
        <Label className="text-sm font-medium text-foreground">
          Follow-ups
        </Label>
        <p className="text-xs text-muted-foreground mt-1">
          Assign follow-up tasks to team members
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="template" className="text-sm font-medium text-foreground">
            Follow-up Template
          </Label>
          <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
            <SelectTrigger id="template" className="bg-background">
              <SelectValue placeholder="Select a template" />
            </SelectTrigger>
            <SelectContent className="bg-card">
              {followupTemplates.map((template) => (
                <SelectItem key={template} value={template}>
                  {template}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="employee" className="text-sm font-medium text-foreground flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            Assign Employee
          </Label>
          <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
            <SelectTrigger id="employee" className="bg-background">
              <SelectValue placeholder="Select team member" />
            </SelectTrigger>
            <SelectContent className="bg-card">
              {teamMembers.map((member) => (
                <SelectItem key={member} value={member}>
                  {member}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={handleAssign}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          disabled={!selectedTemplate || !selectedEmployee}
        >
          <Send className="w-4 h-4 mr-2" />
          Assign Follow-up
        </Button>
      </div>
    </div>
  );
};
