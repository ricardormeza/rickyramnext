"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { CONSENT_EVENT, getConsent, type Consent } from "@/lib/consent";

export function GTM() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  useEffect(() => {
    setConsent(getConsent());

    const handleUpdate = (event: Event) => {
      const detail = (event as CustomEvent<Consent | null>).detail;
      setConsent(detail ?? null);
    };

    window.addEventListener(CONSENT_EVENT, handleUpdate as EventListener);
    return () => window.removeEventListener(CONSENT_EVENT, handleUpdate as EventListener);
  }, []);

  if (!gtmId || !consent?.analytics) return null;

  return (
    <>
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        `}
      </Script>
      <Script
        id="gtm-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
      />
    </>
  );
}
