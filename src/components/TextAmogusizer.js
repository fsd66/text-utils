import React from "react";
import { Amogusizer } from "text-rand-utils";

import TextTransformer from "./TextTransformer";

export default class TextAmogusizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            outputText: ""
        };

        this.onChangeEvent = this.onChangeEvent.bind(this);
    }

    onChangeEvent(text, event) {
        this.setState({ outputText: text ? Amogusizer.amogusize(text) : "" });
    }

    render() {
        const example = "SUS";
        return (
            <div className="monospace-text">
                <TextTransformer inputPlaceholderText={example} outputPlaceholderText={Amogusizer.amogusize(example)} onChangeEvent={this.onChangeEvent} outputText={this.state.outputText} />
            </div>
        );
    }
}
