import BaseLayout from "@/layouts/base.layout";
import { Outlet } from "react-router-dom";

export default function Thematic() {
  return (
    <BaseLayout>
      <main className="z-[0px] max-w-6xl px-4 py-8 mx-auto">
        <Outlet />
      </main>
    </BaseLayout>
  );
}
