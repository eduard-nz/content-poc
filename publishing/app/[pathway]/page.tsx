import { PathwayPageComponent } from '@/components/pathway';
import client from '@/tina/__generated__/client';

export default async function PathwayPage({ params }: { params: { pathway: string } }) {
  const res = await client.queries.pathway({
    relativePath: `${params.pathway}.json`,
  });

  return (
    <PathwayPageComponent
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}
