import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExtensionPanel } from "@/components/ExtensionPanel";
import { ProfileCard } from "@/components/ProfileCard";
import { JobFunctionField } from "@/components/JobFunctionField";
import { SkillsSection } from "@/components/SkillsSection";
import { DuplicateDetection } from "@/components/DuplicateDetection";
import { MergeChecklist } from "@/components/MergeChecklist";
import { NotesSection } from "@/components/NotesSection";
import { ActionButtons } from "@/components/ActionButtons";
import { PreviousApplications } from "@/components/PreviousApplications";
import { Sparkles, Building2, Briefcase, Mail, GraduationCap } from "lucide-react";

const mockProfileData = {
  name: "John Doe",
  role: "Senior Software Engineer",
  company: "Tech Corp Inc.",
  location: "San Francisco, CA",
  email: "john.doe@example.com",
  linkedinUrl: "https://linkedin.com/in/johndoe",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  existsInSystem: true,
};

const mockApplications = [
  {
    id: "1",
    company: "TechStart Inc.",
    role: "Senior Full Stack Developer",
    lastUpdate: "2 days ago",
    status: "Interviewing" as const,
  },
  {
    id: "2",
    company: "Innovation Labs",
    role: "Lead Software Engineer",
    lastUpdate: "1 week ago",
    status: "Applied" as const,
  },
  {
    id: "3",
    company: "Digital Solutions Co.",
    role: "Software Architect",
    lastUpdate: "2 weeks ago",
    status: "Rejected" as const,
  },
];

const Index = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [mergeItems, setMergeItems] = useState([
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
  ]);

  const handleToggleMergeItem = (id: string) => {
    setMergeItems(items =>
      items.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="text-center space-y-6 max-w-2xl">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-foreground rounded-xl mb-4">
          <span className="text-background font-bold text-2xl">S</span>
        </div>
        
        <h1 className="text-4xl font-bold text-foreground">
          Smoothire LinkedIn Enrichment
        </h1>
        
        <p className="text-lg text-muted-foreground">
          Chrome extension prototype for intelligent candidate profile enrichment
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button 
            onClick={() => setIsPanelOpen(true)}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Open Extension Panel
          </Button>
        </div>

        <div className="pt-8 space-y-2">
          <p className="text-sm text-muted-foreground">Features:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "AI Job Function Mapping",
              "Smart Skills Detection",
              "Duplicate Detection",
              "Controlled Data Merge",
              "Hotlist Management",
            ].map((feature) => (
              <span 
                key={feature}
                className="chip text-xs"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ExtensionPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)}>
        <ProfileCard data={mockProfileData} />
        
        <DuplicateDetection 
          hasDuplicate={mockProfileData.existsInSystem}
          onViewProfile={() => console.log("View profile")}
        />
        
        <JobFunctionField 
          aiSuggestion="Software Engineering"
        />
        
        <SkillsSection />
        
        <MergeChecklist items={mergeItems} onToggle={handleToggleMergeItem} />
        
        <PreviousApplications applications={mockApplications} />
        
        <NotesSection />
        
        <ActionButtons
          isExistingCandidate={mockProfileData.existsInSystem}
        />
      </ExtensionPanel>
    </div>
  );
};

export default Index;
