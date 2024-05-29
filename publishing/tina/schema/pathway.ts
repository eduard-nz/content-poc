import { Collection } from 'tinacms';
import { audienceField } from './audience-field';

export const pathway: Collection = {
  label: 'Pathway',
  name: 'pathway',
  path: 'content/pathways',
  format: 'json',
  match: {
    include: '**/*',
  },
  ui: {
    router: (props) => props.document._sys.breadcrumbs.join('/'),
    filename: {
      readonly: true,
      slugify: (values: Record<string, any>) => {
        // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
        return `/${values?.audience || 'community'}.${values?.name?.toLowerCase().replace(/ /g, '-')}`;
      },
    },
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'string',
      isTitle: true,
      required: true,
    },
    audienceField,
    {
      name: 'relatedPathways',
      label: 'See also',
      type: 'reference',
      collections: ['pathway'],
    },
    {
      name: 'redFlags',
      label: 'Red Flags',
      type: 'rich-text',
    },
    {
      name: 'assessment',
      label: 'Assessment',
      type: 'rich-text',
      templates: [
        {
          name: 'dropBox',
          label: 'DropBox',
          inline: true,
          fields: [
            {
              name: 'title',
              label: 'Short Description',
              type: 'string',
              required: true,
            },
            {
              name: 'children',
              label: 'Expanded Information',
              type: 'rich-text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
