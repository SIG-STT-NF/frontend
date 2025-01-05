import BaseLayout from "@/layouts/base.layout";
import Hero from "@/components/shared/hero";

export default function Home() {
  return (
    <BaseLayout>
      <section>
        <div className="max-w-6xl px-4 py-8 mx-auto">
          <Hero />
        </div>
      </section>
    </BaseLayout>
  );
}
