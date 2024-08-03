import { context } from "./../../game-js/main.js";

window.addEventListener("load", function () {
    context.setGame(new CatLifeGame());
});

export class CatLifeGame {
    constructor(context) {
        this.context = context;
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {

    }
}