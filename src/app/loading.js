import React from 'react'

export default function Loading(){
  return (
    <div>
      <h1 className='flex justify-center items-center h-screen'>Loading....! Please Wait</h1>
      <p
  aria-hidden="true"
  class="mb-4 text-base text-neutral-700 dark:text-white">
  <span
    class="inline-block min-h-[1em] w-6/12 flex-auto cursor-wait bg-current align-middle opacity-50"></span>
</p>
<a
  href="#"
  tabindex="-1"
  class="inline-block min-h-[1em] w-4/12 flex-auto cursor-wait rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white opacity-50 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out before:inline-block before:content-[''] hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
  aria-hidden="true"></a>
    </div>
  )
}
