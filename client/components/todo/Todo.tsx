"use client"

import AddTaskInput from "./AddTaskInput";
import Heading from "./Heading";

export default function TodoPage() {

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">

        {/* Header Section */}
        <Heading />

        {/* Add Task Section (Shadcn Input + Select + Button) */}
        <AddTaskInput />
      </div>
    </div>
  );
}