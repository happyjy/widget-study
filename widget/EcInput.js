var EcInput = class {
  constructor(options) {
    this.handler = {};
    this.controlType = options.controlType;
    this.id = options.id;
    this.name = options.name;

    if (options.handler) {
      $.extend(this.handler, options.handler);
    }
    this.template = "<input type='text' name='" + options.name + "' value='" + options.value + "'/>";

    this.$el = $(this.template);
  }

  render($parent) {
    /**
     * ESD007M.js > onInitHeader > handelr({}) 이코드 때문에 
     * 
     * if(this.handler["click"]) {}  사용된것임
     *     
     *  var userData1 = define("EcInput", "input1", "input1")
                          .value(1)
                          .handler({
                            "click": function () {
                              alert(1);
                            },
                            "change": function () {}
                          }).end();
     */
    // if (this.handler["click"]) {
    this.$el.click(function () {
      this.delegator.triggerEvent("control.click", {
        cid: this.cid,
        value: value
      });
    });
    // }
    this.$el.appendTo($parent);
  }

  setValue(value) {
    this.$el.val(value);
  }
};