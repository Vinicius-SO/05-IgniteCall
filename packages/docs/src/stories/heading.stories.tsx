import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'


export default {
    title: 'Typografy/Heading',
    component: Heading,
    args: {
        children: 'Heading 2'
    },
  } as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args:{
        children: 'H1 Heading',
        as: 'h1'
    }
    
}

