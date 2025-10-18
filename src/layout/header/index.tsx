import React from 'react'
import { Footer, Header as HeaderStyled } from './index.styles'

export const Header = () => {
    return (
        <>
            <HeaderStyled secondary>
                <div>Header</div>
            </HeaderStyled>
            <Footer/>
        </>
        
    )
}