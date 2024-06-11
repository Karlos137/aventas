import type { CollectionConfig } from 'payload/types'

export const AboutUsCollection: CollectionConfig = {
  slug: 'about_us',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'locale',
      type: 'text',
      required: true,
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'text-one',
      type: 'text',
      required: true,
    },
    {
      name: 'text-two',
      type: 'text',
      required: true,
    },
  ],
}
