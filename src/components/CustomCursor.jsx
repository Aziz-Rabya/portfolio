import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorBorderRef = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined" || window.matchMedia("(max-width: 768px)").matches) {
            return;
        }

        const cursor = cursorRef.current;
        const cursorBorder = cursorBorderRef.current;

        gsap.set([cursor, cursorBorder], {
            xPercent: -50,
            yPercent: -50,
        });

        const xTo = gsap.quickTo(cursor, "x", {duration: 0.4, ease: "power3.out"});
        const yTo = gsap.quickTo(cursor, "y", {duration: 0.4, ease: "power3.out"});

        const xBorderTo = gsap.quickTo(cursorBorder, "x", {duration: 0.8, ease: "power3.out"});
        const yBorderTo = gsap.quickTo(cursorBorder, "y", {duration: 0.8, ease: "power3.out"});

        const handleMouseMove = (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
            xBorderTo(e.clientX);
            yBorderTo(e.clientY);
        }

        const handleMouseDown = () => {
            gsap.to([cursor, cursorBorder], {
                scale: 0.6,
                duration: 0.2
            });
        }

        const handleMouseUp = () => {
            gsap.to([cursor, cursorBorder], {
                scale: 1,
                duration: 0.2
            });
        }

        // Add hover effect for interactive elements
        const handleLinkHover = () => {
            gsap.to([cursor, cursorBorder], {
                scale: 1.5,
                duration: 0.3,
                backgroundColor: "rgba(124, 58, 237, 0.5)",
                borderColor: "rgba(124, 58, 237, 0.8)"
            });
        }

        const handleLinkHoverEnd = () => {
            gsap.to([cursor, cursorBorder], {
                scale: 1,
                duration: 0.3,
                backgroundColor: "transparent",
                borderColor: "rgba(255, 255, 255, 0.5)"
            });
        }

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);

        // Add hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleLinkHover);
            el.addEventListener('mouseleave', handleLinkHoverEnd);
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);
            
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleLinkHover);
                el.removeEventListener('mouseleave', handleLinkHoverEnd);
            });
        };
    }, []);

    return (
        <>
            <div 
                ref={cursorRef}
                className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transform-gpu"
            />
            <div
                ref={cursorBorderRef}
                className='fixed top-0 left-0 w-8 h-8 border-2 rounded-full border-white pointer-events-none z-[9998] mix-blend-difference opacity-70 transform-gpu'
            />
        </>
    );
};

export default CustomCursor;