import { useState, useEffect } from "react";
import Tab from "../components/Tab";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const channelId = "UC_SePgsyHh7YvekBLSv4XZA";
      const apiKey = "AIzaSyBnvpMAKnwSi2wp3eZAr5_Zmvk97yiHBTY";
      const maxResults = 2; // Number of videos to fetch

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
        );
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section id="videos" className="flex max-container w-2/3 justify-center">
      <div className=" bg-white w-full justify-between ">
        <div className="flex justify-between ml-10 max-sm:ml-0 max-sm:gap-7 ">
          <h3 className="font-poppins font-bold text-3xl text-ash pb-4">
            Videos
          </h3>

          <a href="https://www.youtube.com/@pdatv3656/videos">
            <Tab label="MORE VIDEOS" />
          </a>
        </div>
        <div className="flex flex-row gap-5 justify-center mt-10 flex-wrap">
          {videos.map((video) => (
            <iframe
              key={video.id.videoId}
              width="400"
              height="250"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
