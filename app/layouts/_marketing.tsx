import { ReactNode } from "react";

export const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      marketing wrapper
      {children}
    </div>
  );
};
