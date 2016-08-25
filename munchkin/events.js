import { Card } from '../logic/Card';
import { Player } from '../logic/Player';
import * as global from './munchkin.js';
import server from '../logic/Server';
import { load, create_lower, create_info, create_cards, create_buttons } from './load.js';

export function over(obj)
{
    obj.width *= 2;
    obj.height *= 2;
    obj.y = global.game.height - obj.height / 2;
    for (var i = obj.iter + 1; i < global.player.hand.length; i++) 
        global.cards[i].sendToBack();
    global.down_lower.sendToBack();
    for (var i = 0; i <= obj.iter; i++) 
        global.cards[i].bringToTop();
}
export function out(obj)
{
    obj.width /= 2;
    obj.height /= 2;
    obj.y = global.game.height - obj.height / 2;
}
export function down(obj)
{
    var oo = Card.byId(obj.key.substr(6));  
    if (oo.canBeWielded(global.player, global.table)){
        /*global.player.wield(obj.key.substr(6), global.table);
        console.log(global.player);
        global.cards[i].splise();
        global.player.hand[i].splise();
        global.cards[global.player.hand.length - 1] = undefined;
        create_crads();*/
    }
}

export function sever_connected() {
    global.connected = true;
}

export function startGame() {
    while(!global.connected);
    server.player = global.player;
    server.table = global.table;
    server.play();
    server.start();
    server.resurrect();
    create_cards();
    console.log(global.player);
    global.mainshadow.visible = false;
    global.buttonStartGame.visible = false;
    create_cards();
}