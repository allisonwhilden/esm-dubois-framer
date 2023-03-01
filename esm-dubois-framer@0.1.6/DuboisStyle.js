// src/DuboisStyle.tsx
var DuboisStyle = `
  [class^="du-bois-light"] {
    box-sizing: border-box;
  }
  [class^="du-bois-light"] *,
  [class^="du-bois-light"] *::before,
  [class^="du-bois-light"] *::after {
    box-sizing: border-box;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  [class^="du-bois-light-"]::-ms-clear,
  [class*="du-bois-light-"]::-ms-clear,
  [class^="du-bois-light-"] input::-ms-clear,
  [class*="du-bois-light-"] input::-ms-clear,
  [class^="du-bois-light-"] input::-ms-reveal,
  [class*="du-bois-light-"] input::-ms-reveal {
    display: none;
  }
  /* stylelint-disable at-rule-no-unknown */
  @-ms-viewport {
    width: device-width;
  }
  abbr[data-original-title] {
    text-decoration: underline;
    text-decoration: underline dotted;
    border-bottom: 0;
    cursor: help;
  }
  .anticon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .anticon > * {
    line-height: 1;
  }
  .anticon svg {
    display: inline-block;
  }
  .anticon::before {
    display: none;
  }
  .anticon .anticon-icon {
    display: block;
  }
  .anticon[tabindex] {
    cursor: pointer;
  }
  .anticon-spin::before {
    display: inline-block;
    animation: loadingCircle 1s infinite linear;
  }
  .anticon-spin {
    display: inline-block;
    animation: loadingCircle 1s infinite linear;
  }
  .du-bois-light-fade-enter,
  .du-bois-light-fade-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-fade-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-fade-enter.du-bois-light-fade-enter-active,
  .du-bois-light-fade-appear.du-bois-light-fade-appear-active {
    animation-name: antFadeIn;
    animation-play-state: running;
  }
  .du-bois-light-fade-leave.du-bois-light-fade-leave-active {
    animation-name: antFadeOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .du-bois-light-fade-enter,
  .du-bois-light-fade-appear {
    opacity: 0;
    animation-timing-function: linear;
  }
  .du-bois-light-fade-leave {
    animation-timing-function: linear;
  }
  @keyframes antFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes antFadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .du-bois-light-move-up-enter,
  .du-bois-light-move-up-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-move-up-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-move-up-enter.du-bois-light-move-up-enter-active,
  .du-bois-light-move-up-appear.du-bois-light-move-up-appear-active {
    animation-name: antMoveUpIn;
    animation-play-state: running;
  }
  .du-bois-light-move-up-leave.du-bois-light-move-up-leave-active {
    animation-name: antMoveUpOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .du-bois-light-move-up-enter,
  .du-bois-light-move-up-appear {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .du-bois-light-move-up-leave {
    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  }
  .du-bois-light-move-down-enter,
  .du-bois-light-move-down-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-move-down-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-move-down-enter.du-bois-light-move-down-enter-active,
  .du-bois-light-move-down-appear.du-bois-light-move-down-appear-active {
    animation-name: antMoveDownIn;
    animation-play-state: running;
  }
  .du-bois-light-move-down-leave.du-bois-light-move-down-leave-active {
    animation-name: antMoveDownOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .du-bois-light-move-down-enter,
  .du-bois-light-move-down-appear {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .du-bois-light-move-down-leave {
    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  }
  .du-bois-light-move-left-enter,
  .du-bois-light-move-left-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-move-left-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-move-left-enter.du-bois-light-move-left-enter-active,
  .du-bois-light-move-left-appear.du-bois-light-move-left-appear-active {
    animation-name: antMoveLeftIn;
    animation-play-state: running;
  }
  .du-bois-light-move-left-leave.du-bois-light-move-left-leave-active {
    animation-name: antMoveLeftOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .du-bois-light-move-left-enter,
  .du-bois-light-move-left-appear {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .du-bois-light-move-left-leave {
    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  }
  .du-bois-light-move-right-enter,
  .du-bois-light-move-right-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-move-right-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-move-right-enter.du-bois-light-move-right-enter-active,
  .du-bois-light-move-right-appear.du-bois-light-move-right-appear-active {
    animation-name: antMoveRightIn;
    animation-play-state: running;
  }
  .du-bois-light-move-right-leave.du-bois-light-move-right-leave-active {
    animation-name: antMoveRightOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .du-bois-light-move-right-enter,
  .du-bois-light-move-right-appear {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .du-bois-light-move-right-leave {
    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  }
  @keyframes antMoveDownIn {
    0% {
      transform: translateY(100%);
      transform-origin: 0 0;
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      transform-origin: 0 0;
      opacity: 1;
    }
  }
  @keyframes antMoveDownOut {
    0% {
      transform: translateY(0%);
      transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      transform: translateY(100%);
      transform-origin: 0 0;
      opacity: 0;
    }
  }
  @keyframes antMoveLeftIn {
    0% {
      transform: translateX(-100%);
      transform-origin: 0 0;
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      transform-origin: 0 0;
      opacity: 1;
    }
  }
  @keyframes antMoveLeftOut {
    0% {
      transform: translateX(0%);
      transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      transform: translateX(-100%);
      transform-origin: 0 0;
      opacity: 0;
    }
  }
  @keyframes antMoveRightIn {
    0% {
      transform: translateX(100%);
      transform-origin: 0 0;
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      transform-origin: 0 0;
      opacity: 1;
    }
  }
  @keyframes antMoveRightOut {
    0% {
      transform: translateX(0%);
      transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      transform: translateX(100%);
      transform-origin: 0 0;
      opacity: 0;
    }
  }
  @keyframes antMoveUpIn {
    0% {
      transform: translateY(-100%);
      transform-origin: 0 0;
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      transform-origin: 0 0;
      opacity: 1;
    }
  }
  @keyframes antMoveUpOut {
    0% {
      transform: translateY(0%);
      transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      transform: translateY(-100%);
      transform-origin: 0 0;
      opacity: 0;
    }
  }
  @keyframes loadingCircle {
    100% {
      transform: rotate(360deg);
    }
  }
  [du-bois-light-click-animating="true"],
  [du-bois-light-click-animating-without-extra-node="true"] {
    position: relative;
  }
  [du-bois-light-click-animating-without-extra-node="true"]::after,
  .du-bois-light-click-animating-node {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    border-radius: inherit;
    box-shadow: 0 0 0 0 #2272b4;
    box-shadow: 0 0 0 0 var(--antd-wave-shadow-color);
    opacity: 0.2;
    animation: fadeEffect 2s cubic-bezier(0.08, 0.82, 0.17, 1),
      waveEffect 0.4s cubic-bezier(0.08, 0.82, 0.17, 1);
    animation-fill-mode: forwards;
    content: "";
    pointer-events: none;
  }
  @keyframes waveEffect {
    100% {
      box-shadow: 0 0 0 #2272b4;
      box-shadow: 0 0 0 6px var(--antd-wave-shadow-color);
    }
  }
  @keyframes fadeEffect {
    100% {
      opacity: 0;
    }
  }
  .du-bois-light-slide-up-enter,
  .du-bois-light-slide-up-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-slide-up-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-slide-up-enter.du-bois-light-slide-up-enter-active,
  .du-bois-light-slide-up-appear.du-bois-light-slide-up-appear-active {
    animation-name: antSlideUpIn;
    animation-play-state: running;
  }
  .du-bois-light-slide-up-leave.du-bois-light-slide-up-leave-active {
    animation-name: antSlideUpOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .du-bois-light-slide-up-enter,
  .du-bois-light-slide-up-appear {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .du-bois-light-slide-up-leave {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  .du-bois-light-slide-down-enter,
  .du-bois-light-slide-down-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-slide-down-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-slide-down-enter.du-bois-light-slide-down-enter-active,
  .du-bois-light-slide-down-appear.du-bois-light-slide-down-appear-active {
    animation-name: antSlideDownIn;
    animation-play-state: running;
  }
  .du-bois-light-slide-down-leave.du-bois-light-slide-down-leave-active {
    animation-name: antSlideDownOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .du-bois-light-slide-down-enter,
  .du-bois-light-slide-down-appear {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .du-bois-light-slide-down-leave {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  .du-bois-light-slide-left-enter,
  .du-bois-light-slide-left-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-slide-left-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-slide-left-enter.du-bois-light-slide-left-enter-active,
  .du-bois-light-slide-left-appear.du-bois-light-slide-left-appear-active {
    animation-name: antSlideLeftIn;
    animation-play-state: running;
  }
  .du-bois-light-slide-left-leave.du-bois-light-slide-left-leave-active {
    animation-name: antSlideLeftOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .du-bois-light-slide-left-enter,
  .du-bois-light-slide-left-appear {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .du-bois-light-slide-left-leave {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  .du-bois-light-slide-right-enter,
  .du-bois-light-slide-right-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-slide-right-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-slide-right-enter.du-bois-light-slide-right-enter-active,
  .du-bois-light-slide-right-appear.du-bois-light-slide-right-appear-active {
    animation-name: antSlideRightIn;
    animation-play-state: running;
  }
  .du-bois-light-slide-right-leave.du-bois-light-slide-right-leave-active {
    animation-name: antSlideRightOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .du-bois-light-slide-right-enter,
  .du-bois-light-slide-right-appear {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .du-bois-light-slide-right-leave {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  @keyframes antSlideUpIn {
    0% {
      transform: scaleY(0.8);
      transform-origin: 0% 0%;
      opacity: 0;
    }
    100% {
      transform: scaleY(1);
      transform-origin: 0% 0%;
      opacity: 1;
    }
  }
  @keyframes antSlideUpOut {
    0% {
      transform: scaleY(1);
      transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      transform: scaleY(0.8);
      transform-origin: 0% 0%;
      opacity: 0;
    }
  }
  @keyframes antSlideDownIn {
    0% {
      transform: scaleY(0.8);
      transform-origin: 100% 100%;
      opacity: 0;
    }
    100% {
      transform: scaleY(1);
      transform-origin: 100% 100%;
      opacity: 1;
    }
  }
  @keyframes antSlideDownOut {
    0% {
      transform: scaleY(1);
      transform-origin: 100% 100%;
      opacity: 1;
    }
    100% {
      transform: scaleY(0.8);
      transform-origin: 100% 100%;
      opacity: 0;
    }
  }
  @keyframes antSlideLeftIn {
    0% {
      transform: scaleX(0.8);
      transform-origin: 0% 0%;
      opacity: 0;
    }
    100% {
      transform: scaleX(1);
      transform-origin: 0% 0%;
      opacity: 1;
    }
  }
  @keyframes antSlideLeftOut {
    0% {
      transform: scaleX(1);
      transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      transform: scaleX(0.8);
      transform-origin: 0% 0%;
      opacity: 0;
    }
  }
  @keyframes antSlideRightIn {
    0% {
      transform: scaleX(0.8);
      transform-origin: 100% 0%;
      opacity: 0;
    }
    100% {
      transform: scaleX(1);
      transform-origin: 100% 0%;
      opacity: 1;
    }
  }
  @keyframes antSlideRightOut {
    0% {
      transform: scaleX(1);
      transform-origin: 100% 0%;
      opacity: 1;
    }
    100% {
      transform: scaleX(0.8);
      transform-origin: 100% 0%;
      opacity: 0;
    }
  }
  .du-bois-light-zoom-enter,
  .du-bois-light-zoom-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-zoom-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-zoom-enter.du-bois-light-zoom-enter-active,
  .du-bois-light-zoom-appear.du-bois-light-zoom-appear-active {
    animation-name: antZoomIn;
    animation-play-state: running;
  }
  .du-bois-light-zoom-leave.du-bois-light-zoom-leave-active {
    animation-name: antZoomOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .du-bois-light-zoom-enter,
  .du-bois-light-zoom-appear {
    transform: scale(0);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .du-bois-light-zoom-enter-prepare,
  .du-bois-light-zoom-appear-prepare {
    transform: none;
  }
  .du-bois-light-zoom-leave {
    animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .du-bois-light-zoom-big-enter,
  .du-bois-light-zoom-big-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-zoom-big-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-zoom-big-enter.du-bois-light-zoom-big-enter-active,
  .du-bois-light-zoom-big-appear.du-bois-light-zoom-big-appear-active {
    animation-name: antZoomBigIn;
    animation-play-state: running;
  }
  .du-bois-light-zoom-big-leave.du-bois-light-zoom-big-leave-active {
    animation-name: antZoomBigOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .du-bois-light-zoom-big-enter,
  .du-bois-light-zoom-big-appear {
    transform: scale(0);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .du-bois-light-zoom-big-enter-prepare,
  .du-bois-light-zoom-big-appear-prepare {
    transform: none;
  }
  .du-bois-light-zoom-big-leave {
    animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .du-bois-light-zoom-big-fast-enter,
  .du-bois-light-zoom-big-fast-appear {
    animation-duration: 0.1s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-zoom-big-fast-leave {
    animation-duration: 0.1s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-zoom-big-fast-enter.du-bois-light-zoom-big-fast-enter-active,
  .du-bois-light-zoom-big-fast-appear.du-bois-light-zoom-big-fast-appear-active {
    animation-name: antZoomBigIn;
    animation-play-state: running;
  }
  .du-bois-light-zoom-big-fast-leave.du-bois-light-zoom-big-fast-leave-active {
    animation-name: antZoomBigOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .du-bois-light-zoom-big-fast-enter,
  .du-bois-light-zoom-big-fast-appear {
    transform: scale(0);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .du-bois-light-zoom-big-fast-enter-prepare,
  .du-bois-light-zoom-big-fast-appear-prepare {
    transform: none;
  }
  .du-bois-light-zoom-big-fast-leave {
    animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .du-bois-light-zoom-up-enter,
  .du-bois-light-zoom-up-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-zoom-up-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-zoom-up-enter.du-bois-light-zoom-up-enter-active,
  .du-bois-light-zoom-up-appear.du-bois-light-zoom-up-appear-active {
    animation-name: antZoomUpIn;
    animation-play-state: running;
  }
  .du-bois-light-zoom-up-leave.du-bois-light-zoom-up-leave-active {
    animation-name: antZoomUpOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .du-bois-light-zoom-up-enter,
  .du-bois-light-zoom-up-appear {
    transform: scale(0);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .du-bois-light-zoom-up-enter-prepare,
  .du-bois-light-zoom-up-appear-prepare {
    transform: none;
  }
  .du-bois-light-zoom-up-leave {
    animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .du-bois-light-zoom-down-enter,
  .du-bois-light-zoom-down-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-zoom-down-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-zoom-down-enter.du-bois-light-zoom-down-enter-active,
  .du-bois-light-zoom-down-appear.du-bois-light-zoom-down-appear-active {
    animation-name: antZoomDownIn;
    animation-play-state: running;
  }
  .du-bois-light-zoom-down-leave.du-bois-light-zoom-down-leave-active {
    animation-name: antZoomDownOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .du-bois-light-zoom-down-enter,
  .du-bois-light-zoom-down-appear {
    transform: scale(0);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .du-bois-light-zoom-down-enter-prepare,
  .du-bois-light-zoom-down-appear-prepare {
    transform: none;
  }
  .du-bois-light-zoom-down-leave {
    animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .du-bois-light-zoom-left-enter,
  .du-bois-light-zoom-left-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-zoom-left-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-zoom-left-enter.du-bois-light-zoom-left-enter-active,
  .du-bois-light-zoom-left-appear.du-bois-light-zoom-left-appear-active {
    animation-name: antZoomLeftIn;
    animation-play-state: running;
  }
  .du-bois-light-zoom-left-leave.du-bois-light-zoom-left-leave-active {
    animation-name: antZoomLeftOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .du-bois-light-zoom-left-enter,
  .du-bois-light-zoom-left-appear {
    transform: scale(0);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .du-bois-light-zoom-left-enter-prepare,
  .du-bois-light-zoom-left-appear-prepare {
    transform: none;
  }
  .du-bois-light-zoom-left-leave {
    animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .du-bois-light-zoom-right-enter,
  .du-bois-light-zoom-right-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-zoom-right-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-zoom-right-enter.du-bois-light-zoom-right-enter-active,
  .du-bois-light-zoom-right-appear.du-bois-light-zoom-right-appear-active {
    animation-name: antZoomRightIn;
    animation-play-state: running;
  }
  .du-bois-light-zoom-right-leave.du-bois-light-zoom-right-leave-active {
    animation-name: antZoomRightOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .du-bois-light-zoom-right-enter,
  .du-bois-light-zoom-right-appear {
    transform: scale(0);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .du-bois-light-zoom-right-enter-prepare,
  .du-bois-light-zoom-right-appear-prepare {
    transform: none;
  }
  .du-bois-light-zoom-right-leave {
    animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  @keyframes antZoomIn {
    0% {
      transform: scale(0.2);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes antZoomOut {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.2);
      opacity: 0;
    }
  }
  @keyframes antZoomBigIn {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes antZoomBigOut {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
      opacity: 0;
    }
  }
  @keyframes antZoomUpIn {
    0% {
      transform: scale(0.8);
      transform-origin: 50% 0%;
      opacity: 0;
    }
    100% {
      transform: scale(1);
      transform-origin: 50% 0%;
    }
  }
  @keyframes antZoomUpOut {
    0% {
      transform: scale(1);
      transform-origin: 50% 0%;
    }
    100% {
      transform: scale(0.8);
      transform-origin: 50% 0%;
      opacity: 0;
    }
  }
  @keyframes antZoomLeftIn {
    0% {
      transform: scale(0.8);
      transform-origin: 0% 50%;
      opacity: 0;
    }
    100% {
      transform: scale(1);
      transform-origin: 0% 50%;
    }
  }
  @keyframes antZoomLeftOut {
    0% {
      transform: scale(1);
      transform-origin: 0% 50%;
    }
    100% {
      transform: scale(0.8);
      transform-origin: 0% 50%;
      opacity: 0;
    }
  }
  @keyframes antZoomRightIn {
    0% {
      transform: scale(0.8);
      transform-origin: 100% 50%;
      opacity: 0;
    }
    100% {
      transform: scale(1);
      transform-origin: 100% 50%;
    }
  }
  @keyframes antZoomRightOut {
    0% {
      transform: scale(1);
      transform-origin: 100% 50%;
    }
    100% {
      transform: scale(0.8);
      transform-origin: 100% 50%;
      opacity: 0;
    }
  }
  @keyframes antZoomDownIn {
    0% {
      transform: scale(0.8);
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      transform: scale(1);
      transform-origin: 50% 100%;
    }
  }
  @keyframes antZoomDownOut {
    0% {
      transform: scale(1);
      transform-origin: 50% 100%;
    }
    100% {
      transform: scale(0.8);
      transform-origin: 50% 100%;
      opacity: 0;
    }
  }
  .ant-motion-collapse-legacy {
    overflow: hidden;
  }
  .ant-motion-collapse-legacy-active {
    transition: height 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
  }
  .ant-motion-collapse {
    overflow: hidden;
    transition: height 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-btn {
    line-height: 20px;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    height: 40px;
    padding: 0 16px;
    font-size: 13px;
    border-radius: 4px;
    color: #1f272d;
    background: #fff;
    border-color: #cddae5;
  }
  .du-bois-light-btn > .anticon {
    line-height: 1;
  }
  .du-bois-light-btn,
  .du-bois-light-btn:active,
  .du-bois-light-btn:focus {
    outline: 0;
  }
  .du-bois-light-btn:not([disabled]):hover {
    text-decoration: none;
  }
  .du-bois-light-btn:not([disabled]):active {
    outline: 0;
    box-shadow: none;
  }
  .du-bois-light-btn[disabled] {
    cursor: not-allowed;
  }
  .du-bois-light-btn[disabled] > * {
    pointer-events: none;
  }
  .du-bois-light-btn-lg {
    height: 40px;
    padding: 0 16px;
    font-size: 18px;
    border-radius: 4px;
  }
  .du-bois-light-btn-sm {
    height: 32px;
    padding: 0 16px;
    font-size: 13px;
    border-radius: 4px;
  }
  .du-bois-light-btn > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn:hover,
  .du-bois-light-btn:focus {
    color: #448dc2;
    background: #fff;
    border-color: #448dc2;
  }
  .du-bois-light-btn:hover > a:only-child,
  .du-bois-light-btn:focus > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn:hover > a:only-child::after,
  .du-bois-light-btn:focus > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn:active {
    color: #14538f;
    background: #fff;
    border-color: #14538f;
  }
  .du-bois-light-btn:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn:active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn[disabled],
  .du-bois-light-btn[disabled]:hover,
  .du-bois-light-btn[disabled]:focus,
  .du-bois-light-btn[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #cddae5;
    text-shadow: none;
    box-shadow: none;
  }
  .du-bois-light-btn[disabled] > a:only-child,
  .du-bois-light-btn[disabled]:hover > a:only-child,
  .du-bois-light-btn[disabled]:focus > a:only-child,
  .du-bois-light-btn[disabled]:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn[disabled] > a:only-child::after,
  .du-bois-light-btn[disabled]:hover > a:only-child::after,
  .du-bois-light-btn[disabled]:focus > a:only-child::after,
  .du-bois-light-btn[disabled]:active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn:hover,
  .du-bois-light-btn:focus,
  .du-bois-light-btn:active {
    text-decoration: none;
    background: #fff;
  }
  .du-bois-light-btn > span {
    display: inline-block;
  }
  .du-bois-light-btn-primary {
    color: #fff;
    background: #2272b4;
    border-color: #2272b4;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  }
  .du-bois-light-btn-primary > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-primary > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-primary:hover,
  .du-bois-light-btn-primary:focus {
    color: #fff;
    background: #448dc2;
    border-color: #448dc2;
  }
  .du-bois-light-btn-primary:hover > a:only-child,
  .du-bois-light-btn-primary:focus > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-primary:hover > a:only-child::after,
  .du-bois-light-btn-primary:focus > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-primary:active {
    color: #fff;
    background: #14538f;
    border-color: #14538f;
  }
  .du-bois-light-btn-primary:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-primary:active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-primary[disabled],
  .du-bois-light-btn-primary[disabled]:hover,
  .du-bois-light-btn-primary[disabled]:focus,
  .du-bois-light-btn-primary[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #cddae5;
    text-shadow: none;
    box-shadow: none;
  }
  .du-bois-light-btn-primary[disabled] > a:only-child,
  .du-bois-light-btn-primary[disabled]:hover > a:only-child,
  .du-bois-light-btn-primary[disabled]:focus > a:only-child,
  .du-bois-light-btn-primary[disabled]:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-primary[disabled] > a:only-child::after,
  .du-bois-light-btn-primary[disabled]:hover > a:only-child::after,
  .du-bois-light-btn-primary[disabled]:focus > a:only-child::after,
  .du-bois-light-btn-primary[disabled]:active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-group
    .du-bois-light-btn-primary:not(:first-of-type):not(:last-child) {
    border-right-color: #448dc2;
    border-left-color: #448dc2;
  }
  .du-bois-light-btn-group
    .du-bois-light-btn-primary:not(:first-of-type):not(:last-child):disabled {
    border-color: #cddae5;
  }
  .du-bois-light-btn-group
    .du-bois-light-btn-primary:first-of-type:not(:last-child) {
    border-right-color: #448dc2;
  }
  .du-bois-light-btn-group
    .du-bois-light-btn-primary:first-of-type:not(:last-child)[disabled] {
    border-right-color: #cddae5;
  }
  .du-bois-light-btn-group
    .du-bois-light-btn-primary:last-child:not(:first-of-type),
  .du-bois-light-btn-group
    .du-bois-light-btn-primary
    + .du-bois-light-btn-primary {
    border-left-color: #448dc2;
  }
  .du-bois-light-btn-group
    .du-bois-light-btn-primary:last-child:not(:first-of-type)[disabled],
  .du-bois-light-btn-group
    .du-bois-light-btn-primary
    + .du-bois-light-btn-primary[disabled] {
    border-left-color: #cddae5;
  }
  .du-bois-light-btn-ghost {
    color: #1f272d;
    background: transparent;
    border-color: #cddae5;
  }
  .du-bois-light-btn-ghost > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-ghost > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-ghost:hover,
  .du-bois-light-btn-ghost:focus {
    color: #448dc2;
    background: transparent;
    border-color: #448dc2;
  }
  .du-bois-light-btn-ghost:hover > a:only-child,
  .du-bois-light-btn-ghost:focus > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-ghost:hover > a:only-child::after,
  .du-bois-light-btn-ghost:focus > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-ghost:active {
    color: #14538f;
    background: transparent;
    border-color: #14538f;
  }
  .du-bois-light-btn-ghost:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-ghost:active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-ghost[disabled],
  .du-bois-light-btn-ghost[disabled]:hover,
  .du-bois-light-btn-ghost[disabled]:focus,
  .du-bois-light-btn-ghost[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #cddae5;
    text-shadow: none;
    box-shadow: none;
  }
  .du-bois-light-btn-ghost[disabled] > a:only-child,
  .du-bois-light-btn-ghost[disabled]:hover > a:only-child,
  .du-bois-light-btn-ghost[disabled]:focus > a:only-child,
  .du-bois-light-btn-ghost[disabled]:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-ghost[disabled] > a:only-child::after,
  .du-bois-light-btn-ghost[disabled]:hover > a:only-child::after,
  .du-bois-light-btn-ghost[disabled]:focus > a:only-child::after,
  .du-bois-light-btn-ghost[disabled]:active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dashed {
    color: #1f272d;
    background: #fff;
    border-color: #cddae5;
    border-style: dashed;
  }
  .du-bois-light-btn-dashed > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dashed > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dashed:hover,
  .du-bois-light-btn-dashed:focus {
    color: #448dc2;
    background: #fff;
    border-color: #448dc2;
  }
  .du-bois-light-btn-dashed:hover > a:only-child,
  .du-bois-light-btn-dashed:focus > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dashed:hover > a:only-child::after,
  .du-bois-light-btn-dashed:focus > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dashed:active {
    color: #14538f;
    background: #fff;
    border-color: #14538f;
  }
  .du-bois-light-btn-dashed:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dashed:active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dashed[disabled],
  .du-bois-light-btn-dashed[disabled]:hover,
  .du-bois-light-btn-dashed[disabled]:focus,
  .du-bois-light-btn-dashed[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #cddae5;
    text-shadow: none;
    box-shadow: none;
  }
  .du-bois-light-btn-dashed[disabled] > a:only-child,
  .du-bois-light-btn-dashed[disabled]:hover > a:only-child,
  .du-bois-light-btn-dashed[disabled]:focus > a:only-child,
  .du-bois-light-btn-dashed[disabled]:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dashed[disabled] > a:only-child::after,
  .du-bois-light-btn-dashed[disabled]:hover > a:only-child::after,
  .du-bois-light-btn-dashed[disabled]:focus > a:only-child::after,
  .du-bois-light-btn-dashed[disabled]:active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-danger {
    color: #fff;
    background: #c82d4c;
    border-color: #c82d4c;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  }
  .du-bois-light-btn-danger > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-danger > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-danger:hover,
  .du-bois-light-btn-danger:focus {
    color: #fff;
    background: #d45368;
    border-color: #d45368;
  }
  .du-bois-light-btn-danger:hover > a:only-child,
  .du-bois-light-btn-danger:focus > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-danger:hover > a:only-child::after,
  .du-bois-light-btn-danger:focus > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-danger:active {
    color: #fff;
    background: #a11d3c;
    border-color: #a11d3c;
  }
  .du-bois-light-btn-danger:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-danger:active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-danger[disabled],
  .du-bois-light-btn-danger[disabled]:hover,
  .du-bois-light-btn-danger[disabled]:focus,
  .du-bois-light-btn-danger[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #cddae5;
    text-shadow: none;
    box-shadow: none;
  }
  .du-bois-light-btn-danger[disabled] > a:only-child,
  .du-bois-light-btn-danger[disabled]:hover > a:only-child,
  .du-bois-light-btn-danger[disabled]:focus > a:only-child,
  .du-bois-light-btn-danger[disabled]:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-danger[disabled] > a:only-child::after,
  .du-bois-light-btn-danger[disabled]:hover > a:only-child::after,
  .du-bois-light-btn-danger[disabled]:focus > a:only-child::after,
  .du-bois-light-btn-danger[disabled]:active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-link {
    color: #2272b4;
    background: transparent;
    border-color: transparent;
    box-shadow: none;
  }
  .du-bois-light-btn-link > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-link > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-link:hover,
  .du-bois-light-btn-link:focus {
    color: #448dc2;
    background: transparent;
    border-color: #448dc2;
  }
  .du-bois-light-btn-link:hover > a:only-child,
  .du-bois-light-btn-link:focus > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-link:hover > a:only-child::after,
  .du-bois-light-btn-link:focus > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-link:active {
    color: #14538f;
    background: transparent;
    border-color: #14538f;
  }
  .du-bois-light-btn-link:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-link:active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-link[disabled],
  .du-bois-light-btn-link[disabled]:hover,
  .du-bois-light-btn-link[disabled]:focus,
  .du-bois-light-btn-link[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #cddae5;
    text-shadow: none;
    box-shadow: none;
  }
  .du-bois-light-btn-link[disabled] > a:only-child,
  .du-bois-light-btn-link[disabled]:hover > a:only-child,
  .du-bois-light-btn-link[disabled]:focus > a:only-child,
  .du-bois-light-btn-link[disabled]:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-link[disabled] > a:only-child::after,
  .du-bois-light-btn-link[disabled]:hover > a:only-child::after,
  .du-bois-light-btn-link[disabled]:focus > a:only-child::after,
  .du-bois-light-btn-link[disabled]:active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-link:hover {
    background: transparent;
  }
  .du-bois-light-btn-link:hover,
  .du-bois-light-btn-link:focus,
  .du-bois-light-btn-link:active {
    border-color: transparent;
  }
  .du-bois-light-btn-link[disabled],
  .du-bois-light-btn-link[disabled]:hover,
  .du-bois-light-btn-link[disabled]:focus,
  .du-bois-light-btn-link[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: transparent;
    border-color: transparent;
    text-shadow: none;
    box-shadow: none;
  }
  .du-bois-light-btn-link[disabled] > a:only-child,
  .du-bois-light-btn-link[disabled]:hover > a:only-child,
  .du-bois-light-btn-link[disabled]:focus > a:only-child,
  .du-bois-light-btn-link[disabled]:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-link[disabled] > a:only-child::after,
  .du-bois-light-btn-link[disabled]:hover > a:only-child::after,
  .du-bois-light-btn-link[disabled]:focus > a:only-child::after,
  .du-bois-light-btn-link[disabled]:active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-text {
    color: #1f272d;
    background: transparent;
    border-color: transparent;
    box-shadow: none;
  }
  .du-bois-light-btn-text > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-text > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-text:hover,
  .du-bois-light-btn-text:focus {
    color: #448dc2;
    background: transparent;
    border-color: #448dc2;
  }
  .du-bois-light-btn-text:hover > a:only-child,
  .du-bois-light-btn-text:focus > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-text:hover > a:only-child::after,
  .du-bois-light-btn-text:focus > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-text:active {
    color: #14538f;
    background: transparent;
    border-color: #14538f;
  }
  .du-bois-light-btn-text:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-text:active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-text[disabled],
  .du-bois-light-btn-text[disabled]:hover,
  .du-bois-light-btn-text[disabled]:focus,
  .du-bois-light-btn-text[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #cddae5;
    text-shadow: none;
    box-shadow: none;
  }
  .du-bois-light-btn-text[disabled] > a:only-child,
  .du-bois-light-btn-text[disabled]:hover > a:only-child,
  .du-bois-light-btn-text[disabled]:focus > a:only-child,
  .du-bois-light-btn-text[disabled]:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-text[disabled] > a:only-child::after,
  .du-bois-light-btn-text[disabled]:hover > a:only-child::after,
  .du-bois-light-btn-text[disabled]:focus > a:only-child::after,
  .du-bois-light-btn-text[disabled]:active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-text:hover,
  .du-bois-light-btn-text:focus {
    color: #1f272d;
    background: rgba(0, 0, 0, 0.018);
    border-color: transparent;
  }
  .du-bois-light-btn-text:active {
    color: #1f272d;
    background: rgba(0, 0, 0, 0.028);
    border-color: transparent;
  }
  .du-bois-light-btn-text[disabled],
  .du-bois-light-btn-text[disabled]:hover,
  .du-bois-light-btn-text[disabled]:focus,
  .du-bois-light-btn-text[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: transparent;
    border-color: transparent;
    text-shadow: none;
    box-shadow: none;
  }
  .du-bois-light-btn-text[disabled] > a:only-child,
  .du-bois-light-btn-text[disabled]:hover > a:only-child,
  .du-bois-light-btn-text[disabled]:focus > a:only-child,
  .du-bois-light-btn-text[disabled]:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-text[disabled] > a:only-child::after,
  .du-bois-light-btn-text[disabled]:hover > a:only-child::after,
  .du-bois-light-btn-text[disabled]:focus > a:only-child::after,
  .du-bois-light-btn-text[disabled]:active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous {
    color: #c82d4c;
    background: #fff;
    border-color: #c82d4c;
  }
  .du-bois-light-btn-dangerous > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous:hover,
  .du-bois-light-btn-dangerous:focus {
    color: #d45368;
    background: #fff;
    border-color: #d45368;
  }
  .du-bois-light-btn-dangerous:hover > a:only-child,
  .du-bois-light-btn-dangerous:focus > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous:hover > a:only-child::after,
  .du-bois-light-btn-dangerous:focus > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous:active {
    color: #a11d3c;
    background: #fff;
    border-color: #a11d3c;
  }
  .du-bois-light-btn-dangerous:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous:active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous[disabled],
  .du-bois-light-btn-dangerous[disabled]:hover,
  .du-bois-light-btn-dangerous[disabled]:focus,
  .du-bois-light-btn-dangerous[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #cddae5;
    text-shadow: none;
    box-shadow: none;
  }
  .du-bois-light-btn-dangerous[disabled] > a:only-child,
  .du-bois-light-btn-dangerous[disabled]:hover > a:only-child,
  .du-bois-light-btn-dangerous[disabled]:focus > a:only-child,
  .du-bois-light-btn-dangerous[disabled]:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous[disabled] > a:only-child::after,
  .du-bois-light-btn-dangerous[disabled]:hover > a:only-child::after,
  .du-bois-light-btn-dangerous[disabled]:focus > a:only-child::after,
  .du-bois-light-btn-dangerous[disabled]:active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary {
    color: #fff;
    background: #c82d4c;
    border-color: #c82d4c;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary:hover,
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary:focus {
    color: #fff;
    background: #d45368;
    border-color: #d45368;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary:hover > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary:focus > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary:hover
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary:focus
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary:active {
    color: #fff;
    background: #a11d3c;
    border-color: #a11d3c;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary:active
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary[disabled],
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary[disabled]:hover,
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary[disabled]:focus,
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #cddae5;
    text-shadow: none;
    box-shadow: none;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary[disabled]
    > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary[disabled]:hover
    > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary[disabled]:focus
    > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary[disabled]:active
    > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary[disabled]
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary[disabled]:hover
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary[disabled]:focus
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-primary[disabled]:active
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link {
    color: #c82d4c;
    background: transparent;
    border-color: transparent;
    box-shadow: none;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link:hover,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link:focus {
    color: #448dc2;
    background: transparent;
    border-color: #448dc2;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link:hover > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link:focus > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link:hover
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link:focus
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link:active {
    color: #14538f;
    background: transparent;
    border-color: #14538f;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link:active
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled],
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:hover,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:focus,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #cddae5;
    text-shadow: none;
    box-shadow: none;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled] > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:hover
    > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:focus
    > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:active
    > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:hover
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:focus
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:active
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link:hover,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link:focus {
    color: #d45368;
    background: transparent;
    border-color: transparent;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link:hover > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link:focus > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link:hover
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link:focus
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link:active {
    color: #a11d3c;
    background: transparent;
    border-color: transparent;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link:active
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled],
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:hover,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:focus,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: transparent;
    border-color: transparent;
    text-shadow: none;
    box-shadow: none;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled] > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:hover
    > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:focus
    > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:active
    > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:hover
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:focus
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:active
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text {
    color: #c82d4c;
    background: transparent;
    border-color: transparent;
    box-shadow: none;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text:hover,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text:focus {
    color: #448dc2;
    background: transparent;
    border-color: #448dc2;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text:hover > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text:focus > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text:hover
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text:focus
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text:active {
    color: #14538f;
    background: transparent;
    border-color: #14538f;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text:active
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled],
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]:hover,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]:focus,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #cddae5;
    text-shadow: none;
    box-shadow: none;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled] > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]:hover
    > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]:focus
    > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]:active
    > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]:hover
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]:focus
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]:active
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text:hover,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text:focus {
    color: #d45368;
    background: rgba(0, 0, 0, 0.018);
    border-color: transparent;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text:hover > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text:focus > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text:hover
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text:focus
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text:active {
    color: #a11d3c;
    background: rgba(0, 0, 0, 0.028);
    border-color: transparent;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text:active > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text:active
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled],
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]:hover,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]:focus,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: transparent;
    border-color: transparent;
    text-shadow: none;
    box-shadow: none;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled] > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]:hover
    > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]:focus
    > a:only-child,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]:active
    > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]:hover
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]:focus
    > a:only-child::after,
  .du-bois-light-btn-dangerous.du-bois-light-btn-text[disabled]:active
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-icon-only {
    width: 40px;
    height: 40px;
    padding: 0 0;
    font-size: 15px;
    border-radius: 4px;
    vertical-align: -1px;
  }
  .du-bois-light-btn-icon-only > * {
    font-size: 15px;
  }
  .du-bois-light-btn-icon-only.du-bois-light-btn-lg {
    width: 40px;
    height: 40px;
    padding: 0 0;
    font-size: 20px;
    border-radius: 4px;
  }
  .du-bois-light-btn-icon-only.du-bois-light-btn-lg > * {
    font-size: 20px;
  }
  .du-bois-light-btn-icon-only.du-bois-light-btn-sm {
    width: 32px;
    height: 32px;
    padding: 0 0;
    font-size: 13px;
    border-radius: 4px;
  }
  .du-bois-light-btn-icon-only.du-bois-light-btn-sm > * {
    font-size: 13px;
  }
  .du-bois-light-btn-round {
    height: 40px;
    padding: 0 20px;
    font-size: 13px;
    border-radius: 40px;
  }
  .du-bois-light-btn-round.du-bois-light-btn-lg {
    height: 40px;
    padding: 0 20px;
    font-size: 18px;
    border-radius: 40px;
  }
  .du-bois-light-btn-round.du-bois-light-btn-sm {
    height: 32px;
    padding: 0 16px;
    font-size: 13px;
    border-radius: 32px;
  }
  .du-bois-light-btn-round.du-bois-light-btn-icon-only {
    width: auto;
  }
  .du-bois-light-btn-circle {
    min-width: 40px;
    padding-right: 0;
    padding-left: 0;
    text-align: center;
    border-radius: 50%;
  }
  .du-bois-light-btn-circle.du-bois-light-btn-lg {
    min-width: 40px;
    border-radius: 50%;
  }
  .du-bois-light-btn-circle.du-bois-light-btn-sm {
    min-width: 32px;
    border-radius: 50%;
  }
  .du-bois-light-btn::before {
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    z-index: 1;
    display: none;
    background: #fff;
    border-radius: inherit;
    opacity: 0.35;
    transition: opacity 0.2s;
    content: "";
    pointer-events: none;
  }
  .du-bois-light-btn .anticon {
    transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .du-bois-light-btn .anticon.anticon-plus > svg,
  .du-bois-light-btn .anticon.anticon-minus > svg {
    shape-rendering: optimizeSpeed;
  }
  .du-bois-light-btn.du-bois-light-btn-loading {
    position: relative;
  }
  .du-bois-light-btn.du-bois-light-btn-loading:not([disabled]) {
    pointer-events: none;
  }
  .du-bois-light-btn.du-bois-light-btn-loading::before {
    display: block;
  }
  .du-bois-light-btn > .du-bois-light-btn-loading-icon {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .du-bois-light-btn > .du-bois-light-btn-loading-icon .anticon {
    padding-right: 4px;
    animation: none;
  }
  .du-bois-light-btn > .du-bois-light-btn-loading-icon .anticon svg {
    animation: loadingCircle 1s infinite linear;
  }
  .du-bois-light-btn > .du-bois-light-btn-loading-icon:only-child .anticon {
    padding-right: 0;
  }
  .du-bois-light-btn-group {
    position: relative;
    display: inline-flex;
  }
  .du-bois-light-btn-group > .du-bois-light-btn,
  .du-bois-light-btn-group > span > .du-bois-light-btn {
    position: relative;
  }
  .du-bois-light-btn-group > .du-bois-light-btn:hover,
  .du-bois-light-btn-group > span > .du-bois-light-btn:hover,
  .du-bois-light-btn-group > .du-bois-light-btn:focus,
  .du-bois-light-btn-group > span > .du-bois-light-btn:focus,
  .du-bois-light-btn-group > .du-bois-light-btn:active,
  .du-bois-light-btn-group > span > .du-bois-light-btn:active {
    z-index: 2;
  }
  .du-bois-light-btn-group > .du-bois-light-btn[disabled],
  .du-bois-light-btn-group > span > .du-bois-light-btn[disabled] {
    z-index: 0;
  }
  .du-bois-light-btn-group .du-bois-light-btn-icon-only {
    font-size: 13px;
  }
  .du-bois-light-btn-group-lg > .du-bois-light-btn,
  .du-bois-light-btn-group-lg > span > .du-bois-light-btn {
    height: 40px;
    padding: 0 16px;
    font-size: 18px;
    border-radius: 0;
  }
  .du-bois-light-btn-group-lg .du-bois-light-btn.du-bois-light-btn-icon-only {
    width: 40px;
    height: 40px;
    padding-right: 0;
    padding-left: 0;
  }
  .du-bois-light-btn-group-sm > .du-bois-light-btn,
  .du-bois-light-btn-group-sm > span > .du-bois-light-btn {
    height: 32px;
    padding: 0 16px;
    font-size: 13px;
    border-radius: 0;
  }
  .du-bois-light-btn-group-sm > .du-bois-light-btn > .anticon,
  .du-bois-light-btn-group-sm > span > .du-bois-light-btn > .anticon {
    font-size: 13px;
  }
  .du-bois-light-btn-group-sm .du-bois-light-btn.du-bois-light-btn-icon-only {
    width: 32px;
    height: 32px;
    padding-right: 0;
    padding-left: 0;
  }
  .du-bois-light-btn-group .du-bois-light-btn + .du-bois-light-btn,
  .du-bois-light-btn + .du-bois-light-btn-group,
  .du-bois-light-btn-group span + .du-bois-light-btn,
  .du-bois-light-btn-group .du-bois-light-btn + span,
  .du-bois-light-btn-group > span + span,
  .du-bois-light-btn-group + .du-bois-light-btn,
  .du-bois-light-btn-group + .du-bois-light-btn-group {
    margin-left: -1px;
  }
  .du-bois-light-btn-group
    .du-bois-light-btn-primary
    + .du-bois-light-btn:not(.du-bois-light-btn-primary):not([disabled]) {
    border-left-color: transparent;
  }
  .du-bois-light-btn-group .du-bois-light-btn {
    border-radius: 0;
  }
  .du-bois-light-btn-group > .du-bois-light-btn:first-of-type,
  .du-bois-light-btn-group > span:first-of-type > .du-bois-light-btn {
    margin-left: 0;
  }
  .du-bois-light-btn-group > .du-bois-light-btn:only-child {
    border-radius: 4px;
  }
  .du-bois-light-btn-group > span:only-child > .du-bois-light-btn {
    border-radius: 4px;
  }
  .du-bois-light-btn-group > .du-bois-light-btn:first-of-type:not(:last-child),
  .du-bois-light-btn-group
    > span:first-of-type:not(:last-child)
    > .du-bois-light-btn {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .du-bois-light-btn-group > .du-bois-light-btn:last-child:not(:first-of-type),
  .du-bois-light-btn-group
    > span:last-child:not(:first-of-type)
    > .du-bois-light-btn {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .du-bois-light-btn-group-sm > .du-bois-light-btn:only-child {
    border-radius: 4px;
  }
  .du-bois-light-btn-group-sm > span:only-child > .du-bois-light-btn {
    border-radius: 4px;
  }
  .du-bois-light-btn-group-sm > .du-bois-light-btn:first-of-type:not(:last-child),
  .du-bois-light-btn-group-sm
    > span:first-of-type:not(:last-child)
    > .du-bois-light-btn {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .du-bois-light-btn-group-sm > .du-bois-light-btn:last-child:not(:first-of-type),
  .du-bois-light-btn-group-sm
    > span:last-child:not(:first-of-type)
    > .du-bois-light-btn {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .du-bois-light-btn-group > .du-bois-light-btn-group {
    float: left;
  }
  .du-bois-light-btn-group
    > .du-bois-light-btn-group:not(:first-of-type):not(:last-child)
    > .du-bois-light-btn {
    border-radius: 0;
  }
  .du-bois-light-btn-group
    > .du-bois-light-btn-group:first-of-type:not(:last-child)
    > .du-bois-light-btn:last-child {
    padding-right: 8px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .du-bois-light-btn-group
    > .du-bois-light-btn-group:last-child:not(:first-of-type)
    > .du-bois-light-btn:first-of-type {
    padding-left: 8px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .du-bois-light-btn-rtl.du-bois-light-btn-group
    .du-bois-light-btn
    + .du-bois-light-btn,
  .du-bois-light-btn-rtl.du-bois-light-btn + .du-bois-light-btn-group,
  .du-bois-light-btn-rtl.du-bois-light-btn-group span + .du-bois-light-btn,
  .du-bois-light-btn-rtl.du-bois-light-btn-group .du-bois-light-btn + span,
  .du-bois-light-btn-rtl.du-bois-light-btn-group > span + span,
  .du-bois-light-btn-rtl.du-bois-light-btn-group + .du-bois-light-btn,
  .du-bois-light-btn-rtl.du-bois-light-btn-group + .du-bois-light-btn-group,
  .du-bois-light-btn-group-rtl.du-bois-light-btn-group
    .du-bois-light-btn
    + .du-bois-light-btn,
  .du-bois-light-btn-group-rtl.du-bois-light-btn + .du-bois-light-btn-group,
  .du-bois-light-btn-group-rtl.du-bois-light-btn-group
    span
    + .du-bois-light-btn,
  .du-bois-light-btn-group-rtl.du-bois-light-btn-group
    .du-bois-light-btn
    + span,
  .du-bois-light-btn-group-rtl.du-bois-light-btn-group > span + span,
  .du-bois-light-btn-group-rtl.du-bois-light-btn-group + .du-bois-light-btn,
  .du-bois-light-btn-group-rtl.du-bois-light-btn-group
    + .du-bois-light-btn-group {
    margin-right: -1px;
    margin-left: auto;
  }
  .du-bois-light-btn-group.du-bois-light-btn-group-rtl {
    direction: rtl;
  }
  .du-bois-light-btn-group-rtl.du-bois-light-btn-group
    > .du-bois-light-btn:first-of-type:not(:last-child),
  .du-bois-light-btn-group-rtl.du-bois-light-btn-group
    > span:first-of-type:not(:last-child)
    > .du-bois-light-btn {
    border-top-left-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 0;
  }
  .du-bois-light-btn-group-rtl.du-bois-light-btn-group
    > .du-bois-light-btn:last-child:not(:first-of-type),
  .du-bois-light-btn-group-rtl.du-bois-light-btn-group
    > span:last-child:not(:first-of-type)
    > .du-bois-light-btn {
    border-top-left-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 4px;
  }
  .du-bois-light-btn-group-rtl.du-bois-light-btn-group-sm
    > .du-bois-light-btn:first-of-type:not(:last-child),
  .du-bois-light-btn-group-rtl.du-bois-light-btn-group-sm
    > span:first-of-type:not(:last-child)
    > .du-bois-light-btn {
    border-top-left-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 0;
  }
  .du-bois-light-btn-group-rtl.du-bois-light-btn-group-sm
    > .du-bois-light-btn:last-child:not(:first-of-type),
  .du-bois-light-btn-group-rtl.du-bois-light-btn-group-sm
    > span:last-child:not(:first-of-type)
    > .du-bois-light-btn {
    border-top-left-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 4px;
  }
  .du-bois-light-btn:focus > span,
  .du-bois-light-btn:active > span {
    position: relative;
  }
  .du-bois-light-btn > .anticon + span,
  .du-bois-light-btn > span + .anticon {
    margin-left: 8px;
  }
  .du-bois-light-btn-background-ghost {
    color: #fff;
    background: transparent !important;
    border-color: #fff;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary {
    color: #2272b4;
    background: transparent;
    border-color: #2272b4;
    text-shadow: none;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary:hover,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary:focus {
    color: #448dc2;
    background: transparent;
    border-color: #448dc2;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary:hover
    > a:only-child,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary:focus
    > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary:hover
    > a:only-child::after,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary:focus
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary:active {
    color: #14538f;
    background: transparent;
    border-color: #14538f;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary:active
    > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary:active
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary[disabled],
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary[disabled]:hover,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary[disabled]:focus,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #cddae5;
    text-shadow: none;
    box-shadow: none;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary[disabled]
    > a:only-child,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary[disabled]:hover
    > a:only-child,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary[disabled]:focus
    > a:only-child,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary[disabled]:active
    > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary[disabled]
    > a:only-child::after,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary[disabled]:hover
    > a:only-child::after,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary[disabled]:focus
    > a:only-child::after,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-primary[disabled]:active
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger {
    color: #c82d4c;
    background: transparent;
    border-color: #c82d4c;
    text-shadow: none;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger:hover,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger:focus {
    color: #d45368;
    background: transparent;
    border-color: #d45368;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger:hover
    > a:only-child,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger:focus
    > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger:hover
    > a:only-child::after,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger:focus
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger:active {
    color: #a11d3c;
    background: transparent;
    border-color: #a11d3c;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger:active
    > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger:active
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger[disabled],
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger[disabled]:hover,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger[disabled]:focus,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #cddae5;
    text-shadow: none;
    box-shadow: none;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger[disabled]
    > a:only-child,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger[disabled]:hover
    > a:only-child,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger[disabled]:focus
    > a:only-child,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger[disabled]:active
    > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger[disabled]
    > a:only-child::after,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger[disabled]:hover
    > a:only-child::after,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger[disabled]:focus
    > a:only-child::after,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-danger[disabled]:active
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous {
    color: #c82d4c;
    background: transparent;
    border-color: #c82d4c;
    text-shadow: none;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous
    > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous:hover,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous:focus {
    color: #d45368;
    background: transparent;
    border-color: #d45368;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous:hover
    > a:only-child,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous:focus
    > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous:hover
    > a:only-child::after,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous:focus
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous:active {
    color: #a11d3c;
    background: transparent;
    border-color: #a11d3c;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous:active
    > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous:active
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous[disabled],
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous[disabled]:hover,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous[disabled]:focus,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #cddae5;
    text-shadow: none;
    box-shadow: none;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous[disabled]
    > a:only-child,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous[disabled]:hover
    > a:only-child,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous[disabled]:focus
    > a:only-child,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous[disabled]:active
    > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous[disabled]
    > a:only-child::after,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous[disabled]:hover
    > a:only-child::after,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous[disabled]:focus
    > a:only-child::after,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous[disabled]:active
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link {
    color: #c82d4c;
    background: transparent;
    border-color: transparent;
    text-shadow: none;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link
    > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link:hover,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link:focus {
    color: #d45368;
    background: transparent;
    border-color: transparent;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link:hover
    > a:only-child,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link:focus
    > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link:hover
    > a:only-child::after,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link:focus
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link:active {
    color: #a11d3c;
    background: transparent;
    border-color: transparent;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link:active
    > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link:active
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled],
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:hover,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:focus,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #cddae5;
    text-shadow: none;
    box-shadow: none;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]
    > a:only-child,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:hover
    > a:only-child,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:focus
    > a:only-child,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:active
    > a:only-child {
    color: currentColor;
  }
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]
    > a:only-child::after,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:hover
    > a:only-child::after,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:focus
    > a:only-child::after,
  .du-bois-light-btn-background-ghost.du-bois-light-btn-dangerous.du-bois-light-btn-link[disabled]:active
    > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .du-bois-light-btn-two-chinese-chars::first-letter {
    letter-spacing: 0.34em;
  }
  .du-bois-light-btn-two-chinese-chars > *:not(.anticon) {
    margin-right: -0.34em;
    letter-spacing: 0.34em;
  }
  .du-bois-light-btn-block {
    width: 100%;
  }
  .du-bois-light-btn:empty {
    display: inline-block;
    width: 0;
    visibility: hidden;
    content: "a0";
  }
  a.du-bois-light-btn {
    padding-top: 0.01px !important;
    line-height: 38px;
  }
  a.du-bois-light-btn-lg {
    line-height: 38px;
  }
  a.du-bois-light-btn-sm {
    line-height: 30px;
  }
  .du-bois-light-btn-rtl {
    direction: rtl;
  }
  .du-bois-light-btn-group-rtl.du-bois-light-btn-group
    .du-bois-light-btn-primary:last-child:not(:first-of-type),
  .du-bois-light-btn-group-rtl.du-bois-light-btn-group
    .du-bois-light-btn-primary
    + .du-bois-light-btn-primary {
    border-right-color: #448dc2;
    border-left-color: #cddae5;
  }
  .du-bois-light-btn-group-rtl.du-bois-light-btn-group
    .du-bois-light-btn-primary:last-child:not(:first-of-type)[disabled],
  .du-bois-light-btn-group-rtl.du-bois-light-btn-group
    .du-bois-light-btn-primary
    + .du-bois-light-btn-primary[disabled] {
    border-right-color: #cddae5;
    border-left-color: #448dc2;
  }
  .du-bois-light-btn-rtl.du-bois-light-btn
    > .du-bois-light-btn-loading-icon
    .anticon {
    padding-right: 0;
    padding-left: 8px;
  }
  .du-bois-light-btn > .du-bois-light-btn-loading-icon:only-child .anticon {
    padding-right: 0;
    padding-left: 0;
  }
  .du-bois-light-btn-rtl.du-bois-light-btn > .anticon + span,
  .du-bois-light-btn-rtl.du-bois-light-btn > span + .anticon {
    margin-right: 8px;
    margin-left: 0;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-alert {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: flex;
    align-items: center;
    padding: 8px 15px;
    word-wrap: break-word;
    border-radius: 4px;
  }
  .du-bois-light-alert-content {
    flex: 1;
    min-width: 0;
  }
  .du-bois-light-alert-icon {
    margin-right: 8px;
  }
  .du-bois-light-alert-description {
    display: none;
    font-size: 13px;
    line-height: 21px;
  }
  .du-bois-light-alert-success {
    background-color: #b6c2b8;
    border: 1px solid #94a899;
  }
  .du-bois-light-alert-success .du-bois-light-alert-icon {
    color: #34824f;
  }
  .du-bois-light-alert-info {
    background-color: #f2f5f7;
    border: 1px solid #cddae5;
  }
  .du-bois-light-alert-info .du-bois-light-alert-icon {
    color: #5d7283;
  }
  .du-bois-light-alert-warning {
    background-color: #fff9eb;
    border: 1px solid #f8d4a5;
  }
  .du-bois-light-alert-warning .du-bois-light-alert-icon {
    color: #be501e;
  }
  .du-bois-light-alert-error {
    background-color: #fff5f7;
    border: 1px solid #fbd0d8;
  }
  .du-bois-light-alert-error .du-bois-light-alert-icon {
    color: #c82d4c;
  }
  .du-bois-light-alert-error .du-bois-light-alert-description > pre {
    margin: 0;
    padding: 0;
  }
  .du-bois-light-alert-action {
    margin-left: 8px;
  }
  .du-bois-light-alert-close-icon {
    margin-left: 8px;
    padding: 0;
    overflow: hidden;
    font-size: 12px;
    line-height: 12px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .du-bois-light-alert-close-icon .anticon-close {
    color: #5d7283;
    transition: color 0.3s;
  }
  .du-bois-light-alert-close-icon .anticon-close:hover {
    color: rgba(0, 0, 0, 0.75);
  }
  .du-bois-light-alert-close-text {
    color: #5d7283;
    transition: color 0.3s;
  }
  .du-bois-light-alert-close-text:hover {
    color: rgba(0, 0, 0, 0.75);
  }
  .du-bois-light-alert-with-description {
    align-items: flex-start;
    padding: 7px 15px 7px 24px;
  }
  .du-bois-light-alert-with-description.du-bois-light-alert-no-icon {
    padding: 7px 15px;
  }
  .du-bois-light-alert-with-description .du-bois-light-alert-icon {
    margin-right: 7px;
    font-size: 24px;
  }
  .du-bois-light-alert-with-description .du-bois-light-alert-message {
    display: block;
    margin-bottom: 4px;
    color: inherit;
    font-size: 18px;
  }
  .du-bois-light-alert-message {
    color: inherit;
  }
  .du-bois-light-alert-with-description .du-bois-light-alert-description {
    display: block;
  }
  .du-bois-light-alert.du-bois-light-alert-motion-leave {
    overflow: hidden;
    opacity: 1;
    transition: max-height 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
      opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
      padding-top 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
      padding-bottom 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
      margin-bottom 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .du-bois-light-alert.du-bois-light-alert-motion-leave-active {
    max-height: 0;
    margin-bottom: 0 !important;
    padding-top: 0;
    padding-bottom: 0;
    opacity: 0;
  }
  .du-bois-light-alert-banner {
    margin-bottom: 0;
    border: 0;
    border-radius: 0;
  }
  .du-bois-light-alert.du-bois-light-alert-rtl {
    direction: rtl;
  }
  .du-bois-light-alert-rtl.du-bois-light-alert.du-bois-light-alert-no-icon {
    padding: 4px 15px;
  }
  .du-bois-light-alert-rtl .du-bois-light-alert-icon {
    margin-right: auto;
    margin-left: 8px;
  }
  .du-bois-light-alert-rtl .du-bois-light-alert-action {
    margin-right: 8px;
    margin-left: auto;
  }
  .du-bois-light-alert-rtl .du-bois-light-alert-close-icon {
    margin-right: 8px;
    margin-left: auto;
  }
  .du-bois-light-alert-rtl.du-bois-light-alert-with-description
    .du-bois-light-alert-icon {
    margin-right: auto;
    margin-left: 7px;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  @keyframes antCheckboxEffect {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    100% {
      transform: scale(1.6);
      opacity: 0;
    }
  }
  .du-bois-light-checkbox {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    top: 0.2em;
    line-height: 1;
    white-space: nowrap;
    outline: none;
    cursor: pointer;
  }
  .du-bois-light-checkbox-wrapper:hover .du-bois-light-checkbox-inner,
  .du-bois-light-checkbox:hover .du-bois-light-checkbox-inner,
  .du-bois-light-checkbox-input:focus + .du-bois-light-checkbox-inner {
    border-color: #2272b4;
  }
  .du-bois-light-checkbox-checked::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #2272b4;
    border-radius: 4px;
    visibility: hidden;
    animation: antCheckboxEffect 0.36s ease-in-out;
    animation-fill-mode: backwards;
    content: "";
  }
  .du-bois-light-checkbox:hover::after,
  .du-bois-light-checkbox-wrapper:hover .du-bois-light-checkbox::after {
    visibility: visible;
  }
  .du-bois-light-checkbox-inner {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    direction: ltr;
    background-color: #fff;
    border: 1px solid #cddae5;
    border-radius: 4px;
    border-collapse: separate;
    transition: all 0.3s;
  }
  .du-bois-light-checkbox-inner::after {
    position: absolute;
    top: 50%;
    left: 22%;
    display: table;
    width: 5.71428571px;
    height: 9.14285714px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg) scale(0) translate(-50%, -50%);
    opacity: 0;
    transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
    content: " ";
  }
  .du-bois-light-checkbox-input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }
  .du-bois-light-checkbox-checked .du-bois-light-checkbox-inner::after {
    position: absolute;
    display: table;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg) scale(1) translate(-50%, -50%);
    opacity: 1;
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    content: " ";
  }
  .du-bois-light-checkbox-checked .du-bois-light-checkbox-inner {
    background-color: #2272b4;
    border-color: #2272b4;
  }
  .du-bois-light-checkbox-disabled {
    cursor: not-allowed;
  }
  .du-bois-light-checkbox-disabled.du-bois-light-checkbox-checked
    .du-bois-light-checkbox-inner::after {
    border-color: rgba(0, 0, 0, 0.25);
    animation-name: none;
  }
  .du-bois-light-checkbox-disabled .du-bois-light-checkbox-input {
    cursor: not-allowed;
  }
  .du-bois-light-checkbox-disabled .du-bois-light-checkbox-inner {
    background-color: #f5f5f5;
    border-color: #cddae5 !important;
  }
  .du-bois-light-checkbox-disabled .du-bois-light-checkbox-inner::after {
    border-color: #f5f5f5;
    border-collapse: separate;
    animation-name: none;
  }
  .du-bois-light-checkbox-disabled + span {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .du-bois-light-checkbox-disabled:hover::after,
  .du-bois-light-checkbox-wrapper:hover
    .du-bois-light-checkbox-disabled::after {
    visibility: hidden;
  }
  .du-bois-light-checkbox-wrapper {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    display: inline-flex;
    align-items: baseline;
    line-height: unset;
    cursor: pointer;
  }
  .du-bois-light-checkbox-wrapper::after {
    display: inline-block;
    width: 0;
    overflow: hidden;
    content: "a0";
  }
  .du-bois-light-checkbox-wrapper.du-bois-light-checkbox-wrapper-disabled {
    cursor: not-allowed;
  }
  .du-bois-light-checkbox-wrapper + .du-bois-light-checkbox-wrapper {
    margin-left: 8px;
  }
  .du-bois-light-checkbox + span {
    padding-right: 8px;
    padding-left: 8px;
  }
  .du-bois-light-checkbox-group {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    display: inline-block;
  }
  .du-bois-light-checkbox-group-item {
    margin-right: 8px;
  }
  .du-bois-light-checkbox-group-item:last-child {
    margin-right: 0;
  }
  .du-bois-light-checkbox-group-item + .du-bois-light-checkbox-group-item {
    margin-left: 0;
  }
  .du-bois-light-checkbox-indeterminate .du-bois-light-checkbox-inner {
    background-color: #fff;
    border-color: #cddae5;
  }
  .du-bois-light-checkbox-indeterminate .du-bois-light-checkbox-inner::after {
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background-color: #2272b4;
    border: 0;
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    content: " ";
  }
  .du-bois-light-checkbox-indeterminate.du-bois-light-checkbox-disabled
    .du-bois-light-checkbox-inner::after {
    background-color: rgba(0, 0, 0, 0.25);
    border-color: rgba(0, 0, 0, 0.25);
  }
  .du-bois-light-checkbox-rtl {
    direction: rtl;
  }
  .du-bois-light-checkbox-group-rtl .du-bois-light-checkbox-group-item {
    margin-right: 0;
    margin-left: 8px;
  }
  .du-bois-light-checkbox-group-rtl
    .du-bois-light-checkbox-group-item:last-child {
    margin-left: 0 !important;
  }
  .du-bois-light-checkbox-group-rtl
    .du-bois-light-checkbox-group-item
    + .du-bois-light-checkbox-group-item {
    margin-left: 8px;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-select-auto-complete {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
  }
  .du-bois-light-select-auto-complete .du-bois-light-select-clear {
    right: 13px;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-select-single .du-bois-light-select-selector {
    display: flex;
  }
  .du-bois-light-select-single
    .du-bois-light-select-selector
    .du-bois-light-select-selection-search {
    position: absolute;
    top: 0;
    right: 12px;
    bottom: 0;
    left: 12px;
  }
  .du-bois-light-select-single
    .du-bois-light-select-selector
    .du-bois-light-select-selection-search-input {
    width: 100%;
  }
  .du-bois-light-select-single
    .du-bois-light-select-selector
    .du-bois-light-select-selection-item,
  .du-bois-light-select-single
    .du-bois-light-select-selector
    .du-bois-light-select-selection-placeholder {
    padding: 0;
    line-height: 38px;
    transition: all 0.3s;
  }
  @supports (-moz-appearance: meterbar) {
    .du-bois-light-select-single
      .du-bois-light-select-selector
      .du-bois-light-select-selection-item,
    .du-bois-light-select-single
      .du-bois-light-select-selector
      .du-bois-light-select-selection-placeholder {
      line-height: 38px;
    }
  }
  .du-bois-light-select-single
    .du-bois-light-select-selector
    .du-bois-light-select-selection-item {
    position: relative;
    user-select: none;
  }
  .du-bois-light-select-single
    .du-bois-light-select-selector
    .du-bois-light-select-selection-placeholder {
    pointer-events: none;
  }
  .du-bois-light-select-single .du-bois-light-select-selector::after,
  .du-bois-light-select-single
    .du-bois-light-select-selector
    .du-bois-light-select-selection-item::after,
  .du-bois-light-select-single
    .du-bois-light-select-selector
    .du-bois-light-select-selection-placeholder::after {
    display: inline-block;
    width: 0;
    visibility: hidden;
    content: "a0";
  }
  .du-bois-light-select-single.du-bois-light-select-show-arrow
    .du-bois-light-select-selection-search {
    right: 25px;
  }
  .du-bois-light-select-single.du-bois-light-select-show-arrow
    .du-bois-light-select-selection-item,
  .du-bois-light-select-single.du-bois-light-select-show-arrow
    .du-bois-light-select-selection-placeholder {
    padding-right: 17px;
  }
  .du-bois-light-select-single.du-bois-light-select-open
    .du-bois-light-select-selection-item {
    color: #bfbfbf;
  }
  .du-bois-light-select-single:not(.du-bois-light-select-customize-input)
    .du-bois-light-select-selector {
    width: 100%;
    height: 40px;
    padding: 0 12px;
  }
  .du-bois-light-select-single:not(.du-bois-light-select-customize-input)
    .du-bois-light-select-selector
    .du-bois-light-select-selection-search-input {
    height: 38px;
  }
  .du-bois-light-select-single:not(.du-bois-light-select-customize-input)
    .du-bois-light-select-selector::after {
    line-height: 38px;
  }
  .du-bois-light-select-single.du-bois-light-select-customize-input
    .du-bois-light-select-selector::after {
    display: none;
  }
  .du-bois-light-select-single.du-bois-light-select-customize-input
    .du-bois-light-select-selector
    .du-bois-light-select-selection-search {
    position: static;
    width: 100%;
  }
  .du-bois-light-select-single.du-bois-light-select-customize-input
    .du-bois-light-select-selector
    .du-bois-light-select-selection-placeholder {
    position: absolute;
    right: 0;
    left: 0;
    padding: 0 12px;
  }
  .du-bois-light-select-single.du-bois-light-select-customize-input
    .du-bois-light-select-selector
    .du-bois-light-select-selection-placeholder::after {
    display: none;
  }
  .du-bois-light-select-single.du-bois-light-select-lg:not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selector {
    height: 40px;
  }
  .du-bois-light-select-single.du-bois-light-select-lg:not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selector::after,
  .du-bois-light-select-single.du-bois-light-select-lg:not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selector
    .du-bois-light-select-selection-item,
  .du-bois-light-select-single.du-bois-light-select-lg:not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selector
    .du-bois-light-select-selection-placeholder {
    line-height: 38px;
  }
  .du-bois-light-select-single.du-bois-light-select-lg:not(
      .du-bois-light-select-customize-input
    ):not(.du-bois-light-select-customize-input)
    .du-bois-light-select-selection-search-input {
    height: 38px;
  }
  .du-bois-light-select-single.du-bois-light-select-sm:not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selector {
    height: 32px;
  }
  .du-bois-light-select-single.du-bois-light-select-sm:not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selector::after,
  .du-bois-light-select-single.du-bois-light-select-sm:not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selector
    .du-bois-light-select-selection-item,
  .du-bois-light-select-single.du-bois-light-select-sm:not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selector
    .du-bois-light-select-selection-placeholder {
    line-height: 30px;
  }
  .du-bois-light-select-single.du-bois-light-select-sm:not(
      .du-bois-light-select-customize-input
    ):not(.du-bois-light-select-customize-input)
    .du-bois-light-select-selection-search-input {
    height: 30px;
  }
  .du-bois-light-select-single.du-bois-light-select-sm:not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selection-search {
    right: 12px;
    left: 12px;
  }
  .du-bois-light-select-single.du-bois-light-select-sm:not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selector {
    padding: 0 12px;
  }
  .du-bois-light-select-single.du-bois-light-select-sm:not(
      .du-bois-light-select-customize-input
    ).du-bois-light-select-show-arrow
    .du-bois-light-select-selection-search {
    right: 31.5px;
  }
  .du-bois-light-select-single.du-bois-light-select-sm:not(
      .du-bois-light-select-customize-input
    ).du-bois-light-select-show-arrow
    .du-bois-light-select-selection-item,
  .du-bois-light-select-single.du-bois-light-select-sm:not(
      .du-bois-light-select-customize-input
    ).du-bois-light-select-show-arrow
    .du-bois-light-select-selection-placeholder {
    padding-right: 19.5px;
  }
  .du-bois-light-select-single.du-bois-light-select-lg:not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selector {
    padding: 0 12px;
  }
  /**
   * Do not merge 'height' & 'line-height' under style with 'selection' & 'search',
   * since chrome may update to redesign with its align logic.
   */
  .du-bois-light-select-selection-overflow {
    position: relative;
    display: flex;
    flex: auto;
    flex-wrap: wrap;
    max-width: 100%;
  }
  .du-bois-light-select-selection-overflow-item {
    flex: none;
    align-self: center;
    max-width: 100%;
  }
  .du-bois-light-select-multiple .du-bois-light-select-selector {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 1px 5px;
  }
  .du-bois-light-select-show-search.du-bois-light-select-multiple
    .du-bois-light-select-selector {
    cursor: text;
  }
  .du-bois-light-select-disabled.du-bois-light-select-multiple
    .du-bois-light-select-selector {
    background: #f5f5f5;
    cursor: not-allowed;
  }
  .du-bois-light-select-multiple .du-bois-light-select-selector::after {
    display: inline-block;
    width: 0;
    margin: 3px 0;
    line-height: 30px;
    content: "a0";
  }
  .du-bois-light-select-multiple.du-bois-light-select-show-arrow
    .du-bois-light-select-selector,
  .du-bois-light-select-multiple.du-bois-light-select-allow-clear
    .du-bois-light-select-selector {
    padding-right: 20px;
  }
  .du-bois-light-select-multiple .du-bois-light-select-selection-item {
    position: relative;
    display: flex;
    flex: none;
    box-sizing: border-box;
    max-width: 100%;
    height: 30px;
    margin-top: 3px;
    margin-bottom: 3px;
    line-height: 28px;
    background: #f5f5f5;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    cursor: default;
    transition: font-size 0.3s, line-height 0.3s, height 0.3s;
    user-select: none;
    margin-inline-end: 5px;
    padding-inline-start: 4px;
    padding-inline-end: 2px;
  }
  .du-bois-light-select-disabled.du-bois-light-select-multiple
    .du-bois-light-select-selection-item {
    color: #bfbfbf;
    border-color: #cddae5;
    cursor: not-allowed;
  }
  .du-bois-light-select-multiple .du-bois-light-select-selection-item-content {
    display: inline-block;
    margin-right: 2px;
    overflow: hidden;
    white-space: pre;
    text-overflow: ellipsis;
  }
  .du-bois-light-select-multiple .du-bois-light-select-selection-item-remove {
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: inline-block;
    color: #5d7283;
    font-weight: bold;
    font-size: 10px;
    line-height: inherit;
    cursor: pointer;
  }
  .du-bois-light-select-multiple
    .du-bois-light-select-selection-item-remove
    > * {
    line-height: 1;
  }
  .du-bois-light-select-multiple
    .du-bois-light-select-selection-item-remove
    svg {
    display: inline-block;
  }
  .du-bois-light-select-multiple
    .du-bois-light-select-selection-item-remove::before {
    display: none;
  }
  .du-bois-light-select-multiple
    .du-bois-light-select-selection-item-remove
    .du-bois-light-select-multiple
    .du-bois-light-select-selection-item-remove-icon {
    display: block;
  }
  .du-bois-light-select-multiple
    .du-bois-light-select-selection-item-remove
    > .anticon {
    vertical-align: -0.2em;
  }
  .du-bois-light-select-multiple
    .du-bois-light-select-selection-item-remove:hover {
    color: rgba(0, 0, 0, 0.75);
  }
  .du-bois-light-select-multiple
    .du-bois-light-select-selection-overflow-item
    + .du-bois-light-select-selection-overflow-item
    .du-bois-light-select-selection-search {
    margin-inline-start: 0;
  }
  .du-bois-light-select-multiple .du-bois-light-select-selection-search {
    position: relative;
    max-width: 100%;
    margin-top: 3px;
    margin-bottom: 3px;
    margin-inline-start: 7px;
  }
  .du-bois-light-select-multiple .du-bois-light-select-selection-search-input,
  .du-bois-light-select-multiple .du-bois-light-select-selection-search-mirror {
    height: 30px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    line-height: 30px;
    transition: all 0.3s;
  }
  .du-bois-light-select-multiple .du-bois-light-select-selection-search-input {
    width: 100%;
    min-width: 4.1px;
  }
  .du-bois-light-select-multiple .du-bois-light-select-selection-search-mirror {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    white-space: pre;
    visibility: hidden;
  }
  .du-bois-light-select-multiple .du-bois-light-select-selection-placeholder {
    position: absolute;
    top: 50%;
    right: 12px;
    left: 12px;
    transform: translateY(-50%);
    transition: all 0.3s;
  }
  .du-bois-light-select-multiple.du-bois-light-select-lg
    .du-bois-light-select-selector::after {
    line-height: 30px;
  }
  .du-bois-light-select-multiple.du-bois-light-select-lg
    .du-bois-light-select-selection-item {
    height: 30px;
    line-height: 28px;
  }
  .du-bois-light-select-multiple.du-bois-light-select-lg
    .du-bois-light-select-selection-search {
    height: 30px;
    line-height: 30px;
  }
  .du-bois-light-select-multiple.du-bois-light-select-lg
    .du-bois-light-select-selection-search-input,
  .du-bois-light-select-multiple.du-bois-light-select-lg
    .du-bois-light-select-selection-search-mirror {
    height: 30px;
    line-height: 28px;
  }
  .du-bois-light-select-multiple.du-bois-light-select-sm
    .du-bois-light-select-selector::after {
    line-height: 22px;
  }
  .du-bois-light-select-multiple.du-bois-light-select-sm
    .du-bois-light-select-selection-item {
    height: 22px;
    line-height: 20px;
  }
  .du-bois-light-select-multiple.du-bois-light-select-sm
    .du-bois-light-select-selection-search {
    height: 22px;
    line-height: 22px;
  }
  .du-bois-light-select-multiple.du-bois-light-select-sm
    .du-bois-light-select-selection-search-input,
  .du-bois-light-select-multiple.du-bois-light-select-sm
    .du-bois-light-select-selection-search-mirror {
    height: 22px;
    line-height: 20px;
  }
  .du-bois-light-select-multiple.du-bois-light-select-sm
    .du-bois-light-select-selection-placeholder {
    left: 12px;
  }
  .du-bois-light-select-multiple.du-bois-light-select-sm
    .du-bois-light-select-selection-search {
    margin-inline-start: 3px;
  }
  .du-bois-light-select-multiple.du-bois-light-select-lg
    .du-bois-light-select-selection-item {
    height: 32px;
    line-height: 32px;
  }
  .du-bois-light-select-disabled .du-bois-light-select-selection-item-remove {
    display: none;
  }
  /* Reset search input style */
  .du-bois-light-select {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    cursor: pointer;
  }
  .du-bois-light-select:not(.du-bois-light-select-customize-input)
    .du-bois-light-select-selector {
    position: relative;
    background-color: #fff;
    border: 1px solid #cddae5;
    border-radius: 4px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .du-bois-light-select:not(.du-bois-light-select-customize-input)
    .du-bois-light-select-selector
    input {
    cursor: pointer;
  }
  .du-bois-light-select-show-search.du-bois-light-select:not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selector {
    cursor: text;
  }
  .du-bois-light-select-show-search.du-bois-light-select:not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selector
    input {
    cursor: auto;
  }
  .du-bois-light-select-focused:not(
      .du-bois-light-select-disabled
    ).du-bois-light-select:not(.du-bois-light-select-customize-input)
    .du-bois-light-select-selector {
    border-color: #448dc2;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(34, 114, 180, 0.2);
  }
  .du-bois-light-select-disabled.du-bois-light-select:not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selector {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    cursor: not-allowed;
  }
  .du-bois-light-select-multiple.du-bois-light-select-disabled.du-bois-light-select:not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selector {
    background: #f5f5f5;
  }
  .du-bois-light-select-disabled.du-bois-light-select:not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selector
    input {
    cursor: not-allowed;
  }
  .du-bois-light-select:not(.du-bois-light-select-customize-input)
    .du-bois-light-select-selector
    .du-bois-light-select-selection-search-input {
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    appearance: none;
  }
  .du-bois-light-select:not(.du-bois-light-select-customize-input)
    .du-bois-light-select-selector
    .du-bois-light-select-selection-search-input::-webkit-search-cancel-button {
    display: none;
    -webkit-appearance: none;
  }
  .du-bois-light-select:not(.du-bois-light-select-disabled):hover
    .du-bois-light-select-selector {
    border-color: #448dc2;
    border-right-width: 1px !important;
  }
  .du-bois-light-select-selection-item {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  @media all and (-ms-high-contrast: none) {
    .du-bois-light-select-selection-item *::-ms-backdrop,
    .du-bois-light-select-selection-item {
      flex: auto;
    }
  }
  .du-bois-light-select-selection-placeholder {
    flex: 1;
    overflow: hidden;
    color: #bfbfbf;
    white-space: nowrap;
    text-overflow: ellipsis;
    pointer-events: none;
  }
  @media all and (-ms-high-contrast: none) {
    .du-bois-light-select-selection-placeholder *::-ms-backdrop,
    .du-bois-light-select-selection-placeholder {
      flex: auto;
    }
  }
  .du-bois-light-select-arrow {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    top: 50%;
    right: 7px;
    width: 12px;
    height: 12px;
    margin-top: -6px;
    color: rgba(0, 0, 0, 0.25);
    font-size: 12px;
    line-height: 1;
    text-align: center;
    pointer-events: none;
  }
  .du-bois-light-select-arrow > * {
    line-height: 1;
  }
  .du-bois-light-select-arrow svg {
    display: inline-block;
  }
  .du-bois-light-select-arrow::before {
    display: none;
  }
  .du-bois-light-select-arrow .du-bois-light-select-arrow-icon {
    display: block;
  }
  .du-bois-light-select-arrow .anticon {
    vertical-align: top;
    transition: transform 0.3s;
  }
  .du-bois-light-select-arrow .anticon > svg {
    vertical-align: top;
  }
  .du-bois-light-select-arrow .anticon:not(.du-bois-light-select-suffix) {
    pointer-events: auto;
  }
  .du-bois-light-select-disabled .du-bois-light-select-arrow {
    cursor: not-allowed;
  }
  .du-bois-light-select-clear {
    position: absolute;
    top: 50%;
    right: 7px;
    z-index: 1;
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-top: -6px;
    color: rgba(0, 0, 0, 0.25);
    font-size: 12px;
    font-style: normal;
    line-height: 1;
    text-align: center;
    text-transform: none;
    background: #fff;
    cursor: pointer;
    opacity: 0;
    transition: color 0.3s ease, opacity 0.15s ease;
    text-rendering: auto;
  }
  .du-bois-light-select-clear::before {
    display: block;
  }
  .du-bois-light-select-clear:hover {
    color: #5d7283;
  }
  .du-bois-light-select:hover .du-bois-light-select-clear {
    opacity: 1;
  }
  .du-bois-light-select-dropdown {
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    position: absolute;
    top: -9999px;
    left: -9999px;
    z-index: 1050;
    box-sizing: border-box;
    padding: 4px 0;
    overflow: hidden;
    font-size: 13px;
    font-variant: initial;
    background-color: #fff;
    border-radius: 4px;
    outline: none;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  }
  .du-bois-light-select-dropdown.du-bois-light-slide-up-enter.du-bois-light-slide-up-enter-active.du-bois-light-select-dropdown-placement-bottomLeft,
  .du-bois-light-select-dropdown.du-bois-light-slide-up-appear.du-bois-light-slide-up-appear-active.du-bois-light-select-dropdown-placement-bottomLeft {
    animation-name: antSlideUpIn;
  }
  .du-bois-light-select-dropdown.du-bois-light-slide-up-enter.du-bois-light-slide-up-enter-active.du-bois-light-select-dropdown-placement-topLeft,
  .du-bois-light-select-dropdown.du-bois-light-slide-up-appear.du-bois-light-slide-up-appear-active.du-bois-light-select-dropdown-placement-topLeft {
    animation-name: antSlideDownIn;
  }
  .du-bois-light-select-dropdown.du-bois-light-slide-up-leave.du-bois-light-slide-up-leave-active.du-bois-light-select-dropdown-placement-bottomLeft {
    animation-name: antSlideUpOut;
  }
  .du-bois-light-select-dropdown.du-bois-light-slide-up-leave.du-bois-light-slide-up-leave-active.du-bois-light-select-dropdown-placement-topLeft {
    animation-name: antSlideDownOut;
  }
  .du-bois-light-select-dropdown-hidden {
    display: none;
  }
  .du-bois-light-select-dropdown-empty {
    color: rgba(0, 0, 0, 0.25);
  }
  .du-bois-light-select-item-empty {
    position: relative;
    display: block;
    min-height: 32px;
    padding: 5px 8px;
    color: #1f272d;
    font-weight: normal;
    font-size: 13px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.25);
  }
  .du-bois-light-select-item {
    position: relative;
    display: block;
    min-height: 32px;
    padding: 5px 8px;
    color: #1f272d;
    font-weight: normal;
    font-size: 13px;
    line-height: 22px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  .du-bois-light-select-item-group {
    color: #5d7283;
    font-size: 12px;
    cursor: default;
  }
  .du-bois-light-select-item-option {
    display: flex;
  }
  .du-bois-light-select-item-option-content {
    flex: auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .du-bois-light-select-item-option-state {
    flex: none;
  }
  .du-bois-light-select-item-option-active:not(
      .du-bois-light-select-item-option-disabled
    ) {
    background-color: #f5f5f5;
  }
  .du-bois-light-select-item-option-selected:not(
      .du-bois-light-select-item-option-disabled
    ) {
    color: #1f272d;
    font-weight: 600;
    background-color: #e6f1f5;
  }
  .du-bois-light-select-item-option-selected:not(
      .du-bois-light-select-item-option-disabled
    )
    .du-bois-light-select-item-option-state {
    color: #2272b4;
  }
  .du-bois-light-select-item-option-disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .du-bois-light-select-item-option-disabled.du-bois-light-select-item-option-selected {
    background-color: #f5f5f5;
  }
  .du-bois-light-select-item-option-grouped {
    padding-left: 16px;
  }
  .du-bois-light-select-lg {
    font-size: 18px;
  }
  .du-bois-light-select-borderless .du-bois-light-select-selector {
    background-color: transparent !important;
    border-color: transparent !important;
    box-shadow: none !important;
  }
  .du-bois-light-select-rtl {
    direction: rtl;
  }
  .du-bois-light-select-rtl .du-bois-light-select-arrow {
    right: initial;
    left: 7px;
  }
  .du-bois-light-select-rtl .du-bois-light-select-clear {
    right: initial;
    left: 7px;
  }
  .du-bois-light-select-dropdown-rtl {
    direction: rtl;
  }
  .du-bois-light-select-dropdown-rtl .du-bois-light-select-item-option-grouped {
    padding-right: 16px;
    padding-left: 8px;
  }
  .du-bois-light-select-rtl.du-bois-light-select-multiple.du-bois-light-select-show-arrow
    .du-bois-light-select-selector,
  .du-bois-light-select-rtl.du-bois-light-select-multiple.du-bois-light-select-allow-clear
    .du-bois-light-select-selector {
    padding-right: 5px;
    padding-left: 20px;
  }
  .du-bois-light-select-rtl.du-bois-light-select-multiple
    .du-bois-light-select-selection-item {
    text-align: right;
  }
  .du-bois-light-select-rtl.du-bois-light-select-multiple
    .du-bois-light-select-selection-item-content {
    margin-right: 0;
    margin-left: 2px;
    text-align: right;
  }
  .du-bois-light-select-rtl.du-bois-light-select-multiple
    .du-bois-light-select-selection-search-mirror {
    right: 0;
    left: auto;
  }
  .du-bois-light-select-rtl.du-bois-light-select-multiple
    .du-bois-light-select-selection-placeholder {
    right: 12px;
    left: auto;
  }
  .du-bois-light-select-rtl.du-bois-light-select-multiple.du-bois-light-select-sm
    .du-bois-light-select-selection-placeholder {
    right: 12px;
  }
  .du-bois-light-select-rtl.du-bois-light-select-single
    .du-bois-light-select-selector
    .du-bois-light-select-selection-item,
  .du-bois-light-select-rtl.du-bois-light-select-single
    .du-bois-light-select-selector
    .du-bois-light-select-selection-placeholder {
    right: 0;
    left: 9px;
    text-align: right;
  }
  .du-bois-light-select-rtl.du-bois-light-select-single.du-bois-light-select-show-arrow
    .du-bois-light-select-selection-search {
    right: 12px;
    left: 25px;
  }
  .du-bois-light-select-rtl.du-bois-light-select-single.du-bois-light-select-show-arrow
    .du-bois-light-select-selection-item,
  .du-bois-light-select-rtl.du-bois-light-select-single.du-bois-light-select-show-arrow
    .du-bois-light-select-selection-placeholder {
    padding-right: 0;
    padding-left: 17px;
  }
  .du-bois-light-select-rtl.du-bois-light-select-single.du-bois-light-select-sm:not(
      .du-bois-light-select-customize-input
    ).du-bois-light-select-show-arrow
    .du-bois-light-select-selection-search {
    right: 11px;
  }
  .du-bois-light-select-rtl.du-bois-light-select-single.du-bois-light-select-sm:not(
      .du-bois-light-select-customize-input
    ).du-bois-light-select-show-arrow
    .du-bois-light-select-selection-item,
  .du-bois-light-select-rtl.du-bois-light-select-single.du-bois-light-select-sm:not(
      .du-bois-light-select-customize-input
    ).du-bois-light-select-show-arrow
    .du-bois-light-select-selection-placeholder {
    padding-right: 0;
    padding-left: 19.5px;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-empty {
    margin: 0 8px;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
  }
  .du-bois-light-empty-image {
    height: 100px;
    margin-bottom: 8px;
  }
  .du-bois-light-empty-image img {
    height: 100%;
  }
  .du-bois-light-empty-image svg {
    height: 100%;
    margin: auto;
  }
  .du-bois-light-empty-footer {
    margin-top: 16px;
  }
  .du-bois-light-empty-normal {
    margin: 32px 0;
    color: rgba(0, 0, 0, 0.25);
  }
  .du-bois-light-empty-normal .du-bois-light-empty-image {
    height: 40px;
  }
  .du-bois-light-empty-small {
    margin: 8px 0;
    color: rgba(0, 0, 0, 0.25);
  }
  .du-bois-light-empty-small .du-bois-light-empty-image {
    height: 35px;
  }
  .du-bois-light-empty-img-default-ellipse {
    fill: #f5f5f5;
    fill-opacity: 0.8;
  }
  .du-bois-light-empty-img-default-path-1 {
    fill: #aeb8c2;
  }
  .du-bois-light-empty-img-default-path-2 {
    fill: url(#linearGradient-1);
  }
  .du-bois-light-empty-img-default-path-3 {
    fill: #f5f5f7;
  }
  .du-bois-light-empty-img-default-path-4 {
    fill: #dce0e6;
  }
  .du-bois-light-empty-img-default-path-5 {
    fill: #dce0e6;
  }
  .du-bois-light-empty-img-default-g {
    fill: #fff;
  }
  .du-bois-light-empty-img-simple-ellipse {
    fill: #f5f5f5;
  }
  .du-bois-light-empty-img-simple-g {
    stroke: #d9d9d9;
  }
  .du-bois-light-empty-img-simple-path {
    fill: #fafafa;
  }
  .du-bois-light-empty-rtl {
    direction: rtl;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-collapse {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    background-color: #fafafa;
    border: 1px solid #cddae5;
    border-bottom: 0;
    border-radius: 4px;
  }
  .du-bois-light-collapse > .du-bois-light-collapse-item {
    border-bottom: 1px solid #cddae5;
  }
  .du-bois-light-collapse > .du-bois-light-collapse-item:last-child,
  .du-bois-light-collapse
    > .du-bois-light-collapse-item:last-child
    > .du-bois-light-collapse-header {
    border-radius: 0 0 4px 4px;
  }
  .du-bois-light-collapse
    > .du-bois-light-collapse-item
    > .du-bois-light-collapse-header {
    position: relative;
    padding: 8px 8px;
    color: rgba(0, 0, 0, 0.85);
    line-height: 20px;
    cursor: pointer;
    transition: all 0.3s, visibility 0s;
  }
  .du-bois-light-collapse
    > .du-bois-light-collapse-item
    > .du-bois-light-collapse-header::before {
    display: table;
    content: "";
  }
  .du-bois-light-collapse
    > .du-bois-light-collapse-item
    > .du-bois-light-collapse-header::after {
    display: table;
    clear: both;
    content: "";
  }
  .du-bois-light-collapse
    > .du-bois-light-collapse-item
    > .du-bois-light-collapse-header
    .du-bois-light-collapse-arrow {
    display: inline-block;
    margin-right: 12px;
    font-size: 12px;
    vertical-align: -1px;
  }
  .du-bois-light-collapse
    > .du-bois-light-collapse-item
    > .du-bois-light-collapse-header
    .du-bois-light-collapse-arrow
    svg {
    transition: transform 0.24s;
  }
  .du-bois-light-collapse
    > .du-bois-light-collapse-item
    > .du-bois-light-collapse-header
    .du-bois-light-collapse-extra {
    float: right;
  }
  .du-bois-light-collapse
    > .du-bois-light-collapse-item
    > .du-bois-light-collapse-header:focus {
    outline: none;
  }
  .du-bois-light-collapse
    > .du-bois-light-collapse-item
    .du-bois-light-collapse-header-collapsible-only {
    cursor: default;
  }
  .du-bois-light-collapse
    > .du-bois-light-collapse-item
    .du-bois-light-collapse-header-collapsible-only
    .du-bois-light-collapse-header-text {
    cursor: pointer;
  }
  .du-bois-light-collapse
    > .du-bois-light-collapse-item.du-bois-light-collapse-no-arrow
    > .du-bois-light-collapse-header {
    padding-left: 12px;
  }
  .du-bois-light-collapse-icon-position-right
    > .du-bois-light-collapse-item
    > .du-bois-light-collapse-header {
    padding: 8px 8px;
    padding-right: 40px;
  }
  .du-bois-light-collapse-icon-position-right
    > .du-bois-light-collapse-item
    > .du-bois-light-collapse-header
    .du-bois-light-collapse-arrow {
    position: absolute;
    top: 50%;
    right: 8px;
    left: auto;
    margin: 0;
    transform: translateY(-50%);
  }
  .du-bois-light-collapse-content {
    color: #1f272d;
    background-color: #fff;
    border-top: 1px solid #cddae5;
  }
  .du-bois-light-collapse-content > .du-bois-light-collapse-content-box {
    padding: 8px;
  }
  .du-bois-light-collapse-content-hidden {
    display: none;
  }
  .du-bois-light-collapse-item:last-child > .du-bois-light-collapse-content {
    border-radius: 0 0 4px 4px;
  }
  .du-bois-light-collapse-borderless {
    background-color: #fafafa;
    border: 0;
  }
  .du-bois-light-collapse-borderless > .du-bois-light-collapse-item {
    border-bottom: 1px solid #cddae5;
  }
  .du-bois-light-collapse-borderless > .du-bois-light-collapse-item:last-child,
  .du-bois-light-collapse-borderless
    > .du-bois-light-collapse-item:last-child
    .du-bois-light-collapse-header {
    border-radius: 0;
  }
  .du-bois-light-collapse-borderless
    > .du-bois-light-collapse-item
    > .du-bois-light-collapse-content {
    background-color: transparent;
    border-top: 0;
  }
  .du-bois-light-collapse-borderless
    > .du-bois-light-collapse-item
    > .du-bois-light-collapse-content
    > .du-bois-light-collapse-content-box {
    padding-top: 4px;
  }
  .du-bois-light-collapse-ghost {
    background-color: transparent;
    border: 0;
  }
  .du-bois-light-collapse-ghost > .du-bois-light-collapse-item {
    border-bottom: 0;
  }
  .du-bois-light-collapse-ghost
    > .du-bois-light-collapse-item
    > .du-bois-light-collapse-content {
    background-color: transparent;
    border-top: 0;
  }
  .du-bois-light-collapse-ghost
    > .du-bois-light-collapse-item
    > .du-bois-light-collapse-content
    > .du-bois-light-collapse-content-box {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .du-bois-light-collapse
    .du-bois-light-collapse-item-disabled
    > .du-bois-light-collapse-header,
  .du-bois-light-collapse
    .du-bois-light-collapse-item-disabled
    > .du-bois-light-collapse-header
    > .arrow {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .du-bois-light-collapse-rtl {
    direction: rtl;
  }
  .du-bois-light-collapse-rtl
    .du-bois-light-collapse
    > .du-bois-light-collapse-item
    > .du-bois-light-collapse-header {
    padding: 8px 8px;
    padding-right: 40px;
  }
  .du-bois-light-collapse-rtl.du-bois-light-collapse
    > .du-bois-light-collapse-item
    > .du-bois-light-collapse-header
    .du-bois-light-collapse-arrow
    svg {
    transform: rotate(180deg);
  }
  .du-bois-light-collapse-rtl.du-bois-light-collapse
    > .du-bois-light-collapse-item
    > .du-bois-light-collapse-header
    .du-bois-light-collapse-extra {
    float: left;
  }
  .du-bois-light-collapse-rtl.du-bois-light-collapse
    > .du-bois-light-collapse-item.du-bois-light-collapse-no-arrow
    > .du-bois-light-collapse-header {
    padding-right: 12px;
    padding-left: 0;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-picker {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    padding: 0 12px 0;
    position: relative;
    display: inline-flex;
    align-items: center;
    background: #fff;
    border: 1px solid #cddae5;
    border-radius: 4px;
    transition: border 0.3s, box-shadow 0.3s;
  }
  .du-bois-light-picker:hover,
  .du-bois-light-picker-focused {
    border-color: #448dc2;
    border-right-width: 1px !important;
  }
  .du-bois-light-picker-focused {
    border-color: #448dc2;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(34, 114, 180, 0.2);
  }
  .du-bois-light-picker.du-bois-light-picker-disabled {
    background: #f5f5f5;
    border-color: #cddae5;
    cursor: not-allowed;
  }
  .du-bois-light-picker.du-bois-light-picker-disabled
    .du-bois-light-picker-suffix {
    color: rgba(0, 0, 0, 0.25);
  }
  .du-bois-light-picker.du-bois-light-picker-borderless {
    background-color: transparent !important;
    border-color: transparent !important;
    box-shadow: none !important;
  }
  .du-bois-light-picker-input {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;
  }
  .du-bois-light-picker-input > input {
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 5px 12px;
    color: #1f272d;
    font-size: 13px;
    line-height: 20px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #cddae5;
    border-radius: 4px;
    transition: all 0.3s;
    flex: auto;
    min-width: 1px;
    height: auto;
    padding: 0;
    background: transparent;
    border: 0;
  }
  .du-bois-light-picker-input > input::-moz-placeholder {
    opacity: 1;
  }
  .du-bois-light-picker-input > input::placeholder {
    color: #bfbfbf;
  }
  .du-bois-light-picker-input > input:placeholder-shown {
    text-overflow: ellipsis;
  }
  .du-bois-light-picker-input > input:hover {
    border-color: #448dc2;
    border-right-width: 1px !important;
  }
  .du-bois-light-picker-input > input:focus,
  .du-bois-light-picker-input > input-focused {
    border-color: #448dc2;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(34, 114, 180, 0.2);
  }
  .du-bois-light-picker-input > input-disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
  }
  .du-bois-light-picker-input > input-disabled:hover {
    border-color: #cddae5;
    border-right-width: 1px !important;
  }
  .du-bois-light-picker-input > input[disabled] {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
  }
  .du-bois-light-picker-input > input[disabled]:hover {
    border-color: #cddae5;
    border-right-width: 1px !important;
  }
  .du-bois-light-picker-input > input-borderless,
  .du-bois-light-picker-input > input-borderless:hover,
  .du-bois-light-picker-input > input-borderless:focus,
  .du-bois-light-picker-input > input-borderless-focused,
  .du-bois-light-picker-input > input-borderless-disabled,
  .du-bois-light-picker-input > input-borderless[disabled] {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
  textarea.du-bois-light-picker-input > input {
    max-width: 100%;
    height: auto;
    min-height: 40px;
    line-height: 20px;
    vertical-align: bottom;
    transition: all 0.3s, height 0s;
  }
  .du-bois-light-picker-input > input-lg {
    padding: 5px 12px;
    font-size: 18px;
  }
  .du-bois-light-picker-input > input-sm {
    padding: 5px 12px;
  }
  .du-bois-light-picker-input > input:focus {
    box-shadow: none;
  }
  .du-bois-light-picker-input > input[disabled] {
    background: transparent;
  }
  .du-bois-light-picker-input:hover .du-bois-light-picker-clear {
    opacity: 1;
  }
  .du-bois-light-picker-input-placeholder > input {
    color: #bfbfbf;
  }
  .du-bois-light-picker-large {
    padding: 0 12px 0;
  }
  .du-bois-light-picker-large .du-bois-light-picker-input > input {
    font-size: 18px;
  }
  .du-bois-light-picker-small {
    padding: 0 12px 0;
  }
  .du-bois-light-picker-suffix {
    align-self: center;
    margin-left: 2px;
    color: rgba(0, 0, 0, 0.25);
    line-height: 1;
    pointer-events: none;
  }
  .du-bois-light-picker-suffix > * {
    vertical-align: top;
  }
  .du-bois-light-picker-clear {
    position: absolute;
    top: 50%;
    right: 0;
    color: rgba(0, 0, 0, 0.25);
    line-height: 1;
    background: #fff;
    transform: translateY(-50%);
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s, color 0.3s;
  }
  .du-bois-light-picker-clear > * {
    vertical-align: top;
  }
  .du-bois-light-picker-clear:hover {
    color: #5d7283;
  }
  .du-bois-light-picker-separator {
    position: relative;
    display: inline-block;
    width: 1em;
    height: 18px;
    color: rgba(0, 0, 0, 0.25);
    font-size: 18px;
    vertical-align: top;
    cursor: default;
  }
  .du-bois-light-picker-focused .du-bois-light-picker-separator {
    color: #5d7283;
  }
  .du-bois-light-picker-disabled
    .du-bois-light-picker-range-separator
    .du-bois-light-picker-separator {
    cursor: not-allowed;
  }
  .du-bois-light-picker-range {
    position: relative;
    display: inline-flex;
  }
  .du-bois-light-picker-range .du-bois-light-picker-clear {
    right: 12px;
  }
  .du-bois-light-picker-range:hover .du-bois-light-picker-clear {
    opacity: 1;
  }
  .du-bois-light-picker-range .du-bois-light-picker-active-bar {
    bottom: -1px;
    height: 2px;
    margin-left: 12px;
    background: #2272b4;
    opacity: 0;
    transition: all 0.3s ease-out;
    pointer-events: none;
  }
  .du-bois-light-picker-range.du-bois-light-picker-focused
    .du-bois-light-picker-active-bar {
    opacity: 1;
  }
  .du-bois-light-picker-range-separator {
    align-items: center;
    padding: 0 4px;
    line-height: 1;
  }
  .du-bois-light-picker-range.du-bois-light-picker-small
    .du-bois-light-picker-clear {
    right: 12px;
  }
  .du-bois-light-picker-range.du-bois-light-picker-small
    .du-bois-light-picker-active-bar {
    margin-left: 12px;
  }
  .du-bois-light-picker-dropdown {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    position: absolute;
    z-index: 1050;
  }
  .du-bois-light-picker-dropdown-hidden {
    display: none;
  }
  .du-bois-light-picker-dropdown-placement-bottomLeft
    .du-bois-light-picker-range-arrow {
    top: 1.66666667px;
    display: block;
    transform: rotate(-45deg);
  }
  .du-bois-light-picker-dropdown-placement-topLeft
    .du-bois-light-picker-range-arrow {
    bottom: 1.66666667px;
    display: block;
    transform: rotate(135deg);
  }
  .du-bois-light-picker-dropdown.du-bois-light-slide-up-enter.du-bois-light-slide-up-enter-active.du-bois-light-picker-dropdown-placement-topLeft,
  .du-bois-light-picker-dropdown.du-bois-light-slide-up-enter.du-bois-light-slide-up-enter-active.du-bois-light-picker-dropdown-placement-topRight,
  .du-bois-light-picker-dropdown.du-bois-light-slide-up-appear.du-bois-light-slide-up-appear-active.du-bois-light-picker-dropdown-placement-topLeft,
  .du-bois-light-picker-dropdown.du-bois-light-slide-up-appear.du-bois-light-slide-up-appear-active.du-bois-light-picker-dropdown-placement-topRight {
    animation-name: antSlideDownIn;
  }
  .du-bois-light-picker-dropdown.du-bois-light-slide-up-enter.du-bois-light-slide-up-enter-active.du-bois-light-picker-dropdown-placement-bottomLeft,
  .du-bois-light-picker-dropdown.du-bois-light-slide-up-enter.du-bois-light-slide-up-enter-active.du-bois-light-picker-dropdown-placement-bottomRight,
  .du-bois-light-picker-dropdown.du-bois-light-slide-up-appear.du-bois-light-slide-up-appear-active.du-bois-light-picker-dropdown-placement-bottomLeft,
  .du-bois-light-picker-dropdown.du-bois-light-slide-up-appear.du-bois-light-slide-up-appear-active.du-bois-light-picker-dropdown-placement-bottomRight {
    animation-name: antSlideUpIn;
  }
  .du-bois-light-picker-dropdown.du-bois-light-slide-up-leave.du-bois-light-slide-up-leave-active.du-bois-light-picker-dropdown-placement-topLeft,
  .du-bois-light-picker-dropdown.du-bois-light-slide-up-leave.du-bois-light-slide-up-leave-active.du-bois-light-picker-dropdown-placement-topRight {
    animation-name: antSlideDownOut;
  }
  .du-bois-light-picker-dropdown.du-bois-light-slide-up-leave.du-bois-light-slide-up-leave-active.du-bois-light-picker-dropdown-placement-bottomLeft,
  .du-bois-light-picker-dropdown.du-bois-light-slide-up-leave.du-bois-light-slide-up-leave-active.du-bois-light-picker-dropdown-placement-bottomRight {
    animation-name: antSlideUpOut;
  }
  .du-bois-light-picker-dropdown-range {
    padding: 6.66666667px 0;
  }
  .du-bois-light-picker-dropdown-range-hidden {
    display: none;
  }
  .du-bois-light-picker-dropdown
    .du-bois-light-picker-panel
    > .du-bois-light-picker-time-panel {
    padding-top: 2px;
  }
  .du-bois-light-picker-ranges {
    margin-bottom: 0;
    padding: 2px 8px;
    overflow: hidden;
    line-height: 36px;
    text-align: left;
    list-style: none;
  }
  .du-bois-light-picker-ranges > li {
    display: inline-block;
  }
  .du-bois-light-picker-ranges
    .du-bois-light-picker-preset
    > .du-bois-light-tag-blue {
    color: #2272b4;
    background: #e6f1f5;
    border-color: #93c2db;
    cursor: pointer;
  }
  .du-bois-light-picker-ranges .du-bois-light-picker-ok {
    float: right;
    margin-left: 4px;
  }
  .du-bois-light-picker-range-wrapper {
    display: flex;
  }
  .du-bois-light-picker-range-arrow {
    position: absolute;
    z-index: 1;
    display: none;
    width: 10px;
    height: 10px;
    margin-left: 18px;
    box-shadow: 2px -2px 6px rgba(0, 0, 0, 0.06);
    transition: left 0.3s ease-out;
  }
  .du-bois-light-picker-range-arrow::after {
    position: absolute;
    top: 1px;
    right: 1px;
    width: 10px;
    height: 10px;
    border: 5px solid #f0f0f0;
    border-color: #fff #fff transparent transparent;
    content: "";
  }
  .du-bois-light-picker-panel-container {
    overflow: hidden;
    vertical-align: top;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    transition: margin 0.3s;
  }
  .du-bois-light-picker-panel-container .du-bois-light-picker-panels {
    display: inline-flex;
    flex-wrap: nowrap;
    direction: ltr;
  }
  .du-bois-light-picker-panel-container .du-bois-light-picker-panel {
    vertical-align: top;
    background: transparent;
    border-width: 0 0 1px 0;
    border-radius: 0;
  }
  .du-bois-light-picker-panel-container
    .du-bois-light-picker-panel
    .du-bois-light-picker-content,
  .du-bois-light-picker-panel-container .du-bois-light-picker-panel table {
    text-align: center;
  }
  .du-bois-light-picker-panel-container .du-bois-light-picker-panel-focused {
    border-color: #f0f0f0;
  }
  .du-bois-light-picker-panel {
    display: inline-flex;
    flex-direction: column;
    text-align: center;
    background: #fff;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    outline: none;
  }
  .du-bois-light-picker-panel-focused {
    border-color: #2272b4;
  }
  .du-bois-light-picker-decade-panel,
  .du-bois-light-picker-year-panel,
  .du-bois-light-picker-quarter-panel,
  .du-bois-light-picker-month-panel,
  .du-bois-light-picker-week-panel,
  .du-bois-light-picker-date-panel,
  .du-bois-light-picker-time-panel {
    display: flex;
    flex-direction: column;
    width: 272px;
  }
  .du-bois-light-picker-header {
    display: flex;
    padding: 0 4px;
    color: rgba(0, 0, 0, 0.85);
    border-bottom: 1px solid #f0f0f0;
  }
  .du-bois-light-picker-header > * {
    flex: none;
  }
  .du-bois-light-picker-header button {
    padding: 0;
    color: rgba(0, 0, 0, 0.25);
    line-height: 40px;
    background: transparent;
    border: 0;
    cursor: pointer;
    transition: color 0.3s;
  }
  .du-bois-light-picker-header > button {
    min-width: 1.6em;
    font-size: 13px;
  }
  .du-bois-light-picker-header > button:hover {
    color: #1f272d;
  }
  .du-bois-light-picker-header-view {
    flex: auto;
    font-weight: 500;
    line-height: 40px;
  }
  .du-bois-light-picker-header-view button {
    color: inherit;
    font-weight: inherit;
  }
  .du-bois-light-picker-header-view button:not(:first-of-type) {
    margin-left: 4px;
  }
  .du-bois-light-picker-header-view button:hover {
    color: #2272b4;
  }
  .du-bois-light-picker-prev-icon,
  .du-bois-light-picker-next-icon,
  .du-bois-light-picker-super-prev-icon,
  .du-bois-light-picker-super-next-icon {
    position: relative;
    display: inline-block;
    width: 7px;
    height: 7px;
  }
  .du-bois-light-picker-prev-icon::before,
  .du-bois-light-picker-next-icon::before,
  .du-bois-light-picker-super-prev-icon::before,
  .du-bois-light-picker-super-next-icon::before {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 7px;
    height: 7px;
    border: 0 solid currentColor;
    border-width: 1.5px 0 0 1.5px;
    content: "";
  }
  .du-bois-light-picker-super-prev-icon::after,
  .du-bois-light-picker-super-next-icon::after {
    position: absolute;
    top: 4px;
    left: 4px;
    display: inline-block;
    width: 7px;
    height: 7px;
    border: 0 solid currentColor;
    border-width: 1.5px 0 0 1.5px;
    content: "";
  }
  .du-bois-light-picker-prev-icon,
  .du-bois-light-picker-super-prev-icon {
    transform: rotate(-45deg);
  }
  .du-bois-light-picker-next-icon,
  .du-bois-light-picker-super-next-icon {
    transform: rotate(135deg);
  }
  .du-bois-light-picker-content {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }
  .du-bois-light-picker-content th,
  .du-bois-light-picker-content td {
    position: relative;
    min-width: 24px;
    font-weight: 400;
  }
  .du-bois-light-picker-content th {
    height: 30px;
    color: #1f272d;
    line-height: 30px;
  }
  .du-bois-light-picker-cell {
    padding: 3px 0;
    color: rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
  .du-bois-light-picker-cell-in-view {
    color: #1f272d;
  }
  .du-bois-light-picker-cell::before {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    z-index: 1;
    height: 24px;
    transform: translateY(-50%);
    content: "";
  }
  .du-bois-light-picker-cell .du-bois-light-picker-cell-inner {
    position: relative;
    z-index: 2;
    display: inline-block;
    min-width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 4px;
    transition: background 0.3s, border 0.3s;
  }
  .du-bois-light-picker-cell:hover:not(.du-bois-light-picker-cell-in-view)
    .du-bois-light-picker-cell-inner,
  .du-bois-light-picker-cell:hover:not(.du-bois-light-picker-cell-selected):not(
      .du-bois-light-picker-cell-range-start
    ):not(.du-bois-light-picker-cell-range-end):not(
      .du-bois-light-picker-cell-range-hover-start
    ):not(.du-bois-light-picker-cell-range-hover-end)
    .du-bois-light-picker-cell-inner {
    background: #f5f5f5;
  }
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-today
    .du-bois-light-picker-cell-inner::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    border: 1px solid #2272b4;
    border-radius: 4px;
    content: "";
  }
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-in-range {
    position: relative;
  }
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-in-range::before {
    background: #e6f1f5;
  }
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-selected
    .du-bois-light-picker-cell-inner,
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-start
    .du-bois-light-picker-cell-inner,
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-end
    .du-bois-light-picker-cell-inner {
    color: #fff;
    background: #2272b4;
  }
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-start:not(
      .du-bois-light-picker-cell-range-start-single
    )::before,
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-end:not(
      .du-bois-light-picker-cell-range-end-single
    )::before {
    background: #e6f1f5;
  }
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-start::before {
    left: 50%;
  }
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-end::before {
    right: 50%;
  }
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover-start:not(
      .du-bois-light-picker-cell-in-range
    ):not(.du-bois-light-picker-cell-range-start):not(
      .du-bois-light-picker-cell-range-end
    )::after,
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover-end:not(
      .du-bois-light-picker-cell-in-range
    ):not(.du-bois-light-picker-cell-range-start):not(
      .du-bois-light-picker-cell-range-end
    )::after,
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover-start.du-bois-light-picker-cell-range-start-single::after,
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover-start.du-bois-light-picker-cell-range-start.du-bois-light-picker-cell-range-end.du-bois-light-picker-cell-range-end-near-hover::after,
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover-end.du-bois-light-picker-cell-range-start.du-bois-light-picker-cell-range-end.du-bois-light-picker-cell-range-start-near-hover::after,
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover-end.du-bois-light-picker-cell-range-end-single::after,
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover:not(
      .du-bois-light-picker-cell-in-range
    )::after {
    position: absolute;
    top: 50%;
    z-index: 0;
    height: 24px;
    border-top: 1px dashed #5ca4e0;
    border-bottom: 1px dashed #5ca4e0;
    transform: translateY(-50%);
    content: "";
  }
  .du-bois-light-picker-cell-range-hover-start::after,
  .du-bois-light-picker-cell-range-hover-end::after,
  .du-bois-light-picker-cell-range-hover::after {
    right: 0;
    left: 2px;
  }
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-in-range.du-bois-light-picker-cell-range-hover::before,
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-start.du-bois-light-picker-cell-range-hover::before,
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-end.du-bois-light-picker-cell-range-hover::before,
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-start:not(
      .du-bois-light-picker-cell-range-start-single
    ).du-bois-light-picker-cell-range-hover-start::before,
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-end:not(
      .du-bois-light-picker-cell-range-end-single
    ).du-bois-light-picker-cell-range-hover-end::before,
  .du-bois-light-picker-panel
    > :not(.du-bois-light-picker-date-panel)
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-in-range.du-bois-light-picker-cell-range-hover-start::before,
  .du-bois-light-picker-panel
    > :not(.du-bois-light-picker-date-panel)
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-in-range.du-bois-light-picker-cell-range-hover-end::before {
    background: #9cc8ec;
  }
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-start:not(
      .du-bois-light-picker-cell-range-start-single
    ):not(.du-bois-light-picker-cell-range-end)
    .du-bois-light-picker-cell-inner {
    border-radius: 4px 0 0 4px;
  }
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-end:not(
      .du-bois-light-picker-cell-range-end-single
    ):not(.du-bois-light-picker-cell-range-start)
    .du-bois-light-picker-cell-inner {
    border-radius: 0 4px 4px 0;
  }
  .du-bois-light-picker-date-panel
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-in-range.du-bois-light-picker-cell-range-hover-start
    .du-bois-light-picker-cell-inner::after,
  .du-bois-light-picker-date-panel
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-in-range.du-bois-light-picker-cell-range-hover-end
    .du-bois-light-picker-cell-inner::after {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
    background: #9cc8ec;
    content: "";
  }
  .du-bois-light-picker-date-panel
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-in-range.du-bois-light-picker-cell-range-hover-start
    .du-bois-light-picker-cell-inner::after {
    right: -6px;
    left: 0;
  }
  .du-bois-light-picker-date-panel
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-in-range.du-bois-light-picker-cell-range-hover-end
    .du-bois-light-picker-cell-inner::after {
    right: 0;
    left: -6px;
  }
  .du-bois-light-picker-cell-range-hover.du-bois-light-picker-cell-range-start::after {
    right: 50%;
  }
  .du-bois-light-picker-cell-range-hover.du-bois-light-picker-cell-range-end::after {
    left: 50%;
  }
  tr
    > .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover:first-of-type::after,
  tr
    > .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover-end:first-of-type::after,
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-start.du-bois-light-picker-cell-range-hover-edge-start.du-bois-light-picker-cell-range-hover-edge-start-near-range::after,
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover-edge-start:not(
      .du-bois-light-picker-cell-range-hover-edge-start-near-range
    )::after,
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover-start::after {
    left: 6px;
    border-left: 1px dashed #5ca4e0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  tr
    > .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover:last-child::after,
  tr
    > .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover-start:last-child::after,
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-end.du-bois-light-picker-cell-range-hover-edge-end.du-bois-light-picker-cell-range-hover-edge-end-near-range::after,
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover-edge-end:not(
      .du-bois-light-picker-cell-range-hover-edge-end-near-range
    )::after,
  .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover-end::after {
    right: 6px;
    border-right: 1px dashed #5ca4e0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .du-bois-light-picker-cell-disabled {
    color: rgba(0, 0, 0, 0.25);
    pointer-events: none;
  }
  .du-bois-light-picker-cell-disabled .du-bois-light-picker-cell-inner {
    background: transparent;
  }
  .du-bois-light-picker-cell-disabled::before {
    background: rgba(0, 0, 0, 0.04);
  }
  .du-bois-light-picker-cell-disabled.du-bois-light-picker-cell-today
    .du-bois-light-picker-cell-inner::before {
    border-color: rgba(0, 0, 0, 0.25);
  }
  .du-bois-light-picker-decade-panel .du-bois-light-picker-content,
  .du-bois-light-picker-year-panel .du-bois-light-picker-content,
  .du-bois-light-picker-quarter-panel .du-bois-light-picker-content,
  .du-bois-light-picker-month-panel .du-bois-light-picker-content {
    height: 264px;
  }
  .du-bois-light-picker-decade-panel .du-bois-light-picker-cell-inner,
  .du-bois-light-picker-year-panel .du-bois-light-picker-cell-inner,
  .du-bois-light-picker-quarter-panel .du-bois-light-picker-cell-inner,
  .du-bois-light-picker-month-panel .du-bois-light-picker-cell-inner {
    padding: 0 4px;
  }
  .du-bois-light-picker-quarter-panel .du-bois-light-picker-content {
    height: 56px;
  }
  .du-bois-light-picker-footer {
    width: min-content;
    min-width: 100%;
    line-height: 38px;
    text-align: center;
    border-bottom: 1px solid transparent;
  }
  .du-bois-light-picker-panel .du-bois-light-picker-footer {
    border-top: 1px solid #f0f0f0;
  }
  .du-bois-light-picker-footer-extra {
    padding: 0 8px;
    line-height: 38px;
    text-align: left;
  }
  .du-bois-light-picker-footer-extra:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
  .du-bois-light-picker-now {
    text-align: left;
  }
  .du-bois-light-picker-today-btn {
    color: #2272b4;
  }
  .du-bois-light-picker-today-btn:hover {
    color: #448dc2;
  }
  .du-bois-light-picker-today-btn:active {
    color: #14538f;
  }
  .du-bois-light-picker-today-btn.du-bois-light-picker-today-btn-disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .du-bois-light-picker-decade-panel .du-bois-light-picker-cell-inner {
    padding: 0 2px;
  }
  .du-bois-light-picker-decade-panel .du-bois-light-picker-cell::before {
    display: none;
  }
  .du-bois-light-picker-year-panel .du-bois-light-picker-body,
  .du-bois-light-picker-quarter-panel .du-bois-light-picker-body,
  .du-bois-light-picker-month-panel .du-bois-light-picker-body {
    padding: 0 4px;
  }
  .du-bois-light-picker-year-panel .du-bois-light-picker-cell-inner,
  .du-bois-light-picker-quarter-panel .du-bois-light-picker-cell-inner,
  .du-bois-light-picker-month-panel .du-bois-light-picker-cell-inner {
    width: 60px;
  }
  .du-bois-light-picker-year-panel
    .du-bois-light-picker-cell-range-hover-start::after,
  .du-bois-light-picker-quarter-panel
    .du-bois-light-picker-cell-range-hover-start::after,
  .du-bois-light-picker-month-panel
    .du-bois-light-picker-cell-range-hover-start::after {
    left: 14px;
    border-left: 1px dashed #5ca4e0;
    border-radius: 4px 0 0 4px;
  }
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-year-panel
    .du-bois-light-picker-cell-range-hover-start::after,
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-quarter-panel
    .du-bois-light-picker-cell-range-hover-start::after,
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-month-panel
    .du-bois-light-picker-cell-range-hover-start::after {
    right: 14px;
    border-right: 1px dashed #5ca4e0;
    border-radius: 0 4px 4px 0;
  }
  .du-bois-light-picker-year-panel
    .du-bois-light-picker-cell-range-hover-end::after,
  .du-bois-light-picker-quarter-panel
    .du-bois-light-picker-cell-range-hover-end::after,
  .du-bois-light-picker-month-panel
    .du-bois-light-picker-cell-range-hover-end::after {
    right: 14px;
    border-right: 1px dashed #5ca4e0;
    border-radius: 0 4px 4px 0;
  }
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-year-panel
    .du-bois-light-picker-cell-range-hover-end::after,
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-quarter-panel
    .du-bois-light-picker-cell-range-hover-end::after,
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-month-panel
    .du-bois-light-picker-cell-range-hover-end::after {
    left: 14px;
    border-left: 1px dashed #5ca4e0;
    border-radius: 4px 0 0 4px;
  }
  .du-bois-light-picker-week-panel .du-bois-light-picker-body {
    padding: 4px 8px;
  }
  .du-bois-light-picker-week-panel
    .du-bois-light-picker-cell:hover
    .du-bois-light-picker-cell-inner,
  .du-bois-light-picker-week-panel
    .du-bois-light-picker-cell-selected
    .du-bois-light-picker-cell-inner,
  .du-bois-light-picker-week-panel
    .du-bois-light-picker-cell
    .du-bois-light-picker-cell-inner {
    background: transparent !important;
  }
  .du-bois-light-picker-week-panel-row td {
    transition: background 0.3s;
  }
  .du-bois-light-picker-week-panel-row:hover td {
    background: #f5f5f5;
  }
  .du-bois-light-picker-week-panel-row-selected td,
  .du-bois-light-picker-week-panel-row-selected:hover td {
    background: #2272b4;
  }
  .du-bois-light-picker-week-panel-row-selected
    td.du-bois-light-picker-cell-week,
  .du-bois-light-picker-week-panel-row-selected:hover
    td.du-bois-light-picker-cell-week {
    color: rgba(255, 255, 255, 0.5);
  }
  .du-bois-light-picker-week-panel-row-selected
    td.du-bois-light-picker-cell-today
    .du-bois-light-picker-cell-inner::before,
  .du-bois-light-picker-week-panel-row-selected:hover
    td.du-bois-light-picker-cell-today
    .du-bois-light-picker-cell-inner::before {
    border-color: #fff;
  }
  .du-bois-light-picker-week-panel-row-selected
    td
    .du-bois-light-picker-cell-inner,
  .du-bois-light-picker-week-panel-row-selected:hover
    td
    .du-bois-light-picker-cell-inner {
    color: #fff;
  }
  .du-bois-light-picker-date-panel .du-bois-light-picker-body {
    padding: 4px 8px;
  }
  .du-bois-light-picker-date-panel .du-bois-light-picker-content {
    width: 252px;
  }
  .du-bois-light-picker-date-panel .du-bois-light-picker-content th {
    width: 36px;
  }
  .du-bois-light-picker-datetime-panel {
    display: flex;
  }
  .du-bois-light-picker-datetime-panel .du-bois-light-picker-time-panel {
    border-left: 1px solid #f0f0f0;
  }
  .du-bois-light-picker-datetime-panel .du-bois-light-picker-date-panel,
  .du-bois-light-picker-datetime-panel .du-bois-light-picker-time-panel {
    transition: opacity 0.3s;
  }
  .du-bois-light-picker-datetime-panel-active .du-bois-light-picker-date-panel,
  .du-bois-light-picker-datetime-panel-active .du-bois-light-picker-time-panel {
    opacity: 0.3;
  }
  .du-bois-light-picker-datetime-panel-active
    .du-bois-light-picker-date-panel-active,
  .du-bois-light-picker-datetime-panel-active
    .du-bois-light-picker-time-panel-active {
    opacity: 1;
  }
  .du-bois-light-picker-time-panel {
    width: auto;
    min-width: auto;
  }
  .du-bois-light-picker-time-panel .du-bois-light-picker-content {
    display: flex;
    flex: auto;
    height: 224px;
  }
  .du-bois-light-picker-time-panel-column {
    flex: 1 0 auto;
    width: 56px;
    margin: 0;
    padding: 0;
    overflow-y: hidden;
    text-align: left;
    list-style: none;
    transition: background 0.3s;
  }
  .du-bois-light-picker-time-panel-column::after {
    display: block;
    height: 196px;
    content: "";
  }
  .du-bois-light-picker-datetime-panel
    .du-bois-light-picker-time-panel-column::after {
    height: 198px;
  }
  .du-bois-light-picker-time-panel-column:not(:first-of-type) {
    border-left: 1px solid #f0f0f0;
  }
  .du-bois-light-picker-time-panel-column-active {
    background: rgba(230, 241, 245, 0.2);
  }
  .du-bois-light-picker-time-panel-column:hover {
    overflow-y: auto;
  }
  .du-bois-light-picker-time-panel-column > li {
    margin: 0;
    padding: 0;
  }
  .du-bois-light-picker-time-panel-column
    > li.du-bois-light-picker-time-panel-cell
    .du-bois-light-picker-time-panel-cell-inner {
    display: block;
    width: 100%;
    height: 28px;
    margin: 0;
    padding: 0 0 0 14px;
    color: #1f272d;
    line-height: 28px;
    border-radius: 0;
    cursor: pointer;
    transition: background 0.3s;
  }
  .du-bois-light-picker-time-panel-column
    > li.du-bois-light-picker-time-panel-cell
    .du-bois-light-picker-time-panel-cell-inner:hover {
    background: #f5f5f5;
  }
  .du-bois-light-picker-time-panel-column
    > li.du-bois-light-picker-time-panel-cell-selected
    .du-bois-light-picker-time-panel-cell-inner {
    background: #e6f1f5;
  }
  .du-bois-light-picker-time-panel-column
    > li.du-bois-light-picker-time-panel-cell-disabled
    .du-bois-light-picker-time-panel-cell-inner {
    color: rgba(0, 0, 0, 0.25);
    background: transparent;
    cursor: not-allowed;
  }
  /* stylelint-disable-next-line */
  _:-ms-fullscreen
    .du-bois-light-picker-range-wrapper
    .du-bois-light-picker-month-panel
    .du-bois-light-picker-cell,
  :root
    .du-bois-light-picker-range-wrapper
    .du-bois-light-picker-month-panel
    .du-bois-light-picker-cell,
  _:-ms-fullscreen
    .du-bois-light-picker-range-wrapper
    .du-bois-light-picker-year-panel
    .du-bois-light-picker-cell,
  :root
    .du-bois-light-picker-range-wrapper
    .du-bois-light-picker-year-panel
    .du-bois-light-picker-cell {
    padding: 21px 0;
  }
  .du-bois-light-picker-rtl {
    direction: rtl;
  }
  .du-bois-light-picker-rtl .du-bois-light-picker-suffix {
    margin-right: 2px;
    margin-left: 0;
  }
  .du-bois-light-picker-rtl .du-bois-light-picker-clear {
    right: auto;
    left: 0;
  }
  .du-bois-light-picker-rtl .du-bois-light-picker-separator {
    transform: rotate(180deg);
  }
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-header-view
    button:not(:first-of-type) {
    margin-right: 4px;
    margin-left: 0;
  }
  .du-bois-light-picker-rtl.du-bois-light-picker-range
    .du-bois-light-picker-clear {
    right: auto;
    left: 12px;
  }
  .du-bois-light-picker-rtl.du-bois-light-picker-range
    .du-bois-light-picker-active-bar {
    margin-right: 12px;
    margin-left: 0;
  }
  .du-bois-light-picker-rtl.du-bois-light-picker-range.du-bois-light-picker-small
    .du-bois-light-picker-active-bar {
    margin-right: 12px;
  }
  .du-bois-light-picker-dropdown-rtl .du-bois-light-picker-ranges {
    text-align: right;
  }
  .du-bois-light-picker-dropdown-rtl
    .du-bois-light-picker-ranges
    .du-bois-light-picker-ok {
    float: left;
    margin-right: 4px;
    margin-left: 0;
  }
  .du-bois-light-picker-panel-rtl {
    direction: rtl;
  }
  .du-bois-light-picker-panel-rtl .du-bois-light-picker-prev-icon,
  .du-bois-light-picker-panel-rtl .du-bois-light-picker-super-prev-icon {
    transform: rotate(135deg);
  }
  .du-bois-light-picker-panel-rtl .du-bois-light-picker-next-icon,
  .du-bois-light-picker-panel-rtl .du-bois-light-picker-super-next-icon {
    transform: rotate(-45deg);
  }
  .du-bois-light-picker-cell .du-bois-light-picker-cell-inner {
    position: relative;
    z-index: 2;
    display: inline-block;
    min-width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 4px;
    transition: background 0.3s, border 0.3s;
  }
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-start::before {
    right: 50%;
    left: 0;
  }
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-end::before {
    right: 0;
    left: 50%;
  }
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-start.du-bois-light-picker-cell-range-end::before {
    right: 50%;
    left: 50%;
  }
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-date-panel
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-in-range.du-bois-light-picker-cell-range-hover-start
    .du-bois-light-picker-cell-inner::after {
    right: 0;
    left: -6px;
  }
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-date-panel
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-in-range.du-bois-light-picker-cell-range-hover-end
    .du-bois-light-picker-cell-inner::after {
    right: -6px;
    left: 0;
  }
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-cell-range-hover.du-bois-light-picker-cell-range-start::after {
    right: 0;
    left: 50%;
  }
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-cell-range-hover.du-bois-light-picker-cell-range-end::after {
    right: 50%;
    left: 0;
  }
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-start:not(
      .du-bois-light-picker-cell-range-start-single
    ):not(.du-bois-light-picker-cell-range-end)
    .du-bois-light-picker-cell-inner {
    border-radius: 0 4px 4px 0;
  }
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-end:not(
      .du-bois-light-picker-cell-range-end-single
    ):not(.du-bois-light-picker-cell-range-start)
    .du-bois-light-picker-cell-inner {
    border-radius: 4px 0 0 4px;
  }
  .du-bois-light-picker-panel-rtl
    tr
    > .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover:not(
      .du-bois-light-picker-cell-selected
    ):first-of-type::after,
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-start.du-bois-light-picker-cell-range-hover-edge-start.du-bois-light-picker-cell-range-hover-edge-start-near-range::after,
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover-edge-start:not(
      .du-bois-light-picker-cell-range-hover-edge-start-near-range
    )::after,
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover-start::after {
    right: 6px;
    left: 0;
    border-right: 1px dashed #5ca4e0;
    border-left: none;
    border-top-left-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 0;
  }
  .du-bois-light-picker-panel-rtl
    tr
    > .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover:not(
      .du-bois-light-picker-cell-selected
    ):last-child::after,
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-end.du-bois-light-picker-cell-range-hover-edge-end.du-bois-light-picker-cell-range-hover-edge-end-near-range::after,
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover-edge-end:not(
      .du-bois-light-picker-cell-range-hover-edge-end-near-range
    )::after,
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover-end::after {
    right: 0;
    left: 6px;
    border-right: none;
    border-left: 1px dashed #5ca4e0;
    border-top-left-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 4px;
  }
  .du-bois-light-picker-panel-rtl
    tr
    > .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover-start:last-child::after,
  .du-bois-light-picker-panel-rtl
    tr
    > .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-range-hover-end:first-of-type::after,
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-start.du-bois-light-picker-cell-range-hover-edge-start:not(
      .du-bois-light-picker-cell-range-hover
    )::after,
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-start.du-bois-light-picker-cell-range-hover-end.du-bois-light-picker-cell-range-hover-edge-start:not(
      .du-bois-light-picker-cell-range-hover
    )::after,
  .du-bois-light-picker-panel-rtl
    .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-end.du-bois-light-picker-cell-range-hover-start.du-bois-light-picker-cell-range-hover-edge-end:not(
      .du-bois-light-picker-cell-range-hover
    )::after,
  .du-bois-light-picker-panel-rtl
    tr
    > .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-start.du-bois-light-picker-cell-range-hover.du-bois-light-picker-cell-range-hover-edge-start:last-child::after,
  .du-bois-light-picker-panel-rtl
    tr
    > .du-bois-light-picker-cell-in-view.du-bois-light-picker-cell-end.du-bois-light-picker-cell-range-hover.du-bois-light-picker-cell-range-hover-edge-end:first-of-type::after {
    right: 6px;
    left: 6px;
    border-right: 1px dashed #5ca4e0;
    border-left: 1px dashed #5ca4e0;
    border-radius: 4px;
  }
  .du-bois-light-picker-dropdown-rtl .du-bois-light-picker-footer-extra {
    direction: rtl;
    text-align: right;
  }
  .du-bois-light-picker-panel-rtl .du-bois-light-picker-time-panel {
    direction: ltr;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-tag {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    display: inline-block;
    height: auto;
    margin-right: 8px;
    padding: 0 7px;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    background: #fafafa;
    border: 1px solid #cddae5;
    border-radius: 4px;
    opacity: 1;
    transition: all 0.3s;
  }
  .du-bois-light-tag,
  .du-bois-light-tag a,
  .du-bois-light-tag a:hover {
    color: #1f272d;
  }
  .du-bois-light-tag > a:first-of-type:last-child {
    display: inline-block;
    margin: 0 -8px;
    padding: 0 8px;
  }
  .du-bois-light-tag-close-icon {
    margin-left: 3px;
    color: #5d7283;
    font-size: 10px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .du-bois-light-tag-close-icon:hover {
    color: rgba(0, 0, 0, 0.85);
  }
  .du-bois-light-tag-has-color {
    border-color: transparent;
  }
  .du-bois-light-tag-has-color,
  .du-bois-light-tag-has-color a,
  .du-bois-light-tag-has-color a:hover,
  .du-bois-light-tag-has-color .anticon-close,
  .du-bois-light-tag-has-color .anticon-close:hover {
    color: #fff;
  }
  .du-bois-light-tag-checkable {
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
  }
  .du-bois-light-tag-checkable:not(.du-bois-light-tag-checkable-checked):hover {
    color: #2272b4;
  }
  .du-bois-light-tag-checkable:active,
  .du-bois-light-tag-checkable-checked {
    color: #fff;
  }
  .du-bois-light-tag-checkable-checked {
    background-color: #2272b4;
  }
  .du-bois-light-tag-checkable:active {
    background-color: #14538f;
  }
  .du-bois-light-tag-hidden {
    display: none;
  }
  .du-bois-light-tag-pink {
    color: #c41d7f;
    background: #fff0f6;
    border-color: #ffadd2;
  }
  .du-bois-light-tag-pink-inverse {
    color: #fff;
    background: #eb2f96;
    border-color: #eb2f96;
  }
  .du-bois-light-tag-magenta {
    color: #c41d7f;
    background: #fff0f6;
    border-color: #ffadd2;
  }
  .du-bois-light-tag-magenta-inverse {
    color: #fff;
    background: #eb2f96;
    border-color: #eb2f96;
  }
  .du-bois-light-tag-red {
    color: #cf1322;
    background: #fff1f0;
    border-color: #ffa39e;
  }
  .du-bois-light-tag-red-inverse {
    color: #fff;
    background: #f5222d;
    border-color: #f5222d;
  }
  .du-bois-light-tag-volcano {
    color: #d4380d;
    background: #fff2e8;
    border-color: #ffbb96;
  }
  .du-bois-light-tag-volcano-inverse {
    color: #fff;
    background: #fa541c;
    border-color: #fa541c;
  }
  .du-bois-light-tag-orange {
    color: #d46b08;
    background: #fff7e6;
    border-color: #ffd591;
  }
  .du-bois-light-tag-orange-inverse {
    color: #fff;
    background: #fa8c16;
    border-color: #fa8c16;
  }
  .du-bois-light-tag-yellow {
    color: #d4b106;
    background: #feffe6;
    border-color: #fffb8f;
  }
  .du-bois-light-tag-yellow-inverse {
    color: #fff;
    background: #fadb14;
    border-color: #fadb14;
  }
  .du-bois-light-tag-gold {
    color: #d48806;
    background: #fffbe6;
    border-color: #ffe58f;
  }
  .du-bois-light-tag-gold-inverse {
    color: #fff;
    background: #faad14;
    border-color: #faad14;
  }
  .du-bois-light-tag-cyan {
    color: #08979c;
    background: #e6fffb;
    border-color: #87e8de;
  }
  .du-bois-light-tag-cyan-inverse {
    color: #fff;
    background: #13c2c2;
    border-color: #13c2c2;
  }
  .du-bois-light-tag-lime {
    color: #7cb305;
    background: #fcffe6;
    border-color: #eaff8f;
  }
  .du-bois-light-tag-lime-inverse {
    color: #fff;
    background: #a0d911;
    border-color: #a0d911;
  }
  .du-bois-light-tag-green {
    color: #389e0d;
    background: #f6ffed;
    border-color: #b7eb8f;
  }
  .du-bois-light-tag-green-inverse {
    color: #fff;
    background: #52c41a;
    border-color: #52c41a;
  }
  .du-bois-light-tag-blue {
    color: #096dd9;
    background: #e6f7ff;
    border-color: #91d5ff;
  }
  .du-bois-light-tag-blue-inverse {
    color: #fff;
    background: #1890ff;
    border-color: #1890ff;
  }
  .du-bois-light-tag-geekblue {
    color: #1d39c4;
    background: #f0f5ff;
    border-color: #adc6ff;
  }
  .du-bois-light-tag-geekblue-inverse {
    color: #fff;
    background: #2f54eb;
    border-color: #2f54eb;
  }
  .du-bois-light-tag-purple {
    color: #531dab;
    background: #f9f0ff;
    border-color: #d3adf7;
  }
  .du-bois-light-tag-purple-inverse {
    color: #fff;
    background: #722ed1;
    border-color: #722ed1;
  }
  .du-bois-light-tag-success {
    color: #52c41a;
    background: #f6ffed;
    border-color: #b7eb8f;
  }
  .du-bois-light-tag-processing {
    color: #1890ff;
    background: #e6f7ff;
    border-color: #91d5ff;
  }
  .du-bois-light-tag-error {
    color: #f5222d;
    background: #fff1f0;
    border-color: #ffa39e;
  }
  .du-bois-light-tag-warning {
    color: #fa8c16;
    background: #fff7e6;
    border-color: #ffd591;
  }
  .du-bois-light-tag > .anticon + span,
  .du-bois-light-tag > span + .anticon {
    margin-left: 7px;
  }
  .du-bois-light-tag.du-bois-light-tag-rtl {
    margin-right: 0;
    margin-left: 8px;
    direction: rtl;
    text-align: right;
  }
  .du-bois-light-tag-rtl .du-bois-light-tag-close-icon {
    margin-right: 3px;
    margin-left: 0;
  }
  .du-bois-light-tag-rtl.du-bois-light-tag > .anticon + span,
  .du-bois-light-tag-rtl.du-bois-light-tag > span + .anticon {
    margin-right: 7px;
    margin-left: 0;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-dropdown-menu-item.du-bois-light-dropdown-menu-item-danger {
    color: #c82d4c;
  }
  .du-bois-light-dropdown-menu-item.du-bois-light-dropdown-menu-item-danger:hover {
    color: #fff;
    background-color: #c82d4c;
  }
  .du-bois-light-dropdown {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    position: absolute;
    top: -9999px;
    left: -9999px;
    z-index: 1050;
    display: block;
  }
  .du-bois-light-dropdown::before {
    position: absolute;
    top: -4px;
    right: 0;
    bottom: -4px;
    left: -7px;
    z-index: -9999;
    opacity: 0.0001;
    content: " ";
  }
  .du-bois-light-dropdown-wrap {
    position: relative;
  }
  .du-bois-light-dropdown-wrap .du-bois-light-btn > .anticon-down {
    font-size: 10px;
  }
  .du-bois-light-dropdown-wrap .anticon-down::before {
    transition: transform 0.2s;
  }
  .du-bois-light-dropdown-wrap-open .anticon-down::before {
    transform: rotate(180deg);
  }
  .du-bois-light-dropdown-hidden,
  .du-bois-light-dropdown-menu-hidden,
  .du-bois-light-dropdown-menu-submenu-hidden {
    display: none;
  }
  .du-bois-light-dropdown-show-arrow.du-bois-light-dropdown-placement-topCenter,
  .du-bois-light-dropdown-show-arrow.du-bois-light-dropdown-placement-topLeft,
  .du-bois-light-dropdown-show-arrow.du-bois-light-dropdown-placement-topRight {
    padding-bottom: 10px;
  }
  .du-bois-light-dropdown-show-arrow.du-bois-light-dropdown-placement-bottomCenter,
  .du-bois-light-dropdown-show-arrow.du-bois-light-dropdown-placement-bottomLeft,
  .du-bois-light-dropdown-show-arrow.du-bois-light-dropdown-placement-bottomRight {
    padding-top: 10px;
  }
  .du-bois-light-dropdown-arrow {
    position: absolute;
    z-index: 1;
    display: block;
    width: 8.48528137px;
    height: 8.48528137px;
    background: transparent;
    border-style: solid;
    border-width: 4.24264069px;
    transform: rotate(45deg);
  }
  .du-bois-light-dropdown-placement-topCenter > .du-bois-light-dropdown-arrow,
  .du-bois-light-dropdown-placement-topLeft > .du-bois-light-dropdown-arrow,
  .du-bois-light-dropdown-placement-topRight > .du-bois-light-dropdown-arrow {
    bottom: 6.2px;
    border-top-color: transparent;
    border-right-color: #fff;
    border-bottom-color: #fff;
    border-left-color: transparent;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
  }
  .du-bois-light-dropdown-placement-topCenter > .du-bois-light-dropdown-arrow {
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }
  .du-bois-light-dropdown-placement-topLeft > .du-bois-light-dropdown-arrow {
    left: 16px;
  }
  .du-bois-light-dropdown-placement-topRight > .du-bois-light-dropdown-arrow {
    right: 16px;
  }
  .du-bois-light-dropdown-placement-bottomCenter
    > .du-bois-light-dropdown-arrow,
  .du-bois-light-dropdown-placement-bottomLeft > .du-bois-light-dropdown-arrow,
  .du-bois-light-dropdown-placement-bottomRight
    > .du-bois-light-dropdown-arrow {
    top: 6px;
    border-top-color: #fff;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: #fff;
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
  }
  .du-bois-light-dropdown-placement-bottomCenter
    > .du-bois-light-dropdown-arrow {
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }
  .du-bois-light-dropdown-placement-bottomLeft > .du-bois-light-dropdown-arrow {
    left: 16px;
  }
  .du-bois-light-dropdown-placement-bottomRight
    > .du-bois-light-dropdown-arrow {
    right: 16px;
  }
  .du-bois-light-dropdown-menu {
    position: relative;
    margin: 0;
    padding: 4px 0;
    text-align: left;
    list-style-type: none;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 4px;
    outline: none;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  }
  .du-bois-light-dropdown-menu-item-group-title {
    padding: 5px 8px;
    color: #5d7283;
    transition: all 0.3s;
  }
  .du-bois-light-dropdown-menu-submenu-popup {
    position: absolute;
    z-index: 1050;
    background: transparent;
    box-shadow: none;
    transform-origin: 0 0;
  }
  .du-bois-light-dropdown-menu-submenu-popup ul,
  .du-bois-light-dropdown-menu-submenu-popup li {
    list-style: none;
  }
  .du-bois-light-dropdown-menu-submenu-popup ul {
    margin-right: 0.3em;
    margin-left: 0.3em;
  }
  .du-bois-light-dropdown-menu-item {
    position: relative;
    display: flex;
    align-items: center;
  }
  .du-bois-light-dropdown-menu-item-icon {
    min-width: 12px;
    margin-right: 8px;
    font-size: 12px;
  }
  .du-bois-light-dropdown-menu-title-content {
    flex: auto;
  }
  .du-bois-light-dropdown-menu-title-content > a {
    color: inherit;
    transition: all 0.3s;
  }
  .du-bois-light-dropdown-menu-title-content > a:hover {
    color: inherit;
  }
  .du-bois-light-dropdown-menu-title-content > a::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
  }
  .du-bois-light-dropdown-menu-item,
  .du-bois-light-dropdown-menu-submenu-title {
    clear: both;
    margin: 0;
    padding: 5px 8px;
    color: #1f272d;
    font-weight: normal;
    font-size: 13px;
    line-height: 22px;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
  }
  .du-bois-light-dropdown-menu-item-selected,
  .du-bois-light-dropdown-menu-submenu-title-selected {
    color: #2272b4;
    background-color: #e6f1f5;
  }
  .du-bois-light-dropdown-menu-item:hover,
  .du-bois-light-dropdown-menu-submenu-title:hover {
    background-color: #f5f5f5;
  }
  .du-bois-light-dropdown-menu-item-disabled,
  .du-bois-light-dropdown-menu-submenu-title-disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .du-bois-light-dropdown-menu-item-disabled:hover,
  .du-bois-light-dropdown-menu-submenu-title-disabled:hover {
    color: rgba(0, 0, 0, 0.25);
    background-color: #fff;
    cursor: not-allowed;
  }
  .du-bois-light-dropdown-menu-item-disabled a,
  .du-bois-light-dropdown-menu-submenu-title-disabled a {
    pointer-events: none;
  }
  .du-bois-light-dropdown-menu-item-divider,
  .du-bois-light-dropdown-menu-submenu-title-divider {
    height: 1px;
    margin: 4px 0;
    overflow: hidden;
    line-height: 0;
    background-color: #f0f0f0;
  }
  .du-bois-light-dropdown-menu-item
    .du-bois-light-dropdown-menu-submenu-expand-icon,
  .du-bois-light-dropdown-menu-submenu-title
    .du-bois-light-dropdown-menu-submenu-expand-icon {
    position: absolute;
    right: 4px;
  }
  .du-bois-light-dropdown-menu-item
    .du-bois-light-dropdown-menu-submenu-expand-icon
    .du-bois-light-dropdown-menu-submenu-arrow-icon,
  .du-bois-light-dropdown-menu-submenu-title
    .du-bois-light-dropdown-menu-submenu-expand-icon
    .du-bois-light-dropdown-menu-submenu-arrow-icon {
    margin-right: 0 !important;
    color: #5d7283;
    font-size: 10px;
    font-style: normal;
  }
  .du-bois-light-dropdown-menu-item-group-list {
    margin: 0 8px;
    padding: 0;
    list-style: none;
  }
  .du-bois-light-dropdown-menu-submenu-title {
    padding-right: 20px;
  }
  .du-bois-light-dropdown-menu-submenu-vertical {
    position: relative;
  }
  .du-bois-light-dropdown-menu-submenu-vertical > .du-bois-light-dropdown-menu {
    position: absolute;
    top: 0;
    left: 100%;
    min-width: 100%;
    margin-left: 4px;
    transform-origin: 0 0;
  }
  .du-bois-light-dropdown-menu-submenu.du-bois-light-dropdown-menu-submenu-disabled
    .du-bois-light-dropdown-menu-submenu-title,
  .du-bois-light-dropdown-menu-submenu.du-bois-light-dropdown-menu-submenu-disabled
    .du-bois-light-dropdown-menu-submenu-title
    .du-bois-light-dropdown-menu-submenu-arrow-icon {
    color: rgba(0, 0, 0, 0.25);
    background-color: #fff;
    cursor: not-allowed;
  }
  .du-bois-light-dropdown-menu-submenu-selected
    .du-bois-light-dropdown-menu-submenu-title {
    color: #2272b4;
  }
  .du-bois-light-dropdown.du-bois-light-slide-down-enter.du-bois-light-slide-down-enter-active.du-bois-light-dropdown-placement-bottomLeft,
  .du-bois-light-dropdown.du-bois-light-slide-down-appear.du-bois-light-slide-down-appear-active.du-bois-light-dropdown-placement-bottomLeft,
  .du-bois-light-dropdown.du-bois-light-slide-down-enter.du-bois-light-slide-down-enter-active.du-bois-light-dropdown-placement-bottomCenter,
  .du-bois-light-dropdown.du-bois-light-slide-down-appear.du-bois-light-slide-down-appear-active.du-bois-light-dropdown-placement-bottomCenter,
  .du-bois-light-dropdown.du-bois-light-slide-down-enter.du-bois-light-slide-down-enter-active.du-bois-light-dropdown-placement-bottomRight,
  .du-bois-light-dropdown.du-bois-light-slide-down-appear.du-bois-light-slide-down-appear-active.du-bois-light-dropdown-placement-bottomRight {
    animation-name: antSlideUpIn;
  }
  .du-bois-light-dropdown.du-bois-light-slide-up-enter.du-bois-light-slide-up-enter-active.du-bois-light-dropdown-placement-topLeft,
  .du-bois-light-dropdown.du-bois-light-slide-up-appear.du-bois-light-slide-up-appear-active.du-bois-light-dropdown-placement-topLeft,
  .du-bois-light-dropdown.du-bois-light-slide-up-enter.du-bois-light-slide-up-enter-active.du-bois-light-dropdown-placement-topCenter,
  .du-bois-light-dropdown.du-bois-light-slide-up-appear.du-bois-light-slide-up-appear-active.du-bois-light-dropdown-placement-topCenter,
  .du-bois-light-dropdown.du-bois-light-slide-up-enter.du-bois-light-slide-up-enter-active.du-bois-light-dropdown-placement-topRight,
  .du-bois-light-dropdown.du-bois-light-slide-up-appear.du-bois-light-slide-up-appear-active.du-bois-light-dropdown-placement-topRight {
    animation-name: antSlideDownIn;
  }
  .du-bois-light-dropdown.du-bois-light-slide-down-leave.du-bois-light-slide-down-leave-active.du-bois-light-dropdown-placement-bottomLeft,
  .du-bois-light-dropdown.du-bois-light-slide-down-leave.du-bois-light-slide-down-leave-active.du-bois-light-dropdown-placement-bottomCenter,
  .du-bois-light-dropdown.du-bois-light-slide-down-leave.du-bois-light-slide-down-leave-active.du-bois-light-dropdown-placement-bottomRight {
    animation-name: antSlideUpOut;
  }
  .du-bois-light-dropdown.du-bois-light-slide-up-leave.du-bois-light-slide-up-leave-active.du-bois-light-dropdown-placement-topLeft,
  .du-bois-light-dropdown.du-bois-light-slide-up-leave.du-bois-light-slide-up-leave-active.du-bois-light-dropdown-placement-topCenter,
  .du-bois-light-dropdown.du-bois-light-slide-up-leave.du-bois-light-slide-up-leave-active.du-bois-light-dropdown-placement-topRight {
    animation-name: antSlideDownOut;
  }
  .du-bois-light-dropdown-trigger > .anticon.anticon-down,
  .du-bois-light-dropdown-link > .anticon.anticon-down,
  .du-bois-light-dropdown-button > .anticon.anticon-down {
    font-size: 10px;
    vertical-align: baseline;
  }
  .du-bois-light-dropdown-button {
    white-space: nowrap;
  }
  .du-bois-light-dropdown-button.du-bois-light-btn-group
    > .du-bois-light-btn:last-child:not(:first-of-type):not(
      .du-bois-light-btn-icon-only
    ) {
    padding-right: 4px;
    padding-left: 4px;
  }
  .du-bois-light-dropdown-menu-dark,
  .du-bois-light-dropdown-menu-dark .du-bois-light-dropdown-menu {
    background: #001529;
  }
  .du-bois-light-dropdown-menu-dark .du-bois-light-dropdown-menu-item,
  .du-bois-light-dropdown-menu-dark .du-bois-light-dropdown-menu-submenu-title,
  .du-bois-light-dropdown-menu-dark .du-bois-light-dropdown-menu-item > a,
  .du-bois-light-dropdown-menu-dark
    .du-bois-light-dropdown-menu-item
    > .anticon
    + span
    > a {
    color: rgba(255, 255, 255, 0.65);
  }
  .du-bois-light-dropdown-menu-dark
    .du-bois-light-dropdown-menu-item
    .du-bois-light-dropdown-menu-submenu-arrow::after,
  .du-bois-light-dropdown-menu-dark
    .du-bois-light-dropdown-menu-submenu-title
    .du-bois-light-dropdown-menu-submenu-arrow::after,
  .du-bois-light-dropdown-menu-dark
    .du-bois-light-dropdown-menu-item
    > a
    .du-bois-light-dropdown-menu-submenu-arrow::after,
  .du-bois-light-dropdown-menu-dark
    .du-bois-light-dropdown-menu-item
    > .anticon
    + span
    > a
    .du-bois-light-dropdown-menu-submenu-arrow::after {
    color: rgba(255, 255, 255, 0.65);
  }
  .du-bois-light-dropdown-menu-dark .du-bois-light-dropdown-menu-item:hover,
  .du-bois-light-dropdown-menu-dark
    .du-bois-light-dropdown-menu-submenu-title:hover,
  .du-bois-light-dropdown-menu-dark .du-bois-light-dropdown-menu-item > a:hover,
  .du-bois-light-dropdown-menu-dark
    .du-bois-light-dropdown-menu-item
    > .anticon
    + span
    > a:hover {
    color: #fff;
    background: transparent;
  }
  .du-bois-light-dropdown-menu-dark .du-bois-light-dropdown-menu-item-selected,
  .du-bois-light-dropdown-menu-dark
    .du-bois-light-dropdown-menu-item-selected:hover,
  .du-bois-light-dropdown-menu-dark
    .du-bois-light-dropdown-menu-item-selected
    > a {
    color: #fff;
    background: #2272b4;
  }
  .du-bois-light-dropdown-rtl {
    direction: rtl;
  }
  .du-bois-light-dropdown-rtl.du-bois-light-dropdown::before {
    right: -7px;
    left: 0;
  }
  .du-bois-light-dropdown-menu.du-bois-light-dropdown-menu-rtl {
    direction: rtl;
    text-align: right;
  }
  .du-bois-light-dropdown-rtl .du-bois-light-dropdown-menu-item-group-title {
    direction: rtl;
    text-align: right;
  }
  .du-bois-light-dropdown-menu-submenu-popup.du-bois-light-dropdown-menu-submenu-rtl {
    transform-origin: 100% 0;
  }
  .du-bois-light-dropdown-rtl .du-bois-light-dropdown-menu-submenu-popup ul,
  .du-bois-light-dropdown-rtl .du-bois-light-dropdown-menu-submenu-popup li {
    text-align: right;
  }
  .du-bois-light-dropdown-rtl .du-bois-light-dropdown-menu-item,
  .du-bois-light-dropdown-rtl .du-bois-light-dropdown-menu-submenu-title {
    text-align: right;
  }
  .du-bois-light-dropdown-rtl
    .du-bois-light-dropdown-menu-item
    > .anticon:first-of-type,
  .du-bois-light-dropdown-rtl
    .du-bois-light-dropdown-menu-submenu-title
    > .anticon:first-of-type,
  .du-bois-light-dropdown-rtl
    .du-bois-light-dropdown-menu-item
    > span
    > .anticon:first-of-type,
  .du-bois-light-dropdown-rtl
    .du-bois-light-dropdown-menu-submenu-title
    > span
    > .anticon:first-of-type {
    margin-right: 0;
    margin-left: 8px;
  }
  .du-bois-light-dropdown-rtl
    .du-bois-light-dropdown-menu-item
    .du-bois-light-dropdown-menu-submenu-arrow,
  .du-bois-light-dropdown-rtl
    .du-bois-light-dropdown-menu-submenu-title
    .du-bois-light-dropdown-menu-submenu-arrow {
    right: auto;
    left: 4px;
  }
  .du-bois-light-dropdown-rtl
    .du-bois-light-dropdown-menu-item
    .du-bois-light-dropdown-menu-submenu-arrow-icon,
  .du-bois-light-dropdown-rtl
    .du-bois-light-dropdown-menu-submenu-title
    .du-bois-light-dropdown-menu-submenu-arrow-icon {
    margin-left: 0 !important;
    transform: scaleX(-1);
  }
  .du-bois-light-dropdown-rtl .du-bois-light-dropdown-menu-submenu-title {
    padding-right: 8px;
    padding-left: 20px;
  }
  .du-bois-light-dropdown-rtl
    .du-bois-light-dropdown-menu-submenu-vertical
    > .du-bois-light-dropdown-menu {
    right: 100%;
    left: 0;
    margin-right: 4px;
    margin-left: 0;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-form-item .du-bois-light-mentions,
  .du-bois-light-form-item textarea.du-bois-light-input {
    height: auto;
  }
  .du-bois-light-form-item .du-bois-light-upload {
    background: transparent;
  }
  .du-bois-light-form-item .du-bois-light-upload.du-bois-light-upload-drag {
    background: #fafafa;
  }
  .du-bois-light-form-item input[type="radio"],
  .du-bois-light-form-item input[type="checkbox"] {
    width: 14px;
    height: 14px;
  }
  .du-bois-light-form-item .du-bois-light-radio-inline,
  .du-bois-light-form-item .du-bois-light-checkbox-inline {
    display: inline-block;
    margin-left: 8px;
    font-weight: normal;
    vertical-align: middle;
    cursor: pointer;
  }
  .du-bois-light-form-item .du-bois-light-radio-inline:first-of-type,
  .du-bois-light-form-item .du-bois-light-checkbox-inline:first-of-type {
    margin-left: 0;
  }
  .du-bois-light-form-item .du-bois-light-checkbox-vertical,
  .du-bois-light-form-item .du-bois-light-radio-vertical {
    display: block;
  }
  .du-bois-light-form-item
    .du-bois-light-checkbox-vertical
    + .du-bois-light-checkbox-vertical,
  .du-bois-light-form-item
    .du-bois-light-radio-vertical
    + .du-bois-light-radio-vertical {
    margin-left: 0;
  }
  .du-bois-light-form-item
    .du-bois-light-input-number
    + .du-bois-light-form-text {
    margin-left: 8px;
  }
  .du-bois-light-form-item .du-bois-light-input-number-handler-wrap {
    z-index: 2;
  }
  .du-bois-light-form-item .du-bois-light-select,
  .du-bois-light-form-item .du-bois-light-cascader-picker {
    width: 100%;
  }
  .du-bois-light-form-item .du-bois-light-picker-calendar-year-select,
  .du-bois-light-form-item .du-bois-light-picker-calendar-month-select,
  .du-bois-light-form-item .du-bois-light-input-group .du-bois-light-select,
  .du-bois-light-form-item
    .du-bois-light-input-group
    .du-bois-light-cascader-picker {
    width: auto;
  }
  .du-bois-light-form-inline {
    display: flex;
    flex-wrap: wrap;
  }
  .du-bois-light-form-inline .du-bois-light-form-item {
    flex: none;
    flex-wrap: nowrap;
    margin-right: 16px;
    margin-bottom: 0;
  }
  .du-bois-light-form-inline .du-bois-light-form-item-with-help {
    margin-bottom: 24px;
  }
  .du-bois-light-form-inline
    .du-bois-light-form-item
    > .du-bois-light-form-item-label,
  .du-bois-light-form-inline
    .du-bois-light-form-item
    > .du-bois-light-form-item-control {
    display: inline-block;
    vertical-align: top;
  }
  .du-bois-light-form-inline
    .du-bois-light-form-item
    > .du-bois-light-form-item-label {
    flex: none;
  }
  .du-bois-light-form-inline .du-bois-light-form-item .du-bois-light-form-text {
    display: inline-block;
  }
  .du-bois-light-form-inline
    .du-bois-light-form-item
    .du-bois-light-form-item-has-feedback {
    display: inline-block;
  }
  .du-bois-light-form-horizontal .du-bois-light-form-item-label {
    flex-grow: 0;
  }
  .du-bois-light-form-horizontal .du-bois-light-form-item-control {
    flex: 1 1 0;
  }
  .du-bois-light-form-vertical .du-bois-light-form-item {
    flex-direction: column;
  }
  .du-bois-light-form-vertical .du-bois-light-form-item-label > label {
    height: auto;
  }
  .du-bois-light-form-vertical .du-bois-light-form-item-label,
  .du-bois-light-col-24.du-bois-light-form-item-label,
  .du-bois-light-col-xl-24.du-bois-light-form-item-label {
    padding: 0 0 8px;
    line-height: 20px;
    white-space: initial;
    text-align: left;
  }
  .du-bois-light-form-vertical .du-bois-light-form-item-label > label,
  .du-bois-light-col-24.du-bois-light-form-item-label > label,
  .du-bois-light-col-xl-24.du-bois-light-form-item-label > label {
    margin: 0;
  }
  .du-bois-light-form-vertical .du-bois-light-form-item-label > label::after,
  .du-bois-light-col-24.du-bois-light-form-item-label > label::after,
  .du-bois-light-col-xl-24.du-bois-light-form-item-label > label::after {
    display: none;
  }
  .du-bois-light-form-rtl.du-bois-light-form-vertical
    .du-bois-light-form-item-label,
  .du-bois-light-form-rtl.du-bois-light-col-24.du-bois-light-form-item-label,
  .du-bois-light-form-rtl.du-bois-light-col-xl-24.du-bois-light-form-item-label {
    text-align: right;
  }
  @media (max-width: 575px) {
    .du-bois-light-form-item .du-bois-light-form-item-label {
      padding: 0 0 8px;
      line-height: 20px;
      white-space: initial;
      text-align: left;
    }
    .du-bois-light-form-item .du-bois-light-form-item-label > label {
      margin: 0;
    }
    .du-bois-light-form-item .du-bois-light-form-item-label > label::after {
      display: none;
    }
    .du-bois-light-form-rtl.du-bois-light-form-item
      .du-bois-light-form-item-label {
      text-align: right;
    }
    .du-bois-light-form .du-bois-light-form-item {
      flex-wrap: wrap;
    }
    .du-bois-light-form .du-bois-light-form-item .du-bois-light-form-item-label,
    .du-bois-light-form
      .du-bois-light-form-item
      .du-bois-light-form-item-control {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .du-bois-light-col-xs-24.du-bois-light-form-item-label {
      padding: 0 0 8px;
      line-height: 20px;
      white-space: initial;
      text-align: left;
    }
    .du-bois-light-col-xs-24.du-bois-light-form-item-label > label {
      margin: 0;
    }
    .du-bois-light-col-xs-24.du-bois-light-form-item-label > label::after {
      display: none;
    }
    .du-bois-light-form-rtl.du-bois-light-col-xs-24.du-bois-light-form-item-label {
      text-align: right;
    }
  }
  @media (max-width: 767px) {
    .du-bois-light-col-sm-24.du-bois-light-form-item-label {
      padding: 0 0 8px;
      line-height: 20px;
      white-space: initial;
      text-align: left;
    }
    .du-bois-light-col-sm-24.du-bois-light-form-item-label > label {
      margin: 0;
    }
    .du-bois-light-col-sm-24.du-bois-light-form-item-label > label::after {
      display: none;
    }
    .du-bois-light-form-rtl.du-bois-light-col-sm-24.du-bois-light-form-item-label {
      text-align: right;
    }
  }
  @media (max-width: 991px) {
    .du-bois-light-col-md-24.du-bois-light-form-item-label {
      padding: 0 0 8px;
      line-height: 20px;
      white-space: initial;
      text-align: left;
    }
    .du-bois-light-col-md-24.du-bois-light-form-item-label > label {
      margin: 0;
    }
    .du-bois-light-col-md-24.du-bois-light-form-item-label > label::after {
      display: none;
    }
    .du-bois-light-form-rtl.du-bois-light-col-md-24.du-bois-light-form-item-label {
      text-align: right;
    }
  }
  @media (max-width: 1199px) {
    .du-bois-light-col-lg-24.du-bois-light-form-item-label {
      padding: 0 0 8px;
      line-height: 20px;
      white-space: initial;
      text-align: left;
    }
    .du-bois-light-col-lg-24.du-bois-light-form-item-label > label {
      margin: 0;
    }
    .du-bois-light-col-lg-24.du-bois-light-form-item-label > label::after {
      display: none;
    }
    .du-bois-light-form-rtl.du-bois-light-col-lg-24.du-bois-light-form-item-label {
      text-align: right;
    }
  }
  @media (max-width: 1599px) {
    .du-bois-light-col-xl-24.du-bois-light-form-item-label {
      padding: 0 0 8px;
      line-height: 20px;
      white-space: initial;
      text-align: left;
    }
    .du-bois-light-col-xl-24.du-bois-light-form-item-label > label {
      margin: 0;
    }
    .du-bois-light-col-xl-24.du-bois-light-form-item-label > label::after {
      display: none;
    }
    .du-bois-light-form-rtl.du-bois-light-col-xl-24.du-bois-light-form-item-label {
      text-align: right;
    }
  }
  .du-bois-light-form-item {
    /* Some non-status related component style is in 'components.less' */
    /* To support leave along ErrorList. We add additional className to handle explain style */
  }
  .du-bois-light-form-item-explain.du-bois-light-form-item-explain-error {
    color: #c82d4c;
  }
  .du-bois-light-form-item-explain.du-bois-light-form-item-explain-warning {
    color: #af5b23;
  }
  .du-bois-light-form-item-has-feedback .du-bois-light-input {
    padding-right: 24px;
  }
  .du-bois-light-form-item-has-feedback
    .du-bois-light-input-affix-wrapper
    .du-bois-light-input-suffix {
    padding-right: 18px;
  }
  .du-bois-light-form-item-has-feedback
    .du-bois-light-input-search:not(.du-bois-light-input-search-enter-button)
    .du-bois-light-input-suffix {
    right: 28px;
  }
  .du-bois-light-form-item-has-feedback .du-bois-light-switch {
    margin: 2px 0 4px;
  }
  .du-bois-light-form-item-has-feedback
    > .du-bois-light-select
    .du-bois-light-select-arrow,
  .du-bois-light-form-item-has-feedback
    > .du-bois-light-select
    .du-bois-light-select-clear,
  .du-bois-light-form-item-has-feedback
    :not(.du-bois-light-input-group-addon)
    > .du-bois-light-select
    .du-bois-light-select-arrow,
  .du-bois-light-form-item-has-feedback
    :not(.du-bois-light-input-group-addon)
    > .du-bois-light-select
    .du-bois-light-select-clear {
    right: 32px;
  }
  .du-bois-light-form-item-has-feedback
    > .du-bois-light-select
    .du-bois-light-select-selection-selected-value,
  .du-bois-light-form-item-has-feedback
    :not(.du-bois-light-input-group-addon)
    > .du-bois-light-select
    .du-bois-light-select-selection-selected-value {
    padding-right: 42px;
  }
  .du-bois-light-form-item-has-feedback .du-bois-light-cascader-picker-arrow {
    margin-right: 19px;
  }
  .du-bois-light-form-item-has-feedback .du-bois-light-cascader-picker-clear {
    right: 32px;
  }
  .du-bois-light-form-item-has-feedback .du-bois-light-picker {
    padding-right: 28.9px;
  }
  .du-bois-light-form-item-has-feedback .du-bois-light-picker-large {
    padding-right: 28.9px;
  }
  .du-bois-light-form-item-has-feedback .du-bois-light-picker-small {
    padding-right: 28.9px;
  }
  .du-bois-light-form-item-has-feedback.du-bois-light-form-item-has-success
    .du-bois-light-form-item-children-icon,
  .du-bois-light-form-item-has-feedback.du-bois-light-form-item-has-warning
    .du-bois-light-form-item-children-icon,
  .du-bois-light-form-item-has-feedback.du-bois-light-form-item-has-error
    .du-bois-light-form-item-children-icon,
  .du-bois-light-form-item-has-feedback.du-bois-light-form-item-is-validating
    .du-bois-light-form-item-children-icon {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1;
    width: 40px;
    height: 20px;
    margin-top: -10px;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    visibility: visible;
    animation: zoomIn 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);
    pointer-events: none;
  }
  .du-bois-light-form-item-has-success.du-bois-light-form-item-has-feedback
    .du-bois-light-form-item-children-icon {
    color: #34824f;
    animation-name: diffZoomIn1 !important;
  }
  .du-bois-light-form-item-has-warning .du-bois-light-form-item-split {
    color: #af5b23;
  }
  .du-bois-light-form-item-has-warning
    :not(.du-bois-light-input-disabled).du-bois-light-input,
  .du-bois-light-form-item-has-warning
    :not(
      .du-bois-light-input-affix-wrapper-disabled
    ).du-bois-light-input-affix-wrapper,
  .du-bois-light-form-item-has-warning
    :not(.du-bois-light-input-disabled).du-bois-light-input:hover,
  .du-bois-light-form-item-has-warning
    :not(
      .du-bois-light-input-affix-wrapper-disabled
    ).du-bois-light-input-affix-wrapper:hover {
    background-color: #fff;
    border-color: #af5b23;
  }
  .du-bois-light-form-item-has-warning
    :not(.du-bois-light-input-disabled).du-bois-light-input:focus,
  .du-bois-light-form-item-has-warning
    :not(
      .du-bois-light-input-affix-wrapper-disabled
    ).du-bois-light-input-affix-wrapper:focus,
  .du-bois-light-form-item-has-warning
    :not(.du-bois-light-input-disabled).du-bois-light-input-focused,
  .du-bois-light-form-item-has-warning
    :not(
      .du-bois-light-input-affix-wrapper-disabled
    ).du-bois-light-input-affix-wrapper-focused {
    border-color: #bd7844;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(175, 91, 35, 0.2);
  }
  .du-bois-light-form-item-has-warning
    .du-bois-light-calendar-picker-open
    .du-bois-light-calendar-picker-input {
    border-color: #bd7844;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(175, 91, 35, 0.2);
  }
  .du-bois-light-form-item-has-warning .du-bois-light-input-prefix {
    color: #af5b23;
  }
  .du-bois-light-form-item-has-warning .du-bois-light-input-group-addon {
    color: #af5b23;
    border-color: #af5b23;
  }
  .du-bois-light-form-item-has-warning .has-feedback {
    color: #af5b23;
  }
  .du-bois-light-form-item-has-warning.du-bois-light-form-item-has-feedback
    .du-bois-light-form-item-children-icon {
    color: #af5b23;
    animation-name: diffZoomIn3 !important;
  }
  .du-bois-light-form-item-has-warning
    .du-bois-light-select:not(.du-bois-light-select-disabled):not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selector {
    background-color: #fff;
    border-color: #af5b23 !important;
  }
  .du-bois-light-form-item-has-warning
    .du-bois-light-select:not(.du-bois-light-select-disabled):not(
      .du-bois-light-select-customize-input
    ).du-bois-light-select-open
    .du-bois-light-select-selector,
  .du-bois-light-form-item-has-warning
    .du-bois-light-select:not(.du-bois-light-select-disabled):not(
      .du-bois-light-select-customize-input
    ).du-bois-light-select-focused
    .du-bois-light-select-selector {
    border-color: #bd7844;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(175, 91, 35, 0.2);
  }
  .du-bois-light-form-item-has-warning .du-bois-light-input-number,
  .du-bois-light-form-item-has-warning .du-bois-light-picker {
    background-color: #fff;
    border-color: #af5b23;
  }
  .du-bois-light-form-item-has-warning .du-bois-light-input-number-focused,
  .du-bois-light-form-item-has-warning .du-bois-light-picker-focused,
  .du-bois-light-form-item-has-warning .du-bois-light-input-number:focus,
  .du-bois-light-form-item-has-warning .du-bois-light-picker:focus {
    border-color: #bd7844;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(175, 91, 35, 0.2);
  }
  .du-bois-light-form-item-has-warning
    .du-bois-light-input-number:not([disabled]):hover,
  .du-bois-light-form-item-has-warning
    .du-bois-light-picker:not([disabled]):hover {
    background-color: #fff;
    border-color: #af5b23;
  }
  .du-bois-light-form-item-has-warning
    .du-bois-light-cascader-picker:focus
    .du-bois-light-cascader-input {
    border-color: #bd7844;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(175, 91, 35, 0.2);
  }
  .du-bois-light-form-item-has-error .du-bois-light-form-item-split {
    color: #c82d4c;
  }
  .du-bois-light-form-item-has-error
    :not(.du-bois-light-input-disabled).du-bois-light-input,
  .du-bois-light-form-item-has-error
    :not(
      .du-bois-light-input-affix-wrapper-disabled
    ).du-bois-light-input-affix-wrapper,
  .du-bois-light-form-item-has-error
    :not(.du-bois-light-input-disabled).du-bois-light-input:hover,
  .du-bois-light-form-item-has-error
    :not(
      .du-bois-light-input-affix-wrapper-disabled
    ).du-bois-light-input-affix-wrapper:hover {
    background-color: #fff;
    border-color: #c82d4c;
  }
  .du-bois-light-form-item-has-error
    :not(.du-bois-light-input-disabled).du-bois-light-input:focus,
  .du-bois-light-form-item-has-error
    :not(
      .du-bois-light-input-affix-wrapper-disabled
    ).du-bois-light-input-affix-wrapper:focus,
  .du-bois-light-form-item-has-error
    :not(.du-bois-light-input-disabled).du-bois-light-input-focused,
  .du-bois-light-form-item-has-error
    :not(
      .du-bois-light-input-affix-wrapper-disabled
    ).du-bois-light-input-affix-wrapper-focused {
    border-color: #d45368;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(200, 45, 76, 0.2);
  }
  .du-bois-light-form-item-has-error
    .du-bois-light-calendar-picker-open
    .du-bois-light-calendar-picker-input {
    border-color: #d45368;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(200, 45, 76, 0.2);
  }
  .du-bois-light-form-item-has-error .du-bois-light-input-prefix {
    color: #c82d4c;
  }
  .du-bois-light-form-item-has-error .du-bois-light-input-group-addon {
    color: #c82d4c;
    border-color: #c82d4c;
  }
  .du-bois-light-form-item-has-error .has-feedback {
    color: #c82d4c;
  }
  .du-bois-light-form-item-has-error.du-bois-light-form-item-has-feedback
    .du-bois-light-form-item-children-icon {
    color: #c82d4c;
    animation-name: diffZoomIn2 !important;
  }
  .du-bois-light-form-item-has-error
    .du-bois-light-select:not(.du-bois-light-select-disabled):not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selector {
    background-color: #fff;
    border-color: #c82d4c !important;
  }
  .du-bois-light-form-item-has-error
    .du-bois-light-select:not(.du-bois-light-select-disabled):not(
      .du-bois-light-select-customize-input
    ).du-bois-light-select-open
    .du-bois-light-select-selector,
  .du-bois-light-form-item-has-error
    .du-bois-light-select:not(.du-bois-light-select-disabled):not(
      .du-bois-light-select-customize-input
    ).du-bois-light-select-focused
    .du-bois-light-select-selector {
    border-color: #d45368;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(200, 45, 76, 0.2);
  }
  .du-bois-light-form-item-has-error
    .du-bois-light-input-group-addon
    .du-bois-light-select.du-bois-light-select-single:not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selector {
    background-color: inherit;
    border: 0;
    box-shadow: none;
  }
  .du-bois-light-form-item-has-error
    .du-bois-light-select.du-bois-light-select-auto-complete
    .du-bois-light-input:focus {
    border-color: #c82d4c;
  }
  .du-bois-light-form-item-has-error .du-bois-light-input-number,
  .du-bois-light-form-item-has-error .du-bois-light-picker {
    background-color: #fff;
    border-color: #c82d4c;
  }
  .du-bois-light-form-item-has-error .du-bois-light-input-number-focused,
  .du-bois-light-form-item-has-error .du-bois-light-picker-focused,
  .du-bois-light-form-item-has-error .du-bois-light-input-number:focus,
  .du-bois-light-form-item-has-error .du-bois-light-picker:focus {
    border-color: #d45368;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(200, 45, 76, 0.2);
  }
  .du-bois-light-form-item-has-error
    .du-bois-light-input-number:not([disabled]):hover,
  .du-bois-light-form-item-has-error
    .du-bois-light-picker:not([disabled]):hover {
    background-color: #fff;
    border-color: #c82d4c;
  }
  .du-bois-light-form-item-has-error
    .du-bois-light-mention-wrapper
    .du-bois-light-mention-editor,
  .du-bois-light-form-item-has-error
    .du-bois-light-mention-wrapper
    .du-bois-light-mention-editor:not([disabled]):hover {
    background-color: #fff;
    border-color: #c82d4c;
  }
  .du-bois-light-form-item-has-error
    .du-bois-light-mention-wrapper.du-bois-light-mention-active:not([disabled])
    .du-bois-light-mention-editor,
  .du-bois-light-form-item-has-error
    .du-bois-light-mention-wrapper
    .du-bois-light-mention-editor:not([disabled]):focus {
    border-color: #d45368;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(200, 45, 76, 0.2);
  }
  .du-bois-light-form-item-has-error
    .du-bois-light-cascader-picker:hover
    .du-bois-light-cascader-picker-label:hover
    + .du-bois-light-cascader-input.du-bois-light-input {
    border-color: #c82d4c;
  }
  .du-bois-light-form-item-has-error
    .du-bois-light-cascader-picker:focus
    .du-bois-light-cascader-input {
    background-color: #fff;
    border-color: #d45368;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(200, 45, 76, 0.2);
  }
  .du-bois-light-form-item-has-error .du-bois-light-transfer-list {
    border-color: #c82d4c;
  }
  .du-bois-light-form-item-has-error
    .du-bois-light-transfer-list-search:not([disabled]) {
    border-color: #cddae5;
  }
  .du-bois-light-form-item-has-error
    .du-bois-light-transfer-list-search:not([disabled]):hover {
    border-color: #448dc2;
    border-right-width: 1px !important;
  }
  .du-bois-light-form-item-has-error
    .du-bois-light-transfer-list-search:not([disabled]):focus {
    border-color: #448dc2;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(34, 114, 180, 0.2);
  }
  .du-bois-light-form-item-has-error .du-bois-light-radio-button-wrapper {
    border-color: #c82d4c !important;
  }
  .du-bois-light-form-item-has-error
    .du-bois-light-radio-button-wrapper:not(:first-of-type)::before {
    background-color: #c82d4c;
  }
  .du-bois-light-form-item-is-validating.du-bois-light-form-item-has-feedback
    .du-bois-light-form-item-children-icon {
    display: inline-block;
    color: #2272b4;
  }
  .du-bois-light-form {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
  }
  .du-bois-light-form legend {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    padding: 0;
    color: #5d7283;
    font-size: 18px;
    line-height: inherit;
    border: 0;
    border-bottom: 1px solid #cddae5;
  }
  .du-bois-light-form label {
    font-size: 13px;
  }
  .du-bois-light-form input[type="search"] {
    box-sizing: border-box;
  }
  .du-bois-light-form input[type="radio"],
  .du-bois-light-form input[type="checkbox"] {
    line-height: normal;
  }
  .du-bois-light-form input[type="file"] {
    display: block;
  }
  .du-bois-light-form input[type="range"] {
    display: block;
    width: 100%;
  }
  .du-bois-light-form select[multiple],
  .du-bois-light-form select[size] {
    height: auto;
  }
  .du-bois-light-form input[type="file"]:focus,
  .du-bois-light-form input[type="radio"]:focus,
  .du-bois-light-form input[type="checkbox"]:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
  .du-bois-light-form output {
    display: block;
    padding-top: 15px;
    color: #1f272d;
    font-size: 13px;
    line-height: 20px;
  }
  .du-bois-light-form .du-bois-light-form-text {
    display: inline-block;
    padding-right: 8px;
  }
  .du-bois-light-form-small .du-bois-light-form-item-label > label {
    height: 32px;
  }
  .du-bois-light-form-small .du-bois-light-form-item-control-input {
    min-height: 32px;
  }
  .du-bois-light-form-large .du-bois-light-form-item-label > label {
    height: 40px;
  }
  .du-bois-light-form-large .du-bois-light-form-item-control-input {
    min-height: 40px;
  }
  .du-bois-light-form-item {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    margin-bottom: 24px;
    vertical-align: top;
  }
  .du-bois-light-form-item-with-help {
    margin-bottom: 0;
  }
  .du-bois-light-form-item-hidden,
  .du-bois-light-form-item-hidden.du-bois-light-row {
    display: none;
  }
  .du-bois-light-form-item-label {
    display: inline-block;
    flex-grow: 0;
    overflow: hidden;
    white-space: nowrap;
    text-align: right;
    vertical-align: middle;
  }
  .du-bois-light-form-item-label-left {
    text-align: left;
  }
  .du-bois-light-form-item-label > label {
    position: relative;
    display: inline-flex;
    align-items: center;
    height: 40px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 13px;
  }
  .du-bois-light-form-item-label > label > .anticon {
    font-size: 13px;
    vertical-align: top;
  }
  .du-bois-light-form-item-label
    > label.du-bois-light-form-item-required:not(
      .du-bois-light-form-item-required-mark-optional
    )::before {
    display: inline-block;
    margin-right: 4px;
    color: #ff4d4f;
    font-size: 13px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: "*";
  }
  .du-bois-light-form-hide-required-mark
    .du-bois-light-form-item-label
    > label.du-bois-light-form-item-required:not(
      .du-bois-light-form-item-required-mark-optional
    )::before {
    display: none;
  }
  .du-bois-light-form-item-label > label .du-bois-light-form-item-optional {
    display: inline-block;
    margin-left: 4px;
    color: #5d7283;
  }
  .du-bois-light-form-hide-required-mark
    .du-bois-light-form-item-label
    > label
    .du-bois-light-form-item-optional {
    display: none;
  }
  .du-bois-light-form-item-label > label .du-bois-light-form-item-tooltip {
    color: #5d7283;
    cursor: help;
    writing-mode: horizontal-tb;
    margin-inline-start: 4px;
  }
  .du-bois-light-form-item-label > label::after {
    content: ":";
    position: relative;
    top: -0.5px;
    margin: 0 8px 0 2px;
  }
  .du-bois-light-form-item-label
    > label.du-bois-light-form-item-no-colon::after {
    content: " ";
  }
  .du-bois-light-form-item-control {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .du-bois-light-form-item-control:first-of-type:not(
      [class^="du-bois-light-col-"]
    ):not([class*=" du-bois-light-col-"]) {
    width: 100%;
  }
  .du-bois-light-form-item-control-input {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 40px;
  }
  .du-bois-light-form-item-control-input-content {
    flex: auto;
    max-width: 100%;
  }
  .du-bois-light-form-item-explain,
  .du-bois-light-form-item-extra {
    clear: both;
    min-height: 24px;
    color: #5d7283;
    font-size: 13px;
    line-height: 20px;
    transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    margin-top: -118px;
    margin-bottom: -118px;
  }
  .du-bois-light-form-item .du-bois-light-input-textarea-show-count::after {
    margin-bottom: -22px;
  }
  .du-bois-light-show-help-enter,
  .du-bois-light-show-help-appear {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-show-help-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .du-bois-light-show-help-enter.du-bois-light-show-help-enter-active,
  .du-bois-light-show-help-appear.du-bois-light-show-help-appear-active {
    animation-name: antShowHelpIn;
    animation-play-state: running;
  }
  .du-bois-light-show-help-leave.du-bois-light-show-help-leave-active {
    animation-name: antShowHelpOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .du-bois-light-show-help-enter,
  .du-bois-light-show-help-appear {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .du-bois-light-show-help-leave {
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  @keyframes antShowHelpIn {
    0% {
      transform: translateY(-5px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes antShowHelpOut {
  }
  @keyframes diffZoomIn1 {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes diffZoomIn2 {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes diffZoomIn3 {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  .du-bois-light-form-rtl {
    direction: rtl;
  }
  .du-bois-light-form-rtl .du-bois-light-form-item-label {
    text-align: left;
  }
  .du-bois-light-form-rtl
    .du-bois-light-form-item-label
    > label.du-bois-light-form-item-required::before {
    margin-right: 0;
    margin-left: 4px;
  }
  .du-bois-light-form-rtl .du-bois-light-form-item-label > label::after {
    margin: 0 2px 0 8px;
  }
  .du-bois-light-form-rtl
    .du-bois-light-form-item-label
    > label
    .du-bois-light-form-item-optional {
    margin-right: 4px;
    margin-left: 0;
  }
  .du-bois-light-col-rtl .du-bois-light-form-item-control:first-of-type {
    width: 100%;
  }
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback
    .du-bois-light-input {
    padding-right: 12px;
    padding-left: 24px;
  }
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback
    .du-bois-light-input-affix-wrapper
    .du-bois-light-input-suffix {
    padding-right: 12px;
    padding-left: 18px;
  }
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback
    .du-bois-light-input-affix-wrapper
    .du-bois-light-input {
    padding: 0;
  }
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback
    .du-bois-light-input-search:not(.du-bois-light-input-search-enter-button)
    .du-bois-light-input-suffix {
    right: auto;
    left: 28px;
  }
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback
    .du-bois-light-input-number {
    padding-left: 18px;
  }
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback
    > .du-bois-light-select
    .du-bois-light-select-arrow,
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback
    > .du-bois-light-select
    .du-bois-light-select-clear,
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback
    :not(.du-bois-light-input-group-addon)
    > .du-bois-light-select
    .du-bois-light-select-arrow,
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback
    :not(.du-bois-light-input-group-addon)
    > .du-bois-light-select
    .du-bois-light-select-clear {
    right: auto;
    left: 32px;
  }
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback
    > .du-bois-light-select
    .du-bois-light-select-selection-selected-value,
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback
    :not(.du-bois-light-input-group-addon)
    > .du-bois-light-select
    .du-bois-light-select-selection-selected-value {
    padding-right: 0;
    padding-left: 42px;
  }
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback
    .du-bois-light-cascader-picker-arrow {
    margin-right: 0;
    margin-left: 19px;
  }
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback
    .du-bois-light-cascader-picker-clear {
    right: auto;
    left: 32px;
  }
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback
    .du-bois-light-picker {
    padding-right: 12px;
    padding-left: 28.9px;
  }
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback
    .du-bois-light-picker-large {
    padding-right: 12px;
    padding-left: 28.9px;
  }
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback
    .du-bois-light-picker-small {
    padding-right: 12px;
    padding-left: 28.9px;
  }
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback.du-bois-light-form-item-has-success
    .du-bois-light-form-item-children-icon,
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback.du-bois-light-form-item-has-warning
    .du-bois-light-form-item-children-icon,
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback.du-bois-light-form-item-has-error
    .du-bois-light-form-item-children-icon,
  .du-bois-light-form-rtl
    .du-bois-light-form-item-has-feedback.du-bois-light-form-item-is-validating
    .du-bois-light-form-item-children-icon {
    right: auto;
    left: 0;
  }
  .du-bois-light-form-rtl.du-bois-light-form-inline .du-bois-light-form-item {
    margin-right: 0;
    margin-left: 16px;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-row {
    display: flex;
    flex-flow: row wrap;
  }
  .du-bois-light-row::before,
  .du-bois-light-row::after {
    display: flex;
  }
  .du-bois-light-row-no-wrap {
    flex-wrap: nowrap;
  }
  .du-bois-light-row-start {
    justify-content: flex-start;
  }
  .du-bois-light-row-center {
    justify-content: center;
  }
  .du-bois-light-row-end {
    justify-content: flex-end;
  }
  .du-bois-light-row-space-between {
    justify-content: space-between;
  }
  .du-bois-light-row-space-around {
    justify-content: space-around;
  }
  .du-bois-light-row-top {
    align-items: flex-start;
  }
  .du-bois-light-row-middle {
    align-items: center;
  }
  .du-bois-light-row-bottom {
    align-items: flex-end;
  }
  .du-bois-light-col {
    position: relative;
    max-width: 100%;
    min-height: 1px;
  }
  .du-bois-light-col-24 {
    display: block;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .du-bois-light-col-push-24 {
    left: 100%;
  }
  .du-bois-light-col-pull-24 {
    right: 100%;
  }
  .du-bois-light-col-offset-24 {
    margin-left: 100%;
  }
  .du-bois-light-col-order-24 {
    order: 24;
  }
  .du-bois-light-col-23 {
    display: block;
    flex: 0 0 95.83333333%;
    max-width: 95.83333333%;
  }
  .du-bois-light-col-push-23 {
    left: 95.83333333%;
  }
  .du-bois-light-col-pull-23 {
    right: 95.83333333%;
  }
  .du-bois-light-col-offset-23 {
    margin-left: 95.83333333%;
  }
  .du-bois-light-col-order-23 {
    order: 23;
  }
  .du-bois-light-col-22 {
    display: block;
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%;
  }
  .du-bois-light-col-push-22 {
    left: 91.66666667%;
  }
  .du-bois-light-col-pull-22 {
    right: 91.66666667%;
  }
  .du-bois-light-col-offset-22 {
    margin-left: 91.66666667%;
  }
  .du-bois-light-col-order-22 {
    order: 22;
  }
  .du-bois-light-col-21 {
    display: block;
    flex: 0 0 87.5%;
    max-width: 87.5%;
  }
  .du-bois-light-col-push-21 {
    left: 87.5%;
  }
  .du-bois-light-col-pull-21 {
    right: 87.5%;
  }
  .du-bois-light-col-offset-21 {
    margin-left: 87.5%;
  }
  .du-bois-light-col-order-21 {
    order: 21;
  }
  .du-bois-light-col-20 {
    display: block;
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%;
  }
  .du-bois-light-col-push-20 {
    left: 83.33333333%;
  }
  .du-bois-light-col-pull-20 {
    right: 83.33333333%;
  }
  .du-bois-light-col-offset-20 {
    margin-left: 83.33333333%;
  }
  .du-bois-light-col-order-20 {
    order: 20;
  }
  .du-bois-light-col-19 {
    display: block;
    flex: 0 0 79.16666667%;
    max-width: 79.16666667%;
  }
  .du-bois-light-col-push-19 {
    left: 79.16666667%;
  }
  .du-bois-light-col-pull-19 {
    right: 79.16666667%;
  }
  .du-bois-light-col-offset-19 {
    margin-left: 79.16666667%;
  }
  .du-bois-light-col-order-19 {
    order: 19;
  }
  .du-bois-light-col-18 {
    display: block;
    flex: 0 0 75%;
    max-width: 75%;
  }
  .du-bois-light-col-push-18 {
    left: 75%;
  }
  .du-bois-light-col-pull-18 {
    right: 75%;
  }
  .du-bois-light-col-offset-18 {
    margin-left: 75%;
  }
  .du-bois-light-col-order-18 {
    order: 18;
  }
  .du-bois-light-col-17 {
    display: block;
    flex: 0 0 70.83333333%;
    max-width: 70.83333333%;
  }
  .du-bois-light-col-push-17 {
    left: 70.83333333%;
  }
  .du-bois-light-col-pull-17 {
    right: 70.83333333%;
  }
  .du-bois-light-col-offset-17 {
    margin-left: 70.83333333%;
  }
  .du-bois-light-col-order-17 {
    order: 17;
  }
  .du-bois-light-col-16 {
    display: block;
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%;
  }
  .du-bois-light-col-push-16 {
    left: 66.66666667%;
  }
  .du-bois-light-col-pull-16 {
    right: 66.66666667%;
  }
  .du-bois-light-col-offset-16 {
    margin-left: 66.66666667%;
  }
  .du-bois-light-col-order-16 {
    order: 16;
  }
  .du-bois-light-col-15 {
    display: block;
    flex: 0 0 62.5%;
    max-width: 62.5%;
  }
  .du-bois-light-col-push-15 {
    left: 62.5%;
  }
  .du-bois-light-col-pull-15 {
    right: 62.5%;
  }
  .du-bois-light-col-offset-15 {
    margin-left: 62.5%;
  }
  .du-bois-light-col-order-15 {
    order: 15;
  }
  .du-bois-light-col-14 {
    display: block;
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%;
  }
  .du-bois-light-col-push-14 {
    left: 58.33333333%;
  }
  .du-bois-light-col-pull-14 {
    right: 58.33333333%;
  }
  .du-bois-light-col-offset-14 {
    margin-left: 58.33333333%;
  }
  .du-bois-light-col-order-14 {
    order: 14;
  }
  .du-bois-light-col-13 {
    display: block;
    flex: 0 0 54.16666667%;
    max-width: 54.16666667%;
  }
  .du-bois-light-col-push-13 {
    left: 54.16666667%;
  }
  .du-bois-light-col-pull-13 {
    right: 54.16666667%;
  }
  .du-bois-light-col-offset-13 {
    margin-left: 54.16666667%;
  }
  .du-bois-light-col-order-13 {
    order: 13;
  }
  .du-bois-light-col-12 {
    display: block;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .du-bois-light-col-push-12 {
    left: 50%;
  }
  .du-bois-light-col-pull-12 {
    right: 50%;
  }
  .du-bois-light-col-offset-12 {
    margin-left: 50%;
  }
  .du-bois-light-col-order-12 {
    order: 12;
  }
  .du-bois-light-col-11 {
    display: block;
    flex: 0 0 45.83333333%;
    max-width: 45.83333333%;
  }
  .du-bois-light-col-push-11 {
    left: 45.83333333%;
  }
  .du-bois-light-col-pull-11 {
    right: 45.83333333%;
  }
  .du-bois-light-col-offset-11 {
    margin-left: 45.83333333%;
  }
  .du-bois-light-col-order-11 {
    order: 11;
  }
  .du-bois-light-col-10 {
    display: block;
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%;
  }
  .du-bois-light-col-push-10 {
    left: 41.66666667%;
  }
  .du-bois-light-col-pull-10 {
    right: 41.66666667%;
  }
  .du-bois-light-col-offset-10 {
    margin-left: 41.66666667%;
  }
  .du-bois-light-col-order-10 {
    order: 10;
  }
  .du-bois-light-col-9 {
    display: block;
    flex: 0 0 37.5%;
    max-width: 37.5%;
  }
  .du-bois-light-col-push-9 {
    left: 37.5%;
  }
  .du-bois-light-col-pull-9 {
    right: 37.5%;
  }
  .du-bois-light-col-offset-9 {
    margin-left: 37.5%;
  }
  .du-bois-light-col-order-9 {
    order: 9;
  }
  .du-bois-light-col-8 {
    display: block;
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
  }
  .du-bois-light-col-push-8 {
    left: 33.33333333%;
  }
  .du-bois-light-col-pull-8 {
    right: 33.33333333%;
  }
  .du-bois-light-col-offset-8 {
    margin-left: 33.33333333%;
  }
  .du-bois-light-col-order-8 {
    order: 8;
  }
  .du-bois-light-col-7 {
    display: block;
    flex: 0 0 29.16666667%;
    max-width: 29.16666667%;
  }
  .du-bois-light-col-push-7 {
    left: 29.16666667%;
  }
  .du-bois-light-col-pull-7 {
    right: 29.16666667%;
  }
  .du-bois-light-col-offset-7 {
    margin-left: 29.16666667%;
  }
  .du-bois-light-col-order-7 {
    order: 7;
  }
  .du-bois-light-col-6 {
    display: block;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .du-bois-light-col-push-6 {
    left: 25%;
  }
  .du-bois-light-col-pull-6 {
    right: 25%;
  }
  .du-bois-light-col-offset-6 {
    margin-left: 25%;
  }
  .du-bois-light-col-order-6 {
    order: 6;
  }
  .du-bois-light-col-5 {
    display: block;
    flex: 0 0 20.83333333%;
    max-width: 20.83333333%;
  }
  .du-bois-light-col-push-5 {
    left: 20.83333333%;
  }
  .du-bois-light-col-pull-5 {
    right: 20.83333333%;
  }
  .du-bois-light-col-offset-5 {
    margin-left: 20.83333333%;
  }
  .du-bois-light-col-order-5 {
    order: 5;
  }
  .du-bois-light-col-4 {
    display: block;
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%;
  }
  .du-bois-light-col-push-4 {
    left: 16.66666667%;
  }
  .du-bois-light-col-pull-4 {
    right: 16.66666667%;
  }
  .du-bois-light-col-offset-4 {
    margin-left: 16.66666667%;
  }
  .du-bois-light-col-order-4 {
    order: 4;
  }
  .du-bois-light-col-3 {
    display: block;
    flex: 0 0 12.5%;
    max-width: 12.5%;
  }
  .du-bois-light-col-push-3 {
    left: 12.5%;
  }
  .du-bois-light-col-pull-3 {
    right: 12.5%;
  }
  .du-bois-light-col-offset-3 {
    margin-left: 12.5%;
  }
  .du-bois-light-col-order-3 {
    order: 3;
  }
  .du-bois-light-col-2 {
    display: block;
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%;
  }
  .du-bois-light-col-push-2 {
    left: 8.33333333%;
  }
  .du-bois-light-col-pull-2 {
    right: 8.33333333%;
  }
  .du-bois-light-col-offset-2 {
    margin-left: 8.33333333%;
  }
  .du-bois-light-col-order-2 {
    order: 2;
  }
  .du-bois-light-col-1 {
    display: block;
    flex: 0 0 4.16666667%;
    max-width: 4.16666667%;
  }
  .du-bois-light-col-push-1 {
    left: 4.16666667%;
  }
  .du-bois-light-col-pull-1 {
    right: 4.16666667%;
  }
  .du-bois-light-col-offset-1 {
    margin-left: 4.16666667%;
  }
  .du-bois-light-col-order-1 {
    order: 1;
  }
  .du-bois-light-col-0 {
    display: none;
  }
  .du-bois-light-col-push-0 {
    left: auto;
  }
  .du-bois-light-col-pull-0 {
    right: auto;
  }
  .du-bois-light-col-push-0 {
    left: auto;
  }
  .du-bois-light-col-pull-0 {
    right: auto;
  }
  .du-bois-light-col-offset-0 {
    margin-left: 0;
  }
  .du-bois-light-col-order-0 {
    order: 0;
  }
  .du-bois-light-col-push-0.du-bois-light-col-rtl {
    right: auto;
  }
  .du-bois-light-col-pull-0.du-bois-light-col-rtl {
    left: auto;
  }
  .du-bois-light-col-push-0.du-bois-light-col-rtl {
    right: auto;
  }
  .du-bois-light-col-pull-0.du-bois-light-col-rtl {
    left: auto;
  }
  .du-bois-light-col-offset-0.du-bois-light-col-rtl {
    margin-right: 0;
  }
  .du-bois-light-col-push-1.du-bois-light-col-rtl {
    right: 4.16666667%;
    left: auto;
  }
  .du-bois-light-col-pull-1.du-bois-light-col-rtl {
    right: auto;
    left: 4.16666667%;
  }
  .du-bois-light-col-offset-1.du-bois-light-col-rtl {
    margin-right: 4.16666667%;
    margin-left: 0;
  }
  .du-bois-light-col-push-2.du-bois-light-col-rtl {
    right: 8.33333333%;
    left: auto;
  }
  .du-bois-light-col-pull-2.du-bois-light-col-rtl {
    right: auto;
    left: 8.33333333%;
  }
  .du-bois-light-col-offset-2.du-bois-light-col-rtl {
    margin-right: 8.33333333%;
    margin-left: 0;
  }
  .du-bois-light-col-push-3.du-bois-light-col-rtl {
    right: 12.5%;
    left: auto;
  }
  .du-bois-light-col-pull-3.du-bois-light-col-rtl {
    right: auto;
    left: 12.5%;
  }
  .du-bois-light-col-offset-3.du-bois-light-col-rtl {
    margin-right: 12.5%;
    margin-left: 0;
  }
  .du-bois-light-col-push-4.du-bois-light-col-rtl {
    right: 16.66666667%;
    left: auto;
  }
  .du-bois-light-col-pull-4.du-bois-light-col-rtl {
    right: auto;
    left: 16.66666667%;
  }
  .du-bois-light-col-offset-4.du-bois-light-col-rtl {
    margin-right: 16.66666667%;
    margin-left: 0;
  }
  .du-bois-light-col-push-5.du-bois-light-col-rtl {
    right: 20.83333333%;
    left: auto;
  }
  .du-bois-light-col-pull-5.du-bois-light-col-rtl {
    right: auto;
    left: 20.83333333%;
  }
  .du-bois-light-col-offset-5.du-bois-light-col-rtl {
    margin-right: 20.83333333%;
    margin-left: 0;
  }
  .du-bois-light-col-push-6.du-bois-light-col-rtl {
    right: 25%;
    left: auto;
  }
  .du-bois-light-col-pull-6.du-bois-light-col-rtl {
    right: auto;
    left: 25%;
  }
  .du-bois-light-col-offset-6.du-bois-light-col-rtl {
    margin-right: 25%;
    margin-left: 0;
  }
  .du-bois-light-col-push-7.du-bois-light-col-rtl {
    right: 29.16666667%;
    left: auto;
  }
  .du-bois-light-col-pull-7.du-bois-light-col-rtl {
    right: auto;
    left: 29.16666667%;
  }
  .du-bois-light-col-offset-7.du-bois-light-col-rtl {
    margin-right: 29.16666667%;
    margin-left: 0;
  }
  .du-bois-light-col-push-8.du-bois-light-col-rtl {
    right: 33.33333333%;
    left: auto;
  }
  .du-bois-light-col-pull-8.du-bois-light-col-rtl {
    right: auto;
    left: 33.33333333%;
  }
  .du-bois-light-col-offset-8.du-bois-light-col-rtl {
    margin-right: 33.33333333%;
    margin-left: 0;
  }
  .du-bois-light-col-push-9.du-bois-light-col-rtl {
    right: 37.5%;
    left: auto;
  }
  .du-bois-light-col-pull-9.du-bois-light-col-rtl {
    right: auto;
    left: 37.5%;
  }
  .du-bois-light-col-offset-9.du-bois-light-col-rtl {
    margin-right: 37.5%;
    margin-left: 0;
  }
  .du-bois-light-col-push-10.du-bois-light-col-rtl {
    right: 41.66666667%;
    left: auto;
  }
  .du-bois-light-col-pull-10.du-bois-light-col-rtl {
    right: auto;
    left: 41.66666667%;
  }
  .du-bois-light-col-offset-10.du-bois-light-col-rtl {
    margin-right: 41.66666667%;
    margin-left: 0;
  }
  .du-bois-light-col-push-11.du-bois-light-col-rtl {
    right: 45.83333333%;
    left: auto;
  }
  .du-bois-light-col-pull-11.du-bois-light-col-rtl {
    right: auto;
    left: 45.83333333%;
  }
  .du-bois-light-col-offset-11.du-bois-light-col-rtl {
    margin-right: 45.83333333%;
    margin-left: 0;
  }
  .du-bois-light-col-push-12.du-bois-light-col-rtl {
    right: 50%;
    left: auto;
  }
  .du-bois-light-col-pull-12.du-bois-light-col-rtl {
    right: auto;
    left: 50%;
  }
  .du-bois-light-col-offset-12.du-bois-light-col-rtl {
    margin-right: 50%;
    margin-left: 0;
  }
  .du-bois-light-col-push-13.du-bois-light-col-rtl {
    right: 54.16666667%;
    left: auto;
  }
  .du-bois-light-col-pull-13.du-bois-light-col-rtl {
    right: auto;
    left: 54.16666667%;
  }
  .du-bois-light-col-offset-13.du-bois-light-col-rtl {
    margin-right: 54.16666667%;
    margin-left: 0;
  }
  .du-bois-light-col-push-14.du-bois-light-col-rtl {
    right: 58.33333333%;
    left: auto;
  }
  .du-bois-light-col-pull-14.du-bois-light-col-rtl {
    right: auto;
    left: 58.33333333%;
  }
  .du-bois-light-col-offset-14.du-bois-light-col-rtl {
    margin-right: 58.33333333%;
    margin-left: 0;
  }
  .du-bois-light-col-push-15.du-bois-light-col-rtl {
    right: 62.5%;
    left: auto;
  }
  .du-bois-light-col-pull-15.du-bois-light-col-rtl {
    right: auto;
    left: 62.5%;
  }
  .du-bois-light-col-offset-15.du-bois-light-col-rtl {
    margin-right: 62.5%;
    margin-left: 0;
  }
  .du-bois-light-col-push-16.du-bois-light-col-rtl {
    right: 66.66666667%;
    left: auto;
  }
  .du-bois-light-col-pull-16.du-bois-light-col-rtl {
    right: auto;
    left: 66.66666667%;
  }
  .du-bois-light-col-offset-16.du-bois-light-col-rtl {
    margin-right: 66.66666667%;
    margin-left: 0;
  }
  .du-bois-light-col-push-17.du-bois-light-col-rtl {
    right: 70.83333333%;
    left: auto;
  }
  .du-bois-light-col-pull-17.du-bois-light-col-rtl {
    right: auto;
    left: 70.83333333%;
  }
  .du-bois-light-col-offset-17.du-bois-light-col-rtl {
    margin-right: 70.83333333%;
    margin-left: 0;
  }
  .du-bois-light-col-push-18.du-bois-light-col-rtl {
    right: 75%;
    left: auto;
  }
  .du-bois-light-col-pull-18.du-bois-light-col-rtl {
    right: auto;
    left: 75%;
  }
  .du-bois-light-col-offset-18.du-bois-light-col-rtl {
    margin-right: 75%;
    margin-left: 0;
  }
  .du-bois-light-col-push-19.du-bois-light-col-rtl {
    right: 79.16666667%;
    left: auto;
  }
  .du-bois-light-col-pull-19.du-bois-light-col-rtl {
    right: auto;
    left: 79.16666667%;
  }
  .du-bois-light-col-offset-19.du-bois-light-col-rtl {
    margin-right: 79.16666667%;
    margin-left: 0;
  }
  .du-bois-light-col-push-20.du-bois-light-col-rtl {
    right: 83.33333333%;
    left: auto;
  }
  .du-bois-light-col-pull-20.du-bois-light-col-rtl {
    right: auto;
    left: 83.33333333%;
  }
  .du-bois-light-col-offset-20.du-bois-light-col-rtl {
    margin-right: 83.33333333%;
    margin-left: 0;
  }
  .du-bois-light-col-push-21.du-bois-light-col-rtl {
    right: 87.5%;
    left: auto;
  }
  .du-bois-light-col-pull-21.du-bois-light-col-rtl {
    right: auto;
    left: 87.5%;
  }
  .du-bois-light-col-offset-21.du-bois-light-col-rtl {
    margin-right: 87.5%;
    margin-left: 0;
  }
  .du-bois-light-col-push-22.du-bois-light-col-rtl {
    right: 91.66666667%;
    left: auto;
  }
  .du-bois-light-col-pull-22.du-bois-light-col-rtl {
    right: auto;
    left: 91.66666667%;
  }
  .du-bois-light-col-offset-22.du-bois-light-col-rtl {
    margin-right: 91.66666667%;
    margin-left: 0;
  }
  .du-bois-light-col-push-23.du-bois-light-col-rtl {
    right: 95.83333333%;
    left: auto;
  }
  .du-bois-light-col-pull-23.du-bois-light-col-rtl {
    right: auto;
    left: 95.83333333%;
  }
  .du-bois-light-col-offset-23.du-bois-light-col-rtl {
    margin-right: 95.83333333%;
    margin-left: 0;
  }
  .du-bois-light-col-push-24.du-bois-light-col-rtl {
    right: 100%;
    left: auto;
  }
  .du-bois-light-col-pull-24.du-bois-light-col-rtl {
    right: auto;
    left: 100%;
  }
  .du-bois-light-col-offset-24.du-bois-light-col-rtl {
    margin-right: 100%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-24 {
    display: block;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .du-bois-light-col-xs-push-24 {
    left: 100%;
  }
  .du-bois-light-col-xs-pull-24 {
    right: 100%;
  }
  .du-bois-light-col-xs-offset-24 {
    margin-left: 100%;
  }
  .du-bois-light-col-xs-order-24 {
    order: 24;
  }
  .du-bois-light-col-xs-23 {
    display: block;
    flex: 0 0 95.83333333%;
    max-width: 95.83333333%;
  }
  .du-bois-light-col-xs-push-23 {
    left: 95.83333333%;
  }
  .du-bois-light-col-xs-pull-23 {
    right: 95.83333333%;
  }
  .du-bois-light-col-xs-offset-23 {
    margin-left: 95.83333333%;
  }
  .du-bois-light-col-xs-order-23 {
    order: 23;
  }
  .du-bois-light-col-xs-22 {
    display: block;
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%;
  }
  .du-bois-light-col-xs-push-22 {
    left: 91.66666667%;
  }
  .du-bois-light-col-xs-pull-22 {
    right: 91.66666667%;
  }
  .du-bois-light-col-xs-offset-22 {
    margin-left: 91.66666667%;
  }
  .du-bois-light-col-xs-order-22 {
    order: 22;
  }
  .du-bois-light-col-xs-21 {
    display: block;
    flex: 0 0 87.5%;
    max-width: 87.5%;
  }
  .du-bois-light-col-xs-push-21 {
    left: 87.5%;
  }
  .du-bois-light-col-xs-pull-21 {
    right: 87.5%;
  }
  .du-bois-light-col-xs-offset-21 {
    margin-left: 87.5%;
  }
  .du-bois-light-col-xs-order-21 {
    order: 21;
  }
  .du-bois-light-col-xs-20 {
    display: block;
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%;
  }
  .du-bois-light-col-xs-push-20 {
    left: 83.33333333%;
  }
  .du-bois-light-col-xs-pull-20 {
    right: 83.33333333%;
  }
  .du-bois-light-col-xs-offset-20 {
    margin-left: 83.33333333%;
  }
  .du-bois-light-col-xs-order-20 {
    order: 20;
  }
  .du-bois-light-col-xs-19 {
    display: block;
    flex: 0 0 79.16666667%;
    max-width: 79.16666667%;
  }
  .du-bois-light-col-xs-push-19 {
    left: 79.16666667%;
  }
  .du-bois-light-col-xs-pull-19 {
    right: 79.16666667%;
  }
  .du-bois-light-col-xs-offset-19 {
    margin-left: 79.16666667%;
  }
  .du-bois-light-col-xs-order-19 {
    order: 19;
  }
  .du-bois-light-col-xs-18 {
    display: block;
    flex: 0 0 75%;
    max-width: 75%;
  }
  .du-bois-light-col-xs-push-18 {
    left: 75%;
  }
  .du-bois-light-col-xs-pull-18 {
    right: 75%;
  }
  .du-bois-light-col-xs-offset-18 {
    margin-left: 75%;
  }
  .du-bois-light-col-xs-order-18 {
    order: 18;
  }
  .du-bois-light-col-xs-17 {
    display: block;
    flex: 0 0 70.83333333%;
    max-width: 70.83333333%;
  }
  .du-bois-light-col-xs-push-17 {
    left: 70.83333333%;
  }
  .du-bois-light-col-xs-pull-17 {
    right: 70.83333333%;
  }
  .du-bois-light-col-xs-offset-17 {
    margin-left: 70.83333333%;
  }
  .du-bois-light-col-xs-order-17 {
    order: 17;
  }
  .du-bois-light-col-xs-16 {
    display: block;
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%;
  }
  .du-bois-light-col-xs-push-16 {
    left: 66.66666667%;
  }
  .du-bois-light-col-xs-pull-16 {
    right: 66.66666667%;
  }
  .du-bois-light-col-xs-offset-16 {
    margin-left: 66.66666667%;
  }
  .du-bois-light-col-xs-order-16 {
    order: 16;
  }
  .du-bois-light-col-xs-15 {
    display: block;
    flex: 0 0 62.5%;
    max-width: 62.5%;
  }
  .du-bois-light-col-xs-push-15 {
    left: 62.5%;
  }
  .du-bois-light-col-xs-pull-15 {
    right: 62.5%;
  }
  .du-bois-light-col-xs-offset-15 {
    margin-left: 62.5%;
  }
  .du-bois-light-col-xs-order-15 {
    order: 15;
  }
  .du-bois-light-col-xs-14 {
    display: block;
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%;
  }
  .du-bois-light-col-xs-push-14 {
    left: 58.33333333%;
  }
  .du-bois-light-col-xs-pull-14 {
    right: 58.33333333%;
  }
  .du-bois-light-col-xs-offset-14 {
    margin-left: 58.33333333%;
  }
  .du-bois-light-col-xs-order-14 {
    order: 14;
  }
  .du-bois-light-col-xs-13 {
    display: block;
    flex: 0 0 54.16666667%;
    max-width: 54.16666667%;
  }
  .du-bois-light-col-xs-push-13 {
    left: 54.16666667%;
  }
  .du-bois-light-col-xs-pull-13 {
    right: 54.16666667%;
  }
  .du-bois-light-col-xs-offset-13 {
    margin-left: 54.16666667%;
  }
  .du-bois-light-col-xs-order-13 {
    order: 13;
  }
  .du-bois-light-col-xs-12 {
    display: block;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .du-bois-light-col-xs-push-12 {
    left: 50%;
  }
  .du-bois-light-col-xs-pull-12 {
    right: 50%;
  }
  .du-bois-light-col-xs-offset-12 {
    margin-left: 50%;
  }
  .du-bois-light-col-xs-order-12 {
    order: 12;
  }
  .du-bois-light-col-xs-11 {
    display: block;
    flex: 0 0 45.83333333%;
    max-width: 45.83333333%;
  }
  .du-bois-light-col-xs-push-11 {
    left: 45.83333333%;
  }
  .du-bois-light-col-xs-pull-11 {
    right: 45.83333333%;
  }
  .du-bois-light-col-xs-offset-11 {
    margin-left: 45.83333333%;
  }
  .du-bois-light-col-xs-order-11 {
    order: 11;
  }
  .du-bois-light-col-xs-10 {
    display: block;
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%;
  }
  .du-bois-light-col-xs-push-10 {
    left: 41.66666667%;
  }
  .du-bois-light-col-xs-pull-10 {
    right: 41.66666667%;
  }
  .du-bois-light-col-xs-offset-10 {
    margin-left: 41.66666667%;
  }
  .du-bois-light-col-xs-order-10 {
    order: 10;
  }
  .du-bois-light-col-xs-9 {
    display: block;
    flex: 0 0 37.5%;
    max-width: 37.5%;
  }
  .du-bois-light-col-xs-push-9 {
    left: 37.5%;
  }
  .du-bois-light-col-xs-pull-9 {
    right: 37.5%;
  }
  .du-bois-light-col-xs-offset-9 {
    margin-left: 37.5%;
  }
  .du-bois-light-col-xs-order-9 {
    order: 9;
  }
  .du-bois-light-col-xs-8 {
    display: block;
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
  }
  .du-bois-light-col-xs-push-8 {
    left: 33.33333333%;
  }
  .du-bois-light-col-xs-pull-8 {
    right: 33.33333333%;
  }
  .du-bois-light-col-xs-offset-8 {
    margin-left: 33.33333333%;
  }
  .du-bois-light-col-xs-order-8 {
    order: 8;
  }
  .du-bois-light-col-xs-7 {
    display: block;
    flex: 0 0 29.16666667%;
    max-width: 29.16666667%;
  }
  .du-bois-light-col-xs-push-7 {
    left: 29.16666667%;
  }
  .du-bois-light-col-xs-pull-7 {
    right: 29.16666667%;
  }
  .du-bois-light-col-xs-offset-7 {
    margin-left: 29.16666667%;
  }
  .du-bois-light-col-xs-order-7 {
    order: 7;
  }
  .du-bois-light-col-xs-6 {
    display: block;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .du-bois-light-col-xs-push-6 {
    left: 25%;
  }
  .du-bois-light-col-xs-pull-6 {
    right: 25%;
  }
  .du-bois-light-col-xs-offset-6 {
    margin-left: 25%;
  }
  .du-bois-light-col-xs-order-6 {
    order: 6;
  }
  .du-bois-light-col-xs-5 {
    display: block;
    flex: 0 0 20.83333333%;
    max-width: 20.83333333%;
  }
  .du-bois-light-col-xs-push-5 {
    left: 20.83333333%;
  }
  .du-bois-light-col-xs-pull-5 {
    right: 20.83333333%;
  }
  .du-bois-light-col-xs-offset-5 {
    margin-left: 20.83333333%;
  }
  .du-bois-light-col-xs-order-5 {
    order: 5;
  }
  .du-bois-light-col-xs-4 {
    display: block;
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%;
  }
  .du-bois-light-col-xs-push-4 {
    left: 16.66666667%;
  }
  .du-bois-light-col-xs-pull-4 {
    right: 16.66666667%;
  }
  .du-bois-light-col-xs-offset-4 {
    margin-left: 16.66666667%;
  }
  .du-bois-light-col-xs-order-4 {
    order: 4;
  }
  .du-bois-light-col-xs-3 {
    display: block;
    flex: 0 0 12.5%;
    max-width: 12.5%;
  }
  .du-bois-light-col-xs-push-3 {
    left: 12.5%;
  }
  .du-bois-light-col-xs-pull-3 {
    right: 12.5%;
  }
  .du-bois-light-col-xs-offset-3 {
    margin-left: 12.5%;
  }
  .du-bois-light-col-xs-order-3 {
    order: 3;
  }
  .du-bois-light-col-xs-2 {
    display: block;
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%;
  }
  .du-bois-light-col-xs-push-2 {
    left: 8.33333333%;
  }
  .du-bois-light-col-xs-pull-2 {
    right: 8.33333333%;
  }
  .du-bois-light-col-xs-offset-2 {
    margin-left: 8.33333333%;
  }
  .du-bois-light-col-xs-order-2 {
    order: 2;
  }
  .du-bois-light-col-xs-1 {
    display: block;
    flex: 0 0 4.16666667%;
    max-width: 4.16666667%;
  }
  .du-bois-light-col-xs-push-1 {
    left: 4.16666667%;
  }
  .du-bois-light-col-xs-pull-1 {
    right: 4.16666667%;
  }
  .du-bois-light-col-xs-offset-1 {
    margin-left: 4.16666667%;
  }
  .du-bois-light-col-xs-order-1 {
    order: 1;
  }
  .du-bois-light-col-xs-0 {
    display: none;
  }
  .du-bois-light-col-push-0 {
    left: auto;
  }
  .du-bois-light-col-pull-0 {
    right: auto;
  }
  .du-bois-light-col-xs-push-0 {
    left: auto;
  }
  .du-bois-light-col-xs-pull-0 {
    right: auto;
  }
  .du-bois-light-col-xs-offset-0 {
    margin-left: 0;
  }
  .du-bois-light-col-xs-order-0 {
    order: 0;
  }
  .du-bois-light-col-push-0.du-bois-light-col-rtl {
    right: auto;
  }
  .du-bois-light-col-pull-0.du-bois-light-col-rtl {
    left: auto;
  }
  .du-bois-light-col-xs-push-0.du-bois-light-col-rtl {
    right: auto;
  }
  .du-bois-light-col-xs-pull-0.du-bois-light-col-rtl {
    left: auto;
  }
  .du-bois-light-col-xs-offset-0.du-bois-light-col-rtl {
    margin-right: 0;
  }
  .du-bois-light-col-xs-push-1.du-bois-light-col-rtl {
    right: 4.16666667%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-1.du-bois-light-col-rtl {
    right: auto;
    left: 4.16666667%;
  }
  .du-bois-light-col-xs-offset-1.du-bois-light-col-rtl {
    margin-right: 4.16666667%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-2.du-bois-light-col-rtl {
    right: 8.33333333%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-2.du-bois-light-col-rtl {
    right: auto;
    left: 8.33333333%;
  }
  .du-bois-light-col-xs-offset-2.du-bois-light-col-rtl {
    margin-right: 8.33333333%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-3.du-bois-light-col-rtl {
    right: 12.5%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-3.du-bois-light-col-rtl {
    right: auto;
    left: 12.5%;
  }
  .du-bois-light-col-xs-offset-3.du-bois-light-col-rtl {
    margin-right: 12.5%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-4.du-bois-light-col-rtl {
    right: 16.66666667%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-4.du-bois-light-col-rtl {
    right: auto;
    left: 16.66666667%;
  }
  .du-bois-light-col-xs-offset-4.du-bois-light-col-rtl {
    margin-right: 16.66666667%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-5.du-bois-light-col-rtl {
    right: 20.83333333%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-5.du-bois-light-col-rtl {
    right: auto;
    left: 20.83333333%;
  }
  .du-bois-light-col-xs-offset-5.du-bois-light-col-rtl {
    margin-right: 20.83333333%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-6.du-bois-light-col-rtl {
    right: 25%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-6.du-bois-light-col-rtl {
    right: auto;
    left: 25%;
  }
  .du-bois-light-col-xs-offset-6.du-bois-light-col-rtl {
    margin-right: 25%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-7.du-bois-light-col-rtl {
    right: 29.16666667%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-7.du-bois-light-col-rtl {
    right: auto;
    left: 29.16666667%;
  }
  .du-bois-light-col-xs-offset-7.du-bois-light-col-rtl {
    margin-right: 29.16666667%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-8.du-bois-light-col-rtl {
    right: 33.33333333%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-8.du-bois-light-col-rtl {
    right: auto;
    left: 33.33333333%;
  }
  .du-bois-light-col-xs-offset-8.du-bois-light-col-rtl {
    margin-right: 33.33333333%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-9.du-bois-light-col-rtl {
    right: 37.5%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-9.du-bois-light-col-rtl {
    right: auto;
    left: 37.5%;
  }
  .du-bois-light-col-xs-offset-9.du-bois-light-col-rtl {
    margin-right: 37.5%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-10.du-bois-light-col-rtl {
    right: 41.66666667%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-10.du-bois-light-col-rtl {
    right: auto;
    left: 41.66666667%;
  }
  .du-bois-light-col-xs-offset-10.du-bois-light-col-rtl {
    margin-right: 41.66666667%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-11.du-bois-light-col-rtl {
    right: 45.83333333%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-11.du-bois-light-col-rtl {
    right: auto;
    left: 45.83333333%;
  }
  .du-bois-light-col-xs-offset-11.du-bois-light-col-rtl {
    margin-right: 45.83333333%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-12.du-bois-light-col-rtl {
    right: 50%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-12.du-bois-light-col-rtl {
    right: auto;
    left: 50%;
  }
  .du-bois-light-col-xs-offset-12.du-bois-light-col-rtl {
    margin-right: 50%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-13.du-bois-light-col-rtl {
    right: 54.16666667%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-13.du-bois-light-col-rtl {
    right: auto;
    left: 54.16666667%;
  }
  .du-bois-light-col-xs-offset-13.du-bois-light-col-rtl {
    margin-right: 54.16666667%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-14.du-bois-light-col-rtl {
    right: 58.33333333%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-14.du-bois-light-col-rtl {
    right: auto;
    left: 58.33333333%;
  }
  .du-bois-light-col-xs-offset-14.du-bois-light-col-rtl {
    margin-right: 58.33333333%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-15.du-bois-light-col-rtl {
    right: 62.5%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-15.du-bois-light-col-rtl {
    right: auto;
    left: 62.5%;
  }
  .du-bois-light-col-xs-offset-15.du-bois-light-col-rtl {
    margin-right: 62.5%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-16.du-bois-light-col-rtl {
    right: 66.66666667%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-16.du-bois-light-col-rtl {
    right: auto;
    left: 66.66666667%;
  }
  .du-bois-light-col-xs-offset-16.du-bois-light-col-rtl {
    margin-right: 66.66666667%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-17.du-bois-light-col-rtl {
    right: 70.83333333%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-17.du-bois-light-col-rtl {
    right: auto;
    left: 70.83333333%;
  }
  .du-bois-light-col-xs-offset-17.du-bois-light-col-rtl {
    margin-right: 70.83333333%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-18.du-bois-light-col-rtl {
    right: 75%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-18.du-bois-light-col-rtl {
    right: auto;
    left: 75%;
  }
  .du-bois-light-col-xs-offset-18.du-bois-light-col-rtl {
    margin-right: 75%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-19.du-bois-light-col-rtl {
    right: 79.16666667%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-19.du-bois-light-col-rtl {
    right: auto;
    left: 79.16666667%;
  }
  .du-bois-light-col-xs-offset-19.du-bois-light-col-rtl {
    margin-right: 79.16666667%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-20.du-bois-light-col-rtl {
    right: 83.33333333%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-20.du-bois-light-col-rtl {
    right: auto;
    left: 83.33333333%;
  }
  .du-bois-light-col-xs-offset-20.du-bois-light-col-rtl {
    margin-right: 83.33333333%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-21.du-bois-light-col-rtl {
    right: 87.5%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-21.du-bois-light-col-rtl {
    right: auto;
    left: 87.5%;
  }
  .du-bois-light-col-xs-offset-21.du-bois-light-col-rtl {
    margin-right: 87.5%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-22.du-bois-light-col-rtl {
    right: 91.66666667%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-22.du-bois-light-col-rtl {
    right: auto;
    left: 91.66666667%;
  }
  .du-bois-light-col-xs-offset-22.du-bois-light-col-rtl {
    margin-right: 91.66666667%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-23.du-bois-light-col-rtl {
    right: 95.83333333%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-23.du-bois-light-col-rtl {
    right: auto;
    left: 95.83333333%;
  }
  .du-bois-light-col-xs-offset-23.du-bois-light-col-rtl {
    margin-right: 95.83333333%;
    margin-left: 0;
  }
  .du-bois-light-col-xs-push-24.du-bois-light-col-rtl {
    right: 100%;
    left: auto;
  }
  .du-bois-light-col-xs-pull-24.du-bois-light-col-rtl {
    right: auto;
    left: 100%;
  }
  .du-bois-light-col-xs-offset-24.du-bois-light-col-rtl {
    margin-right: 100%;
    margin-left: 0;
  }
  @media (min-width: 576px) {
    .du-bois-light-col-sm-24 {
      display: block;
      flex: 0 0 100%;
      max-width: 100%;
    }
    .du-bois-light-col-sm-push-24 {
      left: 100%;
    }
    .du-bois-light-col-sm-pull-24 {
      right: 100%;
    }
    .du-bois-light-col-sm-offset-24 {
      margin-left: 100%;
    }
    .du-bois-light-col-sm-order-24 {
      order: 24;
    }
    .du-bois-light-col-sm-23 {
      display: block;
      flex: 0 0 95.83333333%;
      max-width: 95.83333333%;
    }
    .du-bois-light-col-sm-push-23 {
      left: 95.83333333%;
    }
    .du-bois-light-col-sm-pull-23 {
      right: 95.83333333%;
    }
    .du-bois-light-col-sm-offset-23 {
      margin-left: 95.83333333%;
    }
    .du-bois-light-col-sm-order-23 {
      order: 23;
    }
    .du-bois-light-col-sm-22 {
      display: block;
      flex: 0 0 91.66666667%;
      max-width: 91.66666667%;
    }
    .du-bois-light-col-sm-push-22 {
      left: 91.66666667%;
    }
    .du-bois-light-col-sm-pull-22 {
      right: 91.66666667%;
    }
    .du-bois-light-col-sm-offset-22 {
      margin-left: 91.66666667%;
    }
    .du-bois-light-col-sm-order-22 {
      order: 22;
    }
    .du-bois-light-col-sm-21 {
      display: block;
      flex: 0 0 87.5%;
      max-width: 87.5%;
    }
    .du-bois-light-col-sm-push-21 {
      left: 87.5%;
    }
    .du-bois-light-col-sm-pull-21 {
      right: 87.5%;
    }
    .du-bois-light-col-sm-offset-21 {
      margin-left: 87.5%;
    }
    .du-bois-light-col-sm-order-21 {
      order: 21;
    }
    .du-bois-light-col-sm-20 {
      display: block;
      flex: 0 0 83.33333333%;
      max-width: 83.33333333%;
    }
    .du-bois-light-col-sm-push-20 {
      left: 83.33333333%;
    }
    .du-bois-light-col-sm-pull-20 {
      right: 83.33333333%;
    }
    .du-bois-light-col-sm-offset-20 {
      margin-left: 83.33333333%;
    }
    .du-bois-light-col-sm-order-20 {
      order: 20;
    }
    .du-bois-light-col-sm-19 {
      display: block;
      flex: 0 0 79.16666667%;
      max-width: 79.16666667%;
    }
    .du-bois-light-col-sm-push-19 {
      left: 79.16666667%;
    }
    .du-bois-light-col-sm-pull-19 {
      right: 79.16666667%;
    }
    .du-bois-light-col-sm-offset-19 {
      margin-left: 79.16666667%;
    }
    .du-bois-light-col-sm-order-19 {
      order: 19;
    }
    .du-bois-light-col-sm-18 {
      display: block;
      flex: 0 0 75%;
      max-width: 75%;
    }
    .du-bois-light-col-sm-push-18 {
      left: 75%;
    }
    .du-bois-light-col-sm-pull-18 {
      right: 75%;
    }
    .du-bois-light-col-sm-offset-18 {
      margin-left: 75%;
    }
    .du-bois-light-col-sm-order-18 {
      order: 18;
    }
    .du-bois-light-col-sm-17 {
      display: block;
      flex: 0 0 70.83333333%;
      max-width: 70.83333333%;
    }
    .du-bois-light-col-sm-push-17 {
      left: 70.83333333%;
    }
    .du-bois-light-col-sm-pull-17 {
      right: 70.83333333%;
    }
    .du-bois-light-col-sm-offset-17 {
      margin-left: 70.83333333%;
    }
    .du-bois-light-col-sm-order-17 {
      order: 17;
    }
    .du-bois-light-col-sm-16 {
      display: block;
      flex: 0 0 66.66666667%;
      max-width: 66.66666667%;
    }
    .du-bois-light-col-sm-push-16 {
      left: 66.66666667%;
    }
    .du-bois-light-col-sm-pull-16 {
      right: 66.66666667%;
    }
    .du-bois-light-col-sm-offset-16 {
      margin-left: 66.66666667%;
    }
    .du-bois-light-col-sm-order-16 {
      order: 16;
    }
    .du-bois-light-col-sm-15 {
      display: block;
      flex: 0 0 62.5%;
      max-width: 62.5%;
    }
    .du-bois-light-col-sm-push-15 {
      left: 62.5%;
    }
    .du-bois-light-col-sm-pull-15 {
      right: 62.5%;
    }
    .du-bois-light-col-sm-offset-15 {
      margin-left: 62.5%;
    }
    .du-bois-light-col-sm-order-15 {
      order: 15;
    }
    .du-bois-light-col-sm-14 {
      display: block;
      flex: 0 0 58.33333333%;
      max-width: 58.33333333%;
    }
    .du-bois-light-col-sm-push-14 {
      left: 58.33333333%;
    }
    .du-bois-light-col-sm-pull-14 {
      right: 58.33333333%;
    }
    .du-bois-light-col-sm-offset-14 {
      margin-left: 58.33333333%;
    }
    .du-bois-light-col-sm-order-14 {
      order: 14;
    }
    .du-bois-light-col-sm-13 {
      display: block;
      flex: 0 0 54.16666667%;
      max-width: 54.16666667%;
    }
    .du-bois-light-col-sm-push-13 {
      left: 54.16666667%;
    }
    .du-bois-light-col-sm-pull-13 {
      right: 54.16666667%;
    }
    .du-bois-light-col-sm-offset-13 {
      margin-left: 54.16666667%;
    }
    .du-bois-light-col-sm-order-13 {
      order: 13;
    }
    .du-bois-light-col-sm-12 {
      display: block;
      flex: 0 0 50%;
      max-width: 50%;
    }
    .du-bois-light-col-sm-push-12 {
      left: 50%;
    }
    .du-bois-light-col-sm-pull-12 {
      right: 50%;
    }
    .du-bois-light-col-sm-offset-12 {
      margin-left: 50%;
    }
    .du-bois-light-col-sm-order-12 {
      order: 12;
    }
    .du-bois-light-col-sm-11 {
      display: block;
      flex: 0 0 45.83333333%;
      max-width: 45.83333333%;
    }
    .du-bois-light-col-sm-push-11 {
      left: 45.83333333%;
    }
    .du-bois-light-col-sm-pull-11 {
      right: 45.83333333%;
    }
    .du-bois-light-col-sm-offset-11 {
      margin-left: 45.83333333%;
    }
    .du-bois-light-col-sm-order-11 {
      order: 11;
    }
    .du-bois-light-col-sm-10 {
      display: block;
      flex: 0 0 41.66666667%;
      max-width: 41.66666667%;
    }
    .du-bois-light-col-sm-push-10 {
      left: 41.66666667%;
    }
    .du-bois-light-col-sm-pull-10 {
      right: 41.66666667%;
    }
    .du-bois-light-col-sm-offset-10 {
      margin-left: 41.66666667%;
    }
    .du-bois-light-col-sm-order-10 {
      order: 10;
    }
    .du-bois-light-col-sm-9 {
      display: block;
      flex: 0 0 37.5%;
      max-width: 37.5%;
    }
    .du-bois-light-col-sm-push-9 {
      left: 37.5%;
    }
    .du-bois-light-col-sm-pull-9 {
      right: 37.5%;
    }
    .du-bois-light-col-sm-offset-9 {
      margin-left: 37.5%;
    }
    .du-bois-light-col-sm-order-9 {
      order: 9;
    }
    .du-bois-light-col-sm-8 {
      display: block;
      flex: 0 0 33.33333333%;
      max-width: 33.33333333%;
    }
    .du-bois-light-col-sm-push-8 {
      left: 33.33333333%;
    }
    .du-bois-light-col-sm-pull-8 {
      right: 33.33333333%;
    }
    .du-bois-light-col-sm-offset-8 {
      margin-left: 33.33333333%;
    }
    .du-bois-light-col-sm-order-8 {
      order: 8;
    }
    .du-bois-light-col-sm-7 {
      display: block;
      flex: 0 0 29.16666667%;
      max-width: 29.16666667%;
    }
    .du-bois-light-col-sm-push-7 {
      left: 29.16666667%;
    }
    .du-bois-light-col-sm-pull-7 {
      right: 29.16666667%;
    }
    .du-bois-light-col-sm-offset-7 {
      margin-left: 29.16666667%;
    }
    .du-bois-light-col-sm-order-7 {
      order: 7;
    }
    .du-bois-light-col-sm-6 {
      display: block;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .du-bois-light-col-sm-push-6 {
      left: 25%;
    }
    .du-bois-light-col-sm-pull-6 {
      right: 25%;
    }
    .du-bois-light-col-sm-offset-6 {
      margin-left: 25%;
    }
    .du-bois-light-col-sm-order-6 {
      order: 6;
    }
    .du-bois-light-col-sm-5 {
      display: block;
      flex: 0 0 20.83333333%;
      max-width: 20.83333333%;
    }
    .du-bois-light-col-sm-push-5 {
      left: 20.83333333%;
    }
    .du-bois-light-col-sm-pull-5 {
      right: 20.83333333%;
    }
    .du-bois-light-col-sm-offset-5 {
      margin-left: 20.83333333%;
    }
    .du-bois-light-col-sm-order-5 {
      order: 5;
    }
    .du-bois-light-col-sm-4 {
      display: block;
      flex: 0 0 16.66666667%;
      max-width: 16.66666667%;
    }
    .du-bois-light-col-sm-push-4 {
      left: 16.66666667%;
    }
    .du-bois-light-col-sm-pull-4 {
      right: 16.66666667%;
    }
    .du-bois-light-col-sm-offset-4 {
      margin-left: 16.66666667%;
    }
    .du-bois-light-col-sm-order-4 {
      order: 4;
    }
    .du-bois-light-col-sm-3 {
      display: block;
      flex: 0 0 12.5%;
      max-width: 12.5%;
    }
    .du-bois-light-col-sm-push-3 {
      left: 12.5%;
    }
    .du-bois-light-col-sm-pull-3 {
      right: 12.5%;
    }
    .du-bois-light-col-sm-offset-3 {
      margin-left: 12.5%;
    }
    .du-bois-light-col-sm-order-3 {
      order: 3;
    }
    .du-bois-light-col-sm-2 {
      display: block;
      flex: 0 0 8.33333333%;
      max-width: 8.33333333%;
    }
    .du-bois-light-col-sm-push-2 {
      left: 8.33333333%;
    }
    .du-bois-light-col-sm-pull-2 {
      right: 8.33333333%;
    }
    .du-bois-light-col-sm-offset-2 {
      margin-left: 8.33333333%;
    }
    .du-bois-light-col-sm-order-2 {
      order: 2;
    }
    .du-bois-light-col-sm-1 {
      display: block;
      flex: 0 0 4.16666667%;
      max-width: 4.16666667%;
    }
    .du-bois-light-col-sm-push-1 {
      left: 4.16666667%;
    }
    .du-bois-light-col-sm-pull-1 {
      right: 4.16666667%;
    }
    .du-bois-light-col-sm-offset-1 {
      margin-left: 4.16666667%;
    }
    .du-bois-light-col-sm-order-1 {
      order: 1;
    }
    .du-bois-light-col-sm-0 {
      display: none;
    }
    .du-bois-light-col-push-0 {
      left: auto;
    }
    .du-bois-light-col-pull-0 {
      right: auto;
    }
    .du-bois-light-col-sm-push-0 {
      left: auto;
    }
    .du-bois-light-col-sm-pull-0 {
      right: auto;
    }
    .du-bois-light-col-sm-offset-0 {
      margin-left: 0;
    }
    .du-bois-light-col-sm-order-0 {
      order: 0;
    }
    .du-bois-light-col-push-0.du-bois-light-col-rtl {
      right: auto;
    }
    .du-bois-light-col-pull-0.du-bois-light-col-rtl {
      left: auto;
    }
    .du-bois-light-col-sm-push-0.du-bois-light-col-rtl {
      right: auto;
    }
    .du-bois-light-col-sm-pull-0.du-bois-light-col-rtl {
      left: auto;
    }
    .du-bois-light-col-sm-offset-0.du-bois-light-col-rtl {
      margin-right: 0;
    }
    .du-bois-light-col-sm-push-1.du-bois-light-col-rtl {
      right: 4.16666667%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-1.du-bois-light-col-rtl {
      right: auto;
      left: 4.16666667%;
    }
    .du-bois-light-col-sm-offset-1.du-bois-light-col-rtl {
      margin-right: 4.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-2.du-bois-light-col-rtl {
      right: 8.33333333%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-2.du-bois-light-col-rtl {
      right: auto;
      left: 8.33333333%;
    }
    .du-bois-light-col-sm-offset-2.du-bois-light-col-rtl {
      margin-right: 8.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-3.du-bois-light-col-rtl {
      right: 12.5%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-3.du-bois-light-col-rtl {
      right: auto;
      left: 12.5%;
    }
    .du-bois-light-col-sm-offset-3.du-bois-light-col-rtl {
      margin-right: 12.5%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-4.du-bois-light-col-rtl {
      right: 16.66666667%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-4.du-bois-light-col-rtl {
      right: auto;
      left: 16.66666667%;
    }
    .du-bois-light-col-sm-offset-4.du-bois-light-col-rtl {
      margin-right: 16.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-5.du-bois-light-col-rtl {
      right: 20.83333333%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-5.du-bois-light-col-rtl {
      right: auto;
      left: 20.83333333%;
    }
    .du-bois-light-col-sm-offset-5.du-bois-light-col-rtl {
      margin-right: 20.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-6.du-bois-light-col-rtl {
      right: 25%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-6.du-bois-light-col-rtl {
      right: auto;
      left: 25%;
    }
    .du-bois-light-col-sm-offset-6.du-bois-light-col-rtl {
      margin-right: 25%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-7.du-bois-light-col-rtl {
      right: 29.16666667%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-7.du-bois-light-col-rtl {
      right: auto;
      left: 29.16666667%;
    }
    .du-bois-light-col-sm-offset-7.du-bois-light-col-rtl {
      margin-right: 29.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-8.du-bois-light-col-rtl {
      right: 33.33333333%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-8.du-bois-light-col-rtl {
      right: auto;
      left: 33.33333333%;
    }
    .du-bois-light-col-sm-offset-8.du-bois-light-col-rtl {
      margin-right: 33.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-9.du-bois-light-col-rtl {
      right: 37.5%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-9.du-bois-light-col-rtl {
      right: auto;
      left: 37.5%;
    }
    .du-bois-light-col-sm-offset-9.du-bois-light-col-rtl {
      margin-right: 37.5%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-10.du-bois-light-col-rtl {
      right: 41.66666667%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-10.du-bois-light-col-rtl {
      right: auto;
      left: 41.66666667%;
    }
    .du-bois-light-col-sm-offset-10.du-bois-light-col-rtl {
      margin-right: 41.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-11.du-bois-light-col-rtl {
      right: 45.83333333%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-11.du-bois-light-col-rtl {
      right: auto;
      left: 45.83333333%;
    }
    .du-bois-light-col-sm-offset-11.du-bois-light-col-rtl {
      margin-right: 45.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-12.du-bois-light-col-rtl {
      right: 50%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-12.du-bois-light-col-rtl {
      right: auto;
      left: 50%;
    }
    .du-bois-light-col-sm-offset-12.du-bois-light-col-rtl {
      margin-right: 50%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-13.du-bois-light-col-rtl {
      right: 54.16666667%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-13.du-bois-light-col-rtl {
      right: auto;
      left: 54.16666667%;
    }
    .du-bois-light-col-sm-offset-13.du-bois-light-col-rtl {
      margin-right: 54.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-14.du-bois-light-col-rtl {
      right: 58.33333333%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-14.du-bois-light-col-rtl {
      right: auto;
      left: 58.33333333%;
    }
    .du-bois-light-col-sm-offset-14.du-bois-light-col-rtl {
      margin-right: 58.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-15.du-bois-light-col-rtl {
      right: 62.5%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-15.du-bois-light-col-rtl {
      right: auto;
      left: 62.5%;
    }
    .du-bois-light-col-sm-offset-15.du-bois-light-col-rtl {
      margin-right: 62.5%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-16.du-bois-light-col-rtl {
      right: 66.66666667%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-16.du-bois-light-col-rtl {
      right: auto;
      left: 66.66666667%;
    }
    .du-bois-light-col-sm-offset-16.du-bois-light-col-rtl {
      margin-right: 66.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-17.du-bois-light-col-rtl {
      right: 70.83333333%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-17.du-bois-light-col-rtl {
      right: auto;
      left: 70.83333333%;
    }
    .du-bois-light-col-sm-offset-17.du-bois-light-col-rtl {
      margin-right: 70.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-18.du-bois-light-col-rtl {
      right: 75%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-18.du-bois-light-col-rtl {
      right: auto;
      left: 75%;
    }
    .du-bois-light-col-sm-offset-18.du-bois-light-col-rtl {
      margin-right: 75%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-19.du-bois-light-col-rtl {
      right: 79.16666667%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-19.du-bois-light-col-rtl {
      right: auto;
      left: 79.16666667%;
    }
    .du-bois-light-col-sm-offset-19.du-bois-light-col-rtl {
      margin-right: 79.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-20.du-bois-light-col-rtl {
      right: 83.33333333%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-20.du-bois-light-col-rtl {
      right: auto;
      left: 83.33333333%;
    }
    .du-bois-light-col-sm-offset-20.du-bois-light-col-rtl {
      margin-right: 83.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-21.du-bois-light-col-rtl {
      right: 87.5%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-21.du-bois-light-col-rtl {
      right: auto;
      left: 87.5%;
    }
    .du-bois-light-col-sm-offset-21.du-bois-light-col-rtl {
      margin-right: 87.5%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-22.du-bois-light-col-rtl {
      right: 91.66666667%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-22.du-bois-light-col-rtl {
      right: auto;
      left: 91.66666667%;
    }
    .du-bois-light-col-sm-offset-22.du-bois-light-col-rtl {
      margin-right: 91.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-23.du-bois-light-col-rtl {
      right: 95.83333333%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-23.du-bois-light-col-rtl {
      right: auto;
      left: 95.83333333%;
    }
    .du-bois-light-col-sm-offset-23.du-bois-light-col-rtl {
      margin-right: 95.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-sm-push-24.du-bois-light-col-rtl {
      right: 100%;
      left: auto;
    }
    .du-bois-light-col-sm-pull-24.du-bois-light-col-rtl {
      right: auto;
      left: 100%;
    }
    .du-bois-light-col-sm-offset-24.du-bois-light-col-rtl {
      margin-right: 100%;
      margin-left: 0;
    }
  }
  @media (min-width: 768px) {
    .du-bois-light-col-md-24 {
      display: block;
      flex: 0 0 100%;
      max-width: 100%;
    }
    .du-bois-light-col-md-push-24 {
      left: 100%;
    }
    .du-bois-light-col-md-pull-24 {
      right: 100%;
    }
    .du-bois-light-col-md-offset-24 {
      margin-left: 100%;
    }
    .du-bois-light-col-md-order-24 {
      order: 24;
    }
    .du-bois-light-col-md-23 {
      display: block;
      flex: 0 0 95.83333333%;
      max-width: 95.83333333%;
    }
    .du-bois-light-col-md-push-23 {
      left: 95.83333333%;
    }
    .du-bois-light-col-md-pull-23 {
      right: 95.83333333%;
    }
    .du-bois-light-col-md-offset-23 {
      margin-left: 95.83333333%;
    }
    .du-bois-light-col-md-order-23 {
      order: 23;
    }
    .du-bois-light-col-md-22 {
      display: block;
      flex: 0 0 91.66666667%;
      max-width: 91.66666667%;
    }
    .du-bois-light-col-md-push-22 {
      left: 91.66666667%;
    }
    .du-bois-light-col-md-pull-22 {
      right: 91.66666667%;
    }
    .du-bois-light-col-md-offset-22 {
      margin-left: 91.66666667%;
    }
    .du-bois-light-col-md-order-22 {
      order: 22;
    }
    .du-bois-light-col-md-21 {
      display: block;
      flex: 0 0 87.5%;
      max-width: 87.5%;
    }
    .du-bois-light-col-md-push-21 {
      left: 87.5%;
    }
    .du-bois-light-col-md-pull-21 {
      right: 87.5%;
    }
    .du-bois-light-col-md-offset-21 {
      margin-left: 87.5%;
    }
    .du-bois-light-col-md-order-21 {
      order: 21;
    }
    .du-bois-light-col-md-20 {
      display: block;
      flex: 0 0 83.33333333%;
      max-width: 83.33333333%;
    }
    .du-bois-light-col-md-push-20 {
      left: 83.33333333%;
    }
    .du-bois-light-col-md-pull-20 {
      right: 83.33333333%;
    }
    .du-bois-light-col-md-offset-20 {
      margin-left: 83.33333333%;
    }
    .du-bois-light-col-md-order-20 {
      order: 20;
    }
    .du-bois-light-col-md-19 {
      display: block;
      flex: 0 0 79.16666667%;
      max-width: 79.16666667%;
    }
    .du-bois-light-col-md-push-19 {
      left: 79.16666667%;
    }
    .du-bois-light-col-md-pull-19 {
      right: 79.16666667%;
    }
    .du-bois-light-col-md-offset-19 {
      margin-left: 79.16666667%;
    }
    .du-bois-light-col-md-order-19 {
      order: 19;
    }
    .du-bois-light-col-md-18 {
      display: block;
      flex: 0 0 75%;
      max-width: 75%;
    }
    .du-bois-light-col-md-push-18 {
      left: 75%;
    }
    .du-bois-light-col-md-pull-18 {
      right: 75%;
    }
    .du-bois-light-col-md-offset-18 {
      margin-left: 75%;
    }
    .du-bois-light-col-md-order-18 {
      order: 18;
    }
    .du-bois-light-col-md-17 {
      display: block;
      flex: 0 0 70.83333333%;
      max-width: 70.83333333%;
    }
    .du-bois-light-col-md-push-17 {
      left: 70.83333333%;
    }
    .du-bois-light-col-md-pull-17 {
      right: 70.83333333%;
    }
    .du-bois-light-col-md-offset-17 {
      margin-left: 70.83333333%;
    }
    .du-bois-light-col-md-order-17 {
      order: 17;
    }
    .du-bois-light-col-md-16 {
      display: block;
      flex: 0 0 66.66666667%;
      max-width: 66.66666667%;
    }
    .du-bois-light-col-md-push-16 {
      left: 66.66666667%;
    }
    .du-bois-light-col-md-pull-16 {
      right: 66.66666667%;
    }
    .du-bois-light-col-md-offset-16 {
      margin-left: 66.66666667%;
    }
    .du-bois-light-col-md-order-16 {
      order: 16;
    }
    .du-bois-light-col-md-15 {
      display: block;
      flex: 0 0 62.5%;
      max-width: 62.5%;
    }
    .du-bois-light-col-md-push-15 {
      left: 62.5%;
    }
    .du-bois-light-col-md-pull-15 {
      right: 62.5%;
    }
    .du-bois-light-col-md-offset-15 {
      margin-left: 62.5%;
    }
    .du-bois-light-col-md-order-15 {
      order: 15;
    }
    .du-bois-light-col-md-14 {
      display: block;
      flex: 0 0 58.33333333%;
      max-width: 58.33333333%;
    }
    .du-bois-light-col-md-push-14 {
      left: 58.33333333%;
    }
    .du-bois-light-col-md-pull-14 {
      right: 58.33333333%;
    }
    .du-bois-light-col-md-offset-14 {
      margin-left: 58.33333333%;
    }
    .du-bois-light-col-md-order-14 {
      order: 14;
    }
    .du-bois-light-col-md-13 {
      display: block;
      flex: 0 0 54.16666667%;
      max-width: 54.16666667%;
    }
    .du-bois-light-col-md-push-13 {
      left: 54.16666667%;
    }
    .du-bois-light-col-md-pull-13 {
      right: 54.16666667%;
    }
    .du-bois-light-col-md-offset-13 {
      margin-left: 54.16666667%;
    }
    .du-bois-light-col-md-order-13 {
      order: 13;
    }
    .du-bois-light-col-md-12 {
      display: block;
      flex: 0 0 50%;
      max-width: 50%;
    }
    .du-bois-light-col-md-push-12 {
      left: 50%;
    }
    .du-bois-light-col-md-pull-12 {
      right: 50%;
    }
    .du-bois-light-col-md-offset-12 {
      margin-left: 50%;
    }
    .du-bois-light-col-md-order-12 {
      order: 12;
    }
    .du-bois-light-col-md-11 {
      display: block;
      flex: 0 0 45.83333333%;
      max-width: 45.83333333%;
    }
    .du-bois-light-col-md-push-11 {
      left: 45.83333333%;
    }
    .du-bois-light-col-md-pull-11 {
      right: 45.83333333%;
    }
    .du-bois-light-col-md-offset-11 {
      margin-left: 45.83333333%;
    }
    .du-bois-light-col-md-order-11 {
      order: 11;
    }
    .du-bois-light-col-md-10 {
      display: block;
      flex: 0 0 41.66666667%;
      max-width: 41.66666667%;
    }
    .du-bois-light-col-md-push-10 {
      left: 41.66666667%;
    }
    .du-bois-light-col-md-pull-10 {
      right: 41.66666667%;
    }
    .du-bois-light-col-md-offset-10 {
      margin-left: 41.66666667%;
    }
    .du-bois-light-col-md-order-10 {
      order: 10;
    }
    .du-bois-light-col-md-9 {
      display: block;
      flex: 0 0 37.5%;
      max-width: 37.5%;
    }
    .du-bois-light-col-md-push-9 {
      left: 37.5%;
    }
    .du-bois-light-col-md-pull-9 {
      right: 37.5%;
    }
    .du-bois-light-col-md-offset-9 {
      margin-left: 37.5%;
    }
    .du-bois-light-col-md-order-9 {
      order: 9;
    }
    .du-bois-light-col-md-8 {
      display: block;
      flex: 0 0 33.33333333%;
      max-width: 33.33333333%;
    }
    .du-bois-light-col-md-push-8 {
      left: 33.33333333%;
    }
    .du-bois-light-col-md-pull-8 {
      right: 33.33333333%;
    }
    .du-bois-light-col-md-offset-8 {
      margin-left: 33.33333333%;
    }
    .du-bois-light-col-md-order-8 {
      order: 8;
    }
    .du-bois-light-col-md-7 {
      display: block;
      flex: 0 0 29.16666667%;
      max-width: 29.16666667%;
    }
    .du-bois-light-col-md-push-7 {
      left: 29.16666667%;
    }
    .du-bois-light-col-md-pull-7 {
      right: 29.16666667%;
    }
    .du-bois-light-col-md-offset-7 {
      margin-left: 29.16666667%;
    }
    .du-bois-light-col-md-order-7 {
      order: 7;
    }
    .du-bois-light-col-md-6 {
      display: block;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .du-bois-light-col-md-push-6 {
      left: 25%;
    }
    .du-bois-light-col-md-pull-6 {
      right: 25%;
    }
    .du-bois-light-col-md-offset-6 {
      margin-left: 25%;
    }
    .du-bois-light-col-md-order-6 {
      order: 6;
    }
    .du-bois-light-col-md-5 {
      display: block;
      flex: 0 0 20.83333333%;
      max-width: 20.83333333%;
    }
    .du-bois-light-col-md-push-5 {
      left: 20.83333333%;
    }
    .du-bois-light-col-md-pull-5 {
      right: 20.83333333%;
    }
    .du-bois-light-col-md-offset-5 {
      margin-left: 20.83333333%;
    }
    .du-bois-light-col-md-order-5 {
      order: 5;
    }
    .du-bois-light-col-md-4 {
      display: block;
      flex: 0 0 16.66666667%;
      max-width: 16.66666667%;
    }
    .du-bois-light-col-md-push-4 {
      left: 16.66666667%;
    }
    .du-bois-light-col-md-pull-4 {
      right: 16.66666667%;
    }
    .du-bois-light-col-md-offset-4 {
      margin-left: 16.66666667%;
    }
    .du-bois-light-col-md-order-4 {
      order: 4;
    }
    .du-bois-light-col-md-3 {
      display: block;
      flex: 0 0 12.5%;
      max-width: 12.5%;
    }
    .du-bois-light-col-md-push-3 {
      left: 12.5%;
    }
    .du-bois-light-col-md-pull-3 {
      right: 12.5%;
    }
    .du-bois-light-col-md-offset-3 {
      margin-left: 12.5%;
    }
    .du-bois-light-col-md-order-3 {
      order: 3;
    }
    .du-bois-light-col-md-2 {
      display: block;
      flex: 0 0 8.33333333%;
      max-width: 8.33333333%;
    }
    .du-bois-light-col-md-push-2 {
      left: 8.33333333%;
    }
    .du-bois-light-col-md-pull-2 {
      right: 8.33333333%;
    }
    .du-bois-light-col-md-offset-2 {
      margin-left: 8.33333333%;
    }
    .du-bois-light-col-md-order-2 {
      order: 2;
    }
    .du-bois-light-col-md-1 {
      display: block;
      flex: 0 0 4.16666667%;
      max-width: 4.16666667%;
    }
    .du-bois-light-col-md-push-1 {
      left: 4.16666667%;
    }
    .du-bois-light-col-md-pull-1 {
      right: 4.16666667%;
    }
    .du-bois-light-col-md-offset-1 {
      margin-left: 4.16666667%;
    }
    .du-bois-light-col-md-order-1 {
      order: 1;
    }
    .du-bois-light-col-md-0 {
      display: none;
    }
    .du-bois-light-col-push-0 {
      left: auto;
    }
    .du-bois-light-col-pull-0 {
      right: auto;
    }
    .du-bois-light-col-md-push-0 {
      left: auto;
    }
    .du-bois-light-col-md-pull-0 {
      right: auto;
    }
    .du-bois-light-col-md-offset-0 {
      margin-left: 0;
    }
    .du-bois-light-col-md-order-0 {
      order: 0;
    }
    .du-bois-light-col-push-0.du-bois-light-col-rtl {
      right: auto;
    }
    .du-bois-light-col-pull-0.du-bois-light-col-rtl {
      left: auto;
    }
    .du-bois-light-col-md-push-0.du-bois-light-col-rtl {
      right: auto;
    }
    .du-bois-light-col-md-pull-0.du-bois-light-col-rtl {
      left: auto;
    }
    .du-bois-light-col-md-offset-0.du-bois-light-col-rtl {
      margin-right: 0;
    }
    .du-bois-light-col-md-push-1.du-bois-light-col-rtl {
      right: 4.16666667%;
      left: auto;
    }
    .du-bois-light-col-md-pull-1.du-bois-light-col-rtl {
      right: auto;
      left: 4.16666667%;
    }
    .du-bois-light-col-md-offset-1.du-bois-light-col-rtl {
      margin-right: 4.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-2.du-bois-light-col-rtl {
      right: 8.33333333%;
      left: auto;
    }
    .du-bois-light-col-md-pull-2.du-bois-light-col-rtl {
      right: auto;
      left: 8.33333333%;
    }
    .du-bois-light-col-md-offset-2.du-bois-light-col-rtl {
      margin-right: 8.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-3.du-bois-light-col-rtl {
      right: 12.5%;
      left: auto;
    }
    .du-bois-light-col-md-pull-3.du-bois-light-col-rtl {
      right: auto;
      left: 12.5%;
    }
    .du-bois-light-col-md-offset-3.du-bois-light-col-rtl {
      margin-right: 12.5%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-4.du-bois-light-col-rtl {
      right: 16.66666667%;
      left: auto;
    }
    .du-bois-light-col-md-pull-4.du-bois-light-col-rtl {
      right: auto;
      left: 16.66666667%;
    }
    .du-bois-light-col-md-offset-4.du-bois-light-col-rtl {
      margin-right: 16.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-5.du-bois-light-col-rtl {
      right: 20.83333333%;
      left: auto;
    }
    .du-bois-light-col-md-pull-5.du-bois-light-col-rtl {
      right: auto;
      left: 20.83333333%;
    }
    .du-bois-light-col-md-offset-5.du-bois-light-col-rtl {
      margin-right: 20.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-6.du-bois-light-col-rtl {
      right: 25%;
      left: auto;
    }
    .du-bois-light-col-md-pull-6.du-bois-light-col-rtl {
      right: auto;
      left: 25%;
    }
    .du-bois-light-col-md-offset-6.du-bois-light-col-rtl {
      margin-right: 25%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-7.du-bois-light-col-rtl {
      right: 29.16666667%;
      left: auto;
    }
    .du-bois-light-col-md-pull-7.du-bois-light-col-rtl {
      right: auto;
      left: 29.16666667%;
    }
    .du-bois-light-col-md-offset-7.du-bois-light-col-rtl {
      margin-right: 29.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-8.du-bois-light-col-rtl {
      right: 33.33333333%;
      left: auto;
    }
    .du-bois-light-col-md-pull-8.du-bois-light-col-rtl {
      right: auto;
      left: 33.33333333%;
    }
    .du-bois-light-col-md-offset-8.du-bois-light-col-rtl {
      margin-right: 33.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-9.du-bois-light-col-rtl {
      right: 37.5%;
      left: auto;
    }
    .du-bois-light-col-md-pull-9.du-bois-light-col-rtl {
      right: auto;
      left: 37.5%;
    }
    .du-bois-light-col-md-offset-9.du-bois-light-col-rtl {
      margin-right: 37.5%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-10.du-bois-light-col-rtl {
      right: 41.66666667%;
      left: auto;
    }
    .du-bois-light-col-md-pull-10.du-bois-light-col-rtl {
      right: auto;
      left: 41.66666667%;
    }
    .du-bois-light-col-md-offset-10.du-bois-light-col-rtl {
      margin-right: 41.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-11.du-bois-light-col-rtl {
      right: 45.83333333%;
      left: auto;
    }
    .du-bois-light-col-md-pull-11.du-bois-light-col-rtl {
      right: auto;
      left: 45.83333333%;
    }
    .du-bois-light-col-md-offset-11.du-bois-light-col-rtl {
      margin-right: 45.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-12.du-bois-light-col-rtl {
      right: 50%;
      left: auto;
    }
    .du-bois-light-col-md-pull-12.du-bois-light-col-rtl {
      right: auto;
      left: 50%;
    }
    .du-bois-light-col-md-offset-12.du-bois-light-col-rtl {
      margin-right: 50%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-13.du-bois-light-col-rtl {
      right: 54.16666667%;
      left: auto;
    }
    .du-bois-light-col-md-pull-13.du-bois-light-col-rtl {
      right: auto;
      left: 54.16666667%;
    }
    .du-bois-light-col-md-offset-13.du-bois-light-col-rtl {
      margin-right: 54.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-14.du-bois-light-col-rtl {
      right: 58.33333333%;
      left: auto;
    }
    .du-bois-light-col-md-pull-14.du-bois-light-col-rtl {
      right: auto;
      left: 58.33333333%;
    }
    .du-bois-light-col-md-offset-14.du-bois-light-col-rtl {
      margin-right: 58.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-15.du-bois-light-col-rtl {
      right: 62.5%;
      left: auto;
    }
    .du-bois-light-col-md-pull-15.du-bois-light-col-rtl {
      right: auto;
      left: 62.5%;
    }
    .du-bois-light-col-md-offset-15.du-bois-light-col-rtl {
      margin-right: 62.5%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-16.du-bois-light-col-rtl {
      right: 66.66666667%;
      left: auto;
    }
    .du-bois-light-col-md-pull-16.du-bois-light-col-rtl {
      right: auto;
      left: 66.66666667%;
    }
    .du-bois-light-col-md-offset-16.du-bois-light-col-rtl {
      margin-right: 66.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-17.du-bois-light-col-rtl {
      right: 70.83333333%;
      left: auto;
    }
    .du-bois-light-col-md-pull-17.du-bois-light-col-rtl {
      right: auto;
      left: 70.83333333%;
    }
    .du-bois-light-col-md-offset-17.du-bois-light-col-rtl {
      margin-right: 70.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-18.du-bois-light-col-rtl {
      right: 75%;
      left: auto;
    }
    .du-bois-light-col-md-pull-18.du-bois-light-col-rtl {
      right: auto;
      left: 75%;
    }
    .du-bois-light-col-md-offset-18.du-bois-light-col-rtl {
      margin-right: 75%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-19.du-bois-light-col-rtl {
      right: 79.16666667%;
      left: auto;
    }
    .du-bois-light-col-md-pull-19.du-bois-light-col-rtl {
      right: auto;
      left: 79.16666667%;
    }
    .du-bois-light-col-md-offset-19.du-bois-light-col-rtl {
      margin-right: 79.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-20.du-bois-light-col-rtl {
      right: 83.33333333%;
      left: auto;
    }
    .du-bois-light-col-md-pull-20.du-bois-light-col-rtl {
      right: auto;
      left: 83.33333333%;
    }
    .du-bois-light-col-md-offset-20.du-bois-light-col-rtl {
      margin-right: 83.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-21.du-bois-light-col-rtl {
      right: 87.5%;
      left: auto;
    }
    .du-bois-light-col-md-pull-21.du-bois-light-col-rtl {
      right: auto;
      left: 87.5%;
    }
    .du-bois-light-col-md-offset-21.du-bois-light-col-rtl {
      margin-right: 87.5%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-22.du-bois-light-col-rtl {
      right: 91.66666667%;
      left: auto;
    }
    .du-bois-light-col-md-pull-22.du-bois-light-col-rtl {
      right: auto;
      left: 91.66666667%;
    }
    .du-bois-light-col-md-offset-22.du-bois-light-col-rtl {
      margin-right: 91.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-23.du-bois-light-col-rtl {
      right: 95.83333333%;
      left: auto;
    }
    .du-bois-light-col-md-pull-23.du-bois-light-col-rtl {
      right: auto;
      left: 95.83333333%;
    }
    .du-bois-light-col-md-offset-23.du-bois-light-col-rtl {
      margin-right: 95.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-md-push-24.du-bois-light-col-rtl {
      right: 100%;
      left: auto;
    }
    .du-bois-light-col-md-pull-24.du-bois-light-col-rtl {
      right: auto;
      left: 100%;
    }
    .du-bois-light-col-md-offset-24.du-bois-light-col-rtl {
      margin-right: 100%;
      margin-left: 0;
    }
  }
  @media (min-width: 992px) {
    .du-bois-light-col-lg-24 {
      display: block;
      flex: 0 0 100%;
      max-width: 100%;
    }
    .du-bois-light-col-lg-push-24 {
      left: 100%;
    }
    .du-bois-light-col-lg-pull-24 {
      right: 100%;
    }
    .du-bois-light-col-lg-offset-24 {
      margin-left: 100%;
    }
    .du-bois-light-col-lg-order-24 {
      order: 24;
    }
    .du-bois-light-col-lg-23 {
      display: block;
      flex: 0 0 95.83333333%;
      max-width: 95.83333333%;
    }
    .du-bois-light-col-lg-push-23 {
      left: 95.83333333%;
    }
    .du-bois-light-col-lg-pull-23 {
      right: 95.83333333%;
    }
    .du-bois-light-col-lg-offset-23 {
      margin-left: 95.83333333%;
    }
    .du-bois-light-col-lg-order-23 {
      order: 23;
    }
    .du-bois-light-col-lg-22 {
      display: block;
      flex: 0 0 91.66666667%;
      max-width: 91.66666667%;
    }
    .du-bois-light-col-lg-push-22 {
      left: 91.66666667%;
    }
    .du-bois-light-col-lg-pull-22 {
      right: 91.66666667%;
    }
    .du-bois-light-col-lg-offset-22 {
      margin-left: 91.66666667%;
    }
    .du-bois-light-col-lg-order-22 {
      order: 22;
    }
    .du-bois-light-col-lg-21 {
      display: block;
      flex: 0 0 87.5%;
      max-width: 87.5%;
    }
    .du-bois-light-col-lg-push-21 {
      left: 87.5%;
    }
    .du-bois-light-col-lg-pull-21 {
      right: 87.5%;
    }
    .du-bois-light-col-lg-offset-21 {
      margin-left: 87.5%;
    }
    .du-bois-light-col-lg-order-21 {
      order: 21;
    }
    .du-bois-light-col-lg-20 {
      display: block;
      flex: 0 0 83.33333333%;
      max-width: 83.33333333%;
    }
    .du-bois-light-col-lg-push-20 {
      left: 83.33333333%;
    }
    .du-bois-light-col-lg-pull-20 {
      right: 83.33333333%;
    }
    .du-bois-light-col-lg-offset-20 {
      margin-left: 83.33333333%;
    }
    .du-bois-light-col-lg-order-20 {
      order: 20;
    }
    .du-bois-light-col-lg-19 {
      display: block;
      flex: 0 0 79.16666667%;
      max-width: 79.16666667%;
    }
    .du-bois-light-col-lg-push-19 {
      left: 79.16666667%;
    }
    .du-bois-light-col-lg-pull-19 {
      right: 79.16666667%;
    }
    .du-bois-light-col-lg-offset-19 {
      margin-left: 79.16666667%;
    }
    .du-bois-light-col-lg-order-19 {
      order: 19;
    }
    .du-bois-light-col-lg-18 {
      display: block;
      flex: 0 0 75%;
      max-width: 75%;
    }
    .du-bois-light-col-lg-push-18 {
      left: 75%;
    }
    .du-bois-light-col-lg-pull-18 {
      right: 75%;
    }
    .du-bois-light-col-lg-offset-18 {
      margin-left: 75%;
    }
    .du-bois-light-col-lg-order-18 {
      order: 18;
    }
    .du-bois-light-col-lg-17 {
      display: block;
      flex: 0 0 70.83333333%;
      max-width: 70.83333333%;
    }
    .du-bois-light-col-lg-push-17 {
      left: 70.83333333%;
    }
    .du-bois-light-col-lg-pull-17 {
      right: 70.83333333%;
    }
    .du-bois-light-col-lg-offset-17 {
      margin-left: 70.83333333%;
    }
    .du-bois-light-col-lg-order-17 {
      order: 17;
    }
    .du-bois-light-col-lg-16 {
      display: block;
      flex: 0 0 66.66666667%;
      max-width: 66.66666667%;
    }
    .du-bois-light-col-lg-push-16 {
      left: 66.66666667%;
    }
    .du-bois-light-col-lg-pull-16 {
      right: 66.66666667%;
    }
    .du-bois-light-col-lg-offset-16 {
      margin-left: 66.66666667%;
    }
    .du-bois-light-col-lg-order-16 {
      order: 16;
    }
    .du-bois-light-col-lg-15 {
      display: block;
      flex: 0 0 62.5%;
      max-width: 62.5%;
    }
    .du-bois-light-col-lg-push-15 {
      left: 62.5%;
    }
    .du-bois-light-col-lg-pull-15 {
      right: 62.5%;
    }
    .du-bois-light-col-lg-offset-15 {
      margin-left: 62.5%;
    }
    .du-bois-light-col-lg-order-15 {
      order: 15;
    }
    .du-bois-light-col-lg-14 {
      display: block;
      flex: 0 0 58.33333333%;
      max-width: 58.33333333%;
    }
    .du-bois-light-col-lg-push-14 {
      left: 58.33333333%;
    }
    .du-bois-light-col-lg-pull-14 {
      right: 58.33333333%;
    }
    .du-bois-light-col-lg-offset-14 {
      margin-left: 58.33333333%;
    }
    .du-bois-light-col-lg-order-14 {
      order: 14;
    }
    .du-bois-light-col-lg-13 {
      display: block;
      flex: 0 0 54.16666667%;
      max-width: 54.16666667%;
    }
    .du-bois-light-col-lg-push-13 {
      left: 54.16666667%;
    }
    .du-bois-light-col-lg-pull-13 {
      right: 54.16666667%;
    }
    .du-bois-light-col-lg-offset-13 {
      margin-left: 54.16666667%;
    }
    .du-bois-light-col-lg-order-13 {
      order: 13;
    }
    .du-bois-light-col-lg-12 {
      display: block;
      flex: 0 0 50%;
      max-width: 50%;
    }
    .du-bois-light-col-lg-push-12 {
      left: 50%;
    }
    .du-bois-light-col-lg-pull-12 {
      right: 50%;
    }
    .du-bois-light-col-lg-offset-12 {
      margin-left: 50%;
    }
    .du-bois-light-col-lg-order-12 {
      order: 12;
    }
    .du-bois-light-col-lg-11 {
      display: block;
      flex: 0 0 45.83333333%;
      max-width: 45.83333333%;
    }
    .du-bois-light-col-lg-push-11 {
      left: 45.83333333%;
    }
    .du-bois-light-col-lg-pull-11 {
      right: 45.83333333%;
    }
    .du-bois-light-col-lg-offset-11 {
      margin-left: 45.83333333%;
    }
    .du-bois-light-col-lg-order-11 {
      order: 11;
    }
    .du-bois-light-col-lg-10 {
      display: block;
      flex: 0 0 41.66666667%;
      max-width: 41.66666667%;
    }
    .du-bois-light-col-lg-push-10 {
      left: 41.66666667%;
    }
    .du-bois-light-col-lg-pull-10 {
      right: 41.66666667%;
    }
    .du-bois-light-col-lg-offset-10 {
      margin-left: 41.66666667%;
    }
    .du-bois-light-col-lg-order-10 {
      order: 10;
    }
    .du-bois-light-col-lg-9 {
      display: block;
      flex: 0 0 37.5%;
      max-width: 37.5%;
    }
    .du-bois-light-col-lg-push-9 {
      left: 37.5%;
    }
    .du-bois-light-col-lg-pull-9 {
      right: 37.5%;
    }
    .du-bois-light-col-lg-offset-9 {
      margin-left: 37.5%;
    }
    .du-bois-light-col-lg-order-9 {
      order: 9;
    }
    .du-bois-light-col-lg-8 {
      display: block;
      flex: 0 0 33.33333333%;
      max-width: 33.33333333%;
    }
    .du-bois-light-col-lg-push-8 {
      left: 33.33333333%;
    }
    .du-bois-light-col-lg-pull-8 {
      right: 33.33333333%;
    }
    .du-bois-light-col-lg-offset-8 {
      margin-left: 33.33333333%;
    }
    .du-bois-light-col-lg-order-8 {
      order: 8;
    }
    .du-bois-light-col-lg-7 {
      display: block;
      flex: 0 0 29.16666667%;
      max-width: 29.16666667%;
    }
    .du-bois-light-col-lg-push-7 {
      left: 29.16666667%;
    }
    .du-bois-light-col-lg-pull-7 {
      right: 29.16666667%;
    }
    .du-bois-light-col-lg-offset-7 {
      margin-left: 29.16666667%;
    }
    .du-bois-light-col-lg-order-7 {
      order: 7;
    }
    .du-bois-light-col-lg-6 {
      display: block;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .du-bois-light-col-lg-push-6 {
      left: 25%;
    }
    .du-bois-light-col-lg-pull-6 {
      right: 25%;
    }
    .du-bois-light-col-lg-offset-6 {
      margin-left: 25%;
    }
    .du-bois-light-col-lg-order-6 {
      order: 6;
    }
    .du-bois-light-col-lg-5 {
      display: block;
      flex: 0 0 20.83333333%;
      max-width: 20.83333333%;
    }
    .du-bois-light-col-lg-push-5 {
      left: 20.83333333%;
    }
    .du-bois-light-col-lg-pull-5 {
      right: 20.83333333%;
    }
    .du-bois-light-col-lg-offset-5 {
      margin-left: 20.83333333%;
    }
    .du-bois-light-col-lg-order-5 {
      order: 5;
    }
    .du-bois-light-col-lg-4 {
      display: block;
      flex: 0 0 16.66666667%;
      max-width: 16.66666667%;
    }
    .du-bois-light-col-lg-push-4 {
      left: 16.66666667%;
    }
    .du-bois-light-col-lg-pull-4 {
      right: 16.66666667%;
    }
    .du-bois-light-col-lg-offset-4 {
      margin-left: 16.66666667%;
    }
    .du-bois-light-col-lg-order-4 {
      order: 4;
    }
    .du-bois-light-col-lg-3 {
      display: block;
      flex: 0 0 12.5%;
      max-width: 12.5%;
    }
    .du-bois-light-col-lg-push-3 {
      left: 12.5%;
    }
    .du-bois-light-col-lg-pull-3 {
      right: 12.5%;
    }
    .du-bois-light-col-lg-offset-3 {
      margin-left: 12.5%;
    }
    .du-bois-light-col-lg-order-3 {
      order: 3;
    }
    .du-bois-light-col-lg-2 {
      display: block;
      flex: 0 0 8.33333333%;
      max-width: 8.33333333%;
    }
    .du-bois-light-col-lg-push-2 {
      left: 8.33333333%;
    }
    .du-bois-light-col-lg-pull-2 {
      right: 8.33333333%;
    }
    .du-bois-light-col-lg-offset-2 {
      margin-left: 8.33333333%;
    }
    .du-bois-light-col-lg-order-2 {
      order: 2;
    }
    .du-bois-light-col-lg-1 {
      display: block;
      flex: 0 0 4.16666667%;
      max-width: 4.16666667%;
    }
    .du-bois-light-col-lg-push-1 {
      left: 4.16666667%;
    }
    .du-bois-light-col-lg-pull-1 {
      right: 4.16666667%;
    }
    .du-bois-light-col-lg-offset-1 {
      margin-left: 4.16666667%;
    }
    .du-bois-light-col-lg-order-1 {
      order: 1;
    }
    .du-bois-light-col-lg-0 {
      display: none;
    }
    .du-bois-light-col-push-0 {
      left: auto;
    }
    .du-bois-light-col-pull-0 {
      right: auto;
    }
    .du-bois-light-col-lg-push-0 {
      left: auto;
    }
    .du-bois-light-col-lg-pull-0 {
      right: auto;
    }
    .du-bois-light-col-lg-offset-0 {
      margin-left: 0;
    }
    .du-bois-light-col-lg-order-0 {
      order: 0;
    }
    .du-bois-light-col-push-0.du-bois-light-col-rtl {
      right: auto;
    }
    .du-bois-light-col-pull-0.du-bois-light-col-rtl {
      left: auto;
    }
    .du-bois-light-col-lg-push-0.du-bois-light-col-rtl {
      right: auto;
    }
    .du-bois-light-col-lg-pull-0.du-bois-light-col-rtl {
      left: auto;
    }
    .du-bois-light-col-lg-offset-0.du-bois-light-col-rtl {
      margin-right: 0;
    }
    .du-bois-light-col-lg-push-1.du-bois-light-col-rtl {
      right: 4.16666667%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-1.du-bois-light-col-rtl {
      right: auto;
      left: 4.16666667%;
    }
    .du-bois-light-col-lg-offset-1.du-bois-light-col-rtl {
      margin-right: 4.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-2.du-bois-light-col-rtl {
      right: 8.33333333%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-2.du-bois-light-col-rtl {
      right: auto;
      left: 8.33333333%;
    }
    .du-bois-light-col-lg-offset-2.du-bois-light-col-rtl {
      margin-right: 8.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-3.du-bois-light-col-rtl {
      right: 12.5%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-3.du-bois-light-col-rtl {
      right: auto;
      left: 12.5%;
    }
    .du-bois-light-col-lg-offset-3.du-bois-light-col-rtl {
      margin-right: 12.5%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-4.du-bois-light-col-rtl {
      right: 16.66666667%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-4.du-bois-light-col-rtl {
      right: auto;
      left: 16.66666667%;
    }
    .du-bois-light-col-lg-offset-4.du-bois-light-col-rtl {
      margin-right: 16.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-5.du-bois-light-col-rtl {
      right: 20.83333333%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-5.du-bois-light-col-rtl {
      right: auto;
      left: 20.83333333%;
    }
    .du-bois-light-col-lg-offset-5.du-bois-light-col-rtl {
      margin-right: 20.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-6.du-bois-light-col-rtl {
      right: 25%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-6.du-bois-light-col-rtl {
      right: auto;
      left: 25%;
    }
    .du-bois-light-col-lg-offset-6.du-bois-light-col-rtl {
      margin-right: 25%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-7.du-bois-light-col-rtl {
      right: 29.16666667%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-7.du-bois-light-col-rtl {
      right: auto;
      left: 29.16666667%;
    }
    .du-bois-light-col-lg-offset-7.du-bois-light-col-rtl {
      margin-right: 29.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-8.du-bois-light-col-rtl {
      right: 33.33333333%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-8.du-bois-light-col-rtl {
      right: auto;
      left: 33.33333333%;
    }
    .du-bois-light-col-lg-offset-8.du-bois-light-col-rtl {
      margin-right: 33.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-9.du-bois-light-col-rtl {
      right: 37.5%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-9.du-bois-light-col-rtl {
      right: auto;
      left: 37.5%;
    }
    .du-bois-light-col-lg-offset-9.du-bois-light-col-rtl {
      margin-right: 37.5%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-10.du-bois-light-col-rtl {
      right: 41.66666667%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-10.du-bois-light-col-rtl {
      right: auto;
      left: 41.66666667%;
    }
    .du-bois-light-col-lg-offset-10.du-bois-light-col-rtl {
      margin-right: 41.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-11.du-bois-light-col-rtl {
      right: 45.83333333%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-11.du-bois-light-col-rtl {
      right: auto;
      left: 45.83333333%;
    }
    .du-bois-light-col-lg-offset-11.du-bois-light-col-rtl {
      margin-right: 45.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-12.du-bois-light-col-rtl {
      right: 50%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-12.du-bois-light-col-rtl {
      right: auto;
      left: 50%;
    }
    .du-bois-light-col-lg-offset-12.du-bois-light-col-rtl {
      margin-right: 50%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-13.du-bois-light-col-rtl {
      right: 54.16666667%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-13.du-bois-light-col-rtl {
      right: auto;
      left: 54.16666667%;
    }
    .du-bois-light-col-lg-offset-13.du-bois-light-col-rtl {
      margin-right: 54.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-14.du-bois-light-col-rtl {
      right: 58.33333333%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-14.du-bois-light-col-rtl {
      right: auto;
      left: 58.33333333%;
    }
    .du-bois-light-col-lg-offset-14.du-bois-light-col-rtl {
      margin-right: 58.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-15.du-bois-light-col-rtl {
      right: 62.5%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-15.du-bois-light-col-rtl {
      right: auto;
      left: 62.5%;
    }
    .du-bois-light-col-lg-offset-15.du-bois-light-col-rtl {
      margin-right: 62.5%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-16.du-bois-light-col-rtl {
      right: 66.66666667%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-16.du-bois-light-col-rtl {
      right: auto;
      left: 66.66666667%;
    }
    .du-bois-light-col-lg-offset-16.du-bois-light-col-rtl {
      margin-right: 66.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-17.du-bois-light-col-rtl {
      right: 70.83333333%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-17.du-bois-light-col-rtl {
      right: auto;
      left: 70.83333333%;
    }
    .du-bois-light-col-lg-offset-17.du-bois-light-col-rtl {
      margin-right: 70.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-18.du-bois-light-col-rtl {
      right: 75%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-18.du-bois-light-col-rtl {
      right: auto;
      left: 75%;
    }
    .du-bois-light-col-lg-offset-18.du-bois-light-col-rtl {
      margin-right: 75%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-19.du-bois-light-col-rtl {
      right: 79.16666667%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-19.du-bois-light-col-rtl {
      right: auto;
      left: 79.16666667%;
    }
    .du-bois-light-col-lg-offset-19.du-bois-light-col-rtl {
      margin-right: 79.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-20.du-bois-light-col-rtl {
      right: 83.33333333%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-20.du-bois-light-col-rtl {
      right: auto;
      left: 83.33333333%;
    }
    .du-bois-light-col-lg-offset-20.du-bois-light-col-rtl {
      margin-right: 83.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-21.du-bois-light-col-rtl {
      right: 87.5%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-21.du-bois-light-col-rtl {
      right: auto;
      left: 87.5%;
    }
    .du-bois-light-col-lg-offset-21.du-bois-light-col-rtl {
      margin-right: 87.5%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-22.du-bois-light-col-rtl {
      right: 91.66666667%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-22.du-bois-light-col-rtl {
      right: auto;
      left: 91.66666667%;
    }
    .du-bois-light-col-lg-offset-22.du-bois-light-col-rtl {
      margin-right: 91.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-23.du-bois-light-col-rtl {
      right: 95.83333333%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-23.du-bois-light-col-rtl {
      right: auto;
      left: 95.83333333%;
    }
    .du-bois-light-col-lg-offset-23.du-bois-light-col-rtl {
      margin-right: 95.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-lg-push-24.du-bois-light-col-rtl {
      right: 100%;
      left: auto;
    }
    .du-bois-light-col-lg-pull-24.du-bois-light-col-rtl {
      right: auto;
      left: 100%;
    }
    .du-bois-light-col-lg-offset-24.du-bois-light-col-rtl {
      margin-right: 100%;
      margin-left: 0;
    }
  }
  @media (min-width: 1200px) {
    .du-bois-light-col-xl-24 {
      display: block;
      flex: 0 0 100%;
      max-width: 100%;
    }
    .du-bois-light-col-xl-push-24 {
      left: 100%;
    }
    .du-bois-light-col-xl-pull-24 {
      right: 100%;
    }
    .du-bois-light-col-xl-offset-24 {
      margin-left: 100%;
    }
    .du-bois-light-col-xl-order-24 {
      order: 24;
    }
    .du-bois-light-col-xl-23 {
      display: block;
      flex: 0 0 95.83333333%;
      max-width: 95.83333333%;
    }
    .du-bois-light-col-xl-push-23 {
      left: 95.83333333%;
    }
    .du-bois-light-col-xl-pull-23 {
      right: 95.83333333%;
    }
    .du-bois-light-col-xl-offset-23 {
      margin-left: 95.83333333%;
    }
    .du-bois-light-col-xl-order-23 {
      order: 23;
    }
    .du-bois-light-col-xl-22 {
      display: block;
      flex: 0 0 91.66666667%;
      max-width: 91.66666667%;
    }
    .du-bois-light-col-xl-push-22 {
      left: 91.66666667%;
    }
    .du-bois-light-col-xl-pull-22 {
      right: 91.66666667%;
    }
    .du-bois-light-col-xl-offset-22 {
      margin-left: 91.66666667%;
    }
    .du-bois-light-col-xl-order-22 {
      order: 22;
    }
    .du-bois-light-col-xl-21 {
      display: block;
      flex: 0 0 87.5%;
      max-width: 87.5%;
    }
    .du-bois-light-col-xl-push-21 {
      left: 87.5%;
    }
    .du-bois-light-col-xl-pull-21 {
      right: 87.5%;
    }
    .du-bois-light-col-xl-offset-21 {
      margin-left: 87.5%;
    }
    .du-bois-light-col-xl-order-21 {
      order: 21;
    }
    .du-bois-light-col-xl-20 {
      display: block;
      flex: 0 0 83.33333333%;
      max-width: 83.33333333%;
    }
    .du-bois-light-col-xl-push-20 {
      left: 83.33333333%;
    }
    .du-bois-light-col-xl-pull-20 {
      right: 83.33333333%;
    }
    .du-bois-light-col-xl-offset-20 {
      margin-left: 83.33333333%;
    }
    .du-bois-light-col-xl-order-20 {
      order: 20;
    }
    .du-bois-light-col-xl-19 {
      display: block;
      flex: 0 0 79.16666667%;
      max-width: 79.16666667%;
    }
    .du-bois-light-col-xl-push-19 {
      left: 79.16666667%;
    }
    .du-bois-light-col-xl-pull-19 {
      right: 79.16666667%;
    }
    .du-bois-light-col-xl-offset-19 {
      margin-left: 79.16666667%;
    }
    .du-bois-light-col-xl-order-19 {
      order: 19;
    }
    .du-bois-light-col-xl-18 {
      display: block;
      flex: 0 0 75%;
      max-width: 75%;
    }
    .du-bois-light-col-xl-push-18 {
      left: 75%;
    }
    .du-bois-light-col-xl-pull-18 {
      right: 75%;
    }
    .du-bois-light-col-xl-offset-18 {
      margin-left: 75%;
    }
    .du-bois-light-col-xl-order-18 {
      order: 18;
    }
    .du-bois-light-col-xl-17 {
      display: block;
      flex: 0 0 70.83333333%;
      max-width: 70.83333333%;
    }
    .du-bois-light-col-xl-push-17 {
      left: 70.83333333%;
    }
    .du-bois-light-col-xl-pull-17 {
      right: 70.83333333%;
    }
    .du-bois-light-col-xl-offset-17 {
      margin-left: 70.83333333%;
    }
    .du-bois-light-col-xl-order-17 {
      order: 17;
    }
    .du-bois-light-col-xl-16 {
      display: block;
      flex: 0 0 66.66666667%;
      max-width: 66.66666667%;
    }
    .du-bois-light-col-xl-push-16 {
      left: 66.66666667%;
    }
    .du-bois-light-col-xl-pull-16 {
      right: 66.66666667%;
    }
    .du-bois-light-col-xl-offset-16 {
      margin-left: 66.66666667%;
    }
    .du-bois-light-col-xl-order-16 {
      order: 16;
    }
    .du-bois-light-col-xl-15 {
      display: block;
      flex: 0 0 62.5%;
      max-width: 62.5%;
    }
    .du-bois-light-col-xl-push-15 {
      left: 62.5%;
    }
    .du-bois-light-col-xl-pull-15 {
      right: 62.5%;
    }
    .du-bois-light-col-xl-offset-15 {
      margin-left: 62.5%;
    }
    .du-bois-light-col-xl-order-15 {
      order: 15;
    }
    .du-bois-light-col-xl-14 {
      display: block;
      flex: 0 0 58.33333333%;
      max-width: 58.33333333%;
    }
    .du-bois-light-col-xl-push-14 {
      left: 58.33333333%;
    }
    .du-bois-light-col-xl-pull-14 {
      right: 58.33333333%;
    }
    .du-bois-light-col-xl-offset-14 {
      margin-left: 58.33333333%;
    }
    .du-bois-light-col-xl-order-14 {
      order: 14;
    }
    .du-bois-light-col-xl-13 {
      display: block;
      flex: 0 0 54.16666667%;
      max-width: 54.16666667%;
    }
    .du-bois-light-col-xl-push-13 {
      left: 54.16666667%;
    }
    .du-bois-light-col-xl-pull-13 {
      right: 54.16666667%;
    }
    .du-bois-light-col-xl-offset-13 {
      margin-left: 54.16666667%;
    }
    .du-bois-light-col-xl-order-13 {
      order: 13;
    }
    .du-bois-light-col-xl-12 {
      display: block;
      flex: 0 0 50%;
      max-width: 50%;
    }
    .du-bois-light-col-xl-push-12 {
      left: 50%;
    }
    .du-bois-light-col-xl-pull-12 {
      right: 50%;
    }
    .du-bois-light-col-xl-offset-12 {
      margin-left: 50%;
    }
    .du-bois-light-col-xl-order-12 {
      order: 12;
    }
    .du-bois-light-col-xl-11 {
      display: block;
      flex: 0 0 45.83333333%;
      max-width: 45.83333333%;
    }
    .du-bois-light-col-xl-push-11 {
      left: 45.83333333%;
    }
    .du-bois-light-col-xl-pull-11 {
      right: 45.83333333%;
    }
    .du-bois-light-col-xl-offset-11 {
      margin-left: 45.83333333%;
    }
    .du-bois-light-col-xl-order-11 {
      order: 11;
    }
    .du-bois-light-col-xl-10 {
      display: block;
      flex: 0 0 41.66666667%;
      max-width: 41.66666667%;
    }
    .du-bois-light-col-xl-push-10 {
      left: 41.66666667%;
    }
    .du-bois-light-col-xl-pull-10 {
      right: 41.66666667%;
    }
    .du-bois-light-col-xl-offset-10 {
      margin-left: 41.66666667%;
    }
    .du-bois-light-col-xl-order-10 {
      order: 10;
    }
    .du-bois-light-col-xl-9 {
      display: block;
      flex: 0 0 37.5%;
      max-width: 37.5%;
    }
    .du-bois-light-col-xl-push-9 {
      left: 37.5%;
    }
    .du-bois-light-col-xl-pull-9 {
      right: 37.5%;
    }
    .du-bois-light-col-xl-offset-9 {
      margin-left: 37.5%;
    }
    .du-bois-light-col-xl-order-9 {
      order: 9;
    }
    .du-bois-light-col-xl-8 {
      display: block;
      flex: 0 0 33.33333333%;
      max-width: 33.33333333%;
    }
    .du-bois-light-col-xl-push-8 {
      left: 33.33333333%;
    }
    .du-bois-light-col-xl-pull-8 {
      right: 33.33333333%;
    }
    .du-bois-light-col-xl-offset-8 {
      margin-left: 33.33333333%;
    }
    .du-bois-light-col-xl-order-8 {
      order: 8;
    }
    .du-bois-light-col-xl-7 {
      display: block;
      flex: 0 0 29.16666667%;
      max-width: 29.16666667%;
    }
    .du-bois-light-col-xl-push-7 {
      left: 29.16666667%;
    }
    .du-bois-light-col-xl-pull-7 {
      right: 29.16666667%;
    }
    .du-bois-light-col-xl-offset-7 {
      margin-left: 29.16666667%;
    }
    .du-bois-light-col-xl-order-7 {
      order: 7;
    }
    .du-bois-light-col-xl-6 {
      display: block;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .du-bois-light-col-xl-push-6 {
      left: 25%;
    }
    .du-bois-light-col-xl-pull-6 {
      right: 25%;
    }
    .du-bois-light-col-xl-offset-6 {
      margin-left: 25%;
    }
    .du-bois-light-col-xl-order-6 {
      order: 6;
    }
    .du-bois-light-col-xl-5 {
      display: block;
      flex: 0 0 20.83333333%;
      max-width: 20.83333333%;
    }
    .du-bois-light-col-xl-push-5 {
      left: 20.83333333%;
    }
    .du-bois-light-col-xl-pull-5 {
      right: 20.83333333%;
    }
    .du-bois-light-col-xl-offset-5 {
      margin-left: 20.83333333%;
    }
    .du-bois-light-col-xl-order-5 {
      order: 5;
    }
    .du-bois-light-col-xl-4 {
      display: block;
      flex: 0 0 16.66666667%;
      max-width: 16.66666667%;
    }
    .du-bois-light-col-xl-push-4 {
      left: 16.66666667%;
    }
    .du-bois-light-col-xl-pull-4 {
      right: 16.66666667%;
    }
    .du-bois-light-col-xl-offset-4 {
      margin-left: 16.66666667%;
    }
    .du-bois-light-col-xl-order-4 {
      order: 4;
    }
    .du-bois-light-col-xl-3 {
      display: block;
      flex: 0 0 12.5%;
      max-width: 12.5%;
    }
    .du-bois-light-col-xl-push-3 {
      left: 12.5%;
    }
    .du-bois-light-col-xl-pull-3 {
      right: 12.5%;
    }
    .du-bois-light-col-xl-offset-3 {
      margin-left: 12.5%;
    }
    .du-bois-light-col-xl-order-3 {
      order: 3;
    }
    .du-bois-light-col-xl-2 {
      display: block;
      flex: 0 0 8.33333333%;
      max-width: 8.33333333%;
    }
    .du-bois-light-col-xl-push-2 {
      left: 8.33333333%;
    }
    .du-bois-light-col-xl-pull-2 {
      right: 8.33333333%;
    }
    .du-bois-light-col-xl-offset-2 {
      margin-left: 8.33333333%;
    }
    .du-bois-light-col-xl-order-2 {
      order: 2;
    }
    .du-bois-light-col-xl-1 {
      display: block;
      flex: 0 0 4.16666667%;
      max-width: 4.16666667%;
    }
    .du-bois-light-col-xl-push-1 {
      left: 4.16666667%;
    }
    .du-bois-light-col-xl-pull-1 {
      right: 4.16666667%;
    }
    .du-bois-light-col-xl-offset-1 {
      margin-left: 4.16666667%;
    }
    .du-bois-light-col-xl-order-1 {
      order: 1;
    }
    .du-bois-light-col-xl-0 {
      display: none;
    }
    .du-bois-light-col-push-0 {
      left: auto;
    }
    .du-bois-light-col-pull-0 {
      right: auto;
    }
    .du-bois-light-col-xl-push-0 {
      left: auto;
    }
    .du-bois-light-col-xl-pull-0 {
      right: auto;
    }
    .du-bois-light-col-xl-offset-0 {
      margin-left: 0;
    }
    .du-bois-light-col-xl-order-0 {
      order: 0;
    }
    .du-bois-light-col-push-0.du-bois-light-col-rtl {
      right: auto;
    }
    .du-bois-light-col-pull-0.du-bois-light-col-rtl {
      left: auto;
    }
    .du-bois-light-col-xl-push-0.du-bois-light-col-rtl {
      right: auto;
    }
    .du-bois-light-col-xl-pull-0.du-bois-light-col-rtl {
      left: auto;
    }
    .du-bois-light-col-xl-offset-0.du-bois-light-col-rtl {
      margin-right: 0;
    }
    .du-bois-light-col-xl-push-1.du-bois-light-col-rtl {
      right: 4.16666667%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-1.du-bois-light-col-rtl {
      right: auto;
      left: 4.16666667%;
    }
    .du-bois-light-col-xl-offset-1.du-bois-light-col-rtl {
      margin-right: 4.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-2.du-bois-light-col-rtl {
      right: 8.33333333%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-2.du-bois-light-col-rtl {
      right: auto;
      left: 8.33333333%;
    }
    .du-bois-light-col-xl-offset-2.du-bois-light-col-rtl {
      margin-right: 8.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-3.du-bois-light-col-rtl {
      right: 12.5%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-3.du-bois-light-col-rtl {
      right: auto;
      left: 12.5%;
    }
    .du-bois-light-col-xl-offset-3.du-bois-light-col-rtl {
      margin-right: 12.5%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-4.du-bois-light-col-rtl {
      right: 16.66666667%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-4.du-bois-light-col-rtl {
      right: auto;
      left: 16.66666667%;
    }
    .du-bois-light-col-xl-offset-4.du-bois-light-col-rtl {
      margin-right: 16.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-5.du-bois-light-col-rtl {
      right: 20.83333333%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-5.du-bois-light-col-rtl {
      right: auto;
      left: 20.83333333%;
    }
    .du-bois-light-col-xl-offset-5.du-bois-light-col-rtl {
      margin-right: 20.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-6.du-bois-light-col-rtl {
      right: 25%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-6.du-bois-light-col-rtl {
      right: auto;
      left: 25%;
    }
    .du-bois-light-col-xl-offset-6.du-bois-light-col-rtl {
      margin-right: 25%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-7.du-bois-light-col-rtl {
      right: 29.16666667%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-7.du-bois-light-col-rtl {
      right: auto;
      left: 29.16666667%;
    }
    .du-bois-light-col-xl-offset-7.du-bois-light-col-rtl {
      margin-right: 29.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-8.du-bois-light-col-rtl {
      right: 33.33333333%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-8.du-bois-light-col-rtl {
      right: auto;
      left: 33.33333333%;
    }
    .du-bois-light-col-xl-offset-8.du-bois-light-col-rtl {
      margin-right: 33.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-9.du-bois-light-col-rtl {
      right: 37.5%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-9.du-bois-light-col-rtl {
      right: auto;
      left: 37.5%;
    }
    .du-bois-light-col-xl-offset-9.du-bois-light-col-rtl {
      margin-right: 37.5%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-10.du-bois-light-col-rtl {
      right: 41.66666667%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-10.du-bois-light-col-rtl {
      right: auto;
      left: 41.66666667%;
    }
    .du-bois-light-col-xl-offset-10.du-bois-light-col-rtl {
      margin-right: 41.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-11.du-bois-light-col-rtl {
      right: 45.83333333%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-11.du-bois-light-col-rtl {
      right: auto;
      left: 45.83333333%;
    }
    .du-bois-light-col-xl-offset-11.du-bois-light-col-rtl {
      margin-right: 45.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-12.du-bois-light-col-rtl {
      right: 50%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-12.du-bois-light-col-rtl {
      right: auto;
      left: 50%;
    }
    .du-bois-light-col-xl-offset-12.du-bois-light-col-rtl {
      margin-right: 50%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-13.du-bois-light-col-rtl {
      right: 54.16666667%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-13.du-bois-light-col-rtl {
      right: auto;
      left: 54.16666667%;
    }
    .du-bois-light-col-xl-offset-13.du-bois-light-col-rtl {
      margin-right: 54.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-14.du-bois-light-col-rtl {
      right: 58.33333333%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-14.du-bois-light-col-rtl {
      right: auto;
      left: 58.33333333%;
    }
    .du-bois-light-col-xl-offset-14.du-bois-light-col-rtl {
      margin-right: 58.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-15.du-bois-light-col-rtl {
      right: 62.5%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-15.du-bois-light-col-rtl {
      right: auto;
      left: 62.5%;
    }
    .du-bois-light-col-xl-offset-15.du-bois-light-col-rtl {
      margin-right: 62.5%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-16.du-bois-light-col-rtl {
      right: 66.66666667%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-16.du-bois-light-col-rtl {
      right: auto;
      left: 66.66666667%;
    }
    .du-bois-light-col-xl-offset-16.du-bois-light-col-rtl {
      margin-right: 66.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-17.du-bois-light-col-rtl {
      right: 70.83333333%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-17.du-bois-light-col-rtl {
      right: auto;
      left: 70.83333333%;
    }
    .du-bois-light-col-xl-offset-17.du-bois-light-col-rtl {
      margin-right: 70.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-18.du-bois-light-col-rtl {
      right: 75%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-18.du-bois-light-col-rtl {
      right: auto;
      left: 75%;
    }
    .du-bois-light-col-xl-offset-18.du-bois-light-col-rtl {
      margin-right: 75%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-19.du-bois-light-col-rtl {
      right: 79.16666667%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-19.du-bois-light-col-rtl {
      right: auto;
      left: 79.16666667%;
    }
    .du-bois-light-col-xl-offset-19.du-bois-light-col-rtl {
      margin-right: 79.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-20.du-bois-light-col-rtl {
      right: 83.33333333%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-20.du-bois-light-col-rtl {
      right: auto;
      left: 83.33333333%;
    }
    .du-bois-light-col-xl-offset-20.du-bois-light-col-rtl {
      margin-right: 83.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-21.du-bois-light-col-rtl {
      right: 87.5%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-21.du-bois-light-col-rtl {
      right: auto;
      left: 87.5%;
    }
    .du-bois-light-col-xl-offset-21.du-bois-light-col-rtl {
      margin-right: 87.5%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-22.du-bois-light-col-rtl {
      right: 91.66666667%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-22.du-bois-light-col-rtl {
      right: auto;
      left: 91.66666667%;
    }
    .du-bois-light-col-xl-offset-22.du-bois-light-col-rtl {
      margin-right: 91.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-23.du-bois-light-col-rtl {
      right: 95.83333333%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-23.du-bois-light-col-rtl {
      right: auto;
      left: 95.83333333%;
    }
    .du-bois-light-col-xl-offset-23.du-bois-light-col-rtl {
      margin-right: 95.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-xl-push-24.du-bois-light-col-rtl {
      right: 100%;
      left: auto;
    }
    .du-bois-light-col-xl-pull-24.du-bois-light-col-rtl {
      right: auto;
      left: 100%;
    }
    .du-bois-light-col-xl-offset-24.du-bois-light-col-rtl {
      margin-right: 100%;
      margin-left: 0;
    }
  }
  @media (min-width: 1600px) {
    .du-bois-light-col-xxl-24 {
      display: block;
      flex: 0 0 100%;
      max-width: 100%;
    }
    .du-bois-light-col-xxl-push-24 {
      left: 100%;
    }
    .du-bois-light-col-xxl-pull-24 {
      right: 100%;
    }
    .du-bois-light-col-xxl-offset-24 {
      margin-left: 100%;
    }
    .du-bois-light-col-xxl-order-24 {
      order: 24;
    }
    .du-bois-light-col-xxl-23 {
      display: block;
      flex: 0 0 95.83333333%;
      max-width: 95.83333333%;
    }
    .du-bois-light-col-xxl-push-23 {
      left: 95.83333333%;
    }
    .du-bois-light-col-xxl-pull-23 {
      right: 95.83333333%;
    }
    .du-bois-light-col-xxl-offset-23 {
      margin-left: 95.83333333%;
    }
    .du-bois-light-col-xxl-order-23 {
      order: 23;
    }
    .du-bois-light-col-xxl-22 {
      display: block;
      flex: 0 0 91.66666667%;
      max-width: 91.66666667%;
    }
    .du-bois-light-col-xxl-push-22 {
      left: 91.66666667%;
    }
    .du-bois-light-col-xxl-pull-22 {
      right: 91.66666667%;
    }
    .du-bois-light-col-xxl-offset-22 {
      margin-left: 91.66666667%;
    }
    .du-bois-light-col-xxl-order-22 {
      order: 22;
    }
    .du-bois-light-col-xxl-21 {
      display: block;
      flex: 0 0 87.5%;
      max-width: 87.5%;
    }
    .du-bois-light-col-xxl-push-21 {
      left: 87.5%;
    }
    .du-bois-light-col-xxl-pull-21 {
      right: 87.5%;
    }
    .du-bois-light-col-xxl-offset-21 {
      margin-left: 87.5%;
    }
    .du-bois-light-col-xxl-order-21 {
      order: 21;
    }
    .du-bois-light-col-xxl-20 {
      display: block;
      flex: 0 0 83.33333333%;
      max-width: 83.33333333%;
    }
    .du-bois-light-col-xxl-push-20 {
      left: 83.33333333%;
    }
    .du-bois-light-col-xxl-pull-20 {
      right: 83.33333333%;
    }
    .du-bois-light-col-xxl-offset-20 {
      margin-left: 83.33333333%;
    }
    .du-bois-light-col-xxl-order-20 {
      order: 20;
    }
    .du-bois-light-col-xxl-19 {
      display: block;
      flex: 0 0 79.16666667%;
      max-width: 79.16666667%;
    }
    .du-bois-light-col-xxl-push-19 {
      left: 79.16666667%;
    }
    .du-bois-light-col-xxl-pull-19 {
      right: 79.16666667%;
    }
    .du-bois-light-col-xxl-offset-19 {
      margin-left: 79.16666667%;
    }
    .du-bois-light-col-xxl-order-19 {
      order: 19;
    }
    .du-bois-light-col-xxl-18 {
      display: block;
      flex: 0 0 75%;
      max-width: 75%;
    }
    .du-bois-light-col-xxl-push-18 {
      left: 75%;
    }
    .du-bois-light-col-xxl-pull-18 {
      right: 75%;
    }
    .du-bois-light-col-xxl-offset-18 {
      margin-left: 75%;
    }
    .du-bois-light-col-xxl-order-18 {
      order: 18;
    }
    .du-bois-light-col-xxl-17 {
      display: block;
      flex: 0 0 70.83333333%;
      max-width: 70.83333333%;
    }
    .du-bois-light-col-xxl-push-17 {
      left: 70.83333333%;
    }
    .du-bois-light-col-xxl-pull-17 {
      right: 70.83333333%;
    }
    .du-bois-light-col-xxl-offset-17 {
      margin-left: 70.83333333%;
    }
    .du-bois-light-col-xxl-order-17 {
      order: 17;
    }
    .du-bois-light-col-xxl-16 {
      display: block;
      flex: 0 0 66.66666667%;
      max-width: 66.66666667%;
    }
    .du-bois-light-col-xxl-push-16 {
      left: 66.66666667%;
    }
    .du-bois-light-col-xxl-pull-16 {
      right: 66.66666667%;
    }
    .du-bois-light-col-xxl-offset-16 {
      margin-left: 66.66666667%;
    }
    .du-bois-light-col-xxl-order-16 {
      order: 16;
    }
    .du-bois-light-col-xxl-15 {
      display: block;
      flex: 0 0 62.5%;
      max-width: 62.5%;
    }
    .du-bois-light-col-xxl-push-15 {
      left: 62.5%;
    }
    .du-bois-light-col-xxl-pull-15 {
      right: 62.5%;
    }
    .du-bois-light-col-xxl-offset-15 {
      margin-left: 62.5%;
    }
    .du-bois-light-col-xxl-order-15 {
      order: 15;
    }
    .du-bois-light-col-xxl-14 {
      display: block;
      flex: 0 0 58.33333333%;
      max-width: 58.33333333%;
    }
    .du-bois-light-col-xxl-push-14 {
      left: 58.33333333%;
    }
    .du-bois-light-col-xxl-pull-14 {
      right: 58.33333333%;
    }
    .du-bois-light-col-xxl-offset-14 {
      margin-left: 58.33333333%;
    }
    .du-bois-light-col-xxl-order-14 {
      order: 14;
    }
    .du-bois-light-col-xxl-13 {
      display: block;
      flex: 0 0 54.16666667%;
      max-width: 54.16666667%;
    }
    .du-bois-light-col-xxl-push-13 {
      left: 54.16666667%;
    }
    .du-bois-light-col-xxl-pull-13 {
      right: 54.16666667%;
    }
    .du-bois-light-col-xxl-offset-13 {
      margin-left: 54.16666667%;
    }
    .du-bois-light-col-xxl-order-13 {
      order: 13;
    }
    .du-bois-light-col-xxl-12 {
      display: block;
      flex: 0 0 50%;
      max-width: 50%;
    }
    .du-bois-light-col-xxl-push-12 {
      left: 50%;
    }
    .du-bois-light-col-xxl-pull-12 {
      right: 50%;
    }
    .du-bois-light-col-xxl-offset-12 {
      margin-left: 50%;
    }
    .du-bois-light-col-xxl-order-12 {
      order: 12;
    }
    .du-bois-light-col-xxl-11 {
      display: block;
      flex: 0 0 45.83333333%;
      max-width: 45.83333333%;
    }
    .du-bois-light-col-xxl-push-11 {
      left: 45.83333333%;
    }
    .du-bois-light-col-xxl-pull-11 {
      right: 45.83333333%;
    }
    .du-bois-light-col-xxl-offset-11 {
      margin-left: 45.83333333%;
    }
    .du-bois-light-col-xxl-order-11 {
      order: 11;
    }
    .du-bois-light-col-xxl-10 {
      display: block;
      flex: 0 0 41.66666667%;
      max-width: 41.66666667%;
    }
    .du-bois-light-col-xxl-push-10 {
      left: 41.66666667%;
    }
    .du-bois-light-col-xxl-pull-10 {
      right: 41.66666667%;
    }
    .du-bois-light-col-xxl-offset-10 {
      margin-left: 41.66666667%;
    }
    .du-bois-light-col-xxl-order-10 {
      order: 10;
    }
    .du-bois-light-col-xxl-9 {
      display: block;
      flex: 0 0 37.5%;
      max-width: 37.5%;
    }
    .du-bois-light-col-xxl-push-9 {
      left: 37.5%;
    }
    .du-bois-light-col-xxl-pull-9 {
      right: 37.5%;
    }
    .du-bois-light-col-xxl-offset-9 {
      margin-left: 37.5%;
    }
    .du-bois-light-col-xxl-order-9 {
      order: 9;
    }
    .du-bois-light-col-xxl-8 {
      display: block;
      flex: 0 0 33.33333333%;
      max-width: 33.33333333%;
    }
    .du-bois-light-col-xxl-push-8 {
      left: 33.33333333%;
    }
    .du-bois-light-col-xxl-pull-8 {
      right: 33.33333333%;
    }
    .du-bois-light-col-xxl-offset-8 {
      margin-left: 33.33333333%;
    }
    .du-bois-light-col-xxl-order-8 {
      order: 8;
    }
    .du-bois-light-col-xxl-7 {
      display: block;
      flex: 0 0 29.16666667%;
      max-width: 29.16666667%;
    }
    .du-bois-light-col-xxl-push-7 {
      left: 29.16666667%;
    }
    .du-bois-light-col-xxl-pull-7 {
      right: 29.16666667%;
    }
    .du-bois-light-col-xxl-offset-7 {
      margin-left: 29.16666667%;
    }
    .du-bois-light-col-xxl-order-7 {
      order: 7;
    }
    .du-bois-light-col-xxl-6 {
      display: block;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .du-bois-light-col-xxl-push-6 {
      left: 25%;
    }
    .du-bois-light-col-xxl-pull-6 {
      right: 25%;
    }
    .du-bois-light-col-xxl-offset-6 {
      margin-left: 25%;
    }
    .du-bois-light-col-xxl-order-6 {
      order: 6;
    }
    .du-bois-light-col-xxl-5 {
      display: block;
      flex: 0 0 20.83333333%;
      max-width: 20.83333333%;
    }
    .du-bois-light-col-xxl-push-5 {
      left: 20.83333333%;
    }
    .du-bois-light-col-xxl-pull-5 {
      right: 20.83333333%;
    }
    .du-bois-light-col-xxl-offset-5 {
      margin-left: 20.83333333%;
    }
    .du-bois-light-col-xxl-order-5 {
      order: 5;
    }
    .du-bois-light-col-xxl-4 {
      display: block;
      flex: 0 0 16.66666667%;
      max-width: 16.66666667%;
    }
    .du-bois-light-col-xxl-push-4 {
      left: 16.66666667%;
    }
    .du-bois-light-col-xxl-pull-4 {
      right: 16.66666667%;
    }
    .du-bois-light-col-xxl-offset-4 {
      margin-left: 16.66666667%;
    }
    .du-bois-light-col-xxl-order-4 {
      order: 4;
    }
    .du-bois-light-col-xxl-3 {
      display: block;
      flex: 0 0 12.5%;
      max-width: 12.5%;
    }
    .du-bois-light-col-xxl-push-3 {
      left: 12.5%;
    }
    .du-bois-light-col-xxl-pull-3 {
      right: 12.5%;
    }
    .du-bois-light-col-xxl-offset-3 {
      margin-left: 12.5%;
    }
    .du-bois-light-col-xxl-order-3 {
      order: 3;
    }
    .du-bois-light-col-xxl-2 {
      display: block;
      flex: 0 0 8.33333333%;
      max-width: 8.33333333%;
    }
    .du-bois-light-col-xxl-push-2 {
      left: 8.33333333%;
    }
    .du-bois-light-col-xxl-pull-2 {
      right: 8.33333333%;
    }
    .du-bois-light-col-xxl-offset-2 {
      margin-left: 8.33333333%;
    }
    .du-bois-light-col-xxl-order-2 {
      order: 2;
    }
    .du-bois-light-col-xxl-1 {
      display: block;
      flex: 0 0 4.16666667%;
      max-width: 4.16666667%;
    }
    .du-bois-light-col-xxl-push-1 {
      left: 4.16666667%;
    }
    .du-bois-light-col-xxl-pull-1 {
      right: 4.16666667%;
    }
    .du-bois-light-col-xxl-offset-1 {
      margin-left: 4.16666667%;
    }
    .du-bois-light-col-xxl-order-1 {
      order: 1;
    }
    .du-bois-light-col-xxl-0 {
      display: none;
    }
    .du-bois-light-col-push-0 {
      left: auto;
    }
    .du-bois-light-col-pull-0 {
      right: auto;
    }
    .du-bois-light-col-xxl-push-0 {
      left: auto;
    }
    .du-bois-light-col-xxl-pull-0 {
      right: auto;
    }
    .du-bois-light-col-xxl-offset-0 {
      margin-left: 0;
    }
    .du-bois-light-col-xxl-order-0 {
      order: 0;
    }
    .du-bois-light-col-push-0.du-bois-light-col-rtl {
      right: auto;
    }
    .du-bois-light-col-pull-0.du-bois-light-col-rtl {
      left: auto;
    }
    .du-bois-light-col-xxl-push-0.du-bois-light-col-rtl {
      right: auto;
    }
    .du-bois-light-col-xxl-pull-0.du-bois-light-col-rtl {
      left: auto;
    }
    .du-bois-light-col-xxl-offset-0.du-bois-light-col-rtl {
      margin-right: 0;
    }
    .du-bois-light-col-xxl-push-1.du-bois-light-col-rtl {
      right: 4.16666667%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-1.du-bois-light-col-rtl {
      right: auto;
      left: 4.16666667%;
    }
    .du-bois-light-col-xxl-offset-1.du-bois-light-col-rtl {
      margin-right: 4.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-2.du-bois-light-col-rtl {
      right: 8.33333333%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-2.du-bois-light-col-rtl {
      right: auto;
      left: 8.33333333%;
    }
    .du-bois-light-col-xxl-offset-2.du-bois-light-col-rtl {
      margin-right: 8.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-3.du-bois-light-col-rtl {
      right: 12.5%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-3.du-bois-light-col-rtl {
      right: auto;
      left: 12.5%;
    }
    .du-bois-light-col-xxl-offset-3.du-bois-light-col-rtl {
      margin-right: 12.5%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-4.du-bois-light-col-rtl {
      right: 16.66666667%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-4.du-bois-light-col-rtl {
      right: auto;
      left: 16.66666667%;
    }
    .du-bois-light-col-xxl-offset-4.du-bois-light-col-rtl {
      margin-right: 16.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-5.du-bois-light-col-rtl {
      right: 20.83333333%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-5.du-bois-light-col-rtl {
      right: auto;
      left: 20.83333333%;
    }
    .du-bois-light-col-xxl-offset-5.du-bois-light-col-rtl {
      margin-right: 20.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-6.du-bois-light-col-rtl {
      right: 25%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-6.du-bois-light-col-rtl {
      right: auto;
      left: 25%;
    }
    .du-bois-light-col-xxl-offset-6.du-bois-light-col-rtl {
      margin-right: 25%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-7.du-bois-light-col-rtl {
      right: 29.16666667%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-7.du-bois-light-col-rtl {
      right: auto;
      left: 29.16666667%;
    }
    .du-bois-light-col-xxl-offset-7.du-bois-light-col-rtl {
      margin-right: 29.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-8.du-bois-light-col-rtl {
      right: 33.33333333%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-8.du-bois-light-col-rtl {
      right: auto;
      left: 33.33333333%;
    }
    .du-bois-light-col-xxl-offset-8.du-bois-light-col-rtl {
      margin-right: 33.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-9.du-bois-light-col-rtl {
      right: 37.5%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-9.du-bois-light-col-rtl {
      right: auto;
      left: 37.5%;
    }
    .du-bois-light-col-xxl-offset-9.du-bois-light-col-rtl {
      margin-right: 37.5%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-10.du-bois-light-col-rtl {
      right: 41.66666667%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-10.du-bois-light-col-rtl {
      right: auto;
      left: 41.66666667%;
    }
    .du-bois-light-col-xxl-offset-10.du-bois-light-col-rtl {
      margin-right: 41.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-11.du-bois-light-col-rtl {
      right: 45.83333333%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-11.du-bois-light-col-rtl {
      right: auto;
      left: 45.83333333%;
    }
    .du-bois-light-col-xxl-offset-11.du-bois-light-col-rtl {
      margin-right: 45.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-12.du-bois-light-col-rtl {
      right: 50%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-12.du-bois-light-col-rtl {
      right: auto;
      left: 50%;
    }
    .du-bois-light-col-xxl-offset-12.du-bois-light-col-rtl {
      margin-right: 50%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-13.du-bois-light-col-rtl {
      right: 54.16666667%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-13.du-bois-light-col-rtl {
      right: auto;
      left: 54.16666667%;
    }
    .du-bois-light-col-xxl-offset-13.du-bois-light-col-rtl {
      margin-right: 54.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-14.du-bois-light-col-rtl {
      right: 58.33333333%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-14.du-bois-light-col-rtl {
      right: auto;
      left: 58.33333333%;
    }
    .du-bois-light-col-xxl-offset-14.du-bois-light-col-rtl {
      margin-right: 58.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-15.du-bois-light-col-rtl {
      right: 62.5%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-15.du-bois-light-col-rtl {
      right: auto;
      left: 62.5%;
    }
    .du-bois-light-col-xxl-offset-15.du-bois-light-col-rtl {
      margin-right: 62.5%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-16.du-bois-light-col-rtl {
      right: 66.66666667%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-16.du-bois-light-col-rtl {
      right: auto;
      left: 66.66666667%;
    }
    .du-bois-light-col-xxl-offset-16.du-bois-light-col-rtl {
      margin-right: 66.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-17.du-bois-light-col-rtl {
      right: 70.83333333%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-17.du-bois-light-col-rtl {
      right: auto;
      left: 70.83333333%;
    }
    .du-bois-light-col-xxl-offset-17.du-bois-light-col-rtl {
      margin-right: 70.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-18.du-bois-light-col-rtl {
      right: 75%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-18.du-bois-light-col-rtl {
      right: auto;
      left: 75%;
    }
    .du-bois-light-col-xxl-offset-18.du-bois-light-col-rtl {
      margin-right: 75%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-19.du-bois-light-col-rtl {
      right: 79.16666667%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-19.du-bois-light-col-rtl {
      right: auto;
      left: 79.16666667%;
    }
    .du-bois-light-col-xxl-offset-19.du-bois-light-col-rtl {
      margin-right: 79.16666667%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-20.du-bois-light-col-rtl {
      right: 83.33333333%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-20.du-bois-light-col-rtl {
      right: auto;
      left: 83.33333333%;
    }
    .du-bois-light-col-xxl-offset-20.du-bois-light-col-rtl {
      margin-right: 83.33333333%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-21.du-bois-light-col-rtl {
      right: 87.5%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-21.du-bois-light-col-rtl {
      right: auto;
      left: 87.5%;
    }
    .du-bois-light-col-xxl-offset-21.du-bois-light-col-rtl {
      margin-right: 87.5%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-22.du-bois-light-col-rtl {
      right: 91.66666667%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-22.du-bois-light-col-rtl {
      right: auto;
      left: 91.66666667%;
    }
    .du-bois-light-col-xxl-offset-22.du-bois-light-col-rtl {
      margin-right: 91.66666667%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-23.du-bois-light-col-rtl {
      right: 95.83333333%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-23.du-bois-light-col-rtl {
      right: auto;
      left: 95.83333333%;
    }
    .du-bois-light-col-xxl-offset-23.du-bois-light-col-rtl {
      margin-right: 95.83333333%;
      margin-left: 0;
    }
    .du-bois-light-col-xxl-push-24.du-bois-light-col-rtl {
      right: 100%;
      left: auto;
    }
    .du-bois-light-col-xxl-pull-24.du-bois-light-col-rtl {
      right: auto;
      left: 100%;
    }
    .du-bois-light-col-xxl-offset-24.du-bois-light-col-rtl {
      margin-right: 100%;
      margin-left: 0;
    }
  }
  .du-bois-light-row-rtl {
    direction: rtl;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-tooltip {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    position: absolute;
    z-index: 1070;
    display: block;
    width: max-content;
    max-width: 250px;
    visibility: visible;
  }
  .du-bois-light-tooltip-hidden {
    display: none;
  }
  .du-bois-light-tooltip-placement-top,
  .du-bois-light-tooltip-placement-topLeft,
  .du-bois-light-tooltip-placement-topRight {
    padding-bottom: 8px;
  }
  .du-bois-light-tooltip-placement-right,
  .du-bois-light-tooltip-placement-rightTop,
  .du-bois-light-tooltip-placement-rightBottom {
    padding-left: 8px;
  }
  .du-bois-light-tooltip-placement-bottom,
  .du-bois-light-tooltip-placement-bottomLeft,
  .du-bois-light-tooltip-placement-bottomRight {
    padding-top: 8px;
  }
  .du-bois-light-tooltip-placement-left,
  .du-bois-light-tooltip-placement-leftTop,
  .du-bois-light-tooltip-placement-leftBottom {
    padding-right: 8px;
  }
  .du-bois-light-tooltip-inner {
    min-width: 30px;
    min-height: 32px;
    padding: 6px 8px;
    color: #fff;
    text-align: left;
    text-decoration: none;
    word-wrap: break-word;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  }
  .du-bois-light-tooltip-arrow {
    position: absolute;
    display: block;
    width: 13.07106781px;
    height: 13.07106781px;
    overflow: hidden;
    background: transparent;
    pointer-events: none;
  }
  .du-bois-light-tooltip-arrow-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 5px;
    height: 5px;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.75);
    content: "";
    pointer-events: auto;
  }
  .du-bois-light-tooltip-placement-top .du-bois-light-tooltip-arrow,
  .du-bois-light-tooltip-placement-topLeft .du-bois-light-tooltip-arrow,
  .du-bois-light-tooltip-placement-topRight .du-bois-light-tooltip-arrow {
    bottom: -5.07106781px;
  }
  .du-bois-light-tooltip-placement-top .du-bois-light-tooltip-arrow-content,
  .du-bois-light-tooltip-placement-topLeft .du-bois-light-tooltip-arrow-content,
  .du-bois-light-tooltip-placement-topRight
    .du-bois-light-tooltip-arrow-content {
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
    transform: translateY(-6.53553391px) rotate(45deg);
  }
  .du-bois-light-tooltip-placement-top .du-bois-light-tooltip-arrow {
    left: 50%;
    transform: translateX(-50%);
  }
  .du-bois-light-tooltip-placement-topLeft .du-bois-light-tooltip-arrow {
    left: 13px;
  }
  .du-bois-light-tooltip-placement-topRight .du-bois-light-tooltip-arrow {
    right: 13px;
  }
  .du-bois-light-tooltip-placement-right .du-bois-light-tooltip-arrow,
  .du-bois-light-tooltip-placement-rightTop .du-bois-light-tooltip-arrow,
  .du-bois-light-tooltip-placement-rightBottom .du-bois-light-tooltip-arrow {
    left: -5.07106781px;
  }
  .du-bois-light-tooltip-placement-right .du-bois-light-tooltip-arrow-content,
  .du-bois-light-tooltip-placement-rightTop
    .du-bois-light-tooltip-arrow-content,
  .du-bois-light-tooltip-placement-rightBottom
    .du-bois-light-tooltip-arrow-content {
    box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.07);
    transform: translateX(6.53553391px) rotate(45deg);
  }
  .du-bois-light-tooltip-placement-right .du-bois-light-tooltip-arrow {
    top: 50%;
    transform: translateY(-50%);
  }
  .du-bois-light-tooltip-placement-rightTop .du-bois-light-tooltip-arrow {
    top: 5px;
  }
  .du-bois-light-tooltip-placement-rightBottom .du-bois-light-tooltip-arrow {
    bottom: 5px;
  }
  .du-bois-light-tooltip-placement-left .du-bois-light-tooltip-arrow,
  .du-bois-light-tooltip-placement-leftTop .du-bois-light-tooltip-arrow,
  .du-bois-light-tooltip-placement-leftBottom .du-bois-light-tooltip-arrow {
    right: -5.07106781px;
  }
  .du-bois-light-tooltip-placement-left .du-bois-light-tooltip-arrow-content,
  .du-bois-light-tooltip-placement-leftTop .du-bois-light-tooltip-arrow-content,
  .du-bois-light-tooltip-placement-leftBottom
    .du-bois-light-tooltip-arrow-content {
    box-shadow: 3px -3px 7px rgba(0, 0, 0, 0.07);
    transform: translateX(-6.53553391px) rotate(45deg);
  }
  .du-bois-light-tooltip-placement-left .du-bois-light-tooltip-arrow {
    top: 50%;
    transform: translateY(-50%);
  }
  .du-bois-light-tooltip-placement-leftTop .du-bois-light-tooltip-arrow {
    top: 5px;
  }
  .du-bois-light-tooltip-placement-leftBottom .du-bois-light-tooltip-arrow {
    bottom: 5px;
  }
  .du-bois-light-tooltip-placement-bottom .du-bois-light-tooltip-arrow,
  .du-bois-light-tooltip-placement-bottomLeft .du-bois-light-tooltip-arrow,
  .du-bois-light-tooltip-placement-bottomRight .du-bois-light-tooltip-arrow {
    top: -5.07106781px;
  }
  .du-bois-light-tooltip-placement-bottom .du-bois-light-tooltip-arrow-content,
  .du-bois-light-tooltip-placement-bottomLeft
    .du-bois-light-tooltip-arrow-content,
  .du-bois-light-tooltip-placement-bottomRight
    .du-bois-light-tooltip-arrow-content {
    box-shadow: -3px -3px 7px rgba(0, 0, 0, 0.07);
    transform: translateY(6.53553391px) rotate(45deg);
  }
  .du-bois-light-tooltip-placement-bottom .du-bois-light-tooltip-arrow {
    left: 50%;
    transform: translateX(-50%);
  }
  .du-bois-light-tooltip-placement-bottomLeft .du-bois-light-tooltip-arrow {
    left: 13px;
  }
  .du-bois-light-tooltip-placement-bottomRight .du-bois-light-tooltip-arrow {
    right: 13px;
  }
  .du-bois-light-tooltip-pink .du-bois-light-tooltip-inner {
    background-color: #eb2f96;
  }
  .du-bois-light-tooltip-pink .du-bois-light-tooltip-arrow-content {
    background-color: #eb2f96;
  }
  .du-bois-light-tooltip-magenta .du-bois-light-tooltip-inner {
    background-color: #eb2f96;
  }
  .du-bois-light-tooltip-magenta .du-bois-light-tooltip-arrow-content {
    background-color: #eb2f96;
  }
  .du-bois-light-tooltip-red .du-bois-light-tooltip-inner {
    background-color: #f5222d;
  }
  .du-bois-light-tooltip-red .du-bois-light-tooltip-arrow-content {
    background-color: #f5222d;
  }
  .du-bois-light-tooltip-volcano .du-bois-light-tooltip-inner {
    background-color: #fa541c;
  }
  .du-bois-light-tooltip-volcano .du-bois-light-tooltip-arrow-content {
    background-color: #fa541c;
  }
  .du-bois-light-tooltip-orange .du-bois-light-tooltip-inner {
    background-color: #fa8c16;
  }
  .du-bois-light-tooltip-orange .du-bois-light-tooltip-arrow-content {
    background-color: #fa8c16;
  }
  .du-bois-light-tooltip-yellow .du-bois-light-tooltip-inner {
    background-color: #fadb14;
  }
  .du-bois-light-tooltip-yellow .du-bois-light-tooltip-arrow-content {
    background-color: #fadb14;
  }
  .du-bois-light-tooltip-gold .du-bois-light-tooltip-inner {
    background-color: #faad14;
  }
  .du-bois-light-tooltip-gold .du-bois-light-tooltip-arrow-content {
    background-color: #faad14;
  }
  .du-bois-light-tooltip-cyan .du-bois-light-tooltip-inner {
    background-color: #13c2c2;
  }
  .du-bois-light-tooltip-cyan .du-bois-light-tooltip-arrow-content {
    background-color: #13c2c2;
  }
  .du-bois-light-tooltip-lime .du-bois-light-tooltip-inner {
    background-color: #a0d911;
  }
  .du-bois-light-tooltip-lime .du-bois-light-tooltip-arrow-content {
    background-color: #a0d911;
  }
  .du-bois-light-tooltip-green .du-bois-light-tooltip-inner {
    background-color: #52c41a;
  }
  .du-bois-light-tooltip-green .du-bois-light-tooltip-arrow-content {
    background-color: #52c41a;
  }
  .du-bois-light-tooltip-blue .du-bois-light-tooltip-inner {
    background-color: #1890ff;
  }
  .du-bois-light-tooltip-blue .du-bois-light-tooltip-arrow-content {
    background-color: #1890ff;
  }
  .du-bois-light-tooltip-geekblue .du-bois-light-tooltip-inner {
    background-color: #2f54eb;
  }
  .du-bois-light-tooltip-geekblue .du-bois-light-tooltip-arrow-content {
    background-color: #2f54eb;
  }
  .du-bois-light-tooltip-purple .du-bois-light-tooltip-inner {
    background-color: #722ed1;
  }
  .du-bois-light-tooltip-purple .du-bois-light-tooltip-arrow-content {
    background-color: #722ed1;
  }
  .du-bois-light-tooltip-rtl {
    direction: rtl;
  }
  .du-bois-light-tooltip-rtl .du-bois-light-tooltip-inner {
    text-align: right;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-input-affix-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 5px 12px;
    color: #1f272d;
    font-size: 13px;
    line-height: 20px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #cddae5;
    border-radius: 4px;
    transition: all 0.3s;
    display: inline-flex;
  }
  .du-bois-light-input-affix-wrapper::-moz-placeholder {
    opacity: 1;
  }
  .du-bois-light-input-affix-wrapper::placeholder {
    color: #bfbfbf;
  }
  .du-bois-light-input-affix-wrapper:placeholder-shown {
    text-overflow: ellipsis;
  }
  .du-bois-light-input-affix-wrapper:hover {
    border-color: #448dc2;
    border-right-width: 1px !important;
  }
  .du-bois-light-input-rtl .du-bois-light-input-affix-wrapper:hover {
    border-right-width: 0;
    border-left-width: 1px !important;
  }
  .du-bois-light-input-affix-wrapper:focus,
  .du-bois-light-input-affix-wrapper-focused {
    border-color: #448dc2;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(34, 114, 180, 0.2);
  }
  .du-bois-light-input-rtl .du-bois-light-input-affix-wrapper:focus,
  .du-bois-light-input-rtl .du-bois-light-input-affix-wrapper-focused {
    border-right-width: 0;
    border-left-width: 1px !important;
  }
  .du-bois-light-input-affix-wrapper-disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
  }
  .du-bois-light-input-affix-wrapper-disabled:hover {
    border-color: #cddae5;
    border-right-width: 1px !important;
  }
  .du-bois-light-input-affix-wrapper[disabled] {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
  }
  .du-bois-light-input-affix-wrapper[disabled]:hover {
    border-color: #cddae5;
    border-right-width: 1px !important;
  }
  .du-bois-light-input-affix-wrapper-borderless,
  .du-bois-light-input-affix-wrapper-borderless:hover,
  .du-bois-light-input-affix-wrapper-borderless:focus,
  .du-bois-light-input-affix-wrapper-borderless-focused,
  .du-bois-light-input-affix-wrapper-borderless-disabled,
  .du-bois-light-input-affix-wrapper-borderless[disabled] {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
  textarea.du-bois-light-input-affix-wrapper {
    max-width: 100%;
    height: auto;
    min-height: 40px;
    line-height: 20px;
    vertical-align: bottom;
    transition: all 0.3s, height 0s;
  }
  .du-bois-light-input-affix-wrapper-lg {
    padding: 5px 12px;
    font-size: 18px;
  }
  .du-bois-light-input-affix-wrapper-sm {
    padding: 5px 12px;
  }
  .du-bois-light-input-affix-wrapper-rtl {
    direction: rtl;
  }
  .du-bois-light-input-affix-wrapper:not(
      .du-bois-light-input-affix-wrapper-disabled
    ):hover {
    border-color: #448dc2;
    border-right-width: 1px !important;
    z-index: 1;
  }
  .du-bois-light-input-rtl
    .du-bois-light-input-affix-wrapper:not(
      .du-bois-light-input-affix-wrapper-disabled
    ):hover {
    border-right-width: 0;
    border-left-width: 1px !important;
  }
  .du-bois-light-input-search-with-button
    .du-bois-light-input-affix-wrapper:not(
      .du-bois-light-input-affix-wrapper-disabled
    ):hover {
    z-index: 0;
  }
  .du-bois-light-input-affix-wrapper-focused,
  .du-bois-light-input-affix-wrapper:focus {
    z-index: 1;
  }
  .du-bois-light-input-affix-wrapper-disabled .du-bois-light-input[disabled] {
    background: transparent;
  }
  .du-bois-light-input-affix-wrapper > input.du-bois-light-input {
    padding: 0;
    border: none;
    outline: none;
  }
  .du-bois-light-input-affix-wrapper > input.du-bois-light-input:focus {
    box-shadow: none;
  }
  .du-bois-light-input-affix-wrapper::before {
    width: 0;
    visibility: hidden;
    content: "a0";
  }
  .du-bois-light-input-prefix,
  .du-bois-light-input-suffix {
    display: flex;
    flex: none;
    align-items: center;
  }
  .du-bois-light-input-prefix {
    margin-right: 4px;
  }
  .du-bois-light-input-suffix {
    margin-left: 4px;
  }
  .anticon.du-bois-light-input-clear-icon {
    margin: 0 4px;
    color: rgba(0, 0, 0, 0.25);
    font-size: 12px;
    vertical-align: -1px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .anticon.du-bois-light-input-clear-icon:hover {
    color: #5d7283;
  }
  .anticon.du-bois-light-input-clear-icon:active {
    color: #1f272d;
  }
  .anticon.du-bois-light-input-clear-icon-hidden {
    visibility: hidden;
  }
  .anticon.du-bois-light-input-clear-icon:last-child {
    margin-right: 0;
  }
  .du-bois-light-input-affix-wrapper-textarea-with-clear-btn {
    padding: 0 !important;
    border: 0 !important;
  }
  .du-bois-light-input-affix-wrapper-textarea-with-clear-btn
    .du-bois-light-input-clear-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 1;
  }
  .du-bois-light-input {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 5px 12px;
    color: #1f272d;
    font-size: 13px;
    line-height: 20px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #cddae5;
    border-radius: 4px;
    transition: all 0.3s;
  }
  .du-bois-light-input::-moz-placeholder {
    opacity: 1;
  }
  .du-bois-light-input::placeholder {
    color: #bfbfbf;
  }
  .du-bois-light-input:placeholder-shown {
    text-overflow: ellipsis;
  }
  .du-bois-light-input:hover {
    border-color: #448dc2;
    border-right-width: 1px !important;
  }
  .du-bois-light-input-rtl .du-bois-light-input:hover {
    border-right-width: 0;
    border-left-width: 1px !important;
  }
  .du-bois-light-input:focus,
  .du-bois-light-input-focused {
    border-color: #448dc2;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(34, 114, 180, 0.2);
  }
  .du-bois-light-input-rtl .du-bois-light-input:focus,
  .du-bois-light-input-rtl .du-bois-light-input-focused {
    border-right-width: 0;
    border-left-width: 1px !important;
  }
  .du-bois-light-input-disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
  }
  .du-bois-light-input-disabled:hover {
    border-color: #cddae5;
    border-right-width: 1px !important;
  }
  .du-bois-light-input[disabled] {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
  }
  .du-bois-light-input[disabled]:hover {
    border-color: #cddae5;
    border-right-width: 1px !important;
  }
  .du-bois-light-input-borderless,
  .du-bois-light-input-borderless:hover,
  .du-bois-light-input-borderless:focus,
  .du-bois-light-input-borderless-focused,
  .du-bois-light-input-borderless-disabled,
  .du-bois-light-input-borderless[disabled] {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
  textarea.du-bois-light-input {
    max-width: 100%;
    height: auto;
    min-height: 40px;
    line-height: 20px;
    vertical-align: bottom;
    transition: all 0.3s, height 0s;
  }
  .du-bois-light-input-lg {
    padding: 5px 12px;
    font-size: 18px;
  }
  .du-bois-light-input-sm {
    padding: 5px 12px;
  }
  .du-bois-light-input-rtl {
    direction: rtl;
  }
  .du-bois-light-input-group {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: table;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
  }
  .du-bois-light-input-group[class*="col-"] {
    float: none;
    padding-right: 0;
    padding-left: 0;
  }
  .du-bois-light-input-group > [class*="col-"] {
    padding-right: 8px;
  }
  .du-bois-light-input-group > [class*="col-"]:last-child {
    padding-right: 0;
  }
  .du-bois-light-input-group-addon,
  .du-bois-light-input-group-wrap,
  .du-bois-light-input-group > .du-bois-light-input {
    display: table-cell;
  }
  .du-bois-light-input-group-addon:not(:first-of-type):not(:last-child),
  .du-bois-light-input-group-wrap:not(:first-of-type):not(:last-child),
  .du-bois-light-input-group
    > .du-bois-light-input:not(:first-of-type):not(:last-child) {
    border-radius: 0;
  }
  .du-bois-light-input-group-addon,
  .du-bois-light-input-group-wrap {
    width: 1px;
    white-space: nowrap;
    vertical-align: middle;
  }
  .du-bois-light-input-group-wrap > * {
    display: block !important;
  }
  .du-bois-light-input-group .du-bois-light-input {
    float: left;
    width: 100%;
    margin-bottom: 0;
    text-align: inherit;
  }
  .du-bois-light-input-group .du-bois-light-input:focus {
    z-index: 1;
    border-right-width: 1px;
  }
  .du-bois-light-input-group .du-bois-light-input:hover {
    z-index: 1;
    border-right-width: 1px;
  }
  .du-bois-light-input-search-with-button
    .du-bois-light-input-group
    .du-bois-light-input:hover {
    z-index: 0;
  }
  .du-bois-light-input-group-addon {
    position: relative;
    padding: 0 12px;
    color: #1f272d;
    font-weight: normal;
    font-size: 13px;
    text-align: center;
    background-color: #fafafa;
    border: 1px solid #cddae5;
    border-radius: 4px;
    transition: all 0.3s;
  }
  .du-bois-light-input-group-addon .du-bois-light-select {
    margin: -6px -12px;
  }
  .du-bois-light-input-group-addon
    .du-bois-light-select.du-bois-light-select-single:not(
      .du-bois-light-select-customize-input
    )
    .du-bois-light-select-selector {
    background-color: inherit;
    border: 1px solid transparent;
    box-shadow: none;
  }
  .du-bois-light-input-group-addon
    .du-bois-light-select-open
    .du-bois-light-select-selector,
  .du-bois-light-input-group-addon
    .du-bois-light-select-focused
    .du-bois-light-select-selector {
    color: #2272b4;
  }
  .du-bois-light-input-group-addon .du-bois-light-cascader-picker {
    margin: -9px -8px;
    background-color: transparent;
  }
  .du-bois-light-input-group-addon
    .du-bois-light-cascader-picker
    .du-bois-light-cascader-input {
    text-align: left;
    border: 0;
    box-shadow: none;
  }
  .du-bois-light-input-group > .du-bois-light-input:first-of-type,
  .du-bois-light-input-group-addon:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .du-bois-light-input-group
    > .du-bois-light-input:first-of-type
    .du-bois-light-select
    .du-bois-light-select-selector,
  .du-bois-light-input-group-addon:first-of-type
    .du-bois-light-select
    .du-bois-light-select-selector {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .du-bois-light-input-group
    > .du-bois-light-input-affix-wrapper:not(:first-of-type)
    .du-bois-light-input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .du-bois-light-input-group
    > .du-bois-light-input-affix-wrapper:not(:last-child)
    .du-bois-light-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .du-bois-light-input-group-addon:first-of-type {
    border-right: 0;
  }
  .du-bois-light-input-group-addon:last-child {
    border-left: 0;
  }
  .du-bois-light-input-group > .du-bois-light-input:last-child,
  .du-bois-light-input-group-addon:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .du-bois-light-input-group
    > .du-bois-light-input:last-child
    .du-bois-light-select
    .du-bois-light-select-selector,
  .du-bois-light-input-group-addon:last-child
    .du-bois-light-select
    .du-bois-light-select-selector {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .du-bois-light-input-group-lg .du-bois-light-input,
  .du-bois-light-input-group-lg > .du-bois-light-input-group-addon {
    padding: 5px 12px;
    font-size: 18px;
  }
  .du-bois-light-input-group-sm .du-bois-light-input,
  .du-bois-light-input-group-sm > .du-bois-light-input-group-addon {
    padding: 5px 12px;
  }
  .du-bois-light-input-group-lg
    .du-bois-light-select-single
    .du-bois-light-select-selector {
    height: 40px;
  }
  .du-bois-light-input-group-sm
    .du-bois-light-select-single
    .du-bois-light-select-selector {
    height: 32px;
  }
  .du-bois-light-input-group
    .du-bois-light-input-affix-wrapper:not(:first-of-type) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .du-bois-light-input-group
    .du-bois-light-input-affix-wrapper:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .du-bois-light-input-search
    .du-bois-light-input-group
    .du-bois-light-input-affix-wrapper:not(:last-child) {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact {
    display: block;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact::before {
    display: table;
    content: "";
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact::after {
    display: table;
    clear: both;
    content: "";
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact-addon:not(
      :first-of-type
    ):not(:last-child),
  .du-bois-light-input-group.du-bois-light-input-group-compact-wrap:not(
      :first-of-type
    ):not(:last-child),
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-input:not(:first-of-type):not(:last-child) {
    border-right-width: 1px;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact-addon:not(
      :first-of-type
    ):not(:last-child):hover,
  .du-bois-light-input-group.du-bois-light-input-group-compact-wrap:not(
      :first-of-type
    ):not(:last-child):hover,
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-input:not(:first-of-type):not(:last-child):hover {
    z-index: 1;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact-addon:not(
      :first-of-type
    ):not(:last-child):focus,
  .du-bois-light-input-group.du-bois-light-input-group-compact-wrap:not(
      :first-of-type
    ):not(:last-child):focus,
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-input:not(:first-of-type):not(:last-child):focus {
    z-index: 1;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact > * {
    display: inline-block;
    float: none;
    vertical-align: top;
    border-radius: 0;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-input-affix-wrapper {
    display: inline-flex;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-picker-range {
    display: inline-flex;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > *:not(:last-child) {
    margin-right: -1px;
    border-right-width: 1px;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact
    .du-bois-light-input {
    float: none;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-select
    > .du-bois-light-select-selector,
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-select-auto-complete
    .du-bois-light-input,
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-cascader-picker
    .du-bois-light-input,
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-input-group-wrapper
    .du-bois-light-input {
    border-right-width: 1px;
    border-radius: 0;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-select
    > .du-bois-light-select-selector:hover,
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-select-auto-complete
    .du-bois-light-input:hover,
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-cascader-picker
    .du-bois-light-input:hover,
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-input-group-wrapper
    .du-bois-light-input:hover {
    z-index: 1;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-select
    > .du-bois-light-select-selector:focus,
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-select-auto-complete
    .du-bois-light-input:focus,
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-cascader-picker
    .du-bois-light-input:focus,
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-input-group-wrapper
    .du-bois-light-input:focus {
    z-index: 1;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-select-focused {
    z-index: 1;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-select
    > .du-bois-light-select-arrow {
    z-index: 1;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact > *:first-of-type,
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-select:first-of-type
    > .du-bois-light-select-selector,
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-select-auto-complete:first-of-type
    .du-bois-light-input,
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-cascader-picker:first-of-type
    .du-bois-light-input {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact > *:last-child,
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-select:last-child
    > .du-bois-light-select-selector,
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-cascader-picker:last-child
    .du-bois-light-input,
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-cascader-picker-focused:last-child
    .du-bois-light-input {
    border-right-width: 1px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-select-auto-complete
    .du-bois-light-input {
    vertical-align: top;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact
    .du-bois-light-input-group-wrapper
    + .du-bois-light-input-group-wrapper {
    margin-left: -1px;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact
    .du-bois-light-input-group-wrapper
    + .du-bois-light-input-group-wrapper
    .du-bois-light-input-affix-wrapper {
    border-radius: 0;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact
    .du-bois-light-input-group-wrapper:not(
      :last-child
    ).du-bois-light-input-search
    > .du-bois-light-input-group
    > .du-bois-light-input-group-addon
    > .du-bois-light-input-search-button {
    border-radius: 0;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact
    .du-bois-light-input-group-wrapper:not(
      :last-child
    ).du-bois-light-input-search
    > .du-bois-light-input-group
    > .du-bois-light-input {
    border-radius: 4px 0 0 4px;
  }
  .du-bois-light-input-group > .du-bois-light-input-rtl:first-of-type,
  .du-bois-light-input-group-rtl .du-bois-light-input-group-addon:first-of-type {
    border-radius: 0 4px 4px 0;
  }
  .du-bois-light-input-group-rtl .du-bois-light-input-group-addon:first-of-type {
    border-right: 1px solid #cddae5;
    border-left: 0;
  }
  .du-bois-light-input-group-rtl .du-bois-light-input-group-addon:last-child {
    border-right: 0;
    border-left: 1px solid #cddae5;
  }
  .du-bois-light-input-group-rtl.du-bois-light-input-group
    > .du-bois-light-input:last-child,
  .du-bois-light-input-group-rtl.du-bois-light-input-group-addon:last-child {
    border-radius: 4px 0 0 4px;
  }
  .du-bois-light-input-group-rtl.du-bois-light-input-group
    .du-bois-light-input-affix-wrapper:not(:first-of-type) {
    border-radius: 4px 0 0 4px;
  }
  .du-bois-light-input-group-rtl.du-bois-light-input-group
    .du-bois-light-input-affix-wrapper:not(:last-child) {
    border-radius: 0 4px 4px 0;
  }
  .du-bois-light-input-group-rtl.du-bois-light-input-group.du-bois-light-input-group-compact
    > *:not(:last-child) {
    margin-right: 0;
    margin-left: -1px;
    border-left-width: 1px;
  }
  .du-bois-light-input-group-rtl.du-bois-light-input-group.du-bois-light-input-group-compact
    > *:first-of-type,
  .du-bois-light-input-group-rtl.du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-select:first-of-type
    > .du-bois-light-select-selector,
  .du-bois-light-input-group-rtl.du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-select-auto-complete:first-of-type
    .du-bois-light-input,
  .du-bois-light-input-group-rtl.du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-cascader-picker:first-of-type
    .du-bois-light-input {
    border-radius: 0 4px 4px 0;
  }
  .du-bois-light-input-group-rtl.du-bois-light-input-group.du-bois-light-input-group-compact
    > *:last-child,
  .du-bois-light-input-group-rtl.du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-select:last-child
    > .du-bois-light-select-selector,
  .du-bois-light-input-group-rtl.du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-select-auto-complete:last-child
    .du-bois-light-input,
  .du-bois-light-input-group-rtl.du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-cascader-picker:last-child
    .du-bois-light-input,
  .du-bois-light-input-group-rtl.du-bois-light-input-group.du-bois-light-input-group-compact
    > .du-bois-light-cascader-picker-focused:last-child
    .du-bois-light-input {
    border-left-width: 1px;
    border-radius: 4px 0 0 4px;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact
    .du-bois-light-input-group-wrapper-rtl
    + .du-bois-light-input-group-wrapper-rtl {
    margin-right: -1px;
    margin-left: 0;
  }
  .du-bois-light-input-group.du-bois-light-input-group-compact
    .du-bois-light-input-group-wrapper-rtl:not(
      :last-child
    ).du-bois-light-input-search
    > .du-bois-light-input-group
    > .du-bois-light-input {
    border-radius: 0 4px 4px 0;
  }
  .du-bois-light-input-group-wrapper {
    display: inline-block;
    width: 100%;
    text-align: start;
    vertical-align: top;
  }
  .du-bois-light-input-password-icon {
    color: #5d7283;
    cursor: pointer;
    transition: all 0.3s;
  }
  .du-bois-light-input-password-icon:hover {
    color: rgba(0, 0, 0, 0.85);
  }
  .du-bois-light-input[type="color"] {
    height: 40px;
  }
  .du-bois-light-input[type="color"].du-bois-light-input-lg {
    height: 40px;
  }
  .du-bois-light-input[type="color"].du-bois-light-input-sm {
    height: 32px;
    padding-top: 3px;
    padding-bottom: 3px;
  }
  .du-bois-light-input-textarea-show-count::after {
    float: right;
    color: #5d7283;
    white-space: nowrap;
    content: attr(data-count);
    pointer-events: none;
  }
  .du-bois-light-input-search .du-bois-light-input:hover,
  .du-bois-light-input-search .du-bois-light-input:focus {
    border-color: #448dc2;
  }
  .du-bois-light-input-search
    .du-bois-light-input:hover
    + .du-bois-light-input-group-addon
    .du-bois-light-input-search-button:not(.du-bois-light-btn-primary),
  .du-bois-light-input-search
    .du-bois-light-input:focus
    + .du-bois-light-input-group-addon
    .du-bois-light-input-search-button:not(.du-bois-light-btn-primary) {
    border-left-color: #448dc2;
  }
  .du-bois-light-input-search .du-bois-light-input-affix-wrapper {
    border-radius: 0;
  }
  .du-bois-light-input-search .du-bois-light-input-lg {
    line-height: 19.9998px;
  }
  .du-bois-light-input-search
    > .du-bois-light-input-group
    > .du-bois-light-input-group-addon:last-child {
    left: -1px;
    padding: 0;
    border: 0;
  }
  .du-bois-light-input-search
    > .du-bois-light-input-group
    > .du-bois-light-input-group-addon:last-child
    .du-bois-light-input-search-button {
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 0 4px 4px 0;
  }
  .du-bois-light-input-search
    > .du-bois-light-input-group
    > .du-bois-light-input-group-addon:last-child
    .du-bois-light-input-search-button:not(.du-bois-light-btn-primary) {
    color: #5d7283;
  }
  .du-bois-light-input-search
    > .du-bois-light-input-group
    > .du-bois-light-input-group-addon:last-child
    .du-bois-light-input-search-button:not(
      .du-bois-light-btn-primary
    ).du-bois-light-btn-loading::before {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .du-bois-light-input-search-button {
    height: 40px;
  }
  .du-bois-light-input-search-button:hover,
  .du-bois-light-input-search-button:focus {
    z-index: 1;
  }
  .du-bois-light-input-search-large .du-bois-light-input-search-button {
    height: 40px;
  }
  .du-bois-light-input-search-small .du-bois-light-input-search-button {
    height: 32px;
  }
  .du-bois-light-input-group-wrapper-rtl {
    direction: rtl;
  }
  .du-bois-light-input-group-rtl {
    direction: rtl;
  }
  .du-bois-light-input-affix-wrapper.du-bois-light-input-affix-wrapper-rtl
    > input.du-bois-light-input {
    border: none;
    outline: none;
  }
  .du-bois-light-input-affix-wrapper-rtl .du-bois-light-input-prefix {
    margin: 0 0 0 4px;
  }
  .du-bois-light-input-affix-wrapper-rtl .du-bois-light-input-suffix {
    margin: 0 4px 0 0;
  }
  .du-bois-light-input-textarea-rtl {
    direction: rtl;
  }
  .du-bois-light-input-textarea-rtl.du-bois-light-input-textarea-show-count::after {
    text-align: left;
  }
  .du-bois-light-input-affix-wrapper-rtl
    .du-bois-light-input-clear-icon:last-child {
    margin-right: 4px;
    margin-left: 0;
  }
  .du-bois-light-input-affix-wrapper-rtl .du-bois-light-input-clear-icon {
    right: auto;
    left: 8px;
  }
  .du-bois-light-input-search-rtl {
    direction: rtl;
  }
  .du-bois-light-input-search-rtl
    .du-bois-light-input:hover
    + .du-bois-light-input-group-addon
    .du-bois-light-input-search-button:not(.du-bois-light-btn-primary),
  .du-bois-light-input-search-rtl
    .du-bois-light-input:focus
    + .du-bois-light-input-group-addon
    .du-bois-light-input-search-button:not(.du-bois-light-btn-primary) {
    border-right-color: #448dc2;
    border-left-color: #cddae5;
  }
  .du-bois-light-input-search-rtl
    > .du-bois-light-input-group
    > .du-bois-light-input-affix-wrapper:hover,
  .du-bois-light-input-search-rtl
    > .du-bois-light-input-group
    > .du-bois-light-input-affix-wrapper-focused {
    border-right-color: #448dc2;
  }
  .du-bois-light-input-search-rtl
    > .du-bois-light-input-group
    > .du-bois-light-input-group-addon {
    right: -1px;
    left: auto;
  }
  .du-bois-light-input-search-rtl
    > .du-bois-light-input-group
    > .du-bois-light-input-group-addon
    .du-bois-light-input-search-button {
    border-radius: 4px 0 0 4px;
  }
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .du-bois-light-input {
      height: 40px;
    }
    .du-bois-light-input-lg {
      height: 40px;
    }
    .du-bois-light-input-sm {
      height: 32px;
    }
    .du-bois-light-input-affix-wrapper > input.du-bois-light-input {
      height: auto;
    }
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-layout {
    display: flex;
    flex: auto;
    flex-direction: column;
    /* fix firefox can't set height smaller than content on flex item */
    min-height: 0;
    background: #f0f2f5;
  }
  .du-bois-light-layout,
  .du-bois-light-layout * {
    box-sizing: border-box;
  }
  .du-bois-light-layout.du-bois-light-layout-has-sider {
    flex-direction: row;
  }
  .du-bois-light-layout.du-bois-light-layout-has-sider > .du-bois-light-layout,
  .du-bois-light-layout.du-bois-light-layout-has-sider
    > .du-bois-light-layout-content {
    width: 0;
  }
  .du-bois-light-layout-header,
  .du-bois-light-layout-footer {
    flex: 0 0 auto;
  }
  .du-bois-light-layout-header {
    height: 64px;
    padding: 0 50px;
    color: #1f272d;
    line-height: 64px;
    background: #001529;
  }
  .du-bois-light-layout-footer {
    padding: 24px 50px;
    color: #1f272d;
    font-size: 13px;
    background: #f0f2f5;
  }
  .du-bois-light-layout-content {
    flex: auto;
    /* fix firefox can't set height smaller than content on flex item */
    min-height: 0;
  }
  .du-bois-light-layout-sider {
    position: relative;
    /* fix firefox can't set width smaller than content on flex item */
    min-width: 0;
    background: #001529;
    transition: all 0.2s;
  }
  .du-bois-light-layout-sider-children {
    height: 100%;
    margin-top: -0.1px;
    padding-top: 0.1px;
  }
  .du-bois-light-layout-sider-children
    .du-bois-light-menu.du-bois-light-menu-inline-collapsed {
    width: auto;
  }
  .du-bois-light-layout-sider-has-trigger {
    padding-bottom: 48px;
  }
  .du-bois-light-layout-sider-right {
    order: 1;
  }
  .du-bois-light-layout-sider-trigger {
    position: fixed;
    bottom: 0;
    z-index: 1;
    height: 48px;
    color: #fff;
    line-height: 48px;
    text-align: center;
    background: #002140;
    cursor: pointer;
    transition: all 0.2s;
  }
  .du-bois-light-layout-sider-zero-width > * {
    overflow: hidden;
  }
  .du-bois-light-layout-sider-zero-width-trigger {
    position: absolute;
    top: 64px;
    right: -36px;
    z-index: 1;
    width: 36px;
    height: 42px;
    color: #fff;
    font-size: 18px;
    line-height: 42px;
    text-align: center;
    background: #001529;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  .du-bois-light-layout-sider-zero-width-trigger::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    transition: all 0.3s;
    content: "";
  }
  .du-bois-light-layout-sider-zero-width-trigger:hover::after {
    background: rgba(255, 255, 255, 0.1);
  }
  .du-bois-light-layout-sider-zero-width-trigger-right {
    left: -36px;
    border-radius: 4px 0 0 4px;
  }
  .du-bois-light-layout-sider-light {
    background: #fff;
  }
  .du-bois-light-layout-sider-light .du-bois-light-layout-sider-trigger {
    color: #1f272d;
    background: #fff;
  }
  .du-bois-light-layout-sider-light
    .du-bois-light-layout-sider-zero-width-trigger {
    color: #1f272d;
    background: #fff;
  }
  .du-bois-light-layout-rtl {
    direction: rtl;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-menu-item-danger.du-bois-light-menu-item {
    color: #c82d4c;
  }
  .du-bois-light-menu-item-danger.du-bois-light-menu-item:hover,
  .du-bois-light-menu-item-danger.du-bois-light-menu-item-active {
    color: #c82d4c;
  }
  .du-bois-light-menu-item-danger.du-bois-light-menu-item:active {
    background: #fff1f0;
  }
  .du-bois-light-menu-item-danger.du-bois-light-menu-item-selected {
    color: #c82d4c;
  }
  .du-bois-light-menu-item-danger.du-bois-light-menu-item-selected > a,
  .du-bois-light-menu-item-danger.du-bois-light-menu-item-selected > a:hover {
    color: #c82d4c;
  }
  .du-bois-light-menu:not(.du-bois-light-menu-horizontal)
    .du-bois-light-menu-item-danger.du-bois-light-menu-item-selected {
    background-color: #fff1f0;
  }
  .du-bois-light-menu-inline
    .du-bois-light-menu-item-danger.du-bois-light-menu-item::after {
    border-right-color: #c82d4c;
  }
  .du-bois-light-menu-dark
    .du-bois-light-menu-item-danger.du-bois-light-menu-item,
  .du-bois-light-menu-dark
    .du-bois-light-menu-item-danger.du-bois-light-menu-item:hover,
  .du-bois-light-menu-dark
    .du-bois-light-menu-item-danger.du-bois-light-menu-item
    > a {
    color: #c82d4c;
  }
  .du-bois-light-menu-dark.du-bois-light-menu-dark:not(
      .du-bois-light-menu-horizontal
    )
    .du-bois-light-menu-item-danger.du-bois-light-menu-item-selected {
    color: #fff;
    background-color: #c82d4c;
  }
  .du-bois-light-menu {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-variant: tabular-nums;
    line-height: 20px;
    font-feature-settings: "tnum";
    margin-bottom: 0;
    padding-left: 0;
    color: #1f272d;
    font-size: 13px;
    line-height: 0;
    text-align: left;
    list-style: none;
    background: #fff;
    outline: none;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    transition: background 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
  }
  .du-bois-light-menu::before {
    display: table;
    content: "";
  }
  .du-bois-light-menu::after {
    display: table;
    clear: both;
    content: "";
  }
  .du-bois-light-menu.du-bois-light-menu-root:focus-visible {
    box-shadow: 0 0 0 2px rgba(34, 114, 180, 0.2);
  }
  .du-bois-light-menu ul,
  .du-bois-light-menu ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .du-bois-light-menu-overflow {
    display: flex;
  }
  .du-bois-light-menu-overflow-item {
    flex: none;
  }
  .du-bois-light-menu-hidden,
  .du-bois-light-menu-submenu-hidden {
    display: none;
  }
  .du-bois-light-menu-item-group-title {
    height: 20px;
    padding: 8px 16px;
    color: #5d7283;
    font-size: 13px;
    line-height: 20px;
    transition: all 0.3s;
  }
  .du-bois-light-menu-horizontal .du-bois-light-menu-submenu {
    transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .du-bois-light-menu-submenu,
  .du-bois-light-menu-submenu-inline {
    transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .du-bois-light-menu-submenu-selected {
    color: #2272b4;
  }
  .du-bois-light-menu-item:active,
  .du-bois-light-menu-submenu-title:active {
    background: #e6f1f5;
  }
  .du-bois-light-menu-submenu .du-bois-light-menu-sub {
    cursor: initial;
    transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .du-bois-light-menu-title-content {
    transition: color 0.3s;
  }
  .du-bois-light-menu-item a {
    color: #1f272d;
  }
  .du-bois-light-menu-item a:hover {
    color: #2272b4;
  }
  .du-bois-light-menu-item a::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
    content: "";
  }
  .du-bois-light-menu-item > .du-bois-light-badge a {
    color: #1f272d;
  }
  .du-bois-light-menu-item > .du-bois-light-badge a:hover {
    color: #2272b4;
  }
  .du-bois-light-menu-item-divider {
    height: 1px;
    overflow: hidden;
    line-height: 0;
    background-color: #f0f0f0;
  }
  .du-bois-light-menu-horizontal .du-bois-light-menu-item,
  .du-bois-light-menu-horizontal .du-bois-light-menu-submenu {
    margin-top: -1px;
  }
  .du-bois-light-menu-horizontal > .du-bois-light-menu-item:hover,
  .du-bois-light-menu-horizontal > .du-bois-light-menu-item-active,
  .du-bois-light-menu-horizontal
    > .du-bois-light-menu-submenu
    .du-bois-light-menu-submenu-title:hover {
    background-color: transparent;
  }
  .du-bois-light-menu-item-selected {
    color: #2272b4;
  }
  .du-bois-light-menu-item-selected a,
  .du-bois-light-menu-item-selected a:hover {
    color: #2272b4;
  }
  .du-bois-light-menu:not(.du-bois-light-menu-horizontal)
    .du-bois-light-menu-item-selected {
    background-color: #e6f1f5;
  }
  .du-bois-light-menu-inline,
  .du-bois-light-menu-vertical,
  .du-bois-light-menu-vertical-left {
    border-right: 1px solid #f0f0f0;
  }
  .du-bois-light-menu-vertical-right {
    border-left: 1px solid #f0f0f0;
  }
  .du-bois-light-menu-vertical.du-bois-light-menu-sub,
  .du-bois-light-menu-vertical-left.du-bois-light-menu-sub,
  .du-bois-light-menu-vertical-right.du-bois-light-menu-sub {
    min-width: 160px;
    max-height: calc(100vh - 100px);
    padding: 0;
    overflow: hidden;
    border-right: 0;
  }
  .du-bois-light-menu-vertical.du-bois-light-menu-sub:not([class*="-active"]),
  .du-bois-light-menu-vertical-left.du-bois-light-menu-sub:not(
      [class*="-active"]
    ),
  .du-bois-light-menu-vertical-right.du-bois-light-menu-sub:not(
      [class*="-active"]
    ) {
    overflow-x: hidden;
    overflow-y: auto;
  }
  .du-bois-light-menu-vertical.du-bois-light-menu-sub .du-bois-light-menu-item,
  .du-bois-light-menu-vertical-left.du-bois-light-menu-sub
    .du-bois-light-menu-item,
  .du-bois-light-menu-vertical-right.du-bois-light-menu-sub
    .du-bois-light-menu-item {
    left: 0;
    margin-left: 0;
    border-right: 0;
  }
  .du-bois-light-menu-vertical.du-bois-light-menu-sub
    .du-bois-light-menu-item::after,
  .du-bois-light-menu-vertical-left.du-bois-light-menu-sub
    .du-bois-light-menu-item::after,
  .du-bois-light-menu-vertical-right.du-bois-light-menu-sub
    .du-bois-light-menu-item::after {
    border-right: 0;
  }
  .du-bois-light-menu-vertical.du-bois-light-menu-sub
    > .du-bois-light-menu-item,
  .du-bois-light-menu-vertical-left.du-bois-light-menu-sub
    > .du-bois-light-menu-item,
  .du-bois-light-menu-vertical-right.du-bois-light-menu-sub
    > .du-bois-light-menu-item,
  .du-bois-light-menu-vertical.du-bois-light-menu-sub
    > .du-bois-light-menu-submenu,
  .du-bois-light-menu-vertical-left.du-bois-light-menu-sub
    > .du-bois-light-menu-submenu,
  .du-bois-light-menu-vertical-right.du-bois-light-menu-sub
    > .du-bois-light-menu-submenu {
    transform-origin: 0 0;
  }
  .du-bois-light-menu-horizontal.du-bois-light-menu-sub {
    min-width: 114px;
  }
  .du-bois-light-menu-horizontal .du-bois-light-menu-item,
  .du-bois-light-menu-horizontal .du-bois-light-menu-submenu-title {
    transition: border-color 0.3s, background 0.3s;
  }
  .du-bois-light-menu-item,
  .du-bois-light-menu-submenu-title {
    position: relative;
    display: block;
    margin: 0;
    padding: 0 20px;
    white-space: nowrap;
    cursor: pointer;
    transition: border-color 0.3s, background 0.3s,
      padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .du-bois-light-menu-item .du-bois-light-menu-item-icon,
  .du-bois-light-menu-submenu-title .du-bois-light-menu-item-icon,
  .du-bois-light-menu-item .anticon,
  .du-bois-light-menu-submenu-title .anticon {
    min-width: 14px;
    font-size: 13px;
    transition: font-size 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), color 0.3s;
  }
  .du-bois-light-menu-item .du-bois-light-menu-item-icon + span,
  .du-bois-light-menu-submenu-title .du-bois-light-menu-item-icon + span,
  .du-bois-light-menu-item .anticon + span,
  .du-bois-light-menu-submenu-title .anticon + span {
    margin-left: 10px;
    opacity: 1;
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), margin 0.3s,
      color 0.3s;
  }
  .du-bois-light-menu-item .du-bois-light-menu-item-icon.svg,
  .du-bois-light-menu-submenu-title .du-bois-light-menu-item-icon.svg {
    vertical-align: -0.125em;
  }
  .du-bois-light-menu-item.du-bois-light-menu-item-only-child > .anticon,
  .du-bois-light-menu-submenu-title.du-bois-light-menu-item-only-child
    > .anticon,
  .du-bois-light-menu-item.du-bois-light-menu-item-only-child
    > .du-bois-light-menu-item-icon,
  .du-bois-light-menu-submenu-title.du-bois-light-menu-item-only-child
    > .du-bois-light-menu-item-icon {
    margin-right: 0;
  }
  .du-bois-light-menu-item:focus-visible,
  .du-bois-light-menu-submenu-title:focus-visible {
    box-shadow: 0 0 0 2px rgba(34, 114, 180, 0.2);
  }
  .du-bois-light-menu > .du-bois-light-menu-item-divider {
    height: 1px;
    margin: 1px 0;
    padding: 0;
    overflow: hidden;
    line-height: 0;
    background-color: #f0f0f0;
  }
  .du-bois-light-menu-submenu-popup {
    position: absolute;
    z-index: 1050;
    background: transparent;
    border-radius: 4px;
    box-shadow: none;
    transform-origin: 0 0;
  }
  .du-bois-light-menu-submenu-popup::before {
    position: absolute;
    top: -7px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0.0001;
    content: " ";
  }
  .du-bois-light-menu-submenu-placement-rightTop::before {
    top: 0;
    left: -7px;
  }
  .du-bois-light-menu-submenu > .du-bois-light-menu {
    background-color: #fff;
    border-radius: 4px;
  }
  .du-bois-light-menu-submenu > .du-bois-light-menu-submenu-title::after {
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .du-bois-light-menu-submenu-popup > .du-bois-light-menu {
    background-color: #fff;
  }
  .du-bois-light-menu-submenu-expand-icon,
  .du-bois-light-menu-submenu-arrow {
    position: absolute;
    top: 50%;
    right: 16px;
    width: 10px;
    color: #1f272d;
    transform: translateY(-50%);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .du-bois-light-menu-submenu-arrow::before,
  .du-bois-light-menu-submenu-arrow::after {
    position: absolute;
    width: 6px;
    height: 1.5px;
    background-color: currentColor;
    border-radius: 2px;
    transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    content: "";
  }
  .du-bois-light-menu-submenu-arrow::before {
    transform: rotate(45deg) translateY(-2.5px);
  }
  .du-bois-light-menu-submenu-arrow::after {
    transform: rotate(-45deg) translateY(2.5px);
  }
  .du-bois-light-menu-submenu:hover
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-expand-icon,
  .du-bois-light-menu-submenu:hover
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow {
    color: #2272b4;
  }
  .du-bois-light-menu-inline-collapsed
    .du-bois-light-menu-submenu-arrow::before,
  .du-bois-light-menu-submenu-inline .du-bois-light-menu-submenu-arrow::before {
    transform: rotate(-45deg) translateX(2.5px);
  }
  .du-bois-light-menu-inline-collapsed .du-bois-light-menu-submenu-arrow::after,
  .du-bois-light-menu-submenu-inline .du-bois-light-menu-submenu-arrow::after {
    transform: rotate(45deg) translateX(-2.5px);
  }
  .du-bois-light-menu-submenu-horizontal .du-bois-light-menu-submenu-arrow {
    display: none;
  }
  .du-bois-light-menu-submenu-open.du-bois-light-menu-submenu-inline
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow {
    transform: translateY(-2px);
  }
  .du-bois-light-menu-submenu-open.du-bois-light-menu-submenu-inline
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::after {
    transform: rotate(-45deg) translateX(-2.5px);
  }
  .du-bois-light-menu-submenu-open.du-bois-light-menu-submenu-inline
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::before {
    transform: rotate(45deg) translateX(2.5px);
  }
  .du-bois-light-menu-vertical .du-bois-light-menu-submenu-selected,
  .du-bois-light-menu-vertical-left .du-bois-light-menu-submenu-selected,
  .du-bois-light-menu-vertical-right .du-bois-light-menu-submenu-selected {
    color: #2272b4;
  }
  .du-bois-light-menu-horizontal {
    line-height: 46px;
    border: 0;
    border-bottom: 1px solid #f0f0f0;
    box-shadow: none;
  }
  .du-bois-light-menu-horizontal:not(.du-bois-light-menu-dark)
    > .du-bois-light-menu-item,
  .du-bois-light-menu-horizontal:not(.du-bois-light-menu-dark)
    > .du-bois-light-menu-submenu {
    margin-top: -1px;
    margin-bottom: 0;
    padding: 0 20px;
  }
  .du-bois-light-menu-horizontal:not(.du-bois-light-menu-dark)
    > .du-bois-light-menu-item:hover,
  .du-bois-light-menu-horizontal:not(.du-bois-light-menu-dark)
    > .du-bois-light-menu-submenu:hover,
  .du-bois-light-menu-horizontal:not(.du-bois-light-menu-dark)
    > .du-bois-light-menu-item-active,
  .du-bois-light-menu-horizontal:not(.du-bois-light-menu-dark)
    > .du-bois-light-menu-submenu-active,
  .du-bois-light-menu-horizontal:not(.du-bois-light-menu-dark)
    > .du-bois-light-menu-item-open,
  .du-bois-light-menu-horizontal:not(.du-bois-light-menu-dark)
    > .du-bois-light-menu-submenu-open,
  .du-bois-light-menu-horizontal:not(.du-bois-light-menu-dark)
    > .du-bois-light-menu-item-selected,
  .du-bois-light-menu-horizontal:not(.du-bois-light-menu-dark)
    > .du-bois-light-menu-submenu-selected {
    color: #2272b4;
  }
  .du-bois-light-menu-horizontal:not(.du-bois-light-menu-dark)
    > .du-bois-light-menu-item:hover::after,
  .du-bois-light-menu-horizontal:not(.du-bois-light-menu-dark)
    > .du-bois-light-menu-submenu:hover::after,
  .du-bois-light-menu-horizontal:not(.du-bois-light-menu-dark)
    > .du-bois-light-menu-item-active::after,
  .du-bois-light-menu-horizontal:not(.du-bois-light-menu-dark)
    > .du-bois-light-menu-submenu-active::after,
  .du-bois-light-menu-horizontal:not(.du-bois-light-menu-dark)
    > .du-bois-light-menu-item-open::after,
  .du-bois-light-menu-horizontal:not(.du-bois-light-menu-dark)
    > .du-bois-light-menu-submenu-open::after,
  .du-bois-light-menu-horizontal:not(.du-bois-light-menu-dark)
    > .du-bois-light-menu-item-selected::after,
  .du-bois-light-menu-horizontal:not(.du-bois-light-menu-dark)
    > .du-bois-light-menu-submenu-selected::after {
    border-bottom: 2px solid #2272b4;
  }
  .du-bois-light-menu-horizontal > .du-bois-light-menu-item,
  .du-bois-light-menu-horizontal > .du-bois-light-menu-submenu {
    position: relative;
    top: 1px;
    display: inline-block;
    vertical-align: bottom;
  }
  .du-bois-light-menu-horizontal > .du-bois-light-menu-item::after,
  .du-bois-light-menu-horizontal > .du-bois-light-menu-submenu::after {
    position: absolute;
    right: 20px;
    bottom: 0;
    left: 20px;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    content: "";
  }
  .du-bois-light-menu-horizontal
    > .du-bois-light-menu-submenu
    > .du-bois-light-menu-submenu-title {
    padding: 0;
  }
  .du-bois-light-menu-horizontal > .du-bois-light-menu-item a {
    color: #1f272d;
  }
  .du-bois-light-menu-horizontal > .du-bois-light-menu-item a:hover {
    color: #2272b4;
  }
  .du-bois-light-menu-horizontal > .du-bois-light-menu-item a::before {
    bottom: -2px;
  }
  .du-bois-light-menu-horizontal > .du-bois-light-menu-item-selected a {
    color: #2272b4;
  }
  .du-bois-light-menu-horizontal::after {
    display: block;
    clear: both;
    height: 0;
    content: "";
  }
  .du-bois-light-menu-vertical .du-bois-light-menu-item,
  .du-bois-light-menu-vertical-left .du-bois-light-menu-item,
  .du-bois-light-menu-vertical-right .du-bois-light-menu-item,
  .du-bois-light-menu-inline .du-bois-light-menu-item {
    position: relative;
  }
  .du-bois-light-menu-vertical .du-bois-light-menu-item::after,
  .du-bois-light-menu-vertical-left .du-bois-light-menu-item::after,
  .du-bois-light-menu-vertical-right .du-bois-light-menu-item::after,
  .du-bois-light-menu-inline .du-bois-light-menu-item::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border-right: 3px solid #2272b4;
    transform: scaleY(0.0001);
    opacity: 0;
    transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    content: "";
  }
  .du-bois-light-menu-vertical .du-bois-light-menu-item,
  .du-bois-light-menu-vertical-left .du-bois-light-menu-item,
  .du-bois-light-menu-vertical-right .du-bois-light-menu-item,
  .du-bois-light-menu-inline .du-bois-light-menu-item,
  .du-bois-light-menu-vertical .du-bois-light-menu-submenu-title,
  .du-bois-light-menu-vertical-left .du-bois-light-menu-submenu-title,
  .du-bois-light-menu-vertical-right .du-bois-light-menu-submenu-title,
  .du-bois-light-menu-inline .du-bois-light-menu-submenu-title {
    height: 40px;
    margin-top: 4px;
    margin-bottom: 4px;
    padding: 0 16px;
    overflow: hidden;
    line-height: 40px;
    text-overflow: ellipsis;
  }
  .du-bois-light-menu-vertical .du-bois-light-menu-submenu,
  .du-bois-light-menu-vertical-left .du-bois-light-menu-submenu,
  .du-bois-light-menu-vertical-right .du-bois-light-menu-submenu,
  .du-bois-light-menu-inline .du-bois-light-menu-submenu {
    padding-bottom: 0.02px;
  }
  .du-bois-light-menu-vertical .du-bois-light-menu-item:not(:last-child),
  .du-bois-light-menu-vertical-left .du-bois-light-menu-item:not(:last-child),
  .du-bois-light-menu-vertical-right .du-bois-light-menu-item:not(:last-child),
  .du-bois-light-menu-inline .du-bois-light-menu-item:not(:last-child) {
    margin-bottom: 8px;
  }
  .du-bois-light-menu-vertical > .du-bois-light-menu-item,
  .du-bois-light-menu-vertical-left > .du-bois-light-menu-item,
  .du-bois-light-menu-vertical-right > .du-bois-light-menu-item,
  .du-bois-light-menu-inline > .du-bois-light-menu-item,
  .du-bois-light-menu-vertical
    > .du-bois-light-menu-submenu
    > .du-bois-light-menu-submenu-title,
  .du-bois-light-menu-vertical-left
    > .du-bois-light-menu-submenu
    > .du-bois-light-menu-submenu-title,
  .du-bois-light-menu-vertical-right
    > .du-bois-light-menu-submenu
    > .du-bois-light-menu-submenu-title,
  .du-bois-light-menu-inline
    > .du-bois-light-menu-submenu
    > .du-bois-light-menu-submenu-title {
    height: 40px;
    line-height: 40px;
  }
  .du-bois-light-menu-vertical
    .du-bois-light-menu-item-group-list
    .du-bois-light-menu-submenu-title,
  .du-bois-light-menu-vertical .du-bois-light-menu-submenu-title {
    padding-right: 34px;
  }
  .du-bois-light-menu-inline {
    width: 100%;
  }
  .du-bois-light-menu-inline .du-bois-light-menu-selected::after,
  .du-bois-light-menu-inline .du-bois-light-menu-item-selected::after {
    transform: scaleY(1);
    opacity: 1;
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .du-bois-light-menu-inline .du-bois-light-menu-item,
  .du-bois-light-menu-inline .du-bois-light-menu-submenu-title {
    width: calc(100% + 1px);
  }
  .du-bois-light-menu-inline
    .du-bois-light-menu-item-group-list
    .du-bois-light-menu-submenu-title,
  .du-bois-light-menu-inline .du-bois-light-menu-submenu-title {
    padding-right: 34px;
  }
  .du-bois-light-menu-inline.du-bois-light-menu-root .du-bois-light-menu-item,
  .du-bois-light-menu-inline.du-bois-light-menu-root
    .du-bois-light-menu-submenu-title {
    display: flex;
    align-items: center;
    transition: border-color 0.3s, background 0.3s,
      padding 0.1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .du-bois-light-menu-inline.du-bois-light-menu-root
    .du-bois-light-menu-item
    > .du-bois-light-menu-title-content,
  .du-bois-light-menu-inline.du-bois-light-menu-root
    .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-title-content {
    flex: auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .du-bois-light-menu-inline.du-bois-light-menu-root
    .du-bois-light-menu-item
    > *,
  .du-bois-light-menu-inline.du-bois-light-menu-root
    .du-bois-light-menu-submenu-title
    > * {
    flex: none;
  }
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed {
    width: 80px;
  }
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-item,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-item-group
    > .du-bois-light-menu-item-group-list
    > .du-bois-light-menu-item,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-item-group
    > .du-bois-light-menu-item-group-list
    > .du-bois-light-menu-submenu
    > .du-bois-light-menu-submenu-title,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-submenu
    > .du-bois-light-menu-submenu-title {
    left: 0;
    padding: 0 calc(50% - 18px / 2);
    text-overflow: clip;
  }
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-item
    .du-bois-light-menu-submenu-arrow,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-item-group
    > .du-bois-light-menu-item-group-list
    > .du-bois-light-menu-item
    .du-bois-light-menu-submenu-arrow,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-item-group
    > .du-bois-light-menu-item-group-list
    > .du-bois-light-menu-submenu
    > .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-submenu
    > .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow {
    opacity: 0;
  }
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-item
    .du-bois-light-menu-item-icon,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-item-group
    > .du-bois-light-menu-item-group-list
    > .du-bois-light-menu-item
    .du-bois-light-menu-item-icon,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-item-group
    > .du-bois-light-menu-item-group-list
    > .du-bois-light-menu-submenu
    > .du-bois-light-menu-submenu-title
    .du-bois-light-menu-item-icon,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-submenu
    > .du-bois-light-menu-submenu-title
    .du-bois-light-menu-item-icon,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-item
    .anticon,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-item-group
    > .du-bois-light-menu-item-group-list
    > .du-bois-light-menu-item
    .anticon,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-item-group
    > .du-bois-light-menu-item-group-list
    > .du-bois-light-menu-submenu
    > .du-bois-light-menu-submenu-title
    .anticon,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-submenu
    > .du-bois-light-menu-submenu-title
    .anticon {
    margin: 0;
    font-size: 18px;
    line-height: 40px;
  }
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-item
    .du-bois-light-menu-item-icon
    + span,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-item-group
    > .du-bois-light-menu-item-group-list
    > .du-bois-light-menu-item
    .du-bois-light-menu-item-icon
    + span,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-item-group
    > .du-bois-light-menu-item-group-list
    > .du-bois-light-menu-submenu
    > .du-bois-light-menu-submenu-title
    .du-bois-light-menu-item-icon
    + span,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-submenu
    > .du-bois-light-menu-submenu-title
    .du-bois-light-menu-item-icon
    + span,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-item
    .anticon
    + span,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-item-group
    > .du-bois-light-menu-item-group-list
    > .du-bois-light-menu-item
    .anticon
    + span,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-item-group
    > .du-bois-light-menu-item-group-list
    > .du-bois-light-menu-submenu
    > .du-bois-light-menu-submenu-title
    .anticon
    + span,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    > .du-bois-light-menu-submenu
    > .du-bois-light-menu-submenu-title
    .anticon
    + span {
    display: inline-block;
    opacity: 0;
  }
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    .du-bois-light-menu-item-icon,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed .anticon {
    display: inline-block;
  }
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed-tooltip {
    pointer-events: none;
  }
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed-tooltip
    .du-bois-light-menu-item-icon,
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed-tooltip .anticon {
    display: none;
  }
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed-tooltip a {
    color: rgba(255, 255, 255, 0.85);
  }
  .du-bois-light-menu.du-bois-light-menu-inline-collapsed
    .du-bois-light-menu-item-group-title {
    padding-right: 4px;
    padding-left: 4px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .du-bois-light-menu-item-group-list {
    margin: 0;
    padding: 0;
  }
  .du-bois-light-menu-item-group-list .du-bois-light-menu-item,
  .du-bois-light-menu-item-group-list .du-bois-light-menu-submenu-title {
    padding: 0 16px 0 28px;
  }
  .du-bois-light-menu-root.du-bois-light-menu-vertical,
  .du-bois-light-menu-root.du-bois-light-menu-vertical-left,
  .du-bois-light-menu-root.du-bois-light-menu-vertical-right,
  .du-bois-light-menu-root.du-bois-light-menu-inline {
    box-shadow: none;
  }
  .du-bois-light-menu-root.du-bois-light-menu-inline-collapsed
    .du-bois-light-menu-item
    > .du-bois-light-menu-inline-collapsed-noicon,
  .du-bois-light-menu-root.du-bois-light-menu-inline-collapsed
    .du-bois-light-menu-submenu
    .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-inline-collapsed-noicon {
    font-size: 18px;
    text-align: center;
  }
  .du-bois-light-menu-sub.du-bois-light-menu-inline {
    padding: 0;
    background: #fafafa;
    border: 0;
    border-radius: 0;
    box-shadow: none;
  }
  .du-bois-light-menu-sub.du-bois-light-menu-inline > .du-bois-light-menu-item,
  .du-bois-light-menu-sub.du-bois-light-menu-inline
    > .du-bois-light-menu-submenu
    > .du-bois-light-menu-submenu-title {
    height: 40px;
    line-height: 40px;
    list-style-position: inside;
    list-style-type: disc;
  }
  .du-bois-light-menu-sub.du-bois-light-menu-inline
    .du-bois-light-menu-item-group-title {
    padding-left: 32px;
  }
  .du-bois-light-menu-item-disabled,
  .du-bois-light-menu-submenu-disabled {
    color: rgba(0, 0, 0, 0.25) !important;
    background: none;
    cursor: not-allowed;
  }
  .du-bois-light-menu-item-disabled::after,
  .du-bois-light-menu-submenu-disabled::after {
    border-color: transparent !important;
  }
  .du-bois-light-menu-item-disabled a,
  .du-bois-light-menu-submenu-disabled a {
    color: rgba(0, 0, 0, 0.25) !important;
    pointer-events: none;
  }
  .du-bois-light-menu-item-disabled > .du-bois-light-menu-submenu-title,
  .du-bois-light-menu-submenu-disabled > .du-bois-light-menu-submenu-title {
    color: rgba(0, 0, 0, 0.25) !important;
    cursor: not-allowed;
  }
  .du-bois-light-menu-item-disabled
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::before,
  .du-bois-light-menu-submenu-disabled
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::before,
  .du-bois-light-menu-item-disabled
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::after,
  .du-bois-light-menu-submenu-disabled
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::after {
    background: rgba(0, 0, 0, 0.25) !important;
  }
  .du-bois-light-layout-header .du-bois-light-menu {
    line-height: inherit;
  }
  .du-bois-light-menu-light .du-bois-light-menu-item:hover,
  .du-bois-light-menu-light .du-bois-light-menu-item-active,
  .du-bois-light-menu-light
    .du-bois-light-menu:not(.du-bois-light-menu-inline)
    .du-bois-light-menu-submenu-open,
  .du-bois-light-menu-light .du-bois-light-menu-submenu-active,
  .du-bois-light-menu-light .du-bois-light-menu-submenu-title:hover {
    color: #2272b4;
  }
  .du-bois-light-menu.du-bois-light-menu-dark,
  .du-bois-light-menu-dark .du-bois-light-menu-sub,
  .du-bois-light-menu.du-bois-light-menu-dark .du-bois-light-menu-sub {
    color: rgba(255, 255, 255, 0.65);
    background: #001529;
  }
  .du-bois-light-menu.du-bois-light-menu-dark
    .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow,
  .du-bois-light-menu-dark
    .du-bois-light-menu-sub
    .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow,
  .du-bois-light-menu.du-bois-light-menu-dark
    .du-bois-light-menu-sub
    .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow {
    opacity: 0.45;
    transition: all 0.3s;
  }
  .du-bois-light-menu.du-bois-light-menu-dark
    .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow::after,
  .du-bois-light-menu-dark
    .du-bois-light-menu-sub
    .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow::after,
  .du-bois-light-menu.du-bois-light-menu-dark
    .du-bois-light-menu-sub
    .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow::after,
  .du-bois-light-menu.du-bois-light-menu-dark
    .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow::before,
  .du-bois-light-menu-dark
    .du-bois-light-menu-sub
    .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow::before,
  .du-bois-light-menu.du-bois-light-menu-dark
    .du-bois-light-menu-sub
    .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow::before {
    background: #fff;
  }
  .du-bois-light-menu-dark.du-bois-light-menu-submenu-popup {
    background: transparent;
  }
  .du-bois-light-menu-dark .du-bois-light-menu-inline.du-bois-light-menu-sub {
    background: #000c17;
  }
  .du-bois-light-menu-dark.du-bois-light-menu-horizontal {
    border-bottom: 0;
  }
  .du-bois-light-menu-dark.du-bois-light-menu-horizontal
    > .du-bois-light-menu-item,
  .du-bois-light-menu-dark.du-bois-light-menu-horizontal
    > .du-bois-light-menu-submenu {
    top: 0;
    margin-top: 0;
    padding: 0 20px;
    border-color: #001529;
    border-bottom: 0;
  }
  .du-bois-light-menu-dark.du-bois-light-menu-horizontal
    > .du-bois-light-menu-item:hover {
    background-color: #2272b4;
  }
  .du-bois-light-menu-dark.du-bois-light-menu-horizontal
    > .du-bois-light-menu-item
    > a::before {
    bottom: 0;
  }
  .du-bois-light-menu-dark .du-bois-light-menu-item,
  .du-bois-light-menu-dark .du-bois-light-menu-item-group-title,
  .du-bois-light-menu-dark .du-bois-light-menu-item > a,
  .du-bois-light-menu-dark .du-bois-light-menu-item > span > a {
    color: rgba(255, 255, 255, 0.65);
  }
  .du-bois-light-menu-dark.du-bois-light-menu-inline,
  .du-bois-light-menu-dark.du-bois-light-menu-vertical,
  .du-bois-light-menu-dark.du-bois-light-menu-vertical-left,
  .du-bois-light-menu-dark.du-bois-light-menu-vertical-right {
    border-right: 0;
  }
  .du-bois-light-menu-dark.du-bois-light-menu-inline .du-bois-light-menu-item,
  .du-bois-light-menu-dark.du-bois-light-menu-vertical .du-bois-light-menu-item,
  .du-bois-light-menu-dark.du-bois-light-menu-vertical-left
    .du-bois-light-menu-item,
  .du-bois-light-menu-dark.du-bois-light-menu-vertical-right
    .du-bois-light-menu-item {
    left: 0;
    margin-left: 0;
    border-right: 0;
  }
  .du-bois-light-menu-dark.du-bois-light-menu-inline
    .du-bois-light-menu-item::after,
  .du-bois-light-menu-dark.du-bois-light-menu-vertical
    .du-bois-light-menu-item::after,
  .du-bois-light-menu-dark.du-bois-light-menu-vertical-left
    .du-bois-light-menu-item::after,
  .du-bois-light-menu-dark.du-bois-light-menu-vertical-right
    .du-bois-light-menu-item::after {
    border-right: 0;
  }
  .du-bois-light-menu-dark.du-bois-light-menu-inline .du-bois-light-menu-item,
  .du-bois-light-menu-dark.du-bois-light-menu-inline
    .du-bois-light-menu-submenu-title {
    width: 100%;
  }
  .du-bois-light-menu-dark .du-bois-light-menu-item:hover,
  .du-bois-light-menu-dark .du-bois-light-menu-item-active,
  .du-bois-light-menu-dark .du-bois-light-menu-submenu-active,
  .du-bois-light-menu-dark .du-bois-light-menu-submenu-open,
  .du-bois-light-menu-dark .du-bois-light-menu-submenu-selected,
  .du-bois-light-menu-dark .du-bois-light-menu-submenu-title:hover {
    color: #fff;
    background-color: transparent;
  }
  .du-bois-light-menu-dark .du-bois-light-menu-item:hover > a,
  .du-bois-light-menu-dark .du-bois-light-menu-item-active > a,
  .du-bois-light-menu-dark .du-bois-light-menu-submenu-active > a,
  .du-bois-light-menu-dark .du-bois-light-menu-submenu-open > a,
  .du-bois-light-menu-dark .du-bois-light-menu-submenu-selected > a,
  .du-bois-light-menu-dark .du-bois-light-menu-submenu-title:hover > a,
  .du-bois-light-menu-dark .du-bois-light-menu-item:hover > span > a,
  .du-bois-light-menu-dark .du-bois-light-menu-item-active > span > a,
  .du-bois-light-menu-dark .du-bois-light-menu-submenu-active > span > a,
  .du-bois-light-menu-dark .du-bois-light-menu-submenu-open > span > a,
  .du-bois-light-menu-dark .du-bois-light-menu-submenu-selected > span > a,
  .du-bois-light-menu-dark .du-bois-light-menu-submenu-title:hover > span > a {
    color: #fff;
  }
  .du-bois-light-menu-dark
    .du-bois-light-menu-item:hover
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow,
  .du-bois-light-menu-dark
    .du-bois-light-menu-item-active
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow,
  .du-bois-light-menu-dark
    .du-bois-light-menu-submenu-active
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow,
  .du-bois-light-menu-dark
    .du-bois-light-menu-submenu-open
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow,
  .du-bois-light-menu-dark
    .du-bois-light-menu-submenu-selected
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow,
  .du-bois-light-menu-dark
    .du-bois-light-menu-submenu-title:hover
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow {
    opacity: 1;
  }
  .du-bois-light-menu-dark
    .du-bois-light-menu-item:hover
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::after,
  .du-bois-light-menu-dark
    .du-bois-light-menu-item-active
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::after,
  .du-bois-light-menu-dark
    .du-bois-light-menu-submenu-active
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::after,
  .du-bois-light-menu-dark
    .du-bois-light-menu-submenu-open
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::after,
  .du-bois-light-menu-dark
    .du-bois-light-menu-submenu-selected
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::after,
  .du-bois-light-menu-dark
    .du-bois-light-menu-submenu-title:hover
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::after,
  .du-bois-light-menu-dark
    .du-bois-light-menu-item:hover
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::before,
  .du-bois-light-menu-dark
    .du-bois-light-menu-item-active
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::before,
  .du-bois-light-menu-dark
    .du-bois-light-menu-submenu-active
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::before,
  .du-bois-light-menu-dark
    .du-bois-light-menu-submenu-open
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::before,
  .du-bois-light-menu-dark
    .du-bois-light-menu-submenu-selected
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::before,
  .du-bois-light-menu-dark
    .du-bois-light-menu-submenu-title:hover
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::before {
    background: #fff;
  }
  .du-bois-light-menu-dark .du-bois-light-menu-item:hover {
    background-color: transparent;
  }
  .du-bois-light-menu-dark.du-bois-light-menu-dark:not(
      .du-bois-light-menu-horizontal
    )
    .du-bois-light-menu-item-selected {
    background-color: #2272b4;
  }
  .du-bois-light-menu-dark .du-bois-light-menu-item-selected {
    color: #fff;
    border-right: 0;
  }
  .du-bois-light-menu-dark .du-bois-light-menu-item-selected::after {
    border-right: 0;
  }
  .du-bois-light-menu-dark .du-bois-light-menu-item-selected > a,
  .du-bois-light-menu-dark .du-bois-light-menu-item-selected > span > a,
  .du-bois-light-menu-dark .du-bois-light-menu-item-selected > a:hover,
  .du-bois-light-menu-dark .du-bois-light-menu-item-selected > span > a:hover {
    color: #fff;
  }
  .du-bois-light-menu-dark
    .du-bois-light-menu-item-selected
    .du-bois-light-menu-item-icon,
  .du-bois-light-menu-dark .du-bois-light-menu-item-selected .anticon {
    color: #fff;
  }
  .du-bois-light-menu-dark
    .du-bois-light-menu-item-selected
    .du-bois-light-menu-item-icon
    + span,
  .du-bois-light-menu-dark .du-bois-light-menu-item-selected .anticon + span {
    color: #fff;
  }
  .du-bois-light-menu.du-bois-light-menu-dark .du-bois-light-menu-item-selected,
  .du-bois-light-menu-submenu-popup.du-bois-light-menu-dark
    .du-bois-light-menu-item-selected {
    background-color: #2272b4;
  }
  .du-bois-light-menu-dark .du-bois-light-menu-item-disabled,
  .du-bois-light-menu-dark .du-bois-light-menu-submenu-disabled,
  .du-bois-light-menu-dark .du-bois-light-menu-item-disabled > a,
  .du-bois-light-menu-dark .du-bois-light-menu-submenu-disabled > a,
  .du-bois-light-menu-dark .du-bois-light-menu-item-disabled > span > a,
  .du-bois-light-menu-dark .du-bois-light-menu-submenu-disabled > span > a {
    color: rgba(255, 255, 255, 0.35) !important;
    opacity: 0.8;
  }
  .du-bois-light-menu-dark
    .du-bois-light-menu-item-disabled
    > .du-bois-light-menu-submenu-title,
  .du-bois-light-menu-dark
    .du-bois-light-menu-submenu-disabled
    > .du-bois-light-menu-submenu-title {
    color: rgba(255, 255, 255, 0.35) !important;
  }
  .du-bois-light-menu-dark
    .du-bois-light-menu-item-disabled
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::before,
  .du-bois-light-menu-dark
    .du-bois-light-menu-submenu-disabled
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::before,
  .du-bois-light-menu-dark
    .du-bois-light-menu-item-disabled
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::after,
  .du-bois-light-menu-dark
    .du-bois-light-menu-submenu-disabled
    > .du-bois-light-menu-submenu-title
    > .du-bois-light-menu-submenu-arrow::after {
    background: rgba(255, 255, 255, 0.35) !important;
  }
  .du-bois-light-menu.du-bois-light-menu-rtl {
    direction: rtl;
    text-align: right;
  }
  .du-bois-light-menu-rtl .du-bois-light-menu-item-group-title {
    text-align: right;
  }
  .du-bois-light-menu-rtl.du-bois-light-menu-inline,
  .du-bois-light-menu-rtl.du-bois-light-menu-vertical {
    border-right: none;
    border-left: 1px solid #f0f0f0;
  }
  .du-bois-light-menu-rtl.du-bois-light-menu-dark.du-bois-light-menu-inline,
  .du-bois-light-menu-rtl.du-bois-light-menu-dark.du-bois-light-menu-vertical {
    border-left: none;
  }
  .du-bois-light-menu-rtl.du-bois-light-menu-vertical.du-bois-light-menu-sub
    > .du-bois-light-menu-item,
  .du-bois-light-menu-rtl.du-bois-light-menu-vertical-left.du-bois-light-menu-sub
    > .du-bois-light-menu-item,
  .du-bois-light-menu-rtl.du-bois-light-menu-vertical-right.du-bois-light-menu-sub
    > .du-bois-light-menu-item,
  .du-bois-light-menu-rtl.du-bois-light-menu-vertical.du-bois-light-menu-sub
    > .du-bois-light-menu-submenu,
  .du-bois-light-menu-rtl.du-bois-light-menu-vertical-left.du-bois-light-menu-sub
    > .du-bois-light-menu-submenu,
  .du-bois-light-menu-rtl.du-bois-light-menu-vertical-right.du-bois-light-menu-sub
    > .du-bois-light-menu-submenu {
    transform-origin: top right;
  }
  .du-bois-light-menu-rtl
    .du-bois-light-menu-item
    .du-bois-light-menu-item-icon,
  .du-bois-light-menu-rtl
    .du-bois-light-menu-submenu-title
    .du-bois-light-menu-item-icon,
  .du-bois-light-menu-rtl .du-bois-light-menu-item .anticon,
  .du-bois-light-menu-rtl .du-bois-light-menu-submenu-title .anticon {
    margin-right: auto;
    margin-left: 10px;
  }
  .du-bois-light-menu-rtl
    .du-bois-light-menu-item.du-bois-light-menu-item-only-child
    > .du-bois-light-menu-item-icon,
  .du-bois-light-menu-rtl
    .du-bois-light-menu-submenu-title.du-bois-light-menu-item-only-child
    > .du-bois-light-menu-item-icon,
  .du-bois-light-menu-rtl
    .du-bois-light-menu-item.du-bois-light-menu-item-only-child
    > .anticon,
  .du-bois-light-menu-rtl
    .du-bois-light-menu-submenu-title.du-bois-light-menu-item-only-child
    > .anticon {
    margin-left: 0;
  }
  .du-bois-light-menu-submenu-rtl.du-bois-light-menu-submenu-popup {
    transform-origin: 100% 0;
  }
  .du-bois-light-menu-rtl
    .du-bois-light-menu-submenu-vertical
    > .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow,
  .du-bois-light-menu-rtl
    .du-bois-light-menu-submenu-vertical-left
    > .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow,
  .du-bois-light-menu-rtl
    .du-bois-light-menu-submenu-vertical-right
    > .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow,
  .du-bois-light-menu-rtl
    .du-bois-light-menu-submenu-inline
    > .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow {
    right: auto;
    left: 16px;
  }
  .du-bois-light-menu-rtl
    .du-bois-light-menu-submenu-vertical
    > .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow::before,
  .du-bois-light-menu-rtl
    .du-bois-light-menu-submenu-vertical-left
    > .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow::before,
  .du-bois-light-menu-rtl
    .du-bois-light-menu-submenu-vertical-right
    > .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow::before {
    transform: rotate(-45deg) translateY(-2px);
  }
  .du-bois-light-menu-rtl
    .du-bois-light-menu-submenu-vertical
    > .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow::after,
  .du-bois-light-menu-rtl
    .du-bois-light-menu-submenu-vertical-left
    > .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow::after,
  .du-bois-light-menu-rtl
    .du-bois-light-menu-submenu-vertical-right
    > .du-bois-light-menu-submenu-title
    .du-bois-light-menu-submenu-arrow::after {
    transform: rotate(45deg) translateY(2px);
  }
  .du-bois-light-menu-rtl.du-bois-light-menu-vertical
    .du-bois-light-menu-item::after,
  .du-bois-light-menu-rtl.du-bois-light-menu-vertical-left
    .du-bois-light-menu-item::after,
  .du-bois-light-menu-rtl.du-bois-light-menu-vertical-right
    .du-bois-light-menu-item::after,
  .du-bois-light-menu-rtl.du-bois-light-menu-inline
    .du-bois-light-menu-item::after {
    right: auto;
    left: 0;
  }
  .du-bois-light-menu-rtl.du-bois-light-menu-vertical .du-bois-light-menu-item,
  .du-bois-light-menu-rtl.du-bois-light-menu-vertical-left
    .du-bois-light-menu-item,
  .du-bois-light-menu-rtl.du-bois-light-menu-vertical-right
    .du-bois-light-menu-item,
  .du-bois-light-menu-rtl.du-bois-light-menu-inline .du-bois-light-menu-item,
  .du-bois-light-menu-rtl.du-bois-light-menu-vertical
    .du-bois-light-menu-submenu-title,
  .du-bois-light-menu-rtl.du-bois-light-menu-vertical-left
    .du-bois-light-menu-submenu-title,
  .du-bois-light-menu-rtl.du-bois-light-menu-vertical-right
    .du-bois-light-menu-submenu-title,
  .du-bois-light-menu-rtl.du-bois-light-menu-inline
    .du-bois-light-menu-submenu-title {
    text-align: right;
  }
  .du-bois-light-menu-rtl.du-bois-light-menu-inline
    .du-bois-light-menu-submenu-title {
    padding-right: 0;
    padding-left: 34px;
  }
  .du-bois-light-menu-rtl.du-bois-light-menu-vertical
    .du-bois-light-menu-submenu-title {
    padding-right: 16px;
    padding-left: 34px;
  }
  .du-bois-light-menu-rtl.du-bois-light-menu-inline-collapsed.du-bois-light-menu-vertical
    .du-bois-light-menu-submenu-title {
    padding: 0 calc(50% - 18px / 2);
  }
  .du-bois-light-menu-rtl
    .du-bois-light-menu-item-group-list
    .du-bois-light-menu-item,
  .du-bois-light-menu-rtl
    .du-bois-light-menu-item-group-list
    .du-bois-light-menu-submenu-title {
    padding: 0 28px 0 16px;
  }
  .du-bois-light-menu-sub.du-bois-light-menu-inline {
    border: 0;
  }
  .du-bois-light-menu-rtl.du-bois-light-menu-sub.du-bois-light-menu-inline
    .du-bois-light-menu-item-group-title {
    padding-right: 32px;
    padding-left: 0;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-modal {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    pointer-events: none;
    position: relative;
    top: 100px;
    width: auto;
    max-width: calc(100vw - 32px);
    margin: 0 auto;
    padding-bottom: 24px;
  }
  .du-bois-light-modal.du-bois-light-zoom-enter,
  .du-bois-light-modal.du-bois-lightzoom-appear {
    transform: none;
    opacity: 0;
    animation-duration: 0.3s;
    user-select: none;
  }
  .du-bois-light-modal-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
  }
  .du-bois-light-modal-mask-hidden {
    display: none;
  }
  .du-bois-light-modal-wrap {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    outline: 0;
    -webkit-overflow-scrolling: touch;
  }
  .du-bois-light-modal-wrap {
    z-index: 1000;
  }
  .du-bois-light-modal-title {
    margin: 0;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    word-wrap: break-word;
  }
  .du-bois-light-modal-content {
    position: relative;
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
    border-radius: 4px;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    pointer-events: auto;
  }
  .du-bois-light-modal-close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    padding: 0;
    color: #5d7283;
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    background: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
    transition: color 0.3s;
  }
  .du-bois-light-modal-close-x {
    display: block;
    width: 102px;
    height: 102px;
    font-size: 18px;
    font-style: normal;
    line-height: 102px;
    text-align: center;
    text-transform: none;
    text-rendering: auto;
  }
  .du-bois-light-modal-close:focus,
  .du-bois-light-modal-close:hover {
    color: rgba(0, 0, 0, 0.75);
    text-decoration: none;
  }
  .du-bois-light-modal-header {
    padding: 40px 40px 20px;
    color: #1f272d;
    background: #fff;
    border-bottom: 0px solid #f0f0f0;
    border-radius: 4px 4px 0 0;
  }
  .du-bois-light-modal-body {
    padding: 0 40px;
    font-size: 13px;
    line-height: 20px;
    word-wrap: break-word;
  }
  .du-bois-light-modal-footer {
    padding: 0px 0px;
    text-align: right;
    background: transparent;
    border-top: 0px solid #f0f0f0;
    border-radius: 0 0 4px 4px;
  }
  .du-bois-light-modal-footer
    .du-bois-light-btn
    + .du-bois-light-btn:not(.du-bois-light-dropdown-trigger) {
    margin-bottom: 0;
    margin-left: 8px;
  }
  .du-bois-light-modal-open {
    overflow: hidden;
  }
  .du-bois-light-modal-centered {
    text-align: center;
  }
  .du-bois-light-modal-centered::before {
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
    content: "";
  }
  .du-bois-light-modal-centered .du-bois-light-modal {
    top: 0;
    display: inline-block;
    text-align: left;
    vertical-align: middle;
  }
  @media (max-width: 767px) {
    .du-bois-light-modal {
      max-width: calc(100vw - 16px);
      margin: 8px auto;
    }
    .du-bois-light-modal-centered .du-bois-light-modal {
      flex: 1;
    }
  }
  .du-bois-light-modal-confirm .du-bois-light-modal-header {
    display: none;
  }
  .du-bois-light-modal-confirm .du-bois-light-modal-body {
    padding: 32px 32px 24px;
  }
  .du-bois-light-modal-confirm-body-wrapper::before {
    display: table;
    content: "";
  }
  .du-bois-light-modal-confirm-body-wrapper::after {
    display: table;
    clear: both;
    content: "";
  }
  .du-bois-light-modal-confirm-body .du-bois-light-modal-confirm-title {
    display: block;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 18px;
    line-height: 1.4;
  }
  .du-bois-light-modal-confirm-body .du-bois-light-modal-confirm-content {
    margin-top: 8px;
    color: #1f272d;
    font-size: 13px;
  }
  .du-bois-light-modal-confirm-body > .anticon {
    float: left;
    margin-right: 16px;
    font-size: 22px;
  }
  .du-bois-light-modal-confirm-body
    > .anticon
    + .du-bois-light-modal-confirm-title
    + .du-bois-light-modal-confirm-content {
    margin-left: 38px;
  }
  .du-bois-light-modal-confirm .du-bois-light-modal-confirm-btns {
    float: right;
    margin-top: 24px;
  }
  .du-bois-light-modal-confirm
    .du-bois-light-modal-confirm-btns
    .du-bois-light-btn
    + .du-bois-light-btn {
    margin-bottom: 0;
    margin-left: 8px;
  }
  .du-bois-light-modal-confirm-error
    .du-bois-light-modal-confirm-body
    > .anticon {
    color: #c82d4c;
  }
  .du-bois-light-modal-confirm-warning
    .du-bois-light-modal-confirm-body
    > .anticon,
  .du-bois-light-modal-confirm-confirm
    .du-bois-light-modal-confirm-body
    > .anticon {
    color: #af5b23;
  }
  .du-bois-light-modal-confirm-info
    .du-bois-light-modal-confirm-body
    > .anticon {
    color: #64727d;
  }
  .du-bois-light-modal-confirm-success
    .du-bois-light-modal-confirm-body
    > .anticon {
    color: #34824f;
  }
  .du-bois-light-modal-wrap-rtl {
    direction: rtl;
  }
  .du-bois-light-modal-wrap-rtl .du-bois-light-modal-close {
    right: initial;
    left: 0;
  }
  .du-bois-light-modal-wrap-rtl .du-bois-light-modal-footer {
    text-align: left;
  }
  .du-bois-light-modal-wrap-rtl
    .du-bois-light-modal-footer
    .du-bois-light-btn
    + .du-bois-light-btn {
    margin-right: 8px;
    margin-left: 0;
  }
  .du-bois-light-modal-wrap-rtl .du-bois-light-modal-confirm-body {
    direction: rtl;
  }
  .du-bois-light-modal-wrap-rtl .du-bois-light-modal-confirm-body > .anticon {
    float: right;
    margin-right: 0;
    margin-left: 16px;
  }
  .du-bois-light-modal-wrap-rtl
    .du-bois-light-modal-confirm-body
    > .anticon
    + .du-bois-light-modal-confirm-title
    + .du-bois-light-modal-confirm-content {
    margin-right: 38px;
    margin-left: 0;
  }
  .du-bois-light-modal-wrap-rtl .du-bois-light-modal-confirm-btns {
    float: left;
  }
  .du-bois-light-modal-wrap-rtl
    .du-bois-light-modal-confirm-btns
    .du-bois-light-btn
    + .du-bois-light-btn {
    margin-right: 8px;
    margin-left: 0;
  }
  .du-bois-light-modal-wrap-rtl.du-bois-light-modal-centered
    .du-bois-light-modal {
    text-align: right;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-notification {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    position: fixed;
    z-index: 1010;
    margin-right: 24px;
  }
  .du-bois-light-notification-topLeft,
  .du-bois-light-notification-bottomLeft {
    margin-right: 0;
    margin-left: 24px;
  }
  .du-bois-light-notification-topLeft
    .du-bois-light-notification-fade-enter.du-bois-light-notification-fade-enter-active,
  .du-bois-light-notification-bottomLeft
    .du-bois-light-notification-fade-enter.du-bois-light-notification-fade-enter-active,
  .du-bois-light-notification-topLeft
    .du-bois-light-notification-fade-appear.du-bois-light-notification-fade-appear-active,
  .du-bois-light-notification-bottomLeft
    .du-bois-light-notification-fade-appear.du-bois-light-notification-fade-appear-active {
    animation-name: NotificationLeftFadeIn;
  }
  .du-bois-light-notification-close-icon {
    font-size: 13px;
    cursor: pointer;
  }
  .du-bois-light-notification-hook-holder {
    position: relative;
  }
  .du-bois-light-notification-notice {
    position: relative;
    width: 384px;
    max-width: calc(100vw - 24px * 2);
    margin-bottom: 16px;
    margin-left: auto;
    padding: 16px 24px;
    overflow: hidden;
    line-height: 20px;
    word-wrap: break-word;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  }
  .du-bois-light-notification-topLeft .du-bois-light-notification-notice,
  .du-bois-light-notification-bottomLeft .du-bois-light-notification-notice {
    margin-right: auto;
    margin-left: 0;
  }
  .du-bois-light-notification-notice-message {
    margin-bottom: 8px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 18px;
    line-height: 24px;
  }
  .du-bois-light-notification-notice-message-single-line-auto-margin {
    display: block;
    width: calc(384px - 24px * 2 - 24px - 48px - 100%);
    max-width: 4px;
    background-color: transparent;
    pointer-events: none;
  }
  .du-bois-light-notification-notice-message-single-line-auto-margin::before {
    display: block;
    content: "";
  }
  .du-bois-light-notification-notice-description {
    font-size: 13px;
  }
  .du-bois-light-notification-notice-closable
    .du-bois-light-notification-notice-message {
    padding-right: 24px;
  }
  .du-bois-light-notification-notice-with-icon
    .du-bois-light-notification-notice-message {
    margin-bottom: 4px;
    margin-left: 48px;
    font-size: 18px;
  }
  .du-bois-light-notification-notice-with-icon
    .du-bois-light-notification-notice-description {
    margin-left: 48px;
    font-size: 13px;
  }
  .du-bois-light-notification-notice-icon {
    position: absolute;
    margin-left: 4px;
    font-size: 24px;
    line-height: 24px;
  }
  .anticon.du-bois-light-notification-notice-icon-success {
    color: #34824f;
  }
  .anticon.du-bois-light-notification-notice-icon-info {
    color: #64727d;
  }
  .anticon.du-bois-light-notification-notice-icon-warning {
    color: #af5b23;
  }
  .anticon.du-bois-light-notification-notice-icon-error {
    color: #c82d4c;
  }
  .du-bois-light-notification-notice-close {
    position: absolute;
    top: 16px;
    right: 22px;
    color: #5d7283;
    outline: none;
  }
  .du-bois-light-notification-notice-close:hover {
    color: #38444f;
  }
  .du-bois-light-notification-notice-btn {
    float: right;
    margin-top: 16px;
  }
  .du-bois-light-notification .notification-fade-effect {
    animation-duration: 0.24s;
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-fill-mode: both;
  }
  .du-bois-light-notification-fade-enter,
  .du-bois-light-notification-fade-appear {
    animation-duration: 0.24s;
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-fill-mode: both;
    opacity: 0;
    animation-play-state: paused;
  }
  .du-bois-light-notification-fade-leave {
    animation-duration: 0.24s;
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-fill-mode: both;
    animation-duration: 0.2s;
    animation-play-state: paused;
  }
  .du-bois-light-notification-fade-enter.du-bois-light-notification-fade-enter-active,
  .du-bois-light-notification-fade-appear.du-bois-light-notification-fade-appear-active {
    animation-name: NotificationFadeIn;
    animation-play-state: running;
  }
  .du-bois-light-notification-fade-leave.du-bois-light-notification-fade-leave-active {
    animation-name: NotificationFadeOut;
    animation-play-state: running;
  }
  @keyframes NotificationFadeIn {
    0% {
      left: 384px;
      opacity: 0;
    }
    100% {
      left: 0;
      opacity: 1;
    }
  }
  @keyframes NotificationLeftFadeIn {
    0% {
      right: 384px;
      opacity: 0;
    }
    100% {
      right: 0;
      opacity: 1;
    }
  }
  @keyframes NotificationFadeOut {
    0% {
      max-height: 150px;
      margin-bottom: 16px;
      opacity: 1;
    }
    100% {
      max-height: 0;
      margin-bottom: 0;
      padding-top: 0;
      padding-bottom: 0;
      opacity: 0;
    }
  }
  .du-bois-light-notification-rtl {
    direction: rtl;
  }
  .du-bois-light-notification-rtl
    .du-bois-light-notification-notice-closable
    .du-bois-light-notification-notice-message {
    padding-right: 0;
    padding-left: 24px;
  }
  .du-bois-light-notification-rtl
    .du-bois-light-notification-notice-with-icon
    .du-bois-light-notification-notice-message {
    margin-right: 48px;
    margin-left: 0;
  }
  .du-bois-light-notification-rtl
    .du-bois-light-notification-notice-with-icon
    .du-bois-light-notification-notice-description {
    margin-right: 48px;
    margin-left: 0;
  }
  .du-bois-light-notification-rtl .du-bois-light-notification-notice-icon {
    margin-right: 4px;
    margin-left: 0;
  }
  .du-bois-light-notification-rtl .du-bois-light-notification-notice-close {
    right: auto;
    left: 22px;
  }
  .du-bois-light-notification-rtl .du-bois-light-notification-notice-btn {
    float: left;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-popover {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1030;
    font-weight: normal;
    white-space: normal;
    text-align: left;
    cursor: auto;
    user-select: text;
  }
  .du-bois-light-popover::after {
    position: absolute;
    background: rgba(255, 255, 255, 0.01);
    content: "";
  }
  .du-bois-light-popover-hidden {
    display: none;
  }
  .du-bois-light-popover-placement-top,
  .du-bois-light-popover-placement-topLeft,
  .du-bois-light-popover-placement-topRight {
    padding-bottom: 10px;
  }
  .du-bois-light-popover-placement-right,
  .du-bois-light-popover-placement-rightTop,
  .du-bois-light-popover-placement-rightBottom {
    padding-left: 10px;
  }
  .du-bois-light-popover-placement-bottom,
  .du-bois-light-popover-placement-bottomLeft,
  .du-bois-light-popover-placement-bottomRight {
    padding-top: 10px;
  }
  .du-bois-light-popover-placement-left,
  .du-bois-light-popover-placement-leftTop,
  .du-bois-light-popover-placement-leftBottom {
    padding-right: 10px;
  }
  .du-bois-light-popover-inner {
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 4px;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  }
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .du-bois-light-popover {
      /* IE10+ */
    }
    .du-bois-light-popover-inner {
      box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
        0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    }
  }
  .du-bois-light-popover-title {
    min-width: 177px;
    min-height: 32px;
    margin: 0;
    padding: 5px 8px 4px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    border-bottom: 1px solid #f0f0f0;
  }
  .du-bois-light-popover-inner-content {
    padding: 8px 8px;
    color: #1f272d;
  }
  .du-bois-light-popover-message {
    position: relative;
    padding: 4px 0 12px;
    color: #1f272d;
    font-size: 13px;
  }
  .du-bois-light-popover-message > .anticon {
    position: absolute;
    top: 127.5px;
    color: #af5b23;
    font-size: 13px;
  }
  .du-bois-light-popover-message-title {
    padding-left: 21px;
  }
  .du-bois-light-popover-buttons {
    margin-bottom: 4px;
    text-align: right;
  }
  .du-bois-light-popover-buttons button {
    margin-left: 8px;
  }
  .du-bois-light-popover-arrow {
    position: absolute;
    display: block;
    width: 8.48528137px;
    height: 8.48528137px;
    overflow: hidden;
    background: transparent;
    pointer-events: none;
  }
  .du-bois-light-popover-arrow-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 6px;
    height: 6px;
    margin: auto;
    background-color: #fff;
    content: "";
    pointer-events: auto;
  }
  .du-bois-light-popover-placement-top .du-bois-light-popover-arrow,
  .du-bois-light-popover-placement-topLeft .du-bois-light-popover-arrow,
  .du-bois-light-popover-placement-topRight .du-bois-light-popover-arrow {
    bottom: 1.51471863px;
  }
  .du-bois-light-popover-placement-top .du-bois-light-popover-arrow-content,
  .du-bois-light-popover-placement-topLeft .du-bois-light-popover-arrow-content,
  .du-bois-light-popover-placement-topRight
    .du-bois-light-popover-arrow-content {
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
    transform: translateY(-4.24264069px) rotate(45deg);
  }
  .du-bois-light-popover-placement-top .du-bois-light-popover-arrow {
    left: 50%;
    transform: translateX(-50%);
  }
  .du-bois-light-popover-placement-topLeft .du-bois-light-popover-arrow {
    left: 16px;
  }
  .du-bois-light-popover-placement-topRight .du-bois-light-popover-arrow {
    right: 16px;
  }
  .du-bois-light-popover-placement-right .du-bois-light-popover-arrow,
  .du-bois-light-popover-placement-rightTop .du-bois-light-popover-arrow,
  .du-bois-light-popover-placement-rightBottom .du-bois-light-popover-arrow {
    left: 1.51471863px;
  }
  .du-bois-light-popover-placement-right .du-bois-light-popover-arrow-content,
  .du-bois-light-popover-placement-rightTop
    .du-bois-light-popover-arrow-content,
  .du-bois-light-popover-placement-rightBottom
    .du-bois-light-popover-arrow-content {
    box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.07);
    transform: translateX(4.24264069px) rotate(45deg);
  }
  .du-bois-light-popover-placement-right .du-bois-light-popover-arrow {
    top: 50%;
    transform: translateY(-50%);
  }
  .du-bois-light-popover-placement-rightTop .du-bois-light-popover-arrow {
    top: 12px;
  }
  .du-bois-light-popover-placement-rightBottom .du-bois-light-popover-arrow {
    bottom: 12px;
  }
  .du-bois-light-popover-placement-bottom .du-bois-light-popover-arrow,
  .du-bois-light-popover-placement-bottomLeft .du-bois-light-popover-arrow,
  .du-bois-light-popover-placement-bottomRight .du-bois-light-popover-arrow {
    top: 1.51471863px;
  }
  .du-bois-light-popover-placement-bottom .du-bois-light-popover-arrow-content,
  .du-bois-light-popover-placement-bottomLeft
    .du-bois-light-popover-arrow-content,
  .du-bois-light-popover-placement-bottomRight
    .du-bois-light-popover-arrow-content {
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
    transform: translateY(4.24264069px) rotate(45deg);
  }
  .du-bois-light-popover-placement-bottom .du-bois-light-popover-arrow {
    left: 50%;
    transform: translateX(-50%);
  }
  .du-bois-light-popover-placement-bottomLeft .du-bois-light-popover-arrow {
    left: 16px;
  }
  .du-bois-light-popover-placement-bottomRight .du-bois-light-popover-arrow {
    right: 16px;
  }
  .du-bois-light-popover-placement-left .du-bois-light-popover-arrow,
  .du-bois-light-popover-placement-leftTop .du-bois-light-popover-arrow,
  .du-bois-light-popover-placement-leftBottom .du-bois-light-popover-arrow {
    right: 1.51471863px;
  }
  .du-bois-light-popover-placement-left .du-bois-light-popover-arrow-content,
  .du-bois-light-popover-placement-leftTop .du-bois-light-popover-arrow-content,
  .du-bois-light-popover-placement-leftBottom
    .du-bois-light-popover-arrow-content {
    box-shadow: 3px -3px 7px rgba(0, 0, 0, 0.07);
    transform: translateX(-4.24264069px) rotate(45deg);
  }
  .du-bois-light-popover-placement-left .du-bois-light-popover-arrow {
    top: 50%;
    transform: translateY(-50%);
  }
  .du-bois-light-popover-placement-leftTop .du-bois-light-popover-arrow {
    top: 12px;
  }
  .du-bois-light-popover-placement-leftBottom .du-bois-light-popover-arrow {
    bottom: 12px;
  }
  .du-bois-light-popover-pink .du-bois-light-popover-inner {
    background-color: #eb2f96;
  }
  .du-bois-light-popover-pink .du-bois-light-popover-arrow-content {
    background-color: #eb2f96;
  }
  .du-bois-light-popover-magenta .du-bois-light-popover-inner {
    background-color: #eb2f96;
  }
  .du-bois-light-popover-magenta .du-bois-light-popover-arrow-content {
    background-color: #eb2f96;
  }
  .du-bois-light-popover-red .du-bois-light-popover-inner {
    background-color: #f5222d;
  }
  .du-bois-light-popover-red .du-bois-light-popover-arrow-content {
    background-color: #f5222d;
  }
  .du-bois-light-popover-volcano .du-bois-light-popover-inner {
    background-color: #fa541c;
  }
  .du-bois-light-popover-volcano .du-bois-light-popover-arrow-content {
    background-color: #fa541c;
  }
  .du-bois-light-popover-orange .du-bois-light-popover-inner {
    background-color: #fa8c16;
  }
  .du-bois-light-popover-orange .du-bois-light-popover-arrow-content {
    background-color: #fa8c16;
  }
  .du-bois-light-popover-yellow .du-bois-light-popover-inner {
    background-color: #fadb14;
  }
  .du-bois-light-popover-yellow .du-bois-light-popover-arrow-content {
    background-color: #fadb14;
  }
  .du-bois-light-popover-gold .du-bois-light-popover-inner {
    background-color: #faad14;
  }
  .du-bois-light-popover-gold .du-bois-light-popover-arrow-content {
    background-color: #faad14;
  }
  .du-bois-light-popover-cyan .du-bois-light-popover-inner {
    background-color: #13c2c2;
  }
  .du-bois-light-popover-cyan .du-bois-light-popover-arrow-content {
    background-color: #13c2c2;
  }
  .du-bois-light-popover-lime .du-bois-light-popover-inner {
    background-color: #a0d911;
  }
  .du-bois-light-popover-lime .du-bois-light-popover-arrow-content {
    background-color: #a0d911;
  }
  .du-bois-light-popover-green .du-bois-light-popover-inner {
    background-color: #52c41a;
  }
  .du-bois-light-popover-green .du-bois-light-popover-arrow-content {
    background-color: #52c41a;
  }
  .du-bois-light-popover-blue .du-bois-light-popover-inner {
    background-color: #1890ff;
  }
  .du-bois-light-popover-blue .du-bois-light-popover-arrow-content {
    background-color: #1890ff;
  }
  .du-bois-light-popover-geekblue .du-bois-light-popover-inner {
    background-color: #2f54eb;
  }
  .du-bois-light-popover-geekblue .du-bois-light-popover-arrow-content {
    background-color: #2f54eb;
  }
  .du-bois-light-popover-purple .du-bois-light-popover-inner {
    background-color: #722ed1;
  }
  .du-bois-light-popover-purple .du-bois-light-popover-arrow-content {
    background-color: #722ed1;
  }
  .du-bois-light-popover-rtl {
    direction: rtl;
    text-align: right;
  }
  .du-bois-light-popover-rtl .du-bois-light-popover-message-title {
    padding-right: 21px;
    padding-left: 8px;
  }
  .du-bois-light-popover-rtl .du-bois-light-popover-buttons {
    text-align: left;
  }
  .du-bois-light-popover-rtl .du-bois-light-popover-buttons button {
    margin-right: 8px;
    margin-left: 0;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-radio-group {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    display: inline-block;
    font-size: 0;
  }
  .du-bois-light-radio-group .du-bois-light-badge-count {
    z-index: 1;
  }
  .du-bois-light-radio-group
    > .du-bois-light-badge:not(:first-of-type)
    > .du-bois-light-radio-button-wrapper {
    border-left: none;
  }
  .du-bois-light-radio-wrapper {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-flex;
    align-items: baseline;
    margin-right: 8px;
    cursor: pointer;
  }
  .du-bois-light-radio-wrapper::after {
    display: inline-block;
    width: 0;
    overflow: hidden;
    content: "a0";
  }
  .du-bois-light-radio {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    top: 0.2em;
    display: inline-block;
    outline: none;
    cursor: pointer;
  }
  .du-bois-light-radio-wrapper:hover .du-bois-light-radio,
  .du-bois-light-radio:hover .du-bois-light-radio-inner,
  .du-bois-light-radio-input:focus + .du-bois-light-radio-inner {
    border-color: #2272b4;
  }
  .du-bois-light-radio-input:focus + .du-bois-light-radio-inner {
    box-shadow: 0 0 0 3px rgba(34, 114, 180, 0.08);
  }
  .du-bois-light-radio-checked::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #2272b4;
    border-radius: 50%;
    visibility: hidden;
    animation: antRadioEffect 0.36s ease-in-out;
    animation-fill-mode: both;
    content: "";
  }
  .du-bois-light-radio:hover::after,
  .du-bois-light-radio-wrapper:hover .du-bois-light-radio::after {
    visibility: visible;
  }
  .du-bois-light-radio-inner {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border-color: #cddae5;
    border-style: solid;
    border-width: 1px;
    border-radius: 50%;
    transition: all 0.3s;
  }
  .du-bois-light-radio-inner::after {
    position: absolute;
    top: 3px;
    left: 3px;
    display: block;
    width: 8px;
    height: 8px;
    background-color: #2272b4;
    border-top: 0;
    border-left: 0;
    border-radius: 8px;
    transform: scale(0);
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    content: " ";
  }
  .du-bois-light-radio-input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    cursor: pointer;
    opacity: 0;
  }
  .du-bois-light-radio-checked .du-bois-light-radio-inner {
    border-color: #2272b4;
  }
  .du-bois-light-radio-checked .du-bois-light-radio-inner::after {
    transform: scale(1);
    opacity: 1;
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .du-bois-light-radio-disabled {
    cursor: not-allowed;
  }
  .du-bois-light-radio-disabled .du-bois-light-radio-inner {
    background-color: #f5f5f5;
    border-color: #cddae5 !important;
    cursor: not-allowed;
  }
  .du-bois-light-radio-disabled .du-bois-light-radio-inner::after {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .du-bois-light-radio-disabled .du-bois-light-radio-input {
    cursor: not-allowed;
  }
  .du-bois-light-radio-disabled + span {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  span.du-bois-light-radio + * {
    padding-right: 8px;
    padding-left: 8px;
  }
  .du-bois-light-radio-button-wrapper {
    position: relative;
    display: inline-block;
    height: 40px;
    margin: 0;
    padding: 0 7px;
    color: #1f272d;
    font-size: 13px;
    line-height: 38px;
    background: #fff;
    border: 1px solid #cddae5;
    border-top-width: 1.02px;
    border-left-width: 0;
    cursor: pointer;
    transition: color 0.3s, background 0.3s, border-color 0.3s, box-shadow 0.3s;
  }
  .du-bois-light-radio-button-wrapper a {
    color: #1f272d;
  }
  .du-bois-light-radio-button-wrapper > .du-bois-light-radio-button {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
  .du-bois-light-radio-group-large .du-bois-light-radio-button-wrapper {
    height: 40px;
    font-size: 18px;
    line-height: 38px;
  }
  .du-bois-light-radio-group-small .du-bois-light-radio-button-wrapper {
    height: 32px;
    padding: 0 3px;
    line-height: 30px;
  }
  .du-bois-light-radio-button-wrapper:not(:first-of-type)::before {
    position: absolute;
    top: -1px;
    left: -1px;
    display: block;
    box-sizing: content-box;
    width: 1px;
    height: 100%;
    padding: 1px 0;
    background-color: #cddae5;
    transition: background-color 0.3s;
    content: "";
  }
  .du-bois-light-radio-button-wrapper:first-of-type {
    border-left: 1px solid #cddae5;
    border-radius: 4px 0 0 4px;
  }
  .du-bois-light-radio-button-wrapper:last-child {
    border-radius: 0 4px 4px 0;
  }
  .du-bois-light-radio-button-wrapper:first-of-type:last-child {
    border-radius: 4px;
  }
  .du-bois-light-radio-button-wrapper:hover {
    position: relative;
    color: #2272b4;
  }
  .du-bois-light-radio-button-wrapper:focus-within {
    box-shadow: 0 0 0 3px rgba(34, 114, 180, 0.08);
  }
  .du-bois-light-radio-button-wrapper .du-bois-light-radio-inner,
  .du-bois-light-radio-button-wrapper input[type="checkbox"],
  .du-bois-light-radio-button-wrapper input[type="radio"] {
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
  }
  .du-bois-light-radio-button-wrapper-checked:not(
      .du-bois-light-radio-button-wrapper-disabled
    ) {
    z-index: 1;
    color: #2272b4;
    background: #fff;
    border-color: #2272b4;
  }
  .du-bois-light-radio-button-wrapper-checked:not(
      .du-bois-light-radio-button-wrapper-disabled
    )::before {
    background-color: #2272b4;
  }
  .du-bois-light-radio-button-wrapper-checked:not(
      .du-bois-light-radio-button-wrapper-disabled
    ):first-of-type {
    border-color: #2272b4;
  }
  .du-bois-light-radio-button-wrapper-checked:not(
      .du-bois-light-radio-button-wrapper-disabled
    ):hover {
    color: #448dc2;
    border-color: #448dc2;
  }
  .du-bois-light-radio-button-wrapper-checked:not(
      .du-bois-light-radio-button-wrapper-disabled
    ):hover::before {
    background-color: #448dc2;
  }
  .du-bois-light-radio-button-wrapper-checked:not(
      .du-bois-light-radio-button-wrapper-disabled
    ):active {
    color: #14538f;
    border-color: #14538f;
  }
  .du-bois-light-radio-button-wrapper-checked:not(
      .du-bois-light-radio-button-wrapper-disabled
    ):active::before {
    background-color: #14538f;
  }
  .du-bois-light-radio-button-wrapper-checked:not(
      .du-bois-light-radio-button-wrapper-disabled
    ):focus-within {
    box-shadow: 0 0 0 3px rgba(34, 114, 180, 0.08);
  }
  .du-bois-light-radio-group-solid
    .du-bois-light-radio-button-wrapper-checked:not(
      .du-bois-light-radio-button-wrapper-disabled
    ) {
    color: #fff;
    background: #2272b4;
    border-color: #2272b4;
  }
  .du-bois-light-radio-group-solid
    .du-bois-light-radio-button-wrapper-checked:not(
      .du-bois-light-radio-button-wrapper-disabled
    ):hover {
    color: #fff;
    background: #448dc2;
    border-color: #448dc2;
  }
  .du-bois-light-radio-group-solid
    .du-bois-light-radio-button-wrapper-checked:not(
      .du-bois-light-radio-button-wrapper-disabled
    ):active {
    color: #fff;
    background: #14538f;
    border-color: #14538f;
  }
  .du-bois-light-radio-group-solid
    .du-bois-light-radio-button-wrapper-checked:not(
      .du-bois-light-radio-button-wrapper-disabled
    ):focus-within {
    box-shadow: 0 0 0 3px rgba(34, 114, 180, 0.08);
  }
  .du-bois-light-radio-button-wrapper-disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #cddae5;
    cursor: not-allowed;
  }
  .du-bois-light-radio-button-wrapper-disabled:first-of-type,
  .du-bois-light-radio-button-wrapper-disabled:hover {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #cddae5;
  }
  .du-bois-light-radio-button-wrapper-disabled:first-of-type {
    border-left-color: #cddae5;
  }
  .du-bois-light-radio-button-wrapper-disabled.du-bois-light-radio-button-wrapper-checked {
    color: rgba(0, 0, 0, 0.25);
    background-color: #e6e6e6;
    border-color: #cddae5;
    box-shadow: none;
  }
  @keyframes antRadioEffect {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    100% {
      transform: scale(1.6);
      opacity: 0;
    }
  }
  .du-bois-light-radio-group.du-bois-light-radio-group-rtl {
    direction: rtl;
  }
  .du-bois-light-radio-wrapper.du-bois-light-radio-wrapper-rtl {
    margin-right: 0;
    margin-left: 8px;
    direction: rtl;
  }
  .du-bois-light-radio-button-wrapper.du-bois-light-radio-button-wrapper-rtl {
    border-right-width: 0;
    border-left-width: 1px;
  }
  .du-bois-light-radio-button-wrapper.du-bois-light-radio-button-wrapper-rtl.du-bois-light-radio-button-wrapper:not(
      :first-of-type
    )::before {
    right: -1px;
    left: 0;
  }
  .du-bois-light-radio-button-wrapper.du-bois-light-radio-button-wrapper-rtl.du-bois-light-radio-button-wrapper:first-of-type {
    border-right: 1px solid #cddae5;
    border-radius: 0 4px 4px 0;
  }
  .du-bois-light-radio-button-wrapper-checked:not(
      [class*=" du-bois-light-radio-button-wrapper-disabled"]
    ).du-bois-light-radio-button-wrapper:first-of-type {
    border-right-color: #448dc2;
  }
  .du-bois-light-radio-button-wrapper.du-bois-light-radio-button-wrapper-rtl.du-bois-light-radio-button-wrapper:last-child {
    border-radius: 4px 0 0 4px;
  }
  .du-bois-light-radio-button-wrapper.du-bois-light-radio-button-wrapper-rtl.du-bois-light-radio-button-wrapper-disabled:first-of-type {
    border-right-color: #cddae5;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-skeleton {
    display: table;
    width: 100%;
  }
  .du-bois-light-skeleton-header {
    display: table-cell;
    padding-right: 8px;
    vertical-align: top;
  }
  .du-bois-light-skeleton-header .du-bois-light-skeleton-avatar {
    display: inline-block;
    vertical-align: top;
    background: rgba(190, 190, 190, 0.2);
    width: 32px;
    height: 32px;
    line-height: 32px;
  }
  .du-bois-light-skeleton-header
    .du-bois-light-skeleton-avatar.du-bois-light-skeleton-avatar-circle {
    border-radius: 50%;
  }
  .du-bois-light-skeleton-header .du-bois-light-skeleton-avatar-lg {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
  .du-bois-light-skeleton-header
    .du-bois-light-skeleton-avatar-lg.du-bois-light-skeleton-avatar-circle {
    border-radius: 50%;
  }
  .du-bois-light-skeleton-header .du-bois-light-skeleton-avatar-sm {
    width: 24px;
    height: 24px;
    line-height: 24px;
  }
  .du-bois-light-skeleton-header
    .du-bois-light-skeleton-avatar-sm.du-bois-light-skeleton-avatar-circle {
    border-radius: 50%;
  }
  .du-bois-light-skeleton-content {
    display: table-cell;
    width: 100%;
    vertical-align: top;
  }
  .du-bois-light-skeleton-content .du-bois-light-skeleton-title {
    width: 100%;
    height: 16px;
    margin-top: 16px;
    background: rgba(190, 190, 190, 0.2);
    border-radius: 4px;
  }
  .du-bois-light-skeleton-content
    .du-bois-light-skeleton-title
    + .du-bois-light-skeleton-paragraph {
    margin-top: 24px;
  }
  .du-bois-light-skeleton-content .du-bois-light-skeleton-paragraph {
    padding: 0;
  }
  .du-bois-light-skeleton-content .du-bois-light-skeleton-paragraph > li {
    width: 100%;
    height: 16px;
    list-style: none;
    background: rgba(190, 190, 190, 0.2);
    border-radius: 4px;
  }
  .du-bois-light-skeleton-content
    .du-bois-light-skeleton-paragraph
    > li:last-child:not(:first-of-type):not(:nth-child(2)) {
    width: 61%;
  }
  .du-bois-light-skeleton-content .du-bois-light-skeleton-paragraph > li + li {
    margin-top: 16px;
  }
  .du-bois-light-skeleton-with-avatar
    .du-bois-light-skeleton-content
    .du-bois-light-skeleton-title {
    margin-top: 12px;
  }
  .du-bois-light-skeleton-with-avatar
    .du-bois-light-skeleton-content
    .du-bois-light-skeleton-title
    + .du-bois-light-skeleton-paragraph {
    margin-top: 28px;
  }
  .du-bois-light-skeleton-round
    .du-bois-light-skeleton-content
    .du-bois-light-skeleton-title,
  .du-bois-light-skeleton-round
    .du-bois-light-skeleton-content
    .du-bois-light-skeleton-paragraph
    > li {
    border-radius: 100px;
  }
  .du-bois-light-skeleton.du-bois-light-skeleton-active
    .du-bois-light-skeleton-content
    .du-bois-light-skeleton-title,
  .du-bois-light-skeleton.du-bois-light-skeleton-active
    .du-bois-light-skeleton-content
    .du-bois-light-skeleton-paragraph
    > li {
    background: linear-gradient(
      90deg,
      rgba(190, 190, 190, 0.2) 25%,
      rgba(129, 129, 129, 0.24) 37%,
      rgba(190, 190, 190, 0.2) 63%
    );
    background-size: 400% 100%;
    animation: du-bois-light-skeleton-loading 1.4s ease infinite;
  }
  .du-bois-light-skeleton.du-bois-light-skeleton-active
    .du-bois-light-skeleton-avatar {
    background: linear-gradient(
      90deg,
      rgba(190, 190, 190, 0.2) 25%,
      rgba(129, 129, 129, 0.24) 37%,
      rgba(190, 190, 190, 0.2) 63%
    );
    background-size: 400% 100%;
    animation: du-bois-light-skeleton-loading 1.4s ease infinite;
  }
  .du-bois-light-skeleton.du-bois-light-skeleton-active
    .du-bois-light-skeleton-button {
    background: linear-gradient(
      90deg,
      rgba(190, 190, 190, 0.2) 25%,
      rgba(129, 129, 129, 0.24) 37%,
      rgba(190, 190, 190, 0.2) 63%
    );
    background-size: 400% 100%;
    animation: du-bois-light-skeleton-loading 1.4s ease infinite;
  }
  .du-bois-light-skeleton.du-bois-light-skeleton-active
    .du-bois-light-skeleton-input {
    background: linear-gradient(
      90deg,
      rgba(190, 190, 190, 0.2) 25%,
      rgba(129, 129, 129, 0.24) 37%,
      rgba(190, 190, 190, 0.2) 63%
    );
    background-size: 400% 100%;
    animation: du-bois-light-skeleton-loading 1.4s ease infinite;
  }
  .du-bois-light-skeleton.du-bois-light-skeleton-active
    .du-bois-light-skeleton-image {
    background: linear-gradient(
      90deg,
      rgba(190, 190, 190, 0.2) 25%,
      rgba(129, 129, 129, 0.24) 37%,
      rgba(190, 190, 190, 0.2) 63%
    );
    background-size: 400% 100%;
    animation: du-bois-light-skeleton-loading 1.4s ease infinite;
  }
  .du-bois-light-skeleton-element {
    display: inline-block;
    width: auto;
  }
  .du-bois-light-skeleton-element .du-bois-light-skeleton-button {
    display: inline-block;
    vertical-align: top;
    background: rgba(190, 190, 190, 0.2);
    border-radius: 4px;
    width: 80px;
    height: 40px;
    line-height: 40px;
  }
  .du-bois-light-skeleton-element
    .du-bois-light-skeleton-button.du-bois-light-skeleton-button-circle {
    width: 40px;
    border-radius: 50%;
  }
  .du-bois-light-skeleton-element
    .du-bois-light-skeleton-button.du-bois-light-skeleton-button-round {
    border-radius: 40px;
  }
  .du-bois-light-skeleton-element .du-bois-light-skeleton-button-lg {
    width: 80px;
    height: 40px;
    line-height: 40px;
  }
  .du-bois-light-skeleton-element
    .du-bois-light-skeleton-button-lg.du-bois-light-skeleton-button-circle {
    width: 40px;
    border-radius: 50%;
  }
  .du-bois-light-skeleton-element
    .du-bois-light-skeleton-button-lg.du-bois-light-skeleton-button-round {
    border-radius: 40px;
  }
  .du-bois-light-skeleton-element .du-bois-light-skeleton-button-sm {
    width: 64px;
    height: 32px;
    line-height: 32px;
  }
  .du-bois-light-skeleton-element
    .du-bois-light-skeleton-button-sm.du-bois-light-skeleton-button-circle {
    width: 32px;
    border-radius: 50%;
  }
  .du-bois-light-skeleton-element
    .du-bois-light-skeleton-button-sm.du-bois-light-skeleton-button-round {
    border-radius: 32px;
  }
  .du-bois-light-skeleton-element .du-bois-light-skeleton-avatar {
    display: inline-block;
    vertical-align: top;
    background: rgba(190, 190, 190, 0.2);
    width: 32px;
    height: 32px;
    line-height: 32px;
  }
  .du-bois-light-skeleton-element
    .du-bois-light-skeleton-avatar.du-bois-light-skeleton-avatar-circle {
    border-radius: 50%;
  }
  .du-bois-light-skeleton-element .du-bois-light-skeleton-avatar-lg {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
  .du-bois-light-skeleton-element
    .du-bois-light-skeleton-avatar-lg.du-bois-light-skeleton-avatar-circle {
    border-radius: 50%;
  }
  .du-bois-light-skeleton-element .du-bois-light-skeleton-avatar-sm {
    width: 24px;
    height: 24px;
    line-height: 24px;
  }
  .du-bois-light-skeleton-element
    .du-bois-light-skeleton-avatar-sm.du-bois-light-skeleton-avatar-circle {
    border-radius: 50%;
  }
  .du-bois-light-skeleton-element .du-bois-light-skeleton-input {
    display: inline-block;
    vertical-align: top;
    background: rgba(190, 190, 190, 0.2);
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .du-bois-light-skeleton-element .du-bois-light-skeleton-input-lg {
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .du-bois-light-skeleton-element .du-bois-light-skeleton-input-sm {
    width: 100%;
    height: 32px;
    line-height: 32px;
  }
  .du-bois-light-skeleton-element .du-bois-light-skeleton-image {
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: top;
    background: rgba(190, 190, 190, 0.2);
    width: 96px;
    height: 96px;
    line-height: 96px;
  }
  .du-bois-light-skeleton-element
    .du-bois-light-skeleton-image.du-bois-light-skeleton-image-circle {
    border-radius: 50%;
  }
  .du-bois-light-skeleton-element .du-bois-light-skeleton-image-path {
    fill: #bfbfbf;
  }
  .du-bois-light-skeleton-element .du-bois-light-skeleton-image-svg {
    width: 48px;
    height: 48px;
    line-height: 48px;
    max-width: 192px;
    max-height: 192px;
  }
  .du-bois-light-skeleton-element
    .du-bois-light-skeleton-image-svg.du-bois-light-skeleton-image-circle {
    border-radius: 50%;
  }
  @keyframes du-bois-light-skeleton-loading {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
  .du-bois-light-skeleton-rtl {
    direction: rtl;
  }
  .du-bois-light-skeleton-rtl .du-bois-light-skeleton-header {
    padding-right: 0;
    padding-left: 16px;
  }
  .du-bois-light-skeleton-rtl.du-bois-light-skeleton.du-bois-light-skeleton-active
    .du-bois-light-skeleton-content
    .du-bois-light-skeleton-title,
  .du-bois-light-skeleton-rtl.du-bois-light-skeleton.du-bois-light-skeleton-active
    .du-bois-light-skeleton-content
    .du-bois-light-skeleton-paragraph
    > li {
    animation-name: du-bois-light-skeleton-loading-rtl;
  }
  .du-bois-light-skeleton-rtl.du-bois-light-skeleton.du-bois-light-skeleton-active
    .du-bois-light-skeleton-avatar {
    animation-name: du-bois-light-skeleton-loading-rtl;
  }
  @keyframes du-bois-light-skeleton-loading-rtl {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-space {
    display: inline-flex;
  }
  .du-bois-light-space-vertical {
    flex-direction: column;
  }
  .du-bois-light-space-align-center {
    align-items: center;
  }
  .du-bois-light-space-align-start {
    align-items: flex-start;
  }
  .du-bois-light-space-align-end {
    align-items: flex-end;
  }
  .du-bois-light-space-align-baseline {
    align-items: baseline;
  }
  .du-bois-light-space-item:empty {
    display: none;
  }
  .du-bois-light-space-rtl {
    direction: rtl;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-table.du-bois-light-table-middle {
    font-size: 13px;
  }
  .du-bois-light-table.du-bois-light-table-middle .du-bois-light-table-title,
  .du-bois-light-table.du-bois-light-table-middle .du-bois-light-table-footer,
  .du-bois-light-table.du-bois-light-table-middle
    .du-bois-light-table-thead
    > tr
    > th,
  .du-bois-light-table.du-bois-light-table-middle
    .du-bois-light-table-tbody
    > tr
    > td,
  .du-bois-light-table.du-bois-light-table-middle tfoot > tr > th,
  .du-bois-light-table.du-bois-light-table-middle tfoot > tr > td {
    padding: 12px 8px;
  }
  .du-bois-light-table.du-bois-light-table-middle
    .du-bois-light-table-filter-trigger {
    margin-right: -4px;
  }
  .du-bois-light-table.du-bois-light-table-middle
    .du-bois-light-table-expanded-row-fixed {
    margin: -12px -8px;
  }
  .du-bois-light-table.du-bois-light-table-middle
    .du-bois-light-table-tbody
    .du-bois-light-table-wrapper:only-child
    .du-bois-light-table {
    margin: -12px -8px -12px 25px;
  }
  .du-bois-light-table.du-bois-light-table-small {
    font-size: 13px;
  }
  .du-bois-light-table.du-bois-light-table-small .du-bois-light-table-title,
  .du-bois-light-table.du-bois-light-table-small .du-bois-light-table-footer,
  .du-bois-light-table.du-bois-light-table-small
    .du-bois-light-table-thead
    > tr
    > th,
  .du-bois-light-table.du-bois-light-table-small
    .du-bois-light-table-tbody
    > tr
    > td,
  .du-bois-light-table.du-bois-light-table-small tfoot > tr > th,
  .du-bois-light-table.du-bois-light-table-small tfoot > tr > td {
    padding: 8px 8px;
  }
  .du-bois-light-table.du-bois-light-table-small
    .du-bois-light-table-filter-trigger {
    margin-right: -4px;
  }
  .du-bois-light-table.du-bois-light-table-small
    .du-bois-light-table-expanded-row-fixed {
    margin: -8px -8px;
  }
  .du-bois-light-table.du-bois-light-table-small
    .du-bois-light-table-tbody
    .du-bois-light-table-wrapper:only-child
    .du-bois-light-table {
    margin: -8px -8px -8px 25px;
  }
  .du-bois-light-table-small .du-bois-light-table-thead > tr > th {
    background-color: #fafafa;
  }
  .du-bois-light-table-small .du-bois-light-table-selection-column {
    width: 46px;
    min-width: 46px;
  }
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-title {
    border: 1px solid #f0f0f0;
    border-bottom: 0;
  }
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container {
    border-left: 1px solid #f0f0f0;
  }
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-content
    > table
    > thead
    > tr
    > th,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-header
    > table
    > thead
    > tr
    > th,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-body
    > table
    > thead
    > tr
    > th,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-summary
    > table
    > thead
    > tr
    > th,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-content
    > table
    > tbody
    > tr
    > td,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-header
    > table
    > tbody
    > tr
    > td,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-body
    > table
    > tbody
    > tr
    > td,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-summary
    > table
    > tbody
    > tr
    > td,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-content
    > table
    > tfoot
    > tr
    > th,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-header
    > table
    > tfoot
    > tr
    > th,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-body
    > table
    > tfoot
    > tr
    > th,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-summary
    > table
    > tfoot
    > tr
    > th,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-content
    > table
    > tfoot
    > tr
    > td,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-header
    > table
    > tfoot
    > tr
    > td,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-body
    > table
    > tfoot
    > tr
    > td,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-summary
    > table
    > tfoot
    > tr
    > td {
    border-right: 1px solid #f0f0f0;
  }
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-content
    > table
    > thead
    > tr:not(:last-child)
    > th,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-header
    > table
    > thead
    > tr:not(:last-child)
    > th,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-body
    > table
    > thead
    > tr:not(:last-child)
    > th,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-summary
    > table
    > thead
    > tr:not(:last-child)
    > th {
    border-bottom: 1px solid #f0f0f0;
  }
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-content
    > table
    > thead
    > tr
    > th::before,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-header
    > table
    > thead
    > tr
    > th::before,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-body
    > table
    > thead
    > tr
    > th::before,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-summary
    > table
    > thead
    > tr
    > th::before {
    background-color: transparent !important;
  }
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-content
    > table
    > thead
    > tr
    > .du-bois-light-table-cell-fix-right-first::after,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-header
    > table
    > thead
    > tr
    > .du-bois-light-table-cell-fix-right-first::after,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-body
    > table
    > thead
    > tr
    > .du-bois-light-table-cell-fix-right-first::after,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-summary
    > table
    > thead
    > tr
    > .du-bois-light-table-cell-fix-right-first::after,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-content
    > table
    > tbody
    > tr
    > .du-bois-light-table-cell-fix-right-first::after,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-header
    > table
    > tbody
    > tr
    > .du-bois-light-table-cell-fix-right-first::after,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-body
    > table
    > tbody
    > tr
    > .du-bois-light-table-cell-fix-right-first::after,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-summary
    > table
    > tbody
    > tr
    > .du-bois-light-table-cell-fix-right-first::after,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-content
    > table
    > tfoot
    > tr
    > .du-bois-light-table-cell-fix-right-first::after,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-header
    > table
    > tfoot
    > tr
    > .du-bois-light-table-cell-fix-right-first::after,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-body
    > table
    > tfoot
    > tr
    > .du-bois-light-table-cell-fix-right-first::after,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-summary
    > table
    > tfoot
    > tr
    > .du-bois-light-table-cell-fix-right-first::after {
    border-right: 1px solid #f0f0f0;
  }
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-content
    > table
    > tbody
    > tr
    > td
    > .du-bois-light-table-expanded-row-fixed,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-header
    > table
    > tbody
    > tr
    > td
    > .du-bois-light-table-expanded-row-fixed,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-body
    > table
    > tbody
    > tr
    > td
    > .du-bois-light-table-expanded-row-fixed,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-summary
    > table
    > tbody
    > tr
    > td
    > .du-bois-light-table-expanded-row-fixed {
    margin: -16px -17px;
  }
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-content
    > table
    > tbody
    > tr
    > td
    > .du-bois-light-table-expanded-row-fixed::after,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-header
    > table
    > tbody
    > tr
    > td
    > .du-bois-light-table-expanded-row-fixed::after,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-body
    > table
    > tbody
    > tr
    > td
    > .du-bois-light-table-expanded-row-fixed::after,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-summary
    > table
    > tbody
    > tr
    > td
    > .du-bois-light-table-expanded-row-fixed::after {
    position: absolute;
    top: 0;
    right: 1px;
    bottom: 0;
    border-right: 1px solid #f0f0f0;
    content: "";
  }
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-content
    > table,
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-container
    > .du-bois-light-table-header
    > table {
    border-top: 1px solid #f0f0f0;
  }
  .du-bois-light-table.du-bois-light-table-bordered.du-bois-light-table-scroll-horizontal
    > .du-bois-light-table-container
    > .du-bois-light-table-body
    > table
    > tbody
    > tr.du-bois-light-table-expanded-row
    > td,
  .du-bois-light-table.du-bois-light-table-bordered.du-bois-light-table-scroll-horizontal
    > .du-bois-light-table-container
    > .du-bois-light-table-body
    > table
    > tbody
    > tr.du-bois-light-table-placeholder
    > td {
    border-right: 0;
  }
  .du-bois-light-table.du-bois-light-table-bordered.du-bois-light-table-middle
    > .du-bois-light-table-container
    > .du-bois-light-table-content
    > table
    > tbody
    > tr
    > td
    > .du-bois-light-table-expanded-row-fixed,
  .du-bois-light-table.du-bois-light-table-bordered.du-bois-light-table-middle
    > .du-bois-light-table-container
    > .du-bois-light-table-body
    > table
    > tbody
    > tr
    > td
    > .du-bois-light-table-expanded-row-fixed {
    margin: -12px -9px;
  }
  .du-bois-light-table.du-bois-light-table-bordered.du-bois-light-table-small
    > .du-bois-light-table-container
    > .du-bois-light-table-content
    > table
    > tbody
    > tr
    > td
    > .du-bois-light-table-expanded-row-fixed,
  .du-bois-light-table.du-bois-light-table-bordered.du-bois-light-table-small
    > .du-bois-light-table-container
    > .du-bois-light-table-body
    > table
    > tbody
    > tr
    > td
    > .du-bois-light-table-expanded-row-fixed {
    margin: -8px -9px;
  }
  .du-bois-light-table.du-bois-light-table-bordered
    > .du-bois-light-table-footer {
    border: 1px solid #f0f0f0;
    border-top: 0;
  }
  .du-bois-light-table-cell .du-bois-light-table-container:first-of-type {
    border-top: 0;
  }
  .du-bois-light-table-cell-scrollbar {
    box-shadow: 0 1px 0 1px #fafafa;
  }
  .du-bois-light-table-wrapper {
    clear: both;
    max-width: 100%;
  }
  .du-bois-light-table-wrapper::before {
    display: table;
    content: "";
  }
  .du-bois-light-table-wrapper::after {
    display: table;
    clear: both;
    content: "";
  }
  .du-bois-light-table {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    font-size: 13px;
    background: #fff;
    border-radius: 4px;
  }
  .du-bois-light-table table {
    width: 100%;
    text-align: left;
    border-radius: 4px 4px 0 0;
    border-collapse: separate;
    border-spacing: 0;
  }
  .du-bois-light-table-thead > tr > th,
  .du-bois-light-table-tbody > tr > td,
  .du-bois-light-table tfoot > tr > th,
  .du-bois-light-table tfoot > tr > td {
    position: relative;
    padding: 16px 16px;
    overflow-wrap: break-word;
  }
  .du-bois-light-table-cell-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: keep-all;
  }
  .du-bois-light-table-cell-ellipsis.du-bois-light-table-cell-fix-left-last,
  .du-bois-light-table-cell-ellipsis.du-bois-light-table-cell-fix-right-first {
    overflow: visible;
  }
  .du-bois-light-table-cell-ellipsis.du-bois-light-table-cell-fix-left-last
    .du-bois-light-table-cell-content,
  .du-bois-light-table-cell-ellipsis.du-bois-light-table-cell-fix-right-first
    .du-bois-light-table-cell-content {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .du-bois-light-table-cell-ellipsis .du-bois-light-table-column-title {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
  }
  .du-bois-light-table-title {
    padding: 16px 16px;
  }
  .du-bois-light-table-footer {
    padding: 16px 16px;
    color: rgba(0, 0, 0, 0.85);
    background: #fafafa;
  }
  .du-bois-light-table-thead > tr > th {
    position: relative;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    text-align: left;
    background: #fafafa;
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.3s ease;
  }
  .du-bois-light-table-thead > tr > th[colspan]:not([colspan="1"]) {
    text-align: center;
  }
  .du-bois-light-table-thead
    > tr
    > th:not(:last-child):not(.du-bois-light-table-selection-column):not(
      .du-bois-light-table-row-expand-icon-cell
    ):not([colspan])::before {
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 1.6em;
    background-color: rgba(0, 0, 0, 0.06);
    transform: translateY(-50%);
    transition: background-color 0.3s;
    content: "";
  }
  .du-bois-light-table-thead > tr:not(:last-child) > th[colspan] {
    border-bottom: 0;
  }
  .du-bois-light-table-tbody > tr > td {
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.3s;
  }
  .du-bois-light-table-tbody
    > tr
    > td
    > .du-bois-light-table-wrapper:only-child
    .du-bois-light-table,
  .du-bois-light-table-tbody
    > tr
    > td
    > .du-bois-light-table-expanded-row-fixed
    > .du-bois-light-table-wrapper:only-child
    .du-bois-light-table {
    margin: -16px -16px -16px 33px;
  }
  .du-bois-light-table-tbody
    > tr
    > td
    > .du-bois-light-table-wrapper:only-child
    .du-bois-light-table-tbody
    > tr:last-child
    > td,
  .du-bois-light-table-tbody
    > tr
    > td
    > .du-bois-light-table-expanded-row-fixed
    > .du-bois-light-table-wrapper:only-child
    .du-bois-light-table-tbody
    > tr:last-child
    > td {
    border-bottom: 0;
  }
  .du-bois-light-table-tbody
    > tr
    > td
    > .du-bois-light-table-wrapper:only-child
    .du-bois-light-table-tbody
    > tr:last-child
    > td:first-of-type,
  .du-bois-light-table-tbody
    > tr
    > td
    > .du-bois-light-table-expanded-row-fixed
    > .du-bois-light-table-wrapper:only-child
    .du-bois-light-table-tbody
    > tr:last-child
    > td:first-of-type,
  .du-bois-light-table-tbody
    > tr
    > td
    > .du-bois-light-table-wrapper:only-child
    .du-bois-light-table-tbody
    > tr:last-child
    > td:last-child,
  .du-bois-light-table-tbody
    > tr
    > td
    > .du-bois-light-table-expanded-row-fixed
    > .du-bois-light-table-wrapper:only-child
    .du-bois-light-table-tbody
    > tr:last-child
    > td:last-child {
    border-radius: 0;
  }
  .du-bois-light-table-tbody > tr.du-bois-light-table-row:hover > td {
    background: #fafafa;
  }
  .du-bois-light-table-tbody > tr.du-bois-light-table-row-selected > td {
    background: #e6f1f5;
    border-color: rgba(0, 0, 0, 0.03);
  }
  .du-bois-light-table-tbody > tr.du-bois-light-table-row-selected:hover > td {
    background: #dfedf2;
  }
  .du-bois-light-table-summary {
    position: relative;
    z-index: 2;
    background: #fff;
  }
  div.du-bois-light-table-summary {
    box-shadow: 0 -1px 0 #f0f0f0;
  }
  .du-bois-light-table-summary > tr > th,
  .du-bois-light-table-summary > tr > td {
    border-bottom: 1px solid #f0f0f0;
  }
  .du-bois-light-table-pagination.du-bois-light-pagination {
    margin: 16px 0;
  }
  .du-bois-light-table-pagination {
    display: flex;
    flex-wrap: wrap;
    row-gap: 4px;
  }
  .du-bois-light-table-pagination > * {
    flex: none;
  }
  .du-bois-light-table-pagination-left {
    justify-content: flex-start;
  }
  .du-bois-light-table-pagination-center {
    justify-content: center;
  }
  .du-bois-light-table-pagination-right {
    justify-content: flex-end;
  }
  .du-bois-light-table-thead th.du-bois-light-table-column-has-sorters {
    cursor: pointer;
    transition: all 0.3s;
  }
  .du-bois-light-table-thead th.du-bois-light-table-column-has-sorters:hover {
    background: rgba(0, 0, 0, 0.04);
  }
  .du-bois-light-table-thead
    th.du-bois-light-table-column-has-sorters:hover::before {
    background-color: transparent !important;
  }
  .du-bois-light-table-thead
    th.du-bois-light-table-column-has-sorters.du-bois-light-table-cell-fix-left:hover,
  .du-bois-light-table-thead
    th.du-bois-light-table-column-has-sorters.du-bois-light-table-cell-fix-right:hover {
    background: #f5f5f5;
  }
  .du-bois-light-table-thead th.du-bois-light-table-column-sort {
    background: #f5f5f5;
  }
  .du-bois-light-table-thead th.du-bois-light-table-column-sort::before {
    background-color: transparent !important;
  }
  td.du-bois-light-table-column-sort {
    background: #fafafa;
  }
  .du-bois-light-table-column-title {
    position: relative;
    z-index: 1;
    flex: 1;
  }
  .du-bois-light-table-column-sorters {
    display: flex;
    flex: auto;
    align-items: center;
    justify-content: space-between;
  }
  .du-bois-light-table-column-sorters::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
  }
  .du-bois-light-table-column-sorter {
    color: #bfbfbf;
    font-size: 0;
    transition: color 0.3s;
  }
  .du-bois-light-table-column-sorter-inner {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }
  .du-bois-light-table-column-sorter-up,
  .du-bois-light-table-column-sorter-down {
    font-size: 11px;
  }
  .du-bois-light-table-column-sorter-up.active,
  .du-bois-light-table-column-sorter-down.active {
    color: #2272b4;
  }
  .du-bois-light-table-column-sorter-up
    + .du-bois-light-table-column-sorter-down {
    margin-top: -0.3em;
  }
  .du-bois-light-table-column-sorters:hover .du-bois-light-table-column-sorter {
    color: #a6a6a6;
  }
  .du-bois-light-table-filter-column {
    display: flex;
    justify-content: space-between;
  }
  .du-bois-light-table-filter-trigger {
    position: relative;
    display: flex;
    align-items: center;
    margin: -4px -8px -4px 4px;
    padding: 0 4px;
    color: #bfbfbf;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .du-bois-light-table-filter-trigger:hover {
    color: #5d7283;
    background: rgba(0, 0, 0, 0.04);
  }
  .du-bois-light-table-filter-trigger.active {
    color: #2272b4;
  }
  .du-bois-light-table-filter-dropdown {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    min-width: 120px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  }
  .du-bois-light-table-filter-dropdown .du-bois-light-dropdown-menu {
    max-height: 264px;
    overflow-x: hidden;
    border: 0;
    box-shadow: none;
  }
  .du-bois-light-table-filter-dropdown-submenu > ul {
    max-height: calc(100vh - 130px);
    overflow-x: hidden;
    overflow-y: auto;
  }
  .du-bois-light-table-filter-dropdown .du-bois-light-checkbox-wrapper + span,
  .du-bois-light-table-filter-dropdown-submenu
    .du-bois-light-checkbox-wrapper
    + span {
    padding-left: 8px;
  }
  .du-bois-light-table-filter-dropdown-btns {
    display: flex;
    justify-content: space-between;
    padding: 7px 8px 7px 3px;
    overflow: hidden;
    background-color: inherit;
    border-top: 1px solid #f0f0f0;
  }
  .du-bois-light-table-selection-col {
    width: 32px;
  }
  .du-bois-light-table-bordered .du-bois-light-table-selection-col {
    width: 50px;
  }
  table tr th.du-bois-light-table-selection-column,
  table tr td.du-bois-light-table-selection-column {
    padding-right: 4px;
    padding-left: 4px;
    text-align: center;
  }
  table tr th.du-bois-light-table-selection-column .du-bois-light-radio-wrapper,
  table
    tr
    td.du-bois-light-table-selection-column
    .du-bois-light-radio-wrapper {
    margin-right: 0;
  }
  table tr th.du-bois-light-table-selection-column::after {
    background-color: transparent !important;
  }
  .du-bois-light-table-selection {
    position: relative;
    display: inline-flex;
    flex-direction: column;
  }
  .du-bois-light-table-selection-extra {
    position: absolute;
    top: 0;
    z-index: 1;
    cursor: pointer;
    transition: all 0.3s;
    margin-inline-start: 100%;
    padding-inline-start: 0px;
  }
  .du-bois-light-table-selection-extra .anticon {
    color: #bfbfbf;
    font-size: 10px;
  }
  .du-bois-light-table-selection-extra .anticon:hover {
    color: #a6a6a6;
  }
  .du-bois-light-table-expand-icon-col {
    width: 48px;
  }
  .du-bois-light-table-row-expand-icon-cell {
    text-align: center;
  }
  .du-bois-light-table-row-indent {
    float: left;
    height: 1px;
  }
  .du-bois-light-table-row-expand-icon {
    color: #2272b4;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s;
    position: relative;
    display: inline-flex;
    float: left;
    box-sizing: border-box;
    width: 17px;
    height: 17px;
    padding: 0;
    color: inherit;
    line-height: 17px;
    background: #fff;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    outline: none;
    transform: scale(0.94117647);
    transition: all 0.3s;
    user-select: none;
  }
  .du-bois-light-table-row-expand-icon:focus,
  .du-bois-light-table-row-expand-icon:hover {
    color: #448dc2;
  }
  .du-bois-light-table-row-expand-icon:active {
    color: #14538f;
  }
  .du-bois-light-table-row-expand-icon:focus,
  .du-bois-light-table-row-expand-icon:hover,
  .du-bois-light-table-row-expand-icon:active {
    border-color: currentColor;
  }
  .du-bois-light-table-row-expand-icon::before,
  .du-bois-light-table-row-expand-icon::after {
    position: absolute;
    background: currentColor;
    transition: transform 0.3s ease-out;
    content: "";
  }
  .du-bois-light-table-row-expand-icon::before {
    top: 7px;
    right: 3px;
    left: 3px;
    height: 1px;
  }
  .du-bois-light-table-row-expand-icon::after {
    top: 3px;
    bottom: 3px;
    left: 7px;
    width: 1px;
    transform: rotate(90deg);
  }
  .du-bois-light-table-row-expand-icon-collapsed::before {
    transform: rotate(-180deg);
  }
  .du-bois-light-table-row-expand-icon-collapsed::after {
    transform: rotate(0deg);
  }
  .du-bois-light-table-row-expand-icon-spaced {
    background: transparent;
    border: 0;
    visibility: hidden;
  }
  .du-bois-light-table-row-expand-icon-spaced::before,
  .du-bois-light-table-row-expand-icon-spaced::after {
    display: none;
    content: none;
  }
  .du-bois-light-table-row-indent + .du-bois-light-table-row-expand-icon {
    margin-top: 121.5px;
    margin-right: 4px;
  }
  tr.du-bois-light-table-expanded-row > td,
  tr.du-bois-light-table-expanded-row:hover > td {
    background: #fbfbfb;
  }
  tr.du-bois-light-table-expanded-row .du-bois-light-descriptions-view {
    display: flex;
  }
  tr.du-bois-light-table-expanded-row .du-bois-light-descriptions-view table {
    flex: auto;
    width: auto;
  }
  .du-bois-light-table .du-bois-light-table-expanded-row-fixed {
    position: relative;
    margin: -16px -16px;
    padding: 16px 16px;
  }
  .du-bois-light-table-tbody > tr.du-bois-light-table-placeholder {
    text-align: center;
  }
  .du-bois-light-table-empty
    .du-bois-light-table-tbody
    > tr.du-bois-light-table-placeholder {
    color: rgba(0, 0, 0, 0.25);
  }
  .du-bois-light-table-tbody > tr.du-bois-light-table-placeholder:hover > td {
    background: #fff;
  }
  .du-bois-light-table-cell-fix-left,
  .du-bois-light-table-cell-fix-right {
    position: -webkit-sticky !important;
    position: sticky !important;
    z-index: 2;
    background: #fff;
  }
  .du-bois-light-table-cell-fix-left-first::after,
  .du-bois-light-table-cell-fix-left-last::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: -1px;
    width: 30px;
    transform: translateX(100%);
    transition: box-shadow 0.3s;
    content: "";
    pointer-events: none;
  }
  .du-bois-light-table-cell-fix-right-first::after,
  .du-bois-light-table-cell-fix-right-last::after {
    position: absolute;
    top: 0;
    bottom: -1px;
    left: 0;
    width: 30px;
    transform: translateX(-100%);
    transition: box-shadow 0.3s;
    content: "";
    pointer-events: none;
  }
  .du-bois-light-table .du-bois-light-table-container::before,
  .du-bois-light-table .du-bois-light-table-container::after {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    width: 30px;
    transition: box-shadow 0.3s;
    content: "";
    pointer-events: none;
  }
  .du-bois-light-table .du-bois-light-table-container::before {
    left: 0;
  }
  .du-bois-light-table .du-bois-light-table-container::after {
    right: 0;
  }
  .du-bois-light-table-ping-left:not(.du-bois-light-table-has-fix-left)
    .du-bois-light-table-container {
    position: relative;
  }
  .du-bois-light-table-ping-left:not(.du-bois-light-table-has-fix-left)
    .du-bois-light-table-container::before {
    box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.15);
  }
  .du-bois-light-table-ping-left
    .du-bois-light-table-cell-fix-left-first::after,
  .du-bois-light-table-ping-left
    .du-bois-light-table-cell-fix-left-last::after {
    box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.15);
  }
  .du-bois-light-table-ping-left
    .du-bois-light-table-cell-fix-left-last::before {
    background-color: transparent !important;
  }
  .du-bois-light-table-ping-right:not(.du-bois-light-table-has-fix-right)
    .du-bois-light-table-container {
    position: relative;
  }
  .du-bois-light-table-ping-right:not(.du-bois-light-table-has-fix-right)
    .du-bois-light-table-container::after {
    box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, 0.15);
  }
  .du-bois-light-table-ping-right
    .du-bois-light-table-cell-fix-right-first::after,
  .du-bois-light-table-ping-right
    .du-bois-light-table-cell-fix-right-last::after {
    box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, 0.15);
  }
  .du-bois-light-table-sticky-holder {
    position: sticky;
    z-index: 3;
    background: #fff;
  }
  .du-bois-light-table-sticky-scroll {
    position: sticky;
    bottom: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    background: #ffffff;
    border-top: 1px solid #f0f0f0;
    opacity: 0.6;
  }
  .du-bois-light-table-sticky-scroll:hover {
    transform-origin: center bottom;
  }
  .du-bois-light-table-sticky-scroll-bar {
    height: 8px;
    background-color: rgba(0, 0, 0, 0.35);
    border-radius: 4px;
  }
  .du-bois-light-table-sticky-scroll-bar:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .du-bois-light-table-sticky-scroll-bar-active {
    background-color: rgba(0, 0, 0, 0.8);
  }
  @media all and (-ms-high-contrast: none) {
    .du-bois-light-table-ping-left
      .du-bois-light-table-cell-fix-left-last::after {
      box-shadow: none !important;
    }
    .du-bois-light-table-ping-right
      .du-bois-light-table-cell-fix-right-first::after {
      box-shadow: none !important;
    }
  }
  .du-bois-light-table {
    /* title + table */
    /* table */
    /* table + footer */
  }
  .du-bois-light-table-title {
    border-radius: 4px 4px 0 0;
  }
  .du-bois-light-table-title + .du-bois-light-table-container {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .du-bois-light-table-title
    + .du-bois-light-table-container
    table
    > thead
    > tr:first-of-type
    th:first-of-type {
    border-radius: 0;
  }
  .du-bois-light-table-title
    + .du-bois-light-table-container
    table
    > thead
    > tr:first-of-type
    th:last-child {
    border-radius: 0;
  }
  .du-bois-light-table-container {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .du-bois-light-table-container table > thead > tr:first-of-type th:first-of-type {
    border-top-left-radius: 4px;
  }
  .du-bois-light-table-container table > thead > tr:first-of-type th:last-child {
    border-top-right-radius: 4px;
  }
  .du-bois-light-table-footer {
    border-radius: 0 0 4px 4px;
  }
  .du-bois-light-table-wrapper-rtl {
    direction: rtl;
  }
  .du-bois-light-table-rtl {
    direction: rtl;
  }
  .du-bois-light-table-wrapper-rtl .du-bois-light-table table {
    text-align: right;
  }
  .du-bois-light-table-wrapper-rtl
    .du-bois-light-table-thead
    > tr
    > th[colspan]:not([colspan="1"]) {
    text-align: center;
  }
  .du-bois-light-table-wrapper-rtl .du-bois-light-table-thead > tr > th {
    text-align: right;
  }
  .du-bois-light-table-tbody
    > tr
    .du-bois-light-table-wrapper:only-child
    .du-bois-light-table.du-bois-light-table-rtl {
    margin: -16px 33px -16px -16px;
  }
  .du-bois-light-table-wrapper.du-bois-light-table-wrapper-rtl
    .du-bois-light-table-pagination-left {
    justify-content: flex-end;
  }
  .du-bois-light-table-wrapper.du-bois-light-table-wrapper-rtl
    .du-bois-light-table-pagination-right {
    justify-content: flex-start;
  }
  .du-bois-light-table-wrapper-rtl .du-bois-light-table-column-sorter {
    margin-right: 4px;
    margin-left: 0;
  }
  .du-bois-light-table-wrapper-rtl .du-bois-light-table-filter-column-title {
    padding: 16px 16px 16px 2.3em;
  }
  .du-bois-light-table-rtl
    .du-bois-light-table-thead
    tr
    th.du-bois-light-table-column-has-sorters
    .du-bois-light-table-filter-column-title {
    padding: 0 0 0 2.3em;
  }
  .du-bois-light-table-wrapper-rtl
    .du-bois-light-table-filter-trigger-container {
    right: auto;
    left: 0;
  }
  .du-bois-light-dropdown-rtl
    .du-bois-light-table-filter-dropdown
    .du-bois-light-checkbox-wrapper
    + span,
  .du-bois-light-dropdown-rtl
    .du-bois-light-table-filter-dropdown-submenu
    .du-bois-light-checkbox-wrapper
    + span,
  .du-bois-light-dropdown-menu-submenu-rtl.du-bois-light-table-filter-dropdown
    .du-bois-light-checkbox-wrapper
    + span,
  .du-bois-light-dropdown-menu-submenu-rtl.du-bois-light-table-filter-dropdown-submenu
    .du-bois-light-checkbox-wrapper
    + span {
    padding-right: 8px;
    padding-left: 0;
  }
  .du-bois-light-table-wrapper-rtl .du-bois-light-table-selection {
    text-align: center;
  }
  .du-bois-light-table-wrapper-rtl .du-bois-light-table-row-indent {
    float: right;
  }
  .du-bois-light-table-wrapper-rtl .du-bois-light-table-row-expand-icon {
    float: right;
  }
  .du-bois-light-table-wrapper-rtl
    .du-bois-light-table-row-indent
    + .du-bois-light-table-row-expand-icon {
    margin-right: 0;
    margin-left: 4px;
  }
  .du-bois-light-table-wrapper-rtl .du-bois-light-table-row-expand-icon::after {
    transform: rotate(-90deg);
  }
  .du-bois-light-table-wrapper-rtl
    .du-bois-light-table-row-expand-icon-collapsed::before {
    transform: rotate(180deg);
  }
  .du-bois-light-table-wrapper-rtl
    .du-bois-light-table-row-expand-icon-collapsed::after {
    transform: rotate(0deg);
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-spin {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    position: absolute;
    display: none;
    color: #2272b4;
    text-align: center;
    vertical-align: middle;
    opacity: 0;
    transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .du-bois-light-spin-spinning {
    position: static;
    display: inline-block;
    opacity: 1;
  }
  .du-bois-light-spin-nested-loading {
    position: relative;
  }
  .du-bois-light-spin-nested-loading > div > .du-bois-light-spin {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    display: block;
    width: 100%;
    height: 100%;
    max-height: 400px;
  }
  .du-bois-light-spin-nested-loading
    > div
    > .du-bois-light-spin
    .du-bois-light-spin-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -10px;
  }
  .du-bois-light-spin-nested-loading
    > div
    > .du-bois-light-spin
    .du-bois-light-spin-text {
    position: absolute;
    top: 50%;
    width: 100%;
    padding-top: 5.5px;
    text-shadow: 0 1px 2px #fff;
  }
  .du-bois-light-spin-nested-loading
    > div
    > .du-bois-light-spin.du-bois-light-spin-show-text
    .du-bois-light-spin-dot {
    margin-top: -20px;
  }
  .du-bois-light-spin-nested-loading
    > div
    > .du-bois-light-spin-sm
    .du-bois-light-spin-dot {
    margin: -7px;
  }
  .du-bois-light-spin-nested-loading
    > div
    > .du-bois-light-spin-sm
    .du-bois-light-spin-text {
    padding-top: 2.5px;
  }
  .du-bois-light-spin-nested-loading
    > div
    > .du-bois-light-spin-sm.du-bois-light-spin-show-text
    .du-bois-light-spin-dot {
    margin-top: -17px;
  }
  .du-bois-light-spin-nested-loading
    > div
    > .du-bois-light-spin-lg
    .du-bois-light-spin-dot {
    margin: -16px;
  }
  .du-bois-light-spin-nested-loading
    > div
    > .du-bois-light-spin-lg
    .du-bois-light-spin-text {
    padding-top: 11.5px;
  }
  .du-bois-light-spin-nested-loading
    > div
    > .du-bois-light-spin-lg.du-bois-light-spin-show-text
    .du-bois-light-spin-dot {
    margin-top: -26px;
  }
  .du-bois-light-spin-container {
    position: relative;
    transition: opacity 0.3s;
  }
  .du-bois-light-spin-container::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: none;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0;
    transition: all 0.3s;
    content: "";
    pointer-events: none;
  }
  .du-bois-light-spin-blur {
    clear: both;
    overflow: hidden;
    opacity: 0.5;
    user-select: none;
    pointer-events: none;
  }
  .du-bois-light-spin-blur::after {
    opacity: 0.4;
    pointer-events: auto;
  }
  .du-bois-light-spin-tip {
    color: #5d7283;
  }
  .du-bois-light-spin-dot {
    position: relative;
    display: inline-block;
    font-size: 20px;
    width: 1em;
    height: 1em;
  }
  .du-bois-light-spin-dot-item {
    position: absolute;
    display: block;
    width: 9px;
    height: 9px;
    background-color: #2272b4;
    border-radius: 100%;
    transform: scale(0.75);
    transform-origin: 50% 50%;
    opacity: 0.3;
    animation: antSpinMove 1s infinite linear alternate;
  }
  .du-bois-light-spin-dot-item:nth-child(1) {
    top: 0;
    left: 0;
  }
  .du-bois-light-spin-dot-item:nth-child(2) {
    top: 0;
    right: 0;
    animation-delay: 0.4s;
  }
  .du-bois-light-spin-dot-item:nth-child(3) {
    right: 0;
    bottom: 0;
    animation-delay: 0.8s;
  }
  .du-bois-light-spin-dot-item:nth-child(4) {
    bottom: 0;
    left: 0;
    animation-delay: 1.2s;
  }
  .du-bois-light-spin-dot-spin {
    transform: rotate(45deg);
    animation: antRotate 1.2s infinite linear;
  }
  .du-bois-light-spin-sm .du-bois-light-spin-dot {
    font-size: 14px;
  }
  .du-bois-light-spin-sm .du-bois-light-spin-dot i {
    width: 6px;
    height: 6px;
  }
  .du-bois-light-spin-lg .du-bois-light-spin-dot {
    font-size: 32px;
  }
  .du-bois-light-spin-lg .du-bois-light-spin-dot i {
    width: 14px;
    height: 14px;
  }
  .du-bois-light-spin.du-bois-light-spin-show-text .du-bois-light-spin-text {
    display: block;
  }
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /* IE10+ */
    .du-bois-light-spin-blur {
      background: #fff;
      opacity: 0.5;
    }
  }
  @keyframes antSpinMove {
  }
  @keyframes antRotate {
  }
  .du-bois-light-spin-rtl {
    direction: rtl;
  }
  .du-bois-light-spin-rtl .du-bois-light-spin-dot-spin {
    transform: rotate(-45deg);
    animation-name: antRotateRtl;
  }
  @keyframes antRotateRtl {
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-pagination {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
  }
  .du-bois-light-pagination ul,
  .du-bois-light-pagination ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .du-bois-light-pagination::after {
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    content: " ";
  }
  .du-bois-light-pagination-total-text {
    display: inline-block;
    height: 40px;
    margin-right: 8px;
    line-height: 38px;
    vertical-align: middle;
  }
  .du-bois-light-pagination-item {
    display: inline-block;
    min-width: 40px;
    height: 40px;
    margin-right: 8px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    line-height: 38px;
    text-align: center;
    vertical-align: middle;
    list-style: none;
    background-color: #fff;
    border: 1px solid #cddae5;
    border-radius: 4px;
    outline: 0;
    cursor: pointer;
    user-select: none;
  }
  .du-bois-light-pagination-item a {
    display: block;
    padding: 0 6px;
    color: #1f272d;
    transition: none;
  }
  .du-bois-light-pagination-item a:hover {
    text-decoration: none;
  }
  .du-bois-light-pagination-item:focus-visible,
  .du-bois-light-pagination-item:hover {
    border-color: #2272b4;
    transition: all 0.3s;
  }
  .du-bois-light-pagination-item:focus-visible a,
  .du-bois-light-pagination-item:hover a {
    color: #2272b4;
  }
  .du-bois-light-pagination-item-active {
    font-weight: 500;
    background: #fff;
    border-color: #2272b4;
  }
  .du-bois-light-pagination-item-active a {
    color: #2272b4;
  }
  .du-bois-light-pagination-item-active:focus-visible,
  .du-bois-light-pagination-item-active:hover {
    border-color: #448dc2;
  }
  .du-bois-light-pagination-item-active:focus-visible a,
  .du-bois-light-pagination-item-active:hover a {
    color: #448dc2;
  }
  .du-bois-light-pagination-jump-prev,
  .du-bois-light-pagination-jump-next {
    outline: 0;
  }
  .du-bois-light-pagination-jump-prev .du-bois-light-pagination-item-container,
  .du-bois-light-pagination-jump-next .du-bois-light-pagination-item-container {
    position: relative;
  }
  .du-bois-light-pagination-jump-prev
    .du-bois-light-pagination-item-container
    .du-bois-light-pagination-item-link-icon,
  .du-bois-light-pagination-jump-next
    .du-bois-light-pagination-item-container
    .du-bois-light-pagination-item-link-icon {
    color: #2272b4;
    font-size: 12px;
    letter-spacing: -1px;
    opacity: 0;
    transition: all 0.2s;
  }
  .du-bois-light-pagination-jump-prev
    .du-bois-light-pagination-item-container
    .du-bois-light-pagination-item-link-icon-svg,
  .du-bois-light-pagination-jump-next
    .du-bois-light-pagination-item-container
    .du-bois-light-pagination-item-link-icon-svg {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .du-bois-light-pagination-jump-prev
    .du-bois-light-pagination-item-container
    .du-bois-light-pagination-item-ellipsis,
  .du-bois-light-pagination-jump-next
    .du-bois-light-pagination-item-container
    .du-bois-light-pagination-item-ellipsis {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    margin: auto;
    color: rgba(0, 0, 0, 0.25);
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
    text-align: center;
    text-indent: 0.13em;
    opacity: 1;
    transition: all 0.2s;
  }
  .du-bois-light-pagination-jump-prev:focus-visible
    .du-bois-light-pagination-item-link-icon,
  .du-bois-light-pagination-jump-next:focus-visible
    .du-bois-light-pagination-item-link-icon,
  .du-bois-light-pagination-jump-prev:hover
    .du-bois-light-pagination-item-link-icon,
  .du-bois-light-pagination-jump-next:hover
    .du-bois-light-pagination-item-link-icon {
    opacity: 1;
  }
  .du-bois-light-pagination-jump-prev:focus-visible
    .du-bois-light-pagination-item-ellipsis,
  .du-bois-light-pagination-jump-next:focus-visible
    .du-bois-light-pagination-item-ellipsis,
  .du-bois-light-pagination-jump-prev:hover
    .du-bois-light-pagination-item-ellipsis,
  .du-bois-light-pagination-jump-next:hover
    .du-bois-light-pagination-item-ellipsis {
    opacity: 0;
  }
  .du-bois-light-pagination-prev,
  .du-bois-light-pagination-jump-prev,
  .du-bois-light-pagination-jump-next {
    margin-right: 8px;
  }
  .du-bois-light-pagination-prev,
  .du-bois-light-pagination-next,
  .du-bois-light-pagination-jump-prev,
  .du-bois-light-pagination-jump-next {
    display: inline-block;
    min-width: 40px;
    height: 40px;
    color: #1f272d;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    line-height: 40px;
    text-align: center;
    vertical-align: middle;
    list-style: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .du-bois-light-pagination-prev,
  .du-bois-light-pagination-next {
    font-family: Arial, Helvetica, sans-serif;
    outline: 0;
  }
  .du-bois-light-pagination-prev button,
  .du-bois-light-pagination-next button {
    color: #1f272d;
    cursor: pointer;
    user-select: none;
  }
  .du-bois-light-pagination-prev:hover button,
  .du-bois-light-pagination-next:hover button {
    border-color: #448dc2;
  }
  .du-bois-light-pagination-prev .du-bois-light-pagination-item-link,
  .du-bois-light-pagination-next .du-bois-light-pagination-item-link {
    display: block;
    width: 100%;
    height: 100%;
    padding: 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #cddae5;
    border-radius: 4px;
    outline: none;
    transition: all 0.3s;
  }
  .du-bois-light-pagination-prev:focus-visible
    .du-bois-light-pagination-item-link,
  .du-bois-light-pagination-next:focus-visible
    .du-bois-light-pagination-item-link,
  .du-bois-light-pagination-prev:hover .du-bois-light-pagination-item-link,
  .du-bois-light-pagination-next:hover .du-bois-light-pagination-item-link {
    color: #2272b4;
    border-color: #2272b4;
  }
  .du-bois-light-pagination-disabled,
  .du-bois-light-pagination-disabled:hover,
  .du-bois-light-pagination-disabled:focus-visible {
    cursor: not-allowed;
  }
  .du-bois-light-pagination-disabled .du-bois-light-pagination-item-link,
  .du-bois-light-pagination-disabled:hover .du-bois-light-pagination-item-link,
  .du-bois-light-pagination-disabled:focus-visible
    .du-bois-light-pagination-item-link {
    color: rgba(0, 0, 0, 0.25);
    border-color: #cddae5;
    cursor: not-allowed;
  }
  .du-bois-light-pagination-slash {
    margin: 0 10px 0 5px;
  }
  .du-bois-light-pagination-options {
    display: inline-block;
    margin-left: 16px;
    vertical-align: middle;
  }
  @media all and (-ms-high-contrast: none) {
    .du-bois-light-pagination-options *::-ms-backdrop,
    .du-bois-light-pagination-options {
      vertical-align: top;
    }
  }
  .du-bois-light-pagination-options-size-changer.du-bois-light-select {
    display: inline-block;
    width: auto;
  }
  .du-bois-light-pagination-options-quick-jumper {
    display: inline-block;
    height: 40px;
    margin-left: 8px;
    line-height: 40px;
    vertical-align: top;
  }
  .du-bois-light-pagination-options-quick-jumper input {
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 5px 12px;
    color: #1f272d;
    font-size: 13px;
    line-height: 20px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #cddae5;
    border-radius: 4px;
    transition: all 0.3s;
    width: 50px;
    height: 40px;
    margin: 0 8px;
  }
  .du-bois-light-pagination-options-quick-jumper input::-moz-placeholder {
    opacity: 1;
  }
  .du-bois-light-pagination-options-quick-jumper input::placeholder {
    color: #bfbfbf;
  }
  .du-bois-light-pagination-options-quick-jumper input:placeholder-shown {
    text-overflow: ellipsis;
  }
  .du-bois-light-pagination-options-quick-jumper input:hover {
    border-color: #448dc2;
    border-right-width: 1px !important;
  }
  .du-bois-light-pagination-options-quick-jumper input:focus,
  .du-bois-light-pagination-options-quick-jumper input-focused {
    border-color: #448dc2;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(34, 114, 180, 0.2);
  }
  .du-bois-light-pagination-options-quick-jumper input-disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
  }
  .du-bois-light-pagination-options-quick-jumper input-disabled:hover {
    border-color: #cddae5;
    border-right-width: 1px !important;
  }
  .du-bois-light-pagination-options-quick-jumper input[disabled] {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
  }
  .du-bois-light-pagination-options-quick-jumper input[disabled]:hover {
    border-color: #cddae5;
    border-right-width: 1px !important;
  }
  .du-bois-light-pagination-options-quick-jumper input-borderless,
  .du-bois-light-pagination-options-quick-jumper input-borderless:hover,
  .du-bois-light-pagination-options-quick-jumper input-borderless:focus,
  .du-bois-light-pagination-options-quick-jumper input-borderless-focused,
  .du-bois-light-pagination-options-quick-jumper input-borderless-disabled,
  .du-bois-light-pagination-options-quick-jumper input-borderless[disabled] {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
  textarea.du-bois-light-pagination-options-quick-jumper input {
    max-width: 100%;
    height: auto;
    min-height: 40px;
    line-height: 20px;
    vertical-align: bottom;
    transition: all 0.3s, height 0s;
  }
  .du-bois-light-pagination-options-quick-jumper input-lg {
    padding: 5px 12px;
    font-size: 18px;
  }
  .du-bois-light-pagination-options-quick-jumper input-sm {
    padding: 5px 12px;
  }
  .du-bois-light-pagination-simple .du-bois-light-pagination-prev,
  .du-bois-light-pagination-simple .du-bois-light-pagination-next {
    height: 24px;
    line-height: 24px;
    vertical-align: top;
  }
  .du-bois-light-pagination-simple
    .du-bois-light-pagination-prev
    .du-bois-light-pagination-item-link,
  .du-bois-light-pagination-simple
    .du-bois-light-pagination-next
    .du-bois-light-pagination-item-link {
    height: 24px;
    background-color: transparent;
    border: 0;
  }
  .du-bois-light-pagination-simple
    .du-bois-light-pagination-prev
    .du-bois-light-pagination-item-link::after,
  .du-bois-light-pagination-simple
    .du-bois-light-pagination-next
    .du-bois-light-pagination-item-link::after {
    height: 24px;
    line-height: 24px;
  }
  .du-bois-light-pagination-simple .du-bois-light-pagination-simple-pager {
    display: inline-block;
    height: 24px;
    margin-right: 8px;
  }
  .du-bois-light-pagination-simple
    .du-bois-light-pagination-simple-pager
    input {
    box-sizing: border-box;
    height: 100%;
    margin-right: 8px;
    padding: 0 6px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #cddae5;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s;
  }
  .du-bois-light-pagination-simple
    .du-bois-light-pagination-simple-pager
    input:hover {
    border-color: #2272b4;
  }
  .du-bois-light-pagination-simple
    .du-bois-light-pagination-simple-pager
    input[disabled] {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #cddae5;
    cursor: not-allowed;
  }
  .du-bois-light-pagination.mini .du-bois-light-pagination-total-text,
  .du-bois-light-pagination.mini .du-bois-light-pagination-simple-pager {
    height: 24px;
    line-height: 24px;
  }
  .du-bois-light-pagination.mini .du-bois-light-pagination-item {
    min-width: 24px;
    height: 24px;
    margin: 0;
    line-height: 22px;
  }
  .du-bois-light-pagination.mini
    .du-bois-light-pagination-item:not(.du-bois-light-pagination-item-active) {
    background: transparent;
    border-color: transparent;
  }
  .du-bois-light-pagination.mini .du-bois-light-pagination-prev,
  .du-bois-light-pagination.mini .du-bois-light-pagination-next {
    min-width: 24px;
    height: 24px;
    margin: 0;
    line-height: 24px;
  }
  .du-bois-light-pagination.mini
    .du-bois-light-pagination-prev
    .du-bois-light-pagination-item-link,
  .du-bois-light-pagination.mini
    .du-bois-light-pagination-next
    .du-bois-light-pagination-item-link {
    background: transparent;
    border-color: transparent;
  }
  .du-bois-light-pagination.mini
    .du-bois-light-pagination-prev
    .du-bois-light-pagination-item-link::after,
  .du-bois-light-pagination.mini
    .du-bois-light-pagination-next
    .du-bois-light-pagination-item-link::after {
    height: 24px;
    line-height: 24px;
  }
  .du-bois-light-pagination.mini .du-bois-light-pagination-jump-prev,
  .du-bois-light-pagination.mini .du-bois-light-pagination-jump-next {
    height: 24px;
    margin-right: 0;
    line-height: 24px;
  }
  .du-bois-light-pagination.mini .du-bois-light-pagination-options {
    margin-left: 2px;
  }
  .du-bois-light-pagination.mini
    .du-bois-light-pagination-options-size-changer {
    top: 0px;
  }
  .du-bois-light-pagination.mini
    .du-bois-light-pagination-options-quick-jumper {
    height: 24px;
    line-height: 24px;
  }
  .du-bois-light-pagination.mini
    .du-bois-light-pagination-options-quick-jumper
    input {
    padding: 5px 12px;
    width: 44px;
    height: 32px;
  }
  .du-bois-light-pagination.du-bois-light-pagination-disabled {
    cursor: not-allowed;
  }
  .du-bois-light-pagination.du-bois-light-pagination-disabled
    .du-bois-light-pagination-item {
    background: #f5f5f5;
    border-color: #cddae5;
    cursor: not-allowed;
  }
  .du-bois-light-pagination.du-bois-light-pagination-disabled
    .du-bois-light-pagination-item
    a {
    color: rgba(0, 0, 0, 0.25);
    background: transparent;
    border: none;
    cursor: not-allowed;
  }
  .du-bois-light-pagination.du-bois-light-pagination-disabled
    .du-bois-light-pagination-item-active {
    background: #e6e6e6;
  }
  .du-bois-light-pagination.du-bois-light-pagination-disabled
    .du-bois-light-pagination-item-active
    a {
    color: rgba(0, 0, 0, 0.25);
  }
  .du-bois-light-pagination.du-bois-light-pagination-disabled
    .du-bois-light-pagination-item-link {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #cddae5;
    cursor: not-allowed;
  }
  .du-bois-light-pagination-simple.du-bois-light-pagination.du-bois-light-pagination-disabled
    .du-bois-light-pagination-item-link {
    background: transparent;
  }
  .du-bois-light-pagination.du-bois-light-pagination-disabled
    .du-bois-light-pagination-item-link-icon {
    opacity: 0;
  }
  .du-bois-light-pagination.du-bois-light-pagination-disabled
    .du-bois-light-pagination-item-ellipsis {
    opacity: 1;
  }
  .du-bois-light-pagination.du-bois-light-pagination-disabled
    .du-bois-light-pagination-simple-pager {
    color: rgba(0, 0, 0, 0.25);
  }
  @media only screen and (max-width: 992px) {
    .du-bois-light-pagination-item-after-jump-prev,
    .du-bois-light-pagination-item-before-jump-next {
      display: none;
    }
  }
  @media only screen and (max-width: 576px) {
    .du-bois-light-pagination-options {
      display: none;
    }
  }
  .du-bois-light-pagination-rtl .du-bois-light-pagination-total-text {
    margin-right: 0;
    margin-left: 8px;
  }
  .du-bois-light-pagination-rtl .du-bois-light-pagination-item,
  .du-bois-light-pagination-rtl .du-bois-light-pagination-prev,
  .du-bois-light-pagination-rtl .du-bois-light-pagination-jump-prev,
  .du-bois-light-pagination-rtl .du-bois-light-pagination-jump-next {
    margin-right: 0;
    margin-left: 8px;
  }
  .du-bois-light-pagination-rtl .du-bois-light-pagination-slash {
    margin: 0 5px 0 10px;
  }
  .du-bois-light-pagination-rtl .du-bois-light-pagination-options {
    margin-right: 16px;
    margin-left: 0;
  }
  .du-bois-light-pagination-rtl
    .du-bois-light-pagination-options
    .du-bois-light-pagination-options-size-changer.du-bois-light-select {
    margin-right: 0;
    margin-left: 8px;
  }
  .du-bois-light-pagination-rtl
    .du-bois-light-pagination-options
    .du-bois-light-pagination-options-quick-jumper {
    margin-left: 0;
  }
  .du-bois-light-pagination-rtl.du-bois-light-pagination-simple
    .du-bois-light-pagination-simple-pager {
    margin-right: 0;
    margin-left: 8px;
  }
  .du-bois-light-pagination-rtl.du-bois-light-pagination-simple
    .du-bois-light-pagination-simple-pager
    input {
    margin-right: 0;
    margin-left: 8px;
  }
  .du-bois-light-pagination-rtl.du-bois-light-pagination.mini
    .du-bois-light-pagination-options {
    margin-right: 2px;
    margin-left: 0;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-tabs-small > .du-bois-light-tabs-nav .du-bois-light-tabs-tab {
    padding: 4px 0;
    font-size: 13px;
  }
  .du-bois-light-tabs-large > .du-bois-light-tabs-nav .du-bois-light-tabs-tab {
    padding: 8px 0;
    font-size: 18px;
  }
  .du-bois-light-tabs-card.du-bois-light-tabs-small
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab {
    padding: 6px 8px;
  }
  .du-bois-light-tabs-card.du-bois-light-tabs-large
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab {
    padding: 7px 8px 6px;
  }
  .du-bois-light-tabs-rtl {
    direction: rtl;
  }
  .du-bois-light-tabs-rtl .du-bois-light-tabs-nav .du-bois-light-tabs-tab {
    margin: 0 0 0 32px;
  }
  .du-bois-light-tabs-rtl
    .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab:last-of-type {
    margin-left: 0;
  }
  .du-bois-light-tabs-rtl
    .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab
    .anticon {
    margin-right: 0;
    margin-left: 12px;
  }
  .du-bois-light-tabs-rtl
    .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab
    .du-bois-light-tabs-tab-remove {
    margin-right: 8px;
    margin-left: -4px;
  }
  .du-bois-light-tabs-rtl
    .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab
    .du-bois-light-tabs-tab-remove
    .anticon {
    margin: 0;
  }
  .du-bois-light-tabs-rtl.du-bois-light-tabs-left > .du-bois-light-tabs-nav {
    order: 1;
  }
  .du-bois-light-tabs-rtl.du-bois-light-tabs-left
    > .du-bois-light-tabs-content-holder {
    order: 0;
  }
  .du-bois-light-tabs-rtl.du-bois-light-tabs-right > .du-bois-light-tabs-nav {
    order: 0;
  }
  .du-bois-light-tabs-rtl.du-bois-light-tabs-right
    > .du-bois-light-tabs-content-holder {
    order: 1;
  }
  .du-bois-light-tabs-rtl.du-bois-light-tabs-card.du-bois-light-tabs-top
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab
    + .du-bois-light-tabs-tab,
  .du-bois-light-tabs-rtl.du-bois-light-tabs-card.du-bois-light-tabs-bottom
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab
    + .du-bois-light-tabs-tab,
  .du-bois-light-tabs-rtl.du-bois-light-tabs-card.du-bois-light-tabs-top
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab
    + .du-bois-light-tabs-tab,
  .du-bois-light-tabs-rtl.du-bois-light-tabs-card.du-bois-light-tabs-bottom
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab
    + .du-bois-light-tabs-tab {
    margin-right: 0;
    margin-left: 2px;
  }
  .du-bois-light-tabs-dropdown-rtl {
    direction: rtl;
  }
  .du-bois-light-tabs-dropdown-rtl .du-bois-light-tabs-dropdown-menu-item {
    text-align: right;
  }
  .du-bois-light-tabs-top,
  .du-bois-light-tabs-bottom {
    flex-direction: column;
  }
  .du-bois-light-tabs-top > .du-bois-light-tabs-nav,
  .du-bois-light-tabs-bottom > .du-bois-light-tabs-nav,
  .du-bois-light-tabs-top > div > .du-bois-light-tabs-nav,
  .du-bois-light-tabs-bottom > div > .du-bois-light-tabs-nav {
    margin: 0 0 16px 0;
  }
  .du-bois-light-tabs-top > .du-bois-light-tabs-nav::before,
  .du-bois-light-tabs-bottom > .du-bois-light-tabs-nav::before,
  .du-bois-light-tabs-top > div > .du-bois-light-tabs-nav::before,
  .du-bois-light-tabs-bottom > div > .du-bois-light-tabs-nav::before {
    position: absolute;
    right: 0;
    left: 0;
    border-bottom: 1px solid #f0f0f0;
    content: "";
  }
  .du-bois-light-tabs-top > .du-bois-light-tabs-nav .du-bois-light-tabs-ink-bar,
  .du-bois-light-tabs-bottom
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar,
  .du-bois-light-tabs-top
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar,
  .du-bois-light-tabs-bottom
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar {
    height: 2px;
  }
  .du-bois-light-tabs-top
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar-animated,
  .du-bois-light-tabs-bottom
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar-animated,
  .du-bois-light-tabs-top
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar-animated,
  .du-bois-light-tabs-bottom
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar-animated {
    transition: width 0.3s, left 0.3s, right 0.3s;
  }
  .du-bois-light-tabs-top
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::before,
  .du-bois-light-tabs-bottom
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::before,
  .du-bois-light-tabs-top
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::before,
  .du-bois-light-tabs-bottom
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::before,
  .du-bois-light-tabs-top
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::after,
  .du-bois-light-tabs-bottom
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::after,
  .du-bois-light-tabs-top
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::after,
  .du-bois-light-tabs-bottom
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::after {
    top: 0;
    bottom: 0;
    width: 30px;
  }
  .du-bois-light-tabs-top
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::before,
  .du-bois-light-tabs-bottom
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::before,
  .du-bois-light-tabs-top
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::before,
  .du-bois-light-tabs-bottom
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::before {
    left: 0;
    box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.08);
  }
  .du-bois-light-tabs-top
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::after,
  .du-bois-light-tabs-bottom
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::after,
  .du-bois-light-tabs-top
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::after,
  .du-bois-light-tabs-bottom
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::after {
    right: 0;
    box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, 0.08);
  }
  .du-bois-light-tabs-top
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap.du-bois-light-tabs-nav-wrap-ping-left::before,
  .du-bois-light-tabs-bottom
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap.du-bois-light-tabs-nav-wrap-ping-left::before,
  .du-bois-light-tabs-top
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap.du-bois-light-tabs-nav-wrap-ping-left::before,
  .du-bois-light-tabs-bottom
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap.du-bois-light-tabs-nav-wrap-ping-left::before {
    opacity: 1;
  }
  .du-bois-light-tabs-top
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap.du-bois-light-tabs-nav-wrap-ping-right::after,
  .du-bois-light-tabs-bottom
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap.du-bois-light-tabs-nav-wrap-ping-right::after,
  .du-bois-light-tabs-top
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap.du-bois-light-tabs-nav-wrap-ping-right::after,
  .du-bois-light-tabs-bottom
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap.du-bois-light-tabs-nav-wrap-ping-right::after {
    opacity: 1;
  }
  .du-bois-light-tabs-top > .du-bois-light-tabs-nav::before,
  .du-bois-light-tabs-top > div > .du-bois-light-tabs-nav::before {
    bottom: 0;
  }
  .du-bois-light-tabs-top > .du-bois-light-tabs-nav .du-bois-light-tabs-ink-bar,
  .du-bois-light-tabs-top
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar {
    bottom: 0;
  }
  .du-bois-light-tabs-bottom > .du-bois-light-tabs-nav,
  .du-bois-light-tabs-bottom > div > .du-bois-light-tabs-nav {
    order: 1;
    margin-top: 16px;
    margin-bottom: 0;
  }
  .du-bois-light-tabs-bottom > .du-bois-light-tabs-nav::before,
  .du-bois-light-tabs-bottom > div > .du-bois-light-tabs-nav::before {
    top: 0;
  }
  .du-bois-light-tabs-bottom
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar,
  .du-bois-light-tabs-bottom
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar {
    top: 0;
  }
  .du-bois-light-tabs-bottom > .du-bois-light-tabs-content-holder,
  .du-bois-light-tabs-bottom > div > .du-bois-light-tabs-content-holder {
    order: 0;
  }
  .du-bois-light-tabs-left > .du-bois-light-tabs-nav,
  .du-bois-light-tabs-right > .du-bois-light-tabs-nav,
  .du-bois-light-tabs-left > div > .du-bois-light-tabs-nav,
  .du-bois-light-tabs-right > div > .du-bois-light-tabs-nav {
    flex-direction: column;
    min-width: 50px;
  }
  .du-bois-light-tabs-left > .du-bois-light-tabs-nav .du-bois-light-tabs-tab,
  .du-bois-light-tabs-right > .du-bois-light-tabs-nav .du-bois-light-tabs-tab,
  .du-bois-light-tabs-left
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab,
  .du-bois-light-tabs-right
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab {
    padding: 4px 16px;
    text-align: center;
  }
  .du-bois-light-tabs-left
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab
    + .du-bois-light-tabs-tab,
  .du-bois-light-tabs-right
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab
    + .du-bois-light-tabs-tab,
  .du-bois-light-tabs-left
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab
    + .du-bois-light-tabs-tab,
  .du-bois-light-tabs-right
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab
    + .du-bois-light-tabs-tab {
    margin: 16px 0 0 0;
  }
  .du-bois-light-tabs-left
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap,
  .du-bois-light-tabs-right
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap,
  .du-bois-light-tabs-left
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap,
  .du-bois-light-tabs-right
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap {
    flex-direction: column;
  }
  .du-bois-light-tabs-left
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::before,
  .du-bois-light-tabs-right
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::before,
  .du-bois-light-tabs-left
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::before,
  .du-bois-light-tabs-right
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::before,
  .du-bois-light-tabs-left
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::after,
  .du-bois-light-tabs-right
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::after,
  .du-bois-light-tabs-left
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::after,
  .du-bois-light-tabs-right
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::after {
    right: 0;
    left: 0;
    height: 30px;
  }
  .du-bois-light-tabs-left
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::before,
  .du-bois-light-tabs-right
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::before,
  .du-bois-light-tabs-left
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::before,
  .du-bois-light-tabs-right
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::before {
    top: 0;
    box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, 0.08);
  }
  .du-bois-light-tabs-left
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::after,
  .du-bois-light-tabs-right
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::after,
  .du-bois-light-tabs-left
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::after,
  .du-bois-light-tabs-right
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::after {
    bottom: 0;
    box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08);
  }
  .du-bois-light-tabs-left
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap.du-bois-light-tabs-nav-wrap-ping-top::before,
  .du-bois-light-tabs-right
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap.du-bois-light-tabs-nav-wrap-ping-top::before,
  .du-bois-light-tabs-left
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap.du-bois-light-tabs-nav-wrap-ping-top::before,
  .du-bois-light-tabs-right
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap.du-bois-light-tabs-nav-wrap-ping-top::before {
    opacity: 1;
  }
  .du-bois-light-tabs-left
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap.du-bois-light-tabs-nav-wrap-ping-bottom::after,
  .du-bois-light-tabs-right
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap.du-bois-light-tabs-nav-wrap-ping-bottom::after,
  .du-bois-light-tabs-left
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap.du-bois-light-tabs-nav-wrap-ping-bottom::after,
  .du-bois-light-tabs-right
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap.du-bois-light-tabs-nav-wrap-ping-bottom::after {
    opacity: 1;
  }
  .du-bois-light-tabs-left
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar,
  .du-bois-light-tabs-right
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar,
  .du-bois-light-tabs-left
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar,
  .du-bois-light-tabs-right
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar {
    width: 2px;
  }
  .du-bois-light-tabs-left
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar-animated,
  .du-bois-light-tabs-right
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar-animated,
  .du-bois-light-tabs-left
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar-animated,
  .du-bois-light-tabs-right
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar-animated {
    transition: height 0.3s, top 0.3s;
  }
  .du-bois-light-tabs-left
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-list,
  .du-bois-light-tabs-right
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-list,
  .du-bois-light-tabs-left
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-list,
  .du-bois-light-tabs-right
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-list,
  .du-bois-light-tabs-left
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-operations,
  .du-bois-light-tabs-right
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-operations,
  .du-bois-light-tabs-left
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-operations,
  .du-bois-light-tabs-right
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-operations {
    flex: 1 0 auto;
    flex-direction: column;
  }
  .du-bois-light-tabs-left
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar,
  .du-bois-light-tabs-left
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar {
    right: 0;
  }
  .du-bois-light-tabs-left > .du-bois-light-tabs-content-holder,
  .du-bois-light-tabs-left > div > .du-bois-light-tabs-content-holder {
    margin-left: -1px;
    border-left: 1px solid #f0f0f0;
  }
  .du-bois-light-tabs-left
    > .du-bois-light-tabs-content-holder
    > .du-bois-light-tabs-content
    > .du-bois-light-tabs-tabpane,
  .du-bois-light-tabs-left
    > div
    > .du-bois-light-tabs-content-holder
    > .du-bois-light-tabs-content
    > .du-bois-light-tabs-tabpane {
    padding-left: 16px;
  }
  .du-bois-light-tabs-right > .du-bois-light-tabs-nav,
  .du-bois-light-tabs-right > div > .du-bois-light-tabs-nav {
    order: 1;
  }
  .du-bois-light-tabs-right
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar,
  .du-bois-light-tabs-right
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar {
    left: 0;
  }
  .du-bois-light-tabs-right > .du-bois-light-tabs-content-holder,
  .du-bois-light-tabs-right > div > .du-bois-light-tabs-content-holder {
    order: 0;
    margin-right: -1px;
    border-right: 1px solid #f0f0f0;
  }
  .du-bois-light-tabs-right
    > .du-bois-light-tabs-content-holder
    > .du-bois-light-tabs-content
    > .du-bois-light-tabs-tabpane,
  .du-bois-light-tabs-right
    > div
    > .du-bois-light-tabs-content-holder
    > .du-bois-light-tabs-content
    > .du-bois-light-tabs-tabpane {
    padding-right: 16px;
  }
  .du-bois-light-tabs-dropdown {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    position: absolute;
    top: -9999px;
    left: -9999px;
    z-index: 1050;
    display: block;
  }
  .du-bois-light-tabs-dropdown-hidden {
    display: none;
  }
  .du-bois-light-tabs-dropdown-menu {
    max-height: 200px;
    margin: 0;
    padding: 4px 0;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: left;
    list-style-type: none;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 4px;
    outline: none;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  }
  .du-bois-light-tabs-dropdown-menu-item {
    min-width: 120px;
    margin: 0;
    padding: 5px 8px;
    overflow: hidden;
    color: #1f272d;
    font-weight: normal;
    font-size: 13px;
    line-height: 22px;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    transition: all 0.3s;
  }
  .du-bois-light-tabs-dropdown-menu-item:hover {
    background: #f5f5f5;
  }
  .du-bois-light-tabs-dropdown-menu-item-disabled,
  .du-bois-light-tabs-dropdown-menu-item-disabled:hover {
    color: rgba(0, 0, 0, 0.25);
    background: transparent;
    cursor: not-allowed;
  }
  .du-bois-light-tabs-card > .du-bois-light-tabs-nav .du-bois-light-tabs-tab,
  .du-bois-light-tabs-card
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab {
    margin: 0;
    padding: -111px 8px;
    background: #fafafa;
    border: 1px solid #f0f0f0;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .du-bois-light-tabs-card
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab-active,
  .du-bois-light-tabs-card
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab-active {
    color: #2272b4;
    background: #fff;
  }
  .du-bois-light-tabs-card
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar,
  .du-bois-light-tabs-card
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-ink-bar {
    visibility: hidden;
  }
  .du-bois-light-tabs-card.du-bois-light-tabs-top
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab
    + .du-bois-light-tabs-tab,
  .du-bois-light-tabs-card.du-bois-light-tabs-bottom
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab
    + .du-bois-light-tabs-tab,
  .du-bois-light-tabs-card.du-bois-light-tabs-top
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab
    + .du-bois-light-tabs-tab,
  .du-bois-light-tabs-card.du-bois-light-tabs-bottom
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab
    + .du-bois-light-tabs-tab {
    margin-left: 2px;
  }
  .du-bois-light-tabs-card.du-bois-light-tabs-top
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab,
  .du-bois-light-tabs-card.du-bois-light-tabs-top
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab {
    border-radius: 4px 4px 0 0;
  }
  .du-bois-light-tabs-card.du-bois-light-tabs-top
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab-active,
  .du-bois-light-tabs-card.du-bois-light-tabs-top
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab-active {
    border-bottom-color: #fff;
  }
  .du-bois-light-tabs-card.du-bois-light-tabs-bottom
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab,
  .du-bois-light-tabs-card.du-bois-light-tabs-bottom
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab {
    border-radius: 0 0 4px 4px;
  }
  .du-bois-light-tabs-card.du-bois-light-tabs-bottom
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab-active,
  .du-bois-light-tabs-card.du-bois-light-tabs-bottom
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab-active {
    border-top-color: #fff;
  }
  .du-bois-light-tabs-card.du-bois-light-tabs-left
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab
    + .du-bois-light-tabs-tab,
  .du-bois-light-tabs-card.du-bois-light-tabs-right
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab
    + .du-bois-light-tabs-tab,
  .du-bois-light-tabs-card.du-bois-light-tabs-left
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab
    + .du-bois-light-tabs-tab,
  .du-bois-light-tabs-card.du-bois-light-tabs-right
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab
    + .du-bois-light-tabs-tab {
    margin-top: 2px;
  }
  .du-bois-light-tabs-card.du-bois-light-tabs-left
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab,
  .du-bois-light-tabs-card.du-bois-light-tabs-left
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab {
    border-radius: 4px 0 0 4px;
  }
  .du-bois-light-tabs-card.du-bois-light-tabs-left
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab-active,
  .du-bois-light-tabs-card.du-bois-light-tabs-left
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab-active {
    border-right-color: #fff;
  }
  .du-bois-light-tabs-card.du-bois-light-tabs-right
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab,
  .du-bois-light-tabs-card.du-bois-light-tabs-right
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab {
    border-radius: 0 4px 4px 0;
  }
  .du-bois-light-tabs-card.du-bois-light-tabs-right
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab-active,
  .du-bois-light-tabs-card.du-bois-light-tabs-right
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-tab-active {
    border-left-color: #fff;
  }
  .du-bois-light-tabs {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    display: flex;
    overflow: hidden;
  }
  .du-bois-light-tabs > .du-bois-light-tabs-nav,
  .du-bois-light-tabs > div > .du-bois-light-tabs-nav {
    position: relative;
    display: flex;
    flex: none;
    align-items: center;
  }
  .du-bois-light-tabs > .du-bois-light-tabs-nav .du-bois-light-tabs-nav-wrap,
  .du-bois-light-tabs
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap {
    position: relative;
    display: inline-block;
    display: flex;
    flex: auto;
    align-self: stretch;
    overflow: hidden;
    white-space: nowrap;
    transform: translate(0);
  }
  .du-bois-light-tabs
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::before,
  .du-bois-light-tabs
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::before,
  .du-bois-light-tabs
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::after,
  .du-bois-light-tabs
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap::after {
    position: absolute;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
    content: "";
    pointer-events: none;
  }
  .du-bois-light-tabs > .du-bois-light-tabs-nav .du-bois-light-tabs-nav-list,
  .du-bois-light-tabs
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-list {
    position: relative;
    display: flex;
    transition: transform 0.3s;
  }
  .du-bois-light-tabs
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-operations,
  .du-bois-light-tabs
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-operations {
    display: flex;
    align-self: stretch;
  }
  .du-bois-light-tabs
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-operations-hidden,
  .du-bois-light-tabs
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-operations-hidden {
    position: absolute;
    visibility: hidden;
    pointer-events: none;
  }
  .du-bois-light-tabs > .du-bois-light-tabs-nav .du-bois-light-tabs-nav-more,
  .du-bois-light-tabs
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-more {
    position: relative;
    padding: -111px 8px;
    background: transparent;
    border: 0;
  }
  .du-bois-light-tabs
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-more::after,
  .du-bois-light-tabs
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-more::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 5px;
    transform: translateY(100%);
    content: "";
  }
  .du-bois-light-tabs > .du-bois-light-tabs-nav .du-bois-light-tabs-nav-add,
  .du-bois-light-tabs
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-add {
    min-width: 40px;
    padding: 0 4px;
    background: #fafafa;
    border: 1px solid #f0f0f0;
    border-radius: 4px 4px 0 0;
    outline: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .du-bois-light-tabs
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-add:hover,
  .du-bois-light-tabs
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-add:hover {
    color: #448dc2;
  }
  .du-bois-light-tabs
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-add:active,
  .du-bois-light-tabs
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-add:active,
  .du-bois-light-tabs
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-add:focus,
  .du-bois-light-tabs
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-add:focus {
    color: #14538f;
  }
  .du-bois-light-tabs-extra-content {
    flex: none;
  }
  .du-bois-light-tabs-centered
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap:not(
      [class*="du-bois-light-tabs-nav-wrap-ping"]
    ),
  .du-bois-light-tabs-centered
    > div
    > .du-bois-light-tabs-nav
    .du-bois-light-tabs-nav-wrap:not(
      [class*="du-bois-light-tabs-nav-wrap-ping"]
    ) {
    justify-content: center;
  }
  .du-bois-light-tabs-ink-bar {
    position: absolute;
    background: #2272b4;
    pointer-events: none;
  }
  .du-bois-light-tabs-tab {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 8px 0;
    font-size: 13px;
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
  }
  .du-bois-light-tabs-tab-btn:focus,
  .du-bois-light-tabs-tab-remove:focus,
  .du-bois-light-tabs-tab-btn:active,
  .du-bois-light-tabs-tab-remove:active {
    color: #14538f;
  }
  .du-bois-light-tabs-tab-btn {
    outline: none;
    transition: all 0.3s;
  }
  .du-bois-light-tabs-tab-remove {
    flex: none;
    margin-right: -4px;
    margin-left: 8px;
    color: #5d7283;
    font-size: 12px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;
  }
  .du-bois-light-tabs-tab-remove:hover {
    color: rgba(0, 0, 0, 0.85);
  }
  .du-bois-light-tabs-tab:hover {
    color: #448dc2;
  }
  .du-bois-light-tabs-tab.du-bois-light-tabs-tab-active
    .du-bois-light-tabs-tab-btn {
    color: #2272b4;
    text-shadow: 0 0 0.25px currentColor;
  }
  .du-bois-light-tabs-tab.du-bois-light-tabs-tab-disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .du-bois-light-tabs-tab.du-bois-light-tabs-tab-disabled
    .du-bois-light-tabs-tab-btn:focus,
  .du-bois-light-tabs-tab.du-bois-light-tabs-tab-disabled
    .du-bois-light-tabs-tab-remove:focus,
  .du-bois-light-tabs-tab.du-bois-light-tabs-tab-disabled
    .du-bois-light-tabs-tab-btn:active,
  .du-bois-light-tabs-tab.du-bois-light-tabs-tab-disabled
    .du-bois-light-tabs-tab-remove:active {
    color: rgba(0, 0, 0, 0.25);
  }
  .du-bois-light-tabs-tab .du-bois-light-tabs-tab-remove .anticon {
    margin: 0;
  }
  .du-bois-light-tabs-tab .anticon {
    margin-right: 12px;
  }
  .du-bois-light-tabs-tab + .du-bois-light-tabs-tab {
    margin: 0 0 0 32px;
  }
  .du-bois-light-tabs-content {
    display: flex;
    width: 100%;
  }
  .du-bois-light-tabs-content-holder {
    flex: auto;
    min-width: 0;
    min-height: 0;
  }
  .du-bois-light-tabs-content-animated {
    transition: margin 0.3s;
  }
  .du-bois-light-tabs-tabpane {
    flex: none;
    width: 100%;
    outline: none;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  @keyframes antCheckboxEffect {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    100% {
      transform: scale(1.6);
      opacity: 0;
    }
  }
  .du-bois-light-tree-treenode-leaf-last
    .du-bois-light-tree-switcher-leaf-line::before {
    top: auto !important;
    bottom: auto !important;
    height: 14px !important;
  }
  .du-bois-light-tree.du-bois-light-tree-directory
    .du-bois-light-tree-treenode {
    position: relative;
  }
  .du-bois-light-tree.du-bois-light-tree-directory
    .du-bois-light-tree-treenode::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 4px;
    left: 0;
    transition: background-color 0.3s;
    content: "";
    pointer-events: none;
  }
  .du-bois-light-tree.du-bois-light-tree-directory
    .du-bois-light-tree-treenode:hover::before {
    background: #f5f5f5;
  }
  .du-bois-light-tree.du-bois-light-tree-directory
    .du-bois-light-tree-treenode
    > * {
    z-index: 1;
  }
  .du-bois-light-tree.du-bois-light-tree-directory
    .du-bois-light-tree-treenode
    .du-bois-light-tree-switcher {
    transition: color 0.3s;
  }
  .du-bois-light-tree.du-bois-light-tree-directory
    .du-bois-light-tree-treenode
    .du-bois-light-tree-node-content-wrapper {
    border-radius: 0;
    user-select: none;
  }
  .du-bois-light-tree.du-bois-light-tree-directory
    .du-bois-light-tree-treenode
    .du-bois-light-tree-node-content-wrapper:hover {
    background: transparent;
  }
  .du-bois-light-tree.du-bois-light-tree-directory
    .du-bois-light-tree-treenode
    .du-bois-light-tree-node-content-wrapper.du-bois-light-tree-node-selected {
    color: #fff;
    background: transparent;
  }
  .du-bois-light-tree.du-bois-light-tree-directory
    .du-bois-light-tree-treenode-selected:hover::before,
  .du-bois-light-tree.du-bois-light-tree-directory
    .du-bois-light-tree-treenode-selected::before {
    background: #2272b4;
  }
  .du-bois-light-tree.du-bois-light-tree-directory
    .du-bois-light-tree-treenode-selected
    .du-bois-light-tree-switcher {
    color: #fff;
  }
  .du-bois-light-tree.du-bois-light-tree-directory
    .du-bois-light-tree-treenode-selected
    .du-bois-light-tree-node-content-wrapper {
    color: #fff;
    background: transparent;
  }
  .du-bois-light-tree-checkbox {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    top: 0.2em;
    line-height: 1;
    white-space: nowrap;
    outline: none;
    cursor: pointer;
  }
  .du-bois-light-tree-checkbox-wrapper:hover .du-bois-light-tree-checkbox-inner,
  .du-bois-light-tree-checkbox:hover .du-bois-light-tree-checkbox-inner,
  .du-bois-light-tree-checkbox-input:focus
    + .du-bois-light-tree-checkbox-inner {
    border-color: #2272b4;
  }
  .du-bois-light-tree-checkbox-checked::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #2272b4;
    border-radius: 4px;
    visibility: hidden;
    animation: antCheckboxEffect 0.36s ease-in-out;
    animation-fill-mode: backwards;
    content: "";
  }
  .du-bois-light-tree-checkbox:hover::after,
  .du-bois-light-tree-checkbox-wrapper:hover
    .du-bois-light-tree-checkbox::after {
    visibility: visible;
  }
  .du-bois-light-tree-checkbox-inner {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    direction: ltr;
    background-color: #fff;
    border: 1px solid #cddae5;
    border-radius: 4px;
    border-collapse: separate;
    transition: all 0.3s;
  }
  .du-bois-light-tree-checkbox-inner::after {
    position: absolute;
    top: 50%;
    left: 22%;
    display: table;
    width: 5.71428571px;
    height: 9.14285714px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg) scale(0) translate(-50%, -50%);
    opacity: 0;
    transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
    content: " ";
  }
  .du-bois-light-tree-checkbox-input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }
  .du-bois-light-tree-checkbox-checked
    .du-bois-light-tree-checkbox-inner::after {
    position: absolute;
    display: table;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg) scale(1) translate(-50%, -50%);
    opacity: 1;
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    content: " ";
  }
  .du-bois-light-tree-checkbox-checked .du-bois-light-tree-checkbox-inner {
    background-color: #2272b4;
    border-color: #2272b4;
  }
  .du-bois-light-tree-checkbox-disabled {
    cursor: not-allowed;
  }
  .du-bois-light-tree-checkbox-disabled.du-bois-light-tree-checkbox-checked
    .du-bois-light-tree-checkbox-inner::after {
    border-color: rgba(0, 0, 0, 0.25);
    animation-name: none;
  }
  .du-bois-light-tree-checkbox-disabled .du-bois-light-tree-checkbox-input {
    cursor: not-allowed;
  }
  .du-bois-light-tree-checkbox-disabled .du-bois-light-tree-checkbox-inner {
    background-color: #f5f5f5;
    border-color: #cddae5 !important;
  }
  .du-bois-light-tree-checkbox-disabled
    .du-bois-light-tree-checkbox-inner::after {
    border-color: #f5f5f5;
    border-collapse: separate;
    animation-name: none;
  }
  .du-bois-light-tree-checkbox-disabled + span {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .du-bois-light-tree-checkbox-disabled:hover::after,
  .du-bois-light-tree-checkbox-wrapper:hover
    .du-bois-light-tree-checkbox-disabled::after {
    visibility: hidden;
  }
  .du-bois-light-tree-checkbox-wrapper {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    display: inline-flex;
    align-items: baseline;
    line-height: unset;
    cursor: pointer;
  }
  .du-bois-light-tree-checkbox-wrapper::after {
    display: inline-block;
    width: 0;
    overflow: hidden;
    content: "a0";
  }
  .du-bois-light-tree-checkbox-wrapper.du-bois-light-tree-checkbox-wrapper-disabled {
    cursor: not-allowed;
  }
  .du-bois-light-tree-checkbox-wrapper + .du-bois-light-tree-checkbox-wrapper {
    margin-left: 8px;
  }
  .du-bois-light-tree-checkbox + span {
    padding-right: 8px;
    padding-left: 8px;
  }
  .du-bois-light-tree-checkbox-group {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    display: inline-block;
  }
  .du-bois-light-tree-checkbox-group-item {
    margin-right: 8px;
  }
  .du-bois-light-tree-checkbox-group-item:last-child {
    margin-right: 0;
  }
  .du-bois-light-tree-checkbox-group-item
    + .du-bois-light-tree-checkbox-group-item {
    margin-left: 0;
  }
  .du-bois-light-tree-checkbox-indeterminate
    .du-bois-light-tree-checkbox-inner {
    background-color: #fff;
    border-color: #cddae5;
  }
  .du-bois-light-tree-checkbox-indeterminate
    .du-bois-light-tree-checkbox-inner::after {
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background-color: #2272b4;
    border: 0;
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    content: " ";
  }
  .du-bois-light-tree-checkbox-indeterminate.du-bois-light-tree-checkbox-disabled
    .du-bois-light-tree-checkbox-inner::after {
    background-color: rgba(0, 0, 0, 0.25);
    border-color: rgba(0, 0, 0, 0.25);
  }
  .du-bois-light-tree {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    background: #fff;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  .du-bois-light-tree-focused:not(:hover):not(
      .du-bois-light-tree-active-focused
    ) {
    background: #e6f1f5;
  }
  .du-bois-light-tree-list-holder-inner {
    align-items: flex-start;
  }
  .du-bois-light-tree.du-bois-light-tree-block-node
    .du-bois-light-tree-list-holder-inner {
    align-items: stretch;
  }
  .du-bois-light-tree.du-bois-light-tree-block-node
    .du-bois-light-tree-list-holder-inner
    .du-bois-light-tree-node-content-wrapper {
    flex: auto;
  }
  .du-bois-light-tree .du-bois-light-tree-treenode {
    display: flex;
    align-items: flex-start;
    padding: 0 0 2px 0;
    outline: none;
  }
  .du-bois-light-tree
    .du-bois-light-tree-treenode-disabled
    .du-bois-light-tree-node-content-wrapper {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .du-bois-light-tree
    .du-bois-light-tree-treenode-disabled
    .du-bois-light-tree-node-content-wrapper:hover {
    background: transparent;
  }
  .du-bois-light-tree
    .du-bois-light-tree-treenode-active
    .du-bois-light-tree-node-content-wrapper {
    background: #f5f5f5;
  }
  .du-bois-light-tree
    .du-bois-light-tree-treenode:not(
      .du-bois-light-tree .du-bois-light-tree-treenode-disabled
    ).filter-node
    .du-bois-light-tree-title {
    color: inherit;
    font-weight: 500;
  }
  .du-bois-light-tree-indent {
    align-self: stretch;
    white-space: nowrap;
    user-select: none;
  }
  .du-bois-light-tree-indent-unit {
    display: inline-block;
    width: 24px;
  }
  .du-bois-light-tree-switcher {
    position: relative;
    flex: none;
    align-self: stretch;
    width: 24px;
    margin: 0;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
    user-select: none;
  }
  .du-bois-light-tree-switcher .du-bois-light-tree-switcher-icon,
  .du-bois-light-tree-switcher .du-bois-light-select-tree-switcher-icon {
    display: inline-block;
    font-size: 10px;
    vertical-align: baseline;
  }
  .du-bois-light-tree-switcher .du-bois-light-tree-switcher-icon svg,
  .du-bois-light-tree-switcher .du-bois-light-select-tree-switcher-icon svg {
    transition: transform 0.3s;
  }
  .du-bois-light-tree-switcher-noop {
    cursor: default;
  }
  .du-bois-light-tree-switcher_close .du-bois-light-tree-switcher-icon svg {
    transform: rotate(-90deg);
  }
  .du-bois-light-tree-switcher-loading-icon {
    color: #2272b4;
  }
  .du-bois-light-tree-switcher-leaf-line {
    position: relative;
    z-index: 1;
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .du-bois-light-tree-switcher-leaf-line::before {
    position: absolute;
    top: 0;
    bottom: -2px;
    margin-left: -1px;
    border-left: 1px solid #d9d9d9;
    content: " ";
  }
  .du-bois-light-tree-switcher-leaf-line::after {
    position: absolute;
    width: 10px;
    height: 14px;
    margin-left: -1px;
    border-bottom: 1px solid #d9d9d9;
    content: " ";
  }
  .du-bois-light-tree-checkbox {
    top: initial;
    margin: 4px 8px 0 0;
  }
  .du-bois-light-tree .du-bois-light-tree-node-content-wrapper {
    position: relative;
    z-index: auto;
    min-height: 24px;
    margin: 0;
    padding: 0 4px;
    color: inherit;
    line-height: 24px;
    background: transparent;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s, border 0s, line-height 0s, box-shadow 0s;
  }
  .du-bois-light-tree .du-bois-light-tree-node-content-wrapper:hover {
    background-color: #f5f5f5;
  }
  .du-bois-light-tree
    .du-bois-light-tree-node-content-wrapper.du-bois-light-tree-node-selected {
    background-color: #c1dce8;
  }
  .du-bois-light-tree
    .du-bois-light-tree-node-content-wrapper
    .du-bois-light-tree-iconEle {
    display: inline-block;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    vertical-align: top;
  }
  .du-bois-light-tree
    .du-bois-light-tree-node-content-wrapper
    .du-bois-light-tree-iconEle:empty {
    display: none;
  }
  .du-bois-light-tree-unselectable
    .du-bois-light-tree-node-content-wrapper:hover {
    background-color: transparent;
  }
  .du-bois-light-tree-node-content-wrapper[draggable="true"] {
    line-height: 24px;
    user-select: none;
  }
  .du-bois-light-tree-node-content-wrapper[draggable="true"]
    .du-bois-light-tree-drop-indicator {
    position: absolute;
    z-index: 1;
    height: 2px;
    background-color: #2272b4;
    border-radius: 1px;
    pointer-events: none;
  }
  .du-bois-light-tree-node-content-wrapper[draggable="true"]
    .du-bois-light-tree-drop-indicator::after {
    position: absolute;
    top: -3px;
    left: -6px;
    width: 8px;
    height: 8px;
    background-color: transparent;
    border: 2px solid #2272b4;
    border-radius: 50%;
    content: "";
  }
  .du-bois-light-tree
    .du-bois-light-tree-treenode.drop-container
    > [draggable] {
    box-shadow: 0 0 0 2px #2272b4;
  }
  .du-bois-light-tree-show-line .du-bois-light-tree-indent-unit {
    position: relative;
    height: 100%;
  }
  .du-bois-light-tree-show-line .du-bois-light-tree-indent-unit::before {
    position: absolute;
    top: 0;
    right: 12px;
    bottom: -2px;
    border-right: 1px solid #cddae5;
    content: "";
  }
  .du-bois-light-tree-show-line .du-bois-light-tree-indent-unit-end::before {
    display: none;
  }
  .du-bois-light-tree-show-line .du-bois-light-tree-switcher {
    background: #fff;
  }
  .du-bois-light-tree-show-line .du-bois-light-tree-switcher-line-icon {
    vertical-align: -0.225em;
  }
  .du-bois-light-tree-rtl {
    direction: rtl;
  }
  .du-bois-light-tree-rtl
    .du-bois-light-tree-node-content-wrapper[draggable="true"]
    .du-bois-light-tree-drop-indicator::after {
    right: -6px;
    left: unset;
  }
  .du-bois-light-tree .du-bois-light-tree-treenode-rtl {
    direction: rtl;
  }
  .du-bois-light-tree-rtl
    .du-bois-light-tree-switcher_close
    .du-bois-light-tree-switcher-icon
    svg {
    transform: rotate(90deg);
  }
  .du-bois-light-tree-rtl.du-bois-light-tree-show-line
    .du-bois-light-tree-indent-unit::before {
    right: auto;
    left: -13px;
    border-right: none;
    border-left: 1px solid #cddae5;
  }
  .du-bois-light-tree-rtl.du-bois-light-tree-checkbox {
    margin: 4px 0 0 8px;
  }
  .du-bois-light-tree-select-dropdown-rtl .du-bois-light-select-tree-checkbox {
    margin: 4px 0 0 8px;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-typography {
    color: #1f272d;
    overflow-wrap: break-word;
  }
  .du-bois-light-typography.du-bois-light-typography-secondary {
    color: #5d7283;
  }
  .du-bois-light-typography.du-bois-light-typography-success {
    color: #34824f;
  }
  .du-bois-light-typography.du-bois-light-typography-warning {
    color: #af5b23;
  }
  .du-bois-light-typography.du-bois-light-typography-danger {
    color: #c82d4c;
  }
  a.du-bois-light-typography.du-bois-light-typography-danger:active,
  a.du-bois-light-typography.du-bois-light-typography-danger:focus,
  a.du-bois-light-typography.du-bois-light-typography-danger:hover {
    color: #d45368;
  }
  .du-bois-light-typography.du-bois-light-typography-disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
    user-select: none;
  }
  div.du-bois-light-typography,
  .du-bois-light-typography p {
    margin-bottom: 1em;
  }
  h1.du-bois-light-typography,
  .du-bois-light-typography h1 {
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 36px;
    line-height: 1.23;
  }
  h2.du-bois-light-typography,
  .du-bois-light-typography h2 {
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 28px;
    line-height: 1.35;
  }
  h3.du-bois-light-typography,
  .du-bois-light-typography h3 {
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 23px;
    line-height: 1.35;
  }
  h4.du-bois-light-typography,
  .du-bois-light-typography h4 {
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 19px;
    line-height: 1.4;
  }
  h5.du-bois-light-typography,
  .du-bois-light-typography h5 {
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 15px;
    line-height: 1.5;
  }
  .du-bois-light-typography + h1.du-bois-light-typography,
  .du-bois-light-typography + h2.du-bois-light-typography,
  .du-bois-light-typography + h3.du-bois-light-typography,
  .du-bois-light-typography + h4.du-bois-light-typography,
  .du-bois-light-typography + h5.du-bois-light-typography {
    margin-top: 1.2em;
  }
  .du-bois-light-typography div + h1,
  .du-bois-light-typography ul + h1,
  .du-bois-light-typography li + h1,
  .du-bois-light-typography p + h1,
  .du-bois-light-typography h1 + h1,
  .du-bois-light-typography h2 + h1,
  .du-bois-light-typography h3 + h1,
  .du-bois-light-typography h4 + h1,
  .du-bois-light-typography h5 + h1,
  .du-bois-light-typography div + h2,
  .du-bois-light-typography ul + h2,
  .du-bois-light-typography li + h2,
  .du-bois-light-typography p + h2,
  .du-bois-light-typography h1 + h2,
  .du-bois-light-typography h2 + h2,
  .du-bois-light-typography h3 + h2,
  .du-bois-light-typography h4 + h2,
  .du-bois-light-typography h5 + h2,
  .du-bois-light-typography div + h3,
  .du-bois-light-typography ul + h3,
  .du-bois-light-typography li + h3,
  .du-bois-light-typography p + h3,
  .du-bois-light-typography h1 + h3,
  .du-bois-light-typography h2 + h3,
  .du-bois-light-typography h3 + h3,
  .du-bois-light-typography h4 + h3,
  .du-bois-light-typography h5 + h3,
  .du-bois-light-typography div + h4,
  .du-bois-light-typography ul + h4,
  .du-bois-light-typography li + h4,
  .du-bois-light-typography p + h4,
  .du-bois-light-typography h1 + h4,
  .du-bois-light-typography h2 + h4,
  .du-bois-light-typography h3 + h4,
  .du-bois-light-typography h4 + h4,
  .du-bois-light-typography h5 + h4,
  .du-bois-light-typography div + h5,
  .du-bois-light-typography ul + h5,
  .du-bois-light-typography li + h5,
  .du-bois-light-typography p + h5,
  .du-bois-light-typography h1 + h5,
  .du-bois-light-typography h2 + h5,
  .du-bois-light-typography h3 + h5,
  .du-bois-light-typography h4 + h5,
  .du-bois-light-typography h5 + h5 {
    margin-top: 1.2em;
  }
  a.du-bois-light-typography-ellipsis,
  span.du-bois-light-typography-ellipsis {
    display: inline-block;
  }
  a.du-bois-light-typography,
  .du-bois-light-typography a {
    color: #2272b4;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
    text-decoration: none;
  }
  a.du-bois-light-typography:focus,
  .du-bois-light-typography a:focus,
  a.du-bois-light-typography:hover,
  .du-bois-light-typography a:hover {
    color: #448dc2;
  }
  a.du-bois-light-typography:active,
  .du-bois-light-typography a:active {
    color: #14538f;
  }
  a.du-bois-light-typography:active,
  .du-bois-light-typography a:active,
  a.du-bois-light-typography:hover,
  .du-bois-light-typography a:hover {
    text-decoration: none;
  }
  a.du-bois-light-typography[disabled],
  .du-bois-light-typography a[disabled],
  a.du-bois-light-typography.du-bois-light-typography-disabled,
  .du-bois-light-typography a.du-bois-light-typography-disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  a.du-bois-light-typography[disabled]:active,
  .du-bois-light-typography a[disabled]:active,
  a.du-bois-light-typography.du-bois-light-typography-disabled:active,
  .du-bois-light-typography a.du-bois-light-typography-disabled:active,
  a.du-bois-light-typography[disabled]:hover,
  .du-bois-light-typography a[disabled]:hover,
  a.du-bois-light-typography.du-bois-light-typography-disabled:hover,
  .du-bois-light-typography a.du-bois-light-typography-disabled:hover {
    color: rgba(0, 0, 0, 0.25);
  }
  a.du-bois-light-typography[disabled]:active,
  .du-bois-light-typography a[disabled]:active,
  a.du-bois-light-typography.du-bois-light-typography-disabled:active,
  .du-bois-light-typography a.du-bois-light-typography-disabled:active {
    pointer-events: none;
  }
  .du-bois-light-typography code {
    margin: 0 0.2em;
    padding: 0.2em 0.4em 0.1em;
    font-size: 85%;
    background: rgba(150, 150, 150, 0.1);
    border: 1px solid rgba(100, 100, 100, 0.2);
    border-radius: 3px;
  }
  .du-bois-light-typography kbd {
    margin: 0 0.2em;
    padding: 0.15em 0.4em 0.1em;
    font-size: 90%;
    background: rgba(150, 150, 150, 0.06);
    border: 1px solid rgba(100, 100, 100, 0.2);
    border-bottom-width: 2px;
    border-radius: 3px;
  }
  .du-bois-light-typography mark {
    padding: 0;
    background-color: #ffe58f;
  }
  .du-bois-light-typography u,
  .du-bois-light-typography ins {
    text-decoration: underline;
    text-decoration-skip-ink: auto;
  }
  .du-bois-light-typography s,
  .du-bois-light-typography del {
    text-decoration: line-through;
  }
  .du-bois-light-typography strong {
    font-weight: 600;
  }
  .du-bois-light-typography-expand,
  .du-bois-light-typography-edit,
  .du-bois-light-typography-copy {
    color: #2272b4;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
    margin-left: 4px;
  }
  .du-bois-light-typography-expand:focus,
  .du-bois-light-typography-edit:focus,
  .du-bois-light-typography-copy:focus,
  .du-bois-light-typography-expand:hover,
  .du-bois-light-typography-edit:hover,
  .du-bois-light-typography-copy:hover {
    color: #448dc2;
  }
  .du-bois-light-typography-expand:active,
  .du-bois-light-typography-edit:active,
  .du-bois-light-typography-copy:active {
    color: #14538f;
  }
  .du-bois-light-typography-copy-success,
  .du-bois-light-typography-copy-success:hover,
  .du-bois-light-typography-copy-success:focus {
    color: #34824f;
  }
  .du-bois-light-typography-edit-content {
    position: relative;
  }
  div.du-bois-light-typography-edit-content {
    left: -13px;
    margin-top: -6px;
    margin-bottom: calc(1em - 5px - 1px);
  }
  .du-bois-light-typography-edit-content-confirm {
    position: absolute;
    right: 10px;
    bottom: 8px;
    color: #5d7283;
    pointer-events: none;
  }
  .du-bois-light-typography-edit-content textarea {
    -moz-transition: none;
  }
  .du-bois-light-typography ul,
  .du-bois-light-typography ol {
    margin: 0 0 1em 0;
    padding: 0;
  }
  .du-bois-light-typography ul li,
  .du-bois-light-typography ol li {
    margin: 0 0 0 20px;
    padding: 0 0 0 4px;
  }
  .du-bois-light-typography ul {
    list-style-type: circle;
  }
  .du-bois-light-typography ul ul {
    list-style-type: disc;
  }
  .du-bois-light-typography ol {
    list-style-type: decimal;
  }
  .du-bois-light-typography pre,
  .du-bois-light-typography blockquote {
    margin: 1em 0;
  }
  .du-bois-light-typography pre {
    padding: 0.4em 0.6em;
    white-space: pre-wrap;
    word-wrap: break-word;
    background: rgba(150, 150, 150, 0.1);
    border: 1px solid rgba(100, 100, 100, 0.2);
    border-radius: 3px;
  }
  .du-bois-light-typography pre code {
    display: inline;
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
    background: transparent;
    border: 0;
  }
  .du-bois-light-typography blockquote {
    padding: 0 0 0 0.6em;
    border-left: 4px solid rgba(100, 100, 100, 0.2);
    opacity: 0.85;
  }
  .du-bois-light-typography-single-line {
    white-space: nowrap;
  }
  .du-bois-light-typography-ellipsis-single-line {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  a.du-bois-light-typography-ellipsis-single-line,
  span.du-bois-light-typography-ellipsis-single-line {
    vertical-align: bottom;
  }
  .du-bois-light-typography-ellipsis-multiple-line {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    /*! autoprefixer: ignore next */
    -webkit-box-orient: vertical;
  }
  .du-bois-light-typography-rtl {
    direction: rtl;
  }
  .du-bois-light-typography-rtl .du-bois-light-typography-expand,
  .du-bois-light-typography-rtl .du-bois-light-typography-edit,
  .du-bois-light-typography-rtl .du-bois-light-typography-copy {
    margin-right: 4px;
    margin-left: 0;
  }
  .du-bois-light-typography-rtl .du-bois-light-typography-expand {
    float: left;
  }
  div.du-bois-light-typography-edit-content.du-bois-light-typography-rtl {
    right: -13px;
    left: auto;
  }
  .du-bois-light-typography-rtl .du-bois-light-typography-edit-content-confirm {
    right: auto;
    left: 10px;
  }
  .du-bois-light-typography-rtl.du-bois-light-typography ul li,
  .du-bois-light-typography-rtl.du-bois-light-typography ol li {
    margin: 0 20px 0 0;
    padding: 0 4px 0 0;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-switch {
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    min-width: 28px;
    height: 16px;
    line-height: 16px;
    vertical-align: middle;
    background-color: rgba(0, 0, 0, 0.25);
    border: 0;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.2s;
    user-select: none;
  }
  .du-bois-light-switch:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
  .du-bois-light-switch-checked:focus {
    box-shadow: 0 0 0 2px rgba(34, 115, 181, 0.2);
  }
  .du-bois-light-switch:focus:hover {
    box-shadow: none;
  }
  .du-bois-light-switch-checked {
    background-color: #2273b5;
  }
  .du-bois-light-switch-loading,
  .du-bois-light-switch-disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
  .du-bois-light-switch-loading *,
  .du-bois-light-switch-disabled * {
    box-shadow: none;
    cursor: not-allowed;
  }
  .du-bois-light-switch-inner {
    display: block;
    margin: 0 5px 0 18px;
    color: #fff;
    font-size: 12px;
    transition: margin 0.2s;
  }
  .du-bois-light-switch-checked .du-bois-light-switch-inner {
    margin: 0 18px 0 5px;
  }
  .du-bois-light-switch-handle {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 14px;
    height: 14px;
    transition: all 0.2s ease-in-out;
  }
  .du-bois-light-switch-handle::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: white;
    border-radius: 7px;
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
    transition: all 0.2s ease-in-out;
    content: "";
  }
  .du-bois-light-switch-checked .du-bois-light-switch-handle {
    left: calc(100% - 14px - 0px);
  }
  .du-bois-light-switch:not(.du-bois-light-switch-disabled):active
    .du-bois-light-switch-handle::before {
    right: -30%;
    left: 0;
  }
  .du-bois-light-switch:not(
      .du-bois-light-switch-disabled
    ):active.du-bois-light-switch-checked
    .du-bois-light-switch-handle::before {
    right: 0;
    left: -30%;
  }
  .du-bois-light-switch-loading-icon {
    position: relative;
    top: 0.5px;
    color: rgba(0, 0, 0, 0.65);
    vertical-align: top;
  }
  .du-bois-light-switch-checked .du-bois-light-switch-loading-icon {
    color: #2273b5;
  }
  .du-bois-light-switch-small {
    min-width: 28px;
    height: 16px;
    line-height: 16px;
  }
  .du-bois-light-switch-small .du-bois-light-switch-inner {
    margin: 0 5px 0 18px;
    font-size: 12px;
  }
  .du-bois-light-switch-small .du-bois-light-switch-handle {
    width: 12px;
    height: 12px;
  }
  .du-bois-light-switch-small .du-bois-light-switch-loading-icon {
    top: 1.5px;
    font-size: 9px;
  }
  .du-bois-light-switch-small.du-bois-light-switch-checked
    .du-bois-light-switch-inner {
    margin: 0 18px 0 5px;
  }
  .du-bois-light-switch-small.du-bois-light-switch-checked
    .du-bois-light-switch-handle {
    left: calc(100% - 12px - 0px);
  }
  .du-bois-light-switch-rtl {
    direction: rtl;
  }
  .du-bois-light-switch-rtl .du-bois-light-switch-inner {
    margin: 0 18px 0 5px;
  }
  .du-bois-light-switch-rtl .du-bois-light-switch-handle {
    right: 0px;
    left: auto;
  }
  .du-bois-light-switch-rtl:not(.du-bois-light-switch-rtl-disabled):active
    .du-bois-light-switch-handle::before {
    right: 0;
    left: -30%;
  }
  .du-bois-light-switch-rtl:not(
      .du-bois-light-switch-rtl-disabled
    ):active.du-bois-light-switch-checked
    .du-bois-light-switch-handle::before {
    right: -30%;
    left: 0;
  }
  .du-bois-light-switch-rtl.du-bois-light-switch-checked
    .du-bois-light-switch-inner {
    margin: 0 5px 0 18px;
  }
  .du-bois-light-switch-rtl.du-bois-light-switch-checked
    .du-bois-light-switch-handle {
    right: calc(100% - 14px - 0px);
  }
  .du-bois-light-switch-rtl.du-bois-light-switch-small.du-bois-light-switch-checked
    .du-bois-light-switch-handle {
    right: calc(100% - 12px - 0px);
  }
  .du-bois-light-switch {
    transition: none;
    border: 1px solid #64727d;
    background-color: white;
    margin-right: 8px;
  }
  .du-bois-light-switch .du-bois-light-switch-handle::before {
    box-shadow: 0px 0px 0px 1px #64727d;
  }
  .du-bois-light-switch-checked {
    border: 1px solid #2273b5;
    background-color: #2273b5;
  }
  .du-bois-light-switch-checked .du-bois-light-switch-handle::before {
    box-shadow: none;
  }
  .du-bois-light-switch:focus-visible {
    box-shadow: 0px 0px 0px 1px #2273b5;
    border: 1px solid #2273b5;
  }
  .du-bois-light-switch:focus-visible .du-bois-light-switch-handle::before {
    box-shadow: 0px 0px 0px 1px #2273b5;
  }
  .du-bois-light-switch-checked:focus-visible {
    box-shadow: 0px 0px 0px 1px #ffffff, 0px 0px 0px 3px #2273b5;
  }
  .du-bois-light-switch:hover {
    border: 1px solid #186099;
    background-color: rgba(34, 115, 181, 0.08);
  }
  .du-bois-light-switch:hover .du-bois-light-switch-handle::before {
    box-shadow: 0px 0px 0px 1px #186099;
  }
  .du-bois-light-switch-checked:hover {
    background-color: #186099;
  }
  .du-bois-light-switch:active {
    background-color: rgba(34, 115, 181, 0.16);
  }
  .du-bois-light-switch-checked:active {
    background-color: #0d4f85;
  }
  .du-bois-light-switch-disabled,
  .du-bois-light-switch-disabled:hover {
    border: 1px solid #a2aeb8;
  }
  .du-bois-light-switch-disabled .du-bois-light-switch-handle::before,
  .du-bois-light-switch-disabled:hover .du-bois-light-switch-handle::before {
    box-shadow: 0px 0px 0px 1px #a2aeb8;
  }
  .du-bois-light-switch-disabled.du-bois-light-switch-checked {
    background-color: #a2aeb8;
  }
  .du-bois-light-switch:not(.du-bois-light-switch-disabled):active
    .du-bois-light-switch-handle::before {
    right: 0;
    left: 0;
  }
  .du-bois-light-switch:not(
      .du-bois-light-switch-disabled
    ):active.du-bois-light-switch-checked
    .du-bois-light-switch-handle::before {
    right: 0;
    left: 0;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-breadcrumb {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    color: #5d7283;
    font-size: 13px;
  }
  .du-bois-light-breadcrumb .anticon {
    font-size: 13px;
  }
  .du-bois-light-breadcrumb a {
    color: #5d7283;
    transition: color 0.3s;
  }
  .du-bois-light-breadcrumb a:hover {
    color: #448dc2;
  }
  .du-bois-light-breadcrumb > span:last-child {
    color: #1f272d;
  }
  .du-bois-light-breadcrumb > span:last-child a {
    color: #1f272d;
  }
  .du-bois-light-breadcrumb
    > span:last-child
    .du-bois-light-breadcrumb-separator {
    display: none;
  }
  .du-bois-light-breadcrumb-separator {
    margin: 0 4px;
    color: #5d7283;
  }
  .du-bois-light-breadcrumb-link > .anticon + span,
  .du-bois-light-breadcrumb-link > .anticon + a {
    margin-left: 4px;
  }
  .du-bois-light-breadcrumb-overlay-link > .anticon {
    margin-left: 4px;
  }
  .du-bois-light-breadcrumb-rtl {
    direction: rtl;
  }
  .du-bois-light-breadcrumb-rtl::before {
    display: table;
    content: "";
  }
  .du-bois-light-breadcrumb-rtl::after {
    display: table;
    clear: both;
    content: "";
  }
  .du-bois-light-breadcrumb-rtl > span {
    float: right;
  }
  .du-bois-light-breadcrumb-rtl
    .du-bois-light-breadcrumb-link
    > .anticon
    + span,
  .du-bois-light-breadcrumb-rtl .du-bois-light-breadcrumb-link > .anticon + a {
    margin-right: 4px;
    margin-left: 0;
  }
  .du-bois-light-breadcrumb-rtl
    .du-bois-light-breadcrumb-overlay-link
    > .anticon {
    margin-right: 4px;
    margin-left: 0;
  }
  .du-bois-light-breadcrumb a {
    color: #2272b4;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
  }
  .du-bois-light-breadcrumb a:focus,
  .du-bois-light-breadcrumb a:hover {
    color: #448dc2;
  }
  .du-bois-light-breadcrumb a:active {
    color: #14538f;
  }

  /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .du-bois-light-notification {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f272d;
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 20px;
    list-style: none;
    font-feature-settings: "tnum";
    position: fixed;
    z-index: 1010;
    margin-right: 24px;
  }
  .du-bois-light-notification-topLeft,
  .du-bois-light-notification-bottomLeft {
    margin-right: 0;
    margin-left: 24px;
  }
  .du-bois-light-notification-topLeft
    .du-bois-light-notification-fade-enter.du-bois-light-notification-fade-enter-active,
  .du-bois-light-notification-bottomLeft
    .du-bois-light-notification-fade-enter.du-bois-light-notification-fade-enter-active,
  .du-bois-light-notification-topLeft
    .du-bois-light-notification-fade-appear.du-bois-light-notification-fade-appear-active,
  .du-bois-light-notification-bottomLeft
    .du-bois-light-notification-fade-appear.du-bois-light-notification-fade-appear-active {
    animation-name: NotificationLeftFadeIn;
  }
  .du-bois-light-notification-close-icon {
    font-size: 13px;
    cursor: pointer;
  }
  .du-bois-light-notification-hook-holder {
    position: relative;
  }
  .du-bois-light-notification-notice {
    position: relative;
    width: 384px;
    max-width: calc(100vw - 24px * 2);
    margin-bottom: 16px;
    margin-left: auto;
    padding: 16px 24px;
    overflow: hidden;
    line-height: 20px;
    word-wrap: break-word;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  }
  .du-bois-light-notification-topLeft .du-bois-light-notification-notice,
  .du-bois-light-notification-bottomLeft .du-bois-light-notification-notice {
    margin-right: auto;
    margin-left: 0;
  }
  .du-bois-light-notification-notice-message {
    margin-bottom: 8px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 18px;
    line-height: 24px;
  }
  .du-bois-light-notification-notice-message-single-line-auto-margin {
    display: block;
    width: calc(384px - 24px * 2 - 24px - 48px - 100%);
    max-width: 4px;
    background-color: transparent;
    pointer-events: none;
  }
  .du-bois-light-notification-notice-message-single-line-auto-margin::before {
    display: block;
    content: "";
  }
  .du-bois-light-notification-notice-description {
    font-size: 13px;
  }
  .du-bois-light-notification-notice-closable
    .du-bois-light-notification-notice-message {
    padding-right: 24px;
  }
  .du-bois-light-notification-notice-with-icon
    .du-bois-light-notification-notice-message {
    margin-bottom: 4px;
    margin-left: 48px;
    font-size: 18px;
  }
  .du-bois-light-notification-notice-with-icon
    .du-bois-light-notification-notice-description {
    margin-left: 48px;
    font-size: 13px;
  }
  .du-bois-light-notification-notice-icon {
    position: absolute;
    margin-left: 4px;
    font-size: 24px;
    line-height: 24px;
  }
  .anticon.du-bois-light-notification-notice-icon-success {
    color: #34824f;
  }
  .anticon.du-bois-light-notification-notice-icon-info {
    color: #64727d;
  }
  .anticon.du-bois-light-notification-notice-icon-warning {
    color: #af5b23;
  }
  .anticon.du-bois-light-notification-notice-icon-error {
    color: #c82d4c;
  }
  .du-bois-light-notification-notice-close {
    position: absolute;
    top: 16px;
    right: 22px;
    color: #5d7283;
    outline: none;
  }
  .du-bois-light-notification-notice-close:hover {
    color: #38444f;
  }
  .du-bois-light-notification-notice-btn {
    float: right;
    margin-top: 16px;
  }
  .du-bois-light-notification .notification-fade-effect {
    animation-duration: 0.24s;
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-fill-mode: both;
  }
  .du-bois-light-notification-fade-enter,
  .du-bois-light-notification-fade-appear {
    animation-duration: 0.24s;
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-fill-mode: both;
    opacity: 0;
    animation-play-state: paused;
  }
  .du-bois-light-notification-fade-leave {
    animation-duration: 0.24s;
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-fill-mode: both;
    animation-duration: 0.2s;
    animation-play-state: paused;
  }
  .du-bois-light-notification-fade-enter.du-bois-light-notification-fade-enter-active,
  .du-bois-light-notification-fade-appear.du-bois-light-notification-fade-appear-active {
    animation-name: NotificationFadeIn;
    animation-play-state: running;
  }
  .du-bois-light-notification-fade-leave.du-bois-light-notification-fade-leave-active {
    animation-name: NotificationFadeOut;
    animation-play-state: running;
  }
  @keyframes NotificationFadeIn {
    0% {
      left: 384px;
      opacity: 0;
    }
    100% {
      left: 0;
      opacity: 1;
    }
  }
  @keyframes NotificationLeftFadeIn {
    0% {
      right: 384px;
      opacity: 0;
    }
    100% {
      right: 0;
      opacity: 1;
    }
  }
  @keyframes NotificationFadeOut {
    0% {
      max-height: 150px;
      margin-bottom: 16px;
      opacity: 1;
    }
    100% {
      max-height: 0;
      margin-bottom: 0;
      padding-top: 0;
      padding-bottom: 0;
      opacity: 0;
    }
  }
  .du-bois-light-notification-rtl {
    direction: rtl;
  }
  .du-bois-light-notification-rtl
    .du-bois-light-notification-notice-closable
    .du-bois-light-notification-notice-message {
    padding-right: 0;
    padding-left: 24px;
  }
  .du-bois-light-notification-rtl
    .du-bois-light-notification-notice-with-icon
    .du-bois-light-notification-notice-message {
    margin-right: 48px;
    margin-left: 0;
  }
  .du-bois-light-notification-rtl
    .du-bois-light-notification-notice-with-icon
    .du-bois-light-notification-notice-description {
    margin-right: 48px;
    margin-left: 0;
  }
  .du-bois-light-notification-rtl .du-bois-light-notification-notice-icon {
    margin-right: 4px;
    margin-left: 0;
  }
  .du-bois-light-notification-rtl .du-bois-light-notification-notice-close {
    right: auto;
    left: 22px;
  }
  .du-bois-light-notification-rtl .du-bois-light-notification-notice-btn {
    float: left;
  }
  .du-bois-light-notification-notice {
    padding: 10px 40px 10px 32px;
  }
  .du-bois-light-notification-notice .du-bois-light-notification-notice-icon {
    font-size: 16px;
    width: 16px;
    height: 16px;
    margin-left: 0;
    left: 12px;
    top: 12px;
    line-height: 16px;
  }
  .du-bois-light-notification-notice .du-bois-light-notification-notice-close {
    top: 12px;
    right: 12px;
    width: 16px;
    height: 16px;
    line-height: 16px;
  }
  .du-bois-light-notification-notice
    .du-bois-light-notification-notice-close
    span[role="img"] {
    font-size: 16px;
  }
  .du-bois-light-notification-notice
    .du-bois-light-notification-notice-message {
    display: flex;
    align-items: center;
    min-height: 20px;
    line-height: 20px;
    font-weight: 600;
  }
  .du-bois-light-notification-notice .du-bois-light-notification-notice-message,
  .du-bois-light-notification-notice
    .du-bois-light-notification-notice-description {
    margin-left: unset;
    font-size: 13px;
    margin-bottom: 0;
  }
`;
var DuboisStyle_default = DuboisStyle;
export {
  DuboisStyle_default as default
};
