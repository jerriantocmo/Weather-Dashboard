import React, { type ReactNode } from 'react'

type Props = {
  children: ReactNode
  title: string
}

export default function Card({children, title}: Props) {
  return (
    <div className='"p-4 w-1/2 rounded-xl bg-linear-to-br from-card to-card/60 shadow-md flex flex-col gap-4 2xl:h-full  dark:border-none"'>
      <h2 className='text-2xl font-semibold'>{title}</h2>
      <div>{children}</div>
    </div>
  )
}