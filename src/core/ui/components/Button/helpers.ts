import { capitalizeFirstLetter, capitalizeAll } from '../../../utils/capitalizer';

function getText(text: string, textStyle: string) {
    switch (textStyle) {
        case 'capitalizeFirstLetter':
            return capitalizeFirstLetter(text);
        case 'capitalizeAll':
            return capitalizeAll(text);
        default:
            return text;
    }
}

export { getText };
