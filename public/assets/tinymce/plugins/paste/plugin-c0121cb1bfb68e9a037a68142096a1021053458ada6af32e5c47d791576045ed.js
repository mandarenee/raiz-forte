!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;i<g;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;f<c;++f)e.push(d(a[f]));b.apply(null,b)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};h("6",tinymce.util.Tools.resolve),g("1",["6"],function(a){return a("tinymce.PluginManager")}),g("7",["6"],function(a){return a("tinymce.dom.RangeUtils")}),g("8",["6"],function(a){return a("tinymce.Env")}),g("9",["6"],function(a){return a("tinymce.util.Delay")}),g("a",["6"],function(a){return a("tinymce.util.Tools")}),g("b",["6"],function(a){return a("tinymce.util.VK")}),g("c",[],function(){var a="x-tinymce/html",b="<!-- "+a+" -->",c=function(a){return b+a},d=function(a){return a.replace(b,"")},e=function(a){return a.indexOf(b)!==-1};return{mark:c,unmark:d,isMarked:e,internalHtmlMime:function(){return a}}}),g("g",["6"],function(a){return a("tinymce.html.DomParser")}),g("h",["6"],function(a){return a("tinymce.html.Schema")}),g("d",["a","g","h"],function(a,b,c){function d(b,c){return a.each(c,function(a){b=a.constructor==RegExp?b.replace(a,""):b.replace(a[0],a[1])}),b}function e(e){function f(a){var b=a.name,c=a;if("br"===b)return void(i+="\n");if(j[b]&&(i+=" "),k[b])return void(i+=" ");if(3==a.type&&(i+=a.value),!a.shortEnded&&(a=a.firstChild))do f(a);while(a=a.next);l[b]&&c.next&&(i+="\n","p"==b&&(i+="\n"))}var g=new c,h=new b({},g),i="",j=g.getShortEndedElements(),k=a.makeMap("script noscript style textarea video audio iframe object"," "),l=g.getBlockElements();return e=d(e,[/<!\[[^\]]+\]>/g]),f(h.parse(e)),i}function f(a){function b(a,b,c){return b||c?"\xa0":" "}return a=d(a,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,b],/<br class="Apple-interchange-newline">/g,/<br>$/i])}function g(a){var b=0;return function(){return a+b++}}var h=function(){return navigator.userAgent.indexOf(" Edge/")!==-1};return{filter:d,innerText:e,trimHtml:f,createIdGenerator:g,isMsEdge:h}}),g("3",["8","c","d"],function(a,b,c){var d=function(){},e=function(b){return a.iOS===!1&&void 0!==b&&"function"==typeof b.setData&&c.isMsEdge()!==!0},f=function(a,c,d){if(!e(a))return!1;try{return a.clearData(),a.setData("text/html",c),a.setData("text/plain",d),a.setData(b.internalHtmlMime(),c),!0}catch(a){return!1}},g=function(a,b,c,d){f(a.clipboardData,b.html,b.text)?(a.preventDefault(),d()):c(b.html,d)},h=function(a){return function(c,d){var e=b.mark(c),f=a.dom.create("div",{contenteditable:"false"}),g=a.dom.create("div",{contenteditable:"true"},e);a.dom.setStyles(f,{position:"fixed",left:"-3000px",width:"1000px",overflow:"hidden"}),f.appendChild(g),a.dom.add(a.getBody(),f);var h=a.selection.getRng();g.focus();var i=a.dom.createRng();i.selectNodeContents(g),a.selection.setRng(i),setTimeout(function(){f.parentNode.removeChild(f),a.selection.setRng(h),d()},0)}},i=function(a){return{html:a.selection.getContent({contextual:!0}),text:a.selection.getContent({format:"text"})}},j=function(a){return function(b){a.selection.isCollapsed()===!1&&g(b,i(a),h(a),function(){a.execCommand("Delete")})}},k=function(a){return function(b){a.selection.isCollapsed()===!1&&g(b,i(a),h(a),d)}},l=function(a){a.on("cut",j(a)),a.on("copy",k(a))};return{register:l}}),g("k",["6"],function(a){return a("tinymce.html.Entities")}),g("e",["k"],function(a){var b=function(a){return!/<(?:(?!\/?(?:div|p|br))[^>]*|(?:div|p|br)\s+\w[^>]+)>/.test(a)},c=function(a){return a.replace(/\r?\n/g,"<br>")},d=function(b,c){var d,e=[],f="<"+b;if("object"==typeof c){for(d in c)c.hasOwnProperty(d)&&e.push(d+'="'+a.encodeAllRaw(c[d])+'"');e.length&&(f+=" "+e.join(" "))}return f+">"},e=function(a,b,c){var e,f,g,h=a.split(/\r?\n/),i=0,j=h.length,k=[],l=[],m=d(b,c),n="</"+b+">";if(1===h.length)return a;for(;i<j;i++)e=i===j-1,f=!e&&!h[i+1],g=!h[i]&&!k.length,k.push(h[i]?h[i]:"&nbsp;"),(e||f||g)&&(l.push(k.join("<br>")),k=[]),f&&i++;return 1===l.length?l[0]:m+l.join(n+m)+n},f=function(a,b,d){return b?e(a,b,d):c(a)};return{isPlainText:b,convert:f,toBRs:c,toBlockElements:e}}),g("f",["a"],function(a){var b=function(a){return/^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(a)},c=function(a){return b(a)&&/.(gif|jpe?g|png)$/.test(a)},d=function(a,b,c){return a.undoManager.extra(function(){c(a,b)},function(){a.insertContent('<img src="'+b+'">')}),!0},e=function(a,b,c){return a.undoManager.extra(function(){c(a,b)},function(){a.execCommand("mceInsertLink",!1,b)}),!0},f=function(a,c,d){return!(a.selection.isCollapsed()!==!1||!b(c))&&e(a,c,d)},g=function(a,b,e){return!!c(b)&&d(a,b,e)},h=function(a,b){return a.insertContent(b,{merge:a.settings.paste_merge_formats!==!1,paste:!0}),!0},i=function(b,c){a.each([f,g,h],function(a){return a(b,c,h)!==!0})},j=function(a,b){a.settings.smart_paste===!1?h(a,b):i(a,b)};return{isImageUrl:c,isAbsoluteUrl:b,insertContent:j}}),g("2",["7","8","9","a","b","3","c","e","f","d"],function(a,b,c,d,e,f,g,h,i,j){return function(f){function k(a,b){var c,d,e=f.dom;if(d=b||g.isMarked(a),a=g.unmark(a),c=f.fire("BeforePastePreProcess",{content:a,internal:d}),c=f.fire("PastePreProcess",c),a=c.content,!c.isDefaultPrevented()){if(f.hasEventListeners("PastePostProcess")&&!c.isDefaultPrevented()){var h=e.add(f.getBody(),"div",{style:"display:none"},a);c=f.fire("PastePostProcess",{node:h,internal:d}),e.remove(h),a=c.node.innerHTML}c.isDefaultPrevented()||i.insertContent(f,a)}}function l(a){a=f.dom.encode(a).replace(/\r\n/g,"\n"),a=h.convert(a,f.settings.forced_root_block,f.settings.forced_root_block_attrs),k(a,!1)}function m(){function a(a){var b,c,e,f=a.startContainer;if(b=a.getClientRects(),b.length)return b[0];if(a.collapsed&&1==f.nodeType){for(e=f.childNodes[C.startOffset];e&&3==e.nodeType&&!e.data.length;)e=e.nextSibling;if(e)return"BR"==e.tagName&&(c=d.doc.createTextNode("\ufeff"),e.parentNode.insertBefore(c,e),a=d.createRng(),a.setStartBefore(c),a.setEndAfter(c),b=a.getClientRects(),d.remove(c)),b.length?b[0]:void 0}}var c,d=f.dom,e=f.getBody(),g=f.dom.getViewPort(f.getWin()),h=g.y,i=20;if(C=f.selection.getRng(),f.inline&&(c=f.selection.getScrollContainer(),c&&c.scrollTop>0&&(h=c.scrollTop)),C.getClientRects){var j=a(C);if(j)i=h+(j.top-d.getPos(e).y);else{i=h;var k=C.startContainer;k&&(3==k.nodeType&&k.parentNode!=e&&(k=k.parentNode),1==k.nodeType&&(i=d.getPos(k,c||e).y))}}B=d.add(f.getBody(),"div",{id:"mcepastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: absolute; top: "+i+"px;width: 10px; height: 10px; overflow: hidden; opacity: 0"},H),(b.ie||b.gecko)&&d.setStyle(B,"left","rtl"==d.getStyle(e,"direction",!0)?65535:-65535),d.bind(B,"beforedeactivate focusin focusout",function(a){a.stopPropagation()}),B.focus(),f.selection.select(B,!0)}function n(){if(B){for(var a;a=f.dom.get("mcepastebin");)f.dom.remove(a),f.dom.unbind(a);C&&f.selection.setRng(C)}B=C=null}function o(){var a,b,c,d,e="";for(a=f.dom.select("div[id=mcepastebin]"),b=0;b<a.length;b++)c=a[b],c.firstChild&&"mcepastebin"==c.firstChild.id&&(c=c.firstChild),d=c.innerHTML,e!=H&&(e+=d);return e}function p(a){var b={};if(a){if(a.getData){var c=a.getData("Text");c&&c.length>0&&c.indexOf(I)==-1&&(b["text/plain"]=c)}if(a.types)for(var d=0;d<a.types.length;d++){var e=a.types[d];b[e]=a.getData(e)}}return b}function q(a){var b=p(a.clipboardData||f.getDoc().dataTransfer);return j.isMsEdge()?d.extend(b,{"text/html":""}):b}function r(a){return y(a,"text/html")||y(a,"text/plain")}function s(a){var b;return b=a.indexOf(","),b!==-1?a.substr(b+1):null}function t(a,b){return!a.images_dataimg_filter||a.images_dataimg_filter(b)}function u(a,b,c){a&&(f.selection.setRng(a),a=null);var d=b.result,e=s(d),g=new Image;if(g.src=d,t(f.settings,g)){var h,i,j=f.editorUpload.blobCache;i=j.findFirst(function(a){return a.base64()===e}),i?h=i:(h=j.create(J(),c,e),j.add(h)),k('<img src="'+h.blobUri()+'">',!1)}else k('<img src="'+d+'">',!1)}function v(a,b){function c(c){var d,e,f,g=!1;if(c)for(d=0;d<c.length;d++)if(e=c[d],/^image\/(jpeg|png|gif|bmp)$/.test(e.type)){var h=e.getAsFile?e.getAsFile():e;f=new FileReader,f.onload=u.bind(null,b,f,h),f.readAsDataURL(h),a.preventDefault(),g=!0}return g}var d=a.clipboardData||a.dataTransfer;if(f.settings.paste_data_images&&d)return c(d.items)||c(d.files)}function w(a){var b=a.clipboardData;return navigator.userAgent.indexOf("Android")!=-1&&b&&b.items&&0===b.items.length}function x(b){return a.getCaretRangeFromPoint(b.clientX,b.clientY,f.getDoc())}function y(a,b){return b in a&&a[b].length>0}function z(a){return e.metaKeyPressed(a)&&86==a.keyCode||a.shiftKey&&45==a.keyCode}function A(){function a(a,b,c,d){var e,g;return y(a,"text/html")?e=a["text/html"]:(e=o(),e==H&&(c=!0)),e=j.trimHtml(e),B&&B.firstChild&&"mcepastebin"===B.firstChild.id&&(c=!0),n(),g=d===!1&&h.isPlainText(e),e.length&&!g||(c=!0),c&&(e=y(a,"text/plain")&&g?a["text/plain"]:j.innerText(e)),e==H?void(b||f.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents.")):void(c?l(e):k(e,d))}function d(a){var b=a["text/plain"];return!!b&&0===b.indexOf("file://")}f.on("keydown",function(a){function c(a){z(a)&&!a.isDefaultPrevented()&&n()}if(z(a)&&!a.isDefaultPrevented()){if(D=a.shiftKey&&86==a.keyCode,D&&b.webkit&&navigator.userAgent.indexOf("Version/")!=-1)return;if(a.stopImmediatePropagation(),F=(new Date).getTime(),b.ie&&D)return a.preventDefault(),void f.fire("paste",{ieFake:!0});n(),m(),f.once("keyup",c),f.once("paste",function(){f.off("keyup",c)})}});var e=function(){return C||f.selection.getRng()};f.on("paste",function(d){var h=(new Date).getTime(),i=q(d),j=(new Date).getTime()-h,k=(new Date).getTime()-F-j<1e3,l="text"==E.pasteFormat||D,p=y(i,g.internalHtmlMime());return D=!1,d.isDefaultPrevented()||w(d)?void n():!r(i)&&v(d,e())?void n():(k||d.preventDefault(),!b.ie||k&&!d.ieFake||y(i,"text/html")||(m(),f.dom.bind(B,"paste",function(a){a.stopPropagation()}),f.getDoc().execCommand("Paste",!1,null),i["text/html"]=o()),void(y(i,"text/html")?(d.preventDefault(),a(i,k,l,p)):c.setEditorTimeout(f,function(){a(i,k,l,p)},0)))}),f.on("dragstart dragend",function(a){G="dragstart"==a.type}),f.on("drop",function(a){var b,e;if(e=x(a),!a.isDefaultPrevented()&&!G){b=p(a.dataTransfer);var h=y(b,g.internalHtmlMime());if((r(b)&&!d(b)||!v(a,e))&&e&&f.settings.paste_filter_drop!==!1){var i=b["mce-internal"]||b["text/html"]||b["text/plain"];i&&(a.preventDefault(),c.setEditorTimeout(f,function(){f.undoManager.transact(function(){b["mce-internal"]&&f.execCommand("Delete"),f.selection.setRng(e),i=j.trimHtml(i),b["text/html"]?k(i,h):l(i)})}))}}}),f.on("dragover dragend",function(a){f.settings.paste_data_images&&a.preventDefault()})}var B,C,D,E=this,F=0,G=!1,H="%MCEPASTEBIN%",I="data:text/mce-internal,",J=j.createIdGenerator("mceclip");E.pasteHtml=k,E.pasteText=l,E.pasteImageData=v,f.on("preInit",function(){A(),f.parser.addNodeFilter("img",function(a,c,d){function e(a){return a.data&&a.data.paste===!0}function g(a){a.attr("data-mce-object")||k===b.transparentSrc||a.remove()}function h(a){return 0===a.indexOf("webkit-fake-url")}function i(a){return 0===a.indexOf("data:")}if(!f.settings.paste_data_images&&e(d))for(var j=a.length;j--;){var k=a[j].attributes.map.src;k&&(h(k)?g(a[j]):!f.settings.allow_html_data_urls&&i(k)&&g(a[j]))}})})}}),g("i",["6"],function(a){return a("tinymce.html.Serializer")}),g("j",["6"],function(a){return a("tinymce.html.Node")}),g("5",["a","g","h","i","j","d"],function(a,b,c,d,e,f){function g(a){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i.test(a)||/class="OutlineElement/.test(a)||/id="?docs\-internal\-guid\-/.test(a)}function h(b){var c,d;return d=[/^[IVXLMCD]{1,2}\.[ \u00a0]/,/^[ivxlmcd]{1,2}\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/],b=b.replace(/^[\u00a0 ]+/,""),a.each(d,function(a){if(a.test(b))return c=!0,!1}),c}function i(a){return/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(a)}function j(j){var k=j.settings;j.on("BeforePastePreProcess",function(l){function m(a){function b(a){var c="";if(3===a.type)return a.value;if(a=a.firstChild)do c+=b(a);while(a=a.next);return c}function c(a,b){if(3===a.type&&b.test(a.value))return a.value=a.value.replace(b,""),!1;if(a=a.firstChild)do if(!c(a,b))return!1;while(a=a.next);return!0}function d(a){if(a._listIgnore)return void a.remove();if(a=a.firstChild)do d(a);while(a=a.next)}function f(a,b,f){var h=a._listLevel||k;h!=k&&(h<k?g&&(g=g.parent.parent):(j=g,g=null)),g&&g.name==b?g.append(a):(j=j||g,g=new e(b,1),f>1&&g.attr("start",""+f),a.wrap(g)),a.name="li",h>k&&j&&j.lastChild.append(g),k=h,d(a),c(a,/^\u00a0+/),c(a,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/),c(a,/^\u00a0+/)}for(var g,j,k=1,l=[],m=a.firstChild;"undefined"!=typeof m&&null!==m;)if(l.push(m),m=m.walk(),null!==m)for(;"undefined"!=typeof m&&m.parent!==a;)m=m.walk();for(var n=0;n<l.length;n++)if(a=l[n],"p"==a.name&&a.firstChild){var o=b(a);if(i(o)){f(a,"ul");continue}if(h(o)){var p=/([0-9]+)\./.exec(o),q=1;p&&(q=parseInt(p[1],10)),f(a,"ol",q);continue}if(a._listLevel){f(a,"ul",1);continue}g=null}else j=g,g=null}function n(b,c){var d,f={},g=j.dom.parseStyle(c);return a.each(g,function(a,e){switch(e){case"mso-list":d=/\w+ \w+([0-9]+)/i.exec(c),d&&(b._listLevel=parseInt(d[1],10)),/Ignore/i.test(a)&&b.firstChild&&(b._listIgnore=!0,b.firstChild._listIgnore=!0);break;case"horiz-align":e="text-align";break;case"vert-align":e="vertical-align";break;case"font-color":case"mso-foreground":e="color";break;case"mso-background":case"mso-highlight":e="background";break;case"font-weight":case"font-style":return void("normal"!=a&&(f[e]=a));case"mso-element":if(/^(comment|comment-list)$/i.test(a))return void b.remove()}return 0===e.indexOf("mso-comment")?void b.remove():void(0!==e.indexOf("mso-")&&("all"==o||p&&p[e])&&(f[e]=a))}),/(bold)/i.test(f["font-weight"])&&(delete f["font-weight"],b.wrap(new e("b",1))),/(italic)/i.test(f["font-style"])&&(delete f["font-style"],b.wrap(new e("i",1))),f=j.dom.serializeStyle(f,b.name),f?f:null}var o,p,q=l.content;if(q=q.replace(/<b[^>]+id="?docs-internal-[^>]*>/gi,""),q=q.replace(/<br class="?Apple-interchange-newline"?>/gi,""),o=k.paste_retain_style_properties,o&&(p=a.makeMap(o.split(/[, ]/))),k.paste_enable_default_filters!==!1&&g(l.content)){l.wordContent=!0,q=f.filter(q,[/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi,"\xa0"],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(a,b){return b.length>0?b.replace(/./," ").slice(Math.floor(b.length/2)).split("").join("\xa0"):""}]]);var r=k.paste_word_valid_elements;r||(r="-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody");var s=new c({valid_elements:r,valid_children:"-li[p]"});a.each(s.elements,function(a){a.attributes["class"]||(a.attributes["class"]={},a.attributesOrder.push("class")),a.attributes.style||(a.attributes.style={},a.attributesOrder.push("style"))});var t=new b({},s);t.addAttributeFilter("style",function(a){for(var b,c=a.length;c--;)b=a[c],b.attr("style",n(b,b.attr("style"))),"span"==b.name&&b.parent&&!b.attributes.length&&b.unwrap()}),t.addAttributeFilter("class",function(a){for(var b,c,d=a.length;d--;)b=a[d],c=b.attr("class"),/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(c)&&b.remove(),b.attr("class",null)}),t.addNodeFilter("del",function(a){for(var b=a.length;b--;)a[b].remove()}),t.addNodeFilter("a",function(a){for(var b,c,d,e=a.length;e--;)if(b=a[e],c=b.attr("href"),d=b.attr("name"),c&&c.indexOf("#_msocom_")!=-1)b.remove();else if(c&&0===c.indexOf("file://")&&(c=c.split("#")[1],c&&(c="#"+c)),c||d){if(d&&!/^_?(?:toc|edn|ftn)/i.test(d)){b.unwrap();continue}b.attr({href:c,name:d})}else b.unwrap()});var u=t.parse(q);k.paste_convert_word_fake_lists!==!1&&m(u),l.content=new d({validate:k.validate},s).serialize(u)}})}return j.isWordContent=g,j}),g("4",["8","a","5","d"],function(a,b,c,d){"use strict";return function(e){function f(a){e.on("BeforePastePreProcess",function(b){b.content=a(b.content)})}function g(a){e.on("PastePostProcess",function(b){a(b.node)})}function h(a){if(!c.isWordContent(a))return a;var f=[];b.each(e.schema.getBlockElements(),function(a,b){f.push(b)});var g=new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+f.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g");return a=d.filter(a,[[g,"$1"]]),a=d.filter(a,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])}function i(a){if(c.isWordContent(a))return a;var b=e.settings.paste_webkit_styles;if(e.settings.paste_remove_styles_if_webkit===!1||"all"==b)return a;if(b&&(b=b.split(/[, ]/)),b){var d=e.dom,f=e.selection.getNode();a=a.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,function(a,c,e,g){var h=d.parseStyle(d.decode(e),"span"),i={};if("none"===b)return c+g;for(var j=0;j<b.length;j++){var k=h[b[j]],l=d.getStyle(f,b[j],!0);/color/.test(b[j])&&(k=d.toHex(k),l=d.toHex(l)),l!=k&&(i[b[j]]=k)}return i=d.serializeStyle(i,"span"),i?c+' style="'+i+'"'+g:c+g})}else a=a.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3");return a=a.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,function(a,b,c,d){return b+' style="'+c+'"'+d})}function j(a){e.$("a",a).find("font,u").each(function(a,b){e.dom.remove(b,!0)})}a.webkit&&f(i),a.ie&&(f(h),g(j))}}),g("0",["1","2","3","4","5"],function(a,b,c,d,e){var f;return a.add("paste",function(g){function h(){return f||g.settings.paste_plaintext_inform===!1}function i(){if("text"==k.pasteFormat)k.pasteFormat="html",g.fire("PastePlainTextToggle",{state:!1});else if(k.pasteFormat="text",g.fire("PastePlainTextToggle",{state:!0}),!h()){var a=g.translate("Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.");g.notificationManager.open({text:a,type:"info"}),f=!0}g.focus()}function j(){var a=this;a.active("text"===k.pasteFormat),g.on("PastePlainTextToggle",function(b){a.active(b.state)})}var k,l=this,m=g.settings;return/(^|[ ,])powerpaste([, ]|$)/.test(m.plugins)&&a.get("powerpaste")?void("undefined"!=typeof console&&console.log&&console.log("PowerPaste is incompatible with Paste plugin! Remove 'paste' from the 'plugins' option.")):(l.clipboard=k=new b(g),l.quirks=new d(g),l.wordFilter=new e(g),g.settings.paste_as_text&&(l.clipboard.pasteFormat="text"),m.paste_preprocess&&g.on("PastePreProcess",function(a){m.paste_preprocess.call(l,l,a)}),m.paste_postprocess&&g.on("PastePostProcess",function(a){m.paste_postprocess.call(l,l,a)}),g.addCommand("mceInsertClipboardContent",function(a,b){b.content&&l.clipboard.pasteHtml(b.content,b.internal),b.text&&l.clipboard.pasteText(b.text)}),g.settings.paste_block_drop&&g.on("dragend dragover draggesture dragdrop drop drag",function(a){a.preventDefault(),a.stopPropagation()}),g.settings.paste_data_images||g.on("drop",function(a){var b=a.dataTransfer;b&&b.files&&b.files.length>0&&a.preventDefault()}),g.addCommand("mceTogglePlainTextPaste",i),g.addButton("pastetext",{icon:"pastetext",tooltip:"Paste as text",onclick:i,onPostRender:j}),g.addMenuItem("pastetext",{text:"Paste as text",selectable:!0,active:k.pasteFormat,onclick:i,onPostRender:j}),void c.register(g))}),function(){}}),d("0")()}();
