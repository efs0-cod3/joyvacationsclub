import { useState } from "react";

const PHONE = import.meta.env.VITE_WHATSAPP_PHONE;
const MESSAGE = encodeURIComponent(
  "Hola, me interesa conocer más sobre sus tours y paquetes vacacionales. ¿Me pueden dar más información?"
);
const WA_URL = `https://wa.me/${PHONE}?text=${MESSAGE}`;

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  const containerStyle = {
    position: "fixed",
    bottom: "28px",
    right: "28px",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexDirection: "row-reverse",
  };

  const buttonStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    boxShadow: hovered
      ? "0 8px 30px rgba(37, 211, 102, 0.55)"
      : "0 4px 18px rgba(37, 211, 102, 0.38)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: "none",
    outline: "none",
    transform: hovered ? "scale(1.12)" : "scale(1)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    animation: "waPulse 2.4s ease-in-out infinite",
    flexShrink: 0,
    textDecoration: "none",
  };

  const tooltipStyle = {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    fontSize: "13px",
    fontFamily: "'Segoe UI', sans-serif",
    fontWeight: 500,
    padding: "7px 14px",
    borderRadius: "20px",
    whiteSpace: "nowrap",
    opacity: hovered ? 1 : 0,
    transform: hovered ? "translateX(0)" : "translateX(8px)",
    transition: "opacity 0.2s ease, transform 0.2s ease",
    pointerEvents: "none",
    boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
    letterSpacing: "0.01em",
  };

  return (
    <>
      <style>{`
        @keyframes waPulse {
          0%   { box-shadow: 0 4px 18px rgba(37,211,102,0.38), 0 0 0 0 rgba(37,211,102,0.45); }
          60%  { box-shadow: 0 4px 18px rgba(37,211,102,0.38), 0 0 0 14px rgba(37,211,102,0); }
          100% { box-shadow: 0 4px 18px rgba(37,211,102,0.38), 0 0 0 0 rgba(37,211,102,0); }
        }
      `}</style>

      <div style={containerStyle}>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          style={buttonStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* WhatsApp official icon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            fill="white"
          >
            <path d="M16.003 2.667C8.636 2.667 2.667 8.636 2.667 16.003c0 2.354.636 4.653 1.843 6.665L2.667 29.333l6.835-1.793a13.27 13.27 0 0 0 6.501 1.703h.005c7.366 0 13.325-5.969 13.325-13.336S23.37 2.667 16.003 2.667zm0 24.432a11.04 11.04 0 0 1-5.633-1.545l-.404-.24-4.055 1.063 1.08-3.943-.264-.415A11.048 11.048 0 0 1 4.9 16.003C4.9 9.869 9.869 4.9 16.003 4.9c6.134 0 11.1 4.969 11.1 11.1 0 6.136-4.966 11.099-11.1 11.099zm6.087-8.303c-.333-.167-1.97-.972-2.276-1.083-.306-.11-.529-.167-.751.167-.222.333-.861 1.083-1.055 1.305-.194.222-.389.25-.722.083-.333-.167-1.406-.518-2.678-1.652-.99-.882-1.659-1.97-1.853-2.303-.194-.333-.021-.513.146-.679.15-.149.333-.389.5-.583.166-.194.222-.333.333-.556.111-.222.055-.417-.028-.583-.083-.167-.751-1.81-1.028-2.478-.271-.651-.547-.563-.751-.573l-.639-.011c-.222 0-.583.083-.888.417-.306.333-1.167 1.139-1.167 2.778s1.195 3.222 1.361 3.444c.167.222 2.353 3.593 5.704 5.039.797.345 1.419.55 1.903.703.8.254 1.528.218 2.103.132.641-.096 1.97-.806 2.248-1.584.278-.778.278-1.445.195-1.583-.083-.139-.306-.222-.639-.389z" />
          </svg>
        </a>

        <div style={tooltipStyle}>¡Chatea con nosotros!</div>
      </div>
    </>
  );
};

export default WhatsAppButton;
