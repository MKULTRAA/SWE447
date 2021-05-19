var gl = null;
var cone = null;
cone = new Cone(gl, n);
function init() {
    cone = new Cone(gl, n);
    var canvas = document.getElementById("webgl-canvas");

    gl = WebGLUtils.setupWebGL(canvas);

    if (!gl) {
        alert("Unable to setup WebGL");
        return;
    }

<<<<<<< Updated upstream
    
=======

>>>>>>> Stashed changes

    gl.clearColor(1.0, 0.0, 1.0, 1.0);
    
    cone = new Cone(gl, 10, "Cone-vertex-shader","Cone-fragment-shader");

    render();
}

function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);

    cone.render();
}


window.onload = init;
