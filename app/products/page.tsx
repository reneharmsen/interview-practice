import SearchComponent from './searchComponent';

export default function Page({searchParams}: {searchParams: {query: string}}) {
  return (
    <SearchComponent query={searchParams.query} />   
  );
}