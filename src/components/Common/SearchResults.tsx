export default function SearchResults({ results }: { results: any[] }) {
  return (
    <div className="w-full mx-auto">
      {results.map((result: any, index: number) => (
        <div className="mt-6 max-w-xl" key={index}>
          <a 
            href="#" 
            className="group flex flex-col outline-none">
            <span className="text-sm truncate mb-1">https://www.{result.formattedUrl}</span>
            <p
              className="group-hover:underline group-focus-within:underline underline-offset-4 decoration-1 text-xl text-primary font-medium"
              dangerouslySetInnerHTML={{ __html: result.title }}
            ></p>
            <time className="text-xs opacity-75 mt-1">{result.time}</time>
          </a>
        </div>
      ))}
    </div>
  );
}
