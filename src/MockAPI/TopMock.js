import Mock from  'mockjs'

 const topMock = Mock.mock('http://localhost:8080/api',{
    'list':{
      'data':[
        { 'id':'1',
          'name':'@ctitle(2),@ctitle(4)',

        },
        {
          'id':'2',
          'name':'@ctitle(4)',

        },
        {
          'id':'3',
          'name':'@ctitle(2)',
          'icon':'icon-xinxi'
        },
        {
          'id':'4',
          'name':'@ctitle(4)',
          'icon1':'icon-lower-triangle',
          'chilren|4-6':[
            {
              'name':'@ctitle(4)'
            }
          ]
        },
        {
          'id':'5',
          'name':'@ctitle(4)',
          'icon1':'icon-lower-triangle',
          'chilren|4-6':[
            {
              'name':'@ctitle(4)'
            }
          ]
        },
        {
          'id':'6',
          'name':'@ctitle(4)',
        },
        {
          'id':'7',
          'icon':'icon-shouji',
          'chilren':[
            {
              'img':'@img(5x5)'
            }
          ]
        },
        {
          'id':'8',
          'icon':'icon-weixin',
          'chilren':[
            {
              'img':'@img(5x5)'
            }
          ]
        }
      ]
    }
})


export default topMock
// module.exports = {
//   topMock:topMock
// }