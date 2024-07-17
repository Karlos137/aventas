import { Meta, StoryObj } from '@storybook/react'

import ArticlesSection from './ArticlesSection'

const meta: Meta<typeof ArticlesSection> = {
  title: 'Sections/ArticlesSection',
  component: ArticlesSection,
}

export default meta
type Story = StoryObj<typeof ArticlesSection>

export const Default: Story = {
  args: {
    className: 'mt-12',
  },
  parameters: {
    layout: 'fullscreen',
  },
}
