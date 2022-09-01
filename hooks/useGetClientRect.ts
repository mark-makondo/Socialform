import { useEffect, useRef, useState } from 'react';

const useGetClientRect = () => {
    const [dimensions, setDimensions] = useState<DOMRect>({} as DOMRect);

    const domRef = useRef<HTMLDivElement>({} as HTMLDivElement);

    useEffect(() => {
        const domRefDimensions = domRef.current.getBoundingClientRect();
        setDimensions(domRefDimensions);
        return () => {};
    }, []);

    return [domRef, dimensions];
};

export default useGetClientRect;
