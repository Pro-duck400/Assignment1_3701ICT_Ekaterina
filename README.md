# My Todo List App

A mobile task management application built using React Native. The app allows users to create, view, edit, delete, and manage personal to-do items with persistent storage and a multi-screen interface.

---

## Overview

My Todo List is a productivity application designed to demonstrate key mobile development concepts including:

* Component-based UI design
* Navigation between screens
* Form validation
* State management
* Data persistence using AsyncStorage

---

## Features

### Home Screen

* Displays all todo items using a FlatList
* Each todo is shown in a compact format by default
* Expandable view for detailed information

### Add New Todo

* Input fields for:

  * Title
  * Description (multi-line support)
* Form validation to prevent empty submissions
* Success and error alerts via pop-ups or toast messages
* Automatically clears inputs after successful save

### Todo Interactions

* Expand/collapse todo items using a caret icon
* Mark todos as completed (green tick)
* Delete todos (red delete action)
* Immediate UI updates on state changes

### Data Persistence

* Uses AsyncStorage for local storage
* Todos persist across app restarts
* Stores completion status and updates

### UI & Navigation

* Stack navigation between screens:

  * Home
  * Add Todo screen
* Clean and responsive layout
* Custom buttons and intuitive navigation flow

---

## Tech Stack

* React Native
* JavaScript (ES6+)
* React Navigation (Stack Navigator)
* AsyncStorage
* Expo (if applicable)

---

## Project Structure

```text id="xk3m91"
src/
├── components/
│   ├── AddButton.js
│   ├── BackButton.js
│   ├── ListItems.js
│   ├── SaveButton.js
│   └── Title.js
├── constants/
│   ├── Colours.js
│   └── Key.js
├── models/
│   └── Todo.js
├── screens/
│   ├── Home.js
│   └── NewTodoScreen.js
├── utils/
│   ├── Storage.js
│   └── Validation.js
App.js
```

---

## Installation & Setup

### Clone the repository

```bash id="c9p2qa"
git clone https://github.com/your-username/my-todo-list.git
cd my-todo-list
```

### Install dependencies

```bash id="m3v8rt"
npm install
```

### Run the app

Using Expo:

```bash id="l7q1we"
npx expo start
```

Using React Native CLI:

```bash id="n5t9zx"
npx react-native run-android
npx react-native run-ios
```

## Demo Video

YouTube Link:
https://youtu.be/Dha5OkP7l3I

---

## Key Functional Requirements

* Add new todos with validation
* Display todos using FlatList
* Expand/collapse todo items
* Mark todos as completed
* Delete todos
* Persist data using AsyncStorage

---

## Learning Outcomes

This project demonstrates:

* React Native mobile app development
* Component-based architecture
* State and props management
* Navigation between screens
* Form handling and validation
* Local storage with AsyncStorage
* Git version control workflow

---

## Author / Team

| Name      | Role      |
| --------- | --------- |
| Ekaterina Kozub | Developer |


