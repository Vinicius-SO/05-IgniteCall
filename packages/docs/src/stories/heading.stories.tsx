import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@viniciuso-ui/react'


export default {
    title: 'Typografy/Heading',
    component: Heading,
    args: {
        size:'md',
        children: 'Heading 2'
    },
    argTypes:{
        size:{
            options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
            control: {
              type: 'inline-radio'
            }
          },
    }
  } as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args:{
        children: 'H1 Heading',
        as: 'h1'
    }
    
}

