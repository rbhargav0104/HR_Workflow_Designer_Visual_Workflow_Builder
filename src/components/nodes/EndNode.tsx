import { Handle, Position } from "reactflow";

export default function EndNode({ data }: any) {
  return (
    <div
      style={{
        padding: "12px",
        background: "white",
        borderRadius: "10px",
        borderLeft: "6px solid #6b7280",
        boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
        minWidth: "160px",
        pointerEvents: "all",
        userSelect: "none",
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 4 }}>🔚 End</div>
      <div style={{ color: "#374151" }}>{data?.label}</div>

      <Handle type="target" position={Position.Top} />
    </div>
  );
}
