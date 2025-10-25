import React from 'react'
import { Footer, Header as HeaderStyled } from './index.styles'
import { Link } from 'react-router-dom'
import { getNavigationValue } from '@brojs/cli'

export const Header = () => {
    return (
        <>
            <HeaderStyled secondary>
                <div>Header</div>
                <Link to={getNavigationValue('ui-sample-project.main')}>Main</Link>
                <Link to={getNavigationValue('ui-sample-project.analytics')}>Analytics</Link>
            </HeaderStyled>
            <Footer/>
        </>
        
    )
}