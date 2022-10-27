import { Bag } from "./bag";
import { bagType } from "./bag-type";
import { Present } from "./present";
import { presentType } from "./present-type";
import { Santa } from "./santa";
import { Sled } from "./sled";

let santa1 = new Santa("Bob", 100);
let sled1 = new Sled(santa1);
let bag1 = new Bag(10, bagType.canvas);
let present1 = new Present("Tog",8, presentType.hard);
let present2 = new Present("Bamse",3, presentType.soft);

bag1.addPresent(present1);
bag1.addPresent(present2);

sled1.addBag(bag1);

sled1.addPresentAndNewBagIfNeeded(present2)
sled1.print();