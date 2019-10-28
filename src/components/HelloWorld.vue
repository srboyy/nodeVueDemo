<template>
  <div class="hello">
  		<h3>用户列表</h3>
  	<ul>
  		<li v-for="(item,index) in user">
  			<span>{{index+1}}.{{item.name}}</span>
  			<span>{{item.age}}</span>
  		</li>
  	</ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user:[]
    }
  },
  mounted() {
  	this.getdata()
  },
  methods: {
			getdata(){
					this.axios
			      .get(this.api+'userList')
			      .then((response) =>{ // 请求成功
			        console.log(response);
			        this.user = response.data.data
			      }
			      	)
			      .catch( (error) =>{ // 请求失败
			        console.log(error);
			      });
            
        }
		}
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
