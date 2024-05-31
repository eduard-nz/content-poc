import React, { useState, useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export interface DropBoxProps {
  title: string;
  children: any;
}

const DropBox: React.FC<DropBoxProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    // Create a new div element to act as the portal container
    const newDiv = document.createElement('div');
    document.body.appendChild(newDiv); // Temporarily append to body to ensure it's in the DOM
    setPortalContainer(newDiv);

    return () => {
      // Clean up the new div from the DOM when the component unmounts
      newDiv.remove();
    };
  }, []);

  useEffect(() => {
    if (portalContainer) {
      // Move the portal container div to right after the component's root element in the DOM
      const currentElement = document.querySelector("[data-dropbox='container']");
      currentElement?.parentElement?.insertAdjacentElement('afterend', portalContainer);
    }
  }, [portalContainer]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <span
        className="cursor-pointer items-center underline hover:text-blue-500"
        onClick={toggleAccordion}
        data-dropbox="container"
      >
        {title}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="ml-1 mr-2" />
      </span>
      {isOpen &&
        portalContainer &&
        createPortal(
          <div className="mb-4 mt-4 border border-gray-100 shadow-md">
            <div className="border-l-4 border-gray-400 p-6">
              <TinaMarkdown content={children} />
            </div>
          </div>,
          portalContainer
        )}
    </>
  );
};

export default DropBox;
