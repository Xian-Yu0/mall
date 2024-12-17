<script setup>
import { useAdminStore } from '@/stores/userInfo';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import AdminNav from './AdminNav.vue';
import AdminHeader from './AdminHeader.vue';
import { AdminCreateDiscussAPI, AdminGetMyDiscussAPI } from '@/apis/Admin';
import { GetDiscussListAPI, SearchDiscussAPI } from '@/apis/Common';
import { ElMessage } from 'element-plus';

const adminInfo = useAdminStore().adminInfo
const newDiscuss = ref(false);
const input = ref({})
const createDiscuss = async () => {
  const account = adminInfo.account;

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const date = `${year}-${month}-${day}`;

  const title = input.value.title;
  const content = input.value.content;
  console.log(account);
  console.log(title);
  console.log(content);
  // 需要三种分开，放入不同的表
  await AdminCreateDiscussAPI(account, date, title, content);

  newDiscuss.value = false;
  ElMessage({
    message: '发帖成功！',
    type: 'success',
  })
  setTimeout(() => {
  window.location.reload();  // 1.5秒后刷新页面
  }, 1500);
}

const myDiscussNum = ref(0);
const getMyDiscussNum = async () => {
  const account = adminInfo.account;
  const temp = await AdminGetMyDiscussAPI(account)
  myDiscussNum.value = temp.data.result.length;
}
onMounted(()=>{getMyDiscussNum();}) 

const searchMyDiscuss = async() => {
  const account = adminInfo.account
  const temp = await AdminGetMyDiscussAPI(account)
  discussList.value = temp.data.result
}

const discussList = ref([]);
const getDiscussList = async() => {
// 不需要三种分开
  const temp = await GetDiscussListAPI()
  discussList.value = temp.data.result;
  searchInput.value = ''
}
onMounted(()=>{getDiscussList()})

const router = useRouter();
const enterDiscuss = (DiscussId) => {
  router.push(`/AdminDiscuss/${DiscussId}`)
}

const searchInput = ref('')
const searchDiscuss = async() => {
  const temp = await SearchDiscussAPI(searchInput.value);
  discussList.value = temp.data.result
}

</script>

<template>

<AdminNav></AdminNav>
<AdminHeader></AdminHeader>
<el-col :span="8" :offset="2" class="right-information" style="margin: 30px auto;">
              <el-card shadow="hover" style="width: 100%">
                <el-row>
                  <el-col :span="9">
                    <!-- <el-image :src=userImg lazy style="width: 10px;height: 10px;"></el-image> -->
                     <img src="../../assets/DemoPic/user.png" alt="" style="width: 100px; height: 100px; margin-top: 15px; margin-left: 30px">
                  </el-col>
                  <el-col :span="10" :offset="1">
                    <el-descriptions :column="1" style="margin-top: 15px;">
                      <el-descriptions-item label="账号">{{adminInfo.account}}</el-descriptions-item>
                      <el-descriptions-item label="用户名">{{adminInfo.nickname}}</el-descriptions-item>
                      <el-descriptions-item label="已发帖子">{{myDiscussNum}}</el-descriptions-item>
                    </el-descriptions>
                  </el-col>
                </el-row>
                <el-row>
                  <el-divider></el-divider>
                </el-row>
                <el-row>
                  <el-button @click="newDiscuss = true" style="width: 100%" type="primary">新建主题贴</el-button>
                  <el-dialog title="新建主题帖" v-model="newDiscuss" width="70%">
                    <el-row style="margin-bottom: 10px">
                      <el-col>
                        <el-input v-model="input.title" placeholder="请输入标题"></el-input>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col>
                         <el-input type="textarea" v-model="input.content" placeholder="请输入内容" :rows="8"></el-input>
                      </el-col>
                    </el-row>
                    <!-- 文本框与 取消 确定 间的距离用下面的margin-top确定 -->
                    <div slot="footer" class="dialog-footer" style="margin-top: 3%">
                      <el-button @click="newDiscuss = false">取消</el-button>
                      <el-button type="primary" @click="createDiscuss">确定</el-button>
                    </div>
                  </el-dialog>
                </el-row>
                </el-card>
</el-col>


    <el-row style="margin: 0px auto; width: 80%;">
                <el-col :span="16">
                  <el-input
                    placeholder="查找相关帖子"
                    prefix-icon="el-icon-search" v-model="searchInput"
                    style="height: 40px;">
                  </el-input>
                </el-col>
            <el-col :span="2" style="margin-left: 25px;">
              <el-button
                type="primary"
                @click="searchDiscuss" style="height: 40px;">
                搜索帖子
              </el-button>
            </el-col>
            <el-col :span="2" style="margin-left: 10px;">
              <el-button
                type="primary"
                @click="searchMyDiscuss" style="height: 40px;">
                查看我的帖子
              </el-button>
            </el-col>
            <el-col :span="2" style="margin-left: 40px;">
              <el-button
                type="primary"
                @click="getDiscussList" style="height: 40px;">
                查看全部帖子
              </el-button>
            </el-col>
    </el-row>


<el-card v-for="discuss in discussList" shadow="hover" style="margin-bottom: 2%; width: 80%; margin: 20px auto;" >
                <div class="clearfix" style="font-size: 24px; padding-top: 20px;">
                  <span>{{ discuss.DiscussTitle }}</span>
                  <el-button style="float: right; padding: 3px 0" type="text"
                             @click="enterDiscuss(discuss.DiscussId)">进入帖子</el-button>
                </div>
                <div class="textitem" style="font-size: 10px; margin-top: 2%; margin-bottom: 2%">
                  
                </div>
                <div>
                    <el-tag size="large" style="float: right;margin-right: 40px;margin-bottom: 40px;">
                  <span>{{ discuss.DiscussByType }}</span>
                  </el-tag>
                    <el-tag size="large" style="float: right;margin-right: 30px;margin-bottom: 40px;">
                  <span>发帖人：{{ discuss.DiscussBy }}</span>
                  </el-tag>
                  <span style="color: gray; font-size: 14px">发表于-{{ discuss.DiscussTime }}</span>
                </div>
</el-card>

</template>