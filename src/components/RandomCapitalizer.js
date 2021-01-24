import React from "react";
import { Capitalizer } from "text-rand-utils";

export default class RandomCapitalizer extends React.Component {
    static defaultProps = {
        textAreaRows: 10
    }

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

        return (
            <div className="columns">
                <div className="column">
                    <textarea className="textarea has-fixed-size" placeholder={inputPlaceholderText} onChange={e => this.onChangeEvent(e.target.value, e)} rows={this.props.textAreaRows}></textarea>
                </div>

                <div className="column">
                    <textarea className="textarea has-fixed-size" readOnly={true} placeholder={outputPlaceholderText} value={this.state.outputText} rows={this.props.textAreaRows}></textarea>
                </div>
            </div>
        )
    }
}
