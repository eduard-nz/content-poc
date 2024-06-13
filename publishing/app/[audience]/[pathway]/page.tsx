'use server';

import { PathwayPageComponent } from '@/components/pathway';
import client from '@/tina/__generated__/client';
import { loadReferencedContent } from '@/utils/node-helpers';

export default async function PathwayPage({ params }: { params: { audience: string; pathway: string } }) {
  const pathwayResponse = await client.queries.pathway({
    relativePath: `${params.audience}/${params.pathway}.json`,
  });

  // This may well be solved with a sophisticated GraphQL query instead
  await loadReferencedContent(pathwayResponse.data.pathway.assessment, 'textBlock', getTextBlockContent);
  await loadReferencedContent(pathwayResponse.data.pathway.management, 'textBlock', getTextBlockContent);
  
  // TODO: find a place in settings somewhere to load from
  const audiences = ['community', 'hospital'];
  //TODO: Refactor into optimised query
  // const otherAudiences = audiences
  //   .filter((audience) => audience !== params.audience)
  //   .map(async (audience) => {
  //     const response = await client.queries.pathway({ relativePath: `${audience}/${params.pathway}.json` });
  //     return response.data;
  //   });

  const audiencePathways = []; //await Promise.all(otherAudiences);

  return (
    <PathwayPageComponent
      data={JSON.parse(JSON.stringify(pathwayResponse.data))}
      query={pathwayResponse.query}
      variables={pathwayResponse.variables}
      otherAudiences={audiencePathways}
    />
  );
}

async function getTextBlockContent(block: string) {
  const response = await client.queries.textBlock({
      relativePath: block.replace('content/text-blocks/', ''),
    });

  // This function should return the content object based on the block value
  return { content: response.data.textBlock.content };
}