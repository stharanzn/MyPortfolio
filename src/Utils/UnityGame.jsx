import React from 'react';

const UnityGame = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', paddingTop: '56.25%' }}>
            {/*<iframe*/}
            {/*    src="../UnityGame/index.html"*/}
            {/*    title="Unity WebGL Game"*/}
            {/*    allowFullScreen*/}
            {/*    style={{*/}
            {/*        position: 'absolute',*/}
            {/*        top: 0,*/}
            {/*        left: 0,*/}
            {/*        width: '100%',*/}
            {/*        height: '100%',*/}
            {/*        borderRadius: '16px',*/}
            {/*    }}*/}
            {/*></iframe>*/}
            <iframe
                src="/Build/index.html"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        borderRadius: '16px',
                    }}
                title="Unity Game"/>
        </div>
    );
};

export default UnityGame;
