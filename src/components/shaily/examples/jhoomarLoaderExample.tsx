import { JhoomarLoader } from "../JhoomarLoader"
import jhoomarLoaderSource from "../JhoomarLoader.tsx?raw"

export const jhoomarLoaderExample = {
  component: (
    <div className="flex items-center justify-center gap-8">
      <JhoomarLoader size="sm" />
      <JhoomarLoader size="md" />
      <JhoomarLoader size="lg" />
    </div>
  ),
  code: `
import { JhoomarLoader } from "@/components/shaily";

export function JhoomarLoaderExample() {
  return (
  <JhoomarLoader size="sm" />
  <JhoomarLoader size="md" />
  <JhoomarLoader size="lg" />
  )
}`,
  sourceCode: jhoomarLoaderSource,
}

