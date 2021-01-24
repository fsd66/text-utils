import React from "react";

export default class UtilSelector extends React.Component {
    static defaultProps = {
        tabs: [
            {
                title: "Random Capitalizer",
                id: "random-capitalizer"
            },
            {
                title: "Discord Block Textify",
                id: "discord-block-texify"
            }
        ],
        defaultActive: 0,
        tabSelectedCallback: (selectedIndex) => console.log(`Selected Tab: ${selectedIndex}`)
    };

    constructor(props) {
        super(props);

        this.state = {
            active: this.props.defaultActive
        };

        this.setSelectedTab = this.setSelectedTab.bind(this);
    }

    setSelectedTab(tabIndex, event) {
        event.preventDefault();
        this.setState({ active: tabIndex });
        this.props.tabSelectedCallback(tabIndex);
    }

    render() {
        const tabList = this.props.tabs.map((t, i) => {
            const buttonClassNames = ["button"];
            buttonClassNames.push(this.state.active === i ? "is-link" : "is-white");

            return (
                <li key={`util-selector-tab-${t.id}-${i}`}>
                    <button className={buttonClassNames.join(" ")} onClick={e => this.setSelectedTab(i, e)}>{`${t.title}`}</button>
                </li>
            );
        });

        return (
            <div className="tabs">
                <ul>
                    {tabList}
                </ul>
            </div>
        )
    }
}
