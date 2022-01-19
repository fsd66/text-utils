import React from "react";

export default class EmbeddedVideoRandomizer extends React.PureComponent {
    static defaultProps = {
        //videoSize: { width: 560, height: 315 },
        fullscreen: false,
        allow: [
            "accelerometer",
            "autoplay",
            "clipboard-write",
            "clipboard-write",
            "encrypted-media",
            "gyroscope",
            "picture-in-picture"
        ],
        videos: [
            {
                src: "https://www.youtube.com/embed/uRB1G0cKpIk",
                title: "peko-miko-daisensou-song"
            },
            {
                src: "https://www.youtube.com/embed/_KTwDH_KQ_g",
                title: "peko-random-brain-song"
            },
            {
                src: "https://www.youtube.com/embed/AAr2lHZLNyU",
                title: "discommunication-alien-pekover-song"
            },
            {
                src: "https://www.youtube.com/embed/ZRCzLtCsIQs",
                title: "peko-moon-turing-love-pekover-song"
            },
            {
                src: "https://www.youtube.com/embed/aozNBX2dF6c",
                title: "cinderella-pekover-song"
            },
            {
                src: "https://www.youtube.com/embed/IVOMj4x2VVg",
                title: "iiwake-bunny-song"
            },
            {
                src: "https://www.youtube.com/embed/F61eDAXtmnw",
                title: "interact-fantasia-pekolab-song"
            }
        ]
    }

    render() {
        const selectedVideo = this.props.videos[Math.floor(Math.random() * this.props.videos.length)];
        const iFrameProps = {
            src: selectedVideo.src,
            frameBorder: "0",
            allow: this.props.allow.join("; ")
        }
        const classNames = [];

        if (this.props.fullscreen) {
            classNames.push("video-fullscreen");
            iFrameProps.autoplay = true;

        } else {
            classNames.push("video-fullwidth");
            iFrameProps.allowFullScreen = true;
        }

        return (
            <div className="video-container">
                <iframe title={selectedVideo.title} className={classNames.join(" ")} {...iFrameProps}></iframe>
            </div>
        )
    }
}
