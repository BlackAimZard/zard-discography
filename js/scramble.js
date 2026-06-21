class TextScramble {
 constructor(el) {
  this.el = el;
  this.chars = '#?¿!¡[]{}<>/\░▒▓';
  this.update = this.update.bind(this);
 }
 setText(newText) {
  this.oldText = this.el.innerText;
  this.newText = newText;
  this.promise = new Promise((resolve) => this.resolve = resolve);
  // Init max length queue
  const maxLen = Math.max(this.oldText.length, this.newText.length);
  this.queue = [];
  for (let i = 0; i < maxLen; i++) {
   this.queue.push({ char: this.randomChar() });
  }
  cancelAnimationFrame(this.frameRequest);
  this.frame = 0;
  this.totalFrames = 50; // Total animation frames
  this.update();
  return this.promise;
 }
 update() {
  // End animation
  if (this.frame >= this.totalFrames) {
   this.el.innerText = this.newText;
   this.resolve();
   return;
  }
  // Calculate length based on progress
  const oldLen = this.oldText.length;
  const newLen = this.newText.length;
  const progress = this.frame / this.totalFrames;
  const currentLen = Math.round(oldLen + (newLen - oldLen) * progress);
  let output = '';
  // Output characters
  for (let i = 0; i < currentLen; i++) {
   if (Math.random() < 0.4) {
    this.queue[i].char = this.randomChar();
   }
   output += this.queue[i].char;
  }
  this.el.innerText = output;
  this.frame++;
  this.frameRequest = requestAnimationFrame(this.update);
 }
 randomChar() {
  return this.chars[Math.floor(Math.random() * this.chars.length)];
 }
}

// Target phrases
const phrases = [
 "ZARD",
 "IZUMI\u00A0SAKAI"
];

const el = document.getElementById('scramble');

// Init loop
if (el) {
 const fx = new TextScramble(el);
 let counter = 0;
 const next = () => {
  fx.setText(phrases[counter]).then(() => {
   // Delay next loop
   setTimeout(next, 2500);
  });
  // Toggle index
  counter = (counter + 1) % phrases.length;
 };
 next();
}