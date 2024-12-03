<script setup>
import { useBuyerStore } from '@/stores/userInfo';
import { useRouter } from 'vue-router';

const router = useRouter();
const unLogin = () => {
    useBuyerStore().clearBuyerInfo(); 
    router.replace({path: '/'});
}

</script>

<template>
    <nav class="app-topnav">
        <div class="container">
            <ul>
                <template v-if="true">
                    <!-- <li><a href="javascript:;">{{ buyerName.name }}</a></li> -->
                     <li><a href="javascript:;">{{ useBuyerStore().buyerInfo.nickname }}</a></li>
                    <li><a href="javascript:;" @click="$router.replace(`/BuyerHistory`)">购物历史</a></li>
                    <li><a href="javascript:;" @click="$router.replace(`/BuyerModify`)">修改信息</a></li>
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