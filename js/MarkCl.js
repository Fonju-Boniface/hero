//  GETTING FORM INPUTS AND (FORM) BY THEIR IDs =========

let Marksform = document.getElementById("Marksform");
let TableResult = document.getElementById("TableResult");
let MKFoBtn = document.getElementById("MKFoBtn");
let DoneBtn = document.getElementById("DoneBtn");
let EditBtn = document.getElementById("EditBtn");

let StudentName = document.getElementById("StudentName");
let StudentScore = document.getElementById("StudentScore");
let SubjectName = document.getElementById("SubjectName");
let SubjectScore = document.getElementById("SubjectScore");
let NewSubjectScore = document.getElementById("NewSubjectScore");
let gradeA = document.getElementById("gradeA");

let gradeB = document.getElementById("gradeB");
let gradeC = document.getElementById("gradeC");
let gradeD = document.getElementById("gradeD");
let gradeE = document.getElementById("gradeE");

//  GETTING table results fron FORM BY THEIR IDs =========

let ReStName = document.getElementById("ReStName");
let ReStScore = document.getElementById("ReStScore");
let ReSubName = document.getElementById("ReSubName");
let ReInSubScore = document.getElementById("ReInSubScore");
let ReNewSubScore = document.getElementById("ReNewSubScore");
let NewStScore = document.getElementById("NewStScore");
let StGrade = document.getElementById("StGrade");
let StResult = document.getElementById("StResult");

let NewSub = SubjectScore.value;

EditBtn.addEventListener("click", () => {
  TableResult.classList.remove("Activetable");
  Marksform.classList.remove("ActiveForm");
});

DoneBtn.addEventListener("click", () => {
  TableResult.classList.remove("Activetable");
  Marksform.classList.remove("ActiveForm");
  StudentName.value = "";
  StudentScore.value = "";
  SubjectName.value = "";
  SubjectScore.value = "";
  NewSubjectScore.value = "";
  gradeA.value = "";
  gradeB.value = "";
  gradeC.value = "";
  gradeD.value = "";
  gradeE.value = "";
});

Marksform.addEventListener("submit", (e) => {
  e.preventDefault();
 
  let MAkr = (StudentScore.value / SubjectScore.value) * NewSubjectScore.value;
  let Mark = MAkr.toFixed(2);
  NewMAkr = Number(Mark);
  let halfNSScore = NewSubjectScore.value / 2;
  let SubjectScoreN = Number(SubjectScore.value) - 2 + 2;
  let SubjectScoreC = SubjectScoreN;
  console.log(SubjectScoreC);

  if (
    StudentName.value == "" ||
    StudentScore.value == "" ||
    SubjectName.value == "" ||
    SubjectScore.value == "" ||
    NewSubjectScore.value == "" ||
    gradeA.value == "" ||
    gradeB.value == "" ||
    gradeC.value == "" ||
    gradeD.value == "" ||
    gradeE.value == "" ||
    NewMAkr > SubjectScoreC || 
    SubjectScoreC < StudentScore.value
    // NewMAkr >= halfNSScore
  ) {
    MKFoBtn.classList.add("ActiveMBTN");
    // console.log(StudentScore.value + " IS greater than " + SubjectScore.value);
    setTimeout(() => {
      MKFoBtn.classList.remove("ActiveMBTN");
    }, 900);
    return;
  } else if (halfNSScore > NewMAkr) {
    NewStScore.style.color = "red";
    StResult.style.color = "red";
    StGrade.style.color = "red";
    StResult.innerHTML = "FAILED";
    StGrade.innerHTML = "E";
    // return true
    // console.log("rong");
  } else if (NewMAkr < gradeD.value) {
    StGrade.innerHTML = "D";
    StGrade.style.color = "var(--orangered-color)";
    NewStScore.style.color = "var(--orangered-color)";
    StResult.style.color = "var(--orangered-color)";
    StResult.innerHTML = "Poor PASS";
    // return true
  } else if (NewMAkr <= gradeC.value) {
    StGrade.innerHTML = "C";
    StResult.innerHTML = "Good PASS";
    // return true
  } else if (NewMAkr <= gradeB.value) {
    StGrade.innerHTML = "B";
    StResult.innerHTML = "Great PASS";
    // return true
  } else if (NewMAkr <= gradeA.value) {
    StGrade.innerHTML = "A";
    StResult.innerHTML = "Excellent PASS";
  }else if (NewMAkr <= gradeE.value) {
    StGrade.innerHTML = "E";
    StResult.innerHTML = "FAILED";
    // return true
  } else{
    StResult.innerHTML = "PASSED";
  }

  ReStName.innerHTML = StudentName.value;
  ReStScore.innerHTML = StudentScore.value;
  ReSubName.innerHTML = SubjectName.value;
  ReInSubScore.innerHTML = SubjectScore.value;
  ReNewSubScore.innerHTML = NewSubjectScore.value;

  NewStScore.innerHTML = NewMAkr;

  TableResult.classList.add("Activetable");
  Marksform.classList.add("ActiveForm");
  // return true
});
