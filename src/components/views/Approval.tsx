import { ViewType } from '../../App';
import { ImageIcon, Check, X, Eye, Figma } from 'lucide-react';

export function Approval({ onNavigate }: { onNavigate: (v: ViewType) => void }) {
  return (
    <div className="p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      
      <p className="text-sm text-slate-500 mb-8 border-b border-slate-200 pb-4">
        Assets that passed auto-scan and need human review before going live.
      </p>

      <div className="space-y-6">
        
        {/* Item 1 */}
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 transition-shadow">
          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-900 shrink-0 shadow-sm">
              <ImageIcon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="text-2xl font-light text-slate-900 leading-tight">Motor-TnC-Footer-v3.svg</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-2 flex items-center gap-2">
                <span className="font-bold text-slate-600">Rahul M.</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                Legal copy 
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                11/11 passed
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                1h ago
              </div>
              <div className="flex gap-3 mt-4">
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-md text-[10px] font-bold uppercase tracking-widest text-slate-600">Passed</span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-md text-[10px] font-bold uppercase tracking-widest text-slate-400">Legal</span>
              </div>
            </div>
          </div>
          
          <textarea 
            className="w-full h-20 p-4 bg-white border border-slate-200 rounded-2xl text-[13px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all resize-none mb-6" 
            placeholder="Review notes..."
          ></textarea>
          
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-black text-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
              <Check className="w-4 h-4" /> Approve
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-[10px] uppercase tracking-widest font-bold rounded-full transition-colors">
              <X className="w-4 h-4" /> Reject
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 text-[10px] uppercase tracking-widest font-bold rounded-full transition-colors ml-auto">
              <Figma className="w-4 h-4" /> View file
            </button>
          </div>
        </div>

        {/* Item 2 */}
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 transition-shadow">
          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-900 shrink-0 shadow-sm">
              <ImageIcon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="text-2xl font-light text-slate-900 leading-tight">Life-Ad-Hindi-1080x1080.jpg</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-2 flex items-center gap-2">
                <span className="font-bold text-slate-600">Asha K.</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                Social banner
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                11/11 passed
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                2h ago
              </div>
              <div className="flex gap-3 mt-4">
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-md text-[10px] font-bold uppercase tracking-widest text-slate-600">Passed</span>
                <span className="px-3 py-1 bg-white border border-slate-900 rounded-md text-[10px] font-bold uppercase tracking-widest text-slate-900">Manual verify required</span>
              </div>
            </div>
          </div>
          
          <textarea 
            className="w-full h-20 p-4 bg-white border border-slate-200 rounded-2xl text-[13px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all resize-none mb-6" 
            placeholder="Review notes..."
          ></textarea>
          
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-black text-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
              <Check className="w-4 h-4" /> Approve
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-[10px] uppercase tracking-widest font-bold rounded-full transition-colors">
              <X className="w-4 h-4" /> Reject
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 text-[10px] uppercase tracking-widest font-bold rounded-full transition-colors ml-auto">
              <Eye className="w-4 h-4" /> Preview
            </button>
          </div>
        </div>

        {/* Item 3 (Blocked) */}
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 opacity-60">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 shrink-0">
              <ImageIcon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="text-2xl font-light text-slate-500 leading-tight">Checkout-Screen.png</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-2 flex items-center gap-2">
                <span className="font-bold">Priya S.</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                App Screen
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                2 violations
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                Awaiting fix
              </div>
              <div className="mt-4">
                <span className="px-3 py-1 bg-white border border-slate-300 rounded-md text-[10px] font-bold uppercase tracking-widest text-slate-500">Blocked — Fix first</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
