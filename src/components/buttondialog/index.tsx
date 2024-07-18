"use client";

import { addNote } from "@/lib/features/notesSlice";
import { Dialog, Flex, TextField, Text, Button, TextArea } from "@radix-ui/themes";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Buttondialog() {
  const dispatch = useDispatch();

  const [noteTitle, setNoteTitle] = useState<string>("");
  const [noteContent, setNoteContent] = useState<string>("");
  const [noteCategory, setNoteCategory] = useState<string>("");

  const currentDate = new Date();
  const dateDay = currentDate.getDate();
  const dateMonth = currentDate.getMonth();
  const dateYear = currentDate.getFullYear();
  const dateString = `${dateDay}.${dateMonth}.${dateYear}`;

  function createNewNote() {
    if (noteTitle.trim().length == 0 || noteContent.trim().length == 0 || noteCategory.trim().length == 0) {
      alert("Please check your note!");
      return;
    }

    const request = {
      id: Math.floor(Math.random() * 999),
      title: noteTitle,
      content: noteContent,
      category: noteCategory,
      date: dateString,
    };
    dispatch(addNote(request));
    setNoteCategory("");
    setNoteContent("");
    setNoteTitle("");
  }

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button className="w-full">
            <p className="px-4 h-full flex items-center justify-center max-sm:px-2">Add +</p>
          </Button>
        </Dialog.Trigger>

        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Add New Note</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Fill out the form below to add a new note.
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Title
              </Text>
              <TextField.Root
                placeholder="Enter your note title"
                value={noteTitle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNoteTitle(e.target.value)}
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Description
              </Text>
              <TextArea
                placeholder="Enter your note description"
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Category
              </Text>
              <TextField.Root
                placeholder="Enter your category"
                value={noteCategory}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNoteCategory(e.target.value)}
              />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button onClick={createNewNote}>Add</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}

export default Buttondialog;
