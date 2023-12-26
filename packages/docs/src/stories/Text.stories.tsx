import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'


export default {
    title: 'Typografy/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium qui quae repellendus rerum. Perspiciatis recusandae provident unde veritatis, expedita, velit dolor quod ipsa quae iste esse perferendis accusantium? Omnis, pariatur?',
    },
  } as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args:{
        children: 'CustomTag',
        as: 'strong'
    }
    
}

