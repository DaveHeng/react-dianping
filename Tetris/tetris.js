$(document).ready(function () {
	(function () {
		const game = {
			row: 20,
			col: 10,
			size: 30,
			timer: null,
			timer2: null,
			block: [{
					type: [
						[1, 1],
						[1, 1]
					],
					color: "green"
				},
				{
					type: [
						[0, 1, 0],
						[1, 1, 1],
						[0, 0, 0]
					],
					color: "yellow"
				},
				{
					type: [
						[0, 0, 0],
						[1, 1, 0],
						[0, 1, 1],
						[0, 0, 0]
					],
					color: "gold"
				},
				{
					type: [
						[0, 0, 0],
						[0, 1, 1],
						[1, 1, 0],
						[0, 0, 0]
					],
					color: "skyblue"
				},
				{
					type: [
						[1, 0, 0],
						[1, 1, 1],
						[0, 0, 0]
					],
					color: "pink"
				},
				{
					type: [
						[0, 0, 1],
						[1, 1, 1],
						[0, 0, 0]
					],
					color: "red"
				},
				{
					type: [
						[0, 0, 0, 0],
						[1, 1, 1, 1],
						[0, 0, 0, 0]
					],
					color: "orange"
				}
			],
			init: function () {
				//初始化;
				this.elements();
				this.CreateGrid();
				this.bind();
			},
			elements: function () {
				//查找元素;
				this._grid = $("#grid");
				this._play = document.getElementById("play");
				this._block = document.getElementById("block");
				this._nextblock = document.getElementById("nextBox")
				this._score = $("#score span");
				this._doc = document;
			},
			CreateGrid: function () {
				//创建网格;
				for (let i = 0; i < this.row * this.col; i++) {
					const _li = $("<li></li>");
					_li.data("flag", "on");
					this._grid.append(_li);
				}
			},
			bind: function () {
				//事件触发;
				this._play.onclick = this.play.bind(this);
				this._doc.onkeydown = this.dir.bind(this);
			},
			play: function () {
				//开始游戏;
				this._play.style.display = "none";
				this.ShowBlock();
				this.playing();
			},
			playing: function () {
				let that = this;
				that.timer = setInterval(function () {
					that.moveDown(1);
				}, 500);
			},
			ShowBlock: function () {
				//展示方块;
				this.initBlock();
				this.CreateBlock();
				this.nextBlock()
			},
			initBlock: function () {
				//储存方块原始数据;
				this.nowBlock = this.nextNowShape || this.randomBlock();
				this.typeBlock = this.nowBlock.type;
				this.colorBlock = this.nowBlock.color;
				this.xBlock = 3;
				this.yBlock = 0;
			},
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
							_div.dataset.x = j + this.xBlock;
							_div.dataset.y = i + this.yBlock;
							_div.style.background = this.colorBlock;
							this._block.appendChild(_div);
						}
					}
				}
			},
			randomBlock: function () {
				//随机出现方块;
				return this.block[Math.floor(Math.random() * this.block.length)];
			},
			nextBlock: function () {
				this.nextNowShape = this.randomBlock();
				this.nextTypeShape = this.nextNowShape.type;
				this.nextColorShape = this.nextNowShape.color;
				for (let i = this._nextblock.childNodes.length - 1; i >= 0; i--) {
					this._nextblock.removeChild(this._nextblock.childNodes[i]);
				}
				for (let i = 0; i < this.nextTypeShape.length; i++) {
					for (let j = 0; j < this.nextTypeShape[i].length; j++) {
						if (this.nextTypeShape[i][j] === 1) {
							const _div = document.createElement("div");
							_div.style.left = j * this.size / 2 + "px";
							_div.style.top = i * this.size / 2 + "px";
							_div.style.background = this.nextColorShape;
							this._nextblock.appendChild(_div);
						}
					}
				}
			},
			dir: function (ev) {
				//方向键改变方块状态;
				switch (ev.keyCode) {
					case 37:
						this.moveBlock(-1);
						break;
					case 38:
						this.typeBlock = this.Transform();
						this.CreateBlock();
						break;
					case 39:
						this.moveBlock(1);
						break;
					case 40:
						this.moveDown(1);
						break;
					default:
						break;
				}
			},
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
			},
			moveBlock: function (num) {
				//方块移动;
				if (this.isOut(num)) {
					return;
				}
				this.xBlock += num;
				for (let i = 0; i < this._block.childNodes.length; i++) {
					this._block.childNodes[i].style.left =
						this._block.childNodes[i].offsetLeft + this.size * num + "px";
					this._block.childNodes[i].dataset.x =
						parseInt(this._block.childNodes[i].dataset.x) + num;
				}
			},
			moveDown: function (num) {
				//方块向下移动;
				const that = this;
				if (this.isdown(num)) {
					clearTimeout(this.timer2);
					this.timer2 = setTimeout(function () {
						that.fixedBlock();
					}, 200);
					return;
				}
				this.yBlock += num;
				for (let i = 0; i < this._block.childNodes.length; i++) {
					this._block.childNodes[i].style.top =
						this._block.childNodes[i].offsetTop + this.size * num + "px";
					this._block.childNodes[i].dataset.y =
						parseInt(this._block.childNodes[i].dataset.y) + num;
				}
			},
			isOut: function (num) {
				//边界限制;
				let onOff = false;
				const _li = $("#grid").find("li");
				const _div = this._block.getElementsByTagName("div");
				for (let i = 0; i < _div.length; i++) {
					let subLi =
						parseInt(_div[i].dataset.y) * this.col +
						parseInt(_div[i].dataset.x) +
						num;
					if (
						(_div[i].offsetLeft === 0 && num === -1) ||
						(_div[i].offsetLeft === 270 && num === 1)
					) {
						onOff = true;
					}
					if (_li.eq(subLi).data("flag") === "off") {
						onOff = true;
					}
				}
				return onOff;
			},
			isdown: function (num) {
				//下边界限制;
				let onOff = false;
				const _li = $("#grid").find("li");
				const _div = this._block.getElementsByTagName("div");
				for (let i = 0; i < _div.length; i++) {
					let subLi =
						(parseInt(_div[i].dataset.y) + num) * this.col +
						parseInt(_div[i].dataset.x);
					if (_div[i].offsetTop === 570) {
						onOff = true;
					}
					if (_li.eq(subLi).data("flag") === "off") {
						onOff = true;
					}
				}
				return onOff;
			},
			isNoTransform: function (typeBlock) {
				//是否可以变形;
				const _li = $("#grid").find("li");
				for (let i = 0; i < typeBlock.length; i++) {
					for (let j = 0; j < typeBlock[i].length; j++) {
						if (typeBlock[i][j] === 1) {
							if (
								j + this.xBlock <= -1 ||
								j + this.xBlock >= this.col ||
								i + this.yBlock >= this.row
							) {
								return true;
							}
							if (
								_li
								.eq((i + this.yBlock) * this.col + (j + this.xBlock))
								.data("flag") === "off"
							) {
								return true;
							}
						}
					}
				}
				return false;
			},
			fixedBlock: function () {
				//固定方块位置的查找;
				const _li = $("#grid").find("li");
				const _div = this._block.getElementsByTagName("div");
				for (let i = 0; i < _div.length; i++) {
					_li
						.eq(
							parseInt(_div[i].dataset.y) * this.col +
							parseInt(_div[i].dataset.x)
						)
						.css("opacity", 1)
						.data("flag", "off");
				}
				this.gameOver();
				this.ShowBlock();
				this.deletBlock();
			},
			deletBlock: function () {
				//消除方块;
				let getPos = 0; //消行之后，下落得行;
				let count = 0; //下落的行数;
				const _li = $("#grid").find("li");
				for (let i = 0; i < this.row; i++) {
					let bRow = true;
					for (let j = 0; j < this.col; j++) {
						if (_li.eq(i * this.col + j).data("flag") === "on") {
							bRow = false;
						}
					}
					if (bRow) {
						getPos = i * this.col;
						count++;
						for (let j = 0; j < this.col; j++) {
							_li
								.eq(i * this.col + j)
								.css("opacity", 0)
								.data("flag", "on");
						}
					}
				}
				for (let i = getPos; i > 0; i--) {
					if (_li.eq(i).data("flag") === "off") {
						_li.eq(i).css("opacity", 0).data("flag", "on");
						_li.eq(i + count * this.col).css("opacity", 1).data("flag", "off");
					}

				}
				this.getScore(count)
			},
			getScore: function (count) {
                //分数;
				this._score.html(parseInt(this._score.html()) + 10 * count)
			},
			gameOver: function () {
                //游戏结束;
				if (this.yBlock === 0) {
					clearInterval(this.timer);
					alert('Game Over');
				}
			}
		};
		game.init();
	})();
});