'use client';

import { PathwayQuery } from '@/tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import React from 'react';
import RedFlagComponent from './red-flags';

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
      <h1 className="text-3xl" data-tina-field={tinaField(pathway, 'name')}>
        {pathway.name}
      </h1>
      <p className="text-sm text-blue-400">{pathway.audience}</p>
      <RedFlagComponent redFlags={pathway.redFlags} />
      <div className="mb-6 mt-6 border-t-2 border-gray-400" />
      <h2 className="text-2xl">Assessment</h2>
      <div className="mt-3" data-tina-field={tinaField(pathway, 'assessment')}>
        <TinaMarkdown
          content={pathway.assessment}
          components={{
            ol: (props) => <ol className="list-decimal pl-5" {...props} />,
            ul: (props) => <ul className="list-disc pl-5" {...props} />,
            li: (props) => <li className="mt-1" {...props} />,
          }}
        />
      </div>
    </>
  );
}
