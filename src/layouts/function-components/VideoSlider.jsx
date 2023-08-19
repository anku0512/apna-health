import ReactPlayer from 'react-player'

const VideoSlider = ({ list }) => {

  return (
    <div className="video-slider">

      {list.map((item, i) => (
        <div key={i} className="video-card">

          <ReactPlayer 
            url={item.video}
            playsinline
            controls
            playing= {true}
            width='300px'
            height='300px'
          />


          <p className="text-center">{item.comment}</p>

        </div>
      ))}

    </div>
  );
};

export default VideoSlider;