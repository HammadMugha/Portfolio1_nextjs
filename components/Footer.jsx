import React from 'react'

function Footer() {
  return (
    <section className='py-[60px]'>
        <div class="mx-auto max-w-md">
      <strong class="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
        Want us to email you with the latest blockbuster news?
      </strong>

      <form class="mt-6">
        <div class="relative max-w-lg">
          <label class="sr-only" for="email"> Email </label>

          <input
            class="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
            id="email"
            type="email"
            placeholder="john@doe.com"
          />

          <button
            class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
    </section>
  )
}

export default Footer