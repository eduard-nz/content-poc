import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { uniqueId } from 'lodash';

export interface DropBoxProps {
  title: string;
  children: any;
}

export const DropBox: React.FC<DropBoxProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(null);
  const dropBoxId = uniqueId('dropbox-');

  useEffect(() => {
    const newDiv = document.createElement('div');
    setPortalContainer(newDiv);
  }, []);

  useEffect(() => {
    if (portalContainer) {
      const currentElement = document.querySelector(`[data-dropbox='${dropBoxId}']`);
      currentElement?.parentElement?.insertAdjacentElement('afterend', portalContainer);
    }
  }, [portalContainer, dropBoxId]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <span
        className="cursor-pointer items-center underline hover:text-blue-500"
        onClick={toggleAccordion}
        data-dropbox={dropBoxId}
      >
        {props.title}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="ml-1 mr-2" />
      </span>
      {isOpen &&
        portalContainer &&
        createPortal(
          <div className="mb-4 mt-4 border border-gray-100 shadow-md">
            <div className="border-l-4 border-gray-400 p-6">
              <TinaMarkdown content={props.children} />
            </div>
          </div>,
          portalContainer
        )}
    </>
  );
};

export const DropBoxController: React.FC = () => {
  const [expandAll, setExpandAll] = useState(false);

  const toggleAll = () => {
    setExpandAll(!expandAll);
    document.querySelectorAll('[data-dropbox-container]').forEach((element) => {
      element.setAttribute('data-is-open', String(!expandAll));
    });
  };

  return (
    <button onClick={toggleAll} className="mb-4 rounded bg-blue-500 p-2 text-white">
      {expandAll ? 'Collapse All' : 'Expand All'}
    </button>
  );
};
