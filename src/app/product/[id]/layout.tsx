import type { ReactNode } from "react";
import { seedProducts } from "@/lib/data";

export function generateStaticParams() {
  return seedProducts().map((p) => ({ id: p.id }));
}

export default function ProductLayout({ children }: { children: ReactNode }) {
  return children;
}
