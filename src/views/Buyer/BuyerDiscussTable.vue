<script setup>
import { useBuyerStore } from '@/stores/userInfo';
import BuyerHeader from './BuyerHeader.vue';
import BuyerNav from './BuyerNav.vue';
import { onMounted, ref } from 'vue';
import { BuyerGetMyDiscussAPI, BuyerCreateDiscussAPI } from '@/apis/Buyer';
import { useRouter } from 'vue-router';
import { GetDiscussListAPI, SearchDiscussAPI } from '@/apis/Common';

// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
// import QuillEditor from 'vue3-quill';

const buyerInfo = useBuyerStore().buyerInfo;
const newDiscuss = ref(false);
const input = ref({})
const createDiscuss = async () => {
  const account = buyerInfo.account;

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const date = `${year}-${month}-${day}`;

  const title = input.value.title;
  const content = input.value.content;

  // const temp = await BuyerCreateDiscussAPI(account, date, title, content);
}

const myDiscussList = ref([]);
const getMyDiscuss = async () => {
  const account = buyerInfo.account;
  const temp = await BuyerGetMyDiscussAPI(account)
  myDiscussList.value = temp.result;
}
onMounted(()=>{getMyDiscuss();}) 

const DiscussList = ref([]);
const getDiscussList = async() => {
  const temp = await GetDiscussListAPI();
  DiscussList.value = temp.result;
  searchInput.value = ''
}
onMounted(()=>{getDiscussList();}) 

const router = useRouter();
const enterDiscuss = (DiscussId) => {
  router.push(`/BuyerDiscuss/${DiscussId}`)
}

const searchInput = ref('')
const searchDiscuss = async() => {
  const temp = await SearchDiscussAPI(searchInput.value);
  DiscussList.value = temp.result
}

</script>

<template>
    <BuyerNav></BuyerNav>
    <BuyerHeader></BuyerHeader>
<el-col :span="8" :offset="2" class="right-information" style="margin: 30px auto;">
              <el-card shadow="hover" style="width: 100%">
                <el-row>
                  <el-col :span="9">
                    <!-- <el-image :src=userImg lazy style="width: 10px;height: 10px;"></el-image> -->
                     <img src="../../assets/images/user.png" alt="" style="width: 100px; height: 100px; margin-top: 15px; margin-left: 30px">
                  </el-col>
                  <el-col :span="10" :offset="1">
                    <el-descriptions :column="1" style="margin-top: 15px;">
                      <el-descriptions-item label="账号">{{buyerInfo.account}}</el-descriptions-item>
                      <el-descriptions-item label="用户名">{{buyerInfo.nickname}}</el-descriptions-item>
                      <el-descriptions-item label="已发帖子">{{myDiscussList.length}}</el-descriptions-item>
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
                        <!-- <rich-text-editor></rich-text-editor> -->
                        <!-- <quill-editor></quill-editor> -->
                         <!-- <h1>aaaa</h1> -->
                        <!-- <quill-editor ref="text" v-model="input.content" style="height: 300px"></quill-editor><h1>bbbb</h1> -->
                         <el-input type="textarea" v-model="input.content" placeholder="请输入内容" :rows="8"></el-input>
                      </el-col>
                    </el-row>
                    <div slot="footer" class="dialog-footer" style="margin-top: 3%">
                      <el-button @click="newDiscuss = false">取消</el-button>
                      <el-button type="primary" @click="createDiscuss">确定</el-button>
                    </div>
                  </el-dialog>
                </el-row>
                </el-card>
</el-col>


    <el-row style="margin: 0px auto; width: 80%;">
                <el-col :span="19">
                  <el-input
                    placeholder="查找相关帖子"
                    prefix-icon="el-icon-search" v-model="searchInput"
                    style="height: 40px;">
                  </el-input>
                </el-col>
                <el-col :span="2" style="margin-left: 20px;">
              <el-button
                type="primary"
                @click="searchDiscuss" style="height: 40px;">
                搜索帖子
              </el-button>
            </el-col>
            <el-col :span="2" style="margin-left: 10px;">
              <el-button
                type="primary"
                @click="getDiscussList" style="height: 40px;">
                查看全部帖子
              </el-button>
            </el-col>
    </el-row>


<el-card v-for="discuss in DiscussList" shadow="hover" style="margin-bottom: 2%; width: 80%; margin: 20px auto;" >
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