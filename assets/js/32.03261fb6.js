(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{377:function(s,t,a){"use strict";a.r(t);var e=a(37),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"render-as-you-fetch-结合-suspense"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render-as-you-fetch-结合-suspense"}},[s._v("#")]),s._v(" Render-as-You-Fetch (结合 Suspense)")]),s._v(" "),a("p",[s._v("Observable-hooks 提供了专门的 React Suspense 支持！支持同步模式！")]),s._v(" "),a("p",[s._v("也可以看看 "),a("RouterLink",{attrs:{to:"/examples/suspense.html"}},[s._v("suspense")]),s._v(" 样例项目。")],1),s._v(" "),a("h2",{attrs:{id:"使用响应式数据源的好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用响应式数据源的好处"}},[s._v("#")]),s._v(" 使用响应式数据源的好处")]),s._v(" "),a("h3",{attrs:{id:"多次推值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多次推值"}},[s._v("#")]),s._v(" 多次推值")]),s._v(" "),a("p",[s._v("因为响应式实现了多次推值协议:")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th"),s._v(" "),a("th",[s._v("单次")]),s._v(" "),a("th",[s._v("多次")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("拉值")]),s._v(" "),a("td",[a("code",[s._v("Function")])]),s._v(" "),a("td",[a("code",[s._v("Iterator")])])]),s._v(" "),a("tr",[a("td",[s._v("推值")]),s._v(" "),a("td",[a("code",[s._v("Promise")])]),s._v(" "),a("td",[a("code",[s._v("Observable")])])])])]),s._v(" "),a("p",[s._v("你可以一直 "),a("code",[s._v("next")]),s._v(" 推新的值而无须推一遍换一个数据源。")]),s._v(" "),a("h3",{attrs:{id:"竞态条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#竞态条件"}},[s._v("#")]),s._v(" 竞态条件")]),s._v(" "),a("p",[s._v("你无须为了解决资源争用的竞态条件而"),a("a",{attrs:{href:"https://reactjs.org/docs/concurrent-mode-suspense.html#solving-race-conditions-with-suspense",target:"_blank",rel:"noopener noreferrer"}},[s._v("将数据源写到状态中"),a("OutboundLink")],1),s._v("：")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" initialResource "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fetchProfileData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("App")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" setResource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("initialResource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("直接 "),a("code",[s._v("switchMap")]),s._v(" 即可。")]),s._v(" "),a("h3",{attrs:{id:"高级控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级控制"}},[s._v("#")]),s._v(" 高级控制")]),s._v(" "),a("p",[s._v("通过丰富的 Observable 操作符你可以轻易串联多个请求、超时处理、失败重试或者其它针对多个流的复杂操作。")]),s._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("p",[s._v("与 React 官方文档的 "),a("a",{attrs:{href:"https://reactjs.org/docs/concurrent-mode-suspense.html#approach-3-render-as-you-fetch-using-suspense",target:"_blank",rel:"noopener noreferrer"}},[s._v("Render-as-You-Fetch (using Suspense)"),a("OutboundLink")],1),s._v(" 一样，我们先定义数据源，然后在组件中结合 Suspense Context 使用。")]),s._v(" "),a("h3",{attrs:{id:"observable-resource"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#observable-resource"}},[s._v("#")]),s._v(" Observable Resource")]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh-cn/api/#ObservableResource"}},[a("code",[s._v("ObservableResource")])]),s._v(" 将 Observables 转换为类 Relay 的兼容 Suspense 的数据源。")],1),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// api.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ObservableResource "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'observable-hooks'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" postResource$$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Subject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" postsResource "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ObservableResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("postResource$$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pipe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("switchMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fakePostsXHR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fetchPosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  postResource$$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"observable-suspense-hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#observable-suspense-hook"}},[s._v("#")]),s._v(" Observable Suspense Hook")]),s._v(" "),a("p",[s._v("你可以通过 "),a("code",[s._v("resource.read()")]),s._v(" 读取数据源的值。但因为 Observable 可以多次推值，我们还需要在特定时机重新触发 Suspense。 "),a("code",[s._v("ObservableResource")]),s._v(" 实例暴露了一个 "),a("code",[s._v("shouldUpdate$$")]),s._v(" Subject，当需要重新触发 Suspense 时它会产生值。")]),s._v(" "),a("p",[s._v("但你无须处理这些细节，Observable-hooks 还提供一个轻量的 hook "),a("code",[s._v("useObservableSuspense")]),s._v(" 来正确地接入 Observable 数据源。")]),s._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// App.jsx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" useObservableSuspense "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'observable-hooks'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" postsResource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fetchPosts "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./api'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fetchPosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'crimx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ProfilePage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Suspense")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("fallback")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("Loading posts...")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n      ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ProfileTimeline")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n    ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Suspense")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ProfileTimeline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Try to read posts, although they might not have loaded yet")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" posts "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useObservableSuspense")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("postsResource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n      ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("posts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("post")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("li")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n    ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"stale-while-revalidate-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stale-while-revalidate-模式"}},[s._v("#")]),s._v(" Stale-While-Revalidate 模式")]),s._v(" "),a("p",[s._v("默认情况下 "),a("code",[s._v("ObservableResource")]),s._v(" 把每个产生的值当作是“成功”的状态。这种情况下当新的值产生时，组件便直接重新渲染。")]),s._v(" "),a("p",[s._v("这也被叫做 Stale-While-Revalidate 模式, 一个从 "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc5861",target:"_blank",rel:"noopener noreferrer"}},[s._v("HTTP RFC 5861"),a("OutboundLink")],1),s._v(" 广泛流传的缓存失效策略。")]),s._v(" "),a("p",[s._v("它首先从缓存中返回数据，然后发请求，最终切换到新的值。")]),s._v(" "),a("h3",{attrs:{id:"多次触发-suspense"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多次触发-suspense"}},[s._v("#")]),s._v(" 多次触发 Suspense")]),s._v(" "),a("p",[s._v("要多次触发 Suspense， "),a("code",[s._v("ObservableResource")]),s._v(" 还接受一个额外的回调参数用于判断新产生的值是否为“成功”状态，如果不是则重新触发 Suspense。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" userResource "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ObservableResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  userResource$$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Trigger Suspense on null and undefined")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("value")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("在 TypeScript 中如果产生值最终得到的类型与传入的类型不一样，你可以将回调定义为断言函数：")]),s._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Success")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  status"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'success'")]),s._v("\n  value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Pending")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  status"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pending'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("State")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Success "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Pending\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" input$$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Subject"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("State"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" resouce "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ObservableResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  input$$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" Success "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pending'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"异常处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常处理"}},[s._v("#")]),s._v(" 异常处理")]),s._v(" "),a("p",[s._v("Observables 产生的异常会被 "),a("code",[s._v("ObservableResource")]),s._v(" 收集并作为渲染异常重新抛出。参照 "),a("a",{attrs:{href:"https://reactjs.org/docs/concurrent-mode-suspense.html#handling-errors",target:"_blank",rel:"noopener noreferrer"}},[s._v("React 文档"),a("OutboundLink")],1),s._v("定义错误边界组件。")]),s._v(" "),a("p",[s._v("同时注意由于 RxJS 的设计，一个 Observable 一旦产生了异常便会被永远断流。要么避免异常传到 Observables 上，要么在子流中使用 "),a("a",{attrs:{href:"https://rxjs-dev.firebaseapp.com/api/operators/catchError",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("catchError")]),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("p",[s._v("如果 Observable 确实产生了异常，可以在需要恢复组件时（如错误边界组件中处理）重载数据源。 对于 Cold Observable 调用 "),a("code",[s._v("resource.reload()")]),s._v("，对于 Hot Observable 调用 "),a("code",[s._v("resource.reload(newObservable$)")]),s._v("。建议尽可能在  "),a("code",[s._v("ObservableResource")]),s._v(" 使用 Cold Observable 以便重载。")])])}),[],!1,null,null,null);t.default=n.exports}}]);