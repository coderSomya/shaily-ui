import { ErrorBoundary } from "react-error-boundary"
import { getComponentById } from "@/lib/component-registry"

interface LivePreviewProps {
  componentId: string
}

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md">
      <h3 className="text-sm font-semibold text-destructive mb-2">Error Rendering Component</h3>
      <pre className="text-xs text-destructive/80 whitespace-pre-wrap font-mono">
        {error.message}
      </pre>
    </div>
  )
}

export default function LivePreview({ componentId }: LivePreviewProps) {
  const componentItem = getComponentById(componentId)

  if (!componentItem) {
    return (
      <div className="p-4 text-sm text-muted-foreground">
        Component not found: {componentId}
      </div>
    )
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} key={componentId}>
      <div className="w-full h-full flex items-center justify-center">
        {componentItem.component}
      </div>
    </ErrorBoundary>
  )
}
