import { Meta, StoryObj } from '@storybook/react'

import AboutUsSection from './AboutUsSection'

const meta: Meta<typeof AboutUsSection> = {
  title: 'Sections/AboutUsSection',
  component: AboutUsSection,
}

export default meta
type Story = StoryObj<typeof AboutUsSection>

export const Default: Story = {
  args: {
    className: 'mt-12 lg:mt-24',
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export const WithImage: Story = {
  args: {
    className: 'mt-12 lg:mt-24',
    image: '/images/aventas-hero.webp',
  },
  parameters: {
    layout: 'fullscreen',
  },
}
