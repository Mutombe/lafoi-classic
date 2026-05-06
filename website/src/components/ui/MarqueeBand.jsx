import React from 'react'

export default function MarqueeBand({
  items = [],
  reverse = false,
  speed = 30,
  className = '',
  itemClassName = '',
  separator = null,
}) {
  if (!items.length) return null
  const list = [...items, ...items]

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-current to-transparent opacity-0" />
      <div
        className="flex whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused]"
        style={{
          animation: `${reverse ? 'mqLeftToRight' : 'mqRightToLeft'} ${speed}s linear infinite`,
        }}
      >
        {list.map((item, i) => (
          <span key={i} className={`inline-flex items-center gap-3 ${itemClassName}`}>
            {item}
            {separator}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes mqRightToLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes mqLeftToRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
