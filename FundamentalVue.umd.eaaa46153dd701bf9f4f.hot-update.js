webpackHotUpdateFundamentalVue("FundamentalVue.umd",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Popover/Popover.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Popover/Popover.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_d069408_fundamental_vue_ui_node_modules_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/core-js/object/keys */ \"./node_modules/@babel/runtime-corejs2/core-js/object/keys.js\");\n/* harmony import */ var _Users_d069408_fundamental_vue_ui_node_modules_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_d069408_fundamental_vue_ui_node_modules_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Popper */ \"./src/components/Popper/index.js\");\n/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../mixins */ \"./src/mixins/index.ts\");\n/* harmony import */ var _Popper_helper_el_from_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Popper/helper/el-from-ref */ \"./src/components/Popper/helper/el-from-ref.js\");\n/* harmony import */ var _directives_click_outside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../directives/click-outside */ \"./src/directives/click-outside/index.js\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core */ \"./src/core/index.js\");\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvar popoverPlacementMapping = {\n  left: \"left\",\n  // default\n  right: \"right\"\n};\n\nvar PopoverPlacements = _Users_d069408_fundamental_vue_ui_node_modules_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(popoverPlacementMapping);\n\nvar isPlacement = function isPlacement(value) {\n  return PopoverPlacements.indexOf(value) >= 0;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"FdPopover\",\n  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_2__[\"FocusTrap\"], _mixins__WEBPACK_IMPORTED_MODULE_2__[\"Uid\"], _mixins__WEBPACK_IMPORTED_MODULE_2__[\"ClickOutside\"]],\n  directives: {\n    \"fd-is-inside\": _directives_click_outside__WEBPACK_IMPORTED_MODULE_4__[\"isInside\"],\n    \"fd-on-click-outside\": _directives_click_outside__WEBPACK_IMPORTED_MODULE_4__[\"onClickOutside\"],\n    \"fd-detects-outside-interaction\": _directives_click_outside__WEBPACK_IMPORTED_MODULE_4__[\"detectsOutsideInteraction\"]\n  },\n  model: {\n    prop: \"popoverVisible\",\n    event: \"visible\"\n  },\n  props: {\n    ariaLabel: {\n      type: String,\n      default: \"Popover\"\n    },\n    title: {\n      type: String,\n      default: \"Show\"\n    },\n    placement: {\n      type: String,\n      default: popoverPlacementMapping.left,\n      validator: isPlacement\n    },\n    noArrow: {\n      type: Boolean,\n      default: false\n    },\n    popoverVisible: {\n      type: Boolean,\n      default: false\n    }\n  },\n  computed: {\n    contextProps: function contextProps() {\n      return {\n        toggle: this.toggle,\n        show: this.show,\n        hide: this.hide,\n        visible: this.currentPopoverVisible\n      };\n    }\n  },\n  watch: {\n    popoverVisible: {\n      immediate: true,\n      handler: function handler(newValue) {\n        this.setCurrentPopoverVisible(newValue);\n      }\n    }\n  },\n  methods: {\n    setCurrentPopoverVisible: function setCurrentPopoverVisible(newValue) {\n      this.currentPopoverVisible = newValue;\n    },\n    handleItemClick: function handleItemClick(value) {\n      this.$emit(\"click\", value);\n      this.toggle();\n    },\n    hidePopover: function hidePopover() {\n      this.setCurrentPopoverVisible(false);\n      this.$emit(\"visible\", false);\n    },\n    hide: function hide() {\n      this.hidePopover();\n    },\n    show: function show() {\n      this.setCurrentPopoverVisible(true);\n      this.$emit(\"visible\", true);\n    },\n    toggle: function toggle() {\n      var newVisible = !this.currentPopoverVisible;\n      this.setCurrentPopoverVisible(newVisible);\n      this.$emit(\"visible\", newVisible);\n    }\n  },\n  data: function data() {\n    return {\n      currentPopoverVisible: this.popoverVisible || false\n    };\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvUG9wb3Zlci9Qb3BvdmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GdW5kYW1lbnRhbFZ1ZS9Qb3BvdmVyLnZ1ZT8xNDBhIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPEZkUG9wcGVyXG4gICAgOnBsYWNlbWVudD1cInBsYWNlbWVudFwiXG4gICAgOndpdGhBcnJvdz1cIndpdGhBcnJvd1wiXG4gICAgOnZpc2libGUuc3luYz1cInZpc2libGVcIlxuICA+XG4gICAgPHRlbXBsYXRlICNyZWZlcmVuY2U9XCJyZWZlcmVuY2VDb250ZXh0XCI+XG4gICAgICA8c2xvdCBuYW1lPVwiY29udHJvbFwiIHYtYmluZD1cInJlZmVyZW5jZUNvbnRleHRcIiAvPlxuICAgIDwvdGVtcGxhdGU+XG4gICAgPHRlbXBsYXRlICNkZWZhdWx0PVwiYm9keUNvbnRleHRcIj5cbiAgICAgIDxGZENsaWNrQXdheUNvbnRhaW5lclxuICAgICAgICByZWY9XCJib2R5XCJcbiAgICAgICAgOmFjdGl2ZT1cImJvZHlDb250ZXh0LnZpc2libGVcIlxuICAgICAgICBAY2xpY2tPdXRzaWRlPVwiYm9keUNvbnRleHQuaGlkZVwiXG4gICAgICA+XG4gICAgICAgIDxzbG90IHYtYmluZD1cImJvZHlDb250ZXh0XCIgLz5cbiAgICAgIDwvRmRDbGlja0F3YXlDb250YWluZXI+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9GZFBvcHBlcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgRmRQb3BwZXIsIHsgUExBQ0VNRU5UUyB9IGZyb20gXCIuLy4uL1BvcHBlclwiO1xuaW1wb3J0IHsgRm9jdXNUcmFwIGFzIEZkRm9jdXNUcmFwIH0gZnJvbSBcIi4vLi4vLi4vbWl4aW5zXCI7XG5pbXBvcnQgZWxGcm9tUmVmIGZyb20gXCIuLy4uL1BvcHBlci9oZWxwZXIvZWwtZnJvbS1yZWZcIjtcblxuaW1wb3J0IHtcbiAgZGV0ZWN0c091dHNpZGVJbnRlcmFjdGlvbixcbiAgb25DbGlja091dHNpZGUsXG4gIGlzSW5zaWRlXG59IGZyb20gXCIuLy4uLy4uL2RpcmVjdGl2ZXMvY2xpY2stb3V0c2lkZVwiO1xuaW1wb3J0IHsgQ2xpY2tPdXRzaWRlLCBVaWQgfSBmcm9tIFwiQC9taXhpbnNcIjtcbmltcG9ydCB7IHdhcm4gfSBmcm9tIFwiQC9jb3JlXCI7XG5cbmNvbnN0IHBvcG92ZXJQbGFjZW1lbnRNYXBwaW5nID0ge1xuICBsZWZ0OiBcImxlZnRcIiwgLy8gZGVmYXVsdFxuICByaWdodDogXCJyaWdodFwiXG59O1xuXG5jb25zdCBQb3BvdmVyUGxhY2VtZW50cyA9IE9iamVjdC5rZXlzKHBvcG92ZXJQbGFjZW1lbnRNYXBwaW5nKTtcbmNvbnN0IGlzUGxhY2VtZW50ID0gdmFsdWUgPT4gUG9wb3ZlclBsYWNlbWVudHMuaW5kZXhPZih2YWx1ZSkgPj0gMDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkZkUG9wb3ZlclwiLFxuICBtaXhpbnM6IFtGZEZvY3VzVHJhcCwgVWlkLCBDbGlja091dHNpZGVdLFxuICBkaXJlY3RpdmVzOiB7XG4gICAgXCJmZC1pcy1pbnNpZGVcIjogaXNJbnNpZGUsXG4gICAgXCJmZC1vbi1jbGljay1vdXRzaWRlXCI6IG9uQ2xpY2tPdXRzaWRlLFxuICAgIFwiZmQtZGV0ZWN0cy1vdXRzaWRlLWludGVyYWN0aW9uXCI6IGRldGVjdHNPdXRzaWRlSW50ZXJhY3Rpb25cbiAgfSxcbiAgbW9kZWw6IHtcbiAgICBwcm9wOiBcInBvcG92ZXJWaXNpYmxlXCIsXG4gICAgZXZlbnQ6IFwidmlzaWJsZVwiXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgYXJpYUxhYmVsOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJQb3BvdmVyXCIgfSxcbiAgICB0aXRsZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiU2hvd1wiIH0sXG4gICAgcGxhY2VtZW50OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBwb3BvdmVyUGxhY2VtZW50TWFwcGluZy5sZWZ0LFxuICAgICAgdmFsaWRhdG9yOiBpc1BsYWNlbWVudFxuICAgIH0sXG4gICAgbm9BcnJvdzogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxuICAgIHBvcG92ZXJWaXNpYmxlOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjb250ZXh0UHJvcHMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b2dnbGU6IHRoaXMudG9nZ2xlLFxuICAgICAgICBzaG93OiB0aGlzLnNob3csXG4gICAgICAgIGhpZGU6IHRoaXMuaGlkZSxcbiAgICAgICAgdmlzaWJsZTogdGhpcy5jdXJyZW50UG9wb3ZlclZpc2libGVcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIHBvcG92ZXJWaXNpYmxlOiB7XG4gICAgICBpbW1lZGlhdGU6IHRydWUsXG4gICAgICBoYW5kbGVyKG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudFBvcG92ZXJWaXNpYmxlKG5ld1ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzZXRDdXJyZW50UG9wb3ZlclZpc2libGUobmV3VmFsdWUpIHtcbiAgICAgIHRoaXMuY3VycmVudFBvcG92ZXJWaXNpYmxlID0gbmV3VmFsdWU7XG4gICAgfSxcbiAgICBoYW5kbGVJdGVtQ2xpY2sodmFsdWUpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJjbGlja1wiLCB2YWx1ZSk7XG4gICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH0sXG4gICAgaGlkZVBvcG92ZXIoKSB7XG4gICAgICB0aGlzLnNldEN1cnJlbnRQb3BvdmVyVmlzaWJsZShmYWxzZSk7XG4gICAgICB0aGlzLiRlbWl0KFwidmlzaWJsZVwiLCBmYWxzZSk7XG4gICAgfSxcbiAgICBoaWRlKCkge1xuICAgICAgdGhpcy5oaWRlUG9wb3ZlcigpO1xuICAgIH0sXG4gICAgc2hvdygpIHtcbiAgICAgIHRoaXMuc2V0Q3VycmVudFBvcG92ZXJWaXNpYmxlKHRydWUpO1xuICAgICAgdGhpcy4kZW1pdChcInZpc2libGVcIiwgdHJ1ZSk7XG4gICAgfSxcbiAgICB0b2dnbGUoKSB7XG4gICAgICBjb25zdCBuZXdWaXNpYmxlID0gIXRoaXMuY3VycmVudFBvcG92ZXJWaXNpYmxlO1xuICAgICAgdGhpcy5zZXRDdXJyZW50UG9wb3ZlclZpc2libGUobmV3VmlzaWJsZSk7XG4gICAgICB0aGlzLiRlbWl0KFwidmlzaWJsZVwiLCBuZXdWaXNpYmxlKTtcbiAgICB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRQb3BvdmVyVmlzaWJsZTogdGhpcy5wb3BvdmVyVmlzaWJsZSB8fCBmYWxzZVxuICAgIH07XG4gIH1cbn07XG48L3NjcmlwdD5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUF5QkE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQXRFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Popover/Popover.vue?vue&type=script&lang=js&\n");

/***/ })

})