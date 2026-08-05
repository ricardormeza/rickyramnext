"use client";

import type { ReactNode } from "react";

import { pushDataLayerEvent } from "@/lib/analytics";

type TrackedWhatsappLinkProps = {
  id: string;
  href: string;
  ctaName: string;
  ctaLocation: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
};

export function TrackedWhatsappLink({
  id,
  href,
  ctaName,
  ctaLocation,
  className,
  ariaLabel,
  children,
}: TrackedWhatsappLinkProps) {
  return (
    <a
      id={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => {
        pushDataLayerEvent({
          event: "whatsapp_click",
          cta_name: ctaName,
          cta_location: ctaLocation,
          lead_channel: "whatsapp",
          landing_page: window.location.href,
          variant: "paginas-web-para-negocios",
        });
      }}
    >
      {children}
    </a>
  );
}
