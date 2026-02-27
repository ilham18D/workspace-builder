"use client";
import React from "react";
import { ShoppingBag, Trash2 } from "lucide-react";
import { useWorkspaceStore } from "../store/useWorkspaceStore";

export const SummaryPanel: React.FC = () => {
  const { desk, chair, accessories, clearWorkspace } = useWorkspaceStore();

  const selectedItems = [desk, chair, ...accessories].filter(Boolean);
  const totalPrice = selectedItems.reduce((sum, item) => sum + (item?.price || 0), 0);

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-stone-900 flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-emerald-600" />
          Your Setup
        </h3>
        {selectedItems.length > 0 && (
          <button
            onClick={clearWorkspace}
            className="text-sm text-stone-400 hover:text-red-500 transition-colors flex items-center gap-1">
            <Trash2 className="w-4 h-4" />
            Clear
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-4">
        {selectedItems.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-stone-400 space-y-2">
            <ShoppingBag className="w-12 h-12 opacity-20" />
            <p className="text-sm">Your workspace is empty</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {selectedItems.map(item => (
              <li key={item!.id} className="flex justify-between items-center text-sm">
                <span className="text-stone-600 font-medium">{item!.name}</span>
                <span className="text-stone-900 font-mono">${item!.price}/mo</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-stone-200">
        <div className="flex justify-between items-end mb-6">
          <span className="text-stone-500 text-sm font-medium uppercase tracking-wider">
            Total Monthly
          </span>
          <span className="text-3xl font-light text-stone-900 tracking-tight">
            ${totalPrice}
          </span>
        </div>

        <button
          disabled={selectedItems.length === 0}
          className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 disabled:bg-stone-200 disabled:text-stone-400 text-white rounded-xl font-medium transition-all shadow-sm disabled:shadow-none">
          Rent This Setup
        </button>
      </div>
    </div>
  );
};
