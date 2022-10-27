class Computer {
    constructor({ memory, power, name }) {
        this.memory = memory;
        this.power = power;
        this.name = name;
    }

    startOn(){
        console.log(`${this.name} has ${this.memory} GB and ${this.power} GHz `);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////

// class Laptop extends Computer{
//     constructor({ memory, power, name, diagonal }) {
//         super({ memory, power, name });
//         this.diagonal = diagonal;
//         this.workBatery = Number((this.power / (this.diagonal * this.memory)).toFixed(2));
//     }      
// }

// const notebook1 = new Laptop({ memory: 16, power: 512, name: "LaptopFire", diagonal: 16 });
// notebook1.startOn();
// console.log(notebook1);

/////////////////////////////////////////////////////////////////////////////////////////////////

// class Ultrabook extends Laptop{
//     constructor({ memory, power, name, diagonal, weight }) {
//         super({ memory, power, name, diagonal });
//         this.weight = weight;
//     }

//     showError() {
//         this.startOn();
//         if (this.weight > 2 && this.workBatery < 4) {
//             console.log('Error');
//         }
//     }
// }

// const ultraSuper = new Ultrabook({ memory: 16, power: 600, name: 'ultra', diagonal: 14, weight: 2 });
// console.log(ultraSuper);
// ultraSuper.showError();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

class PCBase extends Computer{
    constructor({ memory, power, name }) {
        super({ memory, power, name });
        this.FPS = Number((this.power / this.memory).toFixed(2));
    };

    startGame() {
        console.log(`You are playing ${this.name} with ${this.FPS} FSP`);
    }

    upgradePower() {
        this.power = Number((this.power * 1.1).toFixed(2));
    }
    
    upgradeMemory() {
        this.memory = this.memory * 2;
    }
}

const newPc = new PCBase({ name: 'PC777', memory: 32, power: 850 });
console.log(newPc);
newPc.startGame();
newPc.upgradePower();
newPc.upgradeMemory();
console.log(newPc);


