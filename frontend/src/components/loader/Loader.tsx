import { LoaderLogo, LoaderWrapper } from "./Loader.styles";

import CFPremium from '../../assets/CFPremium.svg'
import CFRegular from '../../assets/CFRegular.svg'
import CFRisky from '../../assets/CFRisky.svg'

import { ThemeEnum, useThemeContext } from "../../themes/Theme";

export function Loading() {

    const { theme } = useThemeContext()

    return (
        <LoaderLogo 
            animate={{
                opacity: [0.4, 1, 0.4],
                rotate: [180, 760, 180]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                type: 'tween'
            }}

            src={theme === ThemeEnum.PRE ? CFPremium : theme === ThemeEnum.RGL ? CFRegular : CFRisky}
            alt="Loading Screen..."
        />
    )

}

export default function Loader() {

    return (
        <LoaderWrapper>
            <Loading />
        </LoaderWrapper>
    )
}