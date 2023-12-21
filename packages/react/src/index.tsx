import {styled} from './styles'

export const Button = styled('button',{
    fontFamily: '$default',
    background: '$gray500',
    borderRadius: '$md',
    // padding: '$2 $4',
    fontWeight: 'bold',
    color: '$white',

    variants: {
        color: {
          gray: {
            backgroundColor: 'gainsboro',
          },
        },
      },
})
