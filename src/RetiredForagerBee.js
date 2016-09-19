import ForagerBee from './ForagerBee';

class RetiredForagerBee extends ForagerBee {
	constructor () {
		super();
		this.age = 40;
		this.job = 'gamble';
		this.canFly = false;
		this.color = 'grey';
	}

	forage () {
		return 'I am too old, let me play cards instead';
	}

	treasureChest () {
		this.treasureChest = [];
	}

	gamble (treasure) {
		this.treasureChest.push(treasure);
	}
  // TODO..
};

export default RetiredForagerBee;