import { useWorkflowStore } from "../store/useWorkflowStore";

export default function Header() {
  const exportFlow = useWorkflowStore((s) => s.exportFlow);
  const importFlow = useWorkflowStore((s) => s.importFlow);

  const handleExport = () => {
    const json = JSON.stringify(exportFlow(), null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "workflow.json";
    a.click();
  };

  const handleImport = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);
        importFlow(data);
      } catch {
        alert("Invalid JSON file");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div
      style={{
        height: "50px",
        background: "#1f2937",
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        gap: "16px",
      }}
    >
      <h3 style={{ margin: 0 }}>HR Workflow Designer</h3>

      {/* Export Button */}
      <button style={btnStyle} onClick={handleExport}>
        Export JSON
      </button>

      {/* Import Input */}
      <label style={btnStyle}>
        Import JSON
        <input
          type="file"
          accept=".json"
          style={{ display: "none" }}
          onChange={handleImport}
        />
      </label>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  background: "#4b5563",
  padding: "6px 12px",
  borderRadius: "6px",
  cursor: "pointer",
  color: "white",
  border: "none",
};
