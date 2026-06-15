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

// Playlist 46 bài của ZARD (Dùng ngoặc kép "" để không bị lỗi mấy bài có dấu ')
const phrases = [
  "Good-bye My Loneliness",
  "Fushigi ne...",
  "Mou Sagasanai",
  "Nemurenai Yoru wo Daite",
  "IN MY ARMS TONIGHT",
  "Makenaide",
  "Kimi ga Inai",
  "Yureru Omoi",
  "Mou Sukoshi Ato Sukoshi.../Kanariya",
  "Kitto Wasurenai",
  "Kono Ai ni Oyogi Tsukarete mo/Boy",
  "Konna ni Soba ni Iru no ni",
  "Anata wo Kanjite Itai",
  "Just believe in love",
  "Ai ga Mienai",
  "Sayonara wa Ima mo Kono Mune ni Imasu",
  "My Friend",
  "Kokoro wo Hiraite",
  "Don't you see!",
  "Kimi ni Aitaku Nattara...",
  "Kaze ga Toori Nukeru Machi he",
  "Eien",
  "My Baby Grand ~Nukumori ga Hoshikute~",
  "Iki mo Dekinai",
  "Unmei no Roulette Mawashite",
  "Atarashii Door ~Fuyu no Himawari~",
  "Good Day",
  "Mind Games",
  "Sekai wa Kitto Mirai no Naka",
  "Itai Kurai Kimi ga Afureteiru yo",
  "Kono Namida Hoshi ni Nare",
  "Get U're Dream",
  "Promised You",
  "Sawayakana Kimi no Kimochi",
  "Ashita wo Yumemite",
  "Hitomi Tojite",
  "Motto Chikaku de Kimi no Yokogao Miteitai",
  "Kakegae no Nai Mono",
  "Kyou wa Yukkuri Hanasou",
  "Hoshi no Kagayaki yo/Natsu wo Matsu Sail no You ni",
  "Kanashii Hodo Anata ga Suki/Karatto Ikou!",
  "Heart ni Hi wo Tsukete",
  "Glorious Mind",
  "Tsubasa wo Hirogete/Ai wa Kurayami no Naka de",
  "Sunao ni Ienakute"
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