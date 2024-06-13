import { Collection } from 'tinacms';

export const textBlock: Collection = {
  label: 'Text Block',
  name: 'textBlock',
  path: 'content/text-blocks',
  format: 'json',
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'string',
      isTitle: true,
      required: true,
    },
    {
        name: 'content',
        label: 'Content',
        type: 'rich-text',
        required: true,
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
                  name: 'content',
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
                          name: 'content',
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
  ],
};
