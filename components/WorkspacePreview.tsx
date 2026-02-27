"use client";

import React from "react";
import { ItemSVG } from "./ItemSVG";
import { motion, AnimatePresence } from "motion/react";
import { useWorkspaceStore } from "../store/useWorkspaceStore";

export const WorkspacePreview: React.FC = () => {
  const { desk, chair, accessories } = useWorkspaceStore();
  console.log("desk", desk);

  return (
    <div className="relative w-full aspect-[4/3] bg-stone-100 rounded-2xl overflow-hidden border border-stone-200 shadow-inner flex items-center justify-center">
      {/* Background elements to make it look like a room */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 to-stone-200" />
      <div className="absolute bottom-0 w-full h-1/3 bg-stone-300/50 border-t border-stone-300" />{" "}
      {/* Floor */}
      <div className="absolute bottom-1/3 w-full h-px bg-stone-300 shadow-sm" />{" "}
      {/* Baseboard */}
      {/* Render Items */}
      <div className="relative w-full h-full max-w-2xl max-h-[600px]">
        <AnimatePresence>
          {desk && (
            <motion.div
              key={desk.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute drop-shadow-xl"
              style={{
                left: `${desk.position?.x}%`,
                top: `${desk.position?.y}%`,
                transform: "translate(-50%, -50%)",
                zIndex: desk.position?.zIndex,
                width: "60%",
              }}>
              <ItemSVG image={desk.image} className="w-full h-auto" />
            </motion.div>
          )}

          {chair && (
            <motion.div
              key={chair.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute drop-shadow-2xl"
              style={{
                left: `${chair.position?.x}%`,
                top: `${chair.position?.y}%`,
                transform: "translate(-50%, -50%)",
                zIndex: chair.position?.zIndex,
                width: chair.image === "active-stool" ? "15%" : "25%",
              }}>
              <ItemSVG image={chair.image} className="w-full h-auto" />
            </motion.div>
          )}

          {accessories.map(acc => (
            <motion.div
              key={acc.id}
              initial={{ opacity: 0, y: -10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute drop-shadow-md"
              style={{
                left: `${acc.position?.x}%`,
                top: `${acc.position?.y}%`,
                transform: "translate(-50%, -50%)",
                zIndex: acc.position?.zIndex,
                width:
                  acc.image === "monitor" ? "25%" : acc.image === "keyboard" ? "15%" : "10%",
              }}>
              <ItemSVG image={acc.image} className="w-full h-auto" />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Empty State Hint */}
        {!desk && !chair && accessories.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-stone-400 font-medium text-lg tracking-tight">
              Select a desk to start building your workspace
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
