import { TinaField } from 'tinacms';

export const audienceField: TinaField = {
  name: 'audience',
  label: 'Audience',
  type: 'string',
  options: ['community', 'hospital'],
  required: true,
};
