/**
 * Created by Administrator on 2016/8/25 0025.
 */
(function () {
    function Plane(imageUrl) {
        Photo.call(this,imageUrl);
        this.x=550;
        this.y=20;
        this._speedX=-4;
        this.addListener();
    }

    Plane.prototype=new Photo();
    Plane.prototype.addListener=function () {
        var tickerListener =function () {
            this.x+=this._speedX;
            if(this.x<=-69){
                Ticker.removeListener(tickerListener);
                Plane.removePlane(this);
            }
        }.bind(this);
        Ticker.addListener(tickerListener);
    };
    Plane.createPlane = function () {
        var index = Math.floor(Math.random() * Plane.__planeImageUrls.length)
        var p = new Plane(Plane.__planeImageUrls[index]);
        Plane.__planes.push(p);
        return p;
    };

    Plane.removePlane = function (plane) {
        Plane.__planeImageUrls.removeItem(plane);
        plane.removeFromParentNode();
    };

    Plane.__planeImageUrls = [
        "plane0001.png",
        "plane0002.png",
        "plane0003.png",
        "plane0004.png",
        "plane0005.png"
    ];
    Plane.__planes = [];


    window.Plane=Plane;
})();