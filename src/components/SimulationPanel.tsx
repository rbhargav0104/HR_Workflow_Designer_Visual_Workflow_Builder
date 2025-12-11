import { useWorkflowStore } from "../store/useWorkflowStore";
import { simulateWorkflow } from "../api/mockApi";
import { useState } from "react";

export default function SimulationPanel() {
  const { nodes, edges } = useWorkflowStore() as any;
  const [result, setResult] = useState<any[]>([]);

  const runSimulation = async () => {
    const workflow = { nodes, edges };
    const res = await simulateWorkflow(workflow);
    setResult(res.result);
  };

  return (
    <div style={{ padding: 10, borderTop: "1px solid #ddd" }}>
      <button onClick={runSimulation}>Run Workflow Simulation</button>

      {result.length > 0 && (
        <div style={{ marginTop: 10 }}>
          <strong>Simulation Result</strong>
          <ul>
            {result.map((step: any) => (
              <li key={step.step}>
                Step {step.step}: {step.message}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
