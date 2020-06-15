class UI {
    constructor() {
        this.post = document.querySelector("#posts");
        this.titleInput = document.querySelector("#title");
        this.bodyInput = document.querySelector("#body");
        this.idInput = document.querySelector("#id");
        this.postSubmit = document.querySelector(".post-submit");
        this.forState = "add";
    }

    // Show posts in UI
    showPosts(posts) {
        let output = "";

        posts.forEach((post) => {
            output += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>
                        <a href="#" class="edit card-link" data-id="${post.id}">
                            <i class="fa fa-pencil"></i>
                        </a>
                        <a href="#" class="delete card-link" data-id="${post.id}">
                            <i class="fa fa-remove"></i>
                        </a>
                    </div>
                </div>
            `;
        });

        this.post.innerHTML = output;
    }

    // Show alert
    showAlert(msg, className) {
        this.clearAlert();

        // Create div
        const div = document.createElement("div");

        // Add classes
        div.className = className;

        // Add text
        div.appendChild(document.createTextNode(msg));

        // Get parent
        const container = document.querySelector(".postsContainer");

        // Get posts
        const posts = document.querySelector("#posts");

        // Insert alert div
        container.insertBefore(div, posts);

        // Timeout
        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }

    // Clear alert after some action
    clearAlert() {
        const curentAlert = document.querySelector(".alert");

        if (curentAlert) {
            curentAlert.remove();
        }
    }

    // Clear input fields
    clearFields() {
        this.titleInput.value = "";
        this.bodyInput.value = "";
    }

    // Fill form to edit
    fillForm(data) {
        this.idInput.value = data.id;
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;

        this.changeFormState("edit");
    }

    // Clear id input
    clearIDInput() {
        this.idInput.value = "";
    }

    // Change form state
    changeFormState(type) {
        if (type === "edit") {
            this.postSubmit.textContent = "Update Post";
            this.postSubmit.className = "post-submit btn btn-warning btn-block";

            // Create canceel button
            const button = document.createElement("button");
            button.className = "post-cancel btn btn-light btn-block";
            button.appendChild(document.createTextNode("Cancel Edit"));

            // Get parent
            const cardForm = document.querySelector(".card-form");

            // Get element to insert before
            const formEnd = document.querySelector(".form-end");

            // Insert cancel button
            cardForm.insertBefore(button, formEnd);
        } else {
            this.postSubmit.textContent = "Post It";
            this.postSubmit.className = "post-submit btn btn-primary btn-block";
            // Remove cancel button if it's there
            if (document.querySelector(".post-cancel")) {
                document.querySelector(".post-cancel").remove();
            }
            // Clear ID from hidden field
            this.clearIDInput();
            // Clear fields
            this.clearFields();
        }
    }
}

export const ui = new UI();