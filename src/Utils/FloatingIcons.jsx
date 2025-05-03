import React from 'react';

function FloatingIcons() {
    return (
        <>
            <div className="w-64 h-64 relative floating">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full">
                    <path
                        fill="#8B5CF6"
                        d="M47.7,-57.2C59.9,-45.8,66.8,-28.6,68.9,-11.1C71,6.4,68.3,24.1,58.8,36.2C49.3,48.3,33,54.7,15.8,60.5C-1.4,66.3,-19.5,71.5,-33.3,66.2C-47.1,60.9,-56.6,45.1,-63.4,28.5C-70.2,11.9,-74.3,-5.5,-69.8,-20.4C-65.3,-35.3,-52.2,-47.7,-38.1,-58.4C-24,-69.1,-9,-78.1,4.4,-83C17.8,-87.9,35.6,-68.7,47.7,-57.2Z"
                        transform="translate(100 100)"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-32 w-32 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute top-10 right-10 w-20 h-20 floating-delay">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-indigo-500">
                    <path
                        fill="currentColor"
                        d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
                    />
                </svg>
            </div>
            <div className="absolute bottom-20 left-10 w-16 h-16 floating">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-purple-400">
                    <path fill="currentColor"
                          d="M17.5,7A5.5,5.5 0 0,1 23,12.5A5.5,5.5 0 0,1 17.5,18C15.79,18 14.27,17.22 13.26,16H10.74C9.73,17.22 8.21,18 6.5,18A5.5,5.5 0 0,1 1,12.5A5.5,5.5 0 0,1 6.5,7H17.5M6.5,9A3.5,3.5 0 0,0 3,12.5A3.5,3.5 0 0,0 6.5,16C7.9,16 9.1,15.18 9.66,14H14.34C14.9,15.18 16.1,16 17.5,16A3.5,3.5 0 0,0 21,12.5A3.5,3.5 0 0,0 17.5,9H6.5M5.75,10.25H7.25V11.75H8.75V13.25H7.25V14.75H5.75V13.25H4.25V11.75H5.75V10.25M16.75,12.5A1,1 0 0,1 17.75,13.5A1,1 0 0,1 16.75,14.5A1,1 0 0,1 15.75,13.5A1,1 0 0,1 16.75,12.5M18.75,10.5A1,1 0 0,1 19.75,11.5A1,1 0 0,1 18.75,12.5A1,1 0 0,1 17.75,11.5A1,1 0 0,1 18.75,10.5Z"/>
                </svg>
            </div>
        </>
    );
}

export default FloatingIcons;