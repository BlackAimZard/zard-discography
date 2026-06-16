document.body.insertAdjacentHTML('beforeend', `
<style>
 /* Animation keyframes */
 @keyframes slowFlow {
  0%, 21.4% { background-position: 100% 0; }
  41.4%, 58.6% { background-position: 50% 0; }
  78.6%, 100% { background-position: 0% 0; }
 }
 /* Line styles */
 .mBtn-line {
  display: block;
  width: 39px;
  height: 1px;
  background: linear-gradient(90deg, #fff 33.33%, #888 33.33%, #888 66.66%, #fff 66.66%);
  background-size: 300% 100%;
  animation: slowFlow 3.5s ease-in-out infinite;
 }
</style>
<button id="mBtn" style="
 position: fixed;
 bottom: 20px;
 right: 20px;
 z-index: 9999;
 padding: 15px 5px;
 background: #000;
 border: none;
 border-radius: 0;
 cursor: pointer;
 box-shadow: 0 2px 5px rgba(0,0,0,0.3);
 -webkit-appearance: none;
 appearance: none;
 display: block;
 line-height: 0;
 font-size: 0;
">
 <span class="mBtn-line" style="margin-bottom: 8px; animation-delay: 0s;"></span>
 <span class="mBtn-line" style="margin-bottom: 8px; animation-delay: 0.2s;"></span>
 <span class="mBtn-line" style="animation-delay: 0.4s;"></span>
</button>
`);

// LOGIC
var btn = document.getElementById('mBtn');
btn.onclick = function() { window.parent.postMessage('toggle', '*'); };

window.addEventListener('message', function(e) {
if (e.data === 'show') btn.style.display = 'block';
if (e.data === 'hide') btn.style.display = 'none';
});

window.parent.postMessage('load', '*');