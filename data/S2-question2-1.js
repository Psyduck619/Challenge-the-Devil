var question = [
  {
    problem1:'蓝色正在变黄,绿色正在变紫',
    award:'http://yuan619.xyz/xy/award11.png',
    problem2:'什么颜色正在变紫?',
    difficulty:1,
    punish:15,
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
    punish:15,
    answer:[
      '汽车',
      '水杯',
      '桌子',
      '椅子'
    ],
    rightIndex:0
  },
  {
    problem1:'正方形变成了圆形,三角形变成了长方形',
    award:'http://yuan619.xyz/xy/award22.png',
    problem2:'三角形变成了什么图形?',
    difficulty:1,
    punish:15,
    answer:[
      '长方形',
      '正方形',
      '五角星',
      '圆形'
    ],
    rightIndex:0
  },
  {
    problem1:'手表变成了电脑,台灯变成了铅笔',
    award:'http://yuan619.xyz/xy/award22.png',
    problem2:'什么正在变成电脑?',
    difficulty:1,
    punish:15,
    answer:[
      '台灯',
      '钢笔',
      '铅笔',
      '手表'
    ],
    rightIndex:3
  },
  {
    problem1:"小明用绿色铅笔写了一个'红'字",
    award:'http://yuan619.xyz/xy/award33.png',
    problem2:'谁用铅笔写了一个什么字?',
    difficulty:2,
    punish:11,
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
    punish:11,
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
    punish:11,
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
    punish:11,
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
    punish:8,
    answer:[
      '蓝色  番茄',
      '绿色  土豆 ',
      '黄色  黄瓜',
      '灰色  西瓜'
    ],
    rightIndex:0
  },
  {
    problem1:'棕色的小狗正在变成铅笔,老鼠正在变成蚊子',
    award:'http://yuan619.xyz/xy/award55.png',
    problem2:'___正在变成铅笔,老鼠变成了___',
    difficulty:3,
    punish:8,
    answer:[
      '黑色  蚊子',
      '棕色  蚊子',
      '棕色  苍蝇',
      '黑色  苍蝇'
    ],
    rightIndex:1
  },
  
]

// var a = "2" 可以随便添加

// 给脚本文件定义一个出口
module.exports = {
  postList: question,
  // a_key: a
}
