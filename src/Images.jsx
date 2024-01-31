import { useEffect, useState } from "react"
import fetchImages from "./utils/fetchImages"

export default function Images() {
    const [images, setImages] = useState(['image-1'])

    useEffect(() => {
        fetchImages().then((response) => {
            setImages(response.data.items)
        })
    })

    return (
        <ul className="images-list">
            {images.map((image) => {
                return <li key={image.item_id}>
                    <img src={image.img_url}/>
                    </li>
            })}
        </ul>
    )
}