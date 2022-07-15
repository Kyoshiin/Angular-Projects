enum Color {
    Red, Green, Blue,
}
let c: Color = Color.Green;
console.log(Color.Red);         //  0
console.log("c = " + c);           // 1
enum Site {
    North = 10,
    South = 20,
    East = 30,
    West = 40
}
let s: Site = Site.South;
console.log(Site.East);           // 3
console.log("s = "+s);            // 3
enum cohorts {
    IotJ001 = 30,
    IotJ002 = 29,
    IotJ003 = 25
}
let strength: cohorts = cohorts.IotJ002;
console.log(cohorts.IotJ002);           // 29
console.log("IotJ002 strength = "+strength);            // 29