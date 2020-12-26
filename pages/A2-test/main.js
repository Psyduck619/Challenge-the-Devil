
function Main(row,column) { 
  this.row = row;
  this.column=column;
  this.grid=this.init();
}

Main.prototype = {
  init() { // 填充数据
    var grid = [];
    for(var i = 0; i < this.row; i++) {
      grid[i] = [];
      for(var j = 0; j < this.column; j++) {
        var value = parseInt(Math.random()*4+1);
        grid[i].push(value);
      }
    }
    return grid;
  },
  
};

module.exports = Main;