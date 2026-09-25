const GAS_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxj2FickiFG78MEs9w3APsn9pU0s3BjQMBy6ldpuGykSfZJVecstE38Z70n3mxc28v4cQ/exec";

/*
  本文を読む時間です。

  現在は動作確認用として2秒に設定しています。
  本番で3分にする場合は、次のように変更してください。

  const PASSAGE_READING_TIME_MS = 3 * 60 * 1000;
*/
const PASSAGE_READING_TIME_MS = 2 * 1000;

const passage = `スウェーデンのゴットランド島にあるヴィスビーは、バルト海に面した中世の港町である。ゴットランド島はスウェーデン本土とバルト海東岸地域の間に位置しており、海を渡る商人や船にとって重要な場所だった。かつてこの地域はヴァイキングの活動とも関わり、その後、ヴィスビーは中世の海上交易によって大きく発展した。特に12世紀から14世紀にかけて、ヴィスビーはバルト海交易の中心となり、北ヨーロッパ各地の商人が集まる都市となった。

ヴィスビーの発展と深く関わっていたのが、ハンザ同盟である。ハンザ同盟とは、北ヨーロッパの商人や都市が結びついた交易ネットワークであり、商品を安全に運び、利益を守るために大きな役割を果たした。ヴィスビーはこのネットワークの中で、バルト海を行き交う船が立ち寄る重要な拠点となった。ここでは、毛皮、穀物、塩、布、金属など、さまざまな商品が運ばれ、保管され、取引された。ヴィスビーの繁栄は、海を通じた交流によって支えられていたのである。

ヴィスビーには、13世紀に築かれた城壁が現在もよく残っている。城壁は町全体を囲むように作られ、外からの攻撃や争いから町を守る役割を持っていた。しかし、ヴィスビーの城壁は単なる軍事施設ではない。城壁の内側には、倉庫、商人の住居、教会跡、狭い街路などが残されており、かつての商業都市の様子を伝えている。つまりヴィスビーでは、城壁が戦いへの備えであると同時に、商人の財産や町の秩序を守るための境界でもあった。

ヴィスビーの特徴は、町の中に残る建物からも読み取ることができる。多くの倉庫は、遠くから運ばれてきた商品を一時的に保管するために使われた。商人の住居は、生活の場であると同時に、取引や管理の場でもあった。教会は信仰の場であるだけでなく、町の豊かさや人々の結びつきを示す存在でもあった。このように、ヴィスビーの町並みは、住む場所、働く場所、祈る場所が近くに集まった中世商業都市の姿を示している。

しかし、ヴィスビーの繁栄は永遠に続いたわけではない。14世紀以降、交易路の変化や周辺地域の政治的な動きによって、ヴィスビーの力は次第に弱まっていった。商業の中心地としての役割が低下すると、かつてのように多くの商品や商人が集まる都市ではなくなっていった。それでも、城壁や倉庫、教会跡などが大きく失われずに残ったことで、ヴィスビーは中世の姿を現在に伝える貴重な都市となった。

現在のヴィスビーは、世界遺産として保護され、多くの観光客が訪れる場所になっている。観光地として注目されることは、町の歴史を広く伝えるきっかけになる一方で、住民の生活や建物の保存とのバランスを考える必要もある。ヴィスビーの価値は、古い城壁が残っていることだけではない。海上交易によって栄えた町の構造や、商人たちの暮らし、信仰、都市の秩序が一体となって残されている点にある。つまりヴィスビーは、交易都市、城壁都市、商人の町、世界遺産という複数の姿を重ね持つ都市なのである。`;

const questions = [
  {
    type: "choice",
    questionText:
      `ハンザ都市ヴィスビーの特徴として、本文の内容に最も合うものを1つ選びなさい。`,
    choices: [
      {
        label:
          "第二次世界大戦中に軍事基地として新しく建設された都市であった。",
        value: "1"
      },
      {
        label:
          "海から離れた内陸部に作られ、農業だけで発展した都市であった。",
        value: "2"
      },
      {
        label:
          "バルト海交易によって発展し、中世の商業都市の姿を残す都市であった。",
        value: "3"
      },
      {
        label:
          "王の宮殿だけが残り、商人の活動とはほとんど関係がなかった都市であった。",
        value: "4"
      }
    ],
    correctAnswer: "3",
    answerAliases: ["3", "３"]
  },
  {
    type: "choice",
    questionText:
      `本文によると、ヴィスビーが重要な場所になった理由として最も適切なものを1つ選びなさい。`,
    choices: [
      {
        label:
          "ゴットランド島が、スウェーデン本土とバルト海東岸地域の間に位置していたから。",
        value: "1"
      },
      {
        label:
          "周囲が砂漠に囲まれており、外部から完全に孤立していたから。",
        value: "2"
      },
      {
        label:
          "高い山の上にあり、海上交通とは関係がなかったから。",
        value: "3"
      },
      {
        label:
          "王族だけが住むための静かな別荘地として使われていたから。",
        value: "4"
      }
    ],
    correctAnswer: "1",
    answerAliases: ["1", "１"]
  },
  {
    type: "input",
    questionText:
      `本文では、12世紀から14世紀にかけて、ヴィスビーは何になったと述べられているか。
本文中から9字で抜き出しなさい。`,
    inputPlaceholder: "本文中から9字で入力",
    correctAnswer: "バルト海交易の中心",
    answerAliases: [
      "バルト海交易の中心"
    ]
  },
  {
    type: "choice",
    questionText:
      `次の文の空欄に入る語句として最も適切なものを選びなさい。

ハンザ同盟とは、北ヨーロッパの商人や都市が結びついた（　　　）であった。`,
    choices: [
      {
        label: "農業共同体",
        value: "1"
      },
      {
        label: "王族の住居",
        value: "2"
      },
      {
        label: "宗教儀式",
        value: "3"
      },
      {
        label: "交易ネットワーク",
        value: "4"
      }
    ],
    correctAnswer: "4",
    answerAliases: ["4", "４"]
  },
  {
    type: "choice",
    questionText:
      `本文では、ヴィスビーの城壁は「単なる軍事施設ではない」と述べられている。
この説明から読み取れることとして最も適切なものを1つ選びなさい。`,
    choices: [
      {
        label:
          "城壁は戦いへの備えだけでなく、商人の財産や町の秩序を守る意味も持っていた。",
        value: "1"
      },
      {
        label:
          "城壁は観光客のために近代になって新しく作られたものであった。",
        value: "2"
      },
      {
        label:
          "城壁の内側には建物がほとんど存在しなかった。",
        value: "3"
      },
      {
        label:
          "城壁は海上交易を禁止するためだけに使われていた。",
        value: "4"
      }
    ],
    correctAnswer: "1",
    answerAliases: ["1", "１"]
  },
  {
    type: "choice",
    questionText:
      `本文の内容と異なるものを1つ選びなさい。`,
    choices: [
      {
        label:
          "ヴィスビーは、ゴットランド島にあるバルト海に面した中世の港町である。",
        value: "1"
      },
      {
        label:
          "ヴィスビーは、12世紀から14世紀にかけてバルト海交易によって発展した。",
        value: "2"
      },
      {
        label:
          "ヴィスビーの城壁の内側には、倉庫や商人の住居、教会跡などが残されている。",
        value: "3"
      },
      {
        label:
          "ヴィスビーは、交易路の変化によってさらに力を強め、近代まで商業の中心であり続けた。",
        value: "4"
      }
    ],
    correctAnswer: "4",
    answerAliases: ["4", "４"]
  },
  {
    type: "choice",
    questionText:
      `本文の流れに合うように、次の出来事を古い順に並べたとき、3番目に来るものを選びなさい。`,
    choices: [
      {
        label:
          "世界遺産として保護され、多くの観光客が訪れる場所である。",
        value: "1"
      },
      {
        label:
          "この地域がヴァイキングの活動とも関わる。",
        value: "2"
      },
      {
        label:
          "交易路の変化や政治的な動きによって、ヴィスビーの力が次第に弱まる。",
        value: "3"
      },
      {
        label:
          "バルト海交易によって大きく発展する。",
        value: "4"
      }
    ],
    correctAnswer: "3",
    answerAliases: ["3", "３"]
  },
  {
    type: "choice",
    questionText:
      `本文では、ヴィスビーの町並みについて、住む場所、働く場所、祈る場所が近くに集まっていたと述べられている。
このことから、ヴィスビーの特徴として最も適切なものを1つ選びなさい。`,
    choices: [
      {
        label:
          "商業、生活、信仰が町の中で結びついていた。",
        value: "1"
      },
      {
        label:
          "住民は城壁の外だけで生活していた。",
        value: "2"
      },
      {
        label:
          "教会は交易や町の豊かさとはまったく関係がなかった。",
        value: "3"
      },
      {
        label:
          "ヴィスビーでは商人の活動が禁止されていた。",
        value: "4"
      }
    ],
    correctAnswer: "1",
    answerAliases: ["1", "１"]
  },
  {
    type: "multiInput",
    multiInputMode: "ordered",
    questionText:
      `本文では、城壁の内側に残されているものとして、かつての商業都市の様子を伝える要素が述べられている。
そのうち、建物に関する語句を本文中からそれぞれ2字と5字で抜き出しなさい。`,
    inputFields: [
      {
        label: "2字の語句",
        placeholder:
          "2字の語句を入力"
      },
      {
        label: "5字の語句",
        placeholder:
          "5字の語句を入力"
      }
    ],
    correctAnswer:
      "倉庫、商人の住居",
    expectedParts: [
      "倉庫",
      "商人の住居"
    ]
  },
  {
    type: "multiInput",
    multiInputMode: "unordered",
    questionText:
      `本文の最後では、ヴィスビーが複数の姿を重ね持つ都市であると述べられている。
その4つの姿を、本文中からそれぞれ4字ずつ抜き出しなさい。`,
    inputFields: [
      {
        label: "4字の語句",
        placeholder:
          "4字の語句を入力"
      },
      {
        label: "4字の語句",
        placeholder:
          "4字の語句を入力"
      },
      {
        label: "4字の語句",
        placeholder:
          "4字の語句を入力"
      },
      {
        label: "4字の語句",
        placeholder:
          "4字の語句を入力"
      }
    ],
    correctAnswer:
      "交易都市、城壁都市、商人の町、世界遺産",
    expectedParts: [
      "交易都市",
      "城壁都市",
      "商人の町",
      "世界遺産"
    ]
  }
];

const totalQuestions = questions.length;

let progressMode = "text";
let progressModeLabel = "回答数を表示";
let currentIndex = 0;
let startTime = null;
let results = [];
let participantName = "";
let studentId = "";
let currentQuestion = null;

let choiceChangeCount = 0;
let deletionCount = 0;
let scrollDistancePx = 0;
let previousScrollTop = 0;

const previousInputValues = new WeakMap();
const beforeInputHandled = new WeakMap();

let passageTimerId = null;
let passageCountdownId = null;
let passageEndTime = null;
let hasMovedToQuestionScreen = false;

let isQuestionLocked = false;
let isSubmitted = false;

const settingScreen =
  document.getElementById("settingScreen");

const startScreen =
  document.getElementById("startScreen");

const passageScreen =
  document.getElementById("passageScreen");

const testScreen =
  document.getElementById("testScreen");

const nameInput =
  document.getElementById("nameInput");

const studentIdInput =
  document.getElementById(
    "studentIdInput"
  );

const goStartBtn =
  document.getElementById("goStartBtn");

const startBtn =
  document.getElementById("startBtn");

const passageText =
  document.getElementById("passageText");

const passageCountdown =
  document.getElementById(
    "passageCountdown"
  );

const testPassageText =
  document.getElementById(
    "testPassageText"
  );

const testPassageBox =
  document.getElementById(
    "testPassageBox"
  );

const progressText =
  document.getElementById("progressText");

const progressBarWrap =
  document.getElementById(
    "progressBarWrap"
  );

const progressBar =
  document.getElementById("progressBar");

const circleProgressWrap =
  document.getElementById(
    "circleProgressWrap"
  );

const circleFg =
  document.getElementById("circleFg");

const questionEl =
  document.getElementById("question");

const choiceArea =
  document.getElementById("choiceArea");

const multiAnswerArea =
  document.getElementById(
    "multiAnswerArea"
  );

const answerInput =
  document.getElementById("answerInput");

const nextBtn =
  document.getElementById("nextBtn");

const submitArea =
  document.getElementById("submitArea");

const sendBtn =
  document.getElementById("sendBtn");

const circleLength = 100;

function getProgressModeLabel(mode) {
  const labels = {
    none: "回答数を表示しない",
    text: "回答数を表示",
    bar: "バーで表示",
    both: "回答数とバーの両方",
    circle: "回転バーで表示",
    circleBoth:
      "回答数と回転バーの両方"
  };

  return labels[mode] || mode;
}

function roundSecFromMs(ms) {
  return Number(
    (ms / 1000).toFixed(3)
  );
}

function formatRemainingTime(
  remainingMs
) {
  const totalSeconds = Math.max(
    0,
    Math.ceil(remainingMs / 1000)
  );

  const minutes =
    Math.floor(totalSeconds / 60);

  const seconds =
    totalSeconds % 60;

  return (
    `${minutes}:` +
    `${String(seconds).padStart(2, "0")}`
  );
}

function updatePassageCountdown() {
  if (passageEndTime === null) {
    passageCountdown.textContent =
      `残り時間：${formatRemainingTime(
        PASSAGE_READING_TIME_MS
      )}`;

    return;
  }

  const remainingMs =
    passageEndTime - Date.now();

  passageCountdown.textContent =
    `残り時間：${formatRemainingTime(
      remainingMs
    )}`;

  if (remainingMs <= 0) {
    goToQuestionScreen();
  }
}

function goToStartScreen() {
  studentId =
  studentIdInput.value.trim();

participantName =
  nameInput.value.trim();


if (studentId === "") {
  alert("学生番号を入力してください");
  return;
}


if (participantName === "") {
  alert("名前を入力してください");
  return;
}


//進捗表示は固定
progressMode = "text";
progressModeLabel = "テキストで表示";

  settingScreen.style.display = "none";
  startScreen.style.display = "flex";
}

function startTest() {
  currentIndex = 0;
  results = [];

  isQuestionLocked = false;
  isSubmitted = false;
  hasMovedToQuestionScreen = false;

  clearPassageTimer();

  questionEl.style.display = "block";
  choiceArea.style.display = "block";

  multiAnswerArea.style.display =
    "none";

  answerInput.style.display =
    "inline-block";

  nextBtn.style.display = "block";
  nextBtn.disabled = false;

  submitArea.style.display = "none";
  sendBtn.disabled = false;
  sendBtn.textContent = "送信";

  passageText.textContent = passage;
  testPassageText.textContent = passage;

  passageCountdown.textContent =
    `残り時間：${formatRemainingTime(
      PASSAGE_READING_TIME_MS
    )}`;

  startScreen.style.display = "none";
  passageScreen.style.display = "flex";

  startPassageTimer();
}

function startPassageTimer() {
  clearPassageTimer();

  passageEndTime =
    Date.now() +
    PASSAGE_READING_TIME_MS;

  updatePassageCountdown();

  passageCountdownId = setInterval(
    () => {
      updatePassageCountdown();
    },
    250
  );

  passageTimerId = setTimeout(
    () => {
      goToQuestionScreen();
    },
    PASSAGE_READING_TIME_MS
  );
}

function clearPassageTimer() {
  if (passageTimerId !== null) {
    clearTimeout(passageTimerId);
    passageTimerId = null;
  }

  if (passageCountdownId !== null) {
    clearInterval(passageCountdownId);
    passageCountdownId = null;
  }

  passageEndTime = null;
}

function goToQuestionScreen() {
  if (hasMovedToQuestionScreen) {
    return;
  }

  hasMovedToQuestionScreen = true;

  passageCountdown.textContent =
    "残り時間：0:00";

  clearPassageTimer();

  passageScreen.style.display = "none";
  testScreen.style.display = "flex";

  showQuestion();
}

function generateQuestion() {
  const question =
    questions[currentIndex];

  return {
    type: question.type,

    multiInputMode:
      question.multiInputMode ||
      "ordered",

    questionText:
      question.questionText,

    choices:
      question.choices || [],

    inputFields:
      question.inputFields || [],

    inputPlaceholder:
      question.inputPlaceholder ||
      "答えを入力",

    correctAnswer:
      question.correctAnswer,

    answerAliases:
      question.answerAliases || [],

    expectedParts:
      question.expectedParts || []
  };
}

function showQuestion() {
  currentQuestion =
    generateQuestion();

  updateProgress();

  questionEl.textContent =
    currentQuestion.questionText;

  renderQuestionInput(
    currentQuestion
  );

  questionEl.style.display = "block";
  nextBtn.style.display = "block";
  submitArea.style.display = "none";

  choiceChangeCount = 0;
  deletionCount = 0;
  scrollDistancePx = 0;

  previousScrollTop =
    testPassageBox.scrollTop;

  startTime = performance.now();

  isQuestionLocked = false;
  nextBtn.disabled = false;

  if (
    currentQuestion.type === "input"
  ) {
    answerInput.focus();
  } else if (
    currentQuestion.type ===
    "multiInput"
  ) {
    const firstMultiInput =
      document.querySelector(
        ".multiAnswerInput"
      );

    if (firstMultiInput) {
      firstMultiInput.focus();
    }
  }
}

function renderQuestionInput(question) {
  choiceArea.innerHTML = "";
  multiAnswerArea.innerHTML = "";

  answerInput.value = "";
  resetInputTracking(answerInput);

  if (question.type === "choice") {
    choiceArea.style.display =
      "block";

    multiAnswerArea.style.display =
      "none";

    answerInput.style.display =
      "none";

    renderChoices(question.choices);

  } else if (
    question.type === "multiInput"
  ) {
    choiceArea.style.display =
      "none";

    multiAnswerArea.style.display =
      "block";

    answerInput.style.display =
      "none";

    renderMultiInputs(
      question.inputFields
    );

  } else {
    choiceArea.style.display =
      "none";

    multiAnswerArea.style.display =
      "none";

    answerInput.style.display =
      "inline-block";

    answerInput.placeholder =
      question.inputPlaceholder;
  }
}

function renderChoices(choices) {
  choiceArea.innerHTML = "";

  choices.forEach(
    (choice, index) => {
      const button =
        document.createElement(
          "button"
        );

      button.type = "button";
      button.className = "choiceBtn";

      button.dataset.value =
        choice.value;

      button.textContent =
        `${index + 1}. ${choice.label}`;

      button.addEventListener(
        "click",
        () => {
          const previousChoice =
            answerInput.value;

          if (
            previousChoice !== "" &&
            previousChoice !==
              choice.value
          ) {
            choiceChangeCount++;
          }

          answerInput.value =
            choice.value;

          const allChoiceButtons =
            document.querySelectorAll(
              ".choiceBtn"
            );

          allChoiceButtons.forEach(
            choiceButton => {
              choiceButton.classList
                .remove(
                  "selectedChoice"
                );
            }
          );

          button.classList.add(
            "selectedChoice"
          );
        }
      );

      choiceArea.appendChild(button);
    }
  );
}

function isDeletionInputType(
  inputType
) {
  return (
    typeof inputType === "string" &&
    inputType.startsWith("delete")
  );
}

function canDeleteContent(
  input,
  inputType
) {
  const valueLength =
    input.value.length;

  const selectionStart =
    input.selectionStart ?? 0;

  const selectionEnd =
    input.selectionEnd ??
    selectionStart;

  /*
    複数文字を選択して削除する場合も、
    1回の削除操作として数えます。
  */
  if (
    selectionEnd >
    selectionStart
  ) {
    return true;
  }

  /*
    入力欄が空の状態で削除ボタンを
    押しても回数には含めません。
  */
  if (valueLength === 0) {
    return false;
  }

  const forwardDeleteTypes = [
    "deleteContentForward",
    "deleteWordForward",
    "deleteSoftLineForward",
    "deleteHardLineForward"
  ];

  if (
    forwardDeleteTypes.includes(
      inputType
    )
  ) {
    return (
      selectionStart <
      valueLength
    );
  }

  /*
    切り取りとドラッグによる削除は、
    文字が選択されている場合だけ
    上の処理で数えられます。
  */
  if (
    inputType === "deleteByCut" ||
    inputType === "deleteByDrag"
  ) {
    return false;
  }

  return selectionStart > 0;
}

function resetInputTracking(input) {
  previousInputValues.set(
    input,
    input.value
  );

  beforeInputHandled.set(
    input,
    false
  );
}

function attachDeletionTracking(
  input
) {
  resetInputTracking(input);

  /*
    beforeinputを使用することで、
    PCのBackspaceだけでなく、
    iPhoneやAndroidの削除操作にも
    対応します。
  */
  input.addEventListener(
    "beforeinput",
    event => {
      beforeInputHandled.set(
        input,
        true
      );

      if (
        isDeletionInputType(
          event.inputType
        ) &&
        canDeleteContent(
          input,
          event.inputType
        )
      ) {
        deletionCount++;
      }
    }
  );

  /*
    beforeinputが正常に取得できない
    ブラウザ向けの補助処理です。
    入力内容が短くなった場合に、
    削除操作1回として数えます。
  */
  input.addEventListener(
    "input",
    () => {
      const previousValue =
        previousInputValues.get(
          input
        ) ?? "";

      const currentValue =
        input.value;

      if (
        !beforeInputHandled.get(
          input
        ) &&
        currentValue.length <
          previousValue.length
      ) {
        deletionCount++;
      }

      previousInputValues.set(
        input,
        currentValue
      );

      beforeInputHandled.set(
        input,
        false
      );
    }
  );
}

function renderMultiInputs(
  inputFields
) {
  multiAnswerArea.innerHTML = "";

  inputFields.forEach(
    (field, index) => {
      const fieldWrap =
        document.createElement(
          "div"
        );

      fieldWrap.className =
        "multiAnswerField";

      const label =
        document.createElement(
          "label"
        );

      label.className =
        "multiAnswerLabel";

      label.textContent =
        field.label;

      label.setAttribute(
        "for",
        `multiAnswerInput${index + 1}`
      );

      const input =
        document.createElement(
          "input"
        );

      input.id =
        `multiAnswerInput${index + 1}`;

      input.className =
        "multiAnswerInput";

      input.type = "text";
      input.autocomplete = "off";

      input.placeholder =
        field.placeholder;

      attachDeletionTracking(input);

      input.addEventListener(
        "keydown",
        event => {
          if (
            event.key === "Enter"
          ) {
            nextQuestion();
          }
        }
      );

      fieldWrap.appendChild(label);
      fieldWrap.appendChild(input);

      multiAnswerArea.appendChild(
        fieldWrap
      );
    }
  );
}

function updateProgress() {
  const answeredCount =
    currentIndex;

  const percent =
    answeredCount /
    totalQuestions;

  progressText.textContent =
    `回答数：${answeredCount} / ${totalQuestions}`;

  progressBar.style.width =
    `${percent * 100}%`;

  circleFg.style.strokeDasharray =
    circleLength;

  circleFg.style.strokeDashoffset =
    circleLength * (1 - percent);

  progressText.style.display =
    "none";

  progressBarWrap.style.display =
    "none";

  circleProgressWrap.style.display =
    "none";

  if (progressMode === "text") {
    progressText.style.display =
      "block";

  } else if (
    progressMode === "bar"
  ) {
    progressBarWrap.style.display =
      "block";

  } else if (
    progressMode === "both"
  ) {
    progressText.style.display =
      "block";

    progressBarWrap.style.display =
      "block";

  } else if (
    progressMode === "circle"
  ) {
    circleProgressWrap.style.display =
      "block";

  } else if (
    progressMode === "circleBoth"
  ) {
    progressText.style.display =
      "block";

    circleProgressWrap.style.display =
      "block";
  }
}

function toHalfWidth(value) {
  return String(value)
    .replace(
      /[０-９]/g,
      character => {
        return String.fromCharCode(
          character.charCodeAt(0) -
            0xFEE0
        );
      }
    )
    .replace(
      /[Ａ-Ｚａ-ｚ]/g,
      character => {
        return String.fromCharCode(
          character.charCodeAt(0) -
            0xFEE0
        );
      }
    );
}

function normalizeAnswer(value) {
  return toHalfWidth(value)
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "")
    .replace(/[　]/g, "")
    .replace(
      /[、。,.・:：;；]/g,
      ""
    )
    .replace(
      /[→＞>－\-ー―]/g,
      ""
    )
    .replace(
      /[（）()「」『』【】\[\]]/g,
      ""
    );
}

function getMultiAnswerValues() {
  const inputs =
    document.querySelectorAll(
      ".multiAnswerInput"
    );

  return Array.from(inputs).map(
    input => {
      return input.value.trim();
    }
  );
}

function isCorrectMultiInput(
  userAnswerValues,
  question
) {
  const normalizedUserValues =
    userAnswerValues.map(
      value =>
        normalizeAnswer(value)
    );

  const normalizedExpectedParts =
    question.expectedParts.map(
      part =>
        normalizeAnswer(part)
    );

  if (
    question.multiInputMode ===
    "unordered"
  ) {
    return normalizedExpectedParts
      .every(expectedPart => {
        return normalizedUserValues
          .includes(expectedPart);
      });
  }

  return normalizedExpectedParts
    .every(
      (
        expectedPart,
        index
      ) => {
        return (
          normalizedUserValues[
            index
          ] === expectedPart
        );
      }
    );
}

function isCorrectAnswer(
  userAnswer,
  question,
  userAnswerValues = []
) {
  if (
    question.type === "multiInput"
  ) {
    return isCorrectMultiInput(
      userAnswerValues,
      question
    );
  }

  const normalizedUserAnswer =
    normalizeAnswer(userAnswer);

  if (
    question.expectedParts &&
    question.expectedParts.length > 0
  ) {
    return question.expectedParts
      .every(part => {
        return normalizedUserAnswer
          .includes(
            normalizeAnswer(part)
          );
      });
  }

  const acceptableAnswers = [
    question.correctAnswer,
    ...question.answerAliases
  ];

  return acceptableAnswers.some(
    answer => {
      return (
        normalizedUserAnswer ===
        normalizeAnswer(answer)
      );
    }
  );
}

function getUserAnswer() {
  if (
    currentQuestion.type ===
    "multiInput"
  ) {
    const values =
      getMultiAnswerValues();

    return values.join("、");
  }

  return answerInput.value.trim();
}

function isAnswerEmpty() {
  if (
    currentQuestion.type ===
    "multiInput"
  ) {
    const values =
      getMultiAnswerValues();

    return values.some(
      value => value === ""
    );
  }

  return (
    answerInput.value.trim() === ""
  );
}

function handleTestPassageScroll() {
  const currentScrollTop =
    testPassageBox.scrollTop;

  /*
    下方向・上方向のどちらも
    移動距離として加算します。
  */
  scrollDistancePx += Math.abs(
    currentScrollTop -
      previousScrollTop
  );

  previousScrollTop =
    currentScrollTop;
}

function nextQuestion() {
  if (isQuestionLocked) {
    return;
  }

  if (isAnswerEmpty()) {
    alert(
      "答えを入力してください"
    );

    return;
  }

  const userAnswer =
    getUserAnswer();

  const userAnswerValues =
    currentQuestion.type ===
    "multiInput"
      ? getMultiAnswerValues()
      : [];

  isQuestionLocked = true;
  nextBtn.disabled = true;

  const endTime =
    performance.now();

  const elapsedTime =
    endTime - startTime;

  const correct =
    isCorrectAnswer(
      userAnswer,
      currentQuestion,
      userAnswerValues
    );

  results.push({
    questionNumber:
      currentIndex + 1,

    userAnswer: userAnswer,

    isCorrect: correct,

    timeMs:
      Math.round(elapsedTime),

    timeSec:
      roundSecFromMs(elapsedTime),

    choiceChangeCount:
      choiceChangeCount,

    deletionCount:
      deletionCount,

    scrollDistancePx:
      Math.round(scrollDistancePx)
  });

  currentIndex++;

  if (
    currentIndex <
    totalQuestions
  ) {
    showQuestion();
  } else {
    showSubmitScreen();
  }
}

function showSubmitScreen() {
  updateProgress();

  questionEl.style.display =
    "none";

  choiceArea.style.display =
    "none";

  multiAnswerArea.style.display =
    "none";

  answerInput.style.display =
    "none";

  nextBtn.style.display =
    "none";

  submitArea.style.display =
    "block";

  sendBtn.disabled = false;
  sendBtn.textContent = "送信";
}

function finishTest() {
  if (isSubmitted) {
    return;
  }

  isSubmitted = true;

  sendBtn.disabled = true;

  sendBtn.textContent =
    "送信中...";

  sendResultsToSpreadsheet();
}

function countCorrect(
  targetResults
) {
  return targetResults.filter(
    result => {
      return result.isCorrect;
    }
  ).length;
}

function sumTimeMs(targetResults) {
  return targetResults.reduce(
    (sum, result) => {
      return (
        sum + result.timeMs
      );
    },
    0
  );
}

function createOneRowResult() {
  const oneRowResult = {
  studentId: studentId,
  name: participantName,
  progressMode: progressMode,
  progressModeLabel:
    progressModeLabel
};

  for (
    let index = 0;
    index < totalQuestions;
    index++
  ) {
    const result =
      results[index];

    const questionNumber =
      index + 1;

    oneRowResult[
      `q${questionNumber}Answer`
    ] =
      result
        ? result.userAnswer
        : "";

    oneRowResult[
      `q${questionNumber}Correct`
    ] =
      result
        ? (
          result.isCorrect
            ? "正"
            : "誤"
        )
        : "";

    oneRowResult[
      `q${questionNumber}TimeSec`
    ] =
      result
        ? roundSecFromMs(
          result.timeMs
        )
        : "";

    oneRowResult[
      `q${questionNumber}ChoiceChangeCount`
    ] =
      result
        ? result.choiceChangeCount
        : 0;

    oneRowResult[
      `q${questionNumber}DeletionCount`
    ] =
      result
        ? result.deletionCount
        : 0;

    oneRowResult[
      `q${questionNumber}ScrollDistancePx`
    ] =
      result
        ? result.scrollDistancePx
        : 0;
  }

  const firstHalfResults =
    results.slice(0, 5);

  const secondHalfResults =
    results.slice(5, 10);

  const totalAnswerTimeMs =
    sumTimeMs(results);

  const firstHalfAnswerTimeMs =
    sumTimeMs(
      firstHalfResults
    );

  const secondHalfAnswerTimeMs =
    sumTimeMs(
      secondHalfResults
    );

  oneRowResult.correctCount =
    countCorrect(results);

  oneRowResult
    .totalAnswerTimeSec =
      roundSecFromMs(
        totalAnswerTimeMs
      );

  oneRowResult
    .firstHalfCorrectCount =
      countCorrect(
        firstHalfResults
      );

  oneRowResult
    .secondHalfCorrectCount =
      countCorrect(
        secondHalfResults
      );

  oneRowResult
    .firstHalfAnswerTimeSec =
      roundSecFromMs(
        firstHalfAnswerTimeMs
      );

  oneRowResult
    .secondHalfAnswerTimeSec =
      roundSecFromMs(
        secondHalfAnswerTimeMs
      );

  return oneRowResult;
}

async function sendResultsToSpreadsheet() {
  const oneRowResult =
    createOneRowResult();

  const payload = {
    results: [
      oneRowResult
    ]
  };

  try {
    await fetch(
      GAS_WEB_APP_URL,
      {
        method: "POST",
        mode: "no-cors",

        headers: {
          "Content-Type":
            "text/plain;charset=utf-8"
        },

        body:
          JSON.stringify(payload)
      }
    );

    sendBtn.textContent =
      "送信済み";

    alert(
      "テスト終了。結果を送信しました。"
    );

  } catch (error) {
    console.error(error);

    isSubmitted = false;
    sendBtn.disabled = false;
    sendBtn.textContent = "送信";

    alert(
      "送信に失敗しました。予備としてCSVを保存します。"
    );

    downloadCSV();
  }
}

function escapeCSV(value) {
  return String(value)
    .replace(/"/g, '""');
}

function downloadCSV() {
  const oneRowResult =
    createOneRowResult();

  const headers = [
    "学籍番号",
    "名前",
    "進捗表示条件",
    "正解数",
    "合計回答時間_秒",
    "前半正解数",
    "後半正解数",
    "前半回答時間_秒",
    "後半回答時間_秒"
  ];

  const values = [
    `"${escapeCSV(
    oneRowResult.studentId
    )}"`,

    `"${escapeCSV(
      oneRowResult.name
    )}"`,

    `"${escapeCSV(
      oneRowResult
        .progressModeLabel
    )}"`,

    oneRowResult.correctCount,

    oneRowResult
      .totalAnswerTimeSec,

    oneRowResult
      .firstHalfCorrectCount,

    oneRowResult
      .secondHalfCorrectCount,

    oneRowResult
      .firstHalfAnswerTimeSec,

    oneRowResult
      .secondHalfAnswerTimeSec
  ];

  for (
    let questionNumber = 1;
    questionNumber <=
      totalQuestions;
    questionNumber++
  ) {
    headers.push(
      `${questionNumber}問目の回答`
    );

    headers.push(
      `${questionNumber}問目の正誤`
    );

    headers.push(
      `${questionNumber}問目の回答時間_秒`
    );

    headers.push(
      `${questionNumber}問目の選択肢変更回数`
    );

    headers.push(
      `${questionNumber}問目の文字削除回数`
    );

    headers.push(
      `${questionNumber}問目の本文累積スクロール距離_px`
    );

    values.push(
      `"${escapeCSV(
        oneRowResult[
          `q${questionNumber}Answer`
        ]
      )}"`
    );

    values.push(
      `"${escapeCSV(
        oneRowResult[
          `q${questionNumber}Correct`
        ]
      )}"`
    );

    values.push(
      oneRowResult[
        `q${questionNumber}TimeSec`
      ]
    );

    values.push(
      oneRowResult[
        `q${questionNumber}ChoiceChangeCount`
      ]
    );

    values.push(
      oneRowResult[
        `q${questionNumber}DeletionCount`
      ]
    );

    values.push(
      oneRowResult[
        `q${questionNumber}ScrollDistancePx`
      ]
    );
  }

  const csv =
    headers.join(",") +
    "\n" +
    values.join(",") +
    "\n";

  const blob = new Blob(
    [
      "\uFEFF" + csv
    ],
    {
      type: "text/csv"
    }
  );

  const url =
    URL.createObjectURL(blob);

  const safeName =
    participantName.replace(
      /[\\/:*?"<>|]/g,
      "_"
    );

  const link =
    document.createElement("a");

  link.href = url;

  link.download =
    `${safeName}_reading_test_results.csv`;

  link.click();

  URL.revokeObjectURL(url);
}

goStartBtn.addEventListener(
  "click",
  goToStartScreen
);

nameInput.addEventListener(
  "keydown",
  event => {
    if (event.key === "Enter") {
      goToStartScreen();
    }
  }
);

startBtn.addEventListener(
  "click",
  startTest
);

nextBtn.addEventListener(
  "click",
  nextQuestion
);

sendBtn.addEventListener(
  "click",
  finishTest
);

/*
  通常の記述式入力欄にも、
  スマートフォン対応の
  削除回数計測を設定します。
*/
attachDeletionTracking(
  answerInput
);

answerInput.addEventListener(
  "keydown",
  event => {
    if (event.key === "Enter") {
      nextQuestion();
    }
  }
);

/*
  問題回答画面に表示される
  本文欄だけを計測対象にします。
*/
testPassageBox.addEventListener(
  "scroll",
  handleTestPassageScroll,
  {
    passive: true
  }
);