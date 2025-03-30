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

class SayaTubeUser {
    constructor(username) {
        this.id = Math.floor(10000 + Math.random() * 90000); // Generate 5-digit random ID
        this.username = username;
        this.uploadedVideos = [];
    }

    addVideo(video) {
        this.uploadedVideos.push(video);
    }

    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    printAllVideoPlayCount() {
        console.log(`User: ${this.username}`);
        this.uploadedVideos.forEach((video, index) => {
            console.log(`Video ${index + 1} judul: ${video.title}`);
        });
    }
}

// Contoh penggunaan main dengan 10 video
const user = new SayaTubeUser("Praktikan");

for (let i = 1; i <= 10; i++) {
    const video = new SayaTubeVideo(`Review Film ke-${i} oleh Praktikan`);
    video.increasePlayCount((i + 1) * 100); // Variasi play count
    user.addVideo(video);
}

user.printAllVideoPlayCount();
console.log("Total Play Count: " + user.getTotalVideoPlayCount());
