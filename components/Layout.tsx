import React from "react";
import { WorkspacePreview } from "./WorkspacePreview";
import { ProductSelector } from "./ProductSelector";
import { SummaryPanel } from "./SummaryPanel";

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-emerald-200">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg leading-none">Y</span>
            </div>
            <span className="font-semibold text-xl tracking-tight text-stone-900">YDW</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mb-4">
            Build your dream workspace.
          </h1>
          <p className="text-lg text-stone-500 max-w-2xl">
            Select your desk, chair, and accessories. See it come to life in real-time, and
            rent it for your stay in Bali.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="sticky top-24 h-[calc(100vh-8rem)] min-h-xl">
              <ProductSelector />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-4 md:p-8 shadow-sm border border-stone-200">
              <WorkspacePreview />
            </div>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:col-span-3">
            <div className="sticky top-24 h-[calc(80vh-8rem)] min-h-xl">
              <SummaryPanel />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
