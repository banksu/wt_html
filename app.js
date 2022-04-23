const btns = document.querySelectorAll("button");
const resultCard = document.querySelector(".resultCard");
let resurtMy = {
  e: 0,
  n: 0,
  t: 0,
  p: 0,
};
function dev(event) {
  //console.log(event.target.parentNode);
  const div = event.target.parentNode.parentNode;
  const count = event.target.className;
  div.classList.add("papap");
  counting(count);
}

function counting(letter) {
  //console.log(letter);
  if (letter === "e") {
    resurtMy.e = resurtMy.e + 1;
  } else if (letter === "t") {
    resurtMy.t = resurtMy.t + 1;
  } else if (letter === "n") {
    resurtMy.n = resurtMy.n + 1;
  } else if (letter === "p") {
    resurtMy.p = resurtMy.p + 1;
  } else if (letter === "last") {
    calculResult(resurtMy);
  }
}

function calculResult(resurtMy) {
  // console.log(resurtMy);
  let resurt = "";
  if (resurtMy.e >= 3) {
    resurt = resurt + "E";
  }
  if (resurtMy.e < 3) {
    resurt = resurt + "I";
  }
  if (resurtMy.n >= 3) {
    resurt = resurt + "N";
  }
  if (resurtMy.n < 3) {
    resurt = resurt + "S";
  }
  if (resurtMy.t >= 3) {
    resurt = resurt + "T";
  }
  if (resurtMy.t < 3) {
    resurt = resurt + "F";
  }
  if (resurtMy.p >= 3) {
    resurt = resurt + "P";
  }
  if (resurtMy.p < 3) {
    resurt = resurt + "J";
  }
  //console.log(resurt);
  printingResult(resurt);
}
function printingResult(mbti) {
  //console.log(resultCard);
  title = resultCard.children[1];
  descript = resultCard.children[3].children[0];
  subTitle = resultCard.children[2];
  //console.log(title, descript, subTitle);
  if (mbti === "ISTJ") {
    title.innerText = "ISTJ";
    subTitle.innerText = "작가로 태어나길 잘했어";
    descript.innerText =
      "작가로 태어나길 잘했어! 구체적으로 섬세한 세계관에 매력을 느끼는 이 사람들이야말로 이 시대의 진정한 매니아, 오타쿠의 자존심이죠. 일상의 많은 일들을 재료삼아 매혹적인 이야기를 꿈꾸는 숨겨진 로맨티스트입니다. 논리와 납득을 중히 여기고 떡밥과 해석에 가치를 두는 이 사람들은 사회적 역할에 구속되지 않는 즉흥적이고 자유로운 생활패턴과 계획으로 종종 갈등을 느끼지만 맡은 일은 끝까지 해내고 마는 의지를 가지고 있습니다.";
  }
  if (mbti === "ISFJ") {
    title.innerText = "ISFJ";
    subTitle.innerText = "대기업CEO 뺨때리는 경청자들";
    descript.innerText =
      "다소 난해한 이야기도 쉽게 받아들이고 감각적으로 이해할 수 있기때문에 즐기는 작품과 캐릭터가 많아 행복한 사람들입니다. 감정의 파도에 민감하고 또 즐기기때문에 대놓고 눈물을 뽑는 스토리에도 울 수 있는 감수성을 타고났습니다. 이야기 산업의 대세를 이루고 명줄을 이어가는 없어서는 안될 사람들입니다.";
  }
  if (mbti === "INFJ") {
    title.innerText = "INFJ";
    subTitle.innerText = "내 최애가 그럴 리 없어.";
    descript.innerText =
      "웹툰 속 주인공을 비롯한 등장인물의 가장 든든한 이해자가 되곤 합니다. 최애를 위해서라면 세상과도 맞서 싸울 수 있어요. 등장인물의 내면과 심리 변화에 대해 가장 민감하게 통찰할 수 있는 '찐덕후'들이므로 비합리적이거나 개연성을 갖추지 않은 등장인물에 대해서 가장 심각하게 불편해합니다. 작품을 대할 때 등장인물의 서사와 복선에 누구보다 관심가져주는 사람들입니다.";
  }
  if (mbti === "INTJ") {
    title.innerText = "INTJ";
    subTitle.innerText = "웹툰 이상 교재 미만";
    descript.innerText =
      "이 사람들은 작품으로 세상의 미래를 제시합니다. 세상에 영향력을 끼치는 '이야기의 힘'을 누구보다도 잘 알고 있는 동시에 이야기의 개연성이 주는 매력을 사랑하고 있습니다. 이 사람들의 작품은 주제의식이 뚜렷하며 때때로 깊은 사전조사가 필요한 전문지식을 작품에 녹여내므로, 독자들에게 단순히 즐길거리 이상의 의미를 남기곤 합니다.";
  }
  if (mbti === "ISTP") {
    title.innerText = "ISTP";
    subTitle.innerText = "덕통 스위치 백만개";
    descript.innerText =
      "흥미가 많고 다양한 분야에 호기심이 많은 만큼, 여러 작품을 섭렵합니다. 오늘은 눈물철철 감성물에 빠져 펑펑 울다가, 내일은 머리에 김을 뿜게하는 철학 작품에 푹 빠질 수 있는 사람들입니다. 아는 것도 많기 때문에 인스타그램같은 SNS에서 지식공유를 목적으로 하는 작가로도 활약할 수 있어요.";
  }
  if (mbti === "ISFP") {
    title.innerText = "ISFP";
    subTitle.innerText = "웹툰의 숲을 누비는 엘프";
    descript.innerText =
      "멋진 작화, 흥미진진하고 스릴넘치는 스토리가 아니더라도 잔잔한 평화로운 스토리와 아기자기한 작화에도 충분히 매력과 행복을 느끼는 사람들입니다. 실바람을 느끼고 말없는 산과 대화하는 엘프처럼 웹툰을 즐기죠.";
  }
  if (mbti === "INFP") {
    title.innerText = "INFP";
    subTitle.innerText = "플라톤의 대적자";
    descript.innerText =
      "이 사람들의 작품 속 세계는 매우 긍정적이고 매혹적인 모습인 경우가 많습니다. 접하는 사람들로 하여 한번쯤은 살아보거나 실재했으면 하고 바라게 해요. 또한 그 세계 속의 사람들도 나름의 이상과 주관이 뚜렷하거나 선택의 기로에서 사람들의 호감을 얻을만한 멋진 선택을 합니다. 아마 이 사람들의 내면의 빛이 작품을 통해 드러난 결과가 아닐까요.";
  }
  if (mbti === "INTP") {
    title.innerText = "INTP";
    subTitle.innerText = "재능러인데 이제 노력을 끼얹은";
    descript.innerText =
      "당신이 웹툰을 그리기로 했다면 분명 대작가가 될 수 있을 겁니다. 아이디어도 참신하고, 그에 맞는 작화실력도 갖추고 있거나 갖추기 위해 부던히 노력하고 있는 중일 것입니다. 다만 스스로의 이상에 맞추기위해 과한 스트레스를 받다가 지쳐버리거나 더 좋은 요소들을 구하려 시간을 들이다가 진행이 지지부진해져 프로젝트가 유야무야 엎어져버릴 수 있으니 자신을 믿고 조금 불만족스럽더라도 빠르게 작업을 진행하는 것이 좋습니다.";
  }
  if (mbti === "ESTP") {
    title.innerText = "ESTP";
    subTitle.innerText = "이공계 한스푼 문과감성 한스푼... 종횡무진 인싸";
    descript.innerText =
      "관심사의 폭이 넓은 이사람들은 취미 부자인 경우가 많습니다. 행동력이 있기때문에, 두가지 이상의 분야에 이미 일정 수준을 이룬 상태일 것입니다. 그렇기때문에 아이디어를 생략하고 압축하여 하나의 작품으로 소화하기 어려운 유형이지만, 이를 뛰어넘는다면 수준높은 작품을 그릴 수 있습니다. 작품활동을 하지 않는다면 이분야 저분야를 넘나드는 홍길동같은 인재입니다.";
  }
  if (mbti === "ESFP") {
    title.innerText = "ESFP";
    subTitle.innerText = "폭발적 화력의 트위터리안";
    descript.innerText =
      "이 사람들을 막을 수 있는 것은 아무것도 없습니다. 덕심을 주체하지 못하면 그저 연성과 트윗을 쏟아내며 질주하는 1기의 폭주기관차일 뿐. 자기의 캐릭터나 세계관에도 푹 빠지게 되면 누구보다 열정적으로 작품 활동에 파묻힐 수 있는 작가들입니다. 하고싶은 말이 많고 또 참지도 않기 때문에 설정이나 주관에 대한 논쟁을 즐기기도 합니다.";
  }
  if (mbti === "ENFP") {
    title.innerText = "ENFP";
    subTitle.innerText = "자진출두 사약 커플러";
    descript.innerText =
      "에너지가 넘치는 당신은 혼자의 힘으로 능히 백명의 팬덤을 상대할 수 있는 사람입니다. 새롭고 남다른것을 추구하기 때문에 팬덤에서 마이너로 악명높은 커플링 덕질을 마다하지 않기때문에 혈혈단신 사약러는 여러분에게 흔한 일이죠. 호불호가 갈리는 첫인상의 작품이 많지만, 다양한 공감대와 심리전으로 어렵지 않게 몰입할 수 있도록하는 유능한 작가입니다.";
  }
  if (mbti === "ENTP") {
    title.innerText = "ENTP";
    subTitle.innerText = "이세계 방문자";
    descript.innerText =
      "독특하고 기이한 4차원 성향이 많은 곳에서도 4차원계 출신 의심을 받을 정도로 사고방식이 남다릅니다. 새롭고 창의적인 생각으로 주변을 경탄하게 하다가도, 그 현실성 없는 생각을 정말 실행하려고 시도하여 경탄을 경악으로 바꿉니다. 지루하고 재미없는 훈련으로 일정 수준 이상의 기술력을 갖춘다면, 진짜 결과물을 얻어내고야 마는 사람들입니다.";
  }
  if (mbti === "ESTJ") {
    title.innerText = "ESTJ";
    subTitle.innerText = "가능성을 보여주는 수수께끼의 마술사";
    descript.innerText =
      "현실적인 당신은 어느날 갑자기 이세계로 떨어진다거나 말도 안되는 마법 포탈이 현실세계에 나타났다는 이야기보단, 실제 있음직한 리얼리티를 극적으로 끌어올린 작품에 마음을 빼앗길 가능성이 많습니다. 직업을 선택할 때도 이러한 현실적인 성격이 작용되기 때문에 웹툰을 사랑하지만 현실적인 전망으로 디자인 전공을 선택하는 사람들도 있습니다. 하지만 이러한 현실적인 판단력때문에, 당신이 웹툰을 선택했다면 그만한 승산이 충분히 산정되어 있을 것입니다. ";
  }
  if (mbti === "ESFJ") {
    title.innerText = "ESFJ";
    subTitle.innerText = "드립 카피(copy) 바리스타";
    descript.innerText =
      "재치넘치는 이 사람들은 핵심적이고 간결한 말 한마디로 다른 사람들을 울리고 웃깁니다. 시의적절한 드립으로 상황을 중계해주기 때문에, 주변이 외롭지 않네요. 스스로도 다른 사람들이 자기 때문에 즐거워하는 것을 기뻐하기 때문에 작품도 심각하거나 잔혹한 상황보다는 즐겁고 밝은 분위기의 작품이 많습니다.";
  }
  if (mbti === "ENFJ") {
    title.innerText = "ENFJ";
    subTitle.innerText = "너, 내 파트너가 되라!";
    descript.innerText =
      "언변에 능하고 다른사람의 장점을 잘 파악하는 당신은 글작가, 혹은 그림작가 등 협력자와 함께 했을 때 작품이 더 좋은 경우가 많습니다. 스스로의 약점을 파트의 강점으로 보완하고, 파트너의 약점을 자신의 강점으로 서포트하는 방법을 알고 있기 때문입니다. 혼자 작업을 할때에도 행아웃, 디스코드 등으로 친근한 사람들과 함께 작업하기를 즐기는 경우가 많습니다.";
  }
  if (mbti === "ENTJ") {
    title.innerText = "ENTJ";
    subTitle.innerText = "이상적인 총대 ";
    descript.innerText =
      "작품에 대한 이해도가 뛰어나 의도를 파악하고, 종종 더 나은 표현 방법을 찾아냅니다. 타인과 친근감을 유지하며 자신의 판단을 전달할 수 있기 때문에 계획과 실행력을 갖추어야하는 팬덤 이벤트의 총대가 되기도 합니다. 작가로도 훌륭하지만 작품을 매니징하는 PD로도 뛰어납니다.";
  }

  // console.log(title, descript, subTitle);
}
for (const btn of btns) {
  btn.addEventListener("click", dev);
}
