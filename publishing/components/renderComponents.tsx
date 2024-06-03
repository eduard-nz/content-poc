import { Components } from 'tinacms/dist/rich-text';
import { DropBox, DropBoxProps } from './dropBox';

export const renderComponents: Components<{
  dropBox: DropBoxProps;
}> = {
  ol: (props) => <ol className="list-decimal pl-5" {...props} />,
  ul: (props) => <ul className="list-disc pl-5" {...props} />,
  li: (props) => <li className="mt-1" {...props} />,
  p: (props) => <p className="mt-4" {...props} />,
  dropBox: (props: DropBoxProps) => <DropBox {...props} />,
};
