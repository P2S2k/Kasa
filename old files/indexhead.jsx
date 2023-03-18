import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../src/utils/style/colors"

const StyledLink = styled(Link) `
padding: 15px;
color: #8186a0;
text-decoration: none;
font-size: 18px
${(props) => 
props.$isFullLink &&
`color: white, border-radius: 30px; background-color: ${colors.primary};`}
`

function titi() {
    return (
        <nav>
            <StyledLink to="/">
                <li>Accueil</li>
            </StyledLink>
            <StyledLink to="survey/1" $isFullLink>
                <li>Questionnaire</li>
            </StyledLink>
            <StyledLink to="freelances">
                <li>Free Lances</li>
            </StyledLink>
            <StyledLink to="results">
                <li>Résultats</li>
            </StyledLink>
        </nav>
    )
}

export default titi
