import { Link } from "react-router-dom"
import { Home } from "lucide-react"
import type { ComponentMetadata } from "@/lib/component-registry"

interface ComponentSidebarProps {
  components: ComponentMetadata[]
  selectedComponent: string
  onSelectComponent: (id: string) => void
}

export default function ComponentSidebar({
  components,
  selectedComponent,
  onSelectComponent,
}: ComponentSidebarProps) {
  return (
    <div className="w-64 border-r border-border bg-card">
      <div className="p-4 border-b border-border">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="text-foreground">शैली</span>
          <span className="text-muted-foreground">-UI</span>
        </Link>
      </div>
      <div className="p-4">
        <Link
          to="/"
          className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors mb-4"
        >
          <Home className="w-4 h-4" />
          Home
        </Link>
        <div className="space-y-1">
          <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Components
          </p>
          {components.map((component) => (
            <button
              key={component.id}
              onClick={() => onSelectComponent(component.id)}
              className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                selectedComponent === component.id
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-accent/50"
              }`}
            >
              {component.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

