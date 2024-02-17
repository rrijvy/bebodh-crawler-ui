"use client";

import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { UIRoutes } from "@/core/routes";

export const SideNav = () => {
  return (
    <div className="sidebar fixed bottom-0 top-0 w-[220px] overflow-y-auto bg-gray-900 p-2 text-center text-white lg:left-0">
      <NavItemSingle url={UIRoutes.Dashboard} text="Dashboard" />
      <NavItemMultiple
        text="Amazon Crawler"
        subItems={[
          { text: "Product Category Crawler", url: UIRoutes.AmazonScrapper },
          { text: "Product Review Crawler", url: UIRoutes.AmazonScrapper },
        ]}
      />
      <NavItemSingle url={UIRoutes.GoogleMapScrapper} text="Google Map Crawler" />
      <NavItemSingle url={UIRoutes.ProxyScheduler} text="Proxy Scheduler" />
    </div>
  );
};

type NavItemProps = {
  text: string;
  url: string;
};

const NavItemSingle = (props: NavItemProps) => {
  return (
    <h3 className={cn("py-2 text-left text-sm font-normal")}>
      <Link href={props.url}>{props.text}</Link>
    </h3>
  );
};

type NavItemsProps = {
  text: string;
  subItems: NavItemProps[];
};

const NavItemMultiple = (props: NavItemsProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem className={cn("border-none")} value={props.text}>
        <AccordionTrigger className={cn("py-2 text-sm font-normal hover:no-underline")}>{props.text}</AccordionTrigger>
        <AccordionContent className="text-left">
          <ul className="pl-3">
            {props.subItems.map((subItem) => (
              <li key={subItem.text} className={cn("py-2 text-sm font-normal")}>
                <Link href={subItem.url}>{subItem.text}</Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
