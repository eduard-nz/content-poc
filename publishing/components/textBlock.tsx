import React from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { renderComponents } from './renderComponents';
import { useEditState } from 'tinacms/dist/react';

export interface TextBlockProps {
  block: string;
  content: any;
}

export const TextBlock: React.FC<TextBlockProps> = (props) => {
  const { edit } = useEditState()

  return (
    <div className="border-dotted border-yellow-100">
      { edit ?
        <div className="border-dotted border-yellow-300 border-2 bg-yellow-100 p-4">Edit Text Block to see content. This section is replaced on the actual site with the content of this text block.</div>
        :
        <TinaMarkdown content={props.content} components={renderComponents} />
    }
      
    </div>
  );
};
