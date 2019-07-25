var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameInfoUI=(function(_super){
		function GameInfoUI(){
			
		    this.pauseBtn=null;
		    this.levelLabel=null;
		    this.scoreLabel=null;
		    this.hpLabel=null;
		    this.infoLabel=null;
			GameInfoUI.__super.call(this);
		}
		CLASS$(GameInfoUI,'ui.GameInfoUI',_super);
		var __proto__=GameInfoUI.prototype;
		__proto__.createChildren=function(){
		    
			_super.prototype.createChildren.call(this);
			this.createView(GameInfoUI.uiView);
		}
		GameInfoUI.uiView={"type":"View","child":[{"props":{"x":403,"y":10,"skin":"war/btn_pause.png","stateNum":1,"var":"pauseBtn"},"type":"Button","compId":9},{"props":{"x":107,"y":24,"styleSkin":"war/label.png","text":"Level:50","color":"#f3e9e9","width":91,"height":25,"fontSize":20,"var":"levelLabel"},"type":"Label","compId":10},{"props":{"x":210,"y":24,"styleSkin":"war/label.png","text":"Score:100","color":"#f8dd18","width":154,"height":25,"fontSize":20,"var":"scoreLabel"},"type":"Label","compId":11},{"props":{"x":24,"y":24,"styleSkin":"war/label.png","text":"Hp:10","color":"#62f81c","width":74,"height":25,"fontSize":20,"var":"hpLabel"},"type":"Label","compId":12},{"props":{"x":44,"y":408,"styleSkin":"war/label.png","text":"战斗结束","width":392,"height":102,"var":"infoLabel","align":"center","color":"#ffffff","fontSize":30,"wordWrap":true},"type":"Label","compId":16}],"props":{"width":480,"height":852},"compId":1,"loadList":["war/btn_pause.png","war/label.png"],"loadList3D":[]};
		return GameInfoUI;
	})(View);