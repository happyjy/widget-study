var EcCheckbox = class {
  constructor(options) {
    this.handler = {};
    // this.controlType = options.controlType;
    // this.id = options.id;
    // this.name = options.name;
    $.extend(this, options);
    if (options.handler) {
      $.extend(this.handler, options.handler);
    }

    this.template = [];
    options.data.forEach(v => {
      var t = `<input type='checkbox' id=${options.id} name=${options.name} value=${v.value}>${v.label}</input>`;

      $(t).change( e => {console.log("123")} );

      this.template.push(`<input type='checkbox' id=${options.id} name=${options.name} value=${v.value}>${v.label}</input>`);
    });
  }

  render($parent) {
    this.$el = $(this.template);
    debugger;
    this.template.forEach( t => {
      $($(t)[0]).change( e => { console.log("123123")});

      // $(t).change( e => {
      //   this.delegator.triggerEvent("button.click", {
      //     id: this.id,
      //     containerName: this.containerName,
      //     __self: this
      //   });
      // });
      // $(t).on('change', e => {
      //   this.delegator.triggerEvent("button.click", {
      //     id: this.id,
      //     containerName: this.containerName,
      //     __self: this
      //   });
      // });
      
    });
    // this.$el.click(function () {
    //   this.delegator.triggerEvent("control.click", {
    //     cid: this.cid,
    //     value: value,
    //     container: this.container,
    //     __self: this
    //   });
    // });

    // debugger;
    // this.$el.click(function () {
    //   this.delegator.triggerEvent("button.click", {
    //     cid: this.id,
    //     value: value,
    //     continer: this.container,
    //     __self: this
    //   });
    // });

    $parent && this.$el.appendTo($parent);
  }

  setValue(value) {
    this.$el.val(value);
  }
};