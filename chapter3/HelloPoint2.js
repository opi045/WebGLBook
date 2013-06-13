function getShaderSource(id)
{
    return document.getElementById(id).text;
}

function main()
{
    // Get Canvas object
    var canvas = document.getElementById('webgl');

    var gl = getWebGLContext(canvas);
    if (!gl)
    {
        console.log("Can't get WebGL context.");
        return;
    }

    // Initialize shaders
    var vsSource = getShaderSource('shader-vs');
    var fsSource = getShaderSource('shader-fs');
    if (!initShaders(gl, vsSource, fsSource))
    {
        console.log("The shaders don't be initialized.");
        return;
    }

    // Get attribute variable's location
    var attrPosition = gl.getAttribLocation(gl.program, 'attrPosition');
    if (attrPosition < 0)
    {
        console.log("Can't get attribute variable's location.");
        return;
    }

    // Assign attribute variable a point position
    gl.vertexAttrib3f(attrPosition, 0.3, 0.3, 0.0);

    // Set clear color
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // Clear color
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Draw a point
    gl.drawArrays(gl.POINTS, 0, 1);
}
