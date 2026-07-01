"use client";

import { useEffect } from "react";

import { pushDataLayerEvent } from "@/lib/analytics";

export function ContactPageTracking() {
  useEffect(() => {
    pushDataLayerEvent({
      event: "view_contact_page",
      page_type: "contact",
      page_slug: "contacto",
      contact_intent: "lead",
    });
  }, []);

  return null;
}
