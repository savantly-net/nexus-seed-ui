import { type OpenGraphData } from "../openGraph";

export interface WebPageData {
    id: string;
    name: string;
    openGraphData: OpenGraphData;
    publishDate: string;
}