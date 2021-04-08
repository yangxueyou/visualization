/**
 * 下面只需要打开对应代码，不要全部打开
 * ctx = CanvasRenderingContext2D
 * canvas.getContext('webgl')：用于生成 3D 的立体图案
 */


// ==================路径================== //

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d'); 

// ctx.beginPath();    // 开始绘制路径
// ctx.moveTo(100, 100);   // 设置路径的起点，即将一个新路径的起始点移动到(x，y)坐标
// ctx.lineTo(200, 200);   // 使用直线从当前点连接到(x, y)坐标
// ctx.lineTo(100, 200);
// ctx.lineTo(100, 100);

// // ctx.fillStyle = 'red';  // 指定路径填充的颜色和样式（默认为黑色）
// // ctx.fill()  // 路径内部填充颜色（默认是黑色），使之变成一个实心的图形
// ctx.strokeStyle = 'red';     // 指定路径线条的颜色和样式（默认为黑色）
// ctx.stroke()    // 只对路径线条着色


//===================线型=================//

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(200, 200);
// ctx.lineTo(100, 200);
// ctx.lineTo(100, 100);

// ctx.lineWidth = 3;  // 指定线条的宽度，默认为1.0
// ctx.lineCap = 'round';  // 指定线条末端的样式，有三个可能的值：butt（默认值，末端为矩形）、round（末端为圆形）、square（末端为突出的矩形，矩形宽度不变，高度为线条宽度的一半）
// ctx.lineJoin = 'round'; // 指定线段交点的样式，有三个可能的值：round（交点为扇形）、bevel（交点为三角形底边）、miter（默认值，交点为菱形)
// ctx.setLineDash([15, 5]);   // 数组，用于指定虚线里面线段和间距的长度
// ctx.stroke();


//===================矩形1=================//

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// ctx.rect(10, 10, 100, 100); // 绘制矩形路径，矩形左上角的横坐标和纵坐标、矩形的宽和高
// ctx.fill();


//===================矩形2=================//

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 100, 100); // 填充一个矩形，矩形左上角的横坐标和纵坐标、矩形的宽和高



//===================矩形3=================//

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// ctx.strokeStyle = 'green';
// ctx.strokeRect(10, 10, 100, 100);   // 绘制矩形边框，矩形左上角的横坐标和纵坐标、矩形的宽和高



//===================矩形4=================//

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// ctx.fillRect(10, 10, 100, 100);
// ctx.clearRect(15, 15, 90, 90);  // 指定矩形区域的像素都变成透明，矩形左上角的横坐标和纵坐标、矩形的宽和高



//===================弧线=================//

/**
 * ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
 * x和y参数是圆心坐标
 * radius是半径
 * startAngle和endAngle则是扇形的起始角度和终止角度（以弧度表示）
 * anticlockwise表示做图时应该逆时针画（true）还是顺时针画（false），这个参数用来控制扇形的方向（比如上半圆还是下半圆）
 * 
 * Math.PI = 180
 */


// // ========== 实心圆形

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.arc(60, 60, 50, 0, Math.PI * 2, true);  // 通过指定圆心和半径绘制弧形
// ctx.fill();


// // =========== 空心半圆

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.moveTo(50, 20);
// ctx.arc(100, 20, 50, 0, Math.PI, false);
// ctx.stroke();


// // ========== 曲形

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.arcTo(50, 50, 100, 0, 25);  // 通过指定两根切线和半径绘制弧形，(0, 0)(50, 50）-- (50, 50）(100, 0)这两条线相交的圆的切面
// ctx.lineTo(100, 0);
// ctx.stroke();



//===================文本=================//

/**
 * 注意，fillText()方法不支持文本断行，所有文本一定出现在一行内。如果要生成多行文本，只有调用多次fillText()方法。
 */


// // ========== 绘制实心字符

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// ctx.fillText('Hello111122223333333 world', 50, 50, 100); // 在50，50的位置填充实心字符，最大宽度100


// // ========== 空心字符

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// ctx.strokeText('Hello world', 50, 50); // 添加空心字符，它的参数与fillText()一致


// // ========== 改变字体

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// ctx.font = 'Bold 20px Arial';   // 指定字型大小和字体，默认值为10px sans-serif
// ctx.fillText('Hello world', 50, 50);


// // ========== 指定文本的对齐方式

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// ctx.font = 'Bold 20px Arial';
// ctx.textAlign = 'center';   // 指定文本的对齐方式
// ctx.fillText('Hello world', 50, 50);


// // ========== 文本渲染后的宽度

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// var text1 = ctx.measureText('Hello world');
// console.log(text1.width) // 49.46
// ctx.font = 'Bold 20px Arial';
// var text2 = ctx.measureText('Hello world'); // 接受一个字符串作为参数，返回一个 TextMetrics 对象，可以从这个对象上面获取参数字符串的信息，目前主要是文本渲染后的宽度（width）
// console.log(text2.width) // 107.78




//===================渐变色和图像填充=================//


//  // ============ 给定直线，生成线性渐变的样式

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// var gradient = ctx.createLinearGradient(0, 0, 200, 0); // 起点到终点
// /**
//  * 起点到终点的渐变色
//  */
// gradient.addColorStop(0, 'green');
// gradient.addColorStop(1, 'white');
// ctx.fillStyle = gradient;
// ctx.fillRect(10, 10, 200, 100);




// // ============= 定义一个辐射渐变，需要指定两个圆

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// var gradient = ctx.createRadialGradient(100, 100, 50, 100, 100, 100); // 参数是指定两个圆
// /**
//  * 圆的渐变色
//  */
// gradient.addColorStop(0, 'white');
// gradient.addColorStop(1, 'green');
// ctx.fillStyle = gradient;
// ctx.fillRect(0, 0, 200, 200);


// // ============= 图片填充
// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// var img = new Image();
// img.src = 'https://seopic.699pic.com/photo/40011/0709.jpg_wh1200.jpg';
// img.onload = function( ) {
//   var pattern = ctx.createPattern(img, 'repeat');
//   ctx.fillStyle = pattern;
//   ctx.fillRect(0, 0, 1400, 1400);   // 这个目前没有用，因为我都画布就 400 * 250
// };




//===================阴影=================//

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// ctx.shadowOffsetX = 10; // 阴影的水平位移，默认为0
// ctx.shadowOffsetY = 10; // 阴影的垂直位移，默认为0
// ctx.shadowBlur = 5; // 阴影的模糊程度，默认为0
// ctx.shadowColor = 'rgba(0,0,0,0.5)';    // 阴影的颜色，默认为black

// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 100, 100);



//===================drawImage()：将图像文件写入画布=================//



// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// var image = new Image(60, 45);
// image.onload = drawImageActualSize;
// image.src = 'https://seopic.699pic.com/photo/40011/0709.jpg_wh1200.jpg';

// function drawImageActualSize() {
//   canvas.width = this.naturalWidth;
//   canvas.height = this.naturalHeight;
//   ctx.drawImage(this, 0, 0, this.naturalWidth, this.naturalHeight);
// }




//===================像素读写=================//


/**
 * ctx.getImageData(sx, sy, sw, sh)
 * sx和sy是读取区域的左上角坐标，sw和sh是读取区域的宽度和高度
 */

//  var canvas = document.getElementById('myCanvas');
//  var ctx = canvas.getContext('2d');
//  ctx.beginPath();
//  ctx.moveTo(100, 100);
//  ctx.lineTo(200, 200);
//  ctx.lineTo(100, 200);
//  ctx.lineTo(100, 100);
//  ctx.strokeStyle = 'red';
//  ctx.stroke();
//  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

//  /**
//   * ImageData.data：一个一维数组。该数组的值，依次是每个像素的红、绿、蓝、alpha 通道值（每个值的范围是 0～255），因此该数组的长度等于图像的像素宽度 x 图像的像素高度 x 4。这个数组不仅可读，而且可写，因此通过操作这个数组，就可以达到操作图像的目的。
//   * ImageData.width：浮点数，表示 ImageData 的像素宽度。
//   * ImageData.height：浮点数，表示 ImageData 的像素高度。
//   */
//  console.log(imageData,'---------imageData')
//  /**
//   * putImageData将ImageData对象的像素绘制在<canvas>画布上
//   * createImageData()生成一个空的ImageData对象，所有像素都是透明的黑色（即每个值都是0）TODO: 我不清楚。。。
//   */
//  var imageData = ctx.createImageData(100, 100);
//  ctx.putImageData(imageData, 10, 0);
 
 

//===================save()，restore()=================//
/**
 * 用于将画布的当前样式保存到堆栈，相当于在内存之中产生一个样式快照。
 * 
 * 矩形的填充色本来设为绿色，但是restore()方法撤销了这个设置，将样式恢复上一次保存的状态（即默认样式），所以实际的填充色是黑色（默认颜色）。
 */

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// ctx.save();

// ctx.fillStyle = 'green';
// ctx.restore();

// ctx.fillRect(10, 10, 100, 100);


//===================canvas=================//
/**
 * canvas属性指向当前CanvasRenderingContext2D对象所在的<canvas>元素。该属性只读。
 */


// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// console.log(ctx.canvas === canvas) // true



// ===================图像变换================= //


// ============= rotate()

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');
// /**
//  * 顺时针旋转的度数
//  * 
//  * 必须在fillRect()方法之前调用，否则是不起作用的
//  * 
//  * 旋转中心点始终是画布左上角的原点。如果要更改中心点，需要使用translate()方法移动画布。
//  */
// ctx.rotate(45 * Math.PI / 180);
// ctx.fillRect(70, 0, 100, 30);



// ============== scale()


// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// ctx.scale(10, 3);
// ctx.fillRect(10, 10, 10, 10);


// =============== translate()


// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// ctx.translate(50, 50);
// ctx.fillRect(0, 0, 100, 100);


// ================ transform()


/*
ctx.transform(a, b, c, d, e, f);
a:水平缩放(默认值1，单位倍数)
b:水平倾斜(默认值0，单位弧度)
c:垂直倾斜(默认值0，单位弧度)
d:垂直缩放(默认值1，单位倍数)
e:水平位移(默认值0，单位像素)
f:垂直位移(默认值0，单位像素)
*/

// 原始图形是 100 x 100 的矩形，结果缩放成 200 x 100 的矩形，并且左上角从(0, 0)移动到(50, 50)
// 多个transform()方法具有叠加效果

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// ctx.transform(2, 0, 0, 1, 50, 50);
// ctx.fillRect(0, 0, 100, 100);


// ================= setTransform()：取消前面的图形变换，将画布恢复到该方法指定的状态


// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// ctx.translate(50, 50);
// ctx.fillRect(0, 0, 100, 100);

// ctx.setTransform(1, 0, 0, 1, 0, 0);
// ctx.fillRect(0, 0, 100, 100);




// ++++++++++++++++++++++++++ // 
// =======<canvas> 元素的方法===== //
// ++++++++++++++++++++++++++ //





// ===================HTMLCanvasElement.toDataURL() ================= //


// 将<canvas>元素，转化成PNG Data URI

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(200, 200);
// ctx.lineTo(100, 200);
// ctx.lineTo(100, 100);
// ctx.strokeStyle = 'red';
// ctx.stroke();
// function convertCanvasToImage(canvas) {
//     var image = new Image();
//     image.src = canvas.toDataURL('image/png');
//     return image;
// }

// console.log(convertCanvasToImage(canvas))


// var fullQuality = canvas.toDataURL('image/jpeg', 0.9);
// var mediumQuality = canvas.toDataURL('image/jpeg', 0.6);
// var lowQuality = canvas.toDataURL('image/jpeg', 0.3);

// console.log(fullQuality,'-------fullQuality')
// console.log(mediumQuality,'-------mediumQuality')
// console.log(lowQuality,'-------lowQuality')




// ===================HTMLCanvasElement.toBlob()================= //
// 将<canvas>图像转成一个 Blob 对象

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(200, 200);
// ctx.lineTo(100, 200);
// ctx.lineTo(100, 100);
// ctx.strokeStyle = 'red';
// ctx.stroke();

// function blobToImg(blob) {
//   var newImg = document.createElement('img');
//   var url = URL.createObjectURL(blob);

//   newImg.onload = function () {
//     // 使用完毕，释放 URL 对象
//     URL.revokeObjectURL(url);
//   }

//   newImg.src = url;
//   document.body.appendChild(newImg);
// }

// canvas.toBlob(blobToImg)



// ===================动画效果================= //

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// var posX = 20;
// var posY = 100;

// setInterval(function () {
//   ctx.fillStyle = 'black';
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   posX += 1;
//   posY += 0.25;

//   ctx.beginPath();
//   ctx.fillStyle = 'white';

//   ctx.arc(posX, posY, 10, 0, Math.PI * 2, true);
//   ctx.closePath(); // 结束路径，返回到当前路径的起始点，会从当前点到起始点绘制一条直线。如果图形已经封闭，或者只有一个点，那么此方法不会产生任何效果。
//   ctx.fill();
// }, 30);



// ===================像素处理================= //
// 灰度效果
var canvas = document.getElementById("myCanvas");  
var image = document.getElementById("imageSource");  
console.log(image,'-------image')
// re-size the canvas deminsion  
canvas.width  = image.width;  
canvas.height = image.height;  
    
// get 2D render object  
var context = canvas.getContext("2d");  
context.drawImage(image, 0, 0);  
var canvasData = context.getImageData(0, 0, canvas.width, canvas.height);  
    
// gray filter  
for ( var x = 0; x < canvasData.width; x++) {  
    for ( var y = 0; y < canvasData.height; y++) {  

        // Index of the pixel in the array  
        var idx = (x + y * canvasData.width) * 4;  
        var r = canvasData.data[idx + 0];  
        var g = canvasData.data[idx + 1];  
        var b = canvasData.data[idx + 2];  
            
        // calculate gray scale value  
        var gray = .299 * r + .587 * g + .114 * b;  
            
        // assign gray scale value  
        canvasData.data[idx + 0] = gray; // Red channel  
        canvasData.data[idx + 1] = gray; // Green channel  
        canvasData.data[idx + 2] = gray; // Blue channel  
        canvasData.data[idx + 3] = 255; // Alpha channel  
            
        // add black border  
        if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8))   
        {  
            canvasData.data[idx + 0] = 0;  
            canvasData.data[idx + 1] = 0;  
            canvasData.data[idx + 2] = 0;  
        }  
    }  
}  
context.putImageData(canvasData, 0, 0); // at coords 0,0  s
