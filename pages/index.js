import Carousel from "../components/Carousel";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Carousel />
      <div className="flex flex-col md:flex-row bg-primary p-8 space-y-6 md:space-y-0 md:space-x-8 items-center md:place-content-center">
        <Card
          imageUrl="https://cdn.lordicon.com/twkviqpp.json"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque auctor elit id dui consectetur massa a sed quis. Luctus amet porttitor ut etiam proin. Dictum commodo,"
        />
        <Card
          imageUrl="https://cdn.lordicon.com/twkviqpp.json"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque auctor elit id dui consectetur massa a sed quis. Luctus amet porttitor ut etiam proin. Dictum commodo,"
        />
        <Card
          imageUrl="https://cdn.lordicon.com/nkmsrxys.json"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque auctor elit id dui consectetur massa a sed quis. Luctus amet porttitor ut etiam proin. Dictum commodo,"
        />
      </div>
    </div>
  );
}
