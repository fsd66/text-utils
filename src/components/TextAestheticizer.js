import React from "react";
import { Aestheticizer } from "text-rand-utils";

import TextTransformer from "./TextTransformer";

export default class TextAestheticizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            outputText: ""
        };

        this.onChangeEvent = this.onChangeEvent.bind(this);
    }

    onChangeEvent(text, event) {
        this.setState({ outputText: Aestheticizer.aestheticize(text) });
    }

    render() {

        return <TextTransformer inputPlaceholderText={`Input text to ${Aestheticizer.aestheticize("aestheticize")}`} outputPlaceholderText={Aestheticizer.aestheticize("Aestheticized ouput")} onChangeEvent={this.onChangeEvent} outputText={this.state.outputText} />
    }
}
