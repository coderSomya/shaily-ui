import { PaisleyDivider } from "../PaisleyDivider"
import paisleyDividerSource from "../PaisleyDivider.tsx?raw"

export const paisleyDividerExample = {
  component: (
    <div className="flex flex-col gap-6 w-full">
      <PaisleyDivider variant="simple" />
      <PaisleyDivider variant="ornate" />
      <PaisleyDivider variant="dots" />
    </div>
  ),
  code: `
  import { PaisleyDivider } from "@/components/shaily";

  export function PaisleyDividerExample() {
  return (
<PaisleyDivider variant="simple" />
<PaisleyDivider variant="ornate" />
<PaisleyDivider variant="dots" />
  )
}
`,
  sourceCode: paisleyDividerSource,
}

