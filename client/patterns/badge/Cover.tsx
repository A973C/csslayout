/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import Frame from '../../placeholders/Frame';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
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
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        borderRadius: '9999px',
                        color: '#FFF',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '32px',
                        justifyContent: 'center',
                        width: '32px',
                    }}
                >
                    1
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
