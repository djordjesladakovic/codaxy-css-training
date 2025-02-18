import { Controller } from "cx/ui";

var categories = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
];
export default class extends Controller {
    onInit() {
        var y1 = 0, y2 = 150;
        this.store.set(
            '$page.points', 
            Array.from({length: 50}, 
            (_, i) => ({
                x: i * 3,
                y: i % 20 == 3 ? null : (y1 = (y1 + (Math.random() - 0.5) * 30)),
                y2: y2 = (y2 + (Math.random() - 0.5) * 30),
                y2l: y2 - 50,
                y2h: y2 + 50
        }))); 

        this.store.set(
            "$page.pointsBar",
            Array.from({ length: categories.length }, (_, i) => ({
              x: categories[i],
              v1: Math.random() * 30,
              v2: Math.random() * 30,
              v3: Math.random() * 30,
            }))
        );

        this.store.init(
            "$page.records",
            Array.from({ length: 30 }).map((v, i) => ({
              id: i + 1,
              fullName: (Math.random() + 1).toString(36).substring(7),
              continent: (Math.random() + 1).toString(36).substring(7),
              browser: (Math.random() + 1).toString(36).substring(7),
              os: (Math.random() + 1).toString(36).substring(7),
              visits: Math.random() * 30
            }))
          );
    }
}