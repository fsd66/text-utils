import React from "react";
import './custom.scss';

import Header from "./components/Header";
import UtilSelector from "./components/UtilSelector";
import RandomCapitalizer from "./components/RandomCapitalizer";
import DiscordBlockTextifyer from "./components/DiscordBlockTextifyer";

export default class TextUtilsApp extends React.Component {
  static defaultProps = {
    utilities: [
      <RandomCapitalizer />,
      <DiscordBlockTextifyer />
    ],
    defaultUtil: 0
  }

  constructor(props) {
    super(props);

    this.state = {
      currentUtil: this.props.defaultUtil
    }
  }

  render() {
    const utilsHtml = this.props.utilities?.[this.state.currentUtil] || (<div>Unable to load utility</div>);

    return (
      <div className="App container">
        <Header />
        <UtilSelector tabSelectedCallback={selectedIndex => this.setState({ currentUtil: selectedIndex })} />
        {utilsHtml}
      </div>
    );
  }
}
