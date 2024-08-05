# FuGenX 🎬

![Build Status](https://img.shields.io/badge/build-passed-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node.js](https://img.shields.io/badge/Node.js-JavaScript-green?logo=node.js)
![React](https://img.shields.io/badge/React-JavaScript-blue?logo=react)
![Firebase](https://img.shields.io/badge/Firebase-Database-orange?logo=firebase)

FuGenX is an online streaming platform developed as part of a software package development course in semester 5. This project uses React and Node.js to deliver a smooth streaming experience.

## Course Details
**Course ID:** 19Z512  
**Course Name:** SOFTWARE PACKAGE DEVELOPMENT  
**Number of credits:** 2  
**Syllabus:** Problem identification - Requirements analysis and design - Implementation using coding standards - Library construction and usage - Testing and documentation.

## Introduction

A video streaming service is an on-demand online entertainment source for TV shows, movies, and other streaming media. These platforms offer several advantages, including:

- **High-Quality Streams:** Ensuring users receive high-definition content with minimal buffering.
- **Greater Audience Potential:** Reaching a larger audience beyond geographical limitations.
- **Wide Variety of Content Use:** Providing a diverse range of content such as TV shows, movies, podcasts, webcasts, and music videos.
- **Ease and Convenience:** Allowing users to access content anytime and anywhere with an internet connection.

Streaming refers to any media content – live or recorded – delivered to computers and mobile devices via the internet and played back in real-time. 

Podcasts, webcasts, movies, TV shows, and music videos are common forms of streaming content.

These services provide an alternative to cable and satellite on-demand service, often at a lower cost. Use of streaming services often requires fees, either per view or via subscription.

## Problem Statement

- In recent years, the web has experienced tremendous growth in both content and users.
- This growth has led to an information overload problem, making it increasingly difficult for people to locate the right information at the right time.
- This study explores the feasibility of integrating a recommender engine as a module into the online streaming platform.
- The recommender engine mines movie databases to collect important information, such as popularity and attractiveness, necessary for making recommendations.
- It generates movie swarms that are convenient for movie producers to plan new movies and useful for providing movie recommendations to users.

## Objectives

1. **High-Quality Streams:** Provide an online streaming service with a stable infrastructure and an efficient content delivery network (CDN) to ensure high-quality video.
2. **Greater Audience Potential:** Enable users to invite as many people as they like to join the stream. Online streaming can make your content accessible to people whom you wouldn’t reach otherwise.
3. **Ease and Convenience:** Simplify the streaming process. All you need is relevant video and audio equipment, an internet connection, an encoder, and a reliable streaming platform.
4. **Customer Support:** Ensure ongoing customer support to guide users through any difficulties they encounter while using the streaming service.

## Technologies Used 🛠️
- **Frontend:** React
- **Backend:** Node.js
- **Database:** Firebase
- **UI Design:** Figma


## Installation

To get started with FuGenX, follow these steps:

1. **Clone the repository**
    ```sh
    git clone https://github.com/KavinAravindhan/FuGenX.git
    ```
2. **Navigate to the project directory**
    ```sh
    cd FuGenX
    ```
3. **Install NPM packages**
    ```sh
    npm install
    ```
4. **Start the development server**
    ```sh
    npm start
    ```

## Analysis

### Use Case Diagram
<div align="center">
  <img src="https://github.com/KavinAravindhan/FuGenX/blob/master/images/Analysis%20Diagrams/Use-Case%20Diagram.png" width="500" height="400" >
</div>

### ER Diagram
<div align="center">
  <img src="https://github.com/KavinAravindhan/FuGenX/blob/master/images/Analysis%20Diagrams/ER%20Diagram.png" >
</div>

### Activity Diagram
<div align="center">
  <img src="https://github.com/KavinAravindhan/FuGenX/blob/master/images/Analysis%20Diagrams/Activity%20Diagram.png" >
</div>

### Class Diagram
<div align="center">
  <img src="https://github.com/KavinAravindhan/FuGenX/blob/master/images/Analysis%20Diagrams/Class%20Diagram.png" >
</div>

### Component Diagram
<div align="center">
  <img src="https://github.com/KavinAravindhan/FuGenX/blob/master/images/Analysis%20Diagrams/Component%20Diagram.jpg" >
</div>

### Data Flow Diagram
<div align="center">
  <img src="https://github.com/KavinAravindhan/FuGenX/blob/master/images/Analysis%20Diagrams/Data%20Floww%20Diagram.png" >
</div>

## Recommendation System

Our recommender system employs two techniques:
- **Content-based Filtering:** This technique recommends items similar to those a user has liked in the past, based on the content's attributes.
- **Collaborative Filtering:** This method makes recommendations based on the preferences and behaviors of other users.

We used the following datasets:
- **TMDB_5000_movies dataset**
- **TMDB_5000_credits dataset**

To determine similarity between movies for our content-based method, we utilized a cosine similarity function.

The datasets were merged, retaining essential columns such as genres, keywords, overview, movie_id, cast, crew, and title. A new dataframe was created with the following attributes: id, title, and tag.

<div align="center">
  <img src="https://github.com/KavinAravindhan/FuGenX/blob/master/images/Analysis%20Diagrams/RS%201.png" >
</div>

</br>

<div align="center">
  <img src="https://github.com/KavinAravindhan/FuGenX/blob/master/images/Analysis%20Diagrams/RS%202.png">
</div>

### Cosine Similarity
Cosine similarity is a metric used to determine the similarity between two entities, regardless of their size. It measures the cosine of the angle between two vectors projected in a multi-dimensional space.
<div align="center">
  <img src="https://github.com/KavinAravindhan/FuGenX/blob/master/images/Analysis%20Diagrams/RS%203.png" >
</div>

## Application Images

<div align="center">
  <img src="https://github.com/KavinAravindhan/FuGenX/blob/master/images/FuGenX.png" >
</div>

</br>

<div align="center">
  <img src="https://github.com/KavinAravindhan/FuGenX/blob/master/images/Application%20Images/Home.png" width="600" height="300">
</div>

</br>

<div align="center">
  <img src="https://github.com/KavinAravindhan/FuGenX/blob/master/images/Application%20Images/FAQ.png" width="600" height="300">
</div>

</br>

<div align="center">
  <img src="https://github.com/KavinAravindhan/FuGenX/blob/master/images/Application%20Images/Sign%20Up.png" width="600" height="300">
</div>

</br>

<div align="center">
  <img src="https://github.com/KavinAravindhan/FuGenX/blob/master/images/Application%20Images/Sign%20In.png" width="600" height="300">
</div>

</br>

<div align="center">
  <img src="https://github.com/KavinAravindhan/FuGenX/blob/master/images/Application%20Images/Search.png" width="600" height="300">
</div>

</br>

<div align="center">
  <img src="https://github.com/KavinAravindhan/FuGenX/blob/master/images/Application%20Images/Search-Result%20(Animation).png" width="600" height="300">
</div>

</br>

<div align="center">
  <img src="https://github.com/KavinAravindhan/FuGenX/blob/master/images/Application%20Images/Recommended%20Movies.png" width="600" height="300">
</div>

</br>

<div align="center">
  <img src="https://github.com/KavinAravindhan/FuGenX/blob/master/images/Application%20Images/Selected%20Movie.png" width="600" height="300">
</div>

## Documents
  - [Initial Presentation](https://github.com/KavinAravindhan/FuGenX/blob/master/Documents/Initial%20Presentation.pdf)
  - [Final Presentation](https://github.com/KavinAravindhan/FuGenX/blob/master/Documents/Final%20Presentation.pdf)
  - [Software Architecture Document](https://github.com/KavinAravindhan/FuGenX/blob/master/Documents/Software%20Architecture%20Document.pdf)

To view the documents, download them locally by clicking "View Raw" once you access the link.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Team Acknowledgment 🙌

A special thanks to our amazing team for their dedication and hard work. Despite the challenges, their commitment to learning new technologies and collaborating effectively made this project a success.
