/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import './ad.css';

const Ad: React.FC<{}> = () => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const source = 'https://cdn.carbonads.com/carbon.js?serve=CE7I6KQL&placement=csslayoutio';

    React.useEffect(() => {
        // Ignore if the code is reached in snapping mode
        if (navigator.userAgent === 'ReactSnap') {
            return;
        }
        const container = containerRef.current;
        if (!container) {
            return;
        }

        const script = document.createElement('script');
        script.src = source;
        script.async = true;
        script.id = '_carbonads_js';
        container.appendChild(script);

        return () => {
            container.removeChild(script);
        };
    }, []);

    return (
        <div ref={containerRef} />
    );
};

export default Ad;
