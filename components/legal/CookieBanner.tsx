"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  CONSENT_EVENT,
  CONSENT_OPEN_EVENT,
  getConsent,
  setConsent,
  type Consent,
} from "@/lib/consent";
import { cn } from "@/lib/utils";

const buildConsent = (analytics: boolean, marketing: boolean): Consent => ({
  necessary: true,
  analytics,
  marketing,
  updatedAt: new Date().toISOString(),
});

export function CookieBanner() {
  const reduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = getConsent();
    if (existing) {
      setIsVisible(false);
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    } else {
      setIsVisible(true);
    }

    const handleUpdate = (event: Event) => {
      const detail = (event as CustomEvent<Consent | null>).detail;
      if (detail) {
        setIsVisible(false);
        setAnalytics(detail.analytics);
        setMarketing(detail.marketing);
      } else {
        setIsVisible(true);
      }
    };

    const handleOpen = () => {
      const current = getConsent();
      if (current) {
        setAnalytics(current.analytics);
        setMarketing(current.marketing);
      }
      setIsDialogOpen(true);
    };

    window.addEventListener(CONSENT_EVENT, handleUpdate as EventListener);
    window.addEventListener(CONSENT_OPEN_EVENT, handleOpen as EventListener);
    return () => {
      window.removeEventListener(CONSENT_EVENT, handleUpdate as EventListener);
      window.removeEventListener(CONSENT_OPEN_EVENT, handleOpen as EventListener);
    };
  }, []);

  const handleAcceptAll = () => {
    setConsent(buildConsent(true, true));
    setIsVisible(false);
    setIsDialogOpen(false);
  };

  const handleReject = () => {
    setConsent(buildConsent(false, false));
    setIsVisible(false);
    setIsDialogOpen(false);
  };

  const handleSave = () => {
    setConsent(buildConsent(analytics, marketing));
    setIsVisible(false);
    setIsDialogOpen(false);
  };

  const handleOpenDialog = () => {
    const current = getConsent();
    if (current) {
      setAnalytics(current.analytics);
      setMarketing(current.marketing);
    }
    setIsDialogOpen(true);
  };

  const motionProps = useMemo(
    () =>
      reduceMotion
        ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
        : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } },
    [reduceMotion]
  );

  return (
    <>
      <AnimatePresence>
        {isVisible ? (
          <motion.div
            key="cookie-banner"
            {...motionProps}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl"
          >
            <div className="rounded-3xl border bg-card/95 p-4 shadow-xl backdrop-blur md:p-6">
              <div className="space-y-3">
                <p className="text-sm text-foreground">
                  Usamos cookies esenciales para el funcionamiento y opcionales para
                  analítica/marketing. Puedes aceptar, rechazar o configurar.
                </p>
                <p className="text-xs text-muted-foreground">
                  Consulta{" "}
                  <Link href="/cookies" className="text-primary hover:underline">
                    /cookies
                  </Link>{" "}
                  y{" "}
                  <Link href="/privacidad" className="text-primary hover:underline">
                    /privacidad
                  </Link>
                  .
                </p>
              </div>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
                <Button variant="ghost" onClick={handleReject}>
                  Rechazar no esenciales
                </Button>
                <Button variant="outline" onClick={handleOpenDialog}>
                  Configurar
                </Button>
                <Button onClick={handleAcceptAll}>Aceptar todo</Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Preferencias de cookies</DialogTitle>
            <DialogDescription>
              Ajusta cómo usamos cookies en este sitio. Las esenciales siempre están
              activas.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4 rounded-2xl border bg-muted/40 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-foreground">Esenciales</p>
                <p className="text-xs text-muted-foreground">Seguridad y funcionamiento.</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Siempre activas</span>
                <span
                  aria-hidden="true"
                  className="inline-flex h-6 w-11 items-center rounded-full bg-primary"
                >
                  <span className="ml-1 h-4 w-4 rounded-full bg-primary-foreground" />
                </span>
              </div>
            </div>

            <label
              className={cn(
                "flex items-center justify-between gap-4 rounded-2xl border px-4 py-3 transition",
                analytics ? "border-primary/40 bg-primary/5" : "bg-background"
              )}
            >
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Analítica (GA4/GTM)
                </p>
                <p className="text-xs text-muted-foreground">
                  Medición de uso y conversiones.
                </p>
              </div>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
                className="peer sr-only"
              />
              <span className="relative h-6 w-11 rounded-full bg-muted transition peer-checked:bg-primary">
                <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-background shadow transition peer-checked:translate-x-5" />
              </span>
            </label>

            <label
              className={cn(
                "flex items-center justify-between gap-4 rounded-2xl border px-4 py-3 transition",
                marketing ? "border-primary/40 bg-primary/5" : "bg-background"
              )}
            >
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Marketing (Meta/TikTok/Ads)
                </p>
                <p className="text-xs text-muted-foreground">
                  Atribución de campañas y remarketing.
                </p>
              </div>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(event) => setMarketing(event.target.checked)}
                className="peer sr-only"
              />
              <span className="relative h-6 w-11 rounded-full bg-muted transition peer-checked:bg-primary">
                <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-background shadow transition peer-checked:translate-x-5" />
              </span>
            </label>
          </div>

          <DialogFooter className="gap-2 sm:justify-end">
            <Button variant="ghost" onClick={handleReject}>
              Rechazar no esenciales
            </Button>
            <Button onClick={handleSave}>Guardar preferencias</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
