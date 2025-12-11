import { useEffect, useState } from "react";
import { Handle, Position } from "reactflow";
import { getAutomations } from "../../api/mockApi";

export default function AutomatedNode({ data }: any) {
  const [actions, setActions] = useState<any[]>([]);

  useEffect(() => {
    getAutomations().then((res) => setActions(res));
  }, []);

  return (
    <div
      style={{
        padding: "12px",
        background: "white",
        borderRadius: "10px",
        borderLeft: "6px solid #8b5cf6",
        boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
        minWidth: "180px",
        pointerEvents: "all",
        userSelect: "none",
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 4 }}>⚙️ Automated</div>
      <div style={{ color: "#374151", marginBottom: 6 }}>
        {data.label || "Automated Node"}
      </div>

      <select
        style={{
          width: "100%",
          padding: "6px",
          borderRadius: "6px",
          border: "1px solid #d1d5db",
        }}
        value={data.action || ""}
        onChange={(e) => data.onChange?.("action", e.target.value)}
      >
        <option value="">Select Action</option>
        {actions.map((a) => (
          <option key={a.id} value={a.id}>
            {a.label}
          </option>
        ))}
      </select>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
