import React from "react";
import { Pekofyer } from "text-rand-utils";

import TextTransformer from "./TextTransformer";
import EmbeddedVideoRandomizer from "./EmbeddedVideoRandomizer";

export default class TextPekofyer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            outputText: "",
            enableArrows: false
        };

        this.onChangeEvent = this.onChangeEvent.bind(this);
    }

    onChangeEvent(text, event) {
        this.setState({ outputText: text ? Pekofyer.advancedPekofy(text, { spaceFill: this.state.enableArrows }) : "" });
    }

    render() {
        const peko = `peko peko peko peko peko peko peko peko peko peko peko peko peko peko`;
        return (
            <div>
                <TextTransformer inputPlaceholderText={peko}
                    outputPlaceholderText={Pekofyer.advancedPekofy(peko, { spaceFill: this.state.enableArrows })}
                    onChangeEvent={this.onChangeEvent}
                    outputText={this.state.outputText}
                    selectableOptions={[{
                        label: "Show Arrows",
                        checked: this.state.enableArrows,
                        onClick: (c, t) => {
                            this.setState({ enableArrows: !this.state.enableArrows }, () => {
                                this.onChangeEvent(t, false);
                            });
                        }
                    }]} />
                <div className="level">
                    <div className="level-item">
                        <EmbeddedVideoRandomizer />
                    </div>
                </div>
            </div>
        )
    }
}
