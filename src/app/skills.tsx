"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function SkillRadarChart() {
  return (
    <ChartContainer
      config={{
        level: {
          label: "Level",
        },
      }}
      className="mx-auto max-h-[300px]"
    >
      <RadarChart
        data={[
          { name: "AI engineering", level: 9 },
          { name: "Product engineering", level: 9 },
          { name: "System design & EDA", level: 9 },
          { name: "Frontend (React/Next)", level: 10 },
          { name: "Backend (Node/TS)", level: 9 },
          { name: "Testing & observability", level: 8 },
        ]}
      >
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <PolarAngleAxis dataKey="name" />
        <PolarGrid />
        <Radar dataKey="level" fill="hsl(var(--primary))" fillOpacity={0.6} />
      </RadarChart>
    </ChartContainer>
  );
}
