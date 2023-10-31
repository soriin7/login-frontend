import { JSX, SVGProps } from "react";

export default function SvgIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 74.6 53.2" {...props}>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="40%" style={{ stopColor: "#9D3ADF" }} />
          <stop offset="100%" style={{ stopColor: "#1469B7" }} />
        </linearGradient>
      </defs>
      <path style={{ fill: "url(#grad1)" }} d="M10.3 11.4v27.7c0 2.7-1.9 4.8-4.3 4.8H4.3C1.9 44 0 41.8 0 39.1V11.4c0-2.7 1.9-4.8 4.3-4.8H6c2.4 0 4.3 2.1 4.3 4.8zm12.5-.1c-2.4 0-4.3 1.9-4.3 4.3v19.2c0 2.4 1.9 4.3 4.3 4.3s4.3-1.9 4.3-4.3V15.7c0-2.4-1.9-4.4-4.3-4.4zm47.5-4.7h-1.6c-2.4 0-4.3 2.2-4.3 4.8v27.7c0 2.7 1.9 4.8 4.3 4.8h1.6c2.4 0 4.3-2.2 4.3-4.8V11.4c0-2.7-1.9-4.8-4.3-4.8zm-18.4 4.7c-2.4 0-4.3 1.9-4.3 4.3v19.2c0 2.4 1.9 4.3 4.3 4.3s4.3-1.9 4.3-4.3V15.7c0-2.4-2-4.4-4.3-4.4zM37.3 0c-1.4 0-2.6 1.2-2.6 2.6v48c0 1.4 1.2 2.6 2.6 2.6 1.4 0 2.6-1.2 2.6-2.6v-48c0-1.4-1.2-2.6-2.6-2.6z" />
    </svg>
  )
}