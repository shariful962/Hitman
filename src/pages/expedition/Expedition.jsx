
import PostCard from "./PostCard";
import Icons from "../../utils/images";
import Selected from "../../common/Selected";

const Expedition = () => {
  return (
    <div className="my-20 max-w-6xl mx-auto px-4">
      <h1 className="text-3xl md:text-[42px] font-semibold text-Primary mt-28 mb-6 ml-3">
        Expedition Feed
      </h1>

      <Selected />

      <h1 className="text-2xl text-center text-white font-medium mt-6">
        Expedition Feed
      </h1>

      <div className="mt-10">
        <PostCard
          profile={Icons.profile1}
          name="Anne Jones"
          time="25m ago"
          location="Italy"
          caption="Hitman Jack planning so easy and convenient"
          image={Icons.expedition1}
        />

        <PostCard
          profile={Icons.profile1}
          name="Joshef Marlow"
          time="1h ago"
          location="Portugal"
          image={Icons.expedition2}
        />

        <PostCard
          profile={Icons.profile1}
          name="Anne Jones"
          time="25m ago"
          location="Italy"
          caption="The plan was so damn awesome with Hitman Jack!"
        />

        <PostCard
          profile={Icons.profile1}
          name="Shakib Al Hasan"
          time="1h ago"
          location="Italy"
          caption="The plan was so awesome with #HitmanJack"
          image={Icons.expedition3}
        />
      </div>
    </div>
  );
};

export default Expedition;

