import React from "react";

export default class TextTransformer extends React.Component {
    static defaultProps = {
        inputPlaceholderText: "Input:",
        outputPlaceholderText: "Output:",
        textAreaRows: 10,
        onChangeEvent: (text, event) => {},
        outputText: ""
    }

    constructor(props) {
        super(props);

        this.onChangeEvent = this.onChangeEvent.bind(this);
    }

    onChangeEvent(text, event) {
        this.props.onChangeEvent(text, event);
    }

    render() {
        const inputPlaceholderText = this.props.inputPlaceholderText;
        const outputPlaceholderText = this.props.outputPlaceholderText;

        return (
            <div className="columns">
                <div className="column">
                    <textarea className="textarea has-fixed-size" placeholder={inputPlaceholderText} onChange={e => this.onChangeEvent(e.target.value, e)} rows={this.props.textAreaRows}></textarea>
                </div>

                <div className="column">
                    <textarea className="textarea has-fixed-size" readOnly={true} placeholder={outputPlaceholderText} value={this.props.outputText} rows={this.props.textAreaRows}></textarea>
                </div>
            </div>
        )
    }
}
