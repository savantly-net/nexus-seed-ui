import Image from "next/image";

export interface HeroProps {
  headerText?: string;
  tagline?: string;
  imageUrl?: string;
  description?: string;
  link?: {
    display: string;
    url: string;
  }
}


export const Hero = (props: HeroProps) => {

  const headerText = props.headerText || "Header Text";
  const tagline = props.tagline || "Tagline";
  const imageUrl = props.imageUrl || "https://dummyimage.com/1200x500";
  const description = props.description || "Description";
  const link = props.link || {
    display: "Learn More",
    url: "https://savantly.net"
  };

  return (
    <section className="body-font ">
      <div className="container mx-auto flex flex-col px-5 py-24">
        <div className="mx-auto">
          <div className="h-64 overflow-hidden rounded-lg">
            <Image alt="hero image" width={1200} height={500} className="object-cover object-center h-full w-full" src={imageUrl} />
          </div>
          <div className="mt-10 flex flex-col sm:flex-row">
            <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-200">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="title-font mt-4 text-lg font-medium ">
                  {headerText}
                </h2>
                <div className="mb-4 mt-2 h-1 w-12 rounded bg-indigo-500"></div>
                <p className="text-base ">
                  {tagline}
                </p>
              </div>
            </div>
            <div className="mt-4 border-t border-gray-300 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
              <p className="mb-4 text-lg leading-relaxed">
                {description}
              </p>
              <a className="inline-flex items-center text-indigo-500" href={link.url}>
                {link.display}
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
