import { Fragment as e, Teleport as t, Transition as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createTextVNode as s, createVNode as c, normalizeClass as l, openBlock as u, renderList as d, renderSlot as f, toDisplayString as p, withCtx as m, withModifiers as h } from "vue";
//#region \0plugin-vue:export-helper
var g = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, _ = ["disabled", "aria-disabled"], v = /*#__PURE__*/ g({
	__name: "Button",
	props: {
		variant: {
			type: String,
			default: "primary",
			validator: (e) => [
				"primary",
				"secondary",
				"danger"
			].includes(e)
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		return (t, n) => (u(), a("button", {
			class: l(["ts-btn", `ts-btn--${e.variant}`]),
			disabled: e.disabled,
			"aria-disabled": e.disabled
		}, [f(t.$slots, "default", {}, void 0, !0)], 10, _));
	}
}, [["__scopeId", "data-v-3aa52db9"]]), y = { class: "ts-input-wrapper" }, b = {
	key: 0,
	class: "ts-input-label"
}, x = [
	"value",
	"placeholder",
	"disabled",
	"aria-invalid",
	"aria-describedby"
], S = {
	key: 1,
	id: "input-error",
	class: "ts-input-error",
	role: "alert"
}, C = /*#__PURE__*/ g({
	__name: "Input",
	props: {
		modelValue: {
			type: String,
			default: ""
		},
		label: {
			type: String,
			default: ""
		},
		placeholder: {
			type: String,
			default: ""
		},
		error: {
			type: String,
			default: ""
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:modelValue"],
	setup(e) {
		return (t, n) => (u(), a("div", y, [
			e.label ? (u(), a("label", b, p(e.label), 1)) : i("", !0),
			o("input", {
				class: l(["ts-input", { "ts-input--error": e.error }]),
				value: e.modelValue,
				placeholder: e.placeholder,
				disabled: e.disabled,
				"aria-invalid": !!e.error,
				"aria-describedby": e.error ? "input-error" : void 0,
				onInput: n[0] ||= (e) => t.$emit("update:modelValue", e.target.value)
			}, null, 42, x),
			e.error ? (u(), a("span", S, p(e.error), 1)) : i("", !0)
		]));
	}
}, [["__scopeId", "data-v-a1ed7790"]]), w = /*#__PURE__*/ g({
	__name: "Card",
	props: { padding: {
		type: String,
		default: "md",
		validator: (e) => [
			"sm",
			"md",
			"lg",
			"none"
		].includes(e)
	} },
	setup(e) {
		return (t, n) => (u(), a("div", { class: l(["ts-card", `ts-card--${e.padding}`]) }, [f(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-15b8d42e"]]), T = ["aria-label"], E = { class: "ts-modal-header" }, D = { class: "ts-modal-title" }, O = { class: "ts-modal-body" }, k = /*#__PURE__*/ g({
	__name: "Modal",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		title: {
			type: String,
			default: ""
		}
	},
	emits: ["update:modelValue"],
	setup(e) {
		return (n, s) => (u(), r(t, { to: "body" }, [e.modelValue ? (u(), a("div", {
			key: 0,
			class: "ts-modal-overlay",
			onClick: s[1] ||= h((e) => n.$emit("update:modelValue", !1), ["self"])
		}, [o("div", {
			class: "ts-modal",
			role: "dialog",
			"aria-label": e.title,
			"aria-modal": "true"
		}, [o("div", E, [o("h3", D, p(e.title), 1), o("button", {
			class: "ts-modal-close",
			"aria-label": "Cerrar",
			onClick: s[0] ||= (e) => n.$emit("update:modelValue", !1)
		}, " ✕ ")]), o("div", O, [f(n.$slots, "default", {}, void 0, !0)])], 8, T)])) : i("", !0)]));
	}
}, [["__scopeId", "data-v-5b1be406"]]), A = { class: "ts-table-wrapper" }, j = { class: "ts-table" }, M = { class: "ts-table-head" }, N = ["onClick"], P = { key: 0 }, F = ["colspan"], I = /*#__PURE__*/ g({
	__name: "Table",
	props: {
		columns: {
			type: Array,
			required: !0
		},
		rows: {
			type: Array,
			required: !0
		}
	},
	emits: ["row-click"],
	setup(t) {
		return (n, r) => (u(), a("div", A, [o("table", j, [o("thead", M, [o("tr", null, [(u(!0), a(e, null, d(t.columns, (e) => (u(), a("th", {
			key: e.key,
			class: "ts-table-th",
			scope: "col"
		}, p(e.label), 1))), 128))])]), o("tbody", null, [(u(!0), a(e, null, d(t.rows, (r, i) => (u(), a("tr", {
			key: i,
			class: "ts-table-row",
			onClick: (e) => n.$emit("row-click", r)
		}, [(u(!0), a(e, null, d(t.columns, (e) => (u(), a("td", {
			key: e.key,
			class: "ts-table-td"
		}, [f(n.$slots, e.key, { row: r }, () => [s(p(r[e.key]), 1)], !0)]))), 128))], 8, N))), 128)), t.rows.length === 0 ? (u(), a("tr", P, [o("td", {
			colspan: t.columns.length,
			class: "ts-table-empty"
		}, [f(n.$slots, "empty", {}, () => [r[0] ||= s("No hay registros todavía", -1)], !0)], 8, F)])) : i("", !0)])])]));
	}
}, [["__scopeId", "data-v-4450b8f0"]]), L = /*#__PURE__*/ g({
	__name: "Badge",
	props: { variant: {
		type: String,
		default: "default",
		validator: (e) => [
			"default",
			"success",
			"warning",
			"danger",
			"info"
		].includes(e)
	} },
	setup(e) {
		return (t, n) => (u(), a("span", { class: l(["ts-badge", `ts-badge--${e.variant}`]) }, [f(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-40608236"]]), R = { class: "ts-toast-message" }, z = /*#__PURE__*/ g({
	__name: "Toast",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		message: {
			type: String,
			default: ""
		},
		variant: {
			type: String,
			default: "success",
			validator: (e) => [
				"success",
				"error",
				"warning",
				"info"
			].includes(e)
		}
	},
	emits: ["update:modelValue"],
	setup(e) {
		return (s, d) => (u(), r(t, { to: "body" }, [c(n, { name: "ts-toast" }, {
			default: m(() => [e.modelValue ? (u(), a("div", {
				key: 0,
				class: l(["ts-toast", `ts-toast--${e.variant}`]),
				role: "alert",
				"aria-live": "polite"
			}, [o("span", R, p(e.message), 1), o("button", {
				class: "ts-toast-close",
				"aria-label": "Cerrar notificación",
				onClick: d[0] ||= (e) => s.$emit("update:modelValue", !1)
			}, " ✕ ")], 2)) : i("", !0)]),
			_: 1
		})]));
	}
}, [["__scopeId", "data-v-2cc5dfd1"]]), B = { class: "ts-empty" }, V = {
	class: "ts-empty-icon",
	"aria-hidden": "true"
}, H = { class: "ts-empty-title" }, U = {
	key: 0,
	class: "ts-empty-description"
}, W = /*#__PURE__*/ g({
	__name: "EmptyState",
	props: {
		title: {
			type: String,
			default: "No hay datos todavía"
		},
		description: {
			type: String,
			default: ""
		},
		actionLabel: {
			type: String,
			default: ""
		}
	},
	emits: ["action"],
	setup(e) {
		return (t, n) => (u(), a("div", B, [
			o("div", V, [f(t.$slots, "icon", {}, () => [n[1] ||= s("📭", -1)], !0)]),
			o("h3", H, p(e.title), 1),
			e.description ? (u(), a("p", U, p(e.description), 1)) : i("", !0),
			e.actionLabel ? (u(), a("button", {
				key: 1,
				class: "ts-empty-action",
				onClick: n[0] ||= (e) => t.$emit("action")
			}, p(e.actionLabel), 1)) : i("", !0)
		]));
	}
}, [["__scopeId", "data-v-35a6468e"]]);
//#endregion
export { L as Badge, v as Button, w as Card, W as EmptyState, C as Input, k as Modal, I as Table, z as Toast };
