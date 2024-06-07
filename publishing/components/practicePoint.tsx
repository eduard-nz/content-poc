import React, { useState, useEffect } from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { renderComponents } from './renderComponents';

export interface PracticePointProps {
  content: any;
}

export const PracticePoint: React.FC<PracticePointProps> = (props) => {
  return (
    <div className="border-l-4 border-green-700 bg-green-100 p-6">
      <p className='text-green-700 font-semibold mb-6'>Practice point</p>
      <TinaMarkdown content={props.content} components={renderComponents} />
    </div>
  );
};
