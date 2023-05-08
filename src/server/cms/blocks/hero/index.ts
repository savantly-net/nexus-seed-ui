import { type FetchBlockByIdResponse, fetchBlockById } from "../../http/fetch-blocks";

const block_id = 'default-hero';

export interface HeroBlockType {
    imageUrl: string;
    headerText: string;
    tagline: string;
    description: string;
    link: {
        display: string;
        url: string;
    };
}

export type FetchHeroBlockResponse = FetchBlockByIdResponse<HeroBlockType>;

export const fetchHeroBlock = async (): Promise<FetchHeroBlockResponse> => {
    return fetchBlockById<HeroBlockType>(block_id);
}