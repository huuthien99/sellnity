"use client";
import ContainerWrap from "@/components/common/ContainerWrap";
import React from "react";

function TicketDetailContainer({ children }: { children?: React.ReactNode }) {
  const click = () => {
    alert("TicketDetailPage");
  };
  return <ContainerWrap clickBadge={click}>{children}</ContainerWrap>;
}

export default TicketDetailContainer;
