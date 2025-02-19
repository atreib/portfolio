"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  type ChartConfig,
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
      className="mx-auto max-h-[250px]"
    >
      <RadarChart
        data={[
          { name: "Web development", level: 10 },
          { name: "Backend development", level: 8 },
          { name: "Mobile development", level: 6 },
          { name: "DevOps", level: 6 },
          { name: "Product management", level: 8 },
          { name: "Team management", level: 7 },
          { name: "Being a jerk", level: 1 },
          { name: "Being a cool dude", level: 10 },
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
