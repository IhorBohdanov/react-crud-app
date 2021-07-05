import { useParams } from "react-router-dom"
import React, {useEffect, useState} from 'react';
import api from '../../api';
import { Row, Col } from 'antd';

export default function SingleAlbum() {
    let [photos, setPhotos] = useState([])

    useEffect(() => {
      const getPhotos = async () => {
        const res = await api.get(`${id}/photos`)
        console.log(res)
        setPhotos(res.data)
      }

      getPhotos()
    },[]) 

    const { id } = useParams()
    return (
        <div>
            {id}
            {photos.length ? (
            <Row gutter={16}>
                {photos.map(item => {
                    return (
                        <Col span={8}>
                            <div>col-6</div>
                        </Col>
                    )
                })}
            </Row>
            ) : 'No data'}
        </div>
    )
}
