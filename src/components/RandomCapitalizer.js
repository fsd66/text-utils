import React from "react";
import { Capitalizer } from "text-rand-utils";

import TextTransformer from "./TextTransformer";

export default class RandomCapitalizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            outputText: ""
        }

        this.onChangeEvent = this.onChangeEvent.bind(this);
    }

    onChangeEvent(text, event) {
        this.setState({ outputText: Capitalizer.randomize(text)});
    }

    render() {
        const inputPlaceholderText = `Input your text to ${Capitalizer.randomize("randomly capitalize")} here.`;
        const outputPlaceholderText = `${Capitalizer.randomize("output")}`;

        return <TextTransformer inputPlaceholderText={inputPlaceholderText} outputPlaceholderText={outputPlaceholderText} onChangeEvent={this.onChangeEvent} outputText={this.state.outputText} />;
    }
}
