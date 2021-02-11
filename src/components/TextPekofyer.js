import React from "react";
import { Pekofyer } from "text-rand-utils";

import TextTransformer from "./TextTransformer";

export default class TextPekofyer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            outputText: ""
        };

        this.onChangeEvent = this.onChangeEvent.bind(this);
    }

    onChangeEvent(text, event) {
        this.setState({ outputText: text ? Pekofyer.pekofy(text) : "" });
    }

    render() {
        const peko = `peko peko peko peko peko peko peko peko peko peko peko peko peko peko peko peko`;
        return (
            <div>
                <TextTransformer inputPlaceholderText={peko} outputPlaceholderText={Pekofyer.pekofy(peko)} onChangeEvent={this.onChangeEvent} outputText={this.state.outputText} />

                <div className="level">
                    <div className="level-item">
                        <iframe title="peko-miko-song" width="560" height="315" src="https://www.youtube.com/embed/uRB1G0cKpIk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        )
    }
}
