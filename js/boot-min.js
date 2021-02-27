/*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */

 !function(t, e) {
	"object"==typeof exports&&"undefined"!=typeof module?e(exports, require("jquery"), require("popper.js")):"function"==typeof define&&define.amd?define(["exports", "jquery", "popper.js"], e):e(t.bootstrap= {}
	, t.jQuery, t.Popper)
}

(this, function(t, e, c) {
	"use strict";
	function i(t, e) {
		for(var n=0;
		n<e.length;
		n++) {
			var i=e[n];
			i.enumerable=i.enumerable||!1, i.configurable=!0, "value"in i&&(i.writable=!0), Object.defineProperty(t, i.key, i)
		}
	}
	function o(t, e, n) {
		return e&&i(t.prototype, e), n&&i(t, n), t
	}
	function h(r) {
		for(var t=1;
		t<arguments.length;
		t++) {
			var s=null!=arguments[t]?arguments[t]: {}
			, e=Object.keys(s);
			"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(s).filter(function(t) {
				return Object.getOwnPropertyDescriptor(s, t).enumerable
			}
			))), e.forEach(function(t) {
				var e, n, i;
				e=r, i=s[n=t], n in e?Object.defineProperty(e, n, {
					value: i, enumerable:!0, configurable:!0, writable:!0
				}
				):e[n]=i
			}
			)
		}
		return r
	}
	e=e&&e.hasOwnProperty("default")?e.default:e, c=c&&c.hasOwnProperty("default")?c.default:c;
	var r, n, s, a, l, u, f, d, _, g, m, p, v, E, y, T, C, I, A, D, b, S, w, N, O, k, P, L, j, R, H, W, M, x, U, K, F, V, Q, B, Y, G, q, z, X, J, Z, $, tt, et, nt, it, rt, st, ot, at, lt, ht, ct, ut, ft, dt, _t, gt, mt, pt, vt, Et, yt, Tt, Ct, It, At, Dt, bt, St, wt, Nt, Ot, kt, Pt, Lt, jt, Rt, Ht, Wt, Mt, xt, Ut, Kt, Ft, Vt, Qt, Bt, Yt, Gt, qt, zt, Xt, Jt, Zt, $t, te, ee, ne, ie, re, se, oe, ae, le, he, ce, ue, fe, de, _e, ge, me, pe, ve, Ee, ye, Te, Ce, Ie, Ae, De, be, Se, we, Ne, Oe, ke, Pe, Le, je, Re, He, We, Me, xe, Ue, Ke, Fe, Ve, Qe, Be, Ye, Ge, qe, ze, Xe, Je, Ze, $e, tn, en, nn, rn, sn, on, an, ln, hn, cn, un, fn, dn, _n, gn, mn, pn, vn, En, yn, Tn, Cn=function(i) {
		var e="transitionend";
		function t(t) {
			var e=this, n=!1;
			return i(this).one(l.TRANSITION_END, function() {
				n=!0
			}
			), setTimeout(function() {
				n||l.triggerTransitionEnd(e)
			}
			, t), this
		}
		var l= {
			TRANSITION_END:"bsTransitionEnd", getUID:function(t) {
				for(;
				t+=~~(1e6*Math.random()), document.getElementById(t);
				);
				return t
			}
			, getSelectorFromElement:function(t) {
				var e=t.getAttribute("data-target");
				e&&"#"!==e||(e=t.getAttribute("href")||"");
				try {
					return 0<i(document).find(e).length?e: null
				}
				catch(t) {
					return null
				}
			}
			, getTransitionDurationFromElement:function(t) {
				if(!t)return 0;
				var e=i(t).css("transition-duration");
				return parseFloat(e)?(e=e.split(",")[0], 1e3*parseFloat(e)): 0
			}
			, reflow:function(t) {
				return t.offsetHeight
			}
			, triggerTransitionEnd:function(t) {
				i(t).trigger(e)
			}
			, supportsTransitionEnd:function() {
				return Boolean(e)
			}
			, isElement:function(t) {
				return(t[0]||t).nodeType
			}
			, typeCheckConfig:function(t, e, n) {
				for(var i in n)if(Object.prototype.hasOwnProperty.call(n, i)) {
					var r=n[i], s=e[i], o=s&&l.isElement(s)?"element":(a=s, {}
					.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
					if(!new RegExp(r).test(o))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+o+'" but expected type "'+r+'".')
				}
				var a
			}
		}
		;
		return i.fn.emulateTransitionEnd=t, i.event.special[l.TRANSITION_END]= {
			bindType:e, delegateType:e, handle:function(t) {
				if(i(t.target).is(this))return t.handleObj.handler.apply(this, arguments)
			}
		}
		, l
	}
	(e), In=(n="alert", a="."+(s="bs.alert"), l=(r=e).fn[n], u= {
		CLOSE: "close"+a, CLOSED:"closed"+a, CLICK_DATA_API:"click"+a+".data-api"
	}
	, f="alert", d="fade", _="show", g=function() {
		function i(t) {
			this._element=t
		}
		var t=i.prototype;
		return t.close=function(t) {
			var e=this._element;
			t&&(e=this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)
		}
		, t.dispose=function() {
			r.removeData(this._element, s), this._element=null
		}
		, t._getRootElement=function(t) {
			var e=Cn.getSelectorFromElement(t), n=!1;
			return e&&(n=r(e)[0]), n||(n=r(t).closest("."+f)[0]), n
		}
		, t._triggerCloseEvent=function(t) {
			var e=r.Event(u.CLOSE);
			return r(t).trigger(e), e
		}
		, t._removeElement=function(e) {
			var n=this;
			if(r(e).removeClass(_), r(e).hasClass(d)) {
				var t=Cn.getTransitionDurationFromElement(e);
				r(e).one(Cn.TRANSITION_END, function(t) {
					return n._destroyElement(e, t)
				}
				).emulateTransitionEnd(t)
			}
			else this._destroyElement(e)
		}
		, t._destroyElement=function(t) {
			r(t).detach().trigger(u.CLOSED).remove()
		}
		, i._jQueryInterface=function(n) {
			return this.each(function() {
				var t=r(this), e=t.data(s);
				e||(e=new i(this), t.data(s, e)), "close"===n&&e[n](this)
			}
			)
		}
		, i._handleDismiss=function(e) {
			return function(t) {
				t&&t.preventDefault(), e.close(this)
			}
		}
		, o(i, null, [ {			key:"VERSION", get:function() {				return"4.1.1"			}		}		]), i
	}
	(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), r.fn[n]=g._jQueryInterface, r.fn[n].Constructor=g, r.fn[n].noConflict=function() {
		return r.fn[n]=l, g._jQueryInterface
	}
	, g), An=(p="button", E="."+(v="bs.button"), y=".data-api", T=(m=e).fn[p], C="active", I="btn", D='[data-toggle^="button"]', b='[data-toggle="buttons"]', S="input", w=".active", N=".btn", O= {
		CLICK_DATA_API: "click"+E+y, FOCUS_BLUR_DATA_API:(A="focus")+E+y+" blur"+E+y
	}
	, k=function() {
		function n(t) {
			this._element=t
		}
		var t=n.prototype;
		return t.toggle=function() {
			var t=!0, e=!0, n=m(this._element).closest(b)[0];
			if(n) {
				var i=m(this._element).find(S)[0];
				if(i) {
					if("radio"===i.type)if(i.checked&&m(this._element).hasClass(C))t=!1;
					else {
						var r=m(n).find(w)[0];
						r&&m(r).removeClass(C)
					}
					if(t) {
						if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;
						i.checked=!m(this._element).hasClass(C), m(i).trigger("change")
					}
					i.focus(), e=!1
				}
			}
			e&&this._element.setAttribute("aria-pressed", !m(this._element).hasClass(C)), t&&m(this._element).toggleClass(C)
		}
		, t.dispose=function() {
			m.removeData(this._element, v), this._element=null
		}
		, n._jQueryInterface=function(e) {
			return this.each(function() {
				var t=m(this).data(v);
				t||(t=new n(this), m(this).data(v, t)), "toggle"===e&&t[e]()
			}
			)
		}
		, o(n, null, [ {			key:"VERSION", get:function() {				return"4.1.1"			}		}		]), n
	}
	(), m(document).on(O.CLICK_DATA_API, D, function(t) {
		t.preventDefault();
		var e=t.target;
		m(e).hasClass(I)||(e=m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle")
	}
	).on(O.FOCUS_BLUR_DATA_API, D, function(t) {
		var e=m(t.target).closest(N)[0];
		m(e).toggleClass(A, /^focus(in)?$/.test(t.type))
	}
	), m.fn[p]=k._jQueryInterface, m.fn[p].Constructor=k, m.fn[p].noConflict=function() {
		return m.fn[p]=T, k._jQueryInterface
	}
	, k), Dn=(L="carousel", R="."+(j="bs.carousel"), H=".data-api", W=(P=e).fn[L], M= {
		interval: 5e3, keyboard:!0, slide:!1, pause:"hover", wrap:!0
	}
	, x= {
		interval: "(number|boolean)", keyboard:"boolean", slide:"(boolean|string)", pause:"(string|boolean)", wrap:"boolean"
	}
	, U="next", K="prev", F="left", V="right", Q= {
		SLIDE: "slide"+R, SLID:"slid"+R, KEYDOWN:"keydown"+R, MOUSEENTER:"mouseenter"+R, MOUSELEAVE:"mouseleave"+R, TOUCHEND:"touchend"+R, LOAD_DATA_API:"load"+R+H, CLICK_DATA_API:"click"+R+H
	}
	, B="carousel", Y="active", G="slide", q="carousel-item-right", z="carousel-item-left", X="carousel-item-next", J="carousel-item-prev", Z= {
		ACTIVE: ".active", ACTIVE_ITEM:".active.carousel-item", ITEM:".carousel-item", NEXT_PREV:".carousel-item-next, .carousel-item-prev", INDICATORS:".carousel-indicators", DATA_SLIDE:"[data-slide], [data-slide-to]", DATA_RIDE:'[data-ride="carousel"]'
	}
	, $=function() {
		function s(t, e) {
			this._items=null, this._interval=null, this._activeElement=null, this._isPaused=!1, this._isSliding=!1, this.touchTimeout=null, this._config=this._getConfig(e), this._element=P(t)[0], this._indicatorsElement=P(this._element).find(Z.INDICATORS)[0], this._addEventListeners()
		}
		var t=s.prototype;
		return t.next=function() {
			this._isSliding||this._slide(U)
		}
		, t.nextWhenVisible=function() {
			!document.hidden&&P(this._element).is(":visible")&&"hidden"!==P(this._element).css("visibility")&&this.next()
		}
		, t.prev=function() {
			this._isSliding||this._slide(K)
		}
		, t.pause=function(t) {
			t||(this._isPaused=!0), P(this._element).find(Z.NEXT_PREV)[0]&&(Cn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval=null
		}
		, t.cycle=function(t) {
			t||(this._isPaused=!1), this._interval&&(clearInterval(this._interval), this._interval=null), this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible: this.next).bind(this), this._config.interval))
		}
		, t.to=function(t) {
			var e=this;
			this._activeElement=P(this._element).find(Z.ACTIVE_ITEM)[0];
			var n=this._getItemIndex(this._activeElement);
			if(!(t>this._items.length-1||t<0))if(this._isSliding)P(this._element).one(Q.SLID, function() {
				return e.to(t)
			}
			);
			else {
				if(n===t)return this.pause(), void this.cycle();
				var i=n<t?U: K;
				this._slide(i, this._items[t])
			}
		}
		, t.dispose=function() {
			P(this._element).off(R), P.removeData(this._element, j), this._items=null, this._config=null, this._element=null, this._interval=null, this._isPaused=null, this._isSliding=null, this._activeElement=null, this._indicatorsElement=null
		}
		, t._getConfig=function(t) {
			return t=h( {}
			, M, t), Cn.typeCheckConfig(L, t, x), t
		}
		, t._addEventListeners=function() {
			var e=this;
			this._config.keyboard&&P(this._element).on(Q.KEYDOWN, function(t) {
				return e._keydown(t)
			}
			), "hover"===this._config.pause&&(P(this._element).on(Q.MOUSEENTER, function(t) {
				return e.pause(t)
			}
			).on(Q.MOUSELEAVE, function(t) {
				return e.cycle(t)
			}
			), "ontouchstart"in document.documentElement&&P(this._element).on(Q.TOUCHEND, function() {
				e.pause(), e.touchTimeout&&clearTimeout(e.touchTimeout), e.touchTimeout=setTimeout(function(t) {
					return e.cycle(t)
				}
				, 500+e._config.interval)
			}
			))
		}
		, t._keydown=function(t) {
			if(!/input|textarea/i.test(t.target.tagName))switch(t.which) {
				case 37: t.preventDefault(), this.prev();
				break;
				case 39: t.preventDefault(), this.next()
			}
		}
		, t._getItemIndex=function(t) {
			return this._items=P.makeArray(P(t).parent().find(Z.ITEM)), this._items.indexOf(t)
		}
		, t._getItemByDirection=function(t, e) {
			var n=t===U, i=t===K, r=this._getItemIndex(e), s=this._items.length-1;
			if((i&&0===r||n&&r===s)&&!this._config.wrap)return e;
			var o=(r+(t===K?-1: 1))%this._items.length;
			return-1===o?this._items[this._items.length-1]: this._items[o]
		}
		, t._triggerSlideEvent=function(t, e) {
			var n=this._getItemIndex(t), i=this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]), r=P.Event(Q.SLIDE, {
				relatedTarget: t, direction:e, from:i, to:n
			}
			);
			return P(this._element).trigger(r), r
		}
		, t._setActiveIndicatorElement=function(t) {
			if(this._indicatorsElement) {
				P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);
				var e=this._indicatorsElement.children[this._getItemIndex(t)];
				e&&P(e).addClass(Y)
			}
		}
		, t._slide=function(t, e) {
			var n, i, r, s=this, o=P(this._element).find(Z.ACTIVE_ITEM)[0], a=this._getItemIndex(o), l=e||o&&this._getItemByDirection(t, o), h=this._getItemIndex(l), c=Boolean(this._interval);
			if(t===U?(n=z, i=X, r=F): (n=q, i=J, r=V), l&&P(l).hasClass(Y))this._isSliding=!1;
			else if(!this._triggerSlideEvent(l, r).isDefaultPrevented()&&o&&l) {
				this._isSliding=!0, c&&this.pause(), this._setActiveIndicatorElement(l);
				var u=P.Event(Q.SLID, {
					relatedTarget: l, direction:r, from:a, to:h
				}
				);
				if(P(this._element).hasClass(G)) {
					P(l).addClass(i), Cn.reflow(l), P(o).addClass(n), P(l).addClass(n);
					var f=Cn.getTransitionDurationFromElement(o);
					P(o).one(Cn.TRANSITION_END, function() {
						P(l).removeClass(n+" "+i).addClass(Y), P(o).removeClass(Y+" "+i+" "+n), s._isSliding=!1, setTimeout(function() {
							return P(s._element).trigger(u)
						}
						, 0)
					}
					).emulateTransitionEnd(f)
				}
				else P(o).removeClass(Y), P(l).addClass(Y), this._isSliding=!1, P(this._element).trigger(u);
				c&&this.cycle()
			}
		}
		, s._jQueryInterface=function(i) {
			return this.each(function() {
				var t=P(this).data(j), e=h( {}
				, M, P(this).data());
				"object"==typeof i&&(e=h( {}
				, e, i));
				var n="string"==typeof i?i: e.slide;
				if(t||(t=new s(this, e), P(this).data(j, t)), "number"==typeof i)t.to(i);
				else if("string"==typeof n) {
					if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');
					t[n]()
				}
				else e.interval&&(t.pause(), t.cycle())
			}
			)
		}
		, s._dataApiClickHandler=function(t) {
			var e=Cn.getSelectorFromElement(this);
			if(e) {
				var n=P(e)[0];
				if(n&&P(n).hasClass(B)) {
					var i=h( {}
					, P(n).data(), P(this).data()), r=this.getAttribute("data-slide-to");
					r&&(i.interval=!1), s._jQueryInterface.call(P(n), i), r&&P(n).data(j).to(r), t.preventDefault()
				}
			}
		}
		, o(s, null, [ {			key:"VERSION", get:function() {				return"4.1.1"			}		}		, {			key:"Default", get:function() {				return M			}		}		]), s
	}
	(), P(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, $._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function() {
		P(Z.DATA_RIDE).each(function() {
			var t=P(this);
			$._jQueryInterface.call(t, t.data())
		}
		)
	}
	), P.fn[L]=$._jQueryInterface, P.fn[L].Constructor=$, P.fn[L].noConflict=function() {
		return P.fn[L]=W, $._jQueryInterface
	}
	, $), bn=(et="collapse", it="."+(nt="bs.collapse"), rt=(tt=e).fn[et], st= {
		toggle: !0, parent:""
	}
	, ot= {
		toggle: "boolean", parent:"(string|element)"
	}
	, at= {
		SHOW: "show"+it, SHOWN:"shown"+it, HIDE:"hide"+it, HIDDEN:"hidden"+it, CLICK_DATA_API:"click"+it+".data-api"
	}
	, lt="show", ht="collapse", ct="collapsing", ut="collapsed", ft="width", dt="height", _t= {
		ACTIVES: ".show, .collapsing", DATA_TOGGLE:'[data-toggle="collapse"]'
	}
	, gt=function() {
		function a(t, e) {
			this._isTransitioning=!1, this._element=t, this._config=this._getConfig(e), this._triggerArray=tt.makeArray(tt('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));
			for(var n=tt(_t.DATA_TOGGLE), i=0;
			i<n.length;
			i++) {
				var r=n[i], s=Cn.getSelectorFromElement(r);
				null!==s&&0<tt(s).filter(t).length&&(this._selector=s, this._triggerArray.push(r))
			}
			this._parent=this._config.parent?this._getParent():null, this._config.parent||this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle&&this.toggle()
		}
		var t=a.prototype;
		return t.toggle=function() {
			tt(this._element).hasClass(lt)?this.hide(): this.show()
		}
		, t.show=function() {
			var t, e, n=this;
			if(!this._isTransitioning&&!tt(this._element).hasClass(lt)&&(this._parent&&0===(t=tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(t=null), !(t&&(e=tt(t).not(this._selector).data(nt))&&e._isTransitioning))) {
				var i=tt.Event(at.SHOW);
				if(tt(this._element).trigger(i), !i.isDefaultPrevented()) {
					t&&(a._jQueryInterface.call(tt(t).not(this._selector), "hide"), e||tt(t).data(nt, null));
					var r=this._getDimension();
					tt(this._element).removeClass(ht).addClass(ct), (this._element.style[r]=0)<this._triggerArray.length&&tt(this._triggerArray).removeClass(ut).attr("aria-expanded", !0), this.setTransitioning(!0);
					var s="scroll"+(r[0].toUpperCase()+r.slice(1)), o=Cn.getTransitionDurationFromElement(this._element);
					tt(this._element).one(Cn.TRANSITION_END, function() {
						tt(n._element).removeClass(ct).addClass(ht).addClass(lt), n._element.style[r]="", n.setTransitioning(!1), tt(n._element).trigger(at.SHOWN)
					}
					).emulateTransitionEnd(o), this._element.style[r]=this._element[s]+"px"
				}
			}
		}
		, t.hide=function() {
			var t=this;
			if(!this._isTransitioning&&tt(this._element).hasClass(lt)) {
				var e=tt.Event(at.HIDE);
				if(tt(this._element).trigger(e), !e.isDefaultPrevented()) {
					var n=this._getDimension();
					if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px", Cn.reflow(this._element), tt(this._element).addClass(ct).removeClass(ht).removeClass(lt), 0<this._triggerArray.length)for(var i=0;
					i<this._triggerArray.length;
					i++) {
						var r=this._triggerArray[i], s=Cn.getSelectorFromElement(r);
						if(null!==s)tt(s).hasClass(lt)||tt(r).addClass(ut).attr("aria-expanded", !1)
					}
					this.setTransitioning(!0);
					this._element.style[n]="";
					var o=Cn.getTransitionDurationFromElement(this._element);
					tt(this._element).one(Cn.TRANSITION_END, function() {
						t.setTransitioning(!1), tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN)
					}
					).emulateTransitionEnd(o)
				}
			}
		}
		, t.setTransitioning=function(t) {
			this._isTransitioning=t
		}
		, t.dispose=function() {
			tt.removeData(this._element, nt), this._config=null, this._parent=null, this._element=null, this._triggerArray=null, this._isTransitioning=null
		}
		, t._getConfig=function(t) {
			return(t=h( {}
			, st, t)).toggle=Boolean(t.toggle), Cn.typeCheckConfig(et, t, ot), t
		}
		, t._getDimension=function() {
			return tt(this._element).hasClass(ft)?ft: dt
		}
		, t._getParent=function() {
			var n=this, t=null;
			Cn.isElement(this._config.parent)?(t=this._config.parent, "undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])): t=tt(this._config.parent)[0];
			var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';
			return tt(t).find(e).each(function(t, e) {
				n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
			}
			), t
		}
		, t._addAriaAndCollapsedClass=function(t, e) {
			if(t) {
				var n=tt(t).hasClass(lt);
				0<e.length&&tt(e).toggleClass(ut, !n).attr("aria-expanded", n)
			}
		}
		, a._getTargetFromElement=function(t) {
			var e=Cn.getSelectorFromElement(t);
			return e?tt(e)[0]: null
		}
		, a._jQueryInterface=function(i) {
			return this.each(function() {
				var t=tt(this), e=t.data(nt), n=h( {}
				, st, t.data(), "object"==typeof i&&i?i: {}
				);
				if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1), e||(e=new a(this, n), t.data(nt, e)), "string"==typeof i) {
					if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');
					e[i]()
				}
			}
			)
		}
		, o(a, null, [ {			key:"VERSION", get:function() {				return"4.1.1"			}		}		, {			key:"Default", get:function() {				return st			}		}		]), a
	}
	(), tt(document).on(at.CLICK_DATA_API, _t.DATA_TOGGLE, function(t) {
		"A"===t.currentTarget.tagName&&t.preventDefault();
		var n=tt(this), e=Cn.getSelectorFromElement(this);
		tt(e).each(function() {
			var t=tt(this), e=t.data(nt)?"toggle": n.data();
			gt._jQueryInterface.call(t, e)
		}
		)
	}
	), tt.fn[et]=gt._jQueryInterface, tt.fn[et].Constructor=gt, tt.fn[et].noConflict=function() {
		return tt.fn[et]=rt, gt._jQueryInterface
	}
	, gt), Sn=(pt="dropdown", Et="."+(vt="bs.dropdown"), yt=".data-api", Tt=(mt=e).fn[pt], Ct=new RegExp("38|40|27"), It= {
		HIDE: "hide"+Et, HIDDEN:"hidden"+Et, SHOW:"show"+Et, SHOWN:"shown"+Et, CLICK:"click"+Et, CLICK_DATA_API:"click"+Et+yt, KEYDOWN_DATA_API:"keydown"+Et+yt, KEYUP_DATA_API:"keyup"+Et+yt
	}
	, At="disabled", Dt="show", bt="dropup", St="dropright", wt="dropleft", Nt="dropdown-menu-right", Ot="position-static", kt='[data-toggle="dropdown"]', Pt=".dropdown form", Lt=".dropdown-menu", jt=".navbar-nav", Rt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Ht="top-start", Wt="top-end", Mt="bottom-start", xt="bottom-end", Ut="right-start", Kt="left-start", Ft= {
		offset: 0, flip:!0, boundary:"scrollParent", reference:"toggle", display:"dynamic"
	}
	, Vt= {
		offset: "(number|string|function)", flip:"boolean", boundary:"(string|element)", reference:"(string|element)", display:"string"
	}
	, Qt=function() {
		function l(t, e) {
			this._element=t, this._popper=null, this._config=this._getConfig(e), this._menu=this._getMenuElement(), this._inNavbar=this._detectNavbar(), this._addEventListeners()
		}
		var t=l.prototype;
		return t.toggle=function() {
			if(!this._element.disabled&&!mt(this._element).hasClass(At)) {
				var t=l._getParentFromElement(this._element), e=mt(this._menu).hasClass(Dt);
				if(l._clearMenus(), !e) {
					var n= {
						relatedTarget: this._element
					}
					, i=mt.Event(It.SHOW, n);
					if(mt(t).trigger(i), !i.isDefaultPrevented()) {
						if(!this._inNavbar) {
							if("undefined"==typeof c)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
							var r=this._element;
							"parent"===this._config.reference?r=t: Cn.isElement(this._config.reference)&&(r=this._config.reference, "undefined"!=typeof this._config.reference.jquery&&(r=this._config.reference[0])), "scrollParent"!==this._config.boundary&&mt(t).addClass(Ot), this._popper=new c(r, this._menu, this._getPopperConfig())
						}
						"ontouchstart"in document.documentElement&&0===mt(t).closest(jt).length&&mt(document.body).children().on("mouseover", null, mt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), mt(this._menu).toggleClass(Dt), mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN, n))
					}
				}
			}
		}
		, t.dispose=function() {
			mt.removeData(this._element, vt), mt(this._element).off(Et), this._element=null, (this._menu=null)!==this._popper&&(this._popper.destroy(), this._popper=null)
		}
		, t.update=function() {
			this._inNavbar=this._detectNavbar(), null!==this._popper&&this._popper.scheduleUpdate()
		}
		, t._addEventListeners=function() {
			var e=this;
			mt(this._element).on(It.CLICK, function(t) {
				t.preventDefault(), t.stopPropagation(), e.toggle()
			}
			)
		}
		, t._getConfig=function(t) {
			return t=h( {}
			, this.constructor.Default, mt(this._element).data(), t), Cn.typeCheckConfig(pt, t, this.constructor.DefaultType), t
		}
		, t._getMenuElement=function() {
			if(!this._menu) {
				var t=l._getParentFromElement(this._element);
				this._menu=mt(t).find(Lt)[0]
			}
			return this._menu
		}
		, t._getPlacement=function() {
			var t=mt(this._element).parent(), e=Mt;
			return t.hasClass(bt)?(e=Ht, mt(this._menu).hasClass(Nt)&&(e=Wt)): t.hasClass(St)?e=Ut:t.hasClass(wt)?e=Kt:mt(this._menu).hasClass(Nt)&&(e=xt), e
		}
		, t._detectNavbar=function() {
			return 0<mt(this._element).closest(".navbar").length
		}
		, t._getPopperConfig=function() {
			var e=this, t= {}
			;
			"function"==typeof this._config.offset?t.fn=function(t) {
				return t.offsets=h( {}
				, t.offsets, e._config.offset(t.offsets)|| {}
				), t
			}
			:t.offset=this._config.offset;
			var n= {
				placement:this._getPlacement(), modifiers: {
					offset:t, flip: {
						enabled: this._config.flip
					}
					, preventOverflow: {
						boundariesElement: this._config.boundary
					}
				}
			}
			;
			return"static"===this._config.display&&(n.modifiers.applyStyle= {
				enabled: !1
			}
			), n
		}
		, l._jQueryInterface=function(e) {
			return this.each(function() {
				var t=mt(this).data(vt);
				if(t||(t=new l(this, "object"==typeof e?e: null), mt(this).data(vt, t)), "string"==typeof e) {
					if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');
					t[e]()
				}
			}
			)
		}
		, l._clearMenus=function(t) {
			if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=mt.makeArray(mt(kt)), n=0;
			n<e.length;
			n++) {
				var i=l._getParentFromElement(e[n]), r=mt(e[n]).data(vt), s= {
					relatedTarget: e[n]
				}
				;
				if(r) {
					var o=r._menu;
					if(mt(i).hasClass(Dt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&mt.contains(i, t.target))) {
						var a=mt.Event(It.HIDE, s);
						mt(i).trigger(a), a.isDefaultPrevented()||("ontouchstart"in document.documentElement&&mt(document.body).children().off("mouseover", null, mt.noop), e[n].setAttribute("aria-expanded", "false"), mt(o).removeClass(Dt), mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN, s)))
					}
				}
			}
		}
		, l._getParentFromElement=function(t) {
			var e, n=Cn.getSelectorFromElement(t);
			return n&&(e=mt(n)[0]), e||t.parentNode
		}
		, l._dataApiKeydownHandler=function(t) {
			if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||mt(t.target).closest(Lt).length)): Ct.test(t.which))&&(t.preventDefault(), t.stopPropagation(), !this.disabled&&!mt(this).hasClass(At))) {
				var e=l._getParentFromElement(this), n=mt(e).hasClass(Dt);
				if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)) {
					var i=mt(e).find(Rt).get();
					if(0!==i.length) {
						var r=i.indexOf(t.target);
						38===t.which&&0<r&&r--, 40===t.which&&r<i.length-1&&r++, r<0&&(r=0), i[r].focus()
					}
				}
				else {
					if(27===t.which) {
						var s=mt(e).find(kt)[0];
						mt(s).trigger("focus")
					}
					mt(this).trigger("click")
				}
			}
		}
		, o(l, null, [ {
			key:"VERSION", get:function() {
				return"4.1.1"
			}
		}
		, {
			key:"Default", get:function() {
				return Ft
			}
		}
		, {
			key:"DefaultType", get:function() {
				return Vt
			}
		}
		]), l
	}
	(), mt(document).on(It.KEYDOWN_DATA_API, kt, Qt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API, Lt, Qt._dataApiKeydownHandler).on(It.CLICK_DATA_API+" "+It.KEYUP_DATA_API, Qt._clearMenus).on(It.CLICK_DATA_API, kt, function(t) {
		t.preventDefault(), t.stopPropagation(), Qt._jQueryInterface.call(mt(this), "toggle")
	}
	).on(It.CLICK_DATA_API, Pt, function(t) {
		t.stopPropagation()
	}
	), mt.fn[pt]=Qt._jQueryInterface, mt.fn[pt].Constructor=Qt, mt.fn[pt].noConflict=function() {
		return mt.fn[pt]=Tt, Qt._jQueryInterface
	}
	, Qt), wn=(Yt="modal", qt="."+(Gt="bs.modal"), zt=(Bt=e).fn[Yt], Xt= {
		backdrop: !0, keyboard:!0, focus:!0, show:!0
	}
	, Jt= {
		backdrop: "(boolean|string)", keyboard:"boolean", focus:"boolean", show:"boolean"
	}
	, Zt= {
		HIDE: "hide"+qt, HIDDEN:"hidden"+qt, SHOW:"show"+qt, SHOWN:"shown"+qt, FOCUSIN:"focusin"+qt, RESIZE:"resize"+qt, CLICK_DISMISS:"click.dismiss"+qt, KEYDOWN_DISMISS:"keydown.dismiss"+qt, MOUSEUP_DISMISS:"mouseup.dismiss"+qt, MOUSEDOWN_DISMISS:"mousedown.dismiss"+qt, CLICK_DATA_API:"click"+qt+".data-api"
	}
	, $t="modal-scrollbar-measure", te="modal-backdrop", ee="modal-open", ne="fade", ie="show", re= {
		DIALOG: ".modal-dialog", DATA_TOGGLE:'[data-toggle="modal"]', DATA_DISMISS:'[data-dismiss="modal"]', FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT:".sticky-top", NAVBAR_TOGGLER:".navbar-toggler"
	}
	, se=function() {
		function r(t, e) {
			this._config=this._getConfig(e), this._element=t, this._dialog=Bt(t).find(re.DIALOG)[0], this._backdrop=null, this._isShown=!1, this._isBodyOverflowing=!1, this._ignoreBackdropClick=!1, this._scrollbarWidth=0
		}
		var t=r.prototype;
		return t.toggle=function(t) {
			return this._isShown?this.hide(): this.show(t)
		}
		, t.show=function(t) {
			var e=this;
			if(!this._isTransitioning&&!this._isShown) {
				Bt(this._element).hasClass(ne)&&(this._isTransitioning=!0);
				var n=Bt.Event(Zt.SHOW, {
					relatedTarget: t
				}
				);
				Bt(this._element).trigger(n), this._isShown||n.isDefaultPrevented()||(this._isShown=!0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Bt(document.body).addClass(ee), this._setEscapeEvent(), this._setResizeEvent(), Bt(this._element).on(Zt.CLICK_DISMISS, re.DATA_DISMISS, function(t) {
					return e.hide(t)
				}
				), Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function() {
					Bt(e._element).one(Zt.MOUSEUP_DISMISS, function(t) {
						Bt(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)
					}
					)
				}
				), this._showBackdrop(function() {
					return e._showElement(t)
				}
				))
			}
		}
		, t.hide=function(t) {
			var e=this;
			if(t&&t.preventDefault(), !this._isTransitioning&&this._isShown) {
				var n=Bt.Event(Zt.HIDE);
				if(Bt(this._element).trigger(n), this._isShown&&!n.isDefaultPrevented()) {
					this._isShown=!1;
					var i=Bt(this._element).hasClass(ne);
					if(i&&(this._isTransitioning=!0), this._setEscapeEvent(), this._setResizeEvent(), Bt(document).off(Zt.FOCUSIN), Bt(this._element).removeClass(ie), Bt(this._element).off(Zt.CLICK_DISMISS), Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS), i) {
						var r=Cn.getTransitionDurationFromElement(this._element);
						Bt(this._element).one(Cn.TRANSITION_END, function(t) {
							return e._hideModal(t)
						}
						).emulateTransitionEnd(r)
					}
					else this._hideModal()
				}
			}
		}
		, t.dispose=function() {
			Bt.removeData(this._element, Gt), Bt(window, document, this._element, this._backdrop).off(qt), this._config=null, this._element=null, this._dialog=null, this._backdrop=null, this._isShown=null, this._isBodyOverflowing=null, this._ignoreBackdropClick=null, this._scrollbarWidth=null
		}
		, t.handleUpdate=function() {
			this._adjustDialog()
		}
		, t._getConfig=function(t) {
			return t=h( {}
			, Xt, t), Cn.typeCheckConfig(Yt, t, Jt), t
		}
		, t._showElement=function(t) {
			var e=this, n=Bt(this._element).hasClass(ne);
			this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element), this._element.style.display="block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop=0, n&&Cn.reflow(this._element), Bt(this._element).addClass(ie), this._config.focus&&this._enforceFocus();
			var i=Bt.Event(Zt.SHOWN, {
				relatedTarget: t
			}
			), r=function() {
				e._config.focus&&e._element.focus(), e._isTransitioning=!1, Bt(e._element).trigger(i)
			}
			;
			if(n) {
				var s=Cn.getTransitionDurationFromElement(this._element);
				Bt(this._dialog).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
			}
			else r()
		}
		, t._enforceFocus=function() {
			var e=this;
			Bt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN, function(t) {
				document!==t.target&&e._element!==t.target&&0===Bt(e._element).has(t.target).length&&e._element.focus()
			}
			)
		}
		, t._setEscapeEvent=function() {
			var e=this;
			this._isShown&&this._config.keyboard?Bt(this._element).on(Zt.KEYDOWN_DISMISS, function(t) {
				27===t.which&&(t.preventDefault(), e.hide())
			}
			):this._isShown||Bt(this._element).off(Zt.KEYDOWN_DISMISS)
		}
		, t._setResizeEvent=function() {
			var e=this;
			this._isShown?Bt(window).on(Zt.RESIZE, function(t) {
				return e.handleUpdate(t)
			}
			):Bt(window).off(Zt.RESIZE)
		}
		, t._hideModal=function() {
			var t=this;
			this._element.style.display="none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning=!1, this._showBackdrop(function() {
				Bt(document.body).removeClass(ee), t._resetAdjustments(), t._resetScrollbar(), Bt(t._element).trigger(Zt.HIDDEN)
			}
			)
		}
		, t._removeBackdrop=function() {
			this._backdrop&&(Bt(this._backdrop).remove(), this._backdrop=null)
		}
		, t._showBackdrop=function(t) {
			var e=this, n=Bt(this._element).hasClass(ne)?ne: "";
			if(this._isShown&&this._config.backdrop) {
				if(this._backdrop=document.createElement("div"), this._backdrop.className=te, n&&Bt(this._backdrop).addClass(n), Bt(this._backdrop).appendTo(document.body), Bt(this._element).on(Zt.CLICK_DISMISS, function(t) {
					e._ignoreBackdropClick?e._ignoreBackdropClick=!1: t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())
				}
				), n&&Cn.reflow(this._backdrop), Bt(this._backdrop).addClass(ie), !t)return;
				if(!n)return void t();
				var i=Cn.getTransitionDurationFromElement(this._backdrop);
				Bt(this._backdrop).one(Cn.TRANSITION_END, t).emulateTransitionEnd(i)
			}
			else if(!this._isShown&&this._backdrop) {
				Bt(this._backdrop).removeClass(ie);
				var r=function() {
					e._removeBackdrop(), t&&t()
				}
				;
				if(Bt(this._element).hasClass(ne)) {
					var s=Cn.getTransitionDurationFromElement(this._backdrop);
					Bt(this._backdrop).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
				}
				else r()
			}
			else t&&t()
		}
		, t._adjustDialog=function() {
			var t=this._element.scrollHeight>document.documentElement.clientHeight;
			!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"), this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")
		}
		, t._resetAdjustments=function() {
			this._element.style.paddingLeft="", this._element.style.paddingRight=""
		}
		, t._checkScrollbar=function() {
			var t=document.body.getBoundingClientRect();
			this._isBodyOverflowing=t.left+t.right<window.innerWidth, this._scrollbarWidth=this._getScrollbarWidth()
		}
		, t._setScrollbar=function() {
			var r=this;
			if(this._isBodyOverflowing) {
				Bt(re.FIXED_CONTENT).each(function(t, e) {
					var n=Bt(e)[0].style.paddingRight, i=Bt(e).css("padding-right");
					Bt(e).data("padding-right", n).css("padding-right", parseFloat(i)+r._scrollbarWidth+"px")
				}
				), Bt(re.STICKY_CONTENT).each(function(t, e) {
					var n=Bt(e)[0].style.marginRight, i=Bt(e).css("margin-right");
					Bt(e).data("margin-right", n).css("margin-right", parseFloat(i)-r._scrollbarWidth+"px")
				}
				), Bt(re.NAVBAR_TOGGLER).each(function(t, e) {
					var n=Bt(e)[0].style.marginRight, i=Bt(e).css("margin-right");
					Bt(e).data("margin-right", n).css("margin-right", parseFloat(i)+r._scrollbarWidth+"px")
				}
				);
				var t=document.body.style.paddingRight, e=Bt(document.body).css("padding-right");
				Bt(document.body).data("padding-right", t).css("padding-right", parseFloat(e)+this._scrollbarWidth+"px")
			}
		}
		, t._resetScrollbar=function() {
			Bt(re.FIXED_CONTENT).each(function(t, e) {
				var n=Bt(e).data("padding-right");
				"undefined"!=typeof n&&Bt(e).css("padding-right", n).removeData("padding-right")
			}
			), Bt(re.STICKY_CONTENT+", "+re.NAVBAR_TOGGLER).each(function(t, e) {
				var n=Bt(e).data("margin-right");
				"undefined"!=typeof n&&Bt(e).css("margin-right", n).removeData("margin-right")
			}
			);
			var t=Bt(document.body).data("padding-right");
			"undefined"!=typeof t&&Bt(document.body).css("padding-right", t).removeData("padding-right")
		}
		, t._getScrollbarWidth=function() {
			var t=document.createElement("div");
			t.className=$t, document.body.appendChild(t);
			var e=t.getBoundingClientRect().width-t.clientWidth;
			return document.body.removeChild(t), e
		}
		, r._jQueryInterface=function(n, i) {
			return this.each(function() {
				var t=Bt(this).data(Gt), e=h( {}
				, Xt, Bt(this).data(), "object"==typeof n&&n?n: {}
				);
				if(t||(t=new r(this, e), Bt(this).data(Gt, t)), "string"==typeof n) {
					if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');
					t[n](i)
				}
				else e.show&&t.show(i)
			}
			)
		}
		, o(r, null, [ {
			key:"VERSION", get:function() {
				return"4.1.1"
			}
		}
		, {
			key:"Default", get:function() {
				return Xt
			}
		}
		]), r
	}
	(), Bt(document).on(Zt.CLICK_DATA_API, re.DATA_TOGGLE, function(t) {
		var e, n=this, i=Cn.getSelectorFromElement(this);
		i&&(e=Bt(i)[0]);
		var r=Bt(e).data(Gt)?"toggle":h( {}
		, Bt(e).data(), Bt(this).data());
		"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();
		var s=Bt(e).one(Zt.SHOW, function(t) {
			t.isDefaultPrevented()||s.one(Zt.HIDDEN, function() {
				Bt(n).is(":visible")&&n.focus()
			}
			)
		}
		);
		se._jQueryInterface.call(Bt(e), r, this)
	}
	), Bt.fn[Yt]=se._jQueryInterface, Bt.fn[Yt].Constructor=se, Bt.fn[Yt].noConflict=function() {
		return Bt.fn[Yt]=zt, se._jQueryInterface
	}
	, se), Nn=(ae="tooltip", he="."+(le="bs.tooltip"), ce=(oe=e).fn[ae], ue="bs-tooltip", fe=new RegExp("(^|\\s)"+ue+"\\S+", "g"), ge= {
		animation:!0, template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger:"hover focus", title:"", delay:0, html:!(_e= {
			AUTO: "auto", TOP:"top", RIGHT:"right", BOTTOM:"bottom", LEFT:"left"
		}
		), selector:!(de= {
			animation: "boolean", template:"string", title:"(string|element|function)", trigger:"string", delay:"(number|object)", html:"boolean", selector:"(string|boolean)", placement:"(string|function)", offset:"(number|string)", container:"(string|element|boolean)", fallbackPlacement:"(string|array)", boundary:"(string|element)"
		}
		), placement:"top", offset:0, container:!1, fallbackPlacement:"flip", boundary:"scrollParent"
	}
	, pe="out", ve= {
		HIDE: "hide"+he, HIDDEN:"hidden"+he, SHOW:(me="show")+he, SHOWN:"shown"+he, INSERTED:"inserted"+he, CLICK:"click"+he, FOCUSIN:"focusin"+he, FOCUSOUT:"focusout"+he, MOUSEENTER:"mouseenter"+he, MOUSELEAVE:"mouseleave"+he
	}
	, Ee="fade", ye="show", Te=".tooltip-inner", Ce=".arrow", Ie="hover", Ae="focus", De="click", be="manual", Se=function() {
		function i(t, e) {
			if("undefined"==typeof c)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
			this._isEnabled=!0, this._timeout=0, this._hoverState="", this._activeTrigger= {}
			, this._popper=null, this.element=t, this.config=this._getConfig(e), this.tip=null, this._setListeners()
		}
		var t=i.prototype;
		return t.enable=function() {
			this._isEnabled=!0
		}
		, t.disable=function() {
			this._isEnabled=!1
		}
		, t.toggleEnabled=function() {
			this._isEnabled=!this._isEnabled
		}
		, t.toggle=function(t) {
			if(this._isEnabled)if(t) {
				var e=this.constructor.DATA_KEY, n=oe(t.currentTarget).data(e);
				n||(n=new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(e, n)), n._activeTrigger.click=!n._activeTrigger.click, n._isWithActiveTrigger()?n._enter(null, n): n._leave(null, n)
			}
			else {
				if(oe(this.getTipElement()).hasClass(ye))return void this._leave(null, this);
				this._enter(null, this)
			}
		}
		, t.dispose=function() {
			clearTimeout(this._timeout), oe.removeData(this.element, this.constructor.DATA_KEY), oe(this.element).off(this.constructor.EVENT_KEY), oe(this.element).closest(".modal").off("hide.bs.modal"), this.tip&&oe(this.tip).remove(), this._isEnabled=null, this._timeout=null, this._hoverState=null, (this._activeTrigger=null)!==this._popper&&this._popper.destroy(), this._popper=null, this.element=null, this.config=null, this.tip=null
		}
		, t.show=function() {
			var e=this;
			if("none"===oe(this.element).css("display"))throw new Error("Please use show on visible elements");
			var t=oe.Event(this.constructor.Event.SHOW);
			if(this.isWithContent()&&this._isEnabled) {
				oe(this.element).trigger(t);
				var n=oe.contains(this.element.ownerDocument.documentElement, this.element);
				if(t.isDefaultPrevented()||!n)return;
				var i=this.getTipElement(), r=Cn.getUID(this.constructor.NAME);
				i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation&&oe(i).addClass(Ee);
				var s="function"==typeof this.config.placement?this.config.placement.call(this, i, this.element): this.config.placement, o=this._getAttachment(s);
				this.addAttachmentClass(o);
				var a=!1===this.config.container?document.body: oe(this.config.container);
				oe(i).data(this.constructor.DATA_KEY, this), oe.contains(this.element.ownerDocument.documentElement, this.tip)||oe(i).appendTo(a), oe(this.element).trigger(this.constructor.Event.INSERTED), this._popper=new c(this.element, i, {
					placement:o, modifiers: {
						offset: {
							offset: this.config.offset
						}
						, flip: {
							behavior: this.config.fallbackPlacement
						}
						, arrow: {
							element: Ce
						}
						, preventOverflow: {
							boundariesElement: this.config.boundary
						}
					}
					, onCreate:function(t) {
						t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)
					}
					, onUpdate:function(t) {
						e._handlePopperPlacementChange(t)
					}
				}
				), oe(i).addClass(ye), "ontouchstart"in document.documentElement&&oe(document.body).children().on("mouseover", null, oe.noop);
				var l=function() {
					e.config.animation&&e._fixTransition();
					var t=e._hoverState;
					e._hoverState=null, oe(e.element).trigger(e.constructor.Event.SHOWN), t===pe&&e._leave(null, e)
				}
				;
				if(oe(this.tip).hasClass(Ee)) {
					var h=Cn.getTransitionDurationFromElement(this.tip);
					oe(this.tip).one(Cn.TRANSITION_END, l).emulateTransitionEnd(h)
				}
				else l()
			}
		}
		, t.hide=function(t) {
			var e=this, n=this.getTipElement(), i=oe.Event(this.constructor.Event.HIDE), r=function() {
				e._hoverState!==me&&n.parentNode&&n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), oe(e.element).trigger(e.constructor.Event.HIDDEN), null!==e._popper&&e._popper.destroy(), t&&t()
			}
			;
			if(oe(this.element).trigger(i), !i.isDefaultPrevented()) {
				if(oe(n).removeClass(ye), "ontouchstart"in document.documentElement&&oe(document.body).children().off("mouseover", null, oe.noop), this._activeTrigger[De]=!1, this._activeTrigger[Ae]=!1, this._activeTrigger[Ie]=!1, oe(this.tip).hasClass(Ee)) {
					var s=Cn.getTransitionDurationFromElement(n);
					oe(n).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
				}
				else r();
				this._hoverState=""
			}
		}
		, t.update=function() {
			null!==this._popper&&this._popper.scheduleUpdate()
		}
		, t.isWithContent=function() {
			return Boolean(this.getTitle())
		}
		, t.addAttachmentClass=function(t) {
			oe(this.getTipElement()).addClass(ue+"-"+t)
		}
		, t.getTipElement=function() {
			return this.tip=this.tip||oe(this.config.template)[0], this.tip
		}
		, t.setContent=function() {
			var t=oe(this.getTipElement());
			this.setElementContent(t.find(Te), this.getTitle()), t.removeClass(Ee+" "+ye)
		}
		, t.setElementContent=function(t, e) {
			var n=this.config.html;
			"object"==typeof e&&(e.nodeType||e.jquery)?n?oe(e).parent().is(t)||t.empty().append(e): t.text(oe(e).text()):t[n?"html":"text"](e)
		}
		, t.getTitle=function() {
			var t=this.element.getAttribute("data-original-title");
			return t||(t="function"==typeof this.config.title?this.config.title.call(this.element): this.config.title), t
		}
		, t._getAttachment=function(t) {
			return _e[t.toUpperCase()]
		}
		, t._setListeners=function() {
			var i=this;
			this.config.trigger.split(" ").forEach(function(t) {
				if("click"===t)oe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
					return i.toggle(t)
				}
				);
				else if(t!==be) {
					var e=t===Ie?i.constructor.Event.MOUSEENTER: i.constructor.Event.FOCUSIN, n=t===Ie?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;
					oe(i.element).on(e, i.config.selector, function(t) {
						return i._enter(t)
					}
					).on(n, i.config.selector, function(t) {
						return i._leave(t)
					}
					)
				}
				oe(i.element).closest(".modal").on("hide.bs.modal", function() {
					return i.hide()
				}
				)
			}
			), this.config.selector?this.config=h( {}
			, this.config, {
				trigger: "manual", selector:""
			}
			):this._fixTitle()
		}
		, t._fixTitle=function() {
			var t=typeof this.element.getAttribute("data-original-title");
			(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title", this.element.getAttribute("title")||""), this.element.setAttribute("title", ""))
		}
		, t._enter=function(t, e) {
			var n=this.constructor.DATA_KEY;
			(e=e||oe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t&&(e._activeTrigger["focusin"===t.type?Ae: Ie]=!0), oe(e.getTipElement()).hasClass(ye)||e._hoverState===me?e._hoverState=me:(clearTimeout(e._timeout), e._hoverState=me, e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function() {
				e._hoverState===me&&e.show()
			}
			, e.config.delay.show):e.show())
		}
		, t._leave=function(t, e) {
			var n=this.constructor.DATA_KEY;
			(e=e||oe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t&&(e._activeTrigger["focusout"===t.type?Ae: Ie]=!1), e._isWithActiveTrigger()||(clearTimeout(e._timeout), e._hoverState=pe, e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function() {
				e._hoverState===pe&&e.hide()
			}
			, e.config.delay.hide):e.hide())
		}
		, t._isWithActiveTrigger=function() {
			for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;
			return!1
		}
		, t._getConfig=function(t) {
			return"number"==typeof(t=h( {}
			, this.constructor.Default, oe(this.element).data(), "object"==typeof t&&t?t: {}
			)).delay&&(t.delay= {
				show: t.delay, hide:t.delay
			}
			), "number"==typeof t.title&&(t.title=t.title.toString()), "number"==typeof t.content&&(t.content=t.content.toString()), Cn.typeCheckConfig(ae, t, this.constructor.DefaultType), t
		}
		, t._getDelegateConfig=function() {
			var t= {}
			;
			if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);
			return t
		}
		, t._cleanTipClass=function() {
			var t=oe(this.getTipElement()), e=t.attr("class").match(fe);
			null!==e&&0<e.length&&t.removeClass(e.join(""))
		}
		, t._handlePopperPlacementChange=function(t) {
			this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
		}
		, t._fixTransition=function() {
			var t=this.getTipElement(), e=this.config.animation;
			null===t.getAttribute("x-placement")&&(oe(t).removeClass(Ee), this.config.animation=!1, this.hide(), this.show(), this.config.animation=e)
		}
		, i._jQueryInterface=function(n) {
			return this.each(function() {
				var t=oe(this).data(le), e="object"==typeof n&&n;
				if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this, e), oe(this).data(le, t)), "string"==typeof n)) {
					if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');
					t[n]()
				}
			}
			)
		}
		, o(i, null, [ {
			key:"VERSION", get:function() {
				return"4.1.1"
			}
		}
		, {
			key:"Default", get:function() {
				return ge
			}
		}
		, {
			key:"NAME", get:function() {
				return ae
			}
		}
		, {
			key:"DATA_KEY", get:function() {
				return le
			}
		}
		, {
			key:"Event", get:function() {
				return ve
			}
		}
		, {
			key:"EVENT_KEY", get:function() {
				return he
			}
		}
		, {
			key:"DefaultType", get:function() {
				return de
			}
		}
		]), i
	}
	(), oe.fn[ae]=Se._jQueryInterface, oe.fn[ae].Constructor=Se, oe.fn[ae].noConflict=function() {
		return oe.fn[ae]=ce, Se._jQueryInterface
	}
	, Se), On=(Ne="popover", ke="."+(Oe="bs.popover"), Pe=(we=e).fn[Ne], Le="bs-popover", je=new RegExp("(^|\\s)"+Le+"\\S+", "g"), Re=h( {}
	, Nn.Default, {
		placement: "right", trigger:"click", content:"", template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
	}
	), He=h( {}
	, Nn.DefaultType, {
		content: "(string|element|function)"
	}
	), We="fade", xe=".popover-header", Ue=".popover-body", Ke= {
		HIDE: "hide"+ke, HIDDEN:"hidden"+ke, SHOW:(Me="show")+ke, SHOWN:"shown"+ke, INSERTED:"inserted"+ke, CLICK:"click"+ke, FOCUSIN:"focusin"+ke, FOCUSOUT:"focusout"+ke, MOUSEENTER:"mouseenter"+ke, MOUSELEAVE:"mouseleave"+ke
	}
	, Fe=function(t) {
		var e, n;
		function i() {
			return t.apply(this, arguments)||this
		}
		n=t, (e=i).prototype=Object.create(n.prototype), (e.prototype.constructor=e).__proto__=n;
		var r=i.prototype;
		return r.isWithContent=function() {
			return this.getTitle()||this._getContent()
		}
		, r.addAttachmentClass=function(t) {
			we(this.getTipElement()).addClass(Le+"-"+t)
		}
		, r.getTipElement=function() {
			return this.tip=this.tip||we(this.config.template)[0], this.tip
		}
		, r.setContent=function() {
			var t=we(this.getTipElement());
			this.setElementContent(t.find(xe), this.getTitle());
			var e=this._getContent();
			"function"==typeof e&&(e=e.call(this.element)), this.setElementContent(t.find(Ue), e), t.removeClass(We+" "+Me)
		}
		, r._getContent=function() {
			return this.element.getAttribute("data-content")||this.config.content
		}
		, r._cleanTipClass=function() {
			var t=we(this.getTipElement()), e=t.attr("class").match(je);
			null!==e&&0<e.length&&t.removeClass(e.join(""))
		}
		, i._jQueryInterface=function(n) {
			return this.each(function() {
				var t=we(this).data(Oe), e="object"==typeof n?n: null;
				if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this, e), we(this).data(Oe, t)), "string"==typeof n)) {
					if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');
					t[n]()
				}
			}
			)
		}
		, o(i, null, [ {
			key:"VERSION", get:function() {
				return"4.1.1"
			}
		}
		, {
			key:"Default", get:function() {
				return Re
			}
		}
		, {
			key:"NAME", get:function() {
				return Ne
			}
		}
		, {
			key:"DATA_KEY", get:function() {
				return Oe
			}
		}
		, {
			key:"Event", get:function() {
				return Ke
			}
		}
		, {
			key:"EVENT_KEY", get:function() {
				return ke
			}
		}
		, {
			key:"DefaultType", get:function() {
				return He
			}
		}
		]), i
	}
	(Nn), we.fn[Ne]=Fe._jQueryInterface, we.fn[Ne].Constructor=Fe, we.fn[Ne].noConflict=function() {
		return we.fn[Ne]=Pe, Fe._jQueryInterface
	}
	, Fe), kn=(Qe="scrollspy", Ye="."+(Be="bs.scrollspy"), Ge=(Ve=e).fn[Qe], qe= {
		offset: 10, method:"auto", target:""
	}
	, ze= {
		offset: "number", method:"string", target:"(string|element)"
	}
	, Xe= {
		ACTIVATE: "activate"+Ye, SCROLL:"scroll"+Ye, LOAD_DATA_API:"load"+Ye+".data-api"
	}
	, Je="dropdown-item", Ze="active", $e= {
		DATA_SPY: '[data-spy="scroll"]', ACTIVE:".active", NAV_LIST_GROUP:".nav, .list-group", NAV_LINKS:".nav-link", NAV_ITEMS:".nav-item", LIST_ITEMS:".list-group-item", DROPDOWN:".dropdown", DROPDOWN_ITEMS:".dropdown-item", DROPDOWN_TOGGLE:".dropdown-toggle"
	}
	, tn="offset", en="position", nn=function() {
		function n(t, e) {
			var n=this;
			this._element=t, this._scrollElement="BODY"===t.tagName?window:t, this._config=this._getConfig(e), this._selector=this._config.target+" "+$e.NAV_LINKS+","+this._config.target+" "+$e.LIST_ITEMS+","+this._config.target+" "+$e.DROPDOWN_ITEMS, this._offsets=[], this._targets=[], this._activeTarget=null, this._scrollHeight=0, Ve(this._scrollElement).on(Xe.SCROLL, function(t) {
				return n._process(t)
			}
			), this.refresh(), this._process()
		}
		var t=n.prototype;
		return t.refresh=function() {
			var e=this, t=this._scrollElement===this._scrollElement.window?tn: en, r="auto"===this._config.method?t:this._config.method, s=r===en?this._getScrollTop():0;
			this._offsets=[], this._targets=[], this._scrollHeight=this._getScrollHeight(), Ve.makeArray(Ve(this._selector)).map(function(t) {
				var e, n=Cn.getSelectorFromElement(t);
				if(n&&(e=Ve(n)[0]), e) {
					var i=e.getBoundingClientRect();
					if(i.width||i.height)return[Ve(e)[r]().top+s, n]
				}
				return null
			}
			).filter(function(t) {
				return t
			}
			).sort(function(t, e) {
				return t[0]-e[0]
			}
			).forEach(function(t) {
				e._offsets.push(t[0]), e._targets.push(t[1])
			}
			)
		}
		, t.dispose=function() {
			Ve.removeData(this._element, Be), Ve(this._scrollElement).off(Ye), this._element=null, this._scrollElement=null, this._config=null, this._selector=null, this._offsets=null, this._targets=null, this._activeTarget=null, this._scrollHeight=null
		}
		, t._getConfig=function(t) {
			if("string"!=typeof(t=h( {}
			, qe, "object"==typeof t&&t?t: {}
			)).target) {
				var e=Ve(t.target).attr("id");
				e||(e=Cn.getUID(Qe), Ve(t.target).attr("id", e)), t.target="#"+e
			}
			return Cn.typeCheckConfig(Qe, t, ze), t
		}
		, t._getScrollTop=function() {
			return this._scrollElement===window?this._scrollElement.pageYOffset: this._scrollElement.scrollTop
		}
		, t._getScrollHeight=function() {
			return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
		}
		, t._getOffsetHeight=function() {
			return this._scrollElement===window?window.innerHeight: this._scrollElement.getBoundingClientRect().height
		}
		, t._process=function() {
			var t=this._getScrollTop()+this._config.offset, e=this._getScrollHeight(), n=this._config.offset+e-this._getOffsetHeight();
			if(this._scrollHeight!==e&&this.refresh(), n<=t) {
				var i=this._targets[this._targets.length-1];
				this._activeTarget!==i&&this._activate(i)
			}
			else {
				if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null, void this._clear();
				for(var r=this._offsets.length;
				r--;
				) {
					this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&("undefined"==typeof this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])
				}
			}
		}
		, t._activate=function(e) {
			this._activeTarget=e, this._clear();
			var t=this._selector.split(",");
			t=t.map(function(t) {
				return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'
			}
			);
			var n=Ve(t.join(","));
			n.hasClass(Je)?(n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze), n.addClass(Ze)):(n.addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_LINKS+", "+$e.LIST_ITEMS).addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)), Ve(this._scrollElement).trigger(Xe.ACTIVATE, {
				relatedTarget: e
			}
			)
		}
		, t._clear=function() {
			Ve(this._selector).filter($e.ACTIVE).removeClass(Ze)
		}
		, n._jQueryInterface=function(e) {
			return this.each(function() {
				var t=Ve(this).data(Be);
				if(t||(t=new n(this, "object"==typeof e&&e), Ve(this).data(Be, t)), "string"==typeof e) {
					if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');
					t[e]()
				}
			}
			)
		}
		, o(n, null, [ {
			key:"VERSION", get:function() {
				return"4.1.1"
			}
		}
		, {
			key:"Default", get:function() {
				return qe
			}
		}
		]), n
	}
	(), Ve(window).on(Xe.LOAD_DATA_API, function() {
		for(var t=Ve.makeArray(Ve($e.DATA_SPY)), e=t.length;
		e--;
		) {
			var n=Ve(t[e]);
			nn._jQueryInterface.call(n, n.data())
		}
	}
	), Ve.fn[Qe]=nn._jQueryInterface, Ve.fn[Qe].Constructor=nn, Ve.fn[Qe].noConflict=function() {
		return Ve.fn[Qe]=Ge, nn._jQueryInterface
	}
	, nn), Pn=(on="."+(sn="bs.tab"), an=(rn=e).fn.tab, ln= {
		HIDE: "hide"+on, HIDDEN:"hidden"+on, SHOW:"show"+on, SHOWN:"shown"+on, CLICK_DATA_API:"click"+on+".data-api"
	}
	, hn="dropdown-menu", cn="active", un="disabled", fn="fade", dn="show", _n=".dropdown", gn=".nav, .list-group", mn=".active", pn="> li > .active", vn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', En=".dropdown-toggle", yn="> .dropdown-menu .active", Tn=function() {
		function i(t) {
			this._element=t
		}
		var t=i.prototype;
		return t.show=function() {
			var n=this;
			if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&rn(this._element).hasClass(cn)||rn(this._element).hasClass(un))) {
				var t, i, e=rn(this._element).closest(gn)[0], r=Cn.getSelectorFromElement(this._element);
				if(e) {
					var s="UL"===e.nodeName?pn: mn;
					i=(i=rn.makeArray(rn(e).find(s)))[i.length-1]
				}
				var o=rn.Event(ln.HIDE, {
					relatedTarget: this._element
				}
				), a=rn.Event(ln.SHOW, {
					relatedTarget: i
				}
				);
				if(i&&rn(i).trigger(o), rn(this._element).trigger(a), !a.isDefaultPrevented()&&!o.isDefaultPrevented()) {
					r&&(t=rn(r)[0]), this._activate(this._element, e);
					var l=function() {
						var t=rn.Event(ln.HIDDEN, {
							relatedTarget: n._element
						}
						), e=rn.Event(ln.SHOWN, {
							relatedTarget: i
						}
						);
						rn(i).trigger(t), rn(n._element).trigger(e)
					}
					;
					t?this._activate(t, t.parentNode, l):l()
				}
			}
		}
		, t.dispose=function() {
			rn.removeData(this._element, sn), this._element=null
		}
		, t._activate=function(t, e, n) {
			var i=this, r=("UL"===e.nodeName?rn(e).find(pn): rn(e).children(mn))[0], s=n&&r&&rn(r).hasClass(fn), o=function() {
				return i._transitionComplete(t, r, n)
			}
			;
			if(r&&s) {
				var a=Cn.getTransitionDurationFromElement(r);
				rn(r).one(Cn.TRANSITION_END, o).emulateTransitionEnd(a)
			}
			else o()
		}
		, t._transitionComplete=function(t, e, n) {
			if(e) {
				rn(e).removeClass(dn+" "+cn);
				var i=rn(e.parentNode).find(yn)[0];
				i&&rn(i).removeClass(cn), "tab"===e.getAttribute("role")&&e.setAttribute("aria-selected", !1)
			}
			if(rn(t).addClass(cn), "tab"===t.getAttribute("role")&&t.setAttribute("aria-selected", !0), Cn.reflow(t), rn(t).addClass(dn), t.parentNode&&rn(t.parentNode).hasClass(hn)) {
				var r=rn(t).closest(_n)[0];
				r&&rn(r).find(En).addClass(cn), t.setAttribute("aria-expanded", !0)
			}
			n&&n()
		}
		, i._jQueryInterface=function(n) {
			return this.each(function() {
				var t=rn(this), e=t.data(sn);
				if(e||(e=new i(this), t.data(sn, e)), "string"==typeof n) {
					if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');
					e[n]()
				}
			}
			)
		}
		, o(i, null, [ {
			key:"VERSION", get:function() {
				return"4.1.1"
			}
		}
		]), i
	}
	(), rn(document).on(ln.CLICK_DATA_API, vn, function(t) {
		t.preventDefault(), Tn._jQueryInterface.call(rn(this), "show")
	}
	), rn.fn.tab=Tn._jQueryInterface, rn.fn.tab.Constructor=Tn, rn.fn.tab.noConflict=function() {
		return rn.fn.tab=an, Tn._jQueryInterface
	}
	, Tn);
	!function(t) {
		if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
		var e=t.fn.jquery.split(" ")[0].split(".");
		if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
	}
	(e), t.Util=Cn, t.Alert=In, t.Button=An, t.Carousel=Dn, t.Collapse=bn, t.Dropdown=Sn, t.Modal=wn, t.Popover=On, t.Scrollspy=kn, t.Tab=Pn, t.Tooltip=Nn, Object.defineProperty(t, "__esModule", {
		value: !0
	}
	)
}

);
//# sourceMappingURL=bootstrap.min.js.map