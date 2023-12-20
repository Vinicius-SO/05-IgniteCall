import { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space } from "@ignite-ui/tokens";
import { createStitches } from "@stitches/react";

export const{
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    createTheme,
    config
} = createStitches({
    theme:{
        colors:colors,
        fonts: fonts,
        fontSizes:fontSizes,
        fontWeights:fontWeights,
        lineHeights: lineHeights,
        radii:radii,
        space:space
    }
})