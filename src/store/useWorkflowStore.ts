import { create } from "zustand";

type NodeType = any;
type EdgeType = any;

interface WorkflowState {
  nodes: NodeType[];
  edges: EdgeType[];
  selectedNode: NodeType | null;

  pendingNodeType: string | null;
  setPendingNodeType: (type: string | null) => void;

  addNode: (node: NodeType) => void;
  addNewEdge: (edge: EdgeType) => void;
  updateNode: (id: string, update: any) => void;

  selectNode: (node: NodeType | null) => void;
}

export const useWorkflowStore = create<WorkflowState>((set) => ({
  nodes: [],
  edges: [],
  selectedNode: null,

  pendingNodeType: null,
  setPendingNodeType: (type: string | null) => set({ pendingNodeType: type }),

  addNode: (node: NodeType) =>
    set((state) => ({
      nodes: [...state.nodes, node],
    })),

  addNewEdge: (edge: EdgeType) =>
    set((state) => ({
      edges: [...state.edges, edge],
    })),

  updateNode: (id: string, update: any) =>
    set((state) => {
      const updatedNodes = state.nodes.map((node: any) =>
        node.id === id
          ? {
              ...node,
              data: {
                ...(node.data || {}),
                ...(update || {}),
              },
            }
          : node
      );

      const updatedSelected =
        state.selectedNode && state.selectedNode.id === id
          ? {
              ...state.selectedNode,
              data: {
                ...(state.selectedNode.data || {}),
                ...(update || {}),
              },
            }
          : state.selectedNode;

      return {
        nodes: updatedNodes,
        selectedNode: updatedSelected,
      };
    }),

  selectNode: (node: NodeType | null) => set({ selectedNode: node }),
}));
