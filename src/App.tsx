import Sidebar from "./components/Sidebar";
import WorkflowCanvas from "./components/WorkflowCanvas";
import NodeConfigPanel from "./components/NodeConfigPanel";
import SimulationPanel from "./components/SimulationPanel";
import Header from "./components/Header";

export default function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "#f5f5f5",
      }}
    >
      {/* TOP HEADER */}
      <Header />

      {/* MAIN APP BODY */}
      <div style={{ flexGrow: 1, display: "flex" }}>
        {/* LEFT SIDEBAR */}
        <Sidebar />

        {/* WORKFLOW CANVAS + SIMULATION */}
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            background: "white",
            margin: "8px",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 2px 6px rgba(0,0,0,0.07)",
          }}
        >
          {/* CANVAS */}
          <div style={{ flexGrow: 1 }}>
            <WorkflowCanvas />
          </div>

          {/* SIMULATION PANEL AT BOTTOM */}
          <div
            style={{
              height: "160px",
              borderTop: "1px solid #e5e7eb",
              background: "#ffffff",
            }}
          >
            <SimulationPanel />
          </div>
        </div>

        {/* RIGHT CONFIG PANEL */}
        <NodeConfigPanel />
      </div>
    </div>
  );
}
