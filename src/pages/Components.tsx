import { useState, useEffect } from "react"
import { Copy, Check } from "lucide-react"
import ComponentSidebar from "@/components/ComponentSidebar"
import CodeEditor from "@/components/CodeEditor"
import LivePreview from "@/components/LivePreview"
import { allComponents, getComponentById, type ComponentMetadata } from "@/lib/component-registry"

type CodeView = "usage" | "source"

export default function Components() {
  const [selectedComponent, setSelectedComponent] = useState(allComponents[0]?.id || "")
  const [copied, setCopied] = useState(false)
  const [codeView, setCodeView] = useState<CodeView>("usage")

  const currentComponent = getComponentById(selectedComponent)

  const handleCopy = async () => {
    const codeToCopy = currentComponent 
      ? (codeView === "usage" ? currentComponent.code : currentComponent.sourceCode)
      : ""
    
    if (codeToCopy) {
      await navigator.clipboard.writeText(codeToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const currentCode = currentComponent 
    ? (codeView === "usage" ? currentComponent.code : currentComponent.sourceCode)
    : "// No component selected"

  const componentList: ComponentMetadata[] = allComponents.map((comp) => ({
    id: comp.id,
    name: comp.name,
    category: comp.category,
    description: comp.description,
  }))

  // Scroll to top when component changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [selectedComponent])

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - Fixed/Sticky */}
      <aside className="w-64 border-r border-border bg-card hidden md:block sticky top-0 h-screen">
        <ComponentSidebar
          components={componentList}
          selectedComponent={selectedComponent}
          onSelectComponent={setSelectedComponent}
        />
      </aside>

      {/* Main Content Area - Scrollable */}
      <main className="flex-1 min-w-0">
        <div className="flex flex-col">
          {/* Header & Preview Section */}
          <section className="p-6 md:p-12 border-b border-border">
            <div className="max-w-5xl mx-auto space-y-8">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground">
                  {currentComponent?.name || "Component Preview"}
                </h1>
                {currentComponent?.description && (
                  <p className="text-lg text-muted-foreground mt-3 max-w-2xl">
                    {currentComponent.description}
                  </p>
                )}
              </div>

              {/* Preview Container */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-red-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-1 bg-muted/50 rounded-2xl border border-border overflow-hidden">
                  <div className="p-8 md:p-16 flex items-center justify-center bg-background rounded-xl">
                    <LivePreview componentId={selectedComponent} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Code Section */}
          <section className="p-6 md:p-12 bg-muted/20">
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex p-1 bg-muted rounded-xl border border-border shadow-sm">
                  <button
                    onClick={() => setCodeView("usage")}
                    className={`px-5 py-2 text-sm font-medium rounded-lg transition-all ${
                      codeView === "usage"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Usage
                  </button>
                  <button
                    onClick={() => setCodeView("source")}
                    className={`px-5 py-2 text-sm font-medium rounded-lg transition-all ${
                      codeView === "source"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Source Code
                  </button>
                </div>

                <button
                  onClick={handleCopy}
                  disabled={!currentComponent}
                  className="flex items-center gap-2 px-5 py-2 text-sm font-medium bg-foreground text-background hover:bg-foreground/90 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Code
                    </>
                  )}
                </button>
              </div>

              {/* Code Editor Container */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-2xl bg-[#282c34] h-[600px]">
                <CodeEditor
                  value={currentCode}
                  onChange={() => {}}
                  readOnly={true}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
