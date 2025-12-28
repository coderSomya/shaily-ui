import { Chat } from "../Chat"
import chatSource from "../Chat.tsx?raw"

export const chatExample = {
  component: <Chat />,
  code: `import { Chat } from "@/components/shaily"

export function ChatExample() {
  return <Chat />
}`,
  sourceCode: chatSource,
}

