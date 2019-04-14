//페이지 계층 
var esd007m = new EcInventoryPage({
  onInitHeader: function (header) {
    var userData1 = define("EcInput", "input1", "input1")
      .value(1)
      .handler({
        "click": function () {
          alert(1);
        },
        "change": function () {}
      }).end();

    header.push(userData1);
  },

  onIinitContents: function (contents) {

    var form = define("EcForm", "form", "form");

    var input1 = define("EcInput", "input1", "input1")
      .value('contents input 1')
      .end();

    var input2 = define("EcInput", "input2", "input2")
      .value('contents input 2')
      .end();

    var checkBox = define("EcCheckbox", "checkBox", "checkBox")
      .label(["회계", "인사/급여", "그룹웨어"])
      .value(["0", "1", "2"])
      .end();
      
    var radioButton = define("EcRadioButton", "radioButton", "radioButton")
      .label(["radio1", "radio2"])
      .value(["1", "2"])
      .end();

    //# form에 add 로 widget을 추가 하는 방법
    //# index
    //1. add function으로 form객체에 itmes property를 생성
    // 그리고 render시 items property를 사용해 render한다.

    //TODO refactoring 
    //### 요구 조건 2
    //* define에서 만드는 것이 아니라 g.form()해서 form전용 객체를 만들어 그 객체에 add를 해서 form을 구성해야 할것같아요.
    //* form.add().add()....end()했을때 form 자체가 add로 추가한 Object를 반환하도록 
    contents.push(form.add(input1).add(input2).add(checkBox).add(radioButton).end());
  },

  onInitFooter: function (footer) {
    var userData1 = define("EcButton", "new", "new").end();
    footer.push(userData1);

    var userData2 = define("EcButton", "save", "save").end();
    footer.push(userData2);
  },
  onInitControl: function (cid, control) {
    if (cid == "input1") {
      control.value(2);
    }
  },
  onLoadComplete: function () {
    this.header.getControl("input1").setValue(4444);
  },
  onInitLoading: function (loadedCount) {
    $("body").append("<span>" + loadedCount + "</span>");
  },

  onClickButton: function (cid) {

  },

  //1. header, contents(getControl 메소드 구현), footer, ecButton  class
  //2. footer에 new 버튼 추가
  //3. new 버튼 클릭시 input2의 값을 4로 변경
  onheaderbtn1: function (e) {
    // this.contents.getControl("input2").setValue(4000);
    this.contents.getControl("form").getControl("input2").setValue(4000);
  },

  oncontentsform: function(e) {
  },

  onfooternew: function (e) {
    this.header.getControl("input1").setValue(1111);
  },

  onfootersave: function (e) {
    //TODO content에 itemList에 FORM이 있을 경우 
    //form안에 있는 itemList를 어떻게 하면 찾을 수 있을까 ? 
    // this.contents.getControl("input1").setValue("chage val from footer save button");
    this.contents.getControl("form").getControl("input2").setValue(4000);

  },

  onChangeControl: function () {},



});