var withDefaultProps = function (defaultProps, Cmp) {
    Cmp.defaultProps = defaultProps;
    // 返回重新的定义的属性类型组件，通过将原始组件的类型检查关闭，然后再设置正确的属性类型
    return Cmp;
};
function isFunction(value) {
    return typeof value === 'function';
}
export { withDefaultProps, isFunction };
//# sourceMappingURL=util.js.map