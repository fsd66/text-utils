import React from "react";

export default class TextTransformer extends React.Component {
    static defaultProps = {
        inputPlaceholderText: "Input:",
        outputPlaceholderText: "Output:",
        textAreaRows: 10,
        onChangeEvent: (text, event) => { },
        initalInputText: "",
        outputText: "",
        selectableOptions: []
    }

    constructor(props) {
        super(props);
        this.inputText = this.props.initalInputText;
        this.onChangeEvent = this.onChangeEvent.bind(this);
    }

    onChangeEvent(text, event) {
        this.inputText = text;
        this.props.onChangeEvent(text, event);
    }

    render() {
        const inputPlaceholderText = this.props.inputPlaceholderText;
        const outputPlaceholderText = this.props.outputPlaceholderText;

        const selectableOptionsHtmlList = this.props.selectableOptions?.map((option, i) => {
            return (
                <div key={`selectable-options-${option.label}-${i}`}>
                    <label className="checkbox">
                        <input type="checkbox" checked={option.checked} onChange={e => option.onClick(e.target.value, this.inputText)} /> {option.label}
                    </label>
                </div>
            );
        });

        return (
            <div className="section">
                {selectableOptionsHtmlList?.length > 0 ? <div>{selectableOptionsHtmlList}</div> : <React.Fragment></React.Fragment>}
                <div className="columns">
                    <div className="column">
                        <textarea className="textarea has-fixed-size" placeholder={inputPlaceholderText} onChange={e => this.onChangeEvent(e.target.value, e)} rows={this.props.textAreaRows}></textarea>
                    </div>

                    <div className="column">
                        <textarea className="textarea has-fixed-size" readOnly={true} placeholder={outputPlaceholderText} value={this.props.outputText} rows={this.props.textAreaRows}></textarea>
                    </div>
                </div>
            </div>
        )
    }
}
