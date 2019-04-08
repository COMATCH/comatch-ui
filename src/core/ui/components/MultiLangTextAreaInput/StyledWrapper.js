import styled from 'styled-components';

export const StyledWrapper = styled.div`
    &.active-lang-en {
        .TextAreaInput:not(.lang-en) {
            visibility: hidden;
            position: absolute;
            z-index: -1;
        }
    }
    &.active-lang-de {
        .TextAreaInput:not(.lang-de) {
            visibility: hidden;
            position: absolute;
            z-index: -1;
        }
    }
    &.active-lang-fr {
        .TextAreaInput:not(.lang-fr) {
            visibility: hidden;
            position: absolute;
            z-index: -1;
        }
    }

    // Resize icons as flags are used
    .TextAreaInput .TextAreaInput__icon,
    .TextAreaInput .InputLabel ~ .TextAreaInput__icon {
        width: 20px;
        height: 16px;
    }
`;
