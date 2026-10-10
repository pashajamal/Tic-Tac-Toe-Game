# ❌⭕ Tic-Tac-Toe Game

A classic two-player Tic-Tac-Toe game for the browser, built with plain **HTML, CSS and JavaScript**. No frameworks, no installation, no dependencies. Just open it and play.

<!-- Add a screenshot or GIF of your game here, for example: -->
<!-- ![Tic-Tac-Toe Screenshot](screenshot.png) -->

<!-- Add your live link here after enabling GitHub Pages: -->
<!-- 🎮 **Live Demo:** https://pashajamal.github.io/Tic-Tac-Toe-Game/ -->

---

## 📖 About the Project

Tic-Tac-Toe (also called Noughts and Crosses) is a simple game for two players, **X** and **O**. They take turns marking the squares of a 3×3 grid. The first player to get three marks in a row, column or diagonal wins. If all nine squares are filled and nobody has three in a row, the game is a draw.

This project is a clean, beginner-friendly version of that game. It is a good example for anyone who is learning how HTML, CSS and JavaScript work together to build a small interactive app.

---

## ✨ Features

- 🎮 **Two-player mode** on the same device (Player 1 is X, Player 2 is O)
- 🔄 **Live turn indicator**: the scoreboard highlights whose turn it is
- 💬 **Status message** that tells players what is happening in the game
- 🔁 **Restart button** to start a fresh game at any time
- ♿ **Accessible markup**: every cell is a real button with an `aria-label`, and the status text uses `aria-live` so screen readers can announce updates
- 📱 **Responsive viewport** setup for phones, tablets and desktops
- 🪶 **Lightweight**: just three files, no libraries

---

## 🛠️ Built With

- **HTML5** for the structure of the board and scoreboard
- **CSS3** for layout and styling
- **JavaScript (Vanilla)** for the game logic

---

## 📂 Project Structure

```
Tic-Tac-Toe-Game/
├── index.html    # Page structure: title, scoreboard, 3×3 board, restart button
├── style.css     # All styling and layout
└── script.js     # Game logic
```

---

## 🚀 Getting Started

You don't need to install anything.

### Option 1: Open the file directly

1. Download or clone this repository.
2. Double-click `index.html`.
3. The game opens in your browser. Start playing!

### Option 2: Clone with Git

```bash
git clone https://github.com/pashajamal/Tic-Tac-Toe-Game.git
cd Tic-Tac-Toe-Game
```

Then open `index.html` in any modern browser (Chrome, Firefox, Edge or Safari).

### Option 3: Run with a local server (optional)

If you like using a local server while developing:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

Then visit `http://localhost:8000` (or the address shown in your terminal).

---

## 🎯 How to Play

1. **Player 1 (X)** always goes first.
2. Click any empty square to place your mark.
3. Players take turns. The scoreboard and the status line show whose turn it is.
4. Get **three of your marks in a row** (across, down or diagonally) to win.
5. If all nine squares are filled and nobody has won, it's a **draw**.
6. Click **Restart Game** to play again.

---

## 🧠 What You Can Learn From This Project

If you are a beginner, this small project is a nice way to practice:

- Building a layout with **semantic HTML** and accessible buttons
- Styling a grid and active states with **CSS**
- Selecting elements and handling **click events** in JavaScript
- Tracking **game state** (whose turn it is, which cells are filled)
- Checking **win conditions** and updating the page
- Resetting state with a **restart** feature

---

## 🔮 Ideas for Future Improvements

Want to extend the project? Here are some fun ideas:

- [ ] Play against the computer (a simple AI, then an unbeatable Minimax AI)
- [ ] Add a persistent score counter across rounds
- [ ] Let players enter their own names
- [ ] Highlight the winning line
- [ ] Add sound effects and small animations
- [ ] Add a dark mode toggle
- [ ] Add a larger board mode, such as 4×4 or 5×5

---

## 🤝 Contributing

Contributions, ideas and bug reports are welcome!

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 👤 Author

**Pasha Jamal**

- GitHub: [@pashajamal](https://github.com/pashajamal)

---

## ⭐ Show Your Support

If you liked this project, please give it a **star** on GitHub. It really motivates me to build more!

Made with ❤️ using HTML, CSS & JavaScript.
