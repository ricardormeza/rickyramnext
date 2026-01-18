export type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

const COOKIE_NAME = "rr_consent";
const CONSENT_EVENT = "rr-consent-updated";
const CONSENT_OPEN_EVENT = "rr-consent-open";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 180;

const readCookie = (): string | null => {
  if (typeof document === "undefined") return null;
  const cookies = document.cookie ? document.cookie.split("; ") : [];
  for (const cookie of cookies) {
    const [name, ...rest] = cookie.split("=");
    if (name === COOKIE_NAME) {
      return rest.join("=");
    }
  }
  return null;
};

const parseConsent = (value: string | null): Consent | null => {
  if (!value) return null;
  try {
    const decoded = decodeURIComponent(value);
    return JSON.parse(decoded) as Consent;
  } catch {
    return null;
  }
};

export const getConsent = (): Consent | null => {
  if (typeof window === "undefined") return null;
  const cookieValue = readCookie();
  const cookieConsent = parseConsent(cookieValue);
  if (cookieConsent) return cookieConsent;

  const stored = window.localStorage.getItem(COOKIE_NAME);
  return parseConsent(stored);
};

export const setConsent = (consent: Consent) => {
  if (typeof window === "undefined") return;
  const value = encodeURIComponent(JSON.stringify(consent));
  document.cookie = `${COOKIE_NAME}=${value}; max-age=${MAX_AGE_SECONDS}; path=/; SameSite=Lax`;
  window.localStorage.setItem(COOKIE_NAME, value);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: consent }));
};

export const clearConsent = () => {
  if (typeof window === "undefined") return;
  document.cookie = `${COOKIE_NAME}=; max-age=0; path=/; SameSite=Lax`;
  window.localStorage.removeItem(COOKIE_NAME);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
};

export { CONSENT_EVENT };
export { CONSENT_OPEN_EVENT };
