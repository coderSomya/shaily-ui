import { ThreeDCard } from "../3DCard"
import threeDCardSource from "../3DCard.tsx?raw"

export const threeDCardExample = {
  component: <ThreeDCard />,
  code: `import { ThreeDCard } from "@/components/shaily"
  export function ThreeDCardExample() {
    return <ThreeDCard />
  }`,
  sourceCode: threeDCardSource,
}