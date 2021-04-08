/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.PopoverArrow}>
            <Helmet>
                <meta name="description" content="Create a popover arrow with CSS" />
                <meta name="keywords" content="css arrow, css popover" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    <!-- The content -->
    ...

    <!-- Top left arrow -->
    <div class="container__arrow container__arrow--tl"></div>

    <!-- Top center arrow -->
    <div class="container__arrow container__arrow--tc"></div>

    <!-- Top right arrow -->
    <div class="container__arrow container__arrow--tr"></div>

    <!-- Right top arrow -->
    <div class="container__arrow container__arrow--rt"></div>

    <!-- Right center arrow -->
    <div class="container__arrow container__arrow--rc"></div>

    <!-- Right bottom arrow -->
    <div class="container__arrow container__arrow--rb"></div>

    <!-- Bottom left arrow -->
    <div class="container__arrow container__arrow--bl"></div>

    <!-- Bottom center arrow -->
    <div class="container__arrow container__arrow--bc"></div>

    <!-- Bottom right arrow -->
    <div class="container__arrow container__arrow--br"></div>

    <!-- Left top arrow -->
    <div class="container__arrow container__arrow--lt"></div>

    <!-- Left center arrow -->
    <div class="container__arrow container__arrow--lc"></div>

    <!-- Left bottom arrow -->
    <div class="container__arrow container__arrow--lb"></div>
</div>
`}
css={`
.container {
    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);

    /* Used to position the arrow */
    position: relative;
}

.container__arrow {
    /* Size */
    height: 16px;
    width: 16px;

    background-color: #FFF;
    position: absolute;
}

.container__arrow--tl {
    /* Position at the top left corner */
    left: 32px;
    top: 0px;

    /* Border */
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    transform: translate(50%, -50%) rotate(45deg);
}

.container__arrow--tc {
    /* Position at the top center */
    left: 50%;
    top: 0px;

    /* Border */
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    transform: translate(-50%, -50%) rotate(45deg);
}

.container__arrow--tr {
    /* Position at the top right corner */
    right: 32px;
    top: 0px;

    /* Border */
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    transform: translate(-50%, -50%) rotate(45deg);
}

.container__arrow--rt {
    /* Position at the right top corner */
    right: 0;
    top: 32px;

    /* Border */
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    transform: translate(50%, 50%) rotate(45deg);
}

.container__arrow--rc {
    /* Position at the right center */
    right: 0;
    top: 50%;

    /* Border */
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    transform: translate(50%, -50%) rotate(45deg);
}

.container__arrow--rb {
    /* Position at the right bottom corner */
    bottom: 32px;
    right: 0;

    /* Border */
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    transform: translate(50%, -50%) rotate(45deg);
}

.container__arrow--bl {
    /* Position at the bottom left corner */
    bottom: -16px;
    left: 32px;

    /* Border */
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    transform: translate(50%, -50%) rotate(45deg);
}

.container__arrow--bc {
    /* Position at the bottom center */
    bottom: -16px;
    left: 50%;

    /* Border */
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    transform: translate(-50%, -50%) rotate(45deg);
}

.container__arrow--br {
    /* Position at the bottom right corner */
    bottom: -16px;
    right: 32px;

    /* Border */
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    transform: translate(-50%, -50%) rotate(45deg);
}

.container__arrow--lt {
    /* Position at the left top corner */
    left: 0;
    top: 32px;

    /* Border */
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    transform: translate(-50%, 50%) rotate(45deg);
}

.container__arrow--lc {
    /* Position at the left center */
    left: 0;
    top: 50%;

    /* Border */
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    transform: translate(-50%, -50%) rotate(45deg);
}

.container__arrow--lb {
    /* Position at the left bottom corner */
    bottom: 32px;
    left: 0;

    /* Border */
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    transform: translate(-50%, -50%) rotate(45deg);
}
`}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            justifyContent: 'center',
                            padding: '8px',
                        }}
                    >
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                borderRadius: '4px',
                                height: '300px',
                                marginBottom: '16px',
                                position: 'relative',
                                width: '300px',
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: '#FFF',
                                    borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                    height: '16px',
                                    left: '32px',
                                    position: 'absolute',
                                    top: 0,
                                    transform: 'translate(50%, -50%) rotate(45deg)',
                                    width: '16px',
                                }}
                            />
                            <div
                                style={{
                                    backgroundColor: '#FFF',
                                    borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                    height: '16px',
                                    left: '50%',
                                    position: 'absolute',
                                    top: 0,
                                    transform: 'translate(-50%, -50%) rotate(45deg)',
                                    width: '16px',
                                }}
                            />
                            <div
                                style={{
                                    backgroundColor: '#FFF',
                                    borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                    height: '16px',
                                    position: 'absolute',
                                    right: '32px',
                                    top: 0,
                                    transform: 'translate(-50%, -50%) rotate(45deg)',
                                    width: '16px',
                                }}
                            />

                            <div
                                style={{
                                    backgroundColor: '#FFF',
                                    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                    height: '16px',
                                    position: 'absolute',
                                    right: 0,
                                    top: '32px',
                                    transform: 'translate(50%, 50%) rotate(45deg)',
                                    width: '16px',
                                }}
                            />
                            <div
                                style={{
                                    backgroundColor: '#FFF',
                                    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                    height: '16px',
                                    position: 'absolute',
                                    right: 0,
                                    top: '50%',
                                    transform: 'translate(50%, -50%) rotate(45deg)',
                                    width: '16px',
                                }}
                            />
                            <div
                                style={{
                                    backgroundColor: '#FFF',
                                    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                    bottom: '32px',
                                    height: '16px',
                                    position: 'absolute',
                                    right: 0,
                                    transform: 'translate(50%, -50%) rotate(45deg)',
                                    width: '16px',
                                }}
                            />

                            <div
                                style={{
                                    backgroundColor: '#FFF',
                                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                    bottom: '-16px',
                                    height: '16px',
                                    left: '32px',
                                    position: 'absolute',
                                    transform: 'translate(50%, -50%) rotate(45deg)',
                                    width: '16px',
                                }}
                            />
                            <div
                                style={{
                                    backgroundColor: '#FFF',
                                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                    bottom: '-16px',
                                    height: '16px',
                                    left: '50%',
                                    position: 'absolute',
                                    transform: 'translate(-50%, -50%) rotate(45deg)',
                                    width: '16px',
                                }}
                            />
                            <div
                                style={{
                                    backgroundColor: '#FFF',
                                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                    bottom: '-16px',
                                    height: '16px',
                                    position: 'absolute',
                                    right: '32px',
                                    transform: 'translate(-50%, -50%) rotate(45deg)',
                                    width: '16px',
                                }}
                            />

                            <div
                                style={{
                                    backgroundColor: '#FFF',
                                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                    height: '16px',
                                    left: 0,
                                    position: 'absolute',
                                    top: '32px',
                                    transform: 'translate(-50%, 50%) rotate(45deg)',
                                    width: '16px',
                                }}
                            />
                            <div
                                style={{
                                    backgroundColor: '#FFF',
                                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                    height: '16px',
                                    left: 0,
                                    position: 'absolute',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%) rotate(45deg)',
                                    width: '16px',
                                }}
                            />
                            <div
                                style={{
                                    backgroundColor: '#FFF',
                                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                    bottom: '32px',
                                    height: '16px',
                                    left: 0,
                                    position: 'absolute',
                                    transform: 'translate(-50%, -50%) rotate(45deg)',
                                    width: '16px',
                                }}
                            />
                        </div>
                    </div>
                </BrowserFrame>
            </div>

            <RelatedPatterns patterns={[Pattern.ArrowButtons, Pattern.Tooltip]} />
        </DetailsLayout>
    );
};

export default Details;
