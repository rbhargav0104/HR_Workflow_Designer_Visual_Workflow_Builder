import { Handle, Position } from "reactflow";

export default function StartNode({ data }: any) {
  return (
    <div
      style={{
        padding: "12px",
        background: "white",
        borderRadius: "10px",
        borderLeft: "6px solid #10b981",
        boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
        minWidth: "160px",
        pointerEvents: "all",
        userSelect: "none",
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 4 }}>🟢 Start</div>
      <div style={{ color: "#374151" }}>{data?.label}</div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
