"use client";

interface MaterialIconProps {
  icon: string;
  filled?: boolean;
  className?: string;
  size?: string;
}

export default function MaterialIcon({
  icon,
  filled = false,
  className = "",
  size,
}: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: filled
          ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
          : undefined,
        fontSize: size,
      }}
    >
      {icon}
    </span>
  );
}
