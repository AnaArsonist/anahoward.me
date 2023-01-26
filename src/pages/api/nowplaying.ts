import { NextApiRequest, NextApiResponse } from 'next'
import SpotifyWebApi from 'spotify-web-api-node'

const api = new SpotifyWebApi({
    clientId:process.env.SPOTIFY_ID,
    clientSecret:process.env.SPOTIFY_SECRET,
    redirectUri:process.env.SPOTIFY_REDIRECT
});

const handler = async(req: NextApiRequest, res: NextApiResponse) => {

    try {
        api.setRefreshToken(process.env.SPOTIFY_REFRESH_TOKEN)
        const data = await api.refreshAccessToken()
         api.setAccessToken(data.body['access_token'])

         const recentTracks = await api.getMyRecentlyPlayedTracks({
            limit: 1 })
            res.status(200).json(recentTracks.body.items[0].track)
    }
    catch (err) {
        console.log('Something went wrong!', err)
    }
}

export default handler
