import React from "react";

export default class EmbeddedVideoRandomizer extends React.PureComponent {
    static defaultProps = {
        videoSize: { width: 560, height: 315 },
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
                src: "https://www.youtube.com/embed/AAr2lHZLNyU",
                title: "cinderella-pekover-song"
            }
        ]
    }

    render() {
        const selectedVideo = this.props.videos[Math.floor(Math.random() * this.props.videos.length)];

        return (
            <React.Fragment>
                <iframe title={selectedVideo.title} width={this.props.videoSize.width} height={this.props.videoSize.height} src={selectedVideo.src} frameBorder="0" allow={this.props.allow.join("; ")} allowFullScreen></iframe>
            </React.Fragment>
        )
    }
}
