import React, {useEffect, useRef, useState} from 'react';
import {animate, createScope, splitText, stagger} from "animejs";

function AnimatedText({text}) {

    const txtRef = useRef(null);

    useEffect(() => {
        if (!txtRef.current) {
            return;
        }

        const split = splitText(txtRef.current, {words: false, chars: true});

        const animation = animate(split.chars, {
            y: [
                {to: "-2.75rem", ease: "outExpo", duration: 600},
                {to: 0, ease: "outBounce", duration: 800, delay: 100},
            ],
            rotate: {
                from: "-1turn",
                delay: 0,
            },
            delay: stagger(50),
            ease: "inOutCirc",
            loopDelay: 1000,
            loop: true,
        })
        // Cleanup: revert DOM split and stop animation
        return () => {
            try {
                animation?.cancel?.();
            } catch {
                console.error("AnimatedText", text);
            }
            try {
                split?.revert?.();
            } catch {
                console.error("AnimatedText", text);
            }
        };
    }, [])

    return (
        <div ref={txtRef} className="animated-text">{text}</div>
    );
}

export default AnimatedText;