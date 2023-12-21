import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Enviar',
    // size: 'small'
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size:'sm'
  },
}