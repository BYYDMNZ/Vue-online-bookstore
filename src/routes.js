import Home from './components/Home'
import Self from './components/Self'
import Admin from './components/Admin'
import Login from './components/Login'
import Register from  './components/Register'
import BookDetail from './components/BookDetail'
import ImmediatelyBuy from './components/ImmediatelyBuy'
import Statistic from './components/Statistic'
import Comment from './components/Comment'
export const routes = [
  {path:'/',component:Home,name:'home'},
  {path:'/self',component:Self,name:'self'},
  {path:'/admin',component:Admin,name:'admin'},
  {path:'/login',component:Login,name:'login'},
  {path:'/register',component:Register,name:'register'},
  {path:'/bookdetail/:id',component:BookDetail,name:'bookdetail'},
  {path:'/immediatelybuy',component:ImmediatelyBuy,name:'immediatelybuy'},
  {path:'/statistic',component:Statistic,name:'statistic'},
  {path:'/comment/:id',component:Comment,name:'comment'},
  {path:'*',redirect:'/'}//如果路径错误就跳转到根路径
]
