<script setup>
import { useAdminStore } from '@/stores/userInfo';
import { useRouter } from 'vue-router';

const router = useRouter();
const unLogin = () => {
    useAdminStore().clearAdminInfo(); 
    router.replace({path: '/'});
}

</script>

<template>
    <nav class="app-topnav">
        <div class="container">
            <ul>
                <template v-if="true">
                    <!-- <li><a href="javascript:;">{{ buyerName.name }}</a></li> -->
                     <li><a href="javascript:;">{{ useAdminStore().adminInfo.nickname }}</a></li>
                    <li><a href="javascript:;" @click="$router.replace(`/AdminSellers`)">所有商家</a></li>
                    <li><a href="javascript:;" @click="$router.replace(`/AdminGoods`)">所有商品</a></li>
                    <li><a href="javascript:;" @click="unLogin()">退出登录</a></li>
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