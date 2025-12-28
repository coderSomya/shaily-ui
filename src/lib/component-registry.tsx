import type { ReactElement } from "react"
import { WeddingCard, IndicAvatar, Navbar, Chat } from "@/components/shaily"
import { Button } from "@/components/ui/button"

// Import source code as raw text
import weddingCardSource from "@/components/shaily/WeddingCard.tsx?raw"
import indicAvatarSource from "@/components/shaily/IndicAvatar.tsx?raw"
import buttonSource from "@/components/ui/button.tsx?raw"
import navbarSource from "@/components/shaily/Navbar.tsx?raw"
import chatSource from "@/components/shaily/Chat.tsx?raw"

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
    component: <WeddingCard />,
    code: `import { WeddingCard } from "@/components/shaily"

export function WeddingCardExample() {
  return <WeddingCard />
}`,
    sourceCode: weddingCardSource,
  },
  {
    id: "indic-avatar",
    name: "Indic Avatar",
    category: "Display",
    description: "A premium Indian-style avatar component that celebrates cultural diversity.",
    component: (
      <div className="flex flex-col items-center gap-24 p-20 bg-white dark:bg-zinc-950 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 shadow-sm max-w-2xl mx-auto w-full">
        <IndicAvatar 
          region="kashmir" 
          variant="royal"
          name="Zoya Ahmed" 
          caption="Srinagar, JK"
          fallback="ZA"
          image="/avatars/kashmir.jpeg"
        />
        <IndicAvatar 
          region="punjab" 
          variant="saffron"
          name="Aman Singh" 
          caption="Amritsar, PB"
          fallback="AS"
          image="/avatars/punjab.jpeg"
        />
        <IndicAvatar 
          region="bengal" 
          variant="corporate" 
          name="Sayali Chakraborty" 
          caption="Kolkata, WB"
          fallback="SC"
          image="/avatars/bengal.jpeg"
        />
        <IndicAvatar 
          region="south" 
          variant="classic" 
          name="Meera Iyer" 
          caption="Chennai, TN"
          fallback="MI"
          image="/avatars/south.jpeg"
        />
      </div>
    ),
    code: `import { IndicAvatar } from "@/components/shaily"

export function IndicAvatarExample() {
  return (
    <div className="flex flex-col items-center gap-16">
      <IndicAvatar 
        region="kashmir" 
        variant="royal"
        name="Zoya Ahmed" 
        caption="Srinagar, JK"
        fallback="ZA"
        image="/avatars/kashmir.jpeg"
      />
      <IndicAvatar 
        region="punjab" 
        variant="saffron"
        name="Aman Singh" 
        caption="Amritsar, PB"
        fallback="AS"
        image="/avatars/punjab.jpeg"
      />
      <IndicAvatar 
        region="bengal" 
        variant="corporate" 
        name="Sayali Chakraborty" 
        caption="Kolkata, WB"
        fallback="SC"
        image="/avatars/bengal.jpeg"
      />
      <IndicAvatar 
        region="south" 
        variant="classic" 
        name="Meera Iyer" 
        caption="Chennai, TN"
        fallback="MI"
        image="/avatars/south.jpeg"
      />
    </div>
  )
}`,
    sourceCode: indicAvatarSource,
  },
  {
    id: "navbar",
    name: "Navbar",
    category: "Navigation",
    description: "A premium Indian-style navbar component that celebrates cultural diversity.",
    component: (
      <Navbar
        brand="SANSKRITI"
        navItems={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Contact", href: "/contact" },
        ]}
      />
    ),
    code: `
    import { Navbar } from "@/components/shaily"

    export function NavbarExample() {
      return (
        <Navbar
          brand="SANSKRITI"
          navItems={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Contact", href: "/contact" },
          ]}
        />
      )
    }
  `,
    sourceCode: navbarSource,
  },
  {
    id: "chat",   
    name: "Chat",
    category: "Communication",
    description: "A premium Indian-style chat component that celebrates cultural diversity.",
    component: <Chat />,
    code: `import { Chat } from "@/components/shaily"

    export function ChatExample() {
      return <Chat />
    }`,
    sourceCode: chatSource,
  },
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

