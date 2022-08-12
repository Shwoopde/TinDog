// Create the Dog class here

function Dog(data) {
    Object.assign(this, data)

    this.getDogHtml = function () {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        return `
            <div class="image-and-info-container">
                <div class="profile-image" id="profile-image">
                    <img src="${avatar}" alt="profile image">
                </div>
                <div class="profile-info">
                    <h1 class="profile-name" id="profile-name">${name}</h1>,</h1>
                    <h1 class="profile-age" id="profile-age">${age}</h1>
                    <p class="profile-tagline" id="profile-tagline">${bio}</p>
                </div>
                <div class="yes-no-image-container">
                    <div class="yes-image" id="yes-image">
                        <img src="images/badge-like.png" alt="yes">
                    </div>
                    <div class="no-image" id="no-image">
                        <img src="images/badge-nope.png" alt="no">
                    </div>
                </div>
            </div>
        `
}
}

export default Dog
