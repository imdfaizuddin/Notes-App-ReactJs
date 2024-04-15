# Note Taking App

This is a simple note-taking app built with React. The app allows users to add, view, and delete notes.

## Screenshots

![Homepage](/output/output1.png.png)
*Homepage*

## Features

- **Add Note**: Users can add a note with a title and content.
- **View Note**: Users can view all their notes in a list format. Each note displays the title, content, and a delete button.
- **Delete Note**: Users can delete a note by clicking the delete button on the note.

## Components

- **App**: This is the main component of the application. It manages the state of the notes and contains functions to add and delete notes.
- **Header**: This component displays the header of the application.
- **Footer**: This component displays the footer of the application.
- **Note**: This component represents a single note. It receives the note data as props from the App component.
- **CreateArea**: This component contains a form for creating a new note. When a note is created, it calls a function from the App component to update the state of the notes.

## Styles

The styles for the components are located in the `App.css` file.

## How to Run

1. Clone the repository
2. Install the dependencies with `npm install`
3. Start the development server with `npm run dev`
