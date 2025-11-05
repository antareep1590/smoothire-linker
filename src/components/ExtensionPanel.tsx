import { X } from "lucide-react";
import { Button } from "./ui/button";

interface ExtensionPanelProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const ExtensionPanel = ({ isOpen, onClose, children }: ExtensionPanelProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/20 z-40 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-background z-50 shadow-2xl slide-in-right overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border z-10 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Smoothire</h2>
              <p className="text-xs text-muted-foreground">LinkedIn Enrichment</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-6 space-y-4">
          {children}
        </div>
      </div>
    </>
  );
};
