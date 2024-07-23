import { type SiteConfig } from "types";


export const siteConfig: SiteConfig = {
    name: "Watercast",
    description:
      "Watercast helps companies to create water resilience planning for managing water availability in their facilities. We use artificial intelligence to automatically collect operational data from 3rd parties and combine it with local water satellite imagery to provide a real-time financial assessment of water risk and to offer modified mitigation adaptation options",
    url: "https://www.watercast.io",
    ogImage: "https://www.watercast.io/og.png",
    links: {
      twitter: "https://twitter.com/watercast",
      github: "https://github.com/watercast-io/",
    },
  }

  export enum siteNamespaces {
    Marketing = "marketing"
  }