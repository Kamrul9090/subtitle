import Link from "next/link";

const SearchMovies = () => {
    return (
        <>
            <h1 className="text-3xl text-primary text-center py-8">Upload your subtitle</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <div className="space-x-2 flex justify-center lg:justify-start">
                        <input type="search" className="p-1 h-8 w-3/5 lg:w-9/12 outline-none border-2 rounded-md" placeholder="search" />
                        <button type="submit" className="text-white bg-primary hover:bg-secondary py-2 px-2 lg:px-4 text-xs rounded-md">Search</button>
                    </div>

                    <div className="mt-10">
                        <Link href="/main/upload/title"><p>extraction</p></Link>
                        <p>Mother of dragon</p>
                        <p>Game of thrones</p>
                        <p>Load of ring followers of the king</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchMovies;