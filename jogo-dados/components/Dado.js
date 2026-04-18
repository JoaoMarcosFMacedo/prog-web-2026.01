import Image from 'next/image'

const dadoImages = {
  1: '/dice-1.svg',
  2: '/dice-2.svg',
  3: '/dice-3.svg',
  4: '/dice-4.svg',
  5: '/dice-5.svg',
  6: '/dice-6.svg',
}

export default function Dado({ valor }) {
  const src = dadoImages[valor] || dadoImages[1]

  return (
    <div className="dado">
      <Image src={src} alt={`Dado ${valor}`} width={96} height={96} />
    </div>
  )
}
