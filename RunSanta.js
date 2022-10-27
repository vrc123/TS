"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bag_1 = require("./bag");
var bag_type_1 = require("./bag-type");
var present_1 = require("./present");
var present_type_1 = require("./present-type");
var santa_1 = require("./santa");
var sled_1 = require("./sled");
var santa1 = new santa_1.Santa("Bob", 100);
var sled1 = new sled_1.Sled(santa1);
var bag1 = new bag_1.Bag(10, bag_type_1.bagType.canvas);
var present1 = new present_1.Present("Tog", 8, present_type_1.presentType.hard);
var present2 = new present_1.Present("Bamse", 3, present_type_1.presentType.soft);
bag1.addPresent(present1);
bag1.addPresent(present2);
sled1.addBag(bag1);
sled1.addPresentAndNewBagIfNeeded(present2);
sled1.print();
//# sourceMappingURL=RunSanta.js.map