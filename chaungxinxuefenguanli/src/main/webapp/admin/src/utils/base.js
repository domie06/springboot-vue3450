const base = {
    get() {
        return {
            url : "http://localhost:8080/chaungxinxuefenguanli/",
            name: "chaungxinxuefenguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/chaungxinxuefenguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "西藏民族大学创新学分管理系统"
        } 
    }
}
export default base
