import { Card } from '../../../Card';
import { Curse } from '../helpers/Curse';

const id = 'curse_lose_footgear';

class CurseLoseFootgear extends Curse {
    constructor() {
        super();
        this.id = id;
        this.pack = 'pack1';
        this.kind = 'door';
        this.type = 'curse';
        this.castable = true;
    }
    onCast(source, dest, table) {
        for (let i of dest.wielded) {
            if (Card.byId(i).type == 'footgear') {
                dest.unwield(i, table);
                table.discard(i);
            }
        }
        return true;
    }
}
Card.cards[id] = new CurseLoseFootgear();
