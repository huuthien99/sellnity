import { cn } from "@/lib/utils";
import React from "react";

function BoxContent({
  children,
  title,
  icon,
  className,
  classNameParent,
}: {
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  className?: string;
  classNameParent?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", classNameParent)}>
      <div
        className={cn(
          "flex gap-2 text-secondary border-b-[#D3D3D3] border-b-[1px] h-[34px] items-center pl-[2px] py-2 pr-[17px]",
          className
        )}
      >
        {icon && <span className="icon">{icon}</span>}
        {title && <h3 className="title">{title}</h3>}
      </div>
      {children}
    </div>
  );
}

export default BoxContent;
