export type Category = "desk" | "chair" | "accessory";

export type Item = {
  id: string;
  name: string;
  price: number;
  image: string; // We'll use this for thumbnail or SVG component name
  category: Category;
  position?: { x: number; y: number; zIndex: number }; // For absolute positioning in preview
};
