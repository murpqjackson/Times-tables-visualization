'use strict';

const rotate = (cx, cy, r, angle) => ({ x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) })

function drawTimesTable(ctx, width, height, depth, multiplier, linewidth, strokestyle, fillstyle, shownumbers) {
  const cx = width/2|0;
  const cy = height/2|0;
  const csize = Math.min(width, height)/2 - 40;
  const AngleBetween = 2 * Math.PI / depth;
  ctx.fillStyle = fillstyle;
  ctx.fillRect(0,0,width,height);
  ctx.lineWidth = linewidth;
  ctx.strokeStyle = strokestyle;
  if(shownumbers) ctx.fillStyle = '#ff0000';
  for(let a = 0; a < depth; a++) {
    const startingPoint = rotate(cx, cy, csize, a * AngleBetween);
    const endingPoint = rotate(cx, cy, csize, (a * multiplier % depth) * AngleBetween);
    if(shownumbers) ctx.fillText(a, startingPoint.x, startingPoint.y);
    ctx.beginPath();
      ctx.moveTo(startingPoint.x, startingPoint.y);
      ctx.lineTo(endingPoint.x, endingPoint.y);
    ctx.stroke();
  }
  ctx.fillStyle = '#000000';
  ctx.fillText(`Multiplier: ${multiplier}, Depth: ${depth}`,10,10);
}
