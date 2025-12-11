import { useWorkflowStore } from "../store/useWorkflowStore";

export default function Sidebar() {
  const setPendingNodeType = useWorkflowStore((s) => s.setPendingNodeType);

  return (
    <div
      style={{
        width: "220px",
        padding: "16px",
        background: "#111827",
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        boxShadow: "2px 0px 6px rgba(0,0,0,0.20)",
      }}
    >
      <h3 style={{ marginTop: 0 }}>Nodes</h3>

      <button style={buttonStyle} onClick={() => setPendingNodeType("start")}>
        🟢 Start Node
      </button>

      <button style={buttonStyle} onClick={() => setPendingNodeType("task")}>
        📝 Task Node
      </button>

      <button
        style={buttonStyle}
        onClick={() => setPendingNodeType("approval")}
      >
        ✔️ Approval Node
      </button>

      <button
        style={buttonStyle}
        onClick={() => setPendingNodeType("automated")}
      >
        ⚙️ Automated Node
      </button>

      <button style={buttonStyle} onClick={() => setPendingNodeType("end")}>
        🔚 End Node
      </button>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  background: "#1f2937",
  color: "white",
  border: "1px solid #374151",
  cursor: "pointer",
  textAlign: "left",
};
