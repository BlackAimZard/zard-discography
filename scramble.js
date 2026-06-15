class TextScramble {
  constructor(el) {
    this.el = el;
    // Chứa đầy đủ các ký tự nhiễu và ô vuông
    this.chars = '!<>-_\\/[]{}—=+*^?#________░▒▓¡';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += char;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// Playlist name
const phrases = [
  "ZARD",
  "IZUMI\u00A0SAKAI"
];

// Tìm phần tử có id="scramble" trong HTML
const el = document.getElementById('scramble');

// Lệnh if này giúp web không bị lỗi nếu HTML trang đó không có id="scramble"
if (el) {
  const fx = new TextScramble(el);
  
  // Bốc đại một bài ngẫu nhiên để bắt đầu phát
  let counter = Math.floor(Math.random() * phrases.length);
  
  const next = () => {
    const currentPhrase = phrases[counter];
    
    fx.setText(currentPhrase).then(() => {
      // Cho nghỉ 2.5s rồi chạy tiếp
      setTimeout(next, 2500);
    });
    
    // Thuật toán bốc random bài mới (đảm bảo không trùng với bài vừa chạy)
    let nextCounter;
    do {
      nextCounter = Math.floor(Math.random() * phrases.length);
    } while (nextCounter === counter); 
    
    counter = nextCounter; // Gán bài mới để chuẩn bị chạy
  };

  setTimeout(next, 1000);
}