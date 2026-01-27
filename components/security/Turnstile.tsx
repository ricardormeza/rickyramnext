"use client";

import * as React from "react";
import Script from "next/script";

export type TurnstileHandle = {
  execute: () => void;
  reset: () => void;
};

type TurnstileProps = {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  resetSignal?: number;
  className?: string;
  size?: "normal" | "invisible";
  action?: string;
  theme?: "light" | "dark" | "auto";
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          size?: "normal" | "invisible";
          action?: string;
          theme?: "light" | "dark" | "auto";
        }
      ) => string;
      execute: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

export const Turnstile = React.forwardRef<TurnstileHandle, TurnstileProps>(
  (
    { onVerify, onExpire, onError, resetSignal, className, size = "normal", action, theme = "auto" },
    ref
  ) => {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const widgetIdRef = React.useRef<string | null>(null);

  const renderWidget = React.useCallback(() => {
    if (!siteKey || !containerRef.current || !window.turnstile) return;
    if (widgetIdRef.current) return;

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: onVerify,
      "expired-callback": onExpire,
      "error-callback": onError,
      size,
      action,
      theme,
    });
  }, [action, onError, onExpire, onVerify, siteKey, size, theme]);

  React.useImperativeHandle(
    ref,
    () => ({
      execute: () => {
        if (!widgetIdRef.current || !window.turnstile) return;
        window.turnstile.execute(widgetIdRef.current);
      },
      reset: () => {
        if (!widgetIdRef.current || !window.turnstile) return;
        window.turnstile.reset(widgetIdRef.current);
      },
    }),
    []
  );

  React.useEffect(() => {
    if (!siteKey) return;
    if (window.turnstile) {
      renderWidget();
      return;
    }
  }, [renderWidget, siteKey]);

  React.useEffect(() => {
    if (!resetSignal || !widgetIdRef.current || !window.turnstile) return;
    window.turnstile.reset(widgetIdRef.current);
  }, [resetSignal]);

  if (!siteKey) return null;

  return (
    <div className={className}>
      <Script
        id="turnstile-api"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderWidget}
      />
      <div ref={containerRef} />
    </div>
  );
}
);

Turnstile.displayName = "Turnstile";
