

var Class = function(parent, prototype){
    var fn = function(){
        this.init.apply(this, arguments);
    }
    if(parent){
        fn.prototype = new parent();
    }
    for(var p in prototype){
        fn.prototype[p] = prototype[p];
    }
    return fn;
}

var ecount = window.ecount = {};
var widget = window.widget = {
    input: {},
    button: {}
};

function define(controlType, id, name){
    var obj = {
        controlType: controlType,
        id: id,
        name: name
    };

    return {
        label: function(label){
          obj.label = label;
          return this;
        },

        value: function(value){
          //TODO 
            if(Array.isArray(value)){
              obj.values = value
            }else{
              obj.value = value;
            }
            return this;
        },

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

        handler: function(handler){
            obj.handler = handler;
            return this;
        },
        end: function(){
            return obj;
        }
    }
}

function create(items, $parent){
    items.forEach(function(item){
        var control = new window[item.controlType](item);
        control.render($parent);
    })
}