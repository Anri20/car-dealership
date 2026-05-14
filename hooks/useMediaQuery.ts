import { useState, useEffect } from "react";

const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);

        // Set correct value on mount (client only)
        setMatches(mediaQueryList.matches);

        const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
        mediaQueryList.addEventListener("change", listener);

        return () => mediaQueryList.removeEventListener("change", listener);
    }, [query]);

    return matches;
};

export default useMediaQuery;