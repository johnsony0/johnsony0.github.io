import React, { useState } from "react";
import HexGridVisualizer from "./MakeGrid";
import AltGridVisualizer from "./AltGrid";
import Solve from "./Solve";
import AltSolve from "./AltSolve"

function AStar() {
  const [view, setView] = useState("menu");

  const renderBackButton = () => (
    <button 
      onClick={() => setView("menu")}
      style={backButtonStyle}
      onMouseOver={(e) => e.target.style.backgroundColor = "#3f3f46"}
      onMouseOut={(e) => e.target.style.backgroundColor = "#27272a"}
    >
      ← Back to Selection
    </button>
  );

  return (
    <div style={containerStyle}>
      {view === "menu" && (
        <div style={menuStyle}>
          <h1 style={{ color: "#f8fafc", marginBottom: "0.5rem" }}>A* Pathfinding Lab</h1>
          <p style={{ color: "#94a3b8", marginBottom: "2rem" }}>Select a module to visualize</p>
          
          <div style={buttonGroupStyle}>
            {/* Standard Version */}
            <button 
              onClick={() => setView("grid")} 
              style={primaryButtonStyle}
              onMouseOver={(e) => (e.target.style.borderColor = "#3b82f6")}
              onMouseOut={(e) => (e.target.style.borderColor = "#3f3f46")}
            >
              <div style={iconStyle}>⬢</div>
              Hex Grid (Standard)
            </button>

            {/* ASIC / HW Optimized Version */}
            <button 
              onClick={() => setView("altgrid")} 
              style={{...primaryButtonStyle, borderColor: "#a21caf"}} // Purple tint for HW version
              onMouseOver={(e) => (e.target.style.borderColor = "#d946ef")}
              onMouseOut={(e) => (e.target.style.borderColor = "#a21caf")}
            >
              <div style={iconStyle}>⚙️</div>
              Hex Grid (Cost to Leave) 
            </button>

            {/* Solve Algorithm */}
            <button 
              onClick={() => setView("solve")} 
              style={{...primaryButtonStyle}} // Span full width below the two grids
              onMouseOver={(e) => (e.target.style.borderColor = "#3b82f6")}
              onMouseOut={(e) => (e.target.style.borderColor = "#3f3f46")}
            >
              <div style={iconStyle}>🚀</div>
              Solve Algorithm (Standard)
            </button>

            {/* ASIC/HW Optimized Version */}
            <button 
              onClick={() => setView("altsolve")} 
              style={{...primaryButtonStyle, borderColor: "#a21caf"}} // Span full width below the two grids
              onMouseOver={(e) => (e.target.style.borderColor = "#d946ef")}
              onMouseOut={(e) => (e.target.style.borderColor = "#a21caf")}
            >
              <div style={iconStyle}>⚙️</div>
              Solve Algorithm (Cost to Leave) 
            </button>
          </div>
        </div>
      )}

      {view !== "menu" && (
        <div style={{ width: "100%", height: "100%" }}>
          {renderBackButton()}
          <div style={componentWrapperStyle}>
            {view === "grid" && <HexGridVisualizer />}
            {view === "altgrid" && <AltGridVisualizer />}
            {view === "solve" && <Solve />}
            {view === "altsolve" && <AltSolve />}
          </div>
        </div>
      )}
    </div>
  );
}

// --- Dark Mode Styles ---

const containerStyle = {
  minHeight: "100vh",
  backgroundColor: "#09090b", // Deep Black/Zinc
  color: "#e2e8f0",
  padding: "40px 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "'Inter', system-ui, sans-serif",
};

const menuStyle = {
  maxWidth: "600px",
  width: "100%",
  textAlign: "center",
};

const buttonGroupStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
};

const primaryButtonStyle = {
  backgroundColor: "#18181b",
  color: "#f8fafc",
  padding: "30px 20px",
  fontSize: "18px",
  fontWeight: "600",
  cursor: "pointer",
  borderRadius: "12px",
  border: "2px solid #3f3f46",
  transition: "all 0.2s ease",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
};

const iconStyle = {
  fontSize: "32px",
};

const backButtonStyle = {
  display: "block",
  margin: "0 auto 30px auto",
  padding: "10px 20px",
  backgroundColor: "#27272a",
  color: "#a1a1aa",
  border: "1px solid #3f3f46",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px",
  transition: "background 0.2s",
};

const componentWrapperStyle = {
  backgroundColor: "#111827",
  borderRadius: "16px",
  padding: "20px",
  border: "1px solid #1f2937",
  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)",
};

export default AStar;