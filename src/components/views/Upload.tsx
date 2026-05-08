import { useState, useEffect } from 'react';
import { ViewType } from '../../App';
import { CloudUpload, Figma, Upload as UploadIcon, Image as ImageIcon, Loader2, CheckCircle2, XCircle, Clock } from 'lucide-react';

const checksData = [
  { name: 'Brand palette only', cat: 'Color', result: 'fail' },
  { name: 'Text contrast ≥ 4.5:1', cat: 'Color', result: 'pass' },
  { name: 'Font whitelist', cat: 'Text', result: 'pass' },
  { name: 'No placeholder text', cat: 'Text', result: 'fail' },
  { name: '8px grid', cat: 'Layout', result: 'pass' },
  { name: 'Tap targets ≥ 44x44px', cat: 'Layout', result: 'pass' },
  { name: 'Use design system', cat: 'Components', result: 'pass' },
  { name: 'Logo safe area', cat: 'Image', result: 'pass' },
  { name: 'No blurry assets', cat: 'Image', result: 'pass' },
  { name: 'Alt text starting img/', cat: 'A11y', result: 'pass' },
  { name: 'Mandatory footer', cat: 'Brand', result: 'pass' },
];

export function Upload({ onNavigate }: { onNavigate: (v: ViewType) => void }) {
  const [isDragging, setIsDragging] = useState(false);
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'done'>('idle');
  const [progress, setProgress] = useState(0);
  const [currentCheck, setCurrentCheck] = useState(0);

  useEffect(() => {
    if (scanState === 'scanning') {
      if (currentCheck < checksData.length) {
        const timer = setTimeout(() => {
          setCurrentCheck(c => c + 1);
          setProgress(Math.round(((currentCheck + 1) / checksData.length) * 100));
        }, 220);
        return () => clearTimeout(timer);
      } else {
        setScanState('done');
      }
    }
  }, [scanState, currentCheck]);

  const handleStartScan = () => {
    setScanState('scanning');
    setProgress(0);
    setCurrentCheck(0);
  };

  return (
    <div className="p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto mt-10">
      
      {scanState === 'idle' ? (
        <div 
          className={`border border-dashed rounded-3xl p-16 text-center cursor-pointer transition-all ${
            isDragging ? 'border-slate-900 bg-slate-50' : 'border-slate-200 bg-slate-50 hover:border-slate-400'
          }`}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => { e.preventDefault(); setIsDragging(false); handleStartScan(); }}
          onClick={handleStartScan}
        >
          <div className="w-20 h-20 bg-white border border-slate-100 text-slate-900 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            <CloudUpload className="w-8 h-8" />
          </div>
          <h3 className="text-3xl font-light text-slate-900 mb-2">Upload Asset</h3>
          <p className="text-sm text-slate-500 font-light mb-10 max-w-sm mx-auto">Drag and drop your file here, or click to browse. Supports PNG, JPG, PDF, SVG.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-black text-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
              onClick={(e) => { e.stopPropagation(); handleStartScan(); }}
            >
              <UploadIcon className="w-4 h-4" /> Browse file
            </button>
            <button 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-900 text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-slate-50 transition-colors"
              onClick={(e) => { e.stopPropagation(); handleStartScan(); }}
            >
              <Figma className="w-4 h-4" /> Figma link
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          {/* File Header */}
          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-slate-900">Health-Banner-Q2-Final.png</div>
              <div className="text-xs text-slate-500 mt-1">2.4 MB · 1200 × 628px · Banner</div>
            </div>
            <div>
              {scanState === 'scanning' ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-[10px] uppercase tracking-widest font-bold">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" /> Scanning…
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-full text-[10px] uppercase tracking-widest font-bold">
                  <XCircle className="w-3.5 h-3.5" /> Failed
                </span>
              )}
            </div>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-xs font-medium mb-2">
              <span className={scanState === 'done' ? 'text-slate-900 font-bold uppercase tracking-widest' : 'text-slate-900 font-medium'}>
                {scanState === 'done' ? 'Scan complete — 2 violations found' : `Checking: ${checksData[currentCheck]?.name || ''}…`}
              </span>
              <span className="text-slate-600">{progress}%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-300 ${scanState === 'done' ? 'bg-slate-900' : 'bg-slate-900'}`} 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Checklist */}
          <div className="space-y-1">
            {checksData.map((check, idx) => {
              const status = idx < currentCheck ? check.result : (idx === currentCheck && scanState === 'scanning' ? 'running' : 'pending');
              return (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      {status === 'pass' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                      {status === 'fail' && <XCircle className="w-4 h-4 text-red-500" />}
                      {status === 'running' && <Loader2 className="w-4 h-4 text-slate-900 animate-spin" />}
                      {status === 'pending' && <Clock className="w-4 h-4 text-slate-300" />}
                    </div>
                    <span className={`text-[13px] ${status === 'pending' ? 'text-slate-400' : 'text-slate-700 font-medium'}`}>{check.name}</span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{check.cat}</span>
                </div>
              );
            })}
          </div>

          {scanState === 'done' && (
            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
              <button 
                onClick={() => onNavigate('report')}
                className="px-8 py-3 bg-black text-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
              >
                View full report →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
