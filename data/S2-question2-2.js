var question = [
  {
    problem1:'蓝色正在变黄,绿色正在变紫',
    award:'http://yuan619.xyz/xy/award11.png',
    problem2:'什么颜色正在变紫?',
    difficulty:1,
    punish:18,
    answer:[
      '蓝色',
      '绿色',
      '黄色',
      '灰色'
    ],
    rightIndex:1
  },
  {
    problem1:'汽车变成了蛋糕,水杯变成了桌子',
    award:'http://yuan619.xyz/xy/award11.png',
    problem2:'什么东西变成了蛋糕?',
    difficulty:1,
    punish:18,
    answer:[
      '汽车',
      '水杯',
      '桌子',
      '椅子'
    ],
    rightIndex:0
  },
  {
    problem1:"小明用绿色铅笔写了一个'红'字",
    award:'http://yuan619.xyz/xy/award33.png',
    problem2:'谁用铅笔写了一个什么字?',
    difficulty:2,
    punish:14,
    answer:[
      '小红  蓝',
      '小明  绿',
      '小红  绿',
      '小明  红'
    ],
    rightIndex:3
  },
  {
    problem1:"小绿用黑色的水彩笔写了'红'字",
    award:'http://yuan619.xyz/xy/award33.png',
    problem2:'___用黑色的___写了字',
    difficulty:2,
    punish:14,
    answer:[
      '小绿  水彩笔',
      '小红  铅笔',
      '小蓝  钢笔',
      '小明  水彩笔'
    ],
    rightIndex:0
  },
  {
    problem1:"紫色的天空正在变蓝,小白在追小红",
    award:'http://yuan619.xyz/xy/award44.png',
    problem2:'___的天空正在变蓝,小红在被___追',
    difficulty:3,
    punish:10,
    answer:[
      '灰色  小白',
      '蓝色  小明',
      '紫色  小白',
      '黑色  小明'
    ],
    rightIndex:2
  },
  {
    problem1:"紫色的天空正在变蓝,小白在追小红",
    award:'http://yuan619.xyz/xy/award44.png',
    problem2:'___的天空正在变蓝,小红在被___追',
    difficulty:3,
    punish:10,
    answer:[
      '灰色  小白',
      '蓝色  小明',
      '紫色  小白',
      '黑色  小明'
    ],
    rightIndex:2
  },
  {
    problem1:"绿色的水杯正在变成椅子,三角形正在变成长方形",
    award:'http://yuan619.xyz/xy/award44.png',
    problem2:'绿色的___正在变成椅子,___正在变成长方形',
    difficulty:3,
    punish:10,
    answer:[
      '蛋糕  正方形',
      '桌子  圆形',
      '水杯  三角形',
      '汽车  五角星'
    ],
    rightIndex:2
  },
  {
    problem1:'蓝色的桌子正在变成黑板,番茄正在变成茄子',
    award:'http://yuan619.xyz/xy/award55.png',
    problem2:'___的桌子正在变成黑板,___正在变成茄子',
    difficulty:3,
    punish:10,
    answer:[
      '蓝色  番茄',
      '绿色  土豆 ',
      '黄色  黄瓜',
      '灰色  西瓜'
    ],
    rightIndex:0
  },
  {
    problem1:'黄色的飞机正在变成电脑,橙色的沙发正在变成书包',
    award:'http://yuan619.xyz/xy/award55.png',
    problem2:'___正在变成电脑,沙发是___的',
    difficulty:4,
    punish:8,
    answer:[
      '飞机  橙色',
      '汽车  紫色 ',
      '轮船  黄色',
      '书包  蓝色'
    ],
    rightIndex:0
  },
  {
    problem1:'鼠标正在变成紫色的台灯,蓝色的墙壁正在变成鞋子',
    award:'http://yuan619.xyz/xy/award55.png',
    problem2:'鼠标正在变成___,墙壁是___的',
    difficulty:4,
    punish:8,
    answer:[
      '台灯  橙色',
      '鞋子  紫色 ',
      '键盘  黄色',
      '台灯  蓝色'
    ],
    rightIndex:3
  }
]
// var a = "2" 可以随便添加

// 给脚本文件定义一个出口
module.exports = {
  postList: question,
  // a_key: a
}
