import React from "react";

interface Props {
  image: string;
  className?: string;
}

export const ItemSVG: React.FC<Props> = ({ image, className }) => {
  switch (image) {
    case "oak-desk":
      return (
        <svg
          viewBox="0 0 200 100"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="30" width="160" height="15" rx="2" fill="#8B5A2B" />
          <rect x="30" y="45" width="10" height="55" fill="#5C3A21" />
          <rect x="160" y="45" width="10" height="55" fill="#5C3A21" />
        </svg>
      );
    case "standing-desk":
      return (
        <svg
          viewBox="0 0 200 100"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="180" height="10" rx="2" fill="#E5E7EB" />
          <rect x="30" y="30" width="15" height="70" fill="#9CA3AF" />
          <rect x="155" y="30" width="15" height="70" fill="#9CA3AF" />
          <rect x="10" y="90" width="50" height="10" fill="#4B5563" />
          <rect x="140" y="90" width="50" height="10" fill="#4B5563" />
        </svg>
      );
    case "aeron-chair":
      return (
        <svg
          viewBox="0 0 100 150"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          {/* Base */}
          <path
            d="M50 130 L20 150 M50 130 L80 150 M50 130 L50 150 M50 130 L30 145 M50 130 L70 145"
            stroke="#374151"
            strokeWidth="4"
          />
          {/* Cylinder */}
          <rect x="45" y="90" width="10" height="40" fill="#1F2937" />
          {/* Seat */}
          <ellipse cx="50" cy="90" rx="30" ry="10" fill="#111827" />
          {/* Backrest */}
          <path d="M30 90 Q20 40 35 10 L65 10 Q80 40 70 90 Z" fill="#374151" opacity="0.9" />
          {/* Armrests */}
          <rect x="15" y="60" width="10" height="5" fill="#111827" />
          <rect x="75" y="60" width="10" height="5" fill="#111827" />
          <rect x="20" y="65" width="5" height="25" fill="#4B5563" />
          <rect x="75" y="65" width="5" height="25" fill="#4B5563" />
        </svg>
      );
    case "active-stool":
      return (
        <svg
          viewBox="0 0 100 120"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          {/* Base */}
          <ellipse cx="50" cy="110" rx="30" ry="10" fill="#374151" />
          {/* Cylinder */}
          <path d="M45 110 L40 40 L60 40 L55 110 Z" fill="#9CA3AF" />
          {/* Seat */}
          <ellipse cx="50" cy="40" rx="25" ry="15" fill="#F87171" />
        </svg>
      );
    case "monitor":
      return (
        <svg
          viewBox="0 0 120 100"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          {/* Stand base */}
          <rect x="40" y="90" width="40" height="5" fill="#4B5563" />
          {/* Stand neck */}
          <rect x="55" y="60" width="10" height="30" fill="#6B7280" />
          {/* Screen */}
          <rect x="10" y="10" width="100" height="60" rx="4" fill="#1F2937" />
          {/* Inner Screen */}
          <rect x="15" y="15" width="90" height="50" rx="2" fill="#3B82F6" opacity="0.8" />
        </svg>
      );
    case "lamp":
      return (
        <svg
          viewBox="0 0 60 100"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          {/* Base */}
          <ellipse cx="30" cy="95" rx="20" ry="5" fill="#374151" />
          {/* Arm 1 */}
          <line x1="30" y1="95" x2="10" y2="50" stroke="#4B5563" strokeWidth="4" />
          {/* Arm 2 */}
          <line x1="10" y1="50" x2="40" y2="20" stroke="#4B5563" strokeWidth="4" />
          {/* Head */}
          <path d="M30 15 L50 30 L40 40 L20 25 Z" fill="#1F2937" />
          {/* Light */}
          <circle cx="45" cy="35" r="8" fill="#FEF08A" opacity="0.8" />
        </svg>
      );
    case "plant":
      return (
        <svg
          viewBox="0 0 80 120"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          {/* Pot */}
          <path d="M25 110 L20 80 L60 80 L55 110 Z" fill="#D97706" />
          {/* Leaves */}
          <path d="M40 80 Q20 40 10 60 Q30 70 40 80 Z" fill="#10B981" />
          <path d="M40 80 Q60 30 70 50 Q50 70 40 80 Z" fill="#059669" />
          <path d="M40 80 Q40 20 25 30 Q35 60 40 80 Z" fill="#34D399" />
          <path d="M40 80 Q50 10 60 25 Q45 60 40 80 Z" fill="#10B981" />
        </svg>
      );
    case "keyboard":
      return (
        <svg
          viewBox="0 0 100 40"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="80" height="25" rx="2" fill="#E5E7EB" />
          {/* Keys */}
          <rect x="15" y="15" width="8" height="8" rx="1" fill="#9CA3AF" />
          <rect x="25" y="15" width="8" height="8" rx="1" fill="#9CA3AF" />
          <rect x="35" y="15" width="8" height="8" rx="1" fill="#9CA3AF" />
          <rect x="45" y="15" width="8" height="8" rx="1" fill="#9CA3AF" />
          <rect x="55" y="15" width="8" height="8" rx="1" fill="#9CA3AF" />
          <rect x="65" y="15" width="8" height="8" rx="1" fill="#9CA3AF" />
          <rect x="75" y="15" width="10" height="8" rx="1" fill="#9CA3AF" />

          <rect x="15" y="25" width="12" height="8" rx="1" fill="#9CA3AF" />
          <rect x="29" y="25" width="30" height="8" rx="1" fill="#9CA3AF" />
          <rect x="61" y="25" width="8" height="8" rx="1" fill="#9CA3AF" />
          <rect x="71" y="25" width="14" height="8" rx="1" fill="#9CA3AF" />
        </svg>
      );

    case "glass-desk":
      return (
        <svg
          viewBox="0 0 200 100"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          {/* Glass top */}
          <rect x="20" y="25" width="160" height="12" rx="3" fill="#BFDBFE" opacity="0.7" />
          {/* Frame */}
          <rect x="25" y="35" width="10" height="60" fill="#6B7280" />
          <rect x="165" y="35" width="10" height="60" fill="#6B7280" />
          {/* Cross bar */}
          <rect x="25" y="55" width="150" height="5" fill="#4B5563" />
        </svg>
      );
    case "industrial-desk":
      return (
        <svg
          viewBox="0 0 200 100"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          {/* Wood top */}
          <rect x="15" y="20" width="170" height="15" rx="2" fill="#92400E" />
          {/* Metal legs */}
          <rect x="30" y="35" width="8" height="65" fill="#374151" />
          <rect x="162" y="35" width="8" height="65" fill="#374151" />
          {/* Side frame */}
          <rect x="30" y="35" width="140" height="5" fill="#4B5563" />
        </svg>
      );

    case "gaming-chair":
      return (
        <svg
          viewBox="0 0 100 150"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          {/* Base */}
          <path
            d="M50 130 L20 150 M50 130 L80 150 M50 130 L50 150"
            stroke="#111827"
            strokeWidth="4"
          />
          {/* Stand */}
          <rect x="45" y="95" width="10" height="35" fill="#1F2937" />
          {/* Seat */}
          <rect x="30" y="85" width="40" height="15" rx="6" fill="#DC2626" />
          {/* Backrest */}
          <path d="M30 85 Q20 40 35 10 L65 10 Q80 40 70 85 Z" fill="#EF4444" />
          {/* Headrest */}
          <rect x="35" y="15" width="30" height="10" rx="3" fill="#991B1B" />
        </svg>
      );
    case "executive-wide-desk":
      return (
        <svg
          viewBox="0 0 260 120"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          {/* Table Top (wider & thicker) */}
          <rect x="20" y="25" width="220" height="18" rx="3" fill="#7C3AED" />

          {/* Under top shadow line */}
          <rect x="20" y="40" width="220" height="3" fill="#5B21B6" />

          {/* Left Leg */}
          <rect x="30" y="43" width="12" height="70" fill="#4C1D95" />

          {/* Right Drawer Cabinet Body */}
          <rect x="185" y="43" width="45" height="70" rx="3" fill="#6D28D9" />

          {/* Drawer Lines */}
          <rect x="190" y="50" width="35" height="18" rx="2" fill="#8B5CF6" />
          <rect x="190" y="72" width="35" height="18" rx="2" fill="#8B5CF6" />
          <rect x="190" y="94" width="35" height="18" rx="2" fill="#8B5CF6" />

          {/* Drawer Handles */}
          <rect x="205" y="58" width="10" height="3" rx="1" fill="#DDD6FE" />
          <rect x="205" y="80" width="10" height="3" rx="1" fill="#DDD6FE" />
          <rect x="205" y="102" width="10" height="3" rx="1" fill="#DDD6FE" />

          {/* Back modesty panel */}
          <rect x="60" y="60" width="110" height="35" fill="#5B21B6" opacity="0.7" />
        </svg>
      );
    case "minimal-chair":
      return (
        <svg
          viewBox="0 0 100 140"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          {/* Legs */}
          <rect x="30" y="80" width="5" height="50" fill="#6B7280" />
          <rect x="65" y="80" width="5" height="50" fill="#6B7280" />
          {/* Seat */}
          <rect x="25" y="70" width="50" height="15" rx="4" fill="#E5E7EB" />
          {/* Back */}
          <rect x="35" y="30" width="30" height="40" rx="6" fill="#F3F4F6" />
        </svg>
      );
    case "laptop-windows":
      return (
        <svg
          viewBox="0 0 160 100"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          {/* Screen Frame */}
          <rect x="30" y="10" width="100" height="55" rx="6" fill="#111827" />

          {/* Screen */}
          <rect x="35" y="15" width="90" height="45" rx="4" fill="#1E3A8A" />

          {/* Windows Logo */}
          <rect x="65" y="30" width="10" height="10" fill="#3B82F6" />
          <rect x="78" y="30" width="10" height="10" fill="#60A5FA" />
          <rect x="65" y="43" width="10" height="10" fill="#60A5FA" />
          <rect x="78" y="43" width="10" height="10" fill="#3B82F6" />

          {/* Base / Keyboard */}
          <rect x="20" y="65" width="120" height="15" rx="3" fill="#374151" />

          {/* Trackpad */}
          <rect x="65" y="70" width="30" height="8" rx="2" fill="#4B5563" />

          {/* Keyboard hint lines */}
          <rect x="30" y="68" width="25" height="3" rx="1" fill="#6B7280" />
          <rect x="105" y="68" width="25" height="3" rx="1" fill="#6B7280" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="#E5E7EB" />
          <text x="50" y="50" textAnchor="middle" fill="#9CA3AF" fontSize="12">
            ?
          </text>
        </svg>
      );
  }
};
