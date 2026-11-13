import React from 'react';
import { Sparkles, Quote, CheckCircle2 } from 'lucide-react';
import { FOUNDERS_DATA } from '../data/seedData';

export default function FoundersTribute({ lang }) {
  const getPhotoUrl = (path) => {
    if (!path) return '';
    const cleanPath = path.replace(/^\.?\//, '');
    const base = import.meta.env.BASE_URL || './';
    return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
  };

  return (
    <section className="bg-gradient-to-b from-dsvv-blue-900 via-dsvv-blue-950 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-y-2 border-dsvv-gold-500/50">
      {/* Decorative subtle background aura */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-dsvv-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-dsvv-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dsvv-gold-500/20 text-dsvv-gold-300 text-xs font-semibold mb-3 border border-dsvv-gold-500/30">
            <Sparkles size={13} className="text-dsvv-gold-400" />
            <span>{lang === 'en' ? 'Our Eternal Inspiration & Foundation' : 'युगऋषि एवं वंदनीया माताजी की पावन प्रेरणा'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
            {lang === 'en' ? FOUNDERS_DATA.title : 'संस्थापक एवं मार्गदर्शक'}
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed font-light">
            {FOUNDERS_DATA.subtitle}
          </p>
        </div>

        {/* Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FOUNDERS_DATA.founders.map((founder, idx) => (
            <div 
              key={idx}
              className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/70 hover:border-dsvv-gold-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-dsvv-gold-500/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-4">
                  <div className="relative shrink-0">
                    <img 
                      src={getPhotoUrl(founder.photo)} 
                      alt={founder.name} 
                      onError={(e) => {
                        const filename = founder.photo.split('/').pop();
                        e.currentTarget.src = `./assets/${filename}`;
                      }}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-top border-2 border-dsvv-gold-400 shadow-xl shadow-dsvv-gold-500/25 ring-2 ring-dsvv-gold-500/30"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-dsvv-gold-500 text-dsvv-blue-950 flex items-center justify-center font-bold text-[10px]">
                      ★
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                        {founder.name}
                      </h3>
                    </div>
                    <p className="text-xs text-dsvv-gold-300 font-medium mt-0.5">
                      {founder.title}
                    </p>
                    <span className="text-[11px] text-slate-400 font-mono">
                      ({founder.period})
                    </span>
                  </div>
                </div>

                {/* Reverent Quote */}
                <div className="mt-5 bg-dsvv-blue-950/70 border-l-2 border-dsvv-gold-400 p-3.5 rounded-r-xl">
                  <div className="flex gap-2">
                    <Quote size={16} className="text-dsvv-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-dsvv-gold-100 font-medium italic">
                        "{founder.quote}"
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        "{founder.quoteEn}"
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                  {founder.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="inline-flex items-center gap-1 text-dsvv-gold-300">
                  <CheckCircle2 size={12} className="text-dsvv-gold-400" />
                  {founder.badge}
                </span>
                <span className="text-slate-400 font-serif italic">
                  Dev Sanskriti Heritage
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
