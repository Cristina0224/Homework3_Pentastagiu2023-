class Backpack {
  constructor(capacity) {
    this.capacity = capacity;
    this.containers = {
      small: [],
      medium: [],
      big: [],
    };
  }

  pack(size, id) {
    if (this.containers[size].length < this.capacity[size]) {
      this.containers[size].push(id);
      return id;
    } else {
      return -1;
    }
  }

  unpack(size) {
    if (this.containers[size].length > 0) {
      return this.containers[size].pop();
    } else {
      return -2;
    }
  }
}

class PackingService {
  constructor(capacity) {
    this.backpack = new Backpack(capacity);
    this.itemIdCounter = 1;
  }

  performActions(actions) {
    const result = [];

    actions.forEach((action) => {
      const [actionType, size] = action;

      if (actionType === "pack") {
        const id = this.backpack.pack(size, this.itemIdCounter);
        result.push(id);
        if (id !== -1) {
          this.itemIdCounter++;
        }
      } else if (actionType === "unpack") {
        const id = this.backpack.unpack(size);
        result.push(id);
      }
    });

    return result;
  }
}

const backpackCapacity = {
  small: 8,
  medium: 4,
  big: 2,
};

const actions = [
  ["pack", "small"],
  ["pack", "big"],
  ["pack", "big"],
  ["pack", "big"],
  ["unpack", "big"],
  ["pack", "medium"],
  ["unpack", "medium"],
  ["unpack", "medium"],
];

const packingService = new PackingService(backpackCapacity);
console.log(packingService.performActions(actions));
