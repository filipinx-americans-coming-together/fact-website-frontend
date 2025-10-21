'use client'
import PageContainer from "@/components/formatting/PageContainer";
import LoadingCircle from "@/components/icons/LoadingCircle";
import { ReactNode, useEffect, useState } from "react";

export default function VarietyShow() {
    const [loadEB, setLoadEB] = useState(false);
    const loadEventbriteScript = () => {
            const script = document.createElement("script");
            script.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
            script.async = true;
            document.head.appendChild(script);
            console.log('eventbrite script loaded')
            setLoadEB(true);
        };
    
        useEffect(() => {
            loadEventbriteScript();
        })

        const EventbriteWidget = ({ children, onComplete }: { children: ReactNode, onComplete: Function }) => {
            useEffect(() => {
                console.log("loadEB",loadEB);
                if (loadEB) {
                    // @ts-ignore
                    try {window.EBWidgets.createWidget({
                    widgetType: 'checkout',
                    eventId: '1816702820039',
                    iframeContainerId: 'eventbrite-widget-container-1816702820039',
                    iframeContainerHeight: 800,
                    onOrderComplete: onComplete,
                    // promoCode: 'VSHOWONLY'
                })} catch {
                    setTimeout(()=>{setLoadEB(true)}, 3000);
                }
                } 
                    
                }, [loadEB]);
        
                return (
                    <div id="eventbrite-widget-container-1816702820039"></div>
                    // <button id="eventbrite-widget-modal-trigger-1816702820039" type="button" className="text-sm text-center text-text-primary w-fit p-4 bg-[rgba(250,250,250,0.3)] shadow-lg rounded-xl hover:scale-105 hover:shadow-xl border-slate-700 border-1">Workshops + Variety Show Bundle</button>
                );
            };
    return(
        <PageContainer title="Variety Show">
            {/* <div>Purchase Variety Show Tickets!</div>
             */}
            <EventbriteWidget onComplete={() => {console.log("Checkout Completed :)")}}>{<div className="w-fit mx-auto"><LoadingCircle/></div>}</EventbriteWidget>
        </PageContainer>
    );
}