<template>
    <div class="top-header">
        <div class="navContainer">
            <div class="header-nav">
                <ul>
                    <li v-for="(item,index) in navItems" :key="index">
                        <a href="#">{{ item.name }}</a>
                    </li>
                    <form>
                        <input type="text" placeholder="请输入搜索内容">
                        <button type="submit">搜索</button>
                    </form>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            navItems: [
            {name: '首页'},
            {name: '分类'},
            {name: '登录|注册'}
        ]
        }
    }
}
</script>

<style scoped>
.navContainer {
    list-style-type: none;
    background: rgba(255, 255, 255, 0.728);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: large;
    border-radius: 20px;
    box-shadow: 10px -2px 20px rgba(0, 0, 0, 0.1);
}
.navContainer ul{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 30px;
    text-align: center;
    align-items: center;
}
.navContainer li{
    list-style-type: none;
}
.navContainer li a {
    text-decoration: none;
}
.navContainer li a:link {
    text-decoration:none; 
    cursor:pointer; 
    color:rgb(10, 10, 10);
}
.navContainer li a:visited {
    text-decoration:none; 
    cursor:pointer; 
    color:rgb(10, 10, 10);
}
.navContainer li a:active {
    text-decoration:none; 
    cursor:pointer; 
    color:rgb(10, 10, 10);
}
.navContainer li a:hover {
    text-decoration:none; 
    cursor:pointer; 
    color:rgb(255, 0, 0);
}
</style>