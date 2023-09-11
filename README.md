# Simon Says

Simon Says is a homage to a 1978 childrens toy of the same name. It's produces a pattern that the user has to remember and copy, and continues to add a new colour to the end every new turn. If a mistake is made the game begins again.
The project is currently for PC only and is not responsive to smaller screens, this might be changed at a later date but there are currently no plans to make this program responsive.

The Simon Says site is live and is currently hosted [HERE!](https://marc-hanson.github.io/challenge-two/)

## Features

The game was styled with a dark background, and light pastel greens to be easy on the eyes and to bring focus to the bright colours on the buttons. The colours used on the buttons were taken from 'https://wowpedia.fandom.com/wiki/Quality' and is the text colour used for different loot rarity in World of Warcraft. The font 'Finger Paint' was used across the whole project to keep uniformity and provide a fun, relaxed feel.

![Color Palette](assets/images/readme/palette.jpg)

### Existing Features

- **The Heading**

  - Featured at the top of the page, the heading is used to provide basic instruction to the user. This is updated throughout the project to show the current level the user has reached.

![Heading](assets/images/readme/heading.jpg)

- **The Game Area**

  - This section will display the four game buttons, which fade out and in to show the next button in the sequence. A sound will play when the button is clicked and addition feedback is provided by briefly changing the buttons colour on click.

![Game](assets/images/readme/game.jpg)

- **Instructions**

  - Once the game is over, the heading is changed to display a 'Game Over' message and ask the user to press a button if they wish to play again.

![Instructions](assets/images/readme/instructions.jpg)

### Features Left to Implement

- Scoreboard to show high scorers for the day.
- Light/dark mode.
- Themed colours and background for different holidays and events.

## Testing

- The website was constantly tested during development using Chrome development tools.
- Javascipt was ran after every new function to ensure it was behaving as intended.
- Website tested in Chrome, Firefox and Microsoft Edge.

### Testing During Development

- A random number variable was created for the player and opponent and tested with 'console.log()'.
- The images were then updated using this result and tested on a 'python3 http.server'.
- The final game was pushed to github and tested on multiple devices, all sounds file paths began with a / which resulted in no sounds being played when the games buttons were clicked. This was later fixed.

### Validator Testing

- HTML
  - HTML pages passed validation on W3C. <br>
    ![index.html validation](/assets/images/readme/html.jpg)
- CSS
  - CSS page passed validation on W3C. <br>
    ![style.css validation](/assets/images/readme/css.jpg)
- LIGHTHOUSE
  - Prefect scores across Lighthouse. <br>
    ![Lighthouse score](/assets/images/readme/lighthouse.jpg)
- JSHINT
  - All Javascript passed through JSHint, and the only issues reported are jQuery tags. <br>
    ![JSHint vlidation](assets/images/readme/javascript.jpg)

### Unfixed Bugs

None.

## Technologies Used

### Main Languages Used

- HTML5
- CSS3
- Javascript
- jQuery

### Frameworks, Libraries & Programs Used

- CodeAnywhere - was the chosen IDE to write both HTML and CSS before pushing the project to Github.
- jQuery - used to reduce the amount of Javasript written.
- GitHub - to import the CodeInstitute template from and to store my repository.
- VSCode - used to keep work on local versions of the site.

## Deployment

### Using GitHub Pages

Github Repository or project - <https://marc-hanson.github.io/challenge-two/>

1. Click the 'Settings' Tab.
2. Scroll Down to the Git Hub Pages Heading.
3. Select 'Main Branch' as the source.
4. The Page will reload 'Settings' again.
5. Scroll to GitHub pages heading and there will now be a clickable link <https://marc-hanson.github.io/challenge-two/>
6. Click the link for the live deployed page.

### Fork Project

1. On GitHub, go to [marc-hanson/challenge-one/](https://marc-hanson.github.io/challenge-two/).
2. In the top right, click "Fork".

### Clone Project

1. Go to the main page of the repository.
2. Above the file list, click "Code".
3. Select HTTPS, SSH, or GitHub CLI and then click copy to clone it.
4. Open Git Bash.
5. Change the location of your cloned repository.
6. Type `git clone` and then paste the URL you copied.
7. Press “Enter” to create you

## Credits

- All images used on this site were taken from [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music)
- Color palette was taken from Colorhunt.io
- The inspiration for this site is taken from Angela Yu's The Complete 2023 Web Development Bootcamp on Udemy.

[Back to top](#simon-says)
