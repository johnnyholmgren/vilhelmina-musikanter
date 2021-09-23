import React from 'react'
import ImageFigure from './imageFigure'

//         <!--
//   Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
//   Read the documentation to get started: https://tailwindui.com/documentation
// -->
// <!-- This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 -->

interface Props {
  preHeader: string
  header: string
  preText: string
  text: string
  imageSrc: string
  imageWidth: number
  imageHeight: number
  imageCaption: string
}

export function TwoColumns({
  preHeader,
  header,
  preText,
  text,
  imageSrc,
  imageWidth,
  imageHeight,
  imageCaption,
}: Props) {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:max-w-none">
          <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
            {preHeader}
          </p>
          <h1 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {header}
          </h1>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative mb-8 lg:mb-0 lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <ImageFigure
                imageSrc={imageSrc}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                caption={imageCaption}
              />
            </div>
          </div>
          <div>
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg leading-7 text-gray-500 mb-5">{preText}</p>
            </div>
            <div className="prose text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
