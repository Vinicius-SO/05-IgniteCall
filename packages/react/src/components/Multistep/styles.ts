import { styled } from "@stitches/react";
import { Text } from "../Text";

export const MultiStepContainer = styled('div',{
    width: '100%'
})

export const Label = styled(Text,{
    color: '$gray200',
    // fontSize: '$xs',
    defaultVariants:{
        size: 'xs'
    }
})

export const Steps = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
    gap: '$2',
    marginTop: '$1'
})

export const Step = styled('div',{
    height: '$1',
    borderRadius: '$px',
    backgroundColor: '$gray600',
    variants: {
        active:{
            true:{

                backgroundColor: '$gray100'
            }
        }
    }
})