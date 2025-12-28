import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-foreground">शैली</span>
            <span className="text-muted-foreground">-UI</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Beautiful Indian-style UI components for React
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            A modern component library inspired by Indian design aesthetics. 
            Copy, customize, and build beautiful interfaces with ease.
          </p>
          <Link
            to="/components"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Explore Components
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

