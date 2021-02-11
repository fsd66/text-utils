import React from "react";
import './custom.scss';

import Header from "./components/Header";
import UtilSelector from "./components/UtilSelector";
import RandomCapitalizer from "./components/RandomCapitalizer";
import DiscordBlockTextifyer from "./components/DiscordBlockTextifyer";
import TextAestheticizer from "./components/TextAestheticizer";
import TextPekofyer from "./components/TextPekofyer";
import TextReversifyer from "./components/TextReversifyer";

export default class TextUtilsApp extends React.Component {
  static defaultProps = {
    utilities: [
      {
        html: <RandomCapitalizer />,
        title: "Random Captializer",
        id: "random-capitalizer"
      },
      {
        html: <DiscordBlockTextifyer />,
        title: "Discord Block Textifyer",
        id: "discord-block-textifyer"
      },
      {
        html: <TextAestheticizer />,
        title: "Aestheticizer",
        id: "text-aestheticizer"
      },
      {
        html: <TextPekofyer />,
        title: "ぺーこぺこぺこ！！！",
        id: "pekofyer"
      },
      {
        html: <TextReversifyer />,
        title: "Reversifyer",
        id: "text-reversifyer"
      }
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
    const utilsHtml = this.props.utilities?.[this.state.currentUtil]?.html || (<div>Unable to load utility</div>);

    return (
      <div className="App container">
        <Header />
        <UtilSelector tabs={this.props.utilities} tabSelectedCallback={selectedIndex => this.setState({ currentUtil: selectedIndex })} />
        {utilsHtml}
      </div>
    );
  }
}
