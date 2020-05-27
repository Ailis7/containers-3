/* eslint-disable no-unused-vars */
// TODO: write your code here
import Character from './classes/Character';
import Bowman from './classes/Bowman';
import Swordsman from './classes/Swordsman';
import Magician from './classes/Magician';
import Undead from './classes/Undead';
import Zombie from './classes/Zombie';
import Daemon from './classes/Daemon';
import Team from './classes/Team';
import ErrorRepository from './classes/ErrorRepository';
import Settings from './classes/Settings'; // настройки игры

const testSettings = new Settings({ theme: 'grays' });
console.log(testSettings);
