import Main from "../layout/Main";

import HeroStatsBar from "../components/hero/HeroStatsBar";
import CtaButton from "../components/ui/CtaButton";

export default function Home() {
  return (
    <Main>
      <section className="relative flex flex-col justify-center min-h-screen z-10">
        <p className="eyebrow">Premium home renovations</p>
        <h1 className="heading-xl mb-3">
          Beautiful spaces. <br />
          Built around you.
        </h1>
        <div className="accent-line"></div>
        <p className="max-sm:w-full max-lg:w-[75%] w-[50%] mb-8 text-[1rem] leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          laboriosam iste nesciunt blanditiis similique, consequuntur enim
          excepturi veritatis delectus deleniti ex nulla autem magnam,
          consequatur, error at tempore cumque corporis optio.
        </p>
        <div className="flex gap-4">
          <CtaButton variant="primary">Get a free estimate</CtaButton>
          <CtaButton variant="secondary">View our work</CtaButton>
        </div>
        <HeroStatsBar />
      </section>
    </Main>
  );
}
