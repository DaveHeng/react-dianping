# 单例模式俄罗斯方块

这是一个 20\*10,大小 30 像素的的俄罗斯方块

* 创建网格:

```javascript
CreateGrid: function () {
				//创建网格;
				for (let i = 0; i < this.row * this.col; i++) {
					const _li = $("<li></li>");
					_li.data("flag", "on");
					this._grid.append(_li);
				}
			},
```

* 使用二维数组创建方块:  

  &ensp;&ensp;&ensp;方块数据是固定的 7 个二维数组;

```javascript
block: [{
					type: [
						[1, 1],
						[1, 1]
					],
				},
				{
					type: [
						[0, 1, 0],
						[1, 1, 1],
						[0, 0, 0]
					],
				},
				{
					type: [
						[0, 0, 0],
						[1, 1, 0],
						[0, 1, 1],
						[0, 0, 0]
					],
				},
				{
					type: [
						[0, 0, 0],
						[0, 1, 1],
						[1, 1, 0],
						[0, 0, 0]
					],
				},
				{
					type: [
						[1, 0, 0],
						[1, 1, 1],
						[0, 0, 0]
					],
				},
				{
					type: [
						[0, 0, 1],
						[1, 1, 1],
						[0, 0, 0]
					],
				},
				{
					type: [
						[0, 0, 0, 0],
						[1, 1, 1, 1],
						[0, 0, 0, 0]
					],
				}
			],
CreateBlock: function () {
				//创建方块形态;
				//变形之前清空数据;
				for (let i = this._block.childNodes.length - 1; i >= 0; i--) {
					this._block.removeChild(this._block.childNodes[i]);
				}
				for (let i = 0; i < this.typeBlock.length; i++) {
					for (let j = 0; j < this.typeBlock[i].length; j++) {
						if (this.typeBlock[i][j] === 1) {
							const _div = document.createElement("div");
							_div.style.left = (j + this.xBlock) * this.size + "px";
							_div.style.top = (i + this.yBlock) * this.size + "px";
							_div.style.background = this.colorBlock;
							this._block.appendChild(_div);
						}
					}
				}
			},
```

* 方块下落完毕后，将当前方块的位置映射到网格上:  

  &emsp;&ensp;&ensp;映射网格的方法是给每个网格设置坐标,由自定义`dataset`属性完成;

```javascript
//this.xBlock,this.yBlock指代初始位置;
_div.dataset.x = j + this.xBlock;
_div.dataset.y = i + this.yBlock;
```

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;方块每次下落或者左右移动,会逐渐增加或减少`this.xBlock`,`this.yBlock`;

```javascript
moveBlock: function (num) {
				//方块左右移动;
       this.xBlock += num;
}
moveDown: function (num) {
				//方块向下移动;
       this.yBlock += num;
}
```

* 变形方法:  

  &ensp;&ensp;&ensp;将二维数组的行和列颠倒,为顺时针变形;

```javascript
Transform: function () {
				//变形;
				const result = [];
				for (let i = 0; i < this.typeBlock.length; i++) {
					for (let j = 0; j < this.typeBlock[i].length; j++) {
						if (i === 0) {
							result.push([]);
						}
						//横和列调换位置;
						result[j][this.typeBlock.length - 1 - i] = this.typeBlock[i][j];
					}
				}
				if (this.isNoTransform(result)) {
					return this.typeBlock;
				} else {
					return result;
				}
			}
```

&ensp;&ensp;&ensp;变形之后重绘方块

* 判定消除方法:  

  &ensp;&ensp;&ensp;给每一个网格加上自定义属性`data("flag","on")`;  
  
  &ensp;&ensp;&ensp;当有一整行的网格属性都是`data("flag","off")`,我们就让这一行的透明度`opacity`等于 0;
* 消除之后下落方法:  

  &ensp;&ensp;&ensp;将映射的网格从后向前遍历,让`data("flag","off")`,改为`data("flag","on")`, 透明度改为 0, 

  &ensp;&ensp;&ensp;再其后一行让`data("flag","on")`,改为让`data("flag","off")`,透明度改为 1;

```javascript
//getPos代表所有的行,count代表要下降得行数;
for (let i = getPos; i > 0; i--) {
  if (_li.eq(i).data("flag") === "off") {
    _li
      .eq(i)
      .css("opacity", 0)
      .data("flag", "on");
    _li
      .eq(i + count * this.col)
      .css("opacity", 1)
      .data("flag", "off");
  }
}
```
