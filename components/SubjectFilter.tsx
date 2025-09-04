"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { subjects } from "@/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
const SubjectFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("subject") || "";
  const [subject, setSubject] = useState(query);
  useEffect(() => {
    let newUrl = "";

    if (subject === "all") {
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"],
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: subject,
      });
    }
    router.push(newUrl, { scroll: false });
  }, [subject, searchParams, router]);
  return (
    <Select value={subject} onValueChange={setSubject}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All subject</SelectItem>
        {subjects.map((subject) => (
          <SelectItem value={subject} key={subject} className="capitalize">
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;
