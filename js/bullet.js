/*子弹*/
var Bullet = function (opts) {
    this.opts = opts || {};
    Element.call(this, opts);
};
inheritPrototype(Bullet, Element);
//方法：让子弹飞
Bullet.prototype.fly = function () {
    this.move(0, -this.speed);
    return this;
};
//方法：绘制子弹
Bullet.prototype.draw = function () {
    ctx.beginPath();
    ctx.strokeStyle = '#fff';
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y - CONFIG.bulletSize);
    //console.log('bulletSize:'+this.opts.bulletSize);
    ctx.closePath();
    ctx.stroke();
    //console.log('x:'+this.x,' y:'+this.y);
    return this;
};
