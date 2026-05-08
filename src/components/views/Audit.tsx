import { useState } from 'react';
import { ViewType } from '../../App';

type FilterType = 'all' | 'approved' | 'rejected' | 'override' | 'failed';

const auditEvents = [
  { id: 1, type: 'approved', action: 'Term-Plan-Emailer-v2.html approved', meta: 'Checker: Sandeep R. · Maker: Dev T. · "Clean file, all IRDAI rules met"', time: 'Yesterday 4:12 PM', color: 'bg-emerald-500' },
  { id: 2, type: 'approved', action: 'ULIP-Return-Banner-Web.png approved', meta: 'Checker: Sandeep R. · Maker: Priya S. · No comment', time: 'Yesterday 2:05 PM', color: 'bg-emerald-500' },
  { id: 3, type: 'failed', action: 'Health-Banner-Q2-Final.png auto-scan failed', meta: 'Rules failed: LG-01, IR-03 · Sent back to Priya S.', time: 'Today 10:22 AM', color: 'bg-red-500' },
  { id: 4, type: 'override', action: 'Override requested — L1 Grid rule', meta: 'Maker: Asha K. · Reason: "Shadow is approved brand exception, confirmed by Brand team 12-Apr"', time: 'Today 9:45 AM', color: 'bg-amber-500' },
  { id: 5, type: 'rejected', action: 'Motor-Discount-Summer.png rejected by checker', meta: 'Checker: Sandeep R. · "Star rating not sourced. Remove or add citation."', time: 'Today 8:30 AM', color: 'bg-red-500' },
  { id: 6, type: 'approved', action: 'Health-TopUp-Banner-v4.png approved', meta: 'Checker: Rekha D. · Maker: Rahul M. · "Good. Disclaimer clear and prominent."', time: '2 days ago', color: 'bg-emerald-500' },
];

export function Audit({ onNavigate }: { onNavigate: (v: ViewType) => void }) {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredEvents = filter === 'all' ? auditEvents : auditEvents.filter(e => e.type === filter);

  return (
    <div className="p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
      
      <div className="flex flex-wrap gap-2 mb-10">
        <button onClick={() => setFilter('all')} className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors border ${filter === 'all' ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200' : 'bg-white text-slate-500 border-slate-200 hover:text-slate-900 hover:bg-slate-50'}`}>All events</button>
        <button onClick={() => setFilter('approved')} className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors border ${filter === 'approved' ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200' : 'bg-white text-slate-500 border-slate-200 hover:text-slate-900 hover:bg-slate-50'}`}>Approved</button>
        <button onClick={() => setFilter('rejected')} className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors border ${filter === 'rejected' ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200' : 'bg-white text-slate-500 border-slate-200 hover:text-slate-900 hover:bg-slate-50'}`}>Rejected</button>
        <button onClick={() => setFilter('override')} className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors border ${filter === 'override' ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200' : 'bg-white text-slate-500 border-slate-200 hover:text-slate-900 hover:bg-slate-50'}`}>Overrides</button>
        <button onClick={() => setFilter('failed')} className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors border ${filter === 'failed' ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200' : 'bg-white text-slate-500 border-slate-200 hover:text-slate-900 hover:bg-slate-50'}`}>Failed</button>
      </div>

      {/* Log */}
      <div className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden">
        <div className="divide-y divide-slate-100">
          {filteredEvents.map(event => (
            <div key={event.id} className="p-6 flex flex-col md:flex-row md:items-start gap-5 hover:bg-white transition-colors group">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-900">{event.type}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400">{event.time}</span>
                </div>
                <div className="text-xl font-light text-slate-900 mb-1">{event.action}</div>
                <div className="text-[13px] font-light text-slate-500">{event.meta}</div>
              </div>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity px-5 py-2 bg-white border border-slate-200 text-slate-900 text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-slate-50 shadow-sm mt-3 md:mt-0">
                Details
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center text-[12px] text-slate-500">
        Showing {filteredEvents.length} of 248 events · <button className="text-blue-600 hover:text-blue-700 font-semibold hover:underline">Export full log (CSV)</button>
      </div>
    </div>
  );
}
