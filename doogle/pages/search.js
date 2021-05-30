import Head from "next/head";
import Header_Result from "../components/Header_Result";

function Search_Page() {
    return <div>
        <Head>
            <title>Search Results</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header_Result />
    </div>
}

export default Search_Page;