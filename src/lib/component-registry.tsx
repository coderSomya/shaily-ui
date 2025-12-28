import type { ReactElement } from "react"
import { Button } from "@/components/ui/button"
import {
  weddingCardExample,
  indicAvatarExample,
  navbarExample,
  chatExample,
  jhoomarLoaderExample,
  paisleyDividerExample,
  swastikLoaderExample,
  riverSliderExample,
  threeDCardExample,
} from "@/components/shaily/examples"
import buttonSource from "@/components/ui/button.tsx?raw"

export interface ComponentMetadata {
  id: string
  name: string
  category?: string
  description?: string
}

export interface ComponentRegistryItem extends ComponentMetadata {
  component: ReactElement
  code: string // Usage example code
  sourceCode: string // Actual component source code (loaded dynamically)
}

// Registry of all Shaily UI components
export const shailyComponents: ComponentRegistryItem[] = [
  {
    id: "wedding-card",
    name: "Wedding Card",
    category: "Cards",
    description: "A beautiful Indian-style wedding invitation card",
    component: weddingCardExample.component,
    code: weddingCardExample.code,
    sourceCode: weddingCardExample.sourceCode,
  },
  {
    id: "indic-avatar",
    name: "Indic Avatar",
    category: "Display",
    description: "A premium Indian-style avatar component that celebrates cultural diversity.",
    component: indicAvatarExample.component,
    code: indicAvatarExample.code,
    sourceCode: indicAvatarExample.sourceCode,
  },
  {
    id: "navbar",
    name: "Navbar",
    category: "Navigation",
    description: "A premium Indian-style navbar component that celebrates cultural diversity.",
    component: navbarExample.component,
    code: navbarExample.code,
    sourceCode: navbarExample.sourceCode,
  },
  {
    id: "chat",   
    name: "Chat",
    category: "Communication",
    description: "A premium Indian-style chat component that celebrates cultural diversity.",
    component: chatExample.component,
    code: chatExample.code,
    sourceCode: chatExample.sourceCode,
  },
  {
    id: "jhoomar-loader",
    name: "Jhoomar Loader",
    category: "Loading",
    description: "A premium Indian-style loader component that celebrates cultural diversity.",
    component: jhoomarLoaderExample.component,
    code: jhoomarLoaderExample.code,
    sourceCode: jhoomarLoaderExample.sourceCode,
 },
 {
  id: "paisley-divider",
  name: "Paisley Divider",
  category: "Layout",
  description: "A premium Indian-style divider component that celebrates cultural diversity.",
    component: paisleyDividerExample.component,
    code: paisleyDividerExample.code,
    sourceCode: paisleyDividerExample.sourceCode,
 },
 {
  id: "swastik-loader",
  name: "Swastik Loader",
  category: "Loading",
  description: "A premium Indian-style loader component that celebrates cultural diversity.",
  component: swastikLoaderExample.component,
  code: swastikLoaderExample.code,
  sourceCode: swastikLoaderExample.sourceCode,
 },
 {
  id: "river-slider",
  name: "River Slider",
  category: "Display",
  description: "A premium Indian-style slider component that celebrates cultural diversity.",
  component: riverSliderExample.component,
  code: riverSliderExample.code,
  sourceCode: riverSliderExample.sourceCode,
 },
 {
  id: "three-d-card",
  name: "Three D Card",
  category: "Cards",
  description: "A premium Indian-style card component that celebrates cultural diversity.",
  component: threeDCardExample.component,
  code: threeDCardExample.code,
  sourceCode: threeDCardExample.sourceCode,
 }
]

// Registry of UI components (from components/ui)
export const uiComponents: ComponentRegistryItem[] = [
  {
    id: "button",
    name: "Button",
    category: "Form",
    description: "A versatile button component with multiple variants",
    component: (
      <div className="flex gap-4">
        <Button variant="default">Default Button</Button>
        <Button variant="outline">Outline Button</Button>
      </div>
    ),
    code: `import { Button } from "@/components/ui/button"

export function ButtonExample() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Default Button</Button>
      <Button variant="outline">Outline Button</Button>
    </div>
  )
}`,
    sourceCode: buttonSource,
  },
]

// Combined registry
export const allComponents: ComponentRegistryItem[] = [
  ...shailyComponents,
  ...uiComponents,
]

// Helper to get component by id
export function getComponentById(id: string): ComponentRegistryItem | undefined {
  return allComponents.find((comp) => comp.id === id)
}

// Helper to get components by category
export function getComponentsByCategory(
  category: string
): ComponentRegistryItem[] {
  return allComponents.filter((comp) => comp.category === category)
}

