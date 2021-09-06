import React from "react";
import { Pekofyer } from "text-rand-utils";

import TextTransformer from "./TextTransformer";
import EmbeddedVideoRandomizer from "./EmbeddedVideoRandomizer";

import peko1 from "../peko/pekora-laugh-1.mp3";
import peko2 from "../peko/pekora-laugh-2.mp3";
import peko3 from "../peko/pekora-laugh-3.mp3";
import peko4 from "../peko/pekora-laugh-4.mp3";
import peko5 from "../peko/pekora-laugh-5.mp3";
import peko6 from "../peko/pekora-laugh-6.mp3";
import peko7 from "../peko/pekora-laugh-7.mp3";
import peko8 from "../peko/pekora-laugh-8.mp3";

export default class TextPekofyer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            outputText: "",
            enableArrows: false,
            laugh: true,
            nextLaugh: 0
        };

        this.laughs = [peko1, peko2, peko3, peko4, peko5, peko6, peko7, peko8];
        this.audioRefs = this.laughs.map(v => React.createRef());

        this.onChangeEvent = this.onChangeEvent.bind(this);
    }

    onChangeEvent(text, event) {
        let nextLaugh = this.state.nextLaugh;
        if (this.state.laugh) {
            this.audioRefs[nextLaugh].current.play();
            nextLaugh = (nextLaugh + 1) % this.laughs.length;
        }

        this.setState({ outputText: text ? Pekofyer.advancedPekofy(text, { spaceFill: this.state.enableArrows }) : "", nextLaugh });
    }

    render() {
        const peko = `peko peko peko peko peko peko peko peko peko peko peko peko peko peko`;

        const pekaudio = this.laughs.map((v, i) => {
            return (
                <audio key={`pekora-laugh-audio=${i}`} ref={this.audioRefs[i]}>
                    <source src={v} type="audio/mpeg" />
                </audio>
            )
        });
        return (
            <div>
                <div>
                    {pekaudio}
                </div>

                <TextTransformer inputPlaceholderText={peko}
                    outputPlaceholderText={Pekofyer.advancedPekofy(peko, { spaceFill: this.state.enableArrows })}
                    onChangeEvent={this.onChangeEvent}
                    outputText={this.state.outputText}
                    selectableOptions={[
                        {
                            label: "Show Arrows",
                            checked: this.state.enableArrows,
                            onClick: (c, t) => {
                                this.setState({ enableArrows: !this.state.enableArrows }, () => {
                                    this.onChangeEvent(t, false);
                                });
                            }
                        },
                        {
                            label: "Blessed",
                            checked: this.state.laugh,
                            onClick: (c, t) => {
                                this.setState({ laugh: !this.state.laugh });
                            }
                        }
                    ]} />
                <div className="level">
                    <div className="level-item">
                        <EmbeddedVideoRandomizer />
                    </div>
                </div>
            </div>
        )
    }
}
