var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_x; var last_position_y;


var color = "red";
var width = screen.width;

screen.width = screen.width -70
screen.height = screen.height - 300;

new_width = screen.width - 70;
new_height = screen.height - 300;

if(width  < 992)
{
  canvas.width = new_width;
  canvas.height = new_height;
  document.body.style.overflow = "hidden";
}

ctx.beginPath()
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.stroke();


canvas.addEventListener("touchmove", touchmove);
function touchmove(e)
{
  var current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
  var current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

  color = document.getElementById("color").value;
  ctx.beginPath()
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.moveTo(last_position_x, last_position_y);
  ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
  ctx.stroke()

  last_position_x = current_position_of_mouse_x;
  last_position_y = current_position_of_mouse_y;

}

function clearArea()
{
  console.log("Hello");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
