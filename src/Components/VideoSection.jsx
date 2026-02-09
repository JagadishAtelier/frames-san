import React from "react";

function VideoSection() {
    return (
        <section className="relative flex md:h-screen w-full items-center justify-center bg-[#040406] overflow-hidden">

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center">

                <div className="group relative cursor-pointer transition-transform duration-500">

                    <video
                        src="https://framerusercontent.com/assets/H9MXKNvW25MQd8KJXISTeLMW21U.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-64 md:w-full md:h-[95vh] object-contain opacity-90 brightness-110 rounded-md"
                    />
                </div>

            </div>
        </section>
    );
}

export default VideoSection;
