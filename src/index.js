import {login} from "./auth/auth.service.js"
import {getPlayer} from "./player/player.service.js"

const currentUser = await login();

const player = await getPlayer(currentUser);

if (player) {
  for (const card of player.user.paginatedCards.nodes) {
    console.log(card);
    console.log('---------------------------------------------')
  }
}