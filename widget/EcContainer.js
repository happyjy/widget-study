var EcContainer = class {
  constructor(options) {
    this.itemList = [];

    this.events = new Delegator();
    this.events.register("button.click", e => {
      debugger;
      this.delegator.triggerEvent("button.click", e)
    });

    options.forEach(item => {
      item.containerName = options.containerName;
      item.delegator = this.events;
      var control = new window[item.controlType](item);
      control.render($("#" + options.containerName));
      this.itemList.push(control);
    });
  }

  render() {

  }

  //#TODO 고민필요
  //* itemList는 현재 form이다. 
  //* 여기 없다면 FORM에서 id를 찾는 것으로 변경가능한가? 
  getControl(id) {
    var control = this.itemList.filter(function (_) {
      return _.id == id
    });
    return control.length > 0 ? control[0] : null;
  }
};

var EcHeader = class extends EcContainer {
  constructor(options) {
    options.containerName = "header";
    super(options)
  }
};
var EcContents = class extends EcContainer {
  constructor(options) {
    options.containerName = "contents";
    super(options)
  }
};
var EcFooter = class extends EcContainer {
  constructor(options) {
    options.containerName = "footer";
    super(options)
  }
};