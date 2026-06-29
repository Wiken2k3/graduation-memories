"use client";

import { useMemo, useState } from "react";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { friends } from "@/data/friends";

import MemoryCard from "./MemoryCard";
import SearchBar from "./SearchBar";

export default function MemoryWall() {
  const [search, setSearch] = useState("");

  const filteredFriends = useMemo(() => {
    return friends.filter((friend) =>
      friend.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section
      id="memory-wall"
      className="
        bg-[#FAFAF8]
        py-40
      "
    >
      <Container>
        <SectionTitle
          eyebrow="Memory Wall"
          title="Tìm tấm Polaroid của cậu"
          description="Mỗi tấm ảnh là một lời cảm ơn vì đã đồng hành cùng mình trong suốt những năm đại học."
        />

        <SearchBar value={search} onChange={setSearch} />

        <p
          className="
            mt-10
            text-center
            text-sm
            uppercase
            tracking-[0.25em]
            text-[#7298C7]
          "
        >
          Click vào tấm Polaroid để mở kỷ niệm của cậu.
        </p>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#6B6B6B]">
            Đang hiển thị
            <span className="font-semibold text-[#7298C7]">
              {" "}
              {filteredFriends.length}
            </span>
            /
            <span className="font-semibold">
              {" "}
              {friends.length}
            </span>
            {" "}bạn
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            mt-24
            grid
            gap-12
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {filteredFriends.length > 0 ? (
            filteredFriends.map((friend) => (
              <MemoryCard key={friend.id} friend={friend} />
            ))
          ) : (
            <div className="col-span-full py-24 text-center">
              <h3 className="text-2xl font-medium text-[#272727]">
                Không tìm thấy ai cả.
              </h3>

              <p className="mt-3 text-neutral-500">
                Thử tìm bằng tên khác nhé.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}