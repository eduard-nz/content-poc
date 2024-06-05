import client from '@/tina/__generated__/client';
import { PageComponent } from '@/components/page';

export default async function Page({ params }: { params: { audience: string; pathway: string } }) {
  const res = await client.queries.page({
    relativePath: `home.md`,
  });

  return (
    <PageComponent data={JSON.parse(JSON.stringify(res.data))} query={res.query} variables={res.variables} />
  );
}
