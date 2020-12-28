var question = [
  {
    problem1:'蓝色正在变黄,绿色正在变紫,白色正在变灰',
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
    problem1:'白色正在变紫,绿色正在变黄,蓝色正在变灰',
    award:'http://yuan619.xyz/xy/award11.png',
    problem2:'什么颜色正在变紫?',
    difficulty:2,
    punish:15,
    answer:[
      '黄色',
      '灰色',
      '白色',
      '绿色'
    ],
    rightIndex:1
  },
  {
    problem1:'棕色正在变白,红色正在变蓝,橙色正在变青',
    award:'http://yuan619.xyz/xy/award22.png',
    problem2:'橙色正在变成什么颜色?',
    difficulty:1,
    punish:15,
    answer:[
      '青色',
      '绿色',
      '红色',
      '白色'
    ],
    rightIndex:0
  },
  {
    problem1:'橙色正在变青,红色正在变白,棕色正在变蓝',
    award:'http://yuan619.xyz/xy/award22.png',
    problem2:'棕色正在变成什么颜色?',
    difficulty:1,
    punish:15,
    answer:[
      '青色',
      '绿色',
      '蓝色',
      '白色'
    ],
    rightIndex:2
  },
  {
    problem1:'黑色长方形正在变成绿色菱形,蓝色正方形正在变成红色三角形',
    award:'http://yuan619.xyz/xy/award33.png',
    problem2:'红色由什么颜色变化而来?长方形正在变成什么形状?',
    difficulty:2,
    punish:11,
    answer:[
      '蓝色  三角形',
      '绿色  正方形',
      '黑色  三角形',
      '蓝色  菱形'
    ],
    rightIndex:3
  },
  {
    problem1:'蓝色正方形正在变成绿色圆形,红色三角形正在变成黑色长方形',
    award:'http://yuan619.xyz/xy/award33.png',
    problem2:'红色正在变成什么颜色?正方形正在变成什么形状?',
    difficulty:2,
    punish:11,
    answer:[
      '蓝色  三角形',
      '绿色  正方形',
      '黑色  三角形',
      '黑色  圆形'
    ],
    rightIndex:3
  },
  {
    problem1:'红色圆形正在变成灰色正方形,紫色三角形正在变成蓝色五角星',
    award:'http://yuan619.xyz/xy/award44.png',
    problem2:'红色正在变成什么颜色?三角形正在变成什么形状?',
    difficulty:2,
    punish:11,
    answer:[
      '灰色  正方形',
      '紫色  圆形',
      '灰色  五角星',
      '蓝色  正方形'
    ],
    rightIndex:2
  },
  {
    problem1:'紫色五角星正在变成黑色菱形，红色长方形正在变成灰色正方形',
    award:'http://yuan619.xyz/xy/award44.png',
    problem2:'紫色正在变成什么颜色?正方形由什么图形变化而来?',
    difficulty:3,
    punish:11,
    answer:[
      '黑色  长方形',
      '绿色  菱形 ',
      '黄色  五角星',
      '蓝色  圆形'
    ],
    rightIndex:0
  },
  {
    problem1:'紫色圆形正在变成灰色正方形，红色三角形正在变成蓝色五角星，绿色长方形正在变成黑色菱形',
    award:'http://yuan619.xyz/xy/award55.png',
    problem2:'红色正在变成什么颜色?正方形由什么图形变化而来?',
    difficulty:3,
    punish:8,
    answer:[
      '蓝色  圆形',
      '绿色  菱形 ',
      '黄色  五角星',
      '灰色  长方形'
    ],
    rightIndex:0
  },
  {
    problem1:'白色钢笔正在变成绿色蛋糕，灰色台灯正在变成青色手表，黑色勺子正在变成红色汽车',
    award:'http://yuan619.xyz/xy/award55.png',
    problem2:'台灯正在变成什么,白色变成了什么颜色',
    difficulty:3,
    punish:8,
    answer:[
      '蛋糕  紫色',
      '手表  绿色',
      '汽车  黑色',
      '钢笔  青色'
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
