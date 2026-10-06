import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, GOOGLE_REVIEWS_LIST } from '../../data/business.ts';

export const GoogleReviewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 border-b border-neutral-800 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Official Rating Breakdown */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-neutral-800 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold block mb-2">
              VERIFIED BUSINESS FEEDBACK
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white leading-none">
              GOOGLE REVIEWS
            </h2>
          </div>

          <div className="flex items-center gap-6 bg-neutral-900 border border-neutral-800 px-6 py-4 rounded">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs font-mono text-neutral-400">
                <span className="text-white font-bold">{BUSINESS_INFO.reviewCount} Reviews</span> on Google
              </div>
            </div>

            <div className="pl-6 border-l border-neutral-800">
              <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tighter leading-none">
                {BUSINESS_INFO.googleRating}
                <span className="text-sm font-mono text-neutral-500 font-normal"> / 5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GOOGLE_REVIEWS_LIST.map((review, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/90 border border-neutral-800 rounded p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase">
                    {review.date}
                  </span>
                </div>

                <blockquote className="text-sm sm:text-base text-neutral-200 leading-relaxed font-mono">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400 font-bold">
                  {review.reviewerType}
                </span>
                <span className="text-blue-400">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* External Google Reviews Action */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono font-bold tracking-widest uppercase text-white bg-neutral-900 border border-neutral-700 hover:border-blue-500 rounded transition-all"
          >
            <span>VIEW GOOGLE REVIEWS</span>
            <ExternalLink className="w-4 h-4 text-blue-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
