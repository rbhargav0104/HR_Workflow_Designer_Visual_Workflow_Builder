import { useWorkflowStore } from "../store/useWorkflowStore";

export default function NodeConfigPanel() {
  const { selectedNode, updateNode } = useWorkflowStore() as any;

  if (!selectedNode) {
    return (
      <div
        style={{
          width: "260px",
          borderLeft: "1px solid #ddd",
          padding: "10px",
          background: "#fafafa",
        }}
      >
        <h3>No Node Selected</h3>
        <p>Select a node to configure it.</p>
      </div>
    );
  }

  const data = selectedNode.data || {};

  const handleChange = (key: string, value: any) => {
    updateNode(selectedNode.id, { [key]: value });
  };

  return (
    <div
      style={{
        width: "260px",
        borderLeft: "1px solid #ddd",
        padding: "12px",
        background: "white",
      }}
    >
      <h3 style={{ marginBottom: "12px" }}>
        {selectedNode.type.charAt(0).toUpperCase() + selectedNode.type.slice(1)}{" "}
        Node
      </h3>

      {/* UNIVERSAL FIELD */}
      <label>Label</label>
      <input
        style={inputStyle}
        value={data.label || ""}
        onChange={(e) => handleChange("label", e.target.value)}
      />

      {/* START NODE */}
      {selectedNode.type === "start" && (
        <>
          <label>Metadata (optional)</label>
          <input
            style={inputStyle}
            value={data.metadata || ""}
            placeholder="e.g. source=website"
            onChange={(e) => handleChange("metadata", e.target.value)}
          />
        </>
      )}

      {/* TASK NODE */}
      {selectedNode.type === "task" && (
        <>
          <label>Description</label>
          <input
            style={inputStyle}
            value={data.description || ""}
            onChange={(e) => handleChange("description", e.target.value)}
          />

          <label>Assignee</label>
          <input
            style={inputStyle}
            value={data.assignee || ""}
            onChange={(e) => handleChange("assignee", e.target.value)}
          />

          <label>Due Date</label>
          <input
            type="date"
            style={inputStyle}
            value={data.due || ""}
            onChange={(e) => handleChange("due", e.target.value)}
          />
        </>
      )}

      {/* APPROVAL NODE */}
      {selectedNode.type === "approval" && (
        <>
          <label>Approver Role</label>
          <input
            style={inputStyle}
            value={data.role || ""}
            placeholder="Manager / HRBP / Director"
            onChange={(e) => handleChange("role", e.target.value)}
          />

          <label>Auto-Approve Threshold</label>
          <input
            type="number"
            style={inputStyle}
            value={data.threshold || ""}
            onChange={(e) => handleChange("threshold", Number(e.target.value))}
          />
        </>
      )}

      {/* AUTOMATED NODE */}
      {selectedNode.type === "automated" && (
        <>
          <label>Action</label>
          <input
            style={inputStyle}
            value={data.action || ""}
            placeholder="send_email / generate_doc"
            onChange={(e) => handleChange("action", e.target.value)}
          />

          <label>Params</label>
          <textarea
            style={{ ...inputStyle, height: "70px" }}
            value={data.params || ""}
            placeholder="key=value;"
            onChange={(e) => handleChange("params", e.target.value)}
          />
        </>
      )}

      {/* END NODE */}
      {selectedNode.type === "end" && (
        <>
          <label>End Message</label>
          <input
            style={inputStyle}
            value={data.message || ""}
            placeholder="Workflow completed!"
            onChange={(e) => handleChange("message", e.target.value)}
          />

          <label>Show Summary</label>
          <select
            style={inputStyle}
            value={data.summary || "no"}
            onChange={(e) => handleChange("summary", e.target.value)}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ddd",
  marginBottom: "10px",
  marginTop: "4px",
};
