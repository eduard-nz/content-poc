import { PathwayPageComponent } from '@/components/pathway';
import client from '@/tina/__generated__/client';

export default async function PathwayPage({ params }: { params: { audience: string; pathway: string } }) {
  const res = await client.queries.pathway({
    relativePath: `${params.audience}/${params.pathway}.mdx`,
  });

  const data = JSON.parse(JSON.stringify(res.data));
  // console.log('Red flags:', JSON.stringify(data.pathway.redFlags));

  return (
    <PathwayPageComponent
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}
