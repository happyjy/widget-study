var EcRadioButton = class {
  constructor(options) {
    this.handler = {};
    this.controlType = options.controlType;
    this.id = options.id;
    this.name = options.name;

    if (options.handler) {
      $.extend(this.handler, options.handler);
    }

    this.template = [];
    options.data.forEach(v => {
      this.template.push(`<input type='radio' name=${options.name} value=${v.value}>${v.label}</input>`);
    });
  }

  render($parent) {
    this.$el = $(this.template);
    if (this.handler["click"]) {
      debugger;
      this.$el.click(function () {
        this.delegator.triggerEvent("control.click", {
          cid: this.cid,
          value: value,
          container: this.container,
          __self: this
        });
      });
    }
    this.$el.appendTo($parent);
  }

  setValue(value) {
    this.$el.val(value);
  }
};