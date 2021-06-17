
var cube = undefined;
var gl = undefined;
var angle = 0;

function init() {
  var canvas = document.getElementById( "webgl-canvas" );

  gl = WebGLUtils.setupWebGL( canvas );

  if ( !gl ) {
    alert("Unable to setup WebGL");
    return;
  }

 gl.clearColor( 0.8, 0.8, 0.8, 1.0 );
 gl.enable( gl.DEPTH_TEST );
  

   cube = new Cube();

  render();
  }
  
function initTexture () {
  texture = gl.createTexture();
  texImage = new Image();
  texImage.onload = function () {
     loadTexture(image, texture);
  };
  texImage.src = "https://i.imgur.com/w9NORXB.jpg";
}

function loadTexture(image, texture) {
gl.bindTexture(gl.TEXTURE_2D, texture);
 gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,
gl.RGBA, gl.UNSIGNED_BYTE, image);
 gl.texParameteri(gl.TEXTURE_2D,  
gl.TEXTURE_MAG_FILTER, gl.LINEAR);
 gl.texParameteri(gl.TEXTURE_2D,
gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
 gl.generateMipmap(gl.TEXTURE_2D);
 gl.bindTexture(gl.TEXTURE_2D, null);
}




                         


 

                        


function render() {
  gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );

  angle += 2.0; // degrees

  cube.MV = rotate( angle, [1, 1, 0] );

  cube.render();

  requestAnimationFrame( render ); // schedule another call to render()
}

window.onload = init;
