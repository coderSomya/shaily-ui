import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Components from "./pages/Components"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
