import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Rudra Pratap Singh — Full-Stack Developer & AI Product Engineer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0D0D0D",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
          color: "#F2F0EA",
          border: "12px solid #1A1A1A",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
            paddingBottom: "24px",
            fontSize: "16px",
            fontFamily: "monospace",
            color: "#9E9A90",
            letterSpacing: "2px",
          }}
        >
          <div>OFFICIAL PORTFOLIO • RUDRA PRATAP SINGH</div>
          <div>KOLKATA, INDIA</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", gap: "12px" }}>
            <div
              style={{
                background: "#1F1F1F",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "9999px",
                padding: "8px 20px",
                fontSize: "14px",
                fontFamily: "monospace",
                fontWeight: "bold",
                color: "#F2F0EA",
              }}
            >
              CIIR 2026 AUTHOR
            </div>
            <div
              style={{
                background: "#1F1F1F",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "9999px",
                padding: "8px 20px",
                fontSize: "14px",
                fontFamily: "monospace",
                fontWeight: "bold",
                color: "#F2F0EA",
              }}
            >
              HACKFEST WINNER
            </div>
          </div>

          <div
            style={{
              fontSize: "76px",
              fontWeight: 400,
              fontFamily: "serif",
              fontStyle: "italic",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "#F2F0EA",
            }}
          >
            Rudra Pratap Singh
          </div>

          <div
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#DCD7CB",
              letterSpacing: "-0.01em",
            }}
          >
            Full-Stack Developer &amp; AI Product Engineer
          </div>

          <div style={{ fontSize: "20px", color: "#9E9A90" }}>
            Applied Deep Learning Computer Vision Pipelines • Role-Based Web Platforms
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: "24px",
            fontSize: "15px",
            fontFamily: "monospace",
            color: "#B0ABA0",
          }}
        >
          <div>STACK: PyTorch • RT-DETR • React 19 • Next.js 15 • TypeScript</div>
          <div style={{ color: "#F2F0EA", fontWeight: "bold" }}>
            rudrapratapsingh.tech →
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

