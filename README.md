

#  **HR Workflow Designer — Visual Workflow Builder (React + React Flow + Zustand)**

A fully interactive HR workflow designer that allows admins to **drag, drop, configure, simulate, and test HR processes** such as onboarding, approvals, document verification, automation steps, and more.

Built using **React**, **TypeScript**, **React Flow**, and **Zustand**, this project demonstrates:

* Scalable state management
* Custom React Flow nodes
* Interactive canvas with snapping + zoom
* Realistic workflow simulation
* Dynamic node configuration panel
* Mock API integration
* Clean, modular architecture

---

# Preview (Screenshots Placeholder)

> Replace below with real screenshots once the app is deployed

```
/screenshots
  ├── canvas.png
  ├── nodes.png
  ├── config-panel.png
  └── simulation.png
```

---

#  **Features**

###  1. Drag & Drop Node Creation

* Start, Task, Approval, Automated, and End nodes
* Nodes placed exactly where user clicks
* Snapping grid for precision

###  2. Custom Node Components

Each node has its own UI & color theme:

* 🟢 Start Node
* 🔵 Task Node
* 🟠 Approval Node
* 🟣 Automated Node
* ⚫ End Node

### � 3. Dynamic Node Configuration Panel

Based on selected node type, shows appropriate fields:

* Task → description, assignee
* Approval → approver role, auto-approve threshold
* Automated → dropdown of mock automation actions

### 📡 4. Mock API Integration

Simulates:

* Fetching automation actions
* Executing workflow and showing step-by-step results

###  5. Workflow Simulation Engine

Simulates workflow top-to-bottom, ordered by Y-position.

###  6. MiniMap, Zoom, Pan, and Controls

Fully interactive editor experience.

###  7. Edge Features

* Smooth curved edges
* Arrow markers
* Animated connections

### 💾 8. Scalable State (Zustand)

* Central workflow store
* Nodes & edges persisted in memory
* Selected node tracked globally

---

#  **Project Architecture**

```
src/
  ├── components/
  │     ├── WorkflowCanvas.tsx
  │     ├── Sidebar.tsx
  │     ├── NodeConfigPanel.tsx
  │     └── nodes/
  │           ├── StartNode.tsx
  │           ├── TaskNode.tsx
  │           ├── ApprovalNode.tsx
  │           ├── AutomatedNode.tsx
  │           └── EndNode.tsx
  │
  ├── api/
  │     └── mockApi.ts
  │
  ├── store/
  │     └── useWorkflowStore.ts
  │
  ├── App.tsx
  ├── index.tsx
  └── index.css
```

---

#  **Tech Stack**

| Layer            | Technology                         |
| ---------------- | ---------------------------------- |
| Frontend         | React + TypeScript                 |
| Workflow Engine  | React Flow                         |
| State Management | Zustand                            |
| Styling          | CSS + Inline Node Styles           |
| Mock APIs        | Local promise-based fake endpoints |
| Build            | Vite / CodeSandbox                 |

---

#  **How to Run Locally**

Clone the repo:

```sh
git clone https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
cd <REPO_NAME>
```

Install dependencies:

```sh
npm install
```

Start development:

```sh
npm run dev
```

Visit:

```
http://localhost:5173
```

---

#  **How to Use**

### 1. Open the Sidebar

Choose a node type → click "Add Node".

### 2. Place Node on Canvas

Click anywhere on canvas → new node appears.

### 3. Edit Node

Click on a node → configuration panel opens.

### 4. Connect Nodes

Drag handle from one node → drop on another.

### 5. Simulate

Open simulation panel → press "Run Simulation".

---

#  **What’s Implemented**

✔ Dynamic nodes
✔ Config panel
✔ MiniMap
✔ Smooth arrows
✔ Snapping
✔ Workflow simulation
✔ Pending node placement
✔ Mock API data
✔ Clean store architecture
✔ Modern UI look

---

#  **What Can Be Added (Future Enhancements)**

* Export/Import Workflow JSON
* Undo/Redo
* Auto-layout (Dagre or ELK)
* Error validation on nodes
* Collapsible mini-map
* Templates for HR processes
* Workspace persistence
* User authentication

These can all be added if needed.

---

#  **GitHub Push Commands**

If you downloaded ZIP:

```sh
git init
git add .
git commit -m "Initial commit: HR Workflow Designer"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO>.git
git push -u origin main
```

If CodeSandbox exported directly → repo already exists.

---

#  **Commit Message Template**

Use this for structured commits:

```
feat: add <feature name>
fix: resolve <bug>
refactor: improve <code section>
style: update styling for <component>
docs: update README
```

Example:

```
feat: add workflow simulation engine
```

