"use client";

import { Button } from "@/components/ui/button";
import { CONSENT_OPEN_EVENT } from "@/lib/consent";

export function CookieSettingsButton() {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => {
        window.dispatchEvent(new CustomEvent(CONSENT_OPEN_EVENT));
      }}
    >
      Cambiar configuracion de cookies
    </Button>
  );
}
