import { Card } from '../../../Card';
import { Monster } from "../helpers/Monster";

const id = 'pukachu';

class pukachu extends Monster {
    constructor() {
        super();
        this.id = id;
        this.pack = 'pack1';
        this.kind = 'door';
        this.type = 'monster';
        this.treasure = 2;
    }
    
    badThing(player, table) {
        player.hand.map(table.discard);
        player.hand = [];
    }
    
    getAttackFor(players) {
        return 6;
    }
    onFightEnded(fight, table) {
        if(fight.players.length == 1 && fight.players[0].modifiers.length == 0) {
            const player = fight.players[0].player;
            if (player.hasClassAdvantages('warrior')) {
                if (player.level >= 6) {
                    player.level++;
                }
            } else {
                if (player.level > 6) {
                    player.level++;
                }
            }
        }        
    }
}
Card.cards[id] = new pukachu();