import { Item } from "./types";

export const DESKS: Item[] = [
  {
    id: "desk-oak",
    name: "Solid Oak Desk",
    price: 45,
    image: "oak-desk",
    category: "desk",
    position: { x: 20, y: 30, zIndex: 10 },
  },
  {
    id: "desk-standing",
    name: "Ergo Standing Desk",
    price: 65,
    image: "standing-desk",
    category: "desk",
    position: { x: 20, y: 35, zIndex: 10 },
  },
  {
    id: "desk-glass",
    name: "Solid Glass Desk",
    price: 45,
    image: "glass-desk",
    category: "desk",
    position: { x: 20, y: 34, zIndex: 10 },
  },
  {
    id: "desk-Industrial",
    name: "Industrial Desk",
    price: 45,
    image: "industrial-desk",
    category: "desk",
    position: { x: 20, y: 35, zIndex: 10 },
  },
  {
    id: "wide-desk",
    name: "Executive wide desk",
    price: 45,
    image: "executive-wide-desk",
    category: "desk",
    position: { x: 20, y: 35, zIndex: 10 },
  },
];

export const CHAIRS: Item[] = [
  {
    id: "chair-herman",
    name: "Aeron Chair",
    price: 35,
    image: "aeron-chair",
    category: "chair",
    position: { x: 40, y: 35, zIndex: 20 },
  },
  {
    id: "chair-gaming",
    name: "Gaming Chair",
    price: 35,
    image: "gaming-chair",
    category: "chair",
    position: { x: 40, y: 35, zIndex: 20 },
  },
  {
    id: "chair-stool",
    name: "Active Stool",
    price: 15,
    image: "active-stool",
    category: "chair",
    position: { x: 40, y: 55, zIndex: 20 },
  },
];

export const ACCESSORIES: Item[] = [
  {
    id: "acc-monitor",
    name: '27" 4K Monitor',
    price: 25,
    image: "monitor",
    category: "accessory",
    position: { x: 38, y: 19, zIndex: 15 },
  },
  {
    id: "laptop-windows",
    name: '15" Office Windows Laptop',
    price: 25,
    image: "laptop-windows",
    category: "accessory",
    position: { x: 38, y: 40, zIndex: 15 },
  },
  {
    id: "acc-lamp",
    name: "Desk Lamp",
    price: 5,
    image: "lamp",
    category: "accessory",
    position: { x: 28, y: 23, zIndex: 15 },
  },
  {
    id: "acc-plant",
    name: "Monstera Plant",
    price: 8,
    image: "plant",
    category: "accessory",
    position: { x: 60, y: 25, zIndex: 15 },
  },
  {
    id: "acc-keyboard",
    name: "Mechanical Keyboard",
    price: 12,
    image: "keyboard",
    category: "accessory",
    position: { x: 44, y: 40, zIndex: 15 },
  },
];

export const ALL_ITEMS = [...DESKS, ...CHAIRS, ...ACCESSORIES];
