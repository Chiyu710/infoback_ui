/*
 * 接口统一集成模块
 */
import * as login from './moudules/login'
import * as user from './moudules/user'
import * as dept from './moudules/dept'
import * as role from './moudules/role'
import * as menu from './moudules/menu'
import * as dict from './moudules/dict'
import * as log from './moudules/log'
import * as article from './moudules/article'
import * as recommend from './moudules/recommend'
// 默认全部导出

export default {
    recommend,
    article,
    login,
    user,
    dept,
    role,
    menu,
    dict,
    log
}
