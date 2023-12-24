import React from 'react'

type Props = {
    params:{
        slug : string[];
    }
}

export default function DetailProjectPage(props: Props) {
    const {
        params
    } = props

    const kategory:string = params.slug[0];
    const project:string = params.slug[1];
  return (
    <div>
      Detail Project
      <ul>
        <li>Kategory : {kategory}</li>
        <li>project : {project}</li>
      </ul>
    </div>
  )
}