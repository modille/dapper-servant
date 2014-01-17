// ==UserScript==
// // @name        Dapper Servant
// // @namespace   https://github.com/modille
// // @include     http://*:5050/*/configure
// // @version     1
// // @grant       none
// // ==/UserScript==



function addGlobalStyle( css ) {
  var head, style;
  head = document.getElementsByTagName( 'head' )[0];
  if ( !head ) { return; }
  style = document.createElement( 'style' );
  style.type = 'text/css';
  style.innerHTML = css;
  head.appendChild( style );
}
