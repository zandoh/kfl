import { NavLink, NavLinkProps } from "@remix-run/react";
import { Icon, IconName } from "~/components/ui/icon";

export const SidebarLinkMobile = ({
  to,
  iconName,
  text,
  ...rest
}: Omit<NavLinkProps, "className"> & {
  iconName: IconName;
  text: string;
}) => {
  return (
    <NavLink
      to={to}
      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
      {...rest}
    >
      <Icon size={20} name={iconName} />
      {text}
    </NavLink>
  );
};
