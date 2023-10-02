
# Comments App

![Comments App](https://assets.ccbp.in/frontend/content/react-js/comments-app-output-v0.gif)

## Table of Contents
- [Overview](#overview)
- [Setup Instructions](#setup-instructions)
- [Functionality](#functionality)
- [Components Structure](#components-structure)
- [Clone Repository](#clone-repository)

## Overview

This project is a Comments App built using React.js. The app allows users to add comments, like comments, and delete comments. It includes responsive design for various screen sizes.

![Comments App Design](https://assets.ccbp.in/frontend/content/react-js/comments-app-lg-output-v0.png)

## Setup Instructions

To run the app locally, follow these setup instructions:

1. Download dependencies by running `npm install`.
2. Start the app using `npm start`.

## Functionality

The Comments App includes the following functionalities:

- Initially, the list of comments is empty, and the input fields for name and comment are empty.
- When non-empty values are provided and the **Add Comment** button is clicked:
  - A new comment is added to the list of comments.
  - The comments count is incremented by one.
  - The input fields for name and comment are reset to their initial values.
- When the **Like** button of a comment is clicked:
  - If the image for **Like** is displayed, it is changed to the **Liked** image.
  - If the image for **Liked** is displayed, it is changed to the **Like** image.
- When the **Delete** button of a comment is clicked, the comment is deleted from the list of comments, and the comments count is decremented by one.

## Components Structure

The app is structured into the following components:

- `Comments` Component
- `CommentItem` Component

![Components Structure](https://assets.ccbp.in/frontend/content/react-js/comments-app-component-breakdown-structure-v0.png)


## Clone Repository

To clone this repository to your local system, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command to clone the repository:

```bash
git clone https://github.com/your-username/comments-app.git
```

Replace `your-username` with your GitHub username.

4. After cloning is complete, navigate into the cloned directory:

```bash
cd comments-app
```

Now, you have successfully cloned the repository to your local system.

---

Feel free to use this README file as a template for your GitHub repository. Simply copy and paste the content into your repository's README.md file and customize it further as needed. Good luck with your Comments App project!
