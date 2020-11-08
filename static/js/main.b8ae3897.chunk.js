(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s(1),a=s.n(n),c=s(7),l=s.n(c),u=s(2),o=s(3),i=s(5),h=s(4),d=s(8),m=function(e){return Object(r.jsx)("button",{className:e.className,onClick:e.onClick,children:e.value})},j=function(e){return Object(r.jsx)(m,{className:"square",onClick:e.onClick,value:e.value})},p=function(e){Object(i.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).renderSquare=function(t){return Object(r.jsx)(j,{value:e.props.squares[t],onClick:function(){e.props.onClick(t)}})},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(r.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(r.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),s}(a.a.Component),b=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]],s=0;s<t.length;s++){var r=Object(d.a)(t[s],3),n=r[0],a=r[1],c=r[2];if(e[n]&&e[n]===e[a]&&e[n]===e[c])return e[n]}return null},v=function(e){Object(i.a)(s,e);var t=Object(h.a)(s);function s(e){var r;return Object(u.a)(this,s),(r=t.call(this,e)).showMove=function(){r.setState({displayMove:!r.state.displayMove})},r.restartGame=function(){r.setState({history:[{squares:[null,null,null,null,null,null,null,null,null]}],stepNumber:0,xisNext:!0,computerTurn:!1})},r.jumpTo=function(e){r.setState({stepNumber:e,xisNext:e%2===0})},r.changeMode=function(){r.setState({history:[{squares:[null,null,null,null,null,null,null,null,null]}],stepNumber:0,xisNext:!0,computerMode:!r.state.computerMode,computerTurn:!1})},r.computerMove=function(){var e=r.state.computerTurn;if(e&&r.state.computerMode){var t=r.state.history.slice(0,r.state.stepNumber+1),s=t[t.length-1].squares.slice(),n=b(s),a=function(){var e=0;if(!n){for(;s[e]||9===e;)e=Math.floor(Math.random()*s.length+1);return e}}();n||(s[a]=r.state.xisNext?"X":"O",r.setState({history:t.concat({squares:s}),stepNumber:t.length,xisNext:!r.state.xisNext,computerTurn:!e}))}},r.handleClick=function(e){var t=!!r.state.computerMode&&r.state.computerTurn;if(!t){var s=r.state.history.slice(0,r.state.stepNumber+1),n=s[s.length-1].squares.slice();b(n)||n[e]||(n[e]=r.state.xisNext?"X":"O",r.setState({history:s.concat({squares:n}),stepNumber:s.length,xisNext:!r.state.xisNext,computerTurn:!t}))}},r.state={history:[{squares:[null,null,null,null,null,null,null,null,null]}],stepNumber:0,xisNext:!0,displayMove:!1,computerTurn:!1,computerMode:!1},r}return Object(o.a)(s,[{key:"componentDidUpdate",value:function(){this.state.computerMode&&this.computerMove()}},{key:"render",value:function(){var e,t=this,s=this.state.history,n=s[this.state.stepNumber],a=b(n.squares);e=a?Object(r.jsxs)("span",{children:[a," is winner!! \ud83e\udd73 \ud83c\udf89 \ud83c\udf89 \ud83c\udf89"]}):n.squares.length===this.state.stepNumber?"Draw":"Next Player: ".concat(this.state.xisNext?"X":"O");var c=s.map((function(e,s){var n=s?s===t.state.stepNumber?"Move #".concat(s):"Go to move #".concat(s):"Go to game start";return Object(r.jsx)("li",{children:Object(r.jsx)(m,{className:s===t.state.stepNumber?"activeHistoryBtn":"historyBtn",onClick:function(){t.jumpTo(s)},value:n})},s)}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"Tic-Tac-Toe"}),Object(r.jsxs)("div",{className:"game",children:[Object(r.jsxs)("div",{className:"game-board",children:[Object(r.jsx)(p,{onClick:function(e){t.handleClick(e)},squares:n.squares}),Object(r.jsx)(m,{className:"replayBtn",onClick:this.restartGame,value:"Replay"}),Object(r.jsx)(m,{className:"changeModeBtn",onClick:this.changeMode,value:this.state.computerMode?"Multiplayer":"Computer Mode"})]}),Object(r.jsxs)("div",{className:"game-info",children:[Object(r.jsx)("div",{className:"game-status",children:e}),Object(r.jsx)(m,{className:"showHistoryBtn",onClick:this.showMove,value:this.state.displayMove?"Hide Moves":"Show Moves"}),Object(r.jsx)("ol",{className:this.state.displayMove?"showHistory":"hideHistory",children:c})]}),Object(r.jsx)("div",{className:"change-mode-container"})]})]})}}]),s}(a.a.Component);s(14);l.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b8ae3897.chunk.js.map