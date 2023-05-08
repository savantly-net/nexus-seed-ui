import { cmsHttp } from "./http";
import { env } from "~/env.mjs";

const API_ENDPOINT_BLOCKS = `/api/blocks`;


export type BlockType = {
  id: number;
  name: string;
  description: string;
  schema: string;
  uiSchema: string;
}


export type BlockContent = {
  id: number;
  name: string;
  content: string;
  blockType: BlockType;
  locationId: number;
}

export type FetchBlocksResponse<T> = {
  status: number;
  error?: string;
  data?: {
    id: number;
    name: string;
    blockType: BlockType;
    locationId: number;
    content: T;
  }[];
}

export const useFetchBlocks = async <T>(): Promise<FetchBlocksResponse<T>> => {
  const http = cmsHttp();
  const { data, status } = await http.get<BlockContent[]>(API_ENDPOINT_BLOCKS, {
    auth: {
      username: env.CMS_API_USERNAME,
      password: env.CMS_API_PASSWORD,
    },
  });

  if (status !== 200) {
    return {
      status,
      error: 'Error fetching blocks',
    };
  }

  const deserializedData = data.map((block) => {
    const { content, ...rest } = block;
    const jsonData = JSON.parse(content) as T;
    return {
      ...rest,
      content: jsonData,
    };
  });

  return {
    status,
    data: deserializedData,
  };
};


export type FetchBlockByIdResponse<T> = {
  status: number;
  error?: string;
  data?: {
    id: number;
    name: string;
    blockType: BlockType;
    locationId: number;
    content: T;
  };
}

export const fetchBlockById = async <T>(id: string): Promise<FetchBlockByIdResponse<T>> => {
  const http = cmsHttp();
  const { data, status } = await http.get<BlockContent>(`${API_ENDPOINT_BLOCKS}/${id}`, {
    auth: {
      username: env.CMS_API_USERNAME,
      password: env.CMS_API_PASSWORD,
    },
  });
  if (status !== 200) {
    return {
      status,
      error: 'Error fetching blocks',
    };
  }

  const { content, ...rest } = data;
  const jsonData = JSON.parse(content) as T;
  return {
    status,
    data: {
      ...rest,
      content: jsonData,
    },
  };
}
