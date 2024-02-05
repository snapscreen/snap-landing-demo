export default function Card({
  children,
  caption,
  overline,
  isVideo,
  classNames,
}: {
  children: React.ReactNode;
  isVideo?: boolean;
  classNames?: string;
  overline?: string;
  caption?: string;
}) {
  return (
    <div className="flex flex-col col-span-2 sm:col-span-1">
      {overline && 
        <p className="text-sm text-center opacity-80 mt-2 mb-2">
          {overline}
        </p>
      }
      <div
        className={
          `flex flex-col justify-center items-center h-full w-full p-8 relative border rounded-xl overflow-hidden bg-surface shadow-xl dark:shadow-thick 
          ${isVideo ? 'aspect-video' : ''}
          ${classNames && classNames}
          `}
      >
        {children}
      </div>
      {caption && 
        <p className="text-sm font-semibold opacity-80 mt-3">
          {caption}
        </p>
      }
    </div>
  )
}
