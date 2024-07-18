"use client";
import React, { useState } from "react";
import { DropdownMenu, Button, Dialog, Text, TextField, Flex, TextArea } from "@radix-ui/themes";
import { CiCalendarDate } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { deleteNote, editNote } from "@/lib/features/notesSlice";

function Notesbox({ item }: any) {
  const dispatch = useDispatch();

  function removeNote() {
    dispatch(deleteNote(item.id));
  }

  const [newNoteTitle, setNewNoteTitle] = useState<string>(item.title);
  const [newNoteContent, setNewNoteContent] = useState<string>(item.content);
  const [newNoteCategory, setNewNoteCategory] = useState<string>(item.category);

  function editNotes() {
    if (newNoteTitle.trim().length == 0 && newNoteContent.trim().length == 0 && newNoteCategory.trim().length == 0) {
      alert("Please check your note!");
      return;
    }

    const request = {
      id: item.id,
      title: newNoteTitle,
      content: newNoteContent,
      category: newNoteCategory,
      date: item.date,
    };
    dispatch(editNote(request));
  }

  return (
    <div>
      <div
        key={item.id}
        className="w-[24rem] h-[13rem] max-2xl:w-full max-sm:max-w-full bg-gray-100 rounded-xl shadow-md flex-col items-center justify-start"
      >
        <div className="w-full h-[20%] px-8 pt-8 flex items-center justify-between">
          <div className="w-auto px-3 h-[1.8rem] flex items-center justify-center bg-blue-500 rounded-xl text-white font-semibold text-[0.9rem]">
            {item.category}
          </div>
          <div>
            <Dialog.Root>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button variant="soft" style={{ backgroundColor: "transparent" }}>
                    <p className="font-medium text-[1.6rem] text-gray-950">...</p>
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item>
                    <Dialog.Trigger>
                      <button>Edit</button>
                    </Dialog.Trigger>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item color="red" onClick={removeNote}>
                    Delete
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
              {/*  */}

              <Dialog.Content maxWidth="450px">
                <Dialog.Title>Edit Note</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                  Fill out the form below to edit a new note.
                </Dialog.Description>

                <Flex direction="column" gap="3">
                  <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                      Title
                    </Text>
                    <TextField.Root
                      placeholder="Enter your new note title"
                      // defaultValue={item.title}
                      value={newNoteTitle}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewNoteTitle(e.target.value)}
                    />
                  </label>
                  <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                      Description
                    </Text>
                    <TextArea
                      placeholder="Enter your new note description"
                      // defaultValue={item.content}
                      value={newNoteContent}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewNoteContent(e.target.value)}
                    />
                  </label>
                  <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                      Category
                    </Text>
                    <TextField.Root
                      placeholder="Enter your new category"
                      // defaultValue={item.category}
                      value={newNoteCategory}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewNoteCategory(e.target.value)}
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
                    <Button onClick={editNotes}>Save</Button>
                  </Dialog.Close>
                </Flex>
              </Dialog.Content>
            </Dialog.Root>
          </div>
        </div>
        <div className="w-full h-[65%] px-9 pt-6">
          <h2 className="font-semibold text-[1.4rem]">{item.title}</h2>
          <p className="pt-2 text-gray-600 text-[1rem] max-w-[20rem] w-[95%] h-[5.5rem]">{item.content.slice(0, 75)}</p>
        </div>
        <div className="w-full h-[15%] flex items-center justify-between px-8 pb-6">
          <div></div>
          <p className="text-gray-500 text-[0.9rem] flex items-center justify-center gap-2">
            {item.date} <CiCalendarDate className="text-[1.5rem]" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notesbox;
