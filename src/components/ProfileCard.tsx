import { Building2, ExternalLink, MapPin, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

interface ProfileData {
  name: string;
  role: string;
  company: string;
  location: string;
  email?: string;
  linkedinUrl: string;
  avatarUrl?: string;
  existsInSystem?: boolean;
}

interface ProfileCardProps {
  data: ProfileData;
}

export const ProfileCard = ({ data }: ProfileCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 space-y-4">
      <div className="flex items-start gap-4">
        <Avatar className="w-16 h-16 border-2 border-border">
          <AvatarImage src={data.avatarUrl} alt={data.name} />
          <AvatarFallback className="bg-secondary text-lg font-semibold">
            {data.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-lg text-foreground">{data.name}</h3>
            {data.existsInSystem && (
              <Badge className="bg-success-light text-success border-0 shrink-0">
                Already exists
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-1">{data.role}</p>
        </div>
      </div>

      <div className="space-y-2 pt-2 border-t border-border">
        <div className="flex items-center gap-2 text-sm">
          <Building2 className="w-4 h-4 text-muted-foreground" />
          <span className="text-foreground">{data.company}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span className="text-foreground">{data.location}</span>
        </div>
        
        {data.email && (
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground">{data.email}</span>
          </div>
        )}
        
        <a 
          href={data.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-accent hover:underline w-fit"
        >
          <ExternalLink className="w-4 h-4" />
          <span>View LinkedIn Profile</span>
        </a>
      </div>
    </div>
  );
};
