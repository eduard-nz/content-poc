'use client';

import { PathwayQuery } from '@/tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import React from 'react';

export function PathwayPageComponent(props: {
  data: PathwayQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) {
  const { data } = useTina(props);
  const { pathway } = data;

  return (
    <>
      <h1>{pathway.name}</h1>
      <p style={{ fontSize: '10px', color: 'blue' }}>{pathway.audience}</p>
      <h2 style={{ marginTop: '30px' }}>Assessment</h2>
      <div style={{ marginTop: '10px', marginLeft: '20px' }}>
        <TinaMarkdown content={pathway.assessment} />
      </div>
    </>
  );
}
