class SayaTubeVideo {
    constructor(title) {
        try {
            // Precondition: title must be a non-empty string and <= 100 characters
            if (typeof title !== 'string' || title.length === 0) {
                throw new Error("Title cannot be null or empty");
            }
            if (title.length > 100) {
                throw new Error("Title exceeds maximum length of 100 characters");
            }

            this.id = Math.floor(10000 + Math.random() * 90000); // Generate 5-digit random ID
            this.title = title;
            this.playCount = 0;
        } catch (error) {
            console.error("Error creating video: " + error.message);
        }
    }

    increasePlayCount(count) {
        try {
            // Precondition: count must be a positive number <= 10,000,000
            if (typeof count !== 'number' || count <= 0) {
                throw new Error("Play count must be a positive number");
            }
            if (count > 10000000) {
                throw new Error("Play count exceeds maximum limit of 10,000,000");
            }

            // Check for overflow
            const newCount = this.playCount + count;
            if (newCount > Number.MAX_SAFE_INTEGER) {
                throw new Error("Play count overflow");
            }

            this.playCount = newCount;
        } catch (error) {
            console.error("Error increasing play count: " + error.message);
        }
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

// === Testing Design by Contract and Exception Handling ===

const video = new SayaTubeVideo("Tutorial Design By Contract – Praktikan");

try {
    for (let i = 0; i < 10; i++) {
        video.increasePlayCount(1_000_000); // Using underscores for readability
    }
} catch (error) {
    console.error("Error during testing: " + error.message);
}

video.printVideoDetails();
