import { ReactNode } from "react";

export function Page({ children }: { children: ReactNode }) {
  return <div className="Page">{children}</div>;
}
