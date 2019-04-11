

var Class = function(parent, prototype){
  var fn = function(){
    this.init.apply(this, arguments);
  };
  if(parent){
    fn.prototype = new parent();
  }
  for(var p in prototype){
    fn.prototype[p] = prototype[p];
  }
  return fn;
};

var ecount = window.ecount = {};
var widget = window.widget = {
  input: {},
  button: {}
};

function define(controlType, id, name){
  var obj = {
    controlType: controlType,
    id: id,
    name: name,
    data: []
  };

  return {


    add: function(item){
      //# obj.item
      //- form에 추가할 widget들을 array 형태로 담는다. 

      //TODO refactoring 대상
      if(!obj.items){
        obj.items = [];
      }
      obj.items.push(item)
      // !obj.item && obj.item.push(item);
      return this;
    },
    
    label: function(labels){
      this.setAttr("label", labels);
      return this;
    },

    value: function(value){
      // adata = $.isArray(value) ? adata : [adata];
      if($.isArray(value)){
        this.setAttr("value", value);      
      }else{
        obj.value = value;
      }
      return this;
    },

    // value: function(value){
    //   obj.value = value;
    //   return this;
    // },

    setAttr: function(aname, adata){
      if(obj.data.length === 0){
        obj.data.push({});
      }

      for(var i=0, len = adata.length, value; i<len; i++){
        value = adata[i];
        if(obj.data[i]){
          obj.data[i][aname] = value;
        }else{
          var a = {};
          a[aname] = value;
          obj.data.push(a);
        }
      }
    },

    handler: function(handler){
      obj.handler = handler;
      return this;
    },

    end: function(){
      return obj;
    }
  };
}

function create(items, $parent){
  items.forEach(function(item){
    var control = new window[item.controlType](item);
    control.render($parent);
  });
}