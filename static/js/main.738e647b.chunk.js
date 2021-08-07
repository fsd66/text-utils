(this["webpackJsonptext-utils"]=this["webpackJsonptext-utils"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),o=n.n(i),c=n(12),r=n.n(c),s=(n(18),n(2)),l=n(3),u=n(5),h=n(4),p=(n(19),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("nav",{className:"navbar",children:Object(a.jsx)("div",{className:"navbar-brand",children:Object(a.jsx)("h1",{className:"title",children:"Text-Utils"})})})}}]),n}(o.a.Component)),d=n(6),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={active:a.props.defaultActive},a.setSelectedTab=a.setSelectedTab.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"setSelectedTab",value:function(e,t){t.preventDefault(),this.setState({active:e}),this.props.tabSelectedCallback(e)}},{key:"render",value:function(){var e=this,t=this.props.tabs.map((function(t,n){var i=["button"];return i.push(e.state.active===n?"is-link":"is-light"),Object(a.jsx)("li",{children:Object(a.jsx)("button",{className:i.join(" "),onClick:function(t){return e.setSelectedTab(n,t)},children:"".concat(t.title)})},"util-selector-tab-".concat(t.id,"-").concat(n))}));return Object(a.jsx)("div",{className:"tabs",children:Object(a.jsx)("ul",{children:t})})}}]),n}(o.a.Component);b.defaultProps={tabs:[{title:"Random Capitalizer",id:"random-capitalizer"},{title:"Discord Block Textify",id:"discord-block-texify"}],defaultActive:0,tabSelectedCallback:function(e){return console.log("Selected Tab: ".concat(e))}};var v=n(7),j=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).inputText=a.props.initalInputText,a.onChangeEvent=a.onChangeEvent.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"onChangeEvent",value:function(e,t){this.inputText=e,this.props.onChangeEvent(e,t)}},{key:"render",value:function(){var e,t=this,n=this.props.inputPlaceholderText,i=this.props.outputPlaceholderText,c=null===(e=this.props.selectableOptions)||void 0===e?void 0:e.map((function(e,n){return Object(a.jsx)("div",{children:Object(a.jsxs)("label",{className:"checkbox",children:[Object(a.jsx)("input",{type:"checkbox",checked:e.checked,onChange:function(n){return e.onClick(n.target.value,t.inputText)}})," ",e.label]})},"selectable-options-".concat(e.label,"-").concat(n))}));return Object(a.jsxs)("div",{className:"section",children:[(null===c||void 0===c?void 0:c.length)>0?Object(a.jsx)("div",{children:c}):Object(a.jsx)(o.a.Fragment,{}),Object(a.jsxs)("div",{className:"columns",children:[Object(a.jsx)("div",{className:"column",children:Object(a.jsx)("textarea",{className:"textarea has-fixed-size",placeholder:n,onChange:function(e){return t.onChangeEvent(e.target.value,e)},rows:this.props.textAreaRows})}),Object(a.jsx)("div",{className:"column",children:Object(a.jsx)("textarea",{className:"textarea has-fixed-size",readOnly:!0,placeholder:i,value:this.props.outputText,rows:this.props.textAreaRows})})]})]})}}]),n}(o.a.Component);j.defaultProps={inputPlaceholderText:"Input:",outputPlaceholderText:"Output:",textAreaRows:10,onChangeEvent:function(e,t){},initalInputText:"",outputText:"",selectableOptions:[]};var x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={outputText:""},a.onChangeEvent=a.onChangeEvent.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"onChangeEvent",value:function(e,t){this.setState({outputText:v.Capitalizer.randomize(e)})}},{key:"render",value:function(){var e="Input your text to ".concat(v.Capitalizer.randomize("randomly capitalize")," here."),t="".concat(v.Capitalizer.randomize("output"));return Object(a.jsx)(j,{inputPlaceholderText:e,outputPlaceholderText:t,onChangeEvent:this.onChangeEvent,outputText:this.state.outputText})}}]),n}(o.a.Component),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={outputText:""},a.onChangeEvent=a.onChangeEvent.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"onChangeEvent",value:function(e,t){this.setState({outputText:v.Discord.BlockTextifyer.blockTextify(e)})}},{key:"render",value:function(){return Object(a.jsx)(j,{inputPlaceholderText:"Changes B to \ud83c\udd71",outputPlaceholderText:"Copy and Paste output to Discord",onChangeEvent:this.onChangeEvent,outputText:this.state.outputText})}}]),n}(o.a.Component),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={outputText:""},a.onChangeEvent=a.onChangeEvent.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"onChangeEvent",value:function(e,t){this.setState({outputText:v.Aestheticizer.aestheticize(e)})}},{key:"render",value:function(){return Object(a.jsx)(j,{inputPlaceholderText:"Input text to ".concat(v.Aestheticizer.aestheticize("aestheticize")),outputPlaceholderText:v.Aestheticizer.aestheticize("Aestheticized output"),onChangeEvent:this.onChangeEvent,outputText:this.state.outputText})}}]),n}(o.a.Component),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.videos[Math.floor(Math.random()*this.props.videos.length)];return Object(a.jsx)(o.a.Fragment,{children:Object(a.jsx)("iframe",{title:e.title,width:this.props.videoSize.width,height:this.props.videoSize.height,src:e.src,frameBorder:"0",allow:this.props.allow.join("; "),allowFullScreen:!0})})}}]),n}(o.a.PureComponent);m.defaultProps={videoSize:{width:560,height:315},allow:["accelerometer","autoplay","clipboard-write","clipboard-write","encrypted-media","gyroscope","picture-in-picture"],videos:[{src:"https://www.youtube.com/embed/uRB1G0cKpIk",title:"peko-miko-daisensou-song"},{src:"https://www.youtube.com/embed/_KTwDH_KQ_g",title:"peko-random-brain-song"},{src:"https://www.youtube.com/embed/AAr2lHZLNyU",title:"discommunication-alien-pekover-song"},{src:"https://www.youtube.com/embed/ZRCzLtCsIQs",title:"peko-moon-turing-love-pekover-song"}]};var k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={outputText:"",enableArrows:!1},a.onChangeEvent=a.onChangeEvent.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"onChangeEvent",value:function(e,t){this.setState({outputText:e?v.Pekofyer.advancedPekofy(e,{spaceFill:this.state.enableArrows}):""})}},{key:"render",value:function(){var e=this,t="peko peko peko peko peko peko peko peko peko peko peko peko peko peko";return Object(a.jsxs)("div",{children:[Object(a.jsx)(j,{inputPlaceholderText:t,outputPlaceholderText:v.Pekofyer.advancedPekofy(t,{spaceFill:this.state.enableArrows}),onChangeEvent:this.onChangeEvent,outputText:this.state.outputText,selectableOptions:[{label:"Show Arrows",checked:this.state.enableArrows,onClick:function(t,n){e.setState({enableArrows:!e.state.enableArrows},(function(){e.onChangeEvent(n,!1)}))}}]}),Object(a.jsx)("div",{className:"level",children:Object(a.jsx)("div",{className:"level-item",children:Object(a.jsx)(m,{})})})]})}}]),n}(o.a.Component),C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={outputText:""},a.onChangeEvent=a.onChangeEvent.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"onChangeEvent",value:function(e,t){this.setState({outputText:e?v.Reversifyer.reversify(e):""})}},{key:"render",value:function(){var e="Insert text to reverse here.";return Object(a.jsx)(j,{inputPlaceholderText:e,outputPlaceholderText:v.Reversifyer.reversify(e),onChangeEvent:this.onChangeEvent,outputText:this.state.outputText})}}]),n}(o.a.Component),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={currentUtil:a.props.defaultUtil},a}return Object(l.a)(n,[{key:"render",value:function(){var e,t,n=this,i=(null===(e=this.props.utilities)||void 0===e||null===(t=e[this.state.currentUtil])||void 0===t?void 0:t.html)||Object(a.jsx)("div",{children:"Unable to load utility"});return Object(a.jsxs)("div",{className:"App container",children:[Object(a.jsx)(p,{}),Object(a.jsx)(b,{tabs:this.props.utilities,tabSelectedCallback:function(e){return n.setState({currentUtil:e})}}),i]})}}]),n}(o.a.Component);g.defaultProps={utilities:[{html:Object(a.jsx)(x,{}),title:"Random Captializer",id:"random-capitalizer"},{html:Object(a.jsx)(O,{}),title:"Discord Block Textifyer",id:"discord-block-textifyer"},{html:Object(a.jsx)(f,{}),title:"Aestheticizer",id:"text-aestheticizer"},{html:Object(a.jsx)(C,{}),title:"Reversifyer",id:"text-reversifyer"},{html:Object(a.jsx)(k,{}),title:"\u307a\u30fc\u3053\u307a\u3053\u307a\u3053\uff01\uff01\uff01",id:"pekofyer"}],defaultUtil:0};var T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),o(e),c(e)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),T()}},[[30,1,2]]]);
//# sourceMappingURL=main.738e647b.chunk.js.map