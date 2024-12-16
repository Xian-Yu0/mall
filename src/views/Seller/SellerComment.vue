<script setup>
import { SellerCreateCommentAPI } from '@/apis/Seller';
import { DeleteCommentAPI, GetDetailCommentAPI } from '@/apis/Common';
import { useSellerStore } from '@/stores/userInfo';
import { ElMessage, ElMessageBox } from 'element-plus';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const sellerInfo = useSellerStore().sellerInfo;

const commentList = ref([])
const getDetailComment = async () => {
    const temp = await GetDetailCommentAPI(route.params.id);
    commentList.value = temp.result;
    console.log(commentList.value);
}
onMounted(() => { getDetailComment(); })

const score = ref(5);
const createComment = async () => {
    const account = sellerInfo.account;

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const date = `${year}-${month}-${day}`;

    const content = document.getElementById("replyInput").innerText;

    const goodId = route.params.id
    // await SellerCreateCommentAPI(account, date, content, score.value, goodId);
    console.log(account);
    console.log(date);
    console.log(content);
    console.log(score.value);
    console.log(goodId)

    setTimeout(() => {
        window.location.reload();  // 1.5秒后刷新页面
    }, 1500);
}

const deleteComment = async (commentById, commentId) => {
    ElMessage({
        message: '您不能删除他人的评价！',
        type: 'error',
    })
}

</script>


<template>
    <div class="core">
        <div style="margin-top: 30px;">
            <div v-for="comment in commentList" :key="comment.commentId" class="author-title reply-father">
                <el-link type="danger" v-on:click="deleteComment(comment.commentById, comment.commentId)"
                    style="float: right; margin-top: 35px; margin-right: 30px;">删除</el-link>
                <div class="author-info" style="margin-top: 5px;">
                    <span class="author-name">{{ comment.commentByName }}</span>
                    <span class="author-time" style="margin-top: 5px;">{{ comment.CommentTime }}</span>
                </div>
                <div class="talk-box" style="margin-bottom: 7px;">
                    <p style="font-size: 16px; color: black; margin-left: -45px;">评分&nbsp;&nbsp;<span style="font-size: 20px;">{{
                        comment.CommentScore }}.0</span></p>
                    <p style="text-indent: 2em;">
                        <span class="reply">{{ comment.CommentContent }}</span>
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.core {
    width: 80%;
    margin: 10px auto;
}

.my-reply {
    padding: 10px;
    background-color: #fafbfc;
}

.my-reply .header-img {
    display: inline-block;
    vertical-align: top;
}

.my-reply .reply-info {
    display: inline-block;
    margin-left: 5px;
    width: 90%;
}

@media screen and (max-width: 1200px) {
    .my-reply .reply-info {
        width: 80%;
    }
}

.my-reply .reply-input {
    min-height: 20px;
    line-height: 22px;
    padding: 10px 10px;
    color: black;
    background-color: #fff;
    border-radius: 5px;
}

.my-reply .reply-input:empty::before {
    content: attr(placeholder);
    color: #ccc;
    /* placeholder 的颜色 */
}

.my-reply .reply-input:focus::before {
    content: none;
}

.my-reply .reply-input:focus {
    border: 2px solid #27ba9b;
    box-shadow: none;
    outline: none;
}

.my-reply .reply-btn-box {
    height: 25px;
    margin: 10px 0;
}

.my-reply .reply-btn {
    position: relative;
    float: right;
    margin-right: 15px;
}

.my-comment-reply {
    margin-left: 50px;
}

.my-comment-reply .reply-input {
    width: 100%;
}

.author-title {
    border-top: 1px solid rgba(178, 186, 194, 0.3);
}

.author-title {
    padding: 10px;
}

.author-title .header-img {
    display: inline-block;
    vertical-align: top;
}

.author-title .author-info {
    display: inline-block;
    margin-left: 5px;
    width: 60%;
    height: 40px;
    line-height: 20px;
}

.author-title .author-info>span {
    display: block;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.author-title .author-name {
    color: #000;
    font-size: 18px;
    font-weight: bold;
}

.author-title .author-time {
    font-size: 13px;
}

.author-title .icon-btn {
    width: 30%;
    padding: 0 !important;
    float: right;
}

@media screen and (max-width: 1200px) {
    .author-title .icon-btn {
        width: 20%;
        padding: 7px;
    }
}

.author-title .icon-btn>span {
    cursor: pointer;
}

.author-title .icon-btn .iconfont {
    margin: 0 5px;
}

.talk-box {
    margin: 0 50px;
}

.talk-box>p {
    margin: 0;
}

.talk-box .reply {
    font-size: 16px;
    color: #000;
}

.reply-box {
    margin: 10px 0 0 50px;
    background-color: #efefef;
}
</style>