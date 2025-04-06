class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
  }
  
  const video1 = new Video("JavaScript Tutorial", "Alice", 300);
  video1.watch();
  
  const video2 = new Video("OOP in JS", "Bob", 600);
  video2.watch();
  
  const videoData = [
    ["React Basics", "Charlie", 450],
    ["Node.js Guide", "Dave", 700],
    ["CSS Animations", "Eve", 200],
    ["Python for Beginners", "Frank", 800],
    ["Machine Learning Intro", "Grace", 900],
  ];
  
  const videos = videoData.map(video => new Video(...video));
  
  videos.forEach(video => video.watch());
  