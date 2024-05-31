import React, { useState, ReactNode } from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export interface DropBoxProps {
  title: string;
  children: any;
}

const DropBox: React.FC<DropBoxProps> = (props) => {
  // State to manage the visibility of the accordion content
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open or close the accordion
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Clickable title that controls accordion opening */}
      <span className="cursor-pointer underline hover:text-blue-500" onClick={toggleAccordion}>
        {props.title}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="ml-2" />
      </span>

      {/* Content that shows or hides based on `isOpen` state */}
      {isOpen && (
        <div>
          <TinaMarkdown content={props.children} />
        </div>
      )}
    </>
  );
};

export default DropBox;
