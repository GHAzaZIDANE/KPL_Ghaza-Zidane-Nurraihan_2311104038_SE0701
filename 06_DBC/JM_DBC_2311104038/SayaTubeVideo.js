class SayaTubeVideo {
    constructor(title) {
        this.id = Math.floor(10000 + Math.random() * 90000); // Generate 5-digit random ID
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        if (count < 0) throw new Error("Play count must be positive");
        this.playCount += count;
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}