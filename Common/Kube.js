function Kube (vertexShaderId, fragmentShaderId ){
    var vertShdr = vertexShaderId || "Cube-vertex-shader";
    var fragShdr = fragmentShaderId || "Cube=fragment-shader";

    this.program = initShaders(gl, vertShdr, fragShdr);

    if ( this.program < 0 ) {
        alert( "Error: Cube shader pipeline failed to compile.\n\n" +
            "\tvertex shader id:  \t" + vertShdr + "\n" +
            "\tfragment shader id:\t" + fragShdr + "\n" );
        return;

    this.postion ={
        values : new Float32Array([
            //front
            -0.5, -0.5, +0.5,
            -0.5, +0.5, +0.5,
            +0.5, -0.5, +0.5,
            +0.5, +0.5, +0.5,
            +0.5, -0.5, +0.5,
            -0.5, +0.5, +0.5,

            //back
            -0.5, -0.5, -0.5,
            +0.5, -0.5, -0.5,
            -0.5, +0.5, -0.5,
            +0.5, +0.5, -0.5,
            -0.5, +0.5, -0.5,
            +0.5, -0.5, -0.5,

            //Top

            -0.5, +0.5, -0.5,
            +0.5, +0.5, -0.5,
            -0.5, +0.5, +0.5,
            +0.5, +0.5, +0.5,
            -0.5, +0.5, +0.5,
            +0.5, +0.5, -0.5,

            //Bottom
            -0.5, -0.5, -0.5,
            -0.5, -0.5, +0.5,
            +0.5, -0.5, -0.5,
            +0.5, -0.5, +0.5,
            +0.5, -0.5, -0.5,
            -0.5, -0.5, +0.5,

            //Right
            +0.5, -0.5, -0.5,
            +0.5, -0.5, +0.5,
            +0.5, +0.5, -0.5,
            +0.5, +0.5, +0.5,
            +0.5, +0.5, -0.5,
            +0.5, -0.5, +0.5,

            //Left 
            -0.5, -0.5, -0.5,
            -0.5, +0.5, -0.5,
            -0.5, -0.5, +0.5,
            -0.5, +0.5, +0.5,
            -0.5, -0.5, +0.5,
            -0.5, +0.5, -0.5,

        ]),
        numComponents : 3
    };

    this.textures = {
        values : new Float32Array([
           
            0.0, 0.0,
            1.0, 0.0,
            0.0, 1.0,
            1.0, 1.0,
            0.0, 1.0,
            1.0, 0.0,

            0.0, 0.0,
            1.0, 0.0,
            0.0, 1.0,
            1.0, 1.0,
            0.0, 1.0,
            1.0, 0.0,

            0.0, 0.0,
            1.0, 0.0,
            0.0, 1.0,
            1.0, 1.0,
            0.0, 1.0,
            1.0, 0.0,

            0.0, 0.0,
            1.0, 0.0,
            0.0, 1.0,
            1.0, 1.0,
            0.0, 1.0,
            1.0, 0.0,

            0.0, 0.0,
            1.0, 0.0,
            0.0, 1.0,
            1.0, 1.0,
            0.0, 1.0,
            1.0, 0.0,

            0.0, 0.0,
            1.0, 0.0,
            0.0, 1.0,
            1.0, 1.0,
            0.0, 1.0,
            1.0, 0.0,
        ]),
        numComponents : 2
        
    };

    this.indices = {
        values : new Uint16Array([
            0, 1, 2, 3, 4, 5,
            6, 7, 8, 9, 10, 11,
            12, 13, 14, 15, 16, 17,
            18, 19, 20, 21, 22, 23,
            24, 25, 26, 27, 28, 29,
            30, 31, 32, 33, 34, 35,
        ])
    };
    
    this.indices.count = this.indices.values.length;

    function loadTexture(image, texture){
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D (gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, g1.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl. TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl. LINEAR);
        gl.generateMipmap(gl. TEXTURE_2D);
        gl.bindTexture(gl. TEXTURE_2D, null);
    
    }
    function initTexture () {
        texture = gl.createTexture();
        texImage = new Image();
        texImage.onload = function () {
        loadTexture(texImage, texture);
        };

        texImage.src = "image.jpg";
    }
    initTexture();
    
    this.positions.buffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, this.positions.buffer );
    gl. bufferData( gl.ARRAY_BUFFER, this.positions.values, gl.STATIC_DRAW );

    this. indices.buffer = gl.createBuffer();
    gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, this.indices. buffer );
    gl.bufferDatal( gl.ELEMENT_ARRAY_BUFFER, this.indices.values, gl.STATIC_DRAW );

    this.positions.attributeLoc = gl.getAttribLocation, (this.program, "vPosition" );
    gl.enableVertexAttribArray( this.positions.attributeloc );

    this.textures.buffer = gl.createBuffer();
    gl.bindBuffer( gl. ARRAY_BUFFER, this.textures.buffer );
    gl.bufferDatal (gl.ARRAY_BUFFER, this.textures.values, gl.STATIC_DRAW );

    this.textures.attributeloc = gl.getAttribLocation,( this.program, "vTexCoord" );
    gl.enableVertexAttribArray( this.textures.attributeLoc );

    texLoc = gl.getUniformLocation(this.program, 'tex')
    MVLOC = gl.getUniformLocation(this.program, "MV");

    this.MV = undefined;
    this.render = function () {
        gl. useProgram( this.program );

        gl.bindBuffer( gl. ARRAY_BUFFER, this.positions.buffer );
        gl.vertexAttribPointer (this.positions.attributeLoc, this.positions.numComponents, gl.FLOAT, gl.FALSE, 0, 0);

        gl.bindBuffer( gl. ELEMENT_ARRAY_BUFFER, this.indices. buffer );

        gl.uniformMatrix4fv( MVLoc, gl.FALSE, flatten(this.mv) );

        gl.bindBuffer( gl. ARRAY_BUFFER, this.textures.buffer);
        gl.vertexAttribPointer( this.textures.attributeLoc, this.textures.numComponents, Tgl.FLOAT, gl.FALSE, 0, 0 );

        gl.activeTexture(gl.TEXTUREO);
        gl.bindTexture(gl. TEXTURE_2D, texture);
        gl.uniformli(texLoc, 0);

        gl.drawElements(gl.TRANGLES, this.indices.count, gl.UNSIGNED_SHORT, 0);


    
    }
};
