import React from "react"
import {
  Container,
  HeaderContainer,
  HeaderIcons,
  HeaderItems,
  MessageIcon,
  NotificationIcon
} from "../../styles/header/Header-styled"

const Header = () => {
    return (
        <Container>
            <HeaderContainer>
                <HeaderItems>
                    <HeaderIcons>
                        <MessageIcon />
                        <span />
                    </HeaderIcons>
                    <HeaderIcons>
                        <NotificationIcon />
                        <div />
                    </HeaderIcons>
                </HeaderItems>
            </HeaderContainer>
        </Container>
    )
}

export default Header