'use client';

import { PathwayQuery } from '@/tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import React from 'react';
import RedFlagComponent from './red-flags';
import Link from 'next/link';
import DropBox, { DropBoxProps } from './dropBox';

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
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      {/* <!-- Quick Links --> */}
      <div className="fixed right-0 top-0 z-50 mr-4 mt-4 rounded-lg bg-gray-600 p-4 shadow-lg">
        <ul>
          <li>
            <a href="#assessment" className="text-white hover:text-blue-700">
              Assessment
            </a>
          </li>
          <li>
            <a href="#management" className="text-white hover:text-blue-700">
              Management
            </a>
          </li>
          <li>
            <a href="#request" className="text-white hover:text-blue-700">
              Request
            </a>
          </li>
        </ul>
      </div>

      <h1 className="text-3xl" data-tina-field={tinaField(pathway, 'name')}>
        {pathway.name}
      </h1>
      <p className="text-sm text-blue-400">{pathway.audience}</p>

      {pathway.relatedPathways && (
        <p className="mb-6 mt-8 text-sm" data-tina-field={tinaField(pathway, 'relatedPathways')}>
          <span className="font-semibold">See also:</span>{' '}
          {pathway.relatedPathways.map((link, index) => {
            return (
              <Link
                key={index}
                href={`/${link!.pathway!._sys.breadcrumbs.join('/')}`}
                className="text-blue-500 hover:underline"
              >
                {link?.pathway?.name}
              </Link>
            );
          })}
        </p>
      )}
      <RedFlagComponent redFlags={pathway.redFlags} />

      <hr className="mb-6 mt-6 border-t-2 border-gray-400" />

      <h2 id="assessment" className="text-2xl" data-tina-field={tinaField(pathway, 'assessment')}>
        Assessment
      </h2>
      <div className="mt-3">
        <TinaMarkdown
          content={pathway.assessment}
          components={{
            ol: (props) => <ol className="list-decimal pl-5" {...props} />,
            ul: (props) => <ul className="list-disc pl-5" {...props} />,
            li: (props) => <li className="mt-1" {...props} />,
            dropBox: (props: DropBoxProps) => <DropBox title={props.title}>{props.children}</DropBox>,
          }}
        />
      </div>

      <hr className="mb-6 mt-6 border-t-2 border-gray-400" />

      <h2 id="management" className="text-2xl">
        Management
      </h2>
      <div className="mt-3" data-tina-field={tinaField(pathway, 'management')}>
        <TinaMarkdown
          content={pathway.management}
          components={{
            ol: (props) => <ol className="list-decimal pl-5" {...props} />,
            ul: (props) => <ul className="list-disc pl-5" {...props} />,
            li: (props) => <li className="mt-1" {...props} />,
          }}
        />
      </div>

      <hr className="mb-6 mt-6 border-t-2 border-gray-400" />

      <h2 id="request" className="text-2xl">
        Request
      </h2>
      <div className="mt-3" data-tina-field={tinaField(pathway, 'request')}>
        <TinaMarkdown
          content={pathway.request}
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
