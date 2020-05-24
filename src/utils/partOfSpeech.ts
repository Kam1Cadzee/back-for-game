import WordPOS from 'wordpos';
import {PartOfSpeech} from '../type-graphql/enums';

interface IAllParts {
  nouns: string[]
  verbs: string[]
  adjectives: string[],
  adverbs: string[]
  rest: string[]
}
class DetectPartOfSpeech {
  private wordpos: any;

  constructor() {
    this.wordpos = new WordPOS();
  }

  getAllParts = async (str: string | string[]) => {
    if(Array.isArray(str)) {
      str = str.join(' ');
    }
    return await this.wordpos.getPOS(str) as IAllParts;
  };

  getPartOfSpeech = async (word: string) => {
    if(await this.wordpos.isNoun(word)) {
      return PartOfSpeech.NOUN;
    }
    else if(await this.wordpos.isVerb(word)) {
      return PartOfSpeech.VERB;
    }
    else if(await this.wordpos.isAdjective(word)) {
      return PartOfSpeech.ADJ;
    }
    else if(await this.wordpos.isAdverb(word)) {
      return PartOfSpeech.ADV;
    }
    else {
      return PartOfSpeech.OTHER;
    }
  }
}
const detectPartOfSpeech = new DetectPartOfSpeech();
export default detectPartOfSpeech;
