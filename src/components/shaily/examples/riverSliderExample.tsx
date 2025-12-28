import { RiverSlider } from "../RiverSlider"
import { SharpanCard } from "../SharpanCard"
import riverSliderSource from "../RiverSlider.tsx?raw"

export const riverSliderExample = {
  component: (
    <div className="w-full">
      <RiverSlider
        speed={25}
        items={[
          <SharpanCard title="Rig" theme="saffron" className="w-64">The first of the Vedas, knowledge of verses.</SharpanCard>,
          <SharpanCard title="Sama" theme="indigo" className="w-64">Knowledge of the melodies and chants.</SharpanCard>,
          <SharpanCard title="Yajur" theme="emerald" className="w-64">Knowledge of the sacrificial rituals.</SharpanCard>,
          <SharpanCard title="Atharva" theme="crimson" className="w-64">Knowledge of the daily life procedures.</SharpanCard>,
        ]}
      />
    </div>
  ),
  code: `import { RiverSlider, SharpanCard } from "@/components/shaily"
  export function RiverSliderExample() {
    return <div className="w-full">
        <RiverSlider
          speed={25}
          items={[
            <SharpanCard title="Rig" theme="saffron" className="w-64">The first of the Vedas, knowledge of verses.</SharpanCard>,
            <SharpanCard title="Sama" theme="indigo" className="w-64">Knowledge of the melodies and chants.</SharpanCard>,
            <SharpanCard title="Yajur" theme="emerald" className="w-64">Knowledge of the sacrificial rituals.</SharpanCard>,
            <SharpanCard title="Atharva" theme="crimson" className="w-64">Knowledge of the daily life procedures.</SharpanCard>,
          ]}
        />
      </div>
  }`,
  sourceCode: riverSliderSource,
}

