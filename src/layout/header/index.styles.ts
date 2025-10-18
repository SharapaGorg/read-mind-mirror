import { css } from "@emotion/react"
import styled from "@emotion/styled"

const colors = {
    red: '#f70000',
}

const sharedStyles = css`
    padding: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`

export const Header = styled.header<{ secondary: boolean }>`
    width: 100%;
    background-color: ${(props) => props.secondary ? 'blue' : colors.red};
    ${sharedStyles};
`       

export const Footer = styled.footer`
    ${sharedStyles};
`