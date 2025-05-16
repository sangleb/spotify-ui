import GradientWrapper from "../molecules/GradientWrapper";
import ProfileBanner from "../atoms/ProfileBanner";


export default function Home(){

    const artists = [
        {id:1, name: "Shiva", image: "https:/robohash.org/artist1"},
        {id:4, name: "Suraj", image: "https:/robohash.org/artist2"},
        {id:2, name: "Bablu", image: "https:/robohash.org/artist3"},
        {id:3, name: "Mayur", image: "https:/robohash.org/artist4"},
    ]
    return(
        <GradientWrapper >
            <ProfileBanner />

            <div className="py-12">
                {/* Artist header */}
                <div className="text-white px-12">
                    <h2 className="text-2xl font-bold">Top Artist</h2>
                    <p className="text-md">based on your recent listening</p>
                </div>
            </div>

            {/* Artist Lists */}
            <div className="flex mx-4 space-x-1">
                {artists.map((artist) => (
                <div key={artist.id} className="px-2 w-1/5 text-white">
                    <div className="p-4 rounded-lg bg-gray-900">
                        <img 
                            src={artist.image} 
                            className="w-full h-auto rounded-full"
                        />
                        <div className="mt-4">
                            <h3 className="text-lg te">{artist.name}</h3>
                            <p className="text-xs">Artist</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </GradientWrapper>
    )
}

                