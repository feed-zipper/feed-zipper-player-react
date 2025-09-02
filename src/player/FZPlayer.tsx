"use client";
import type { CSSProperties } from "react";
import React, { useEffect, useRef } from "react";

export type FZPlayerProps = {
    channelId: string;
    apiKey: string;
    className?: string;
    style?: CSSProperties;
    referrerPolicy?: ReferrerPolicy;
};

export function FZPlayer({ channelId, apiKey, className, style, referrerPolicy }: FZPlayerProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        el.innerHTML = "";

        const script = document.createElement("script");
        script.src = "https://player.feedzipper.com/embed.min.js";
        script.async = true;
        script.setAttribute("data-id", channelId);
        script.setAttribute("data-key", apiKey);
        if (referrerPolicy) script.setAttribute("data-referrerpolicy", referrerPolicy);
        script.setAttribute("data-feedzipper-embed", "");

        el.appendChild(script);

        return () => {
            el.innerHTML = "";
        };
    }, [channelId, apiKey, referrerPolicy]);

    return (
        <div ref={containerRef} className={className} style={style}>
            <div className="fzPlayer" />
        </div>
    );
}

export default FZPlayer;


