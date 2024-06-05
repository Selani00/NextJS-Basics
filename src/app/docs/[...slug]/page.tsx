export default function DocsPage({params}:{
    params: {
        slug: string[]
    }
})  

{ 
    if(params.slug.length === 2){
        return (
            <h1>
                Viewing docs fro feature {params.slug[0]} and catch all {params.slug[1]}
            </h1>
        )
    }else if(params.slug.length === 1){
        return (
            <h1>
                Viewing docs for docs {params.slug[0]}
            </h1>
        )
    }
    return(
        <h1>Docs Page</h1>
    )
}