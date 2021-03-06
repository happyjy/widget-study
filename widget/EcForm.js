//[done]TODO var availiable  = class{} 이런식으로 하지 말라고 했던 문서가 기억남 확인 후 수정 필요
// 아래 사이트 인데 new를 안썻을때 어떤 문제가 생기나에 대한 문서와 헷갈림. 
//https://github.com/FEDevelopers/tech.description/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-%EC%82%AC%EC%9A%A9%EB%90%98%EB%8A%94-this%EC%97%90-%EB%8C%80%ED%95%9C-%EC%84%A4%EB%AA%85-1#42-%EC%8B%A4%EC%88%98-new-%EA%B9%9C%EB%B9%A1%ED%95%A0-%EB%95%8C
var EcForm = class {
  constructor(options) {
    $.extend(this, options);
    this.template = `<div style="border: 2px solid black;">
                          <ul id="example" style="">
                            <li id="form">
                            
                            </li>
                          </ul>
                      </div>`;
    // `<div style="border: 2px solid black;">
    //   <ul id="example" style="">
    //     <li id="form">
    //       <ul>
    //         <li style="padding-left:10px">AAAAAA</li>
    //         <li>BBBBBB</li>
    //       </ul>
    //       <ul>
    //         <li style="padding-left:10px">AAAAAA</li>
    //         <li>BBBBBB</li>
    //       </ul>
    //     </li>
    //   </ul>
    // </div>`;


    this.events = new Delegator();
    this.events.register("button.click", e => {
      this.delegator.triggerEvent("button.click", e);
    })

    //#refactoring
    //EcContainer에 있는 것과같음 공통으로 빼는 것을 생각해 볼 필요 가 있음
    this.itemList = [];
    options.items.forEach(item => {
      item.containerName = options.containerName;
      item.delegator = this.events;
      var control = new window[item.controlType](item);
      control.render();
      this.itemList.push(control);
    });

  }

  //TODO render function이 각 widget 마다 반복 된다. 고민 해보기 
  render($parent) {
    this.$el = $(this.template);
    var form = this.$el.find("#form");
    var rows = '';
    this.itemList.forEach(item => {
      var row = `<ul><li style="padding-left:10px">${item.name}</li> <li>((widget))</li></ul>`
      //TODO tempalte에 delegator 심어주기 있어요 
      /**
         #replace 2nd param
        array type일때 ['a', 'b']이것은 
        => ((widget))에 'a','b'로 들어간다.
        => checkbox일때 item.template은 배열인데 ((widget))에 잘 replace된다.
       */
      rows += row.replace("((widget))", item.template);
      this.$el.change( e=> {console.log("123")});
    });
    form.append(rows);
    $parent.append(this.$el);

    this.$el.on("click", e => {
      this.delegator.triggerEvent("form.click", {
        id: this.id,
        containerName: this.containerName,
        __self: this
      });
    });
  }

  getControl(id) {
    var control = this.itemList.filter(function (_) {
      return _.id == id
    });
    return control.length > 0 ? control[0] : null;
  }
};