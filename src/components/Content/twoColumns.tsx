import React from 'react';

//         <!--
//   Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
//   Read the documentation to get started: https://tailwindui.com/documentation
// -->
// <!-- This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 -->

export function TwoColumns() {
    return (

<div className="bg-white overflow-hidden">
  <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
    <div className="mx-auto text-base max-w-prose lg:max-w-none">
      <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Möt</p>
      <h1 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Johnny Holmgren</h1>
    </div>
    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
      <div className="relative mb-8 lg:mb-0 lg:row-start-1 lg:col-start-2">
        <svg className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
        </svg>
        <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
          <figure>
            <div className="relative pb-7/12 lg:pb-0">
              <img src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" alt="" width="1184" height="1376" className="rounded-lg shadow-lg object-cover object-center absolute inset-0 w-full h-full lg:static lg:h-auto" />
            </div>
            <figcaption className="flex mt-3 text-sm text-gray-500">
              {/* <!-- Heroicon name: camera -->*/}
              <svg className="flex-none w-5 h-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>
              Photograph by Geerts Pieters
            </figcaption>
          </figure>
        </div>
      </div>
      <div>
        <div className="text-base max-w-prose mx-auto lg:max-w-none">
          <p className="text-lg leading-7 text-gray-500 mb-5">Min blogg och kärlek för musik</p>
        </div>
        <div className="prose text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
          <p>Jag har alltid älskat musik. Min morfar utrustade mig redan i 6 års ålder med ett dragspel, Fidelio hette det. Sedan dess har musiken alltid haft ett stort grepp om mig med eget musicerande, men även stort intresse att lyssna på andras musikutövande. Det har gjort att många inspelningar av eget producerat och även andra musikanters verk har samlats under åren.</p>
        </div>
      </div>
    </div>
  </div>
</div>


    )
}