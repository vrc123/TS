"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bag = void 0;
var bag_type_1 = require("./bag-type");
var present_type_1 = require("./present-type");
var Bag = /** @class */ (function () {
    function Bag(maxWeight, bagType) {
        this.maxWeight = maxWeight;
        this.bagType = bagType;
        this.presents = [];
    }
    Bag.prototype.addPresent = function (present) {
        if (this.maxWeight < this.totalWeight() + present.getWeight()) {
            return false;
        }
        else {
            if (present.presentType == present_type_1.presentType.soft) {
                if (this.bagType == bag_type_1.bagType.paper) {
                    return false;
                }
                else {
                    this.presents.push(present);
                    return true;
                }
            }
            else {
                this.presents.push(present);
                return true;
            }
        }
    };
    Bag.prototype.totalWeight = function () {
        var totalWeight = 0;
        this.presents.forEach(function (presentWeight) {
            var weight = presentWeight.getWeight();
            totalWeight += weight;
        });
        return totalWeight;
    };
    Bag.prototype.print = function () {
        this.presents.forEach(function (Present) {
            Present.print();
        });
        console.log("This bag has a max weight of: " + this.maxWeight + " and is of type: " + this.bagType);
    };
    return Bag;
}());
exports.Bag = Bag;
//# sourceMappingURL=bag.js.map