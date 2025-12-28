import { IndicAvatar } from "../IndicAvatar"
import indicAvatarSource from "../IndicAvatar.tsx?raw"

export const indicAvatarExample = {
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
}

