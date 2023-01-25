import axios from 'axios'
import { motion } from 'framer-motion'
import  {useEffect, useState } from 'react'


const SpotifyCard = ({ section }) => 
{
    const [spotifyData, setSpotifyData] = useState(null);

    useEffect(() => {
        axios.get("https://spotify.m1guelpf.me/api/now-playing?id=dt6mi72ck6fgak7nsr0i1t50x")
        .then(res => {
            setSpotifyData(res.data);
        })
        .catch(err => {
            console.error(err)
        })
        }, [setSpotifyData])
    return (

        <motion.div
            animate={{ opacity: ['all', 'about'].includes(section) ? 1 : 0.3 }}
            className="flex justify-center items-center bg-[#A5F3C0] dark:bg-green-900 rounded-3xl col-span-1"
            whileHover="groupHover"
            variants={{
                groupHover: {
                    scale: 1.01,
                    transition: {
                        duration: 0.1,
                        ease: 'easeInOut',
                    },
                },
            }}
        >
            <div className="md:w-[160px] w-16">
            {spotifyData && <>
                <img src={spotifyData.item.album.images[0].url} alt="Spotify Album Art" className="rounded-3xl" />
                <h1 className="text-2xl font-bold text-center">{spotifyData.item.name}</h1>
                <h2 className="text-xl text-center">{spotifyData.item.artists[0].name}</h2></>
            }
            </div>
       
            </motion.div>
    )
}


export default SpotifyCard

