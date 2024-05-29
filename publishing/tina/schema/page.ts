import { Collection } from 'tinacms';
import { audienceField } from './audience-field';

export const page: Collection = {
  label: 'Page',
  name: 'page',
  path: 'content/pages',
  format: 'md',
  // ui: {
  //   router: (props) => props.document._sys.breadcrumbs.join('/'),
  //   filename: {
  //     readonly: true,
  //     slugify: (values: Record<string, any>) => {
  //       // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
  //       return `/${values?.audience || 'community'}.${values?.name?.toLowerCase().replace(/ /g, '-')}`;
  //     },
  //   },
  // },
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
      name: 'heroImage',
      label: 'Hero Image',
      type: 'image',
    },
    {
      name: 'news',
      label: 'Latest news',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title };
        },
      },
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'string',
          isTitle: true,
          required: true,
        },
        {
          name: 'date',
          label: 'Date',
          type: 'datetime',
          required: true,
        },
        {
          name: 'content',
          label: 'Content',
          type: 'string',
          required: true,
          ui: {
            component: 'textarea',
          },
        },
      ],
    },
  ],
};
