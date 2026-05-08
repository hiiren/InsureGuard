import { ViewType } from '../../App';
import { Download, Reply, FileBadge, Percent, Figma, Check } from 'lucide-react';

export function Report({ onNavigate }: { onNavigate: (v: ViewType) => void }) {
  return (
    <div className="p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-10">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-900 font-light text-4xl shrink-0">
            9<span className="text-xl text-slate-300">/11</span>
          </div>
          <div>
            <div className="text-2xl font-light text-slate-900">Checkout-Screen.png</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-2 flex items-center gap-3">
              <span>2 violations found</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>Scanned in 12s</span>
            </div>
            <div className="flex gap-3 mt-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-white border border-slate-200 text-slate-900 uppercase tracking-widest flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span> 2 Failed</span>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-white border border-slate-200 text-slate-400 uppercase tracking-widest">9 Passed</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 mt-6 md:mt-0">
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-900 text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-slate-50 transition-colors">
            <Download className="w-4 h-4" /> Export PDF
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-black text-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
            <Reply className="w-4 h-4" /> Send back
          </button>
        </div>
      </div>

      {/* Violations */}
      <div className="mb-12">
        <h2 className="text-xl font-light text-slate-900 tracking-tight mb-6">Violations</h2>

        <div className="grid gap-6">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 relative overflow-hidden group">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center mt-1 shrink-0 border border-slate-100">
                <FileBadge className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-900 border px-2 py-1 rounded bg-slate-50">C1</span>
                </div>
                <h3 className="text-lg font-light text-slate-900 mb-2">Color Violation</h3>
                <p className="text-[13px] text-slate-500 font-light leading-relaxed max-w-2xl">
                  Wrong hex code #000 found on button. Button fill must be one of the brand colors: [#FF5722, #212121, #FFFFFF].
                </p>
                <div className="flex gap-4 mt-6">
                  <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-900 text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-slate-50 transition-colors">
                    <Figma className="w-4 h-4" /> View in Figma
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-400 text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-slate-50 transition-colors">
                    Request override
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1.5 h-full bg-slate-900"></div>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 relative overflow-hidden group">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center mt-1 shrink-0 border border-slate-100">
                <FileBadge className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                   <span className="text-[10px] uppercase tracking-widest font-bold text-slate-900 border px-2 py-1 rounded bg-slate-50">T2</span>
                </div>
                <h3 className="text-lg font-light text-slate-900 mb-2">Lorem ipsum found</h3>
                <p className="text-[13px] text-slate-500 font-light leading-relaxed max-w-2xl">
                  Placeholder text detected in the header section. Remove "Lorem ipsum" and replace with actual copy before dev handoff.
                </p>
                <div className="flex gap-4 mt-6">
                  <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-900 text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-slate-50 transition-colors">
                    <Figma className="w-4 h-4" /> View in Figma
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-400 text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-slate-50 transition-colors">
                    Request override
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1.5 h-full bg-slate-900"></div>
          </div>
        </div>
      </div>

      {/* Passed Checks */}
      <div>
        <h2 className="text-xl font-light text-slate-900 tracking-tight mb-6">Passed Checks</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            'Text contrast ≥ 4.5:1', 'Font whitelist', '8px grid', 
            'Tap targets ≥ 44x44px', 'Use design system', 'Logo safe area', 
            'No blurry assets', 'Alt text starting img/', 'Mandatory footer'
          ].map((check, i) => (
            <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl">
              <div className="w-6 h-6 rounded-full bg-white border border-slate-200 text-slate-900 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="text-[13px] font-light text-slate-600">{check}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
