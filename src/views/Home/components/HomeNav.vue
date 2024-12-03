<script setup>
</script>

<template>
    <nav class="app-topnav">
        <div class="container">
            <ul>
                <template v-if="true">
<li> 
<a href="">                   
<el-dropdown>
    <span style="color: #cdcdcd;">
      登录
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="$router.push('/BuyerLogin')">我是消费者</el-dropdown-item>
        <el-dropdown-item @click="$router.push('/SellerLogin')">我是商家</el-dropdown-item>
        <el-dropdown-item @click="$router.push('/AdminLogin')">我是管理员</el-dropdown-item>
      </el-dropdown-menu>
    </template>
</el-dropdown>
</a>    
</li>

<li> 
<a href="">                   
<el-dropdown>
    <span style="color: #cdcdcd;">
      注册
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="$router.push('/BuyerLogin')">注册消费者账号</el-dropdown-item>
        <el-dropdown-item @click="$router.push('/SellerLogin')">注册商家账号</el-dropdown-item>
      </el-dropdown-menu>
    </template>
</el-dropdown>
</a>    
</li>

                    <li><a href="javascript:;">帮助中心</a></li>
                    <li><a href="javascript:;">关于我们</a></li>
                </template>
            </ul>
        </div>
        
    </nav>
    
</template>


<style scoped lang="scss">
.app-topnav {
    background: #333;

    ul {
        display: flex;
        height: 53px;
        justify-content: flex-end;
        align-items: center;

        li {
            a {
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 1;
                display: inline-block;

                i {
                    font-size: 14px;
                    margin-right: 2px;
                }

                &:hover {
                    color: $xtxColor;
                }
            }

            ~li {
                a {
                    border-left: 2px solid #666;
                }
            }
        }
    }
}
</style>