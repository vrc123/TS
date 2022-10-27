import { bagType } from "./bag-type";
import { Present } from "./present";
import { presentType } from "./present-type";

export class Bag {
    maxWeight: number;
    bagType: bagType;
    presents: Present[];

    constructor(maxWeight: number, bagType: bagType) {
        this.maxWeight = maxWeight;
        this.bagType = bagType;
        this.presents = [];
    }

    addPresent(present: Present) : boolean {
        if (this.maxWeight < this.totalWeight() + present.getWeight()) {
            return false;
        } else {
            if(present.presentType == presentType.soft) {
                if (this.bagType == bagType.paper) {
                    return false;
                } else {
                    this.presents.push(present);
                    return true;
                }
            } else {
                this.presents.push(present);
                return true;
            }
        }
    }

    totalWeight() : number {
        let totalWeight = 0;
        this.presents.forEach(presentWeight => {
            let weight = presentWeight.getWeight();
            totalWeight += weight;
        });
        return totalWeight;
    }

    print() : void {
        this.presents.forEach(Present => {
            Present.print();
        })
        console.log("This bag has a max weight of: " + this.maxWeight + " and is of type: " + this.bagType)
    }
}