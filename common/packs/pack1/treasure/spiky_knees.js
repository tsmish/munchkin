/**
 * Created by ionagamed on 8/19/16.
 */

import { Card } from '../../../Card';
import { Item } from '../helpers/Item';

const id = 'spiky_knees';

class _ extends Item {
    constructor() {
        super();
        this.id = id;
        this.pack = 'pack1';
        this.kind = 'treasure';
        this.type = 'knees';
        this.wieldable = true;
        this.price = 200;
    }

    getAttackFor(player) {
        return 1;
    }
}
Card.cards[id] = new _();
