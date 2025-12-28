import { Navbar } from "../Navbar"
import navbarSource from "../Navbar.tsx?raw"

export const navbarExample = {
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
}

