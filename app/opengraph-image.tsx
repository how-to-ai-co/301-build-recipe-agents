import { ImageResponse } from "next/og";
export const alt = "301 Build Recipe: Agents. Compare five AI agents and build your chief of staff.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", color: "#363737", width: "100%", height: "100%", padding: 72, fontFamily: "Georgia, serif", borderTop: "14px solid #ff6719" }}>
      <div style={{ display: "flex", fontSize: 26, letterSpacing: 2, color: "#757575", fontFamily: "sans-serif", fontWeight: 600 }}>HOW TO AI · 301 BUILD RECIPE · AGENTS</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 86, fontWeight: 700 }}>Your AI</div>
        <div style={{ display: "flex", fontSize: 86, fontWeight: 700 }}>chief of <span style={{ color: "#ff6719", fontStyle: "italic", marginLeft: 22 }}>staff.</span></div>
      </div>
      <div style={{ display: "flex", fontSize: 28, color: "#868787" }}>Muse, Instinct, Grok Bot, dots and Claude Duet, compared.</div>
    </div>,
    size,
  );
}
