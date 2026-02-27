"use client";

import { ALL_ITEMS } from "../data/items";
import { Category, Item } from "../data/types";
import { CheckCircle2, Circle } from "lucide-react";
import clsx from "clsx";
import { useWorkspaceStore } from "../store/useWorkspaceStore";
import React from "react";

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "desk", label: "Desks" },
  { id: "chair", label: "Chairs" },
  { id: "accessory", label: "Accessories" },
];

export const ProductSelector: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<Category>("desk");
  const { desk, chair, accessories, setDesk, setChair, toggleAccessory } = useWorkspaceStore();

  const items = ALL_ITEMS.filter(item => item.category === activeTab);

  const isSelected = (item: Item) => {
    if (item.category === "desk") return desk?.id === item.id;
    if (item.category === "chair") return chair?.id === item.id;
    if (item.category === "accessory") return accessories.some(a => a.id === item.id);
    return false;
  };

  const handleSelect = (item: Item) => {
    if (item.category === "desk") setDesk(item);
    if (item.category === "chair") setChair(item);
    if (item.category === "accessory") toggleAccessory(item);
  };
  console.log("desk==>", desk);
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-stone-200 bg-stone-50/50">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={clsx(
              "flex-1 py-4 px-2 text-sm font-medium transition-colors border-b-2",
              activeTab === cat.id
                ? "border-emerald-600 text-emerald-700"
                : "border-transparent text-stone-500 hover:text-stone-700 hover:bg-stone-100"
            )}>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {items.map(item => {
          const selected = isSelected(item);
          return (
            <button
              key={item.id}
              onClick={() => handleSelect(item)}
              className={clsx(
                "w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left",
                selected
                  ? "border-emerald-500 bg-emerald-50/50 ring-1 ring-emerald-500"
                  : "border-stone-200 hover:border-stone-300 hover:bg-stone-50"
              )}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center border border-stone-200">
                  {/* Placeholder for thumbnail */}
                  <span className="text-xs text-stone-400 font-mono uppercase">
                    {item.image.slice(0, 3)}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-stone-900">{item.name}</h4>
                  <p className="text-sm text-stone-500">${item.price}/mo</p>
                </div>
              </div>
              <div
                className={clsx(
                  "transition-colors",
                  selected ? "text-emerald-600" : "text-stone-300"
                )}>
                {selected ? (
                  <CheckCircle2 className="w-6 h-6" />
                ) : (
                  <Circle className="w-6 h-6" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
