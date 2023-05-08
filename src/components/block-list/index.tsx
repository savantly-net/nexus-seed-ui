import { useSession } from "next-auth/react";
import { useFetchBlocks } from "~/server/cms/http/fetch-blocks";

export const BlockList = async () => {
  const { data: sessionData } = useSession();

  const blocks = await useFetchBlocks();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {blocks.data.map((block) => (
          <div key={block.id}>
            <span>{block.name}</span>
            <span>{block.content}</span>
          </div>
        ))}
      </p>
    </div>
  );
};
