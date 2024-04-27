import type { ReactNode } from "react";

export const Shell = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {children}
    </div>
  );
};
