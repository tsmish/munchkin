/**
 * Created by ionagamed on 8/25/16.
 */

import { Card } from '../../logic/Card';
import packs from '../../logic/packs';
import Server from '../../logic/Server';

function idToInt(id) {
    if (Card.byId(id).kind == 'door') {
        return packs.pack1.doors.indexOf(id);
    } else {
        return packs.pack1.treasure.indexOf(id);
    }
}
function __l(x) {
    const c = Card.byId(x);
    if (c.kind == 'door') {
        return '/packs/pack1/img/doors-' + idToInt(x) + '.png';
    } else {
        return '/packs/pack1/img/treasure-' + idToInt(x) + '.png';
    }
}

export function registerUIHooks() {
    $('.itemId')
        .unbind('mouseenter')
        .unbind('mouseleave')
        .mouseenter(function (e) {
            const p = $('.popup');
            p.removeClass('hidden');
            p.css('top', $(this).offset().top + $(this).outerHeight());
            p.css('left', $(this).offset().left);
            $('.popup-image').attr('src', `${__l($(this).data('id'))}`);
        })
        .mouseleave(function (e) {
            $('.popup').addClass('hidden');
        });

    $('.winFight').unbind('click').click(e => {
        Server.winFight();
    });
}