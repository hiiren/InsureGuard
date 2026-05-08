import { ViewType } from '../../App';
import { ArrowRight } from 'lucide-react';

export function Dashboard({ onNavigate }: { onNavigate: (v: ViewType) => void }) {
  return (
    <div className="p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
          <div className="text-4xl font-light text-slate-900 mb-1">24</div>
          <div className="text-[10px] uppercase tracking-widest text-slate-400">Assets scanned</div>
          <div className="text-[11px] text-slate-500 mt-4 flex items-center gap-1">
            <span className="text-slate-900 font-medium">↑ 6</span> vs yesterday
          </div>
        </div>
        
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
          <div className="text-4xl font-light text-slate-900 mb-1">79%</div>
          <div className="text-[10px] uppercase tracking-widest text-slate-400">Compliance rate</div>
          <div className="text-[11px] text-slate-500 mt-4">
            Target: <span className="font-medium text-slate-700">95%</span>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
          <div className="text-4xl font-light text-slate-900 mb-1">18s</div>
          <div className="text-[10px] uppercase tracking-widest text-slate-400">Avg scan time</div>
          <div className="text-[11px] text-slate-500 mt-4">
            SLA: &lt;30s <span className="text-slate-900 ml-0.5">✓</span>
          </div>
        </div>

        <div className="bg-slate-900 text-white border-none rounded-3xl p-8">
          <div className="text-4xl font-light mb-1">03</div>
          <div className="text-[10px] uppercase tracking-widest text-slate-400">Awaiting checker</div>
          <div className="text-[11px] text-slate-400 mt-4">
            Oldest: 2h ago
          </div>
        </div>
      </div>

      {/* Top Violations */}
      <div className="mb-12">
        <h2 className="text-xl font-light text-slate-900 tracking-tight mb-6">Top violations this week</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 relative overflow-hidden group">
            <div className="text-sm font-medium text-slate-900 mb-1">Missing disclaimer footer</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400">8 assets · Legal LG-01</div>
            <div className="absolute top-0 right-0 w-1.5 h-full bg-slate-900"></div>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl p-6 relative overflow-hidden group">
            <div className="text-sm font-medium text-slate-900 mb-1">Off-brand color used</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400">5 assets · Brand BR-02</div>
            <div className="absolute top-0 right-0 w-1.5 h-full bg-slate-900"></div>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl p-6 relative overflow-hidden group">
            <div className="text-sm font-medium text-slate-900 mb-1">Return % not qualified</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400">4 assets · IRDAI IR-03</div>
            <div className="absolute top-0 right-0 w-1.5 h-full bg-slate-900"></div>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl p-6 relative overflow-hidden group">
            <div className="text-sm font-medium text-slate-900 mb-1">Font size &lt;8pt in fine print</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400">3 assets · A11y A-01</div>
            <div className="absolute top-0 right-0 w-1.5 h-full bg-slate-900"></div>
          </div>
        </div>
      </div>

      {/* Recent Assets */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-light text-slate-900 tracking-tight">Recent assets</h2>
          <button 
            onClick={() => onNavigate('upload')}
            className="px-6 py-2.5 bg-black text-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-lg shadow-slate-200"
          >
            Upload new <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-100 bg-white">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="border-b border-slate-100 text-[10px] uppercase tracking-widest text-slate-400">
              <tr>
                <th className="px-4 py-3">Asset name</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Maker</th>
                <th className="px-4 py-3">Checks</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-[13px] text-slate-700">
              <tr 
                onClick={() => onNavigate('report')} 
                className="hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <td className="px-4 py-3 font-medium text-slate-900">Health-Banner-Q2-Final.png</td>
                <td className="px-4 py-3"><span className="inline-flex px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-700">Banner</span></td>
                <td className="px-4 py-3 text-slate-500">Priya S.</td>
                <td className="px-4 py-3">11/13 pass</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1.5 text-red-600 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Failed
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-slate-400">10 min ago</td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 font-medium text-slate-900">Motor-TnC-Footer-v3.svg</td>
                <td className="px-4 py-3"><span className="inline-flex px-3 py-1 rounded-md text-[10px] uppercase tracking-widest font-bold bg-slate-100 text-slate-600">Legal copy</span></td>
                <td className="px-4 py-3 text-slate-500">Rahul M.</td>
                <td className="px-4 py-3">13/13 pass</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1.5 text-amber-600 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> In review
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-slate-400">1h ago</td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 font-medium text-slate-900">Life-Ad-Hindi-1080x1080.jpg</td>
                <td className="px-4 py-3"><span className="inline-flex px-3 py-1 rounded-md text-[10px] uppercase tracking-widest font-bold bg-slate-100 text-slate-600">Social</span></td>
                <td className="px-4 py-3 text-slate-500">Asha K.</td>
                <td className="px-4 py-3">13/13 pass</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1.5 text-amber-600 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> In review
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-slate-400">2h ago</td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 font-medium text-slate-900">Term-Plan-Emailer-v2.html</td>
                <td className="px-4 py-3"><span className="inline-flex px-3 py-1 rounded-md text-[10px] uppercase tracking-widest font-bold bg-slate-100 text-slate-600">Email</span></td>
                <td className="px-4 py-3 text-slate-500">Dev T.</td>
                <td className="px-4 py-3">13/13 pass</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Approved
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-slate-400">Yesterday</td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 font-medium text-slate-900">ULIP-Return-Banner-Web.png</td>
                <td className="px-4 py-3"><span className="inline-flex px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-700">Banner</span></td>
                <td className="px-4 py-3 text-slate-500">Priya S.</td>
                <td className="px-4 py-3">13/13 pass</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Approved
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-slate-400">Yesterday</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
