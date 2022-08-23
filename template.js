function getHeaderHtml() {
  return ` 
    <div class="header">
        <img class="logo" src="images/logo.png" />
        <img
          class="main-icon icon-avatar"
          src="images/icon-profile.png"
          alt="profile avatar"
        />
        <img
          class="main-icon icon-chat"
          src="images/icon-chat.png"
          alt="icon chat"
        />
    </div>
    `;
}

function mainPageHtml() {
  return ` 
  <div class="header">
    <img class="logo" src="images/logo.png" />
    <img
      class="main-icon icon-avatar"
      src="images/icon-profile.png"
      alt="profile avatar"
    />
    <img
      class="main-icon icon-chat"
      src="images/icon-chat.png"
      alt="icon chat"
    />
   </div>
   <div id="main">
     <img class="featured-image" src="images/featured-image.png" alt="" />
     <div class="featured-info">
       <h1 class="featured-title">Swipe.</h1>
       <p class="featured-desc">find the perfect friend for your dog.</p>
     </div>
     <button id="cta">get started</button>
   </div>
`;
}

function getSwipeBtnsHtml() {
  return `<div class="swipe-btns">
            <div class="btn btn-reject">
              <img
                src="images/icon-cross.png"
              />
            </div>
            <div class="btn btn-like">
              <img
                src="images/icon-heart.png"
              />
          </div>
  `;
}

export { getHeaderHtml, getSwipeBtnsHtml, mainPageHtml };
