const handleNavigate = () => {
  const nameValue = document.getElementById("user-name").value;
  const passWordValue = document.getElementById("password").value;

  if (nameValue && passWordValue) {
    window.location.href = "home.html";
  }
};

const dataPromotions = [
  {
    tenUuDai: "Mua 1 cơm tặng 1 canh",
    batDau: "1/10/2024",
    ketThuc: "3/10/2024",
  },
  {
    tenUuDai: "Giám giá giáng sinh",
    batDau: "20/11/2024",
    ketThuc: "23/12/2024",
  },
  // {
  //   tenUuDai: "",
  //   batDau: "",
  //   ketThuc: "",
  // },
];

const handleNavigateDashboard = () => {
  window.location.href = "dashboard.html";
};

// tabs

const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");

const tabActive = document.querySelector(".tab-item.active");
const line = document.querySelector(".tabs .line");

// SonDN fixed - Active size wrong size on first load.
// Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340
requestIdleCallback(function () {
  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";
});

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    document.querySelector(".tab-item.active").classList.remove("active");
    document.querySelector(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});

const handleHideModal = () => {
  const programGift = document.querySelector(".program__gift.d-none");
  const detailGift = document.querySelector(".detail__gift");
  programGift.classList.remove("d-none");
  detailGift.classList.add("d-none");
};

const handleClickModal = () => {
  console.log(1);
  const programGift = document.querySelector(".program__gift");
  const detailGift = document.querySelector(".detail__gift.d-none");
  programGift.classList.add("d-none");
  detailGift.classList.remove("d-none");
};

const handleRenderTbody = (list) => {
  var htmls = "";

  for (var i = 0; i < list.length; i++) {
    var currentVoucher = list[i];
    var content = `
    
    
     
                
                  <tbody class="tBodyProgram">
                    <tr class="table-light">
                      <td>${currentVoucher.tenUuDai}</td>
                      <td>${currentVoucher.batDau}</td>
                      <td>${currentVoucher.ketThuc}</td>
                      <td>
                        <button
                          onclick="handleClickModal()"
                          class="mr-16 promotions__icon"
                        >
                          <i class="fa-regular fa-pen-to-square"></i>
                        </button>

                        <button class="promotions__icon">
                          <i class="fa-regular fa-trash-can"></i>
                        </button>
                      </td>
                    </tr>
                   
                  </tbody>
              
              
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    `;

    htmls += content;
  }
  var renderList = document.querySelector(".tBody");

  renderList.innerHTML = htmls;
};
handleRenderTbody(dataPromotions);

const renderLength = (list) => {
  let htmls = "";

  let content = `${list.length}`;
  htmls += content;
  const renderList = document.querySelector(".quantityLenght");

  renderList.innerHTML = htmls;
};

renderLength(dataPromotions);
