'use client';

import { PageQuery } from '@/tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import Image from 'next/image';
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

  console.log(page.heroImage);
  return (
    <>
      <div className="relative">
        <div className="relative">
          <Image
            src={page.heroImage}
            alt="Hero Image"
            width={1140}
            height={378}
            className="border-b-8 border-blue-700"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start pl-6">
          <h1 className="ml-10 text-4xl font-bold text-blue-400">{page.name}</h1>
          <p className="ml-10 mt-2 text-2xl font-bold uppercase text-gray-400">{page.audience}</p>
          <p className="ml-10 mt-2 text-6xl font-bold uppercase text-blue-700">Health Pathways</p>
        </div>
      </div>
    </>
  );
}
