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
    heading: 'O nás',
    description:
      'Jsme sehraný tým právníků s ekonomickým a businessovým přesahem a smyslem pro detail. Ke každému klientovi přistupujeme individuálně dle jeho potřeb a specifik prostředí, v němž se pohybuje. Naším hlavním cílem je poskytovat našim klientům vždy kvalitní službu, která se neomezuje pouze na právní řešení konkrétního problému, ale pokrývá ekonomické dopady a rizika a možné scénáře dalšího směřování klienta.',
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export const WithImage: Story = {
  args: {
    className: 'mt-12 lg:mt-24',
    image: '/images/aventas-hero.webp',
    heading: 'O nás',
    description:
      'Jsme sehraný tým právníků s ekonomickým a businessovým přesahem a smyslem pro detail. Ke každému klientovi přistupujeme individuálně dle jeho potřeb a specifik prostředí, v němž se pohybuje. Naším hlavním cílem je poskytovat našim klientům vždy kvalitní službu, která se neomezuje pouze na právní řešení konkrétního problému, ale pokrývá ekonomické dopady a rizika a možné scénáře dalšího směřování klienta.',
  },
  parameters: {
    layout: 'fullscreen',
  },
}
