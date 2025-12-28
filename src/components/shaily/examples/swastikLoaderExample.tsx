import { SwastikLoader } from "../SwastikLoader"
import swastikLoaderSource from "../SwastikLoader.tsx?raw"

export const swastikLoaderExample = {
  component: (
    <div className="flex items-center justify-center gap-8">
      <SwastikLoader size={150} color="red" speed={3} />
      <SwastikLoader size={80} color="green" speed={3} />
      <SwastikLoader size={50} color="orange" speed={3} />
    </div>
  ),
  code: `import { SwastikLoader } from "@/components/shaily"
  export function SwastikLoaderExample() {
    return (
    <div className="flex items-center justify-center gap-8">
      <SwastikLoader size={150} color="red" speed={3} />
      <SwastikLoader size={80} color="green" speed={3} />
      <SwastikLoader size={50} color="orange" speed={3} />
    </div>
    )
  }`,
  sourceCode: swastikLoaderSource,
}

