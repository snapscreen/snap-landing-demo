export default function SearchResults({ results }: { results: any[] }) {
  return (
    <div className="w-full mx-auto">
      {results.map((result: any, index: number) => (
        <div className="mt-6 max-w-xl" key={index}>
          <div className="group flex flex-col">
            <span className="text-sm truncate">{result.formattedUrl}</span>
            <span
              className="group-hover:underline decoration-1 text-xl truncate text-primary font-medium"
              dangerouslySetInnerHTML={{ __html: result.title }}
            ></span>
          </div>
        </div>
      ))}
    </div>
  );
}
