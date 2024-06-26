import { Collection } from 'tinacms';
import { audienceField } from './audience-field';

export const pathway: Collection = {
  label: 'Pathway',
  name: 'pathway',
  path: 'content/pathways',
  format: 'mdx',
  match: {
    include: '**/*',
  },
  ui: {
    router: (props) => props.document._sys.breadcrumbs.join('/'),
    filename: {
      readonly: true,
      slugify: (values: Record<string, any>) => {
        // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
        return `/${values?.audience || 'community'}/${values?.name?.toLowerCase().replace(/ /g, '-')}`;
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
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          // Field values are accessed by item?.<Field name>
          return { label: item?.pathway.name };
        },
      },
      fields: [
        {
          name: 'pathway',
          label: 'Pathway',
          type: 'reference',
          collections: ['pathway'],
        },
      ],
    },
    {
      name: 'redFlags',
      label: 'Red Flags',
      type: 'object',
      fields: [
        {
          name: 'intro',
          label: 'Intro text',
          type: 'string',
        },
        {
          name: 'flags',
          label: 'Red flags',
          type: 'string',
          list: true,
          required: true,
        },
      ],
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
        {
          name: 'textBlock',
          label: 'Text Block',
          inline: true,
          fields: [
            {
              name: 'block',
              label: 'Text Block',
              type: 'reference',
              collections: ['textBlock'],
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'management',
      label: 'Management',
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
              isBody: true,
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
                {
                  name: 'textBlock',
                  label: 'Text Block',
                  inline: true,
                  fields: [
                    {
                      name: 'block',
                      label: 'Text Block',
                      type: 'reference',
                      collections: ['textBlock'],
                      required: true,
                    },
                  ],
                },
              ],
                    },
          ],
        },
        {
          name: 'textBlock',
          label: 'Text Block',
          inline: true,
          fields: [
            {
              name: 'block',
              label: 'Text Block',
              type: 'reference',
              collections: ['textBlock'],
              required: true,
            },
          ],
        },
        {
          name: 'practicePoint',
          label: 'Practice Point',
          inline: false,
          fields: [
            {
              name: 'content',
              label: 'Practice Point',
              type: 'rich-text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'request',
      label: 'Request',
      type: 'rich-text',
    },
    {
      name: 'info',
      label: 'Information',
      type: 'object',
      fields: [
        {
          name: 'healthProfessionals',
          label: 'For Health Professionals',
          type: 'rich-text',
        },
        {
          name: 'patients',
          label: 'For Patients',
          type: 'rich-text',
        },
      ],
    },
    {
      name: 'metaData',
      label: 'Meta Data',
      type: 'object',
      fields: [
        {
          name: 'contributors',
          label: 'Contributors',
          type: 'string',
          list: true,
        },
        {
          name: 'sources',
          label: 'Sources',
          type: 'object',
          list: true,
          fields: [
            {
              name: 'displayText',
              label: 'Display text',
              type: 'string',
              required: true,
            },
            {
              name: 'url',
              label: 'Url',
              type: 'string',
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
