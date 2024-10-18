import React from "react";
import { images } from "/src/config/images.js"

const Banner = () => {
    return <section
        style={{
            background: `linear-gradient(60deg, #000, #000, #00000030), url(${images.banner})`,
            backgroundSize: 'cover',
            minHeight: '100vh'
        }}
        className="!min-h-screen grid place-content-center"
    >
        <div>
            <h3 className="!text-[5rem] font-semibold font-white font-[nakkhatraFont] leading-[5rem] bg-gradient-to-bl from-blue-400 to-white text-transparent bg-clip-text py-5">ইলম পিপাসুদের পাথেয়। <br />
                সুন্নাহর সাথে, সালাফদের পথে।</h3>
            <div className="tooltip tooltip-bottom tooltip-open" data-tip="প্রত্যেক মুসলিমের উপর ইলম অর্জন করা ফরয">
                <p className="text-4xl font-semibold font-[uthmani]">طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ</p>
            </div>
        </div>
    </section>;
};


export default Banner;
