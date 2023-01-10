var timer = null;
var end;
var toZero;
var btn = document.getElementById("btn");
var oDay = document.getElementById("day");
var oHour = document.getElementById("hour");
var oMinute = document.getElementById("minute");
var oSecond = document.getElementById("second");
var endtime = document.getElementById("endtime");
var startBtn = document.getElementById("start-count");
toZero =
   oDay.innerHTML =
   oHour.innerHTML =
   oMinute.innerHTML =
   oSecond.innerHTML =
      "00";
startBtn.onclick = function () {
   end = endtime.value;
   if (!end) {
      alert("Please enter date！");
      return false;
   }
   document.getElementById("countdown-content").onclick = function () {
      fun();
   };
   function fun() {
      document.getElementById("countdown-content").style.display =
         "inline-block";
   }
   countDown();
   timer = setInterval(countDown, 1000);
};

function countDown() {
   var timedate = new Date(Date.parse(end.replace(/-/g, "/")));
   var now = new Date();
   var date = (timedate.getTime() - now.getTime()) / 1000;
   var day = Math.floor(date / (60 * 60 * 24));
   var _hour = date - day * 60 * 60 * 24;
   var hour = Math.floor(_hour / (60 * 60));
   var _minute = _hour - hour * 60 * 60;
   var minute = Math.floor(_minute / 60);
   var _second = _minute - minute * 60;
   var second = Math.floor(_second);

   function toDou(n) {
      if (n < 10) {
         return "0" + n;
      } else {
         return "" + n;
      }
   }
   if (date > 0) {
      oDay.innerHTML = toDou(day);
      oHour.innerHTML = toDou(hour);
      oMinute.innerHTML = toDou(minute);
      oSecond.innerHTML = toDou(second);
   } else {
      btn.className = "";
      btn.className = "btn";
      btn.onclick = function () {
         alert("oops");
      };
      endtime.value = "";
      clearInterval(timer);
      toZero;
   }
}
console.log("testing");
