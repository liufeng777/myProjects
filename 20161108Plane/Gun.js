/**
 * Created by Administrator on 2016/8/25 0025.
 */
(function () {
    function Gun() {
        Photo.call(this,"gun.png");
        this.x=250;
        this.y=350
        this.css("position","absolute");
    }

    Gun.prototype=new Photo();
    Gun.prototype.moveLeft=function () {
        this.x-=5;
    };
    Gun.prototype.moveRight=function () {
        this.x+=5;
    };
    window.Gun=Gun;
})();