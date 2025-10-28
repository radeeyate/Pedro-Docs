import type {BaseLayoutProps, LinkItemType} from 'fumadocs-ui/layouts/shared';
import {GithubInfo} from "fumadocs-ui/components/github-info";
import Discord from "@/app/Discord";
import {NavigationMenuItem} from "fumadocs-ui/components/ui/navigation-menu";

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
                <img className="size-10 dark:hidden" src={`${process.env.BASE_PATH}/logo-light.png`}
                     alt="Pedro Pathing Logo"/>
                <img className="size-10 hidden dark:inline" src={`${process.env.BASE_PATH}/logo.png`}
                     alt="Pedro Pathing Logo"/>

                <span>Pedro Pathing</span>
            </>
        ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
        {
            text: "Discord",
            url: "https://discord.gg/2GfC4qBP5s",
            icon: <Discord/>,
            type: 'icon'
        },
        {
            text: "Visualizer",
            url: "https://visualizer.pedropathing.com",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                </svg>
            )
        },
    ],
    githubUrl: "https://github.com/Pedro-Pathing/Docs"
};
