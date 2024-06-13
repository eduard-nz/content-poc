import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { renderComponents } from './renderComponents';

export interface DropBoxProps {
  title: string;
  content: any;
}

export const DropBox: React.FC<DropBoxProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const newDiv = document.createElement('div');
    setPortalContainer(newDiv);
  }, []);

  useEffect(() => {
    if (portalContainer) {
      const currentElement = document.querySelector(`[data-dropbox='${props.title}']`);
      currentElement?.parentElement?.insertAdjacentElement('afterend', portalContainer);
    }
  }, [portalContainer, props.title]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <span
        className="cursor-pointer items-center underline hover:text-blue-500"
        onClick={toggleAccordion}
        data-dropbox={props.title}
      >
        {props.title}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="ml-1 mr-2" />
      </span>
      {isOpen &&
        portalContainer &&
        createPortal(
          <div className="mb-4 mt-4 border border-gray-100 shadow-md">
            <div className="border-l-4 border-gray-400 p-6">
              <TinaMarkdown content={props.content} components={renderComponents} />
            </div>
          </div>,
          portalContainer
        )}
    </>
  );
};
