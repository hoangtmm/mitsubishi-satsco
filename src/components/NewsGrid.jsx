import React from "react";
import NewsGridCard from "./NewsGridCard";

export default function NewsGrid({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((n) => (
        <NewsGridCard key={n.slug} {...n} />
      ))}
    </div>
  );
}
