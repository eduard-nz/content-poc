'use client';

import { PathwayQuery } from '@/tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { useEditState } from 'tinacms/dist/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import RedFlagComponent from './red-flags';
import Link from 'next/link';
import { renderComponents } from './renderComponents';
import { DropBoxController } from './dropBox';

export function PathwayPageComponent(props: {
  data: PathwayQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) {
  const { data } = useTina(props);
  const { pathway } = data;

  const { edit } = useEditState();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Right Sidebar */}
      <div
        className={`fixed right-0 top-0 z-40 h-full transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'w-64' : 'w-14'
        } overflow-hidden bg-gray-300 p-4 pl-10`}
      >
        {/* Button to toggle sidebar, positioned inside the sidebar */}
        <button
          className="absolute right-2 top-4 z-50 w-10 rounded-lg bg-gray-400 p-2 text-white"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faPlus} />}
        </button>
        <div className="ml-4">
          <p className="mb-4 mt-16 font-bold">Sections</p>
          <ul className="space-y-2">
            <li>
              <a href="#assessment" className="block hover:text-blue-700">
                Assessment
              </a>
            </li>
            <li>
              <a href="#management" className="block hover:text-blue-700">
                Management
              </a>
            </li>
            <li>
              <a href="#request" className="block hover:text-blue-700">
                Request
              </a>
            </li>
          </ul>

          <hr className="mb-6 mt-6 border-t-2 border-gray-400" />

          <DropBoxController />
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-margin duration-300 ease-in-out ${isSidebarOpen ? 'mr-60' : 'mr-10'}`}>
        {' '}
        {/* Margin left to make space for the sidebar */}
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
          <TinaMarkdown content={pathway.assessment} components={renderComponents} />
        </div>
        <hr className="mb-6 mt-6 border-t-2 border-gray-400" />
        <h2 id="management" className="text-2xl">
          Management
        </h2>
        <div className="mt-3" data-tina-field={tinaField(pathway, 'management')}>
          <TinaMarkdown content={pathway.management} components={renderComponents} />
        </div>
        <hr className="mb-6 mt-6 border-t-2 border-gray-400" />
        <h2 id="request" className="text-2xl">
          Request
        </h2>
        <div className="mt-3" data-tina-field={tinaField(pathway, 'request')}>
          <TinaMarkdown content={pathway.request} components={renderComponents} />
        </div>
      </div>
    </>
  );
}
