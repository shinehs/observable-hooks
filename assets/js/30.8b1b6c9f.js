(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{375:function(e,r,t){"use strict";t.r(r);var o=t(37),a=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"项目动机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目动机"}},[e._v("#")]),e._v(" 项目动机")]),e._v(" "),t("p",[e._v("创建 "),t("code",[e._v("observable-hooks")]),e._v(" 的主要原因是我们希望通过简洁、灵活、可测试且性能较好的方式将复杂的异步逻辑（如精细动效、按键组合解析）与 React 组件连接起来，从而实现可复用的富组件。")]),e._v(" "),t("h2",{attrs:{id:"为什么在-hooks-中使用-rxjs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么在-hooks-中使用-rxjs"}},[e._v("#")]),e._v(" 为什么在 Hooks 中使用 RxJS")]),e._v(" "),t("p",[e._v("有了 React hooks 之后开发带状态的组件已变得十分简单。我们可以甚至可以大胆地在组件中复用复杂的异步逻辑。")]),e._v(" "),t("p",[e._v("但 hooks 仅仅是一套在组件中连接状态逻辑的机制，对于状态逻辑本身，特别是复杂的异步逻辑，我们依然需要其它工具来减少设计复杂度。")]),e._v(" "),t("p",[e._v("社区中已经有许多专注于特定异步场景的库，如 "),t("a",{attrs:{href:"https://github.com/zeit/swr",target:"_blank",rel:"noopener noreferrer"}},[e._v("swr"),t("OutboundLink")],1),e._v(" 用于服务器取数（可以"),t("RouterLink",{attrs:{to:"/zh-cn/guide/render-as-you-fetch-suspense.html#stale-while-revalidate-pattern"}},[e._v("看看")]),e._v("在 observable-hooks 中如何结合 Suspense 实现同样的 "),t("code",[e._v("stale-while-revalidate")]),e._v(" 机制）。这就像对比 Redux Saga 与 Redux Observable。学习使用这些库得到的知识并不能像 RxJS（或者响应式编程，一个与语言无关的编程范式）一样可以转移复用。你可以用 RxJS 解决几乎任何复杂的异步场景，且同时保持良好的可读性与可测试性。")],1),e._v(" "),t("p",[e._v("当然 RxJS 确实存在陡峭的学习曲线，但几乎都是一次性的概念性知识。不必被巨量的 RxJS 操作符吓到，大部分情况下只用一小部分就足够。同时可以看看这个有趣的"),t("a",{attrs:{href:"https://rxjs-dev.firebaseapp.com/operator-decision-tree",target:"_blank",rel:"noopener noreferrer"}},[e._v("操作符决策树"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"为什么造轮子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么造轮子"}},[e._v("#")]),e._v(" 为什么造轮子")]),e._v(" "),t("p",[e._v("我们首先尝试了 "),t("a",{attrs:{href:"https://github.com/LeetCode-OpenSource/rxjs-hooks",target:"_blank",rel:"noopener noreferrer"}},[e._v("rxjs-hooks"),t("OutboundLink")],1),e._v(" 但很快遇到来一些奇怪的 "),t("a",{attrs:{href:"https://github.com/LeetCode-OpenSource/rxjs-hooks/issues/60",target:"_blank",rel:"noopener noreferrer"}},[e._v("TypeScript 问题"),t("OutboundLink")],1),e._v("。我们还认为其 "),t("code",[e._v("useEventCallback")]),e._v(" "),t("a",{attrs:{href:"https://github.com/LeetCode-OpenSource/rxjs-hooks/blob/505d71901a9ca7827472d750455d44e5bc3d9f48/src/use-event-callback.ts#L77-L80",target:"_blank",rel:"noopener noreferrer"}},[e._v("负责了太多东西"),t("OutboundLink")],1),e._v("，可能会存在性能问题，且因 "),t("a",{attrs:{href:"https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level",target:"_blank",rel:"noopener noreferrer"}},[e._v("hooks 固定顺序"),t("OutboundLink")],1),e._v("的规则难以被优化。")]),e._v(" "),t("p",[e._v("另外随着团队将注意力转到了类 redux-observable 的 "),t("a",{attrs:{href:"https://github.com/LeetCode-OpenSource/ayanami",target:"_blank",rel:"noopener noreferrer"}},[e._v("ayanami"),t("OutboundLink")],1),e._v(" 项目，该项目已不再活跃开发。")]),e._v(" "),t("p",[e._v("故最终我们重新思考了整个整合机制，重头设计了新的 API 并创建了 observable-hooks 来连接 RxJS Observable 与 React 组件。")]),e._v(" "),t("h2",{attrs:{id:"它不是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#它不是什么"}},[e._v("#")]),e._v(" 它不是什么")]),e._v(" "),t("p",[e._v("这个库不是为了取代状态管理库如 Redux 而是为了避免将大量状态逻辑托管到状态管理中心，从而尽可能在组件中复用。")]),e._v(" "),t("p",[e._v("使用这个库并不代表就要将所有东西都转换成 Observable（且不推荐这么做）。这个库与其它 hooks 可以很好的并存，在需要的地方使用即可。")])])}),[],!1,null,null,null);r.default=a.exports}}]);