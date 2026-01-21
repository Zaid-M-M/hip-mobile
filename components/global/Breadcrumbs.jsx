"use client";
import React from "react";

export default function Breadcrumbs({ items = [], color = "#000000" }) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="inline-flex items-center justify-center gap-[10px] p-[10px] cursor-pointer flex-none order-0 grow-0"
      style={{ color, boxSizing: 'border-box', backdropFilter: 'blur(60px)', background: 'rgba(0,0,0,0.12)', border: '1px solid rgba(0,0,0,0.2)' }}
    >
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={`${item.label}-${idx}`}>
            <a
              href={item.href || "#"}
              className="bw-m text-[16px] leading-[20px]"
              style={{ color }}
            >
              {item.label}
            </a>
            {!isLast && <span style={{ color }}>/</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}