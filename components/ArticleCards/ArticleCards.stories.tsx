import { Meta, StoryObj } from '@storybook/react'

import ArticleCards from './ArticleCards'

const meta: Meta<typeof ArticleCards> = {
  component: ArticleCards,
}

export default meta
type Story = StoryObj<typeof ArticleCards>

export const Default: Story = {}
