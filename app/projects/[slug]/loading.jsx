export default function Loading() {
  return (
    <div className='max-w-screen-sm mx-auto animate-pulse'>
      <div className='w-2/3 h-8 rounded bg-black/10 dark:bg-white/10' />
      <div className='w-32 h-4 mt-3 rounded bg-black/10 dark:bg-white/10' />
      <div className='w-full mt-5 mb-5 rounded-xl aspect-video bg-black/10 dark:bg-white/10' />
      <div className='space-y-3'>
        <div className='w-full h-4 rounded bg-black/10 dark:bg-white/10' />
        <div className='w-full h-4 rounded bg-black/10 dark:bg-white/10' />
        <div className='w-5/6 h-4 rounded bg-black/10 dark:bg-white/10' />
        <div className='w-3/4 h-4 rounded bg-black/10 dark:bg-white/10' />
      </div>
    </div>
  );
}
