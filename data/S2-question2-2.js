var question = [
  {
    problem1:'蓝色正在变黄,绿色正在变紫,白色正在变灰',
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
    problem1:'白色正在变紫,绿色正在变黄,蓝色正在变灰',
    award:'http://yuan619.xyz/xy/award11.png',
    problem2:'什么颜色正在变紫?',
    difficulty:2,
    punish:18,
    answer:[
      '黄色',
      '灰色',
      '白色',
      '绿色'
    ],
    rightIndex:1
  },
  {
    problem1:'黑色长方形正在变成绿色菱形,蓝色正方形正在变成红色三角形',
    award:'http://yuan619.xyz/xy/award22.png',
    problem2:'红色由什么颜色变化而来?长方形正在变成什么形状?',
    difficulty:2,
    punish:14,
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
    award:'http://yuan619.xyz/xy/award22.png',
    problem2:'红色正在变成什么颜色?正方形正在变成什么形状?',
    difficulty:2,
    punish:14,
    answer:[
      '蓝色  三角形',
      '绿色  正方形',
      '黑色  三角形',
      '黑色  圆形'
    ],
    rightIndex:3
  },
  {
    problem1:'紫色圆形正在变成灰色正方形，红色三角形正在变成蓝色五角星，绿色长方形正在变成黑色菱形',
    award:'http://yuan619.xyz/xy/award33.png',
    problem2:'红色正在变成什么颜色?正方形由什么图形变化而来?',
    difficulty:3,
    punish:10,
    answer:[
      '蓝色  圆形',
      '绿色  菱形 ',
      '黄色  五角星',
      '灰色  长方形'
    ],
    rightIndex:0
  },
  {
    problem1:'紫色五角星正在变成黑色菱形，蓝色三角形正在变成绿色圆形，红色长方形正在变成灰色正方形',
    award:'http://yuan619.xyz/xy/award33.png',
    problem2:'紫色正在变成什么颜色?正方形由什么图形变化而来?',
    difficulty:3,
    punish:10,
    answer:[
      '黑色  长方形',
      '绿色  菱形 ',
      '黄色  五角星',
      '蓝色  圆形'
    ],
    rightIndex:0
  },
  {
    problem1:'蓝色云朵正在变成紫色树叶，红色椅子正在变成灰色汽车，黑色桌子正在变成青色水杯',
    award:'http://yuan619.xyz/xy/award44.png',
    problem2:'桌子正在变成什么?红色变成了什么颜色',
    difficulty:3,
    punish:10,
    answer:[
      '椅子  紫色',
      '水杯  灰色 ',
      '云朵  黑色',
      '汽车  青色'
    ],
    rightIndex:1
  },
  {
    problem1:'白色钢笔正在变成绿色蛋糕，灰色台灯正在变成青色手表，黑色勺子正在变成红色汽车',
    award:'http://yuan619.xyz/xy/award44.png',
    problem2:'台灯正在变成什么,白色变成了什么颜色',
    difficulty:3,
    punish:10,
    answer:[
      '蛋糕  紫色',
      '手表  绿色',
      '汽车  黑色',
      '钢笔  青色'
    ],
    rightIndex:1
  },
  {
    problem1:'黑衣服的小明在白色的操场，绿衣服的小刚在黄色的教室，蓝衣服的小红在紫色的办公室',
    award:'http://yuan619.xyz/xy/award55.png',
    problem2:'小明穿着什么颜色的衣服?谁在办公室?教室是什么颜色的?',
    difficulty:4,
    punish:8,
    answer:[
      '白色 小刚 紫色',
      '绿色 小红 白色',
      '绿色 小刚 黄色',
      '蓝色 小红 紫色'
    ],
    rightIndex:2
  },
  {
    problem1:'蓝衣服小红的在白色的校门口，黑衣服的小刚在紫色的公园，绿衣服的小明在黄色的教室',
    award:'http://yuan619.xyz/xy/award55.png',
    problem2:'小刚穿着什么颜色的衣服?谁在校门口?教室是什么颜色的?',
    difficulty:4,
    punish:8,
    answer:[
      '黑色 小红 黄色',
      '绿色 小红 白色',
      '黑色 小刚 黄色',
      '蓝色 小明 紫色'
    ],
    rightIndex:0
  }
]

// var a = "2" 可以随便添加

// 给脚本文件定义一个出口
module.exports = {
  postList: question,
  // a_key: a
}
