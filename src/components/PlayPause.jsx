import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (
  isPlaying && activeSong?.title === song.title ? 
  (<FaPauseCircle 
    className='text-gray-300 w-[25px] h-auto'
    onClick={handlePause}
    />) : 
  (<FaPlayCircle 
    className='text-gray-300 w-[25px] h-auto'
    onClick={handlePlay}
    />)
);

export default PlayPause;
