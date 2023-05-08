import { type NextPage } from "next";

import { Cards } from "~/components/cards";
import { Features } from "~/components/features";
import { Hero } from "~/components/hero";
import { Layout } from "~/components/layout";
import { env } from "~/env.mjs";
import {
  fetchHeroBlock,
  type FetchHeroBlockResponse,
} from "~/server/cms/blocks/hero";
import {
  fetchWebSiteData,
  type FetchWebSiteDataResponse,
} from "~/server/cms/site";
import { api } from "~/utils/api";

interface ServerSideProps {
  siteData: FetchWebSiteDataResponse;
  hero: FetchHeroBlockResponse;
  error?: string;
}

// This is an example of how to fetch data from the CMS at build time
export async function getServerSideProps() {
  const siteData = await fetchWebSiteData(env.CMS_SITE_ID);
  const hero = await fetchHeroBlock();

  const error = siteData.error || hero.error || null;
  return {
    props: {
      siteData,
      hero,
      error,
    },
  };
}

const Home: NextPage<ServerSideProps> = (props) => {
  // tRPC query runs on the client side (Next.js API route)
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  if (props.error) {
    console.error(props);
  }

  // Provides a fallback if the CMS is not available
  const siteName = props.siteData?.data?.name || "Nexus UI Seed";
  const ogData = props.siteData?.data?.openGraphData || {
    title: siteName,
    description: "Savantly Nexus UI Seed",
    image: "/images/og-image.jpg",
    keywords: "savantly, nexus, ui, seed",
  };
  const hero = props.hero?.data?.content;

  const head = (
    <>
      <title>{ogData.title}</title>
      <meta name="description" content={ogData.description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
  return (
    <>
      <Layout head={head}>
        <div className="container mx-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            {siteName} Starter
          </h1>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
          </div>
        </div>
        <Hero
          description={hero?.description}
          headerText={hero?.headerText}
          imageUrl={hero?.imageUrl}
          link={hero?.link}
          tagline={hero?.tagline}
        />
        <Cards />
        <Features />
      </Layout>
    </>
  );
};

export default Home;
