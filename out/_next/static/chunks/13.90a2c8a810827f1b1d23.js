(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{n2ZS:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),a=n("sLSF"),i=n("MI3g"),o=n("a7VT"),c=n("AT/M"),s=n("Tit0"),d=n("q1tI"),p=n.n(d),h=n("17x9"),l=n.n(h);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){var t,n;function r(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(f(t)),t.handleErrored=t.handleErrored.bind(f(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(f(t)),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},a.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},a.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},a.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},a.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.props.onChange&&this.props.onChange(null)},a.handleErrored=function(){this.props.onErrored&&this.props.onErrored()},a.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.props.onChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},a.componentDidMount=function(){this.explicitRender()},a.componentDidUpdate=function(){this.explicitRender()},a.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},a.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout(function(){document.body.removeChild(e)},5e3)},a.handleRecaptchaRef=function(e){this.captcha=e},a.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return p.a.createElement("div",u({},t,{ref:this.handleRecaptchaRef}))},r}(p.a.Component);m.displayName="ReCAPTCHA",m.propTypes={sitekey:l.a.string.isRequired,onChange:l.a.func,grecaptcha:l.a.object,theme:l.a.oneOf(["dark","light"]),type:l.a.oneOf(["image","audio"]),tabindex:l.a.number,onExpired:l.a.func,onErrored:l.a.func,size:l.a.oneOf(["compact","normal","invisible"]),stoken:l.a.string,hl:l.a.string,badge:l.a.oneOf(["bottomright","bottomleft","inline"])},m.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var v=n("2mql"),g=n.n(v);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var b={},w=0;function S(){return"undefined"!==typeof window&&window.recaptchaOptions||{}}var O,C,_="onloadcallback",E=S(),x=(O=function(){var e=S(),t=e.lang?"&hl="+e.lang:"";return"https://"+(e.useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+_+"&render=explicit"+t},C=(C={callbackName:_,globalName:"grecaptcha",removeOnUnmount:E.removeOnUnmount||!1})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){var n,r;function a(e,n){var r;return(r=t.call(this,e,n)||this).state={},r.__scriptURL="",r}r=t,(n=a).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var i=a.prototype;return i.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+w++),this.__scriptLoaderID},i.setupScriptURL=function(){return this.__scriptURL="function"===typeof O?O():O,this.__scriptURL},i.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)})},i.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=b[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[C.callbackName]},i.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),r=C,a=r.globalName,i=r.callbackName,o=r.scriptId;if(a&&"undefined"!==typeof window[a]&&(b[t]={loaded:!0,observers:{}}),b[t]){var c=b[t];return c&&(c.loaded||c.errored)?void this.asyncScriptLoaderHandleLoad(c):void(c.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var s={};s[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},b[t]={loaded:!1,observers:s};var d=document.createElement("script");d.src=t,d.async=!0,o&&(d.id=o);var p=function(e){if(b[t]){var n=b[t].observers;for(var r in n)e(n[r])&&delete n[r]}};i&&"undefined"!==typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),d.onload=function(){var e=b[t];e&&(e.loaded=!0,p(function(t){return!i&&(t(e),!0)}))},d.onerror=function(){var e=b[t];e&&(e.errored=!0,p(function(t){return t(e),!0}))},document.body.appendChild(d)},i.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===C.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var r=b[e];r&&(delete r.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===C.removeOnUnmount&&delete b[e])},i.render=function(){var t=C.globalName,n=this.props,r=(n.asyncScriptOnLoad,n.forwardedRef),a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(a[t]="undefined"!==typeof window[t]?window[t]:void 0),a.ref=r,Object(d.createElement)(e,a)},a}(d.Component),r=Object(d.forwardRef)(function(e,t){return Object(d.createElement)(n,y({},e,{forwardedRef:t}))});return r.displayName="AsyncScriptLoader("+t+")",r.propTypes={asyncScriptOnLoad:l.a.func},g()(r,e)})(m),L=n("8SHQ"),R=n("04if"),N=n.n(R),k=n("wXLy"),j=p.a.createElement,I=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={captcha:"",email:""},n.handleCaptchaChange=n.handleCaptchaChange.bind(Object(c.a)(n)),n.handleEmailChange=n.handleEmailChange.bind(Object(c.a)(n)),n.handleSend=n.handleSend.bind(Object(c.a)(n)),n}return Object(s.a)(t,e),Object(a.a)(t,[{key:"handleCaptchaChange",value:function(e){this.setState({captcha:e})}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handleSend",value:function(){var e=this.props,t=e.handleSendCertificate;e.emailSendingState!==k.s.PENDING&&t({email:this.state.email,captcha:this.state.captcha})}},{key:"render",value:function(){var e=this.props.emailSendingState;return j("div",{className:"container"},j("div",{className:"row"},j("div",{className:"col-2"}),j("div",{className:"col-8"},j("div",{className:"row d-flex justify-content-center"},j("h4",null,"Send your certificate")),j("div",{className:"row text-center"},"This sends an email with your .opencert attached, and instructions on how to view it."),j("div",{className:"row my-4 d-flex justify-content-center"},j("input",{className:"w-100",value:this.state.emailAddress,onChange:this.handleEmailChange,placeholder:"Enter recipient's email"})),j("div",{className:"row d-flex justify-content-center m-3"},j(x,{sitekey:L.a,onChange:this.handleCaptchaChange})),e===k.s.SUCCESS?j("div",{className:"row my-4 d-flex justify-content-center"},"Email successfully sent!"):"",e===k.s.FAILURE?j("div",{className:"row my-4 d-flex justify-content-center"},"An error occured, please check your email and captcha"):"",j("div",{className:"row d-flex justify-content-center m-3"},j("button",{type:"button",className:"pointer ".concat(N.a.btn),onClick:this.handleSend},"Send",e===k.s.PENDING?j("i",{className:"ml-2 fas fa-spinner fa-pulse"}):"")))))}}]),t}(d.Component);t.default=I}}]);