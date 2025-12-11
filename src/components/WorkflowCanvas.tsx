import React from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Connection,
} from "reactflow";

import "reactflow/dist/style.css";

import { useWorkflowStore } from "../store/useWorkflowStore";

import StartNode from "./nodes/StartNode";
import TaskNode from "./nodes/TaskNode";
import ApprovalNode from "./nodes/ApprovalNode";
import AutomatedNode from "./nodes/AutomatedNode";
import EndNode from "./nodes/EndNode";

const nodeTypes = {
  start: StartNode,
  task: TaskNode,
  approval: ApprovalNode,
  automated: AutomatedNode,
  end: EndNode,
};

export default function WorkflowCanvas() {
  const { nodes, edges, addNewEdge, selectNode } = useWorkflowStore() as any;
  const { pendingNodeType, setPendingNodeType, addNode } =
    useWorkflowStore() as any;

  const onConnect = (params: Connection) => {
    addNewEdge({
      id: `${params.source}-${params.target}`,
      source: params.source!,
      target: params.target!,
    });
  };

  const onCanvasClick = (event: any) => {
    if (!pendingNodeType) return;

    const bounds = event.currentTarget.getBoundingClientRect();

    const position = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };

    addNode({
      id: `${pendingNodeType}-${Date.now()}`,
      type: pendingNodeType,
      position,
      data: { label: `${pendingNodeType} node` },
    });

    setPendingNodeType(null);
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        onClick={onCanvasClick}
        onNodeClick={(_, node) => selectNode(node)}
        fitView
        proOptions={{ hideAttribution: true }}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        snapToGrid={true}
        snapGrid={[10, 10]}
        minZoom={0.4}
        maxZoom={1.6}
        nodesDraggable={true}
        nodesConnectable={true}
        elementsSelectable={true}
        defaultEdgeOptions={{
          type: "smoothstep",
          animated: true,
          markerEnd: {
            type: "arrow",
          },
          style: {
            stroke: "#4b5563",
            strokeWidth: 2,
          },
        }}
      >
        <Background />

        <MiniMap
          style={{
            background: "#ffffff",
            borderRadius: "6px",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
          }}
          nodeColor={(node) => {
            switch (node.type) {
              case "start":
                return "#10b981";
              case "task":
                return "#3b82f6";
              case "approval":
                return "#f59e0b";
              case "automated":
                return "#8b5cf6";
              case "end":
                return "#6b7280";
              default:
                return "#999999";
            }
          }}
        />

        <Controls />
      </ReactFlow>
    </div>
  );
}
