/**
 * Created by Administrator on 2016/8/25 0025.
 */
(function () {
    function Bullet() {
        Photo.call(this, "bullet.png");

        this._speedY = -7;
        this.addTickListener();
    }

    Bullet.prototype = new Photo();

    Bullet.prototype.addTickListener = function () {
        var tickHandler = function () {
            this.y += this._speedY;

            if (this.y < -15) {
                Ticker.removeListener(tickHandler);
                this.removeFromParentNode();
            }
        }.bind(this);

        Ticker.addListener(tickHandler);
    };


    window.Bullet=Bullet;
})();