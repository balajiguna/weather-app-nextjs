import Head from "next/head";
import SearchBox from "../components/SearchBox";
import FamousPlaces from "../components/FamousPlaces";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Leaf Weather App - Nextjs</title>
      </Head>

      <div className="home">
        <div className="container">
          <SearchBox placeholder="Search for a city..." />

          <FamousPlaces />
        </div>
      </div>
    </div>
  );
}
