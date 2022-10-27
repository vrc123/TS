import { Bag } from "./bag";
import { bagType } from "./bag-type";
import { Present } from "./present";
import { Santa } from "./santa";

export class Sled {
    santa: Santa;
    bags: Bag[];

    constructor(santa: Santa) {
        this.santa = santa;
        this.bags = [];
    }

    addBag(bag: Bag) {
        this.bags.push(bag);
    }

    setSanta(santa: Santa) {
        this.santa = santa;
    }

    addPresentAndNewBagIfNeeded(present: Present) {
        if (this.bags.length == 0){
            let bag = new Bag(10, bagType.canvas);
            this.bags.push(bag);
        } else if (this.bags[(this.bags.length - 1)].totalWeight() + present.getWeight() >= this.bags[(this.bags.length - 1)].maxWeight) {
            let bag = new Bag(10, bagType.canvas);
            this.bags.push(bag);
            bag.addPresent(present);
        }
    }

    print() : void {
        this.bags.forEach(Bag => {
            Bag.print();
        })
    }
}