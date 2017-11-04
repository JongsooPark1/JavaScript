function shuffle(arr, memNum) {
  var n = 0;
  var randomName = [];
  var element = ""
  var nameArr = new Array(memNum);
  for (var i = 0; i < memNum; i++) {
    n = Math.floor(Math.random() * (memNum - i));
    randomName = arr.splice(n, 1);
    element = randomName.join();
    nameArr[i] = element;
  }
  return nameArr;
}

function start() {
  var memArr = ["b4", "Tram", "JINA", "TIM", "HUE", "jake", "Lemon", "Will", "Hyun",
                "Aliens", "CU", "해나", "ram", "Napster", "R", "Chloe", "luigi", "Jin",
                "JL", "Elly", "AMING", "KOO", "Jack",
                "cow", "Min", "Brian", "훈"];
  var memNum = memArr.length;
  var arr = shuffle(memArr, memNum);
  bar1.input1.value = arr[0] + "   " + arr[1] + "   " + arr[2] + "   " + arr[3];
  bar1.input2.value = arr[4] + "   " + arr[5] + "   "+ arr[6] + "   " + arr[7];
  bar1.input3.value = arr[8] + "   " + arr[9] + "   " + arr[10] + "   " + arr[11];
  bar1.input4.value = arr[12] + "   " + arr[13] + "   " + arr[14] + "   " + arr[15];
  bar1.input5.value = arr[16] + "   " + arr[17] + "   " + arr[18] + "   " + arr[19];
  bar1.input6.value = arr[20] + "   " + arr[21] + "   " + arr[22] + "   " + arr[23];
  bar1.input7.value = arr[24] + "   " + arr[25] + "   " + arr[26];
}
