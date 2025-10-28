import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { GithubInfo } from "fumadocs-ui/components/github-info";
import Discord from "@/app/Discord";
import Visualizer from './VisualizerIcon';
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img className="size-10 dark:hidden" src={`${process.env.BASE_PATH}/logo-light.png`} alt="Pedro Pathing Logo" />
        <img className="size-10 hidden dark:inline" src={`${process.env.BASE_PATH}/logo.png`} alt="Pedro Pathing Logo" />

        <span>Pedro Pathing</span>
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      text: "Visualizer",
      url: "https://visualizer.pedropathing.com/",
      icon: <Visualizer />,
      type: 'icon'
    },
    {
      type: 'custom',
      children: (
        <GithubInfo owner="Pedro-Pathing" repo="PedroPathing" className="lg:-mx-2" />
      ),
    },
    {
      text: "Discord",
      url: "https://discord.gg/2GfC4qBP5s",
      icon: <Discord />,
      type: 'icon'
    },

  ],
  githubUrl: "https://github.com/Pedro-Pathing/Docs"
};
