// theme color
document.getElementById("themeColor").addEventListener("click", function () {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "gray",
    "purple",
    "teal",
    "orange",
  ];
  for (const color of colors) {
    document.body.classList.remove(`bg-${color}-800`);
  }
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.classList.add(`bg-${randomColor}-800`);
});
// theme color

// main btn

const allBtns = document.querySelectorAll(".cardBtn");
for (const btn of allBtns) {
  btn.addEventListener("click", function () {
    alert("Board updated successfully");
    //   start main js btn
    const perClickValue = 1;
    const navberSelector = document.getElementById("navAssign");
    const navValue = parseInt(navberSelector.innerText);
    const taskAssign = document.getElementById("taskAssign");
    const taskValue = parseInt(taskAssign.innerText);
    const navValuePlus = navValue + perClickValue;
    navberSelector.innerText = navValuePlus;
    const taskAssignMinus = taskValue - perClickValue;
    taskAssign.innerText = taskAssignMinus;
    const todayName = new Date().toLocaleDateString("en-US", {
      weekday: "short",
    });
    document.getElementById("dayName").innerText = `${todayName} ,`;
    const date = new Date()
      .toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
      .replace(",", "");

    document.getElementById("Date").innerText = date;

    this.disabled = true;

    //   end main js btn
    // aside page

    const asideContainer = document.querySelector(".aside-container");
    const div = document.createElement("div");
    div.classList.add(
      "p-[10px]",
      "bg-[#F4F7FF]",
      "rounded-lg",
      "mb-5",
      "newDive"
    );
    asideContainer.appendChild(div);
    const p = document.createElement("p");
    div.appendChild(p);
    const parentCard = this.closest(".card");
    const cardHeading = parentCard.querySelector(".card-heading");
    const currentTime = new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Dhaka",
    });
    p.innerText = `You have completed the task ${cardHeading.innerText} at ${currentTime}`;

    // aside page
    if (taskAssign.innerText === "0") {
      alert("Congratulations, you have completed all the current tasks");
    }
  });
}
// main btn
// aside clear btn
const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function () {
  const allNewdivs = document.querySelectorAll(".newDive");
  for (const div of allNewdivs) {
    // div.style.display = "none";
    div.remove();
  }
});
// aside clear btn
