    /**
 * Created by ionagamed on 8/13/16.
 */

import { Card } from '../../../Card';

const id = 'ghoulfiends';

class ghoulfiends extends Card {
    constructor() {
        super();
        this.id = id;
        this.pack = 'pack1';
        this.kind = 'door';
        this.type = 'monster';
        this.treasure = 2;
    }
    
    /*
     TODO: do not use item
     */
    
    badThing(player, table) {
        var m = 50;
        table.players.map(x => {
            if (x.level < m)
                m = x.level;
        });
        if(m != 50)
            player.level = m;
    }
    
    getAttackFor(players) {
        return 8;
    }
}
Card.cards[id] = new ghoulfiends();