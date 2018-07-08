/*敌人*/
var Enemy = function (opts) {
    this.opts = opts || {};
    //console.log('Enemy opts',opts);
    //调用父类方法
    Element.call(this, opts);

    //特有属性状态和图标
    this.status = 'normal';//normal、booming、noomed
    this.enemyIcon = opts.enemyIcon;
    this.enemyBoomIcon = opts.enemyBoomIcon;
    this.boomCount = 0;
};
//继承Element方法
inheritPrototype(Enemy, Element);

//方法：绘制敌人
Enemy.prototype.draw = function () {
    if (this.enemyIcon && this.enemyBoomIcon) {

        switch (this.status) {
            case 'normal':
                var enemyIcon = new Image();
                enemyIcon.src = this.enemyIcon;
                //console.log('enemyIcon.src',enemyIcon.src);
                //console.log('this.size',this.size);
                ctx.drawImage(enemyIcon, this.x, this.y, this.size, this.size);
                break;
            case 'booming':
                var enemyBoomIcon = new Image();
                enemyBoomIcon.src = this.enemyBoomIcon;
                ctx.drawImage(enemyBoomIcon, this.x, this.y, this.size, this.size);
                break;
            case 'boomed':
                ctx.clearRect(this.x, this.y, this.size, this.size);
                break;
            default:
                break;
        }
    }
    return this;
};

//方法：down 向下移动
Enemy.prototype.down = function () {
    this.move(0, this.size);
    return this;

};

//console.log('Enemy opts',opts);
//方法：左右移动
Enemy.prototype.direction = function (direction) {
    if (direction === 'right') {
        this.move(this.speed, 0);
    } else {
        this.move(-this.speed, 0);
    }
    //console.log(this.speed);
    return this;
};

//方法：敌人爆炸得分
Enemy.prototype.booming = function () {
    this.status = 'booming';
    this.boomCount += 1;
    if (this.boomCount > 4) {
        this.status = 'boomed';
    }
    return this;
}