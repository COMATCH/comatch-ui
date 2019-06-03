import styled from 'styled-components';
import { palette, typography } from '../../../styles/variables';

export const StyledWrapper = styled.div`
    .ProgressBar {
        position: relative;
        height: 20px;
        border: solid 1px ${palette.midGray};
        border-radius: 3px;
        background-color: ${palette.white};

        &__label {
            color: ${palette.darkGray};
            text-align: right;

            &--left {
                text-align: left;
            }

            &--light {
                color: ${palette.midGray};
                font-weight: normal;
            }
        }

        &__progress {
            height: 100%;
            border-radius: 3px 0 0 3px;
            transform: scaleX(0);
            transition: transform 0.5s ease-out;
            transform-origin: left;
            background-color: ${palette.primary};

            &.reverse {
                transform-origin: right;
                border-radius: 0 3px 3px 0;
            }

            &.full {
                border-radius: 3px;
            }

            &.light {
                background-color: ${palette.lightPrimary};
            }

            &.dark {
                background-color: ${palette.secondary};
            }
        }

        &__progress-label {
            font-size: ${typography.fontXs};
            position: absolute;
            top: 0;
            color: ${palette.primary};
            text-align: left;

            &.ProgressBar__progress--label-light {
                color: ${palette.lightPrimary};
                font-weight: bold;
            }
            &.ProgressBar__progress--label-dark {
                color: ${palette.secondary};
                font-weight: bold;
            }

            &.ProgressBar__progress-label-left {
                color: ${palette.white};
                text-align: right;
                font-weight: bold;
            }
        }

        // states

        &--greyBackground {
            background-color: ${palette.midGray};
            border: 0;
        }

        &--danger {
            .ProgressBar__progress {
                background-color: ${palette.darkRed};
            }

            .ProgressBar__progress-label {
                color: ${palette.darkRed};
            }
        }

        &--warning {
            .ProgressBar__progress {
                background-color: ${palette.darkOrange};
            }

            .ProgressBar__progress-label {
                color: ${palette.white};
            }
        }
    }
`;
