// SIMPLEST MOCK API — always works, no server needed

// 🔥 MUST BE EXPORTED — AutomatedNode depends on this
export function getAutomations() {
  return Promise.resolve([
    {
      id: "send_email",
      label: "Send Email",
      params: ["to", "subject"],
    },
    {
      id: "generate_doc",
      label: "Generate Document",
      params: ["template", "recipient"],
    },
  ]);
}

// 🔥 Simulation API used in SimulationPanel
export function simulateWorkflow(workflow: any) {
  console.log("Simulating workflow:", workflow);

  const sorted = [...workflow.nodes].sort(
    (a, b) => a.position.y - b.position.y
  );

  const steps: string[] = [];

  sorted.forEach((node: any) => {
    switch (node.type) {
      case "start":
        steps.push("Start → Workflow Initiated");
        break;

      case "task":
        steps.push(`Task → ${node.data.label || "Task Executed"}`);
        break;

      case "approval":
        steps.push(`Approval → ${node.data.role || "Manager"} Approved`);
        break;

      case "automated":
        steps.push(`Automation → ${node.data.action || "Action Triggered"}`);
        break;

      case "end":
        steps.push("End → Workflow Completed");
        break;

      default:
        steps.push("Unknown Step Executed");
    }
  });

  return Promise.resolve({ steps });
}
