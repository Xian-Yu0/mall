<script setup>
import { useBuyerStore } from '@/stores/userInfo';
import BuyerHeader from './BuyerHeader.vue';
import BuyerNav from './BuyerNav.vue';
import { ref } from 'vue';
import { BuyerGetDiscussListAPI, getMyDiscussAPI, BuyerSendNewDiscussAPI } from '@/apis/Buyer';
import { useRouter } from 'vue-router';

// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
// import QuillEditor from 'vue3-quill';

const buyerInfo = useBuyerStore().buyerInfo;
const newDiscuss = ref(false);
const input = ref({})
const sendNewDiscuss = async () => {
  const account = buyerInfo.account;
  const title = input.value.title;
  const content = input.value.content;
  console.log(account);
  console.log(title);
  console.log(content);
  const temp = await BuyerSendNewDiscussAPI({ account, title, content });
}

const myDiscussList = ref([]);
const getMyDiscuss = async () => {
  const account = buyerInfo.account;
  const temp = await getMyDiscussAPI(account)
  myDiscussList.value = temp.result;
}
getMyDiscuss();

const DiscussList = ref([]);
const getDiscussList = async() => {
  const temp = await BuyerGetDiscussListAPI();
  DiscussList.value = temp.result;
  console.log(DiscussList.value);
}
getDiscussList();

const router = useRouter();
const enterDiscuss = (DiscussId) => {
  router.replace( { path: `/BuyerDiscuss/${DiscussId}`})
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
                    <el-row style="margin-bottom: 10px">
                      <el-col>
                        <!-- <rich-text-editor></rich-text-editor> -->
                        <!-- <quill-editor></quill-editor> -->
                         <!-- <h1>aaaa</h1> -->
                        <!-- <quill-editor ref="text" v-model="input.content" style="height: 300px"></quill-editor><h1>bbbb</h1> -->
                         <el-input type="textarea" v-model="input.content" placeholder="请输入内容"></el-input>
                      </el-col>
                    </el-row>
                    <div slot="footer" class="dialog-footer" style="margin-top: 10%">
                      <el-button @click="newDiscuss = false">取消</el-button>
                      <el-button type="primary" @click="sendNewDiscuss">确定</el-button>
                    </div>
                  </el-dialog>
                </el-row>
                </el-card>
</el-col>


    <el-row style="margin: 0px auto; width: 80%;">
                <el-col :span="22">
                  <el-input
                    placeholder="查找相关帖子"
                    prefix-icon="el-icon-search" v-model="inputSearch"
                    style="height: 50px;">
                  </el-input>
                </el-col>
                <el-col :span="2">
                  <el-button
                    type="primary"
                    icon="el-icon-search"
                    style="float: right; height: 50px; width: 50px;"
                    @click="searchDiscuss(inputSearch)"
                    circle>查询->
                  </el-button>
                </el-col>
    </el-row>


<el-card v-for="discuss in DiscussList" shadow="hover" style="margin-bottom: 2%; width: 80%; margin: 20px auto;" >
  
                <div ><img src="../../../../demoPic/3.png" alt=""></div>
                <div class="clearfix" style="font-size: 24px;">
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