'use client';

import { PageQuery } from '@/tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import React from 'react';

export function PageComponent(props: {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) {
  const { data } = useTina(props);
  const { page } = data;

  return (
    <>
      <h1>{page.name}</h1>
      <img src={page.heroImage} />
    </>
  );
}
