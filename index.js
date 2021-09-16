var oliList = document.getElementsByTagName("li");
var oman = document.getElementById("man");
var obtnYes = document.getElementById("btnYes");
var oUl = document.getElementById("vip");

var names = [
  "夜游黄鹤楼(武汉)",
  "知音号(武汉)",
  "东湖游船(武汉)",
  "三国赤壁古战场(咸宁)",
  "木兰云雾山(武汉)",
  "黄山唐模风景区(黄山)",
  "徽州古城(黄山)",
  "东湖帆船(武汉)",
  "长江游船-船长9号(武汉)",
  "东湖疑海沙滩浴场(武汉)",
  "全民高乐夫(武汉)",
  "水上度假中心(武汉)",
  "武汉花博汇(武汉)",
  "武汉植物园(武汉)",
  "九峰森林动物园(武汉)",
  "胜天农庄(武汉)",
  "紫薇都市田园(武汉)",
  "木兰清凉寨(武汉)",
  "木兰姚家山(武汉)",
  "木兰锦里沟(武汉)",
  "九真山(武汉)",
  "木兰花乡(武汉)",
  "九真桃源(武汉)",
  "黄陂野村谷(武汉)",
  "新洲凤娃古寨(武汉)",
  "英山桃花冲景区(黄冈)",
  "大别山(主峰)南武当(黄冈)",
  "英山四季花海(黄冈)",
  "太阳溪森林亲子漂流(咸宁)",
  "金卉庄园(孝感)",
  "青云峡景区(安庆)",
  "彩虹瀑布旅游风景区(安庆)",
  "明堂山(安庆)",
  "齐云山(黄山)",
  "牯牛泽观音堂(黄山)",
  "武汉鸟语林(武汉)",
  "乐农湖畔(武汉)",
  "花海石林(武汉)",
  "木兰水镇(武汉)",
  "张公山寨(武汉)",
  "木兰花海乐园(武汉)",
  "龙泉山(武汉)",
  "帝王湖景区(黄冈)",
  "五脑山森林公园(黄冈)",
  "玄素洞(咸宁)",
  "黄石河漂流(黄冈)",
  "花乐汤温泉(黄冈)",
  "四季温泉馆爱漫温泉(孝感)",
];

var t = 0;

//格式
function place() {
  for (var i = 0; i < 48; i++) {
    t = i * (360 / 48) + "deg";
    oliList[i].innerHTML = names[i];
    oliList[i].style.transform = "rotate(" + t + ") translate(180px)";

    var oSpan = document.createElement("span");
    oSpan.innerHTML = "";
    oSpan.style.color = "#ac112c";
    oSpan.style.cursor = "pointer";
    oSpan.style.textAlign = "left";
    oliList[i].appendChild(oSpan);
  }
}
place();
//随机度数
function fun() {
  var num = Math.round(Math.random() * 48);
  return num * (360 / 48) + 180;
}
//旋转事件
var myDeg = 0;
obtnYes.onmousedown = function () {
  myDeg = myDeg + fun();
  oman.style.transitionDuration = "3s";
  obtnYes.style.boxShadow = "none";
  console.log(myDeg);
  oman.style.transform = "rotateZ(" + myDeg + "deg)";
};
obtnYes.onclick = function () {
  btnYes.style.boxShadow = "2px 2px 5px black";
};

//VIP列表
for (var i = 0; i < oliList.length; i++) {
  oliList[i].lastElementChild.onclick = function () {
    var oVip = document.createElement("li");
    oVip.innerHTML = this.parentElement.innerHTML;
    oVip.style.height = "20px";
    oVip.style.border = "1px solid #FFFFFF";
    oUl.appendChild(oVip);
  };
}
