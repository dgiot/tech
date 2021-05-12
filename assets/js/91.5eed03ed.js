(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{548:function(e,a,n){"use strict";n.r(a);var t=n(9),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"what-s-konva"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-s-konva"}},[e._v("#")]),e._v(" What's Konva?")]),e._v(" "),n("p",[e._v("Konva是一个基于 Canvas 开发的 2d JavaScript框架库, 它可以轻松的实现桌面应用和移动应用中的图形交互交互效果.")]),e._v(" "),n("p",[e._v("Konva 可以实现高性能动画, 过渡, 节点嵌套, 局部操作, 滤镜, 缓存, 事件等功能, 不仅仅适用于桌面与移动开发, 还有更为广泛的应用.")]),e._v(" "),n("h2",{attrs:{id:"how-does-it-work"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-does-it-work"}},[e._v("#")]),e._v(" How does it work?")]),e._v(" "),n("p",[e._v("一切都是从一个包含了一系列用户的图层"),n("code",[e._v("Konva.Layer")]),e._v("的舞台对象"),n("code",[e._v("Konva.Stage")]),e._v("开始的")]),e._v(" "),n("p",[e._v("每个图层都有两个"),n("code",[e._v("<canvas>")]),e._v("渲染器：一个场景渲染器以及一个"),n("code",[e._v("hit graph")]),e._v("渲染器(隐藏渲染器)。场景渲染器是你所看到的东西,"),n("code",[e._v("hit graph")]),e._v("渲染器则是一个特殊的隐藏画布，它被用来实现高性能的点击检测机制。")]),e._v(" "),n("p",[e._v("每个图层都可以包含许多形状，形状分组，以及分组的分组。所有的舞台、图层、分组和形状都是节点，就像是HTML页面中的DOM节点一样。")]),e._v(" "),n("p",[e._v("这里有一个节点的层次结构的示例：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("              Stage\n                |\n         +------+------+\n         |             |\n       Layer         Layer\n         |             |\n   +-----+-----+     Shape\n   |           |\n Group       Group\n   |           |\n   +       +---+---+\n   |       |       |\nShape   Group    Shape\n           |\n           +\n           |\n         Shape\n")])])]),n("p",[e._v("所有节点都可以被样式化、变换，尽管Konva以及内建了很多形状。比如：三角形，原型，图片，精灵，文本，线条，多边形，正多边形，路径，星型等。")]),e._v(" "),n("p",[e._v("你也可以通过实例化Shape类、并创建一个draw函数来创建自定义的形状。")]),e._v(" "),n("p",[e._v("每当你准备好一个具有图层和形状的舞台，你就可以绑定事件监听器、节点变换、运行动画、应用滤镜以及做更多事情。")]),e._v(" "),n("p",[e._v("简单示例：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("// first we need to create a stage *首先我们需要创建一个舞台\nvar stage = new Konva.Stage({\n  container: 'container',   // id of container <div> *包裹舞台的DIV元素的ID\n  width: 500,\n  height: 500\n});\n\n// then create layer *然后创建一个图层\nvar layer = new Konva.Layer();\n\n// create our shape *创建我们的形状\nvar circle = new Konva.Circle({\n  x: stage.getWidth() / 2,\n  y: stage.getHeight() / 2,\n  radius: 70,\n  fill: 'red',\n  stroke: 'black',\n  strokeWidth: 4\n});\n\n// add the shape to the layer *将形状添加到图层上\nlayer.add(circle);\n\n// add the layer to the stage *将图层添加到舞台上\nstage.add(layer);\n")])])]),n("p",[e._v("结果:"),n("br"),e._v(" "),n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/frontend/konva/assets/overview-circle.png",alt:"Minimal code demo"}})]),e._v(" "),n("h2",{attrs:{id:"basic-shapes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-shapes"}},[e._v("#")]),e._v(" Basic shapes")]),e._v(" "),n("p",[e._v("##基本形状 "),n("em",[e._v("Basic shapes")]),e._v(" "),n("code",[e._v("Konva.js")]),e._v(" 支持这些形状：矩形，椭圆，线，图像，文字，文字路径，星型，标签，SVG路径，正多边形"),n("br"),e._v("\n你也可以创建自定义的形状：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v(" var triangle = new Konva.Shape({\n      sceneFunc: function(context) {\n        context.beginPath();\n        context.moveTo(20, 50);\n        context.lineTo(220, 80);\n        context.quadraticCurveTo(150, 100, 260, 170);\n        context.closePath();\n\n        // special Konva.js method\n        context.fillStrokeShape(this);\n      },\n      fill: '#00D2FF',\n      stroke: 'black',\n      strokeWidth: 4\n});\n")])])]),n("p",[e._v("结果:"),n("br"),e._v(" "),n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/frontend/konva/assets/overview-custom.png",alt:"Custom shape"}}),e._v("\n##样式  "),n("em",[e._v("Styles")]),e._v("\n每个形状都支持以下的样式属性：")]),e._v(" "),n("ul",[n("li",[e._v("Fill. Solid color, gradients or images *填充：纯色，渐变或者图像纹理")]),e._v(" "),n("li",[e._v("Stroke (color, width) *描边：颜色，宽度")]),e._v(" "),n("li",[e._v("Shadow (color, offset, opacity, blur) *阴影：颜色，偏移，透明度，模糊度")]),e._v(" "),n("li",[e._v("Opacity *透明度")])]),e._v(" "),n("p",[e._v("示例:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("var pentagon = new Konva.RegularPolygon({\n\tx: stage.getWidth() / 2,\n\ty: stage.getHeight() / 2,\n\tsides: 5,\n\tradius: 70,\n\tfill: 'red',\n\tstroke: 'black',\n\tstrokeWidth: 4,\n\tshadowOffsetX : 20,\n\tshadowOffsetY : 25,\n\tshadowBlur : 40,\n\topacity : 0.5\n\t});\n")])])]),n("p",[e._v("结果:\n"),n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/frontend/konva/assets/overview-styles.png",alt:"Styles"}})]),e._v(" "),n("h2",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),n("p",[e._v("使用"),n("code",[e._v("Konvajs")]),e._v("，你可以方便地监听用户输入事件（点击，双击，鼠标滑过，触击，连续触击，触摸开始等），属性变更事件（横向缩放变更，填充变更等），和拖拽释放事件（拖拽开始，拖拽移动，托转结束）。")]),e._v(" "),n("p",[e._v("示例:")]),e._v(" "),n("p",[e._v("circle.on('mouseout touchend', function() {\nconsole.log('user input');\n});")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("circle.on('xChange', function() {\n    console.log('position change');\n});\n\ncircle.on('dragend', function() {\n    console.log('drag stopped');\n});  \n")])])]),n("p",[e._v("See "),n("a",{attrs:{href:"https://konvajs.github.io/docs/events/Binding_Events.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("working example"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("##拖拽和释放  "),n("em",[e._v("DRAG AND DROP")]),e._v(" "),n("code",[e._v("Konvajs")]),e._v("没有内建的拖拽支持，现在并没有任何拖拽事件（drop,dragenter,dragleave,dragover)\n但是,"),n("a",{attrs:{href:"http://konvajs.github.io/docs/drag_and_drop/Drop_Events.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("利用框架，可以轻易地实现这个机制"),n("OutboundLink")],1),e._v("。")]),e._v(" "),n("p",[e._v("启用拖拽只需要设置draggable属性为true。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("shape.draggable('true');\n")])])]),n("p",[e._v("然后你就可以支持拖拽事件，并"),n("a",{attrs:{href:"http://konvajs.github.io/docs/drag_and_drop/Complex_Drag_and_Drop.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("设置移动区域的限制"),n("OutboundLink")],1),e._v("。")]),e._v(" "),n("h2",{attrs:{id:"filters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#filters"}},[e._v("#")]),e._v(" Filters")]),e._v(" "),n("p",[e._v("##滤镜 "),n("em",[e._v("Filters")]),n("br"),e._v(" "),n("code",[e._v("Konvajs")]),e._v("有多重滤镜：模糊，反色，杂色等，"),n("a",{attrs:{href:"http://konvajs.github.io/api/Konva.Filters.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Filters API"),n("OutboundLink")],1),e._v("收录了所有的滤镜。"),n("br"),e._v("\n示例:"),n("br"),e._v(" "),n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/frontend/konva/assets/overview-filter.png",alt:"Filter"}})]),e._v(" "),n("p",[e._v("##动画"),n("em",[e._v("Animation")]),n("br"),e._v("\n你可以使用两种方式创建动画:")]),e._v(" "),n("p",[e._v("使用"),n("code",[e._v("Konva.Animation")]),e._v("的示例:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("var anim = new Konva.Animation(function(frame) {\n    var time = frame.time, // *时间\n        timeDiff = frame.timeDiff, // *间隔时间\n        frameRate = frame.frameRate; // *帧率\n    // update stuff *用于更新动画状态的代码写在下面\n}, layer);\nanim.start();\n")])])]),n("p",[e._v("使用"),n("code",[e._v("Konva.Tween")]),e._v("的示例:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v(" var tween = new Konva.Tween({\n        node: rect,\n        duration: 1,\n        x: 140,\n        rotation: Math.PI * 2,\n        opacity: 1,\n        strokeWidth: 6\n});\ntween.play();\n\n// or new shorter method: *或者更简短的新方法：\ncircle.to({\n    duration : 1,\n    fill : 'green'\n});   \n")])])]),n("p",[e._v("【译注】:")]),e._v(" "),n("p",[e._v("这里其实是创建动画的两种最常见的方式。")]),e._v(" "),n("p",[e._v("Animation是指每隔一段时间调用一次我们写好的回调，他们会把当前时间、两帧之间的时间差、帧率以传参的方式交给我们，我们则根据这些数据，手动写代码更新画面的状态。")]),e._v(" "),n("p",[e._v("Tween则是描述间隔时间、属性变化之后，让框架自行更新数据。")]),e._v(" "),n("p",[e._v("前者更加灵活，后者更加方便。")]),e._v(" "),n("p",[e._v("##选择器 "),n("em",[e._v("Selectors")]),n("br"),e._v("\n在你创建大型应用时，元素搜索是很有用的。")]),e._v(" "),n("p",[n("code",[e._v("Konvajs")]),e._v("提供的选择器可以帮你寻找元素。你可以使用"),n("code",[e._v("find()")]),e._v("函数（返回一个集合）或者"),n("code",[e._v("findOne()")]),e._v("函数(返回集合中的第一个元素)")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("var circle = new Konva.Circle({\n        radius: 10,\n        fill: 'red',\n        id : 'face',\n        name : 'red circle'\n});\nlayer.add(circle);\n\n// then try to search\n\n// find by type\nlayer.find('Circle'); // all circles\n\n// find by id\nlayer.findOne('#face');\n\n// find by name (like css class)\nlayer.find('.red')  \n")])])]),n("p",[e._v("##序列化和反序列化  "),n("em",[e._v("Serialisation and Deserialization")]),n("br"),e._v("\n你创建的所有对象都可以用JSON的姓氏存储，你可以将它保存在服务器或者HTML5浏览器本地存储里。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('var json = stage.toJSON();\nAlso you can restore objects from JSON:\n\nvar json = \'{"attrs":{"width":578,"height":200},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":100,"y":100,"sides":6,"radius":70,"fill":"red","stroke":"black","strokeWidth":4},"className":"RegularPolygon"}]}]}\';\n\nvar stage = Konva.Node.create(json, \'container\');\n')])])]),n("h2",{attrs:{id:"performance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[e._v("#")]),e._v(" Performance")]),e._v(" "),n("p",[n("code",[e._v("##性能 *Performance*")]),e._v("Konvajs`有很多工具，可以改善你的应用的性能。其中最关键的方法有：")]),e._v(" "),n("p",[e._v("缓存允许你在缓冲画布上绘制一个元素，然后从那个canvas上绘制元素。在有很多组合节点时，这将会提高你的性能，比如说文本或者具有很多阴影和描边的形状。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("shape.cache();\n")])])]),n("p",[n("a",{attrs:{href:"https://konvajs.github.io/docs/performance/Shape_Caching.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Demo"),n("OutboundLink")],1),n("br"),e._v("\n【译注】：Canvas的矢量绘制性能很差，而位图绘制则稍好。所以将复杂的图形先保存到图片或者另外的画布中，然后做完位图绘制到主画布上，是很常见的优化手法 .")]),e._v(" "),n("p",[e._v("分层 由于框架支持多个"),n("code",[e._v("<canvas>")]),e._v("元素，您可以自由放置对象。\n例如，您的应用程序由复杂的背景和几种移动的形状组成。 您可以使用一层作为背景，另一层用于形状。\n更新形状时，您不需要更新背景画布 "),n("a",{attrs:{href:"https://konvajs.github.io/docs/performance/Layer_Management.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Demo"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("你可以在这里看到所有可用的性能建议：\n"),n("a",{attrs:{href:"https://konvajs.github.io/docs/performance/All_Performance_Tips.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://konvajs.github.io/docs/performance/All_Performance_Tips.html"),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);