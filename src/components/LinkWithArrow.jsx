import { Icon } from "@iconify/react";
import Link from "next/link";

export default function LinkWithArrow({ children, href="", ...rest }) {
  return (
    <Link className="flex items-center gap-2 capitalize font-light text-dark-slate hover:text-red" href={href} {...rest}>
      <span>{children}</span>
      <Icon  icon="weui:arrow-outlined" width="12" height="23" />
    </Link>
  );
}
