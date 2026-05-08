import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { Dashboard } from './components/views/Dashboard';
import { Checklist } from './components/views/Checklist';
import { Upload } from './components/views/Upload';
import { Report } from './components/views/Report';
import { Approval } from './components/views/Approval';
import { Audit } from './components/views/Audit';

export type ViewType = 'dashboard' | 'checklist' | 'upload' | 'report' | 'approval' | 'audit';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard onNavigate={setCurrentView} />;
      case 'checklist': return <Checklist onNavigate={setCurrentView} />;
      case 'upload': return <Upload onNavigate={setCurrentView} />;
      case 'report': return <Report onNavigate={setCurrentView} />;
      case 'approval': return <Approval onNavigate={setCurrentView} />;
      case 'audit': return <Audit onNavigate={setCurrentView} />;
      default: return <Dashboard onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-white text-slate-900 font-sans overflow-hidden">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="flex-1 flex flex-col h-screen min-w-0 bg-white border-l border-slate-50 z-10">
        <Topbar currentView={currentView} />
        
        <div className="flex-1 overflow-y-auto w-full max-w-7xl mx-auto">
          {renderView()}
        </div>
      </main>
    </div>
  );
}
