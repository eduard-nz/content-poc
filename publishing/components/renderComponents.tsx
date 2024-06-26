import { Components } from 'tinacms/dist/rich-text';
import { DropBox, DropBoxProps } from './dropBox';
import { PracticePointProps, PracticePoint } from './practicePoint';
import { TextBlock, TextBlockProps } from './textBlock';

export const renderComponents: Components<{
  dropBox: DropBoxProps;
  practicePoint: PracticePointProps;
  textBlock: TextBlockProps
}> = {
  ol: (props) => <ol className="mb-8 mt-8 list-decimal pl-5" {...props} />,
  ul: (props) => <ul className="mb-8 mt-8 list-disc pl-5" {...props} />,
  li: (props) => <li className="mt-1" {...props} />,
  p: (props) => <p className="mt-4" {...props} />,
  dropBox: (props: DropBoxProps) => <DropBox {...props} />,
  practicePoint: (props: PracticePointProps) => <PracticePoint {...props} />,
  textBlock: (props: TextBlockProps) => <TextBlock {...props} />
};
