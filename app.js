const Canvas = document.getElementById('canvas');
const ctx = Canvas.getContext('2d', { alpha: false });

let width = window.innerWidth;
let height = window.innerHeight;

Canvas.width = width;
Canvas.height = height;

function draw() {
  let mult = document.getElementById('multiplier').value;
  let depth = document.getElementById('depth').value;
  let linewidth = document.getElementById('linewidth').value;
  let strokestyle = document.getElementById('strokestyle').value;
  let fillstyle = document.getElementById('fillstyle').value;
  let shownumbers = document.getElementById('numbers').checked;
  drawTimesTable(ctx, width, height, depth, mult, linewidth, strokestyle, fillstyle, shownumbers);
}

window.addEventListener('resize', function() {
  width = window.innerWidth;
  height = window.innerHeight;
  Canvas.width = width;
  Canvas.height = height;
  draw();
});

window.addEventListener('keydown', function(e) {
  let mult = parseFloat(document.getElementById('multiplier').value);
  let depth = parseFloat(document.getElementById('depth').value);

  switch(e.keyCode) {
    case 37:
      if(mult > 1) mult--;
      break;
    case 39:
      mult++;
      break;
    case 38:
      depth++;
      e.preventDefault();
      break;
    case 40:
      if(depth > 1) depth--;
      e.preventDefault();
      break;
    case 219:
      if(mult > 0.1) mult -= 0.1;
      break;
    case 221:
      mult += 0.1;
      break;
    case 82:
      mult = 2;
      depth = 200;
      break;
    case 76:
      depth = 16;
      break;
    case 67:
      toggleConfig();
      break;
    case 188:
      if(mult > 0.01) mult -= 0.01;
      break;
    case 190:
      mult += 0.01;
      break;
  }
  mult = Math.round(mult * 100) / 100;

  document.getElementById('multiplier').value = mult;
  document.getElementById('depth').value = depth;
  draw();
});
window.addEventListener('click', function() { draw(); });

function toggleConfig() {
  document.getElementById('config').style.display = (document.getElementById('config').style.display === 'block')? 'none':'block';
}

draw();
