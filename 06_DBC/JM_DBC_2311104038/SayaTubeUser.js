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

// Main function
const user = new SayaTubeUser("Nama_Panggilan");

for (let i = 1; i <= 10; i++) {
    const video = new SayaTubeVideo(`Review Film ke-${i} oleh Nama_Panggilan`);
    video.increasePlayCount(100);
    user.addVideo(video);
}

user.printAllVideoPlayCount();
console.log("Total Play Count: " + user.getTotalVideoPlayCount());
