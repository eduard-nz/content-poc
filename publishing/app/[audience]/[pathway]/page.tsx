import { PathwayPageComponent } from '@/components/pathway';
import client from '@/tina/__generated__/client';
import { PathwayQuery } from '@/tina/__generated__/types';

export default async function PathwayPage({ params }: { params: { audience: string; pathway: string } }) {
  const pathwayResponse = await client.queries.pathway({
    relativePath: `${params.audience}/${params.pathway}.mdx`,
  });

  // TODO: refactor into settings somewhere
  const audiences = ['community', 'hospital'];
  //TODO: Refactor into optimised query
  const otherAudiences = audiences
    .filter((audience) => audience !== params.audience)
    .map(async (audience) => {
      const response = await client.queries.pathway({ relativePath: `${audience}/${params.pathway}.mdx` });
      return response.data;
    });

  const audiencePathways = await Promise.all(otherAudiences);

  return (
    <PathwayPageComponent
      data={JSON.parse(JSON.stringify(pathwayResponse.data))}
      query={pathwayResponse.query}
      variables={pathwayResponse.variables}
      otherAudiences={audiencePathways}
    />
  );
}
