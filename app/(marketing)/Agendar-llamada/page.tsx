"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function AgendarLlamadaPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "assessment" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="h-[calc(100vh-8rem)] w-full">
        <Cal
          namespace="assessment"
          calLink="ricardo-ramirez-meza-ye8kuu/assessment"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </main>
  );
}
