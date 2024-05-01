  // 检查本地存储是否已经存储了访问次数，如果没有则初始化为0
  if (!localStorage.getItem('visitCount')) {
    localStorage.setItem('visitCount', 0);
}

// 获取当前访问次数
var currentVisitCount = localStorage.getItem('visitCount');

// 更新访问次数
currentVisitCount++;
localStorage.setItem('visitCount', currentVisitCount);

// 更新页面上的访问次数文本
var visitCountElement = document.getElementById('visitCount');
visitCountElement.textContent = `您使用当前设备地址打开此网站 ${currentVisitCount} 次`;
function showAlert() {
    alert("您无权限访问www.zyhgov.cn ！");
}
function checkstudentid() {
  var studentidInput = document.getElementById("studentid");
  var studentidValidation = document.getElementById("studentidValidation");

  if (/^(22200|23200)\d{4}$/.test(studentidInput.value)) {
    studentidValidation.className = "validation-icon valid";
  } else {
    studentidValidation.className = "validation-icon invalid";
  }
 
}

  // 映射表：将学号映射到拼音首字母
  var studentIdToPinyin = {
  "222003872": "zyh",
  "222003866": "zxp",
  "232003872": "zyhgov",
};



function checkPassword() {
  var studentidInput = document.getElementById("studentid");
  var passwordInput = document.getElementById("password");
  var passwordValidation = document.getElementById("passwordValidation");

  var studentId = studentidInput.value;
  var pinyin = studentIdToPinyin[studentId];

  if (pinyin) {
  var expectedPassword = pinyin + "123456";
  var enteredPassword = passwordInput.value;

  if (enteredPassword === expectedPassword) {
      passwordValidation.className = "validation-icon valid";
  } else {
      passwordValidation.className = "validation-icon invalid";
  }
} else {
  passwordValidation.className = "validation-icon invalid";
}
}






var welcomeMessages = {
  "222003872": "欢迎您，张永豪管理员，来自杖雍皓的请示！",
  "222003866": "欢迎您，张♥平美女管理员，来自杖雍皓的请示！",
  "232003872": "欢迎您，zyhgov管理员，来自杖雍皓的请示！",
};

  // 222003870和222003874这两个学号的例外处理
  welcomeMessages["222003870"] = "检测到您的学号并非系统学号，请查看重新填写或退出登录";
  welcomeMessages["222003874"] = "检测到您的学号并非系统学号，请查看重新填写或退出登录";
  welcomeMessages["222003893"] = "检测到您的学号并非系统学号，请查看重新填写或退出登录";


  document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // 阻止表单默认提交行为

  // var studentId = document.getElementById("studentid").value;
  var studentId = document.getElementById("studentid").value;
  var isValidStudentId = false;
  // 检查学号是否在映射表中
  if (studentId in studentIdToPinyin) {
    isValidStudentId = true;
  } else {
    alert("检测到您的学号不在系统中，请查看重新填写或退出登录");
    document.getElementById("studentid").value = ""; // 清空学号输入框
    document.getElementById("password").value = ""; // 清空密码输入框
  }
  // if (studentId >= "222003854" && studentId <= "222003893" && studentId !== "222003870" && studentId !== "222003874") {
  //     // 学号合法，执行密码验证
  //     checkPassword();
  // } else {
  //     alert("检测到您的学号并非大数据2203班同学，请查看重新填写或退出登录");
  //     document.getElementById("studentid").value = ""; // 清空学号输入框
  //     document.getElementById("password").value = ""; // 清空密码输入框
  // }
  if (isValidStudentId) {
    // 学号合法，执行密码验证
    checkPassword();
  }
// 检查学号和密码的条件（仅在学号合法时进行）
if (isValidStudentId) {
  var enteredPassword = document.getElementById("password").value;
  var pinyin = studentIdToPinyin[studentId];

  if (pinyin) {
    var expectedPassword = pinyin + "123456";
    if (enteredPassword === expectedPassword) {
      // 密码验证通过
      var currentDate = new Date();
      var currentYear = currentDate.getFullYear();
      var currentMonth = currentDate.getMonth() + 1;
      var currentDay = currentDate.getDate();
      var currentHour = currentDate.getHours();
      var currentMinute = currentDate.getMinutes();

      var currentTimeString = `${currentYear}年${currentMonth}月${currentDay}日 ${currentHour}时${currentMinute}分`;

      var welcomeMessage = welcomeMessages[studentId] + "，" + currentTimeString;

      alert(welcomeMessage);
      window.location.href = "https://zyhgov.gitee.io/zyh/ZhangYongHao/jieduanyi(%E6%94%B9%E5%90%8D%E4%BB%A5%E5%AE%9A%E5%90%91404,%E6%9C%AA%E6%9D%A5%E5%8F%AF%E8%B0%83%E5%9B%9E)/index.html";
    } else {
      alert("Error*密码错误，请重新输入，密码要求学号对应姓名首字母+123456  错误代码: err-Initial-1 ");
      document.getElementById("password").value = ""; // 清空密码输入框
    }
  } else {
    alert("无法找到与系统内学号匹配的拼音首字母");
  }


    // 检查学号和密码的条件
  //   if (studentId >= "222003854" && studentId <= "222003893" && studentId !== "222003870" && studentId !== "222003874") {
  // var enteredPassword = document.getElementById("password").value;
  
  // var pinyin = studentIdToPinyin[studentId];
  
  // if (pinyin) {
  //     var expectedPassword = pinyin + "123456";
  //     if (enteredPassword === expectedPassword) {
  //         // 密码验证通过
  //         var currentDate = new Date();
  //         var currentYear = currentDate.getFullYear();
  //         var currentMonth = currentDate.getMonth() + 1;
  //         var currentDay = currentDate.getDate();
  //         var currentHour = currentDate.getHours();
  //         var currentMinute = currentDate.getMinutes();

  //         var currentTimeString = `${currentYear}年${currentMonth}月${currentDay}日 ${currentHour}时${currentMinute}分`;

  //         var welcomeMessage = welcomeMessages[studentId] + "，" + currentTimeString;

  //         alert(welcomeMessage);
  //         window.location.href = "../index.html";
  //     } else {
  //         alert("Error*密码错误，请重新输入，密码要求学号对应姓名首字母+123456  错误代码: err-Initial-1 ");
  //         document.getElementById("password").value = ""; // 清空密码输入框
  //     }
  // } else {
  //     alert("无法找到与学号匹配的拼音首字母");
  // }
} else {
  alert("检测到您的学号不在系统中，请查看重新填写或退出登录");
  document.getElementById("studentid").value = ""; // 清空学号输入框
  document.getElementById("password").value = ""; // 清空密码输入框
}

  });
  function seekHelp() {
  window.location.href = "https://yyh-0g819f773243d38b-1314221350.tcloudbaseapp.com/zixun/fuwu/zixunfuwu.htm";
}