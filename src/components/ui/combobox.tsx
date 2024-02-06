"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type Dropdown = {
  value: string;
  label: string;
};

type Props = {
  value?: string;
  dropdownList: Dropdown[];
  onClickHandler: (value: string) => void;
  emptyText?: string;
};

export function Combobox(props: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
          <span className="overflow-hidden">
            {props.value ? props.dropdownList.find((dropdownItem) => dropdownItem.value === props.value)?.label : "Select"}
          </span>
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 bg-white">
        <Command>
          <CommandInput placeholder="Search..." className="h-9" />
          <CommandEmpty>{props.emptyText ?? "Select"}</CommandEmpty>
          <CommandGroup className="overflow-scroll">
            {props.dropdownList.map((dropdownItem) => (
              <CommandItem
                key={dropdownItem.value}
                className="cursor-pointer data-[selected=true]:bg-blue-200"
                value={dropdownItem.value}
                onSelect={(currentValue) => {
                  props.onClickHandler(currentValue === props.value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {dropdownItem.label}
                <CheckIcon className={cn("ml-auto h-4 w-4", props.value === dropdownItem.value ? "opacity-100" : "opacity-0")} />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
