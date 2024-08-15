'use client';

import CommentSection from "@/components/CommentSection";
import FAQDropdown from "@/components/FAQ";
import KanbanBoard from "@/components/KanBan";
import TestimonialGrid from "@/components/TestimonialGrid";
import WeatherCard from "@/components/WeatherCard";

export default function Play() {
  return (
    <main className="flex flex-col items-center justify-between p-10 gap-10">
      <KanbanBoard />
    </main>
  );
}
