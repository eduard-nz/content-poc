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
      <h1 className="text-3xl">{pathway.name}</h1>
      <p className="text-sm text-blue-400">{pathway.audience}</p>
      {/* {pathway.redFlags && ( */}
      <div className="mt-4 border-l-2 border-gray-500 bg-gray-300 p-4 text-sm">
        <p className="text-gray-700">Red flags</p>
        <div className="text-red-700">
          <p className="mt-3">{pathway.redFlags?.intro}</p>
          <ul className="list-disc pl-5">
            {pathway.redFlags?.flags.map((flag, index) => (
              <li key={index} className="mt-1">
                {flag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* )} */}

      <h2 className="mt-10 text-2xl">Assessment</h2>
      <div className="mt-3">
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
