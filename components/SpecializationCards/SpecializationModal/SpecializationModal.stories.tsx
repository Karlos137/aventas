import { Meta, StoryObj } from '@storybook/react'

import SpecializationModal from './SpecializationModal'

const meta: Meta<typeof SpecializationModal> = {
  component: SpecializationModal,
}

export default meta
type Story = StoryObj<typeof SpecializationModal>

export const Default: Story = {
  args: {
    title: 'M&A',
    description:
      'Jsme sehraný tým právníků s ekonomickým a businessovým přesahem a smyslem pro detail. Ke každému klientovi přistupujeme individuálně dle jeho potřeb a specifik prostředí, v němž se pohybuje. Naším hlavním cílem je poskytovat našim klientům vždy kvalitní službu, která se neomezuje pouze na právní řešení konkrétního problému, ale pokrývá ekonomické dopady a rizika a možné scénáře dalšího směřování klienta. Poskytujeme právní poradenství na špičkové úrovni odbornosti i při řešení nejsložitějších problémů. Specializujeme se na výstavbu holdingových struktur a svěřenských fondů, restrukturalizace a přeměny společností, komplexní transakční poradenství, běžnou korporátní agendu, cizinecké právo a další související oblasti.',
  },
}
