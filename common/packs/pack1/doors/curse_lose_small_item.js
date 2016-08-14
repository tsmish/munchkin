/**
 * Created by ionagamed on 8/14/16.
 */

import { Card } from '../../../Card';

const id = 'curse_lose_small_item';

class CurseLoseSmallItem extends Card {
    constructor() {
        super();
        this.id = id;
        this.pack = 'pack1';
        this.kind = 'door';
        this.type = 'curse';
        this.castable = true;
    }
    onCast(source, dest) {
        dest.dropSmallItem();
    }
}
Card.cards[id + '_1'] = new CurseLoseSmallItem();
Card.cards[id + '_2'] = new CurseLoseSmallItem();