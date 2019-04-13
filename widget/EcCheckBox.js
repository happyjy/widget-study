var EcCheckbox = class {
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
      this.template.push(`<input type='checkbox' name=${options.name} value=${v.value}>${v.label}</input>`);
    });
    debugger;
  }

  render($parent) {
    this.$el = $(this.template);
    // $el.change(this.handler["mousedown"].bind(this));
    // $el.change(this.handler["change"].bind(this));
    if (this.handler["click"]) {
      debugger;
      this.$el.click(function () {
        this.delegator.triggerEvent("control.click", {
          cid: this.cid,
          value: vlaue,
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