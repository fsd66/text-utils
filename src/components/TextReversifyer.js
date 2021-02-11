import React from "react";
import { Reversifyer } from "text-rand-utils";

import TextTransformer from "./TextTransformer";

export default class TextReversifyer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            outputText: ""
        };

        this.onChangeEvent = this.onChangeEvent.bind(this);
    }

    onChangeEvent(text, event) {
        this.setState({ outputText: text ? Reversifyer.reversify(text) : "" });
    }

    render() {
        const example = "Insert text to reverse here.";
        return <TextTransformer inputPlaceholderText={example} outputPlaceholderText={Reversifyer.reversify(example)} onChangeEvent={this.onChangeEvent} outputText={this.state.outputText} />
    }
}
