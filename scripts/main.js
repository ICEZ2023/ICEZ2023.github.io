/*图片引用存放到myImage变量中*/
let myImage = document.querySelector('img');
/*将变量的点击事件与函数绑定 */
myImage.onclick=function(){
    /**
     * 点击图片获取图片路径
     */
    let mySrc = myImage.getAttribute('src');
    /**
     * 判断路径是否与原始图像路径相同
     */
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src','images/firefox-icon2.png');
    } else {
        myImage.setAttribute('src','images/firefox-icon.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let i = 0
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName){
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
 }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
 }
 
  