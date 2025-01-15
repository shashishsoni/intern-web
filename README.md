<h1>Intern Project</h1>

# FAQ Toggle and Swiper Effect with Scroll and Resize Listeners

This project implements interactive features for an FAQ section, a video scroller with background highlights, and a responsive video loader using plain JavaScript. Additionally, it includes a `Swiper` component with a coverflow effect, and horizontal scroll animations.

## Features

1. **FAQ Toggle**:
   - Click on FAQ headers to show or hide content under each section.
   - Adds an `active` class to highlight selected FAQs.

2. **Swiper Coverflow**:
   - A customizable Swiper.js instance with a coverflow effect.
   - Allows users to swipe through slides with grab cursor support.

3. **Video Scroll Highlight**:
   - When the video section comes into view, it triggers a background and video highlight.
   - Removes the highlight when the section is out of view.

4. **Responsive Video Loader**:
   - Dynamically loads a different video based on screen width.
   - A landscape video is loaded for small screens (<=1024px), and a default video for larger screens.

5. **Horizontal Scroller Animation**:
   - Scrollable containers in the horizontal direction with duplicated content for continuous scrolling.
   - The animation is enabled unless the user prefers reduced motion.

## Usage

1. **HTML Structure**:
   - Add `faq-item` class for each FAQ section, with headers inside `h2` or `h4` tags.
   - Include a Swiper container with `swiper-container` class for slides.
   - Add a `.mv-container` section for the video, with the video element inside `.middle-video`.

2. **CSS**:
   - Apply basic styles for the `.faq-item`, `.swiper-container`, and the `.mv-container` classes.
   - Include necessary Swiper.js styles.

3. **JavaScript**:
   - The JavaScript will toggle FAQ visibility on click and manage the Swiper and scroll effects.
   - Video source will switch dynamically based on the screen size during window resize.

## Dependencies

    - [Swiper.js](https://swiperjs.com/) for the coverflow effect.

## How to Run

1. Clone the repository.
2. Ensure Swiper.js is included in your project by either linking to the CDN or installing it locally.
3. Adjust the HTML structure as needed for FAQ items, the video section, and swiper containers.
4. Link the script in your HTML file, or include it as an external JS file.

## Development

As an intern project, the HTML and CSS have been structured to be simple and extendable. You can adjust the Swiper configuration, FAQ toggle behaviors, and video responsiveness as per project needs.

Feel free to modify the scroller animations, FAQ transitions, or video handling for performance optimizations.

<h1 style = "text-align: center">OutPut Of The Code</h1>

![INFINTY - The Ultimate Mini-site for Creators (1) (1)](https://github.com/user-attachments/assets/88f3d2e1-1f92-4fbf-a668-6ffc83de6998)


