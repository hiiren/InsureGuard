import { 
  ShieldCheck, 
  LayoutDashboard, 
  ListChecks, 
  Upload as UploadIcon, 
  FileText, 
  UserCheck, 
  History,
  CircleDot
} from 'lucide-react';
import { ViewType } from '../App';

interface SidebarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

export function Sidebar({ currentView, onNavigate }: SidebarProps) {
  const NavItem = ({ id, icon: Icon, label }: { id: ViewType, icon: any, label: string }) => {
    const isActive = currentView === id;
    
    return (
      <button
        onClick={() => onNavigate(id)}
        className={`w-full flex items-center gap-3 px-4 py-2.5 my-1 rounded-full text-[13px] font-medium transition-all ${
          isActive 
            ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' 
            : 'text-slate-500 hover:bg-slate-50 hover:text-black'
        }`}
      >
        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
        {label}
      </button>
    );
  };

  return (
    <aside className="w-64 flex-shrink-0 bg-white flex flex-col h-full border-r border-slate-50">
      <div className="p-6 border-b border-slate-50">
        <div className="flex items-center gap-2 text-slate-900">
          <div className="w-6 h-6 rounded-md bg-black"></div>
          <span className="font-bold text-lg tracking-tight pt-0.5">DESIGNGUARD</span>
        </div>
        <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-2">
          QA Studio
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-1">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-4 pt-4 pb-2">
          Workspace
        </div>
        <NavItem id="dashboard" icon={LayoutDashboard} label="Dashboard" />
        <NavItem id="checklist" icon={ListChecks} label="Checklist Builder" />
        <NavItem id="upload" icon={UploadIcon} label="Upload & Scan" />
        <NavItem id="report" icon={FileText} label="Scan Report" />

        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-4 pt-6 pb-2">
          Review
        </div>
        <NavItem id="approval" icon={UserCheck} label="Checker Queue" />
        <NavItem id="audit" icon={History} label="Audit Log" />
      </div>

      <div className="p-6 border-t border-slate-50 bg-white mt-auto">
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-900 uppercase tracking-widest">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Engine active
        </div>
        <div className="text-[11px] text-slate-400 mt-2 font-light">
          IRDAI v2.4 rules loaded
        </div>
      </div>
    </aside>
  );
}
