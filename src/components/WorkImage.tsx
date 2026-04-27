import { useState } from "react";

type WorkImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  rounded?: "lg" | "xl" | "2xl" | "3xl";
  aspect?: "video" | "portrait" | "wide" | "square";
  /** First hero / LCP image */
  priority?: boolean;
};

const aspectClass = {
  video: "aspect-video",
  portrait: "aspect-[3/4] max-h-[min(70vh,520px)]",
  wide: "aspect-[21/9] max-h-80",
  square: "aspect-square",
} as const;

/**
 * Renders a proof-style photo: object-fit cover, no stretch, with a restrained fallback
 * if the file is not yet in /public/images.
 */
export function WorkImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  rounded = "2xl",
  aspect = "video",
  priority = false,
}: WorkImageProps) {
  const [failed, setFailed] = useState(false);
  const round =
    rounded === "3xl" ? "rounded-3xl" : "rounded-2xl";

  if (failed) {
    return (
      <div
        className={`${round} border border-navy/10 bg-gradient-to-br from-soft-blue via-light-gray to-soft-green ${aspectClass[aspect]} flex items-center justify-center p-6 text-center shadow-card ${className}`}
        role="img"
        aria-label={alt}
      >
        <p className="text-sm font-medium leading-relaxed text-navy/70">
          Add your photo: <code className="text-xs text-deep-blue">{src}</code>
        </p>
      </div>
    );
  }

  return (
    <div
      className={`${round} ${aspectClass[aspect]} w-full max-h-[min(78vh,640px)] overflow-hidden border border-navy/8 bg-light-gray shadow-card ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover object-center ${imgClassName}`}
      />
    </div>
  );
}

export function LogoImage({
  className = "h-10 w-auto",
  width = 180,
  height = 40,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span
        className={`font-extrabold tracking-tight text-navy ${className} inline-flex items-center`}
        style={{ fontFamily: "Manrope, Inter, sans-serif" }}
      >
        NatuFresh
      </span>
    );
  }
  return (
    <img
      src="/images/natufresh-logo.png"
      alt="NatuFresh"
      width={width}
      height={height}
      onError={() => setFailed(true)}
      className={`w-auto object-contain object-left ${className}`}
    />
  );
}
