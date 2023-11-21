import { Header, HeroSection, Modal, MovieRow } from "@/components";
import { BannerCard } from "@/components/BannerCard";
import { SearchModal } from "@/components/SearchModal";
import {
  COMEDY_MOVIES,
  DOCUMENTARIES,
  HORROR_MOVIES,
  NETFLIX_ORGINALS,
  ROMANCE_MOVIES,
  TOP_RATED,
  TRENDING_MOVIES,
} from "@/constants";

/**
 * The Dashboard component renders a responsive layout with a header, hero section, and multiple movie
 * rows categorized by genre.
 * @returns The Dashboard component is returning a JSX element.
 */
const Dashboard = () => {
  return (
    <div className={`relative h-screen w-full bg-gradient-to-b  lg:h-[140vh] `}>
      <Header />
      <main className="relative pl-4 pb-24 space-y-5 lg:pl-16 ">
        <HeroSection />
        <MovieRow title="Trending Now" movies={TRENDING_MOVIES} />
        <MovieRow title="Top Rated" movies={TOP_RATED} />
        <MovieRow
          showAsBanner={true}
          title="Only on Netflix"
          movies={NETFLIX_ORGINALS}
        />
        <MovieRow title="Comedies" movies={COMEDY_MOVIES} />
        <MovieRow title="Horror" movies={HORROR_MOVIES} />
        <MovieRow title="Romance" movies={ROMANCE_MOVIES} />
        <MovieRow
          showAsBanner={true}
          title="Documentaries"
          movies={DOCUMENTARIES}
        />
      </main>
      <Modal />
      <SearchModal />
    </div>
  );
};

export default Dashboard;
