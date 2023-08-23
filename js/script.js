const questions = [
  {
    q: "Who is the highest run-scorer for the Pakistan cricket team in Test matches?",
    a: "Inzamam-ul-Haq",
    b: "Younis Khan",
    c: "Javed Miandad",
    d: "Mohammad Yousuf",
    correct: "b",
  },
  {
    q: 'Which Pakistani cricketer is known as the "Rawalpindi Express"?',
    a: "Shoaib Akhter",
    b: "Shahid Afridi",
    c: "Shoaib Malik",
    d: "Umer Gul",
    correct: "a",
  },
  {
    q: "In which year did the Pakistan cricket team win its first ICC Cricket World Cup?",
    a: "1987",
    b: "1992",
    c: "1999",
    d: "2003",
    correct: "b",
  },
  {
    q: "Who is the only Pakistani cricketer to score a triple century in Test cricket?",
    a: "Younis Khan",
    b: "Fawad Alam",
    c: "Misbah Ul Haq",
    d: "Azhar Ali",
    correct: "a",
  },
  {
    q: "Which Australian cricketer holds the record for the most Test runs?",
    a: "Ricky Ponting",
    b: "Steve Smith",
    c: "Allan Border",
    d: "Don Bradman",
    correct: "b",
  },
  {
    q: "Who is the leading wicket-taker in international cricket across all formats?",
    a: "Muttiah Muralitharan",
    b: "Shane Warne",
    c: "James Anderson",
    d: "Anil Kumble",
    correct: "c",
  },
  {
    q: "Which country won the first ICC T20 Cricket World Cup in 2007?",
    a: "England",
    b: "South Africa",
    c: "Pakistan",
    d: "West Indies",
    correct: "c",
  },
  {
    q: "Which West Indian cricketer is known as the 'Universe Boss'?",
    a: "Chris Gayle",
    b: "Brian Lara",
    c: "Vivian Richards",
    d: "Clive Lloyd",
    correct: "a",
  },
  {
    q: "In which year did the England cricket team win their first ICC Cricket World Cup?",
    a: "2003",
    b: "2007",
    c: "2011",
    d: "2019",
    correct: "d",
  },
  {
    q: "Which South African cricketer is known for his 'Superman' catch in the 1992 Cricket World Cup?",
    a: "Jonty Rhodes",
    b: "Herschelle Gibbs",
    c: "Shaun Pollock",
    d: "Jacques Kallis",
    correct: "a",
  },
  {
    q: "Which Pakistan-born cricketer represented England and is considered one of the best all-rounders in cricket history?",
    a: "Saqlain Mushtaq",
    b: "Andrew Flintoff",
    c: "Wasim Akram",
    d: "Shoaib Akhtar",
    correct: "b",
  },
  {
    q: "Which country co-hosted the ICC Cricket World Cup along with New Zealand in 2015?",
    a: "South Africa",
    b: "Australia",
    c: "England",
    d: "Sri Lanka",
    correct: "b",
  },
  {
    q: "Who is the current captain of the Afghanistan national cricket team?",
    a: "Mohammad Nabi",
    b: "Rashid Khan",
    c: "Asghar Afghan",
    d: "Mohammad Shahzad",
    correct: "b",
  },
  {
    q: "Which English cricketer famously hit six sixes in an over during the 2007 ICC World Twenty20?",
    a: "Kevin Pietersen",
    b: "Andrew Flintoff",
    c: "Eoin Morgan",
    d: "Ian Bell",
    correct: "a",
  },
];

const quesBox = document.getElementById("quesBox");
const options = document.querySelectorAll(".options");
const box = document.getElementById("box");

let index = 0;
let right = 0,
  wrong = 0,
  quesLen = questions.length;
const loadQuestion = () => {
  if (index == quesLen) {
    return endQuiz();
  }
  resetAll();
  const question = questions[index];

  quesBox.textContent = question.q;
  options[0].nextElementSibling.textContent = question.a;
  options[1].nextElementSibling.textContent = question.b;
  options[2].nextElementSibling.textContent = question.c;
  options[3].nextElementSibling.textContent = question.d;
};
document.getElementById("submitBtn").addEventListener("click", function () {
  const data = questions[index];
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
    // console.log(right);
  } else {
    wrong++;
    // console.log(wrong);
  }
  index++;
  loadQuestion();
});
const getAnswer = () => {
  let ans;
  options.forEach((option) => {
    if (option.checked) {
      ans = option.value;
    }
  });
  return ans;
};
const endQuiz = () => {
  // console.log(document.getElementsByClassName("container"));
  document.getElementById("box").innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${right} right out of ${quesLen} </h3>
        </div>
    `;
};
const resetAll = () => {
  options.forEach((inputEl) => {
    inputEl.checked = false;
  });
};

loadQuestion(index);
