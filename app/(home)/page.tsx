import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '',
  openGraph: {
    url: 'https://pedropathing.com',
    images: [
      {
        url: 'https://pedropathing.com/banner.png',
        width: 1200,
        height: 200,
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function HomePage() {

  const code = `path = follower.pathBuilder()
    .addPath(new BezierLine(scorePose, pickup1Pose))
    .setLinearHeadingInterpolation(scorePose.getHeading(), pickup1Pose.getHeading())
    .addPath(new BezierLine(pickup1Pose, scorePose))
    .setLinearHeadingInterpolation(pickup1Pose.getHeading(), scorePose.getHeading())
    .build();
    
follower.followPath(path);`;

  return (
    <main className="py-8 xl:pb-0 flex justify-center">
      <div className="w-300 mx-5 xl:mx-0 max-w-300 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 xl:mb-16">Pedro Pathing</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <span className="text-lg">Autonomous pathing made easy...</span>
            <h2 className="text-3xl mt-2 font-bold">A path follower
              designed to
              revolutionize autonomous pathing in robotics.</h2>
          </div>
          <DynamicCodeBlock lang="java" code={code} />
        </div>
        <div className="my-16">
          <p className="mb-4 max-w-[75ch] mx-auto text-lg">
            Unlike conventional pathing systems such as RoadRunner, Pedro Pathing leverages Bézier curve
            generation to produce smoother, faster, and more efficient trajectories.
          </p>
          <p className="max-w-[75ch] mx-auto text-lg">
            Its primary focus is on
            enhancing the adaptability of robots during autonomous operation by reacting dynamically to
            environmental changes, reducing error margins, and ensuring optimal path execution.
          </p>
        </div>
        <div className="flex flex-col md:flex-row xl:gap-4">
          <Link href="/docs/pathing"
            className="flex mt-5 xl:mt-10 mb-2 items-center justify-center text-lg font-medium ring-offset-fd-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring bg-gradient-to-b from-fd-primary-foreground to-fd-primary-foreground/60 text-fd-primary shadow-fd-background/20 hover:bg-fd-primary-foreground/90 border-fd-primary border hover:opacity-80 h-13 px-7 rounded-full">
            Get Started with Pedro Pathing
          </Link>
          {/*                    <Link href="/docs/panels"
                          className="flex mt-5 xl:mt-10 mb-2 items-center justify-center text-lg font-medium ring-offset-fd-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring bg-gradient-to-b from-fd-primary-foreground to-fd-primary-foreground/60 text-fd-primary shadow-fd-background/20 hover:bg-fd-primary-foreground/90 border-fd-primary border hover:opacity-80 h-13 px-7 rounded-full">
                        Panels
                    </Link> */}
          <a href="https://github.com/Pedro-Pathing/PedroPathing" target="_blank" rel="noreferrer"
            className="flex gap-2 mt-5 xl:mt-10 mb-2 items-center justify-center text-lg font-medium shadow-fd-background/20 h-13 px-7 rounded-full hover:bg-fd-card transition-colors duration-150">
            <svg className="size-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>GitHub</title>
              <path fill="currentColor"
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            Star on GitHub
          </a>
          <a href="https://visualizer.pedropathing.com/" target="_blank" rel="noreferrer"
            className="flex gap-2 mt-5 xl:mt-10 mb-2 items-center justify-center text-lg font-medium shadow-fd-background/20 h-13 px-7 rounded-full hover:bg-fd-card transition-colors duration-150">
            <svg className="size-6" role="img" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Visualizer</title>
              <path d="M45.5 0C20.6871 0 0.5 19.0663 0.5 42.5015C0.5 65.2918 38.2329 115.816 40 117.956C40 117.956 42 120 45.5 120C49 120 50 117.956 50 117.956C51.7671 115.816 90.5 65.2918 90.5 42.5015C90.5 19.0663 70.3129 0 45.5 0ZM45.5 24.2866C56.1343 24.2866 64.7857 32.4577 64.7857 42.5015C64.7857 52.5454 56.1343 60.7165 45.5 60.7165C34.8657 60.7165 26.2143 52.5454 26.2143 42.5015C26.2143 32.4577 34.8657 24.2866 45.5 24.2866Z" fill="currentColor" />
              <path d="M73.293 111.51C78.8871 114.808 84.0973 120.078 88.5 128.501L161.661 147.001C164.44 144.675 167.273 142.94 169.5 142.002C179 138.001 209 127.002 237.5 142.002C266 157.002 258 180.002 235 190.002C212 200.002 185.5 194.502 174 190.002L142.017 208.002C146.919 212.251 150 217.558 150 224.002C150 244.502 125.5 255.502 101.5 255.502C61.0003 255.502 44.5002 238.914 44.5 224.002C44.5 209.09 68.5 194.502 97 194.502C106.343 194.502 117.405 196.152 127 199.65L159 181.502C150.61 174.188 149.625 166.596 151.982 160.001L87.5 144.001C80.4999 157 64.4998 165.001 47 165.001C29.5 165.001 0 156.499 0 137C0 125.484 6.27881 116.759 16.9814 111.544C22.8515 120.185 27.5058 126.383 28.4336 127.507L28.8359 127.994L29.2783 128.446L40 117.956C29.434 128.294 29.2849 128.448 29.2871 128.455C29.2886 128.457 29.2929 128.462 29.2959 128.465L29.4316 128.601C29.4856 128.654 29.5431 128.71 29.6035 128.769C29.7246 128.885 29.8583 129.012 30.0059 129.146C30.3005 129.414 30.6521 129.716 31.0596 130.038C31.8686 130.678 32.9363 131.428 34.2588 132.148C36.918 133.598 40.7461 135 45.5 135C50.3991 135 54.6771 133.494 58.0107 131.017C59.5829 129.848 60.7714 128.592 61.6475 127.461C61.8405 127.212 62.0177 126.966 62.1826 126.729C63.8497 124.597 68.1031 118.968 73.293 111.51ZM40.2559 118.182C40.1918 118.128 40.1377 118.085 40.0977 118.049L40.0928 118.044C40.1334 118.081 40.1891 118.126 40.2559 118.182ZM39.6738 117.541C39.6123 117.461 39.5439 117.372 39.4688 117.273C39.5439 117.372 39.6123 117.461 39.6738 117.541ZM39.082 116.763C38.9978 116.651 38.9086 116.532 38.8145 116.406C38.9086 116.532 38.9978 116.651 39.082 116.763ZM38.1885 115.564C38.0927 115.435 37.9928 115.302 37.8906 115.163C37.9928 115.302 38.0927 115.435 38.1885 115.564Z" fill="currentColor" />
            </svg>
            Use the Visualizer
          </a>
        </div>
      </div>
    </main>
  );
}
