class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________░▒▓¡';
    this.update = this.update.bind(this);
  }
  
  setText(newText) {
    this.oldText = this.el.innerText;
    this.newText = newText;
    this.promise = new Promise((resolve) => this.resolve = resolve);
    
    // Khởi tạo một mảng chứa ký tự nhiễu với chiều dài tối đa
    const maxLen = Math.max(this.oldText.length, this.newText.length);
    this.queue = [];
    for (let i = 0; i < maxLen; i++) {
      this.queue.push({ char: this.randomChar() });
    }
    
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    // Tốc độ chạy: 50 khung hình (~gần 1 giây) cho mỗi lần co giãn
    this.totalFrames = 50; 
    this.update();
    return this.promise;
  }
  
  update() {
    // KẾT THÚC: Đến đúng khung hình 50 thì BÙM! Hiện chữ thật và dừng lại
    if (this.frame >= this.totalFrames) {
      this.el.innerHTML = this.newText;
      this.resolve();
      return;
    }
    
    // ĐANG CHẠY: Tính toán chiều dài của dải nhiễu theo thời gian
    const oldLen = this.oldText.length;
    const newLen = this.newText.length;
    
    // Tính phần trăm hoàn thành (từ 0.0 đến 1.0)
    const progress = this.frame / this.totalFrames;
    
    // TUYỆT KỸ CO GIÃN: Tính số lượng ký tự cần hiển thị ở khung hình hiện tại
    // Nếu đang từ 4 lên 11: Nó sẽ làm tròn và tăng dần 4, 5, 6... 11
    // Nếu đang từ 11 về 4: Nó sẽ làm tròn và giảm dần 11, 10, 9... 4
    const currentLen = Math.round(oldLen + (newLen - oldLen) * progress);
    
    let output = '';
    // Xuất ra đúng số lượng ký tự nhiễu vừa tính được
    for (let i = 0; i < currentLen; i++) {
      // Giữ tốc độ chớp nhiễu 40% để nó "rào rào" liên tục
      if (Math.random() < 0.4) {
        this.queue[i].char = this.randomChar();
      }
      output += this.queue[i].char;
    }
    
    this.el.innerHTML = output;
    this.frame++;
    this.frameRequest = requestAnimationFrame(this.update);
  }
  
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// Khai báo 2 chữ cần chạy
const phrases = [
  "ZARD",
  "IZUMI\u00A0SAKAI"
];

const el = document.getElementById('scramble');

if (el) {
  const fx = new TextScramble(el);
  let counter = 0;
  
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      // Đứng im hiển thị chữ 2.5s rồi mới lặp lại
      setTimeout(next, 2500);
    });
    
    // Công tắc đổi qua đổi lại
    counter = (counter + 1) % phrases.length;
  };

  next();
}