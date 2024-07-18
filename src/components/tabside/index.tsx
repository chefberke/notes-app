"use client";

import React, { useState, useEffect } from "react";
import { Tabs, Box, Text } from "@radix-ui/themes";
import { useSelector } from "react-redux";

import Notesbox from "../notesbox";

function Tabside() {
  const data = useSelector((state: any) => state.notes.data || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [displayedNotes, setDisplayedNotes] = useState<any[]>([]);

  const uniqueCategories = Array.from(new Set(data.map((item: any) => item.category)));

  useEffect(() => {
    const filteredNotes =
      currentCategory === "all" ? data : data.filter((item: any) => item.category === currentCategory);
    setDisplayedNotes(filteredNotes);
  }, [currentPage, currentCategory, data]);

  const filteredData = useSelector((item: any) => item.notes.filteredData);

  return (
    <div className="flex-col items-center justify-center mt-8 mx-[5rem] max-sm:mx-[1.2rem]">
      <div>
        <h2 className="font-medium text-[1.5rem]">Your Notes</h2>
      </div>
      <div className="pt-4">
        <Tabs.Root
          defaultValue="all"
          onValueChange={(value) => {
            setCurrentCategory(value);
            setCurrentPage(1);
          }}
        >
          <Tabs.List size="2">
            <Tabs.Trigger value="all">All</Tabs.Trigger>
            {uniqueCategories.map((category: any) => (
              <Tabs.Trigger key={category} value={category}>
                {category}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <Box pt="3" className="min-h-[29rem] max-h-[29rem]">
            <Tabs.Content value="all">
              <Text size="2">
                <div className="grid gap-8 w-full mt-[1rem] grid-cols-3 max-2xl:grid-cols-2 max-lg:grid-cols-1 overflow-y-auto h-[30rem] max-sm:gap-6">
                  {filteredData.length > 0
                    ? filteredData.map((item: any) => <Notesbox key={item.id} item={item} />)
                    : displayedNotes.map((item: any) => <Notesbox key={item.id} item={item} />)}
                </div>
              </Text>
            </Tabs.Content>

            {displayedNotes.length === 0 ? (
              <div className="flex items-center justify-center h-full w-full text-[1.3rem] text-gray-400 font-light">
                You don't have any notes...
              </div>
            ) : (
              uniqueCategories.map((category: any) => (
                <Tabs.Content key={category} value={category}>
                  <Text size="2">
                    <div className="grid gap-8 w-full mt-[1rem] grid-cols-3 max-2xl:grid-cols-2 max-lg:grid-cols-1 overflow-y-auto h-[30rem] max-sm:gap-6">
                      {filteredData.length > 0
                        ? filteredData
                            .filter((item: any) => item.category === category)
                            .map((item: any) => <Notesbox key={item.id} item={item} />)
                        : displayedNotes
                            .filter((item: any) => item.category === category)
                            .map((item: any) => <Notesbox key={item.id} item={item} />)}
                    </div>
                  </Text>
                </Tabs.Content>
              ))
            )}
          </Box>
        </Tabs.Root>
      </div>
    </div>
  );
}

export default Tabside;
