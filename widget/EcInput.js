var EcInput = class {
  constructor(options){
    this.handler = {};
    this.controlType = options.controlType;
    this.id = options.id;
    this.name = options.name;

    if(options.handler){
      $.extend(this.handler, options.handler);
    }
    this.template = "<input type='text' name='" + options.name + "' value='" + options.value + "'/>";
  }
  render($parent){
    this.$el = $(this.template);
    if(this.handler["click"]){
      this.$el.click(function(){
        this.delegator.triggerEvent("control.click", {          
          cid: this.cid,
          value: vlaue
        });
      });
    }
    this.$el.appendTo($parent);
  }

  setValue(value){
    this.$el.val(value);
  }
};