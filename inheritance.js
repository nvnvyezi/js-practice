/**原型链继承 */
function Parent() {
  this.name = "parent";
}
Parent.prototype.say = function() {
  console.log(this.name);
};

function Child(name) {
  this.childName = name;
}
Child.prototype = new Parent();
Child.prototype.childSay = function() {
  console.log(this.childName);
};

const prototypeTest = new Child();

/**构造函数继承 */
function Parent(name) {
  this.parentName = name;
}
Parent.prototype.parentName = function() {
  console.log(this.parentName);
};
function Child(name, childName) {
  Parent.call(this, name);
  this.childName = childName;
}

const constructorTest = new Child("parentName", "childName");

/**组合继承 */
function Parent(name) {
  this.parentName = name;
}
Parent.prototype.parentSay = function() {
  console.log(this.parentName);
};
function Child(name, childName) {
  Parent.call(this, name);
  this.childName = childName;
}
Child.prototype = new Parent("prototype");

Child.prototype.childSay = function() {
  console.log(this.childName);
};
const test3 = new Child("parentName", "childName");

/**原型式继承 */
function _create(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

/**寄生式继承 */
function parasitic(obj) {
  const res = Object.create(obj);
  res.say = function() {
    console.log("parasitic");
  };
}

/**寄生组合式继承 */
function Parent(name) {
  this.parentName = name;
}
Parent.prototype.parentSay = function() {
  console.log(this.parentName);
};
function Child(parentName, childName) {
  Parent.call(this, parentName);
  this.childName = childName;
}
Child.prototype = _create(Parent.prototype);
Child.prototype.childSay = function() {
  console.log(this.childName);
};

const test4 = new Child("parentName", "childName");
