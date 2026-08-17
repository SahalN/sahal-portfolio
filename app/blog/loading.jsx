export default function Loading() {
  return (
    <div className='animate-pulse'>
      <div className='mb-5'>
        <div className='w-40 h-8 rounded bg-black/10 dark:bg-white/10' />
        <div className='w-full h-4 mt-3 rounded bg-black/10 dark:bg-white/10' />
        <div className='w-4/5 h-4 mt-2 rounded bg-black/10 dark:bg-white/10' />
      </div>
      <div className='grid grid-cols-2 gap-4 justify-items-stretch'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}>
            <div className='mx-auto mb-2 w-52 h-28 rounded-xl bg-black/10 dark:bg-white/10' />
            <div className='w-40 h-4 mx-auto rounded bg-black/10 dark:bg-white/10' />
          </div>
        ))}
      </div>
    </div>
  );
}
