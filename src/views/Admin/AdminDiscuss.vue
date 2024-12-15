<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useAdminStore } from '@/stores/userInfo';
import { ElMessage, ElMessageBox } from 'element-plus';
import AdminNav from './AdminNav.vue';
import AdminHeader from './AdminHeader.vue';
import { DeleteDiscussAPI, DeletePostAPI, GetDiscussAPI, GetPostListAPI } from '@/apis/Common';
import { AdminCreatePostAPI } from '@/apis/Admin';

const route = useRoute();
const router = useRouter();
const backToTable = () => {
  router.push('/AdminDiscussTable');
}

const discuss = ref({})
const getDiscuss = async () => {
  const temp = await GetDiscussAPI(route.params.id);
  discuss.value = temp.result;
}
onMounted(() => { getDiscuss(); })

const adminInfo = useAdminStore().adminInfo;
const deleteDiscuss = async () => {
  ElMessageBox.confirm(
    '确定永久删除该帖子吗？',
    '确认操作',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(async () => {
      // 若无需警告，则只需保留这几行
      await DeleteDiscussAPI(route.params.id)
      // console.log("删除成功")
      ElMessage({
        message: '删除成功！',
        type: 'success',
      })
      router.replace({ path: '/AdminDiscussTable' });
    })
    .catch(() => {
      ElMessage({
        type: 'error',
        message: '取消操作',
      })
    })
}

const dialogFormVisible = ref(false);
const postContent = ref('')
const createPost = async () => {
  const account = adminInfo.account;
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const date = `${year}-${month}-${day}`;
  console.log(account, date, postContent.value);

  // await AdminCreatePostAPI(account, date, postContent.value)
  dialogFormVisible.value = false
  ElMessage({
    message: '回帖成功！',
    type: 'success',
  })
  setTimeout(() => {
    window.location.reload();  // 1.5秒后刷新页面
  }, 1500);
}

const postList = ref([])
const getPostList = async () => {
  const id = route.params.id
  const temp = await GetPostListAPI(id)
  postList.value = temp.result;
  console.log(postList.value);
}
onMounted(() => { getPostList(); })

const deletePost = async (postId) => {

  ElMessageBox.confirm(
    '确定永久删除该跟帖吗？',
    '确认操作',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(async () => {
      // 若无需警告，则只需保留这几行
      // await DeletePostAPI(postId)        
      console.log(postId)
      ElMessage({
        message: '删除成功！',
        type: 'success',
      })
      setTimeout(() => {
        window.location.reload();  // 1.5秒后刷新页面
      }, 1500);
    })
    .catch(() => {
      ElMessage({
        type: 'error',
        message: '取消操作',
      })
    })
}

</script>

<template>
  <div>
    <AdminNav></AdminNav>
    <AdminHeader></AdminHeader>
    <el-container class="background">

      <el-aside class="aside" width="show?'64px':'300px'">

      </el-aside>

      <el-container class="main">
        <el-header>

        </el-header>
        <el-main style="padding-left: 10%; padding-right: 10%">
          <el-page-header @back="backToTable" content="帖子标题" style="margin-bottom: 2%">
          </el-page-header>
          <el-row class="buttons">
          </el-row>
          <el-divider>楼主</el-divider>
          <el-card shadow="hover" style="margin-bottom: 2%">
            <el-row>
              <el-col :offset="2" :span="12">
                <el-row class="time" style="color: grey; font-size: 16px;">
                  发表于 {{ discuss.DiscussTime }}
                </el-row>
                <el-row class="userName">
                  <el-col style="font-size: 19px; font-weight: 600;">
                    发帖人： {{ discuss.DiscussByName }}
                    <el-tag size="large" style=" margin-left: 10px;">
                      <span>{{ discuss.DiscussByType }}</span>
                    </el-tag>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :offset="2" :span="21" style="margin-top: -20px;">
                <el-row class="content"
                  style="font-size: 18px; word-break: break-all; text-indent: 2em; margin-top: 45px"
                  v-html="discuss.DiscussContent">
                </el-row>
                <el-row class="delete" :span="1" style="margin-left: 850px; margin-top: 15px;">
                  <div>
                    <el-link type="danger" v-on:click="deleteDiscuss">删除</el-link>
                  </div>
                  <el-button v-on:click="dialogFormVisible = true" type="primary" size="small"
                    style="margin-left: 30px;">跟贴</el-button>
                </el-row>

              </el-col>
              <el-col :offset="1" :span="1">

              </el-col>
            </el-row>
          </el-card>

          <el-dialog v-model="dialogFormVisible">
            <el-input class="input" type="textarea" :rows="8" placeholder="与主题相关的讨论" v-model="postContent"
              style="margin-bottom: 20px;">
            </el-input>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="createPost">确 定</el-button>
            </div>
          </el-dialog>
          <el-divider>跟贴</el-divider>
          <div v-for="post in postList" v-bind:key="1">
            <el-row>
              <el-col :span="1" :offset="1">
                <img src="../../assets/DemoPic/post.png" alt="sorry">
              </el-col>
              <el-col :span="25" style="margin-left: 20px;">
                <el-row class="time">
                  发表于 {{ post.postTime }}
                </el-row>
                <el-row class="userName">
                  <!-- <div v-if="post.isTeacher === 1">
                    {{post.userNickName}}({{post.userName}}) (教师) :
                  </div>
                  <div v-else-if="post.isTeacher === 2">
                    {{post.userNickName}}({{post.userName}}) (管理员) :
                  </div>
                  <div v-else>
                    {{post.userNickName}}({{post.userName}}) :
                  </div> -->
                  <div>
                    {{ post.postByName }} ({{ post.postByType }}) :
                  </div>
                </el-row>
                <el-col class="content" :span="18" v-html="post.postContent"
                  style="font-size: 17px; word-break: break-all; text-indent: 2em;">
                </el-col>
              </el-col>
              <!-- <el-col class="content" :span="18" v-html="post.postContent" style="font-size: 18px; word-break: break-all;">
              </el-col> -->
              <el-col class="delete" :span="30" style="float: right">
                <div>
                  <el-link type="danger" v-on:click="deletePost(post.postId)" style="margin-left: 1000px;">删除</el-link>
                </div>
              </el-col>
            </el-row>
            <el-divider></el-divider>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>