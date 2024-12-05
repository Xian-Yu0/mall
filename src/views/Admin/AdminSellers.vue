<script setup>
import AdminHeader from './AdminHeader.vue';
import AdminNav from './AdminNav.vue';


</script>

<template>
      <div>
    <el-container class="background">
      <el-aside class="aside" width="show?'64px':'300px'">
        <AdminNav></AdminNav>
      </el-aside>
        <el-header>
          <AdminHeader></AdminHeader>
        </el-header>
        <el-main style="padding-left: 10%; padding-right: 10%; margin-top: 40px;">
          <el-row style="margin-top: 40px; margin-bottom: 30px">
            <el-col :span="23">
              <el-input
                placeholder="查找商家"
                prefix-icon="el-icon-search" v-model="inputSearch">
              </el-input>
            </el-col>
            <el-col :span="1">
              <el-button
                type="primary"
                icon="el-icon-search"
                style="float: right"
                @click="searchCourse(inputSearch)"
                circle></el-button>
            </el-col>
          </el-row>
            <el-card v-for="i in 9" :key="index" style="margin-bottom: 2%">
            <el-row>
              <el-col :offset="2" :span="2">
                <el-empty :image-size="40" style="margin: 0 !important; padding: 0 !important;"></el-empty>
              </el-col>
              <el-col :offset="2" :span="16">
                <el-row style="margin-bottom: 3%">
                  <span style="font-size: 16px"><strong>商家名</strong></span>
                </el-row>
                <el-row>
                  <el-tag type="info">工号</el-tag><span style="color: gray">&nbsp;&nbsp;11111111</span>
                </el-row>
              </el-col>
            </el-row>
          </el-card>
          <!-- <el-card v-for="(teacher, index) in showTeacherList" :key="index" style="margin-bottom: 2%">
            <el-row>
              <el-col :offset="2" :span="2">
                <el-empty :image-size="40" style="margin: 0 !important; padding: 0 !important;"></el-empty>
              </el-col>
              <el-col :offset="2" :span="16">
                <el-row style="margin-bottom: 3%">
                  <span style="font-size: 16px"><strong>{{ teacher.name }}</strong></span>
                </el-row>
                <el-row>
                  <el-tag type="info">工号</el-tag><span style="color: gray">&nbsp;&nbsp;{{teacher.id}}</span>
                </el-row>
              </el-col>
            </el-row>
          </el-card> -->
<!--          <el-table :data="teacherList" v-loading="loading">-->
<!--            <el-table-column label="教师工号" prop="id"></el-table-column>-->
<!--            <el-table-column label="教师名称" prop="name"></el-table-column>-->
<!--          </el-table>-->
        </el-main>
    </el-container>
  </div>

</template>