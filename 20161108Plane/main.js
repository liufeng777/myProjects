/**
 * Created by Administrator on 2016/8/25 0025.
 */
(function () {
    var game=document.querySelector("#game");
    var gun;

    function createGun() {
        gun=new Gun();
        game.appendChild(gun.htmlNode);
    }

    function addBullet() {
        var b = new Bullet();
        b.x = gun.x + 21;
        b.y = gun.y;
        game.appendChild(b.htmlNode);
    }
    function startAddPlane() {
        game.appendChild(Plane.createPlane().htmlNode);

        setTimeout(startAddPlane, Math.floor(Math.random() * 2000 + 1000));
    }
    function gunMove() {
        document.onkeydown=function (e) {
            switch (e.key){
                case "ArrowLeft":
                    gun.moveLeft();//按左箭头枪会向左移动
                    break;
                case "ArrowRight":
                    gun.moveRight();
                    break;
                case " ":
                    addBullet();
                    break;
            }
        }
    }

    function startTick() {
        Ticker.start();
    }
    (function () {
        createGun();
        gunMove();
        startTick();
        startAddPlane();
    })();
})();