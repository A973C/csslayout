/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';

import Heading from '../../components/Heading';
import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.DockedAtCorner}>
            <Helmet>
                <meta name="description" content="Dock an element at corner with CSS" />
                <meta name="keywords" content="css docked, css flexbox" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    <!-- Docked at the top right corner -->
    <div class="container__docker">
        ...
    </div>

    ...
</div>
`}
css={`
.container {
    position: relative;
}

.container__docker {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(50%, -50%);

    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;
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
                                borderRadius: '8px',
                                padding: '16px',
                                position: 'relative',
                                width: '128px',
                            }}
                        >
                            <Rectangle />
                            <div
                                style={{
                                    backgroundColor: '#00449E',
                                    borderRadius: '9999px',
                                    height: '32px',
                                    position: 'absolute',
                                    right: 0,
                                    top: 0,
                                    transform: 'translate(50%, -50%)',
                                    width: '32px',
                                }}
                            />
                        </div>
                    </div>
                </BrowserFrame>
            </div>
            <section>
                <Heading title="Use cases" />

                <div style={{ padding: '32px' }}>
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '4px',
                            marginBottom: '32px',
                            padding: '8px',
                            position: 'relative',
                            width: '128px',
                        }}
                    >
                        Inbox
                        <div
                            style={{
                                alignItems: 'center',
                                backgroundColor: '#357EDD',
                                borderRadius: '9999px',
                                color: '#FFF',
                                display: 'flex',
                                height: '24px',
                                justifyContent: 'center',
                                padding: '4px',
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                transform: 'translate(50%, -50%)',
                                width: '24px',
                            }}
                        >
                            5
                        </div>
                    </div>
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '4px',
                            height: '128px',
                            padding: '16px',
                            position: 'relative',
                            width: '40%',
                        }}
                    >
                        Modal
                        <div
                            style={{
                                alignItems: 'center',
                                backgroundColor: '#FF4136',
                                borderRadius: '9999px',
                                color: '#FFF',
                                display: 'flex',
                                height: '24px',
                                justifyContent: 'center',
                                padding: '4px',
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                transform: 'translate(50%, -50%)',
                                width: '24px',
                            }}
                        >
                            &times;
                        </div>
                    </div>
                </div>
            </section>
            <RelatedPatterns patterns={[Pattern.PresenceIndicator]} />
        </DetailsLayout>
    );
};

export default Details;
