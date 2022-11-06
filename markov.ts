import {TextGenerator} from 'node-markov-generator';
import words from './words';

const generator = new TextGenerator(words);

const result = generator.generateSentence();

export default result