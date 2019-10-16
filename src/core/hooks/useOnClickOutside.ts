import { RefObject, useEffect, useState } from 'react';

function useOnClickOutside<E extends Element>(
    ref: RefObject<E>,
    onClickOutside: (event: Event, ref: RefObject<E>) => void,
    onClickInside: (event: Event, ref: RefObject<E>) => void = () => {},
) {
    const [clickedInside, setClickedInside] = useState(false);

    useEffect(() => {
        const listener = (event: Event) => {
            const eventTarget = event.target as Node;
            const clickedInside = !!ref.current && ref.current.contains(eventTarget);

            if (clickedInside) {
                event.stopPropagation();
                onClickInside(event, ref);
                setClickedInside(true);
                return;
            }

            onClickOutside(event, ref);
            setClickedInside(false);
        };

        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        };
    });

    return clickedInside;
}

export { useOnClickOutside };
