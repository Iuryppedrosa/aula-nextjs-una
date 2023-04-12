import useSWR from 'swr';

const url = 'https://jsonplaceholder.typicode.com/posts'
//const usl = "api/staticdata"
//const fetcher = (url) => fetch(url).then((res) => res.json());
const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Blog(){

    const { data, error } = useSWR(url, fetcher)

    //Handle the error state
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!data) return <div>Loading...</div>;
    
    return(
        <div>
            <h1>Blog</h1>
            {data &&
                data?.map((item) => (
                    <ul>
                        <li>Id: {item.userId}</li>
                        <li>Name: {item.title}</li>
                        <li>Language: {item.body}</li>
                    </ul>
                ))}
        </div>
    );
}

export default Blog;