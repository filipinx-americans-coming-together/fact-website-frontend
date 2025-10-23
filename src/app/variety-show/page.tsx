'use client';

import PageContainer from "@/components/formatting/PageContainer";
import LoadingCircle from "@/components/icons/LoadingCircle";
import Script from "next/script";
import { useEffect, useRef } from "react";

export default function VarietyShow() {
  const containerId = "eventbrite-widget-container-1816702820039";
  const initializedRef = useRef(false);

  const tryCreateWidget = () => {
    if (initializedRef.current) return;
    if (typeof window === "undefined") return;
    // @ts-ignore
    if (!window.EBWidgets) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    // Clear any previous iframes if navigating back-and-forth.
    container.innerHTML = "";

    try {
      // @ts-ignore
      window.EBWidgets.createWidget({
        widgetType: "checkout",
        eventId: "1816702820039",
        iframeContainerId: containerId,
        iframeContainerHeight: 800,
        onOrderComplete: () => console.log("Checkout Completed :)"),
        promoCode: "VSHOWONLY"
      });
      initializedRef.current = true;
      console.log("Eventbrite widget initialized");
    } catch (e) {
      console.warn("EBWidgets available but createWidget failed, retrying…", e);
    }
  };

  // As a backup, poll briefly after mount until EBWidgets exists.
  useEffect(() => {
    const id = setInterval(tryCreateWidget, 200);
    setTimeout(() => clearInterval(id), 5000); // stop after 5s
    return () => clearInterval(id);
  }, []);

  return (
    <PageContainer title="Variety Show">
      <div className="text-center">Purchase Variety Show Tickets!</div>
      <div className="w-fit mx-auto mb-4"><LoadingCircle /></div>
      <div id={containerId} />
      <Script
        src="https://www.eventbrite.com/static/widgets/eb_widgets.js"
        strategy="afterInteractive"
        onLoad={tryCreateWidget}
      />
    </PageContainer>
  );
}
