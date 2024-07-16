import { Meta, StoryObj } from '@storybook/react'

import ArticleCard from './ArticleCard'

const meta: Meta<typeof ArticleCard> = {
  component: ArticleCard,
}

export default meta
type Story = StoryObj<typeof ArticleCard>

export const Default: Story = {}
