import React from 'react'
import { TwoColumns } from '../src/components/Content/twoColumns'
import ImageFigure from '../src/components/Content/imageFigure'

export default function OmMig() {
  return (
    <TwoColumns
      preHeader="Möt"
      header="Johnny Holmgren"
      preText="Min blogg och kärlek för musik"
      text="Jag har alltid älskat musik. Min morfar utrustade mig redan i 6 års ålder med ett
dragspel, Fidelio hette det. Sedan dess har musiken alltid haft ett stort grepp om
mig med eget musicerande, men även stort intresse att lyssna på andras
musikutövande. Det har gjort att många inspelningar av eget producerat och även
andra musikanters verk har samlats under åren."
      imageSrc="/foton/johnny_holmgren_foto_r_thellbro-500x505.jpg"
      imageWidth="500"
      imageHeight="505"
      imageCaption="Foto av Ronny Tellbro"
    />
  )
}
