import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@viniciuso-ui/react'


export default {
    title: 'Typografy/Text',
    component: Text,
    args: {
        
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium qui quae repellendus rerum. Perspiciatis recusandae provident unde veritatis, expedita, velit dolor quod ipsa quae iste esse perferendis accusantium? Omnis, pariatur?',
    },
    argTypes:{
        size:{
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
            control: {
              type: 'inline-radio'
            }
          },
    }
  } as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args:{
        children: 'CustomTag',
        as: 'strong'
    }
    
}

