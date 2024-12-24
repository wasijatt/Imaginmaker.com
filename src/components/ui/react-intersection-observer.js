import { useState, useEffect, useRef } from 'react';

const useInView = (options) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            options
        );

        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [options]);

    return { ref, inView };
};

export default useInView;
