<template>
<div>
    <!-- <Header></Header> -->
		<mt-header title="记事本">
			<mt-button icon="more" slot="right" @click="handleToggleDrawer"></mt-button>
		</mt-header>
		<div class="content">
			<vue-drawer-layout
				ref="drawerLayout"
				@slide-start="handleSlideStart"
				@slide-move="handleSlideMove"
				@slide-end="handleSlideEnd"
				@mask-click="handleMaskClick">
				<div class="drawer" slot="drawer">
					<div class="text">
						<ul>
							<li>切换主题</li>
							<li>下载数据</li>
							<li>导入数据</li>
							<li>编辑数据</li>
							<li>清空数据</li>
						</ul>
					</div>
				</div>
				<div class="content" slot="content">
					
					<div class="text">
						<!-- 内容 start -->
						<section class="container">
							<div class="event-add">
								<input type="text" placeholder="待办事项" class="n-input" v-model="userset"> 
								<button class="add-btn" @click="addBtn">提交</button>
							</div> 
							<div class="event-content">
								<div class="event-tab">未完成
									<span class="mui-icon mui-icon-arrowdown"></span>
								</div> 
								<div class="event-box" style="height: auto; display: block;">
									<ul v-for="(item,index) in attr1" :key="index">
										<li class="event-list">
											<input type="checkbox" @click="select(index)"> 
											<div>{{item}}</div> 
											<button class="cancel-btn" @click="cancelBtn(index)">取消</button>
										</li>
									</ul>
								</div> 
								<div class="event-tab">已完成
								<span class="mui-icon mui-icon-arrowdown"></span>
							</div> 
							<div class="event-box" style="height: auto; display: block;">
								<ul v-for="(item,index) in attr2" :key="index">
									<li class="event-list">
										<input type="checkbox" @click="selected(index)" checked> 
										<div>{{item.text}}</div> 
										<span class="cancel-btn cancel-text" >{{item.time}}</span>
									</li>
								</ul>
							</div>
							<div class="event-tab">已取消
								<span class="mui-icon mui-icon-arrowdown"></span>
							</div> 
							<div class="event-box" style="height: auto; display: block;">
								<ul v-for="(item,index) in attr3" :key="index">
									<li class="event-list">
										<div class="event-delete">{{item}}</div> 
										<button class="cancel-btn" @click="reCancelBtn(index)">恢复</button>
									</li>
								</ul>
							</div>
						</div>
					</section>
						<!-- 内容 end -->
					</div>
				</div>
			</vue-drawer-layout>
		</div>
    <Footer></Footer>
</div>
</template>

<script type='text/ecmascript-6'>
import Header from "./commen/header";
import Footer from "./commen/footer";

export default {
  data() {
    return {
		userset:'',
        attr1:[],
		attr2:[],
		attr3:[],
		time:''
    };
  },
  components: {
    Header,
    Footer
	},
	created(){
	},
  methods: {
		//侧滑事件
    handleSlideStart() {
      // console.info("slide-start");
    },
    handleSlideMove(position) {
      // console.info("slide-move", position);
    },
    handleSlideEnd(visible) {
      // console.info("slide-end", visible);
    },
    handleMaskClick() {
      // console.info("mask-click");
      this.$refs.drawerLayout.toggle(false);
    },
    handleToggleDrawer() {
      this.$refs.drawerLayout.toggle();
		},
		// 点击提交
		addBtn(){
			this.attr1.push(this.userset);
			$('.n-input').val("");
		},
		cancelBtn(index){
			this.attr3.push(this.attr1[index]);
			this.attr1.splice(index,1);
			$('.n-input').val("");
		},
		//点击恢复
		reCancelBtn(index){
			this.attr1.push(this.attr3[index]);
			this.attr3.splice(index,1);
				$('.n-input').val("");
		},
		// 点击未完成中的复选框
		select(index){
			var obj = {};
			obj.time = this.getFormatDate();
			obj.text = this.attr1[index]
			this.attr2.push(obj);
			this.time = this.getFormatDate();
			this.attr1.splice(index,1);
				$('.n-input').val("");
			$("#checkbox").attr("checked", true);
		},
		// 点击已完成中的复选框
		selected(index){
			this.attr1.push(this.attr2[index].text);
			this.attr2.splice(index,1);
				$('.n-input').val("");
		},
		
		getFormatDate(){
			var nowDate = new Date();
			var year = nowDate.getFullYear();
			var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
			var date = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
			return year + "-" + month + "-" + date;
		}
	}
}
</script>

<style scoped>
header{
	height: 68px;
	font-size: 20px;
}
.content {
  height: 400px;
  position: relative;
}
.drawer {
  width: 70%;
  /* background-color: #f00; */
  height: 100%;
  margin-top: 44px;
}
.drawer .text ul li {
  width: 50%;
  height: 40px;
  background: #26a2ff;
  border-radius: 10px;
  color: #ffffff;
  margin: 0 auto;
  margin-top: 10px;
  line-height: 40px;
  text-align: center;
}
.n-input {
	width: 70%;
	color: #666666;
	font-size: 15px;
}
.add-btn {
	width: 20%;
	height: 40px;
	background-color: #26a2ff;
	color: #ffffff;
}
.event-add {
	margin-top: 20px;
	padding-left: 20px;
}
.event-tab {
	width: 100%;
	background-color: #26a2ff;
	line-height: 40px;
	margin: 10px 0;
	color: #ffffff;
	padding: 0 20px;
}
.event-tab>span {
	float: right;
	line-height: 40px;
}
.container {
	padding: 0 8px;
}
.event-box> ul {
	border: 1px solid #ccc;
	padding: 0 10px;
	overflow: hidden;
}
.event-list {
	line-height: 30px;
	border-bottom: 1px solid #ccc;
	padding: 10px 0;
}
.event-list:last-of-type {
	border-bottom: none;
}
.event-list>input {
	display: inline-block;
}
.event-list>div {
	display: inline-block;
}
.cancel-btn {
	float: right;
}
.event-delete,.cancel-text {
	font-size: 12px;
	text-decoration:line-through;
}
</style>