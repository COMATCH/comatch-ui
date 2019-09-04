import { WithClassAndId } from '../@types';
import classnames from 'classnames';

function classNameAndId<P extends WithClassAndId>(
    { id, className }: P,
    baseClassName = '',
): { className: string; id?: string } {
    return {
        ...(!!id && { id }),
        className: classnames(baseClassName, className),
    };
}

export { classNameAndId };