import Dog from "./Dog.js";
import dogs from "./data.js";
import { getHeaderHtml, mainPageHtml, getSwipeBtnsHtml } from "./template.js";
const badges = ["images/badge-nope.png", "images/badge-like.png"];
const tindog = document.getElementById("tindog");
let dog = getnextDog(dogs);
let isWaiting = false;

//display landing page
function initiate() {
  tindog.className = "tindog-ht";
  tindog.innerHTML = mainPageHtml();
}
initiate();

function getnextDog(data) {
  const nextDog = data.shift();
  return nextDog ? new Dog(nextDog) : [];
}

function profileElement() {
  return document.querySelector(".tindog-profile");
}

function getBadge(badge) {
  const profile = profileElement();
  profile.insertAdjacentHTML("afterbegin", dog.getBadgeHtml(badge));
}

//display profile page
function displayProfile() {
  const header = getHeaderHtml();
  const swipeBtns = getSwipeBtnsHtml();
  tindog.innerHTML = header;
  tindog.innerHTML += `<div class='tindog-profile'>${dog.getProfileHtml()}</div>`;
  tindog.innerHTML += swipeBtns;
  document.querySelector(".btn-reject").addEventListener("click", function () {
    dog.hasBeenSwiped = true;
    swipeProfile();
  });

  document.querySelector(".btn-like").addEventListener("click", function () {
    dog.hasBeenLiked = true;
    dog.hasBeenSwiped = true;
    swipeProfile();
  });
}
// display badge and get next profile
function swipeProfile() {
  if (!isWaiting) {
    if (dog.hasBeenSwiped) {
      isWaiting = true;
      if (dog.hasBeenLiked) {
        getBadge(badges[1]);
      } else {
        getBadge(badges[0]);
      }
      // show next profile
      if (dogs.length > 0) {
        setTimeout(() => {
          dog = getnextDog(dogs);
          render();
          isWaiting = false;
        }, 1000);
        //otherwise end matches
      } else {
        setTimeout(() => {
          end();
        }, 1000);
      }
    }
  }
}

function render() {
  const profile = profileElement();
  profile.innerHTML = dog.getProfileHtml();
}

function end() {
  const swipeBtns = document.querySelector(".swipe-btns");
  const end = document.createElement("div");
  end.className = "end";
  profileElement().remove();
  end.innerHTML = ` <img class="end-img" src="images/paws.png" />
             <p class="end-desc">You've hit the end of the line...</p>
              <p class="end-desc">Check back soon!</p>
            </div>`;
  tindog.insertBefore(end, swipeBtns);
}

document.getElementById("cta").addEventListener("click", function () {
  tindog.removeAttribute("class");
  displayProfile();
});
