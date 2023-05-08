import { env } from "~/env.mjs";
import { cmsHttp } from "../http/http";
import { type OpenGraphData } from "../openGraph";
import { type WebPageData } from "../page";

const API_ENDPOINT_SITES = `/api/sites`;

export type WebSiteData = {
  id: number;
  name: string;
  url: string;
  openGraphData: OpenGraphData;
  webPages: WebPageData[];
}

export type FetchWebSiteDataResponse = {
  status: number;
  error?: string;
  data?: WebSiteData;
}

export const fetchWebSiteData = async (id: string): Promise<FetchWebSiteDataResponse> => {
  const http = cmsHttp();
  const { data, status } = await http.get<WebSiteData>(`${API_ENDPOINT_SITES}/${id}`, {
    auth: {
      username: env.CMS_API_USERNAME,
      password: env.CMS_API_PASSWORD,
    },
  });

  if (status !== 200) {
    return {
      status,
      error: 'Error fetching website data',
    };
  }

  return {
    status,
    data: data,
  };
};
