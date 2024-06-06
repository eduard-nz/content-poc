import { Collection } from 'tinacms';

export const textBlock: Collection = {
  label: 'Text Block',
  name: 'textBlock',
  path: 'content/text-blocks',
  format: 'mdx',
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'string',
      isTitle: true,
      required: true,
    },
    {
        name: 'children',
        label: 'Content',
        type: 'rich-text',
        required: true,
      },
  ],
};
