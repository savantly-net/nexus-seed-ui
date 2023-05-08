import { type FetchBlockByIdResponse, useFetchBlockById } from "../../http/fetch-blocks";

const block_id = 'default-footer';

export interface FootBlockCategory {
    name: string;
    links: {
        name: string;
        url: string;
    }[];
}

export interface FooterBlockType {
    name: string;
    categories: FootBlockCategory[];
}

export const useFooterBlock = async (): Promise<FetchBlockByIdResponse<FooterBlockType>> => {
    const fetcher = useFetchBlockById<FooterBlockType>(block_id);
    return await fetcher;
}