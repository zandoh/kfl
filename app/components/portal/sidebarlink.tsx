import { NavLink, NavLinkProps } from "@remix-run/react";
import { Icon, type IconName } from "~/components/ui/icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export const SidebarLink = ({
  to,
  iconName,
  iconText,
  tooltipText,
  ...rest
}: Omit<NavLinkProps, "className"> & {
  iconName: IconName;
  iconText: string;
  tooltipText: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <NavLink
            to={to}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:bg-accent aria-[current=page]:text-accent-foreground md:h-8 md:w-8"
            {...rest}
          >
            <Icon size={20} name={iconName} />
            <span className="sr-only">{iconText}</span>
          </NavLink>
        </TooltipTrigger>
        <TooltipContent side="right">{tooltipText}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
