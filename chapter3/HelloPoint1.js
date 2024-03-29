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
        console.log("the shaders don't be initialized.");
        return;
    }

    // Set clear color
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // Clear color
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Draw a point
    gl.drawArrays(gl.POINTS, 0, 1);
}