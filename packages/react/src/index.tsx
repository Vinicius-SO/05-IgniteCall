import { ComponentProps } from 'react'
import {styled} from './styles'

export const Button = styled('button',{
    fontFamily: '$default',
    background: '$ignite500',
    borderRadius: '$md',
    // padding: '$2 $4',
    fontWeight: 'bold',
    color: '$white',
    border: 0,

    variants: {
        size:{
          small:{
            fontSize: 14,
            padding: '$3 $6'
          },
          big:{
            fontSize: 14,
            padding: '$3 $6'
          }
        }
    },
})

export type ButtonProps = ComponentProps<typeof Button>
