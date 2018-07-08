/*父类：包含x y speed move() draw()*/
var Element = function (opts) {
        this.opts = opts || {};
        //设置坐标和尺寸
        //console.log('Element opts',opts);
        this.x = opts.x;
        //console.log('Element opts.x',opts.x);
        this.y = opts.y;
        this.size = opts.size;
        this.speed = opts.speed;
};

Element.prototype.move = function (x, y) {
        var addX = x || 0;
        var addY = y || 0;
        this.x += addX;
        this.y += addY;
};

//继承原型的函数
function inheritPrototype(subType, superType) {
        var proto = Object.create(superType.prototype);
        proto.constructor = subType;
        subType.prototype = proto;
}