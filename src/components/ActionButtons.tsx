import { useState } from "react";
import { Check, UserPlus } from "lucide-react";
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
} from "./ui/alert-dialog";
import { toast } from "sonner";

interface ActionButtonsProps {
  isExistingCandidate?: boolean;
  onSync?: () => void;
  onSaveNew?: () => void;
}

export const ActionButtons = ({ 
  isExistingCandidate = true,
  onSync,
  onSaveNew 
}: ActionButtonsProps) => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleConfirm = () => {
    setShowConfirmDialog(false);
    if (isExistingCandidate) {
      onSync?.();
    } else {
      onSaveNew?.();
    }
    
    toast.success(
      isExistingCandidate 
        ? "Candidate profile enriched successfully!" 
        : "New candidate added to Smoothire!",
      {
        description: "All selected information has been synced.",
        action: {
          label: "View Profile",
          onClick: () => console.log("Navigate to profile"),
        },
      }
    );
  };

  return (
    <>
      <div className="sticky bottom-0 bg-card border-t border-border p-6 -mx-6 -mb-6 space-y-3">
        <Button 
          onClick={() => setShowConfirmDialog(true)}
          className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
          size="lg"
        >
          <Check className="w-5 h-5 mr-2" />
          {isExistingCandidate ? "Enrich & Sync Candidate" : "Save as New Candidate"}
        </Button>

        {isExistingCandidate && (
          <Button 
            variant="outline"
            className="w-full"
            onClick={() => onSaveNew?.()}
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Save as New Candidate Instead
          </Button>
        )}
      </div>

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent className="bg-card">
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Sync</AlertDialogTitle>
            <AlertDialogDescription>
              {isExistingCandidate 
                ? "Are you sure you want to append the selected information to this candidate's profile? No existing data will be overwritten."
                : "Are you sure you want to add this candidate to Smoothire with the selected information?"}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleConfirm}
              className="bg-accent hover:bg-accent/90"
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
