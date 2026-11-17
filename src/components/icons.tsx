type P = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const PhoneIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const BoxIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M21 8 12 3 3 8v8l9 5 9-5z" />
    <path d="m3 8 9 5 9-5M12 13v8" />
  </svg>
);

export const ToolIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.6-.5-.5-2.6z" />
  </svg>
);

export const CartIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="20" r="1.5" />
    <circle cx="18" cy="20" r="1.5" />
    <path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L22 7H6" />
  </svg>
);

export const BuildingIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" />
  </svg>
);

export const DocIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
    <path d="M14 3v6h6M8 13h8M8 17h5" />
  </svg>
);

export const PrintIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="7" />
  </svg>
);

export const TruckIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M1 4h13v12H1zM14 8h4l3 3v5h-7z" />
    <circle cx="5.5" cy="18.5" r="1.8" />
    <circle cx="17.5" cy="18.5" r="1.8" />
  </svg>
);

export const GiftIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path d="M5 12v9h14v-9M12 8v13M12 8S10.5 3 7.5 4.5 9 8 12 8zM12 8s1.5-5 4.5-3.5S15 8 12 8z" />
  </svg>
);

export const CoffeeIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 9h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6zM17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 3v3M12 3v3" />
  </svg>
);

export const CheckIcon =({ className }: P) => (
  <svg {...base} className={className} strokeWidth={2.4}>
    <path d="m5 12 5 5L20 7" />
  </svg>
);

export const ArrowIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ShieldIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 3 4 6v6c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const ChartIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </svg>
);

export const UsersIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6.5 6.5 0 0 1 3.5 5.5" />
  </svg>
);

export const CardIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20M6 15h4" />
  </svg>
);

export const StoreIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3 9 4.5 4h15L21 9M3 9h18v0a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0zM5 12v8h14v-8M10 20v-5h4v5" />
  </svg>
);

export const HeadsetIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
    <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
    <path d="M20 19a3 3 0 0 1-3 3h-3" />
  </svg>
);

export const MailIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const ExternalIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </svg>
);

export const PauseIcon = ({ className }: P) => (
  <svg {...base} className={className} strokeWidth={2.4}>
    <path d="M8 5v14M16 5v14" />
  </svg>
);

export const PlayIcon = ({ className }: P) => (
  <svg {...base} className={className} fill="currentColor">
    <path d="M7 4.5v15l12-7.5z" />
  </svg>
);
