import { useNavigate } from 'react-router'
import CFPremium from '../../assets/CFPremium.svg'
import CFRegular from '../../assets/CFRegular.svg'
import CFRisky from '../../assets/CFRisky.svg'
import { ThemeEnum, useThemeContext } from '../../themes/Theme'
import { TopBarLeft, TopBarMobile, TopBarRight, TopBarWrapper } from './TopBar.styles'

export default function TopBar() {

    const { theme } = useThemeContext()
    const navigate = useNavigate()

    return (
        <TopBarWrapper
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <TopBarLeft>
                <img 
                    src={theme === ThemeEnum.PRE ? CFPremium : theme === ThemeEnum.RGL ? CFRegular : CFRisky} 
                    alt='topbar__logo'
                    onClick={() => navigate('/')}
                />
                <p>
                    Welcome, radextrem
                </p>
            </TopBarLeft>
            <TopBarRight>
                <p onClick={() => navigate('/profile')}>Profile</p>
                <a href="https://github.com/niyasrad/CustomFlicks" target='_blank'>GitHub</a>
                <a href="https://niyas-hameed.vercel.app/contact" target='_blank'>Support</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
            </TopBarRight>
            <TopBarMobile>
                <svg onClick={() => navigate('/profile')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <a href="https://github.com/niyasrad/CustomFlicks" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
            </TopBarMobile>
        </TopBarWrapper>
    )
}