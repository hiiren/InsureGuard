import { Clock } from 'lucide-react';
import { ViewType } from '../App';

interface TopbarProps {
  currentView: ViewType;
}

const titles: Record<ViewType, string> = {
  dashboard: 'Dashboard',
  checklist: 'Checklist Builder',
  upload: 'Upload & Scan',
  report: 'Scan Report',
  approval: 'Checker Queue',
  audit: 'Audit Log'
};

export function Topbar({ currentView }: TopbarProps) {
  return (
    <header className="h-20 flex-shrink-0 flex items-center justify-between px-8 border-b border-slate-50 bg-white sticky top-0 z-20">
      <h1 className="text-xl font-light text-slate-900 tracking-tight">
        {titles[currentView]}
      </h1>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-600 text-[10px] uppercase tracking-[0.1em] font-bold rounded-md">
          <Clock className="w-3.5 h-3.5" />
          3 pending review
        </div>
        <div className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[10px] uppercase tracking-[0.1em] font-bold rounded-md">
          Q2 Campaign
        </div>
        
        <div className="h-6 w-px bg-slate-100 mx-2"></div>
        
        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-slate-200">
          SP
        </div>
      </div>
    </header>
  );
}
