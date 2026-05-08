import { useState } from 'react';
import { ViewType } from '../../App';
import { Palette, Type, FileBadge, Image as ImageIcon, Shield, Plus, LayoutGrid, Component, Accessibility } from 'lucide-react';

type Category = 'all' | 'color' | 'text' | 'layout' | 'components' | 'image' | 'a11y' | 'brand';

const rulesData = [
  { id: 'C1', cat: 'color', icon: Palette, title: 'Brand palette only', desc: 'All fills/strokes ∈ [#FF5722, #212121, #FFFFFF]', active: true },
  { id: 'C2', cat: 'color', icon: Palette, title: 'Text contrast', desc: 'Contrast ratio ≥ 4.5:1 on background', active: true },
  { id: 'T1', cat: 'text', icon: Type, title: 'Font whitelist', desc: 'All text layers use "Inter" only', active: true },
  { id: 'T2', cat: 'text', icon: Type, title: 'No placeholder text', desc: 'Detect "Lorem ipsum", "TBD", "xxx"', active: true },
  { id: 'L1', cat: 'layout', icon: LayoutGrid, title: '8px grid', desc: 'All x, y, width, height % 8 == 0', active: true },
  { id: 'L2', cat: 'layout', icon: LayoutGrid, title: 'Tap targets', desc: 'Buttons ≥ 44x44px', active: true },
  { id: 'CO1', cat: 'components', icon: Component, title: 'Use design system', desc: 'No detached instances for Button, Input', active: true },
  { id: 'I1', cat: 'image', icon: ImageIcon, title: 'Logo safe area', desc: 'Logo bbox has ≥16px padding to frame edge', active: true },
  { id: 'I2', cat: 'image', icon: ImageIcon, title: 'No blurry assets', desc: 'Image fill scale = 100%, resolution ≥ 2x', active: true },
  { id: 'A1', cat: 'a11y', icon: Accessibility, title: 'Alt text', desc: 'All images have layer name starting img/', active: true },
  { id: 'B1', cat: 'brand', icon: Shield, title: 'Mandatory footer', desc: 'Layer named Footer-Required exists', active: true },
];

export function Checklist({ onNavigate }: { onNavigate: (v: ViewType) => void }) {
  const [activeCat, setActiveCat] = useState<Category>('all');
  const [rules, setRules] = useState(rulesData);

  const toggleRule = (id: string) => {
    setRules(rules.map(r => r.id === id ? { ...r, active: !r.active } : r));
  };

  const filteredRules = activeCat === 'all' ? rules : rules.filter(r => r.cat === activeCat);
  const activeCount = rules.filter(r => r.active).length;
  const disabledCount = rules.length - activeCount;

  return (
    <div className="p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
      
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button onClick={() => setActiveCat('all')} className={`px-5 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border ${activeCat === 'all' ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200' : 'bg-white text-slate-500 border-slate-200 hover:text-black hover:bg-slate-50'}`}>All rules</button>
        <button onClick={() => setActiveCat('color')} className={`px-5 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border flex items-center gap-2 ${activeCat === 'color' ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200' : 'bg-white text-slate-500 border-slate-200 hover:text-black hover:bg-slate-50'}`}><Palette className="w-3.5 h-3.5" /> Color</button>
        <button onClick={() => setActiveCat('text')} className={`px-5 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border flex items-center gap-2 ${activeCat === 'text' ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200' : 'bg-white text-slate-500 border-slate-200 hover:text-black hover:bg-slate-50'}`}><Type className="w-3.5 h-3.5" /> Text</button>
        <button onClick={() => setActiveCat('layout')} className={`px-5 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border flex items-center gap-2 ${activeCat === 'layout' ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200' : 'bg-white text-slate-500 border-slate-200 hover:text-black hover:bg-slate-50'}`}><LayoutGrid className="w-3.5 h-3.5" /> Layout</button>
        <button onClick={() => setActiveCat('components')} className={`px-5 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border flex items-center gap-2 ${activeCat === 'components' ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200' : 'bg-white text-slate-500 border-slate-200 hover:text-black hover:bg-slate-50'}`}><Component className="w-3.5 h-3.5" /> Components</button>
        <button onClick={() => setActiveCat('image')} className={`px-5 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border flex items-center gap-2 ${activeCat === 'image' ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200' : 'bg-white text-slate-500 border-slate-200 hover:text-black hover:bg-slate-50'}`}><ImageIcon className="w-3.5 h-3.5" /> Image</button>
        <button onClick={() => setActiveCat('a11y')} className={`px-5 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border flex items-center gap-2 ${activeCat === 'a11y' ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200' : 'bg-white text-slate-500 border-slate-200 hover:text-black hover:bg-slate-50'}`}><Accessibility className="w-3.5 h-3.5" /> A11y</button>
        <button onClick={() => setActiveCat('brand')} className={`px-5 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border flex items-center gap-2 ${activeCat === 'brand' ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200' : 'bg-white text-slate-500 border-slate-200 hover:text-black hover:bg-slate-50'}`}><Shield className="w-3.5 h-3.5" /> Brand</button>
      </div>

      {/* Rules List */}
      <div className="flex flex-col gap-3">
        {filteredRules.map(rule => (
          <div key={rule.id} className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-200 transition-colors group">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-slate-50 text-slate-600 border border-slate-100`}>
              <rule.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 pt-0.5">
              <div className="text-[13px] font-semibold text-slate-900">{rule.title}</div>
              <div className="text-xs text-slate-500 mt-1">{rule.desc}</div>
            </div>
            <div className="pt-2">
              <button 
                onClick={() => toggleRule(rule.id)}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 ${rule.active ? 'bg-slate-900' : 'bg-slate-200'}`}
              >
                <span className={`pointer-events-none inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${rule.active ? 'translate-x-1.5' : '-translate-x-1.5'}`} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 flex items-center justify-center gap-2 p-4 border border-dashed border-slate-200 rounded-3xl text-xs uppercase tracking-widest font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-colors">
        <Plus className="w-4 h-4" /> Add custom rule
      </button>

      <div className="mt-8 flex items-center justify-between pt-6 border-t border-slate-50">
        <div className="text-[10px] text-slate-400 uppercase tracking-widest">
          {activeCount} active · {disabledCount} disabled
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-3 text-[10px] uppercase tracking-widest font-bold text-slate-900 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors">
            Export JSON
          </button>
          <button 
            onClick={() => onNavigate('upload')}
            className="px-8 py-3 text-[10px] uppercase tracking-widest font-bold text-white bg-black rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
          >
            Run scan →
          </button>
        </div>
      </div>

    </div>
  );
}
