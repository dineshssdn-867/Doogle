import Head from "next/head";
import Header_Result from "../components/Header_Result";
import {API_KEY, CONTEXT_KEY} from "../keys";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

function Search_Page({ results }) {
    const router = useRouter();
    return <div>
        <Head>
            <title>{router.query.term} - Doogle Search</title>
            <link rel="icon" href="https://www.google.com/favicon.ico" />
        </Head>
        <Header_Result />
        <SearchResults results={results} />
    </div>;
}

export default Search_Page;

export async function getServerSideProps(context){
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    const data = useDummyData ? Response : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
        ).then((response) => response.json());
    
    return {
        props: {
            results: data
        }
    }
} 