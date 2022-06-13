(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{490:function(t,a,e){t.exports=e.p+"assets/media/english.e7e5288d.wav"},491:function(t,a,e){t.exports=e.p+"assets/media/hindi.73556864.wav"},596:function(t,a,e){"use strict";e.r(a);var s=e(56),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"voice-translation-apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#voice-translation-apis"}},[t._v("#")]),t._v(" Voice Translation APIs")]),t._v(" "),s("p",[t._v("This document contains the APIs related to the ASR, speech to text translation and text to speech translation.")]),t._v(" "),s("h2",{attrs:{id:"speech-to-text-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#speech-to-text-api"}},[t._v("#")]),t._v(" Speech to text API")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("POST")]),t._v(" "),s("code",[t._v("https://voice-alpha.devnagri.dev/api/audio/speech-to-text")])])]),t._v(" "),s("h3",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("div",{staticClass:"language-curl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("curl --location --request POST 'https://voice-alpha.devnagri.dev/api/audio/speech-to-text' \\\n--header 'accept: application/json, text/plain, */*' \\\n--form 'soundBlob=@\"//Devnagri/audio/hindi.wav\"' \\\n--form 'lang=\"hi-IN\"'\n")])])]),s("h3",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transcript"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"एक एक पाँच आठ चार एक पाँच पाँच दस"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transliterated_transcript"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ek ek paanch aath char ek paanch paanch das"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This API is responsible to take audio file as input and return the text.")]),t._v(" "),s("h4",{attrs:{id:"request-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-parameters"}},[t._v("#")]),t._v(" Request parameters")]),t._v(" "),s("p",[t._v("The request requires input in the form data")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Value")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("soundBlob")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("hindi.wav")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("This will be the actual audio file. Supported formats are "),s("code",[t._v(".wav")]),t._v(" and "),s("code",[t._v(".amr-wb")])])]),t._v(" "),s("tr",[s("td",[t._v("lang")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("hi-IN")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("language code of the audio file.")])])])]),t._v(" "),s("h5",{attrs:{id:"languages-codes-with-sample-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#languages-codes-with-sample-files"}},[t._v("#")]),t._v(" Languages codes with sample files")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Language")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Code")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Sample File")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("English")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("en-IN")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("audio",{staticClass:"english",attrs:{controls:""}},[s("source",{attrs:{src:e(490),type:"audio/wav"}})])])]),t._v(" "),s("tr",[s("td",[t._v("Hindi")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("hi-IN")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("audio",{staticClass:"hindi",attrs:{controls:""}},[s("source",{attrs:{src:e(491),type:"audio/wav"}})])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);