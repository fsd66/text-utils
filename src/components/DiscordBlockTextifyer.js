import React from "react";
import { Discord } from "text-rand-utils";

import TextTransformer from "./TextTransformer";

export default class DiscordBlockTextifyer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            outputText: ""
        }

        this.onChangeEvent = this.onChangeEvent.bind(this);
    }

    onChangeEvent(text, event) {
        this.setState({ outputText: Discord.BlockTextifyer.blockTextify(text)});
    }

    render() {
        const inputPlaceholderText = `Changes B to 🅱`;
        const outputPlaceholderText = `Copy and Paste output to Discord`;

        return <TextTransformer inputPlaceholderText={inputPlaceholderText} outputPlaceholderText={outputPlaceholderText} onChangeEvent={this.onChangeEvent} outputText={this.state.outputText} />;
    }
}
