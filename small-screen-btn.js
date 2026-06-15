document.body.insertAdjacentHTML('beforeend', `
<button id="mBtn" style="
position: fixed; 
bottom: 20px; 
right: 20px; 
z-index: 9999; 
padding: 10px 5px; 
background: #000000; 
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
<span style="display: block; width: 40px; height: 1px; background: #FFFFFF; margin-bottom: 8px;"></span>
<span style="display: block; width: 40px; height: 1px; background: #FFFFFF; margin-bottom: 8px;"></span>
<span style="display: block; width: 40px; height: 1px; background: #FFFFFF;"></span>
</button>`);

// LOGIC
var btn = document.getElementById('mBtn');
btn.onclick = function() { window.parent.postMessage('toggle', '*'); };

window.addEventListener('message', function(e) {
if (e.data === 'show') btn.style.display = 'block';
if (e.data === 'hide') btn.style.display = 'none';
});

window.parent.postMessage('load', '*');