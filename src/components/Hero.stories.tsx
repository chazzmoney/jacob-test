import type { Meta, StoryObj } from "@storybook/react";
import HomePageHeroSection from "~/components/Hero";

const meta = {
  title: "Components/HomePageHeroSection",
  component: HomePageHeroSection,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof HomePageHeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};