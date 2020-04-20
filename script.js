// document.querySelector(".js-filter-btn a:nth-child(3)").click();
// document.getElementsByClassName(".answers-subheader")[0].style.display = 'none';

// Hide answers below threshold
let votes = document.getElementsByClassName("js-vote-count");

// Skip first element because it is the question
for (let i = 1; i < votes.length; i++) {
  let element = votes[i];
  let voteCount = parseInt(element.getAttribute("data-value"));
  if (voteCount < 2) {
    let num = i + 2;
    let result = document.querySelector(".answer:nth-of-type(" + num + ")");
    if (result) {
      result.style.display = "none";
    }
  }
}
