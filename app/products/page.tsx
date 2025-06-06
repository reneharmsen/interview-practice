import SearchComponent from './searchComponent';

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>
 
export default async function Page(props: {
  params: Params
  searchParams: SearchParams
}) 
{
  const searchParams = await props.searchParams
  const query = typeof searchParams.query === 'string' 
    ? searchParams.query 
    : searchParams.query?.[0] 
    || ''

  return (
    <>
    <SearchComponent query={query} />  
    </> 
  )
}
