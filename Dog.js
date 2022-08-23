class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  getBadgeHtml(badge) {
    return `
    <img class="badge" src="${badge}" />`;
  }

  getProfileHtml() {
    const { name, avatar, age, bio } = this;
    return ` 
        <img
          class="tindog-avatar"
          src="${avatar}"
        />
        <div class="tindog-profile-desc">
          <h2>${name}, <span>${age}</span></h2>
          <p>${bio}</p>
        </div> 
      `;
  }
}

export default Dog;
