import { useParams } from "react-router-dom"
import React, {Fragment, useEffect, useState} from 'react';
import api from '../../api';
import { Row, Col } from 'antd';

export default function SingleAlbum() {
    let [photos, setPhotos] = useState([]);
    let [title, setTitle] = useState('');

    useEffect(() => {
      const getPhotos = async () => {
        const res = await api.get(`${id}/photos`)
        console.log(res)
        setPhotos(res.data)
      }

      const getAlbum = async () => {
        const res = await api.get(`${id}`)
        console.log(res)
        setTitle(res.data.title)
      }
      
      getAlbum()
      getPhotos()
    },[]) 

    const { id } = useParams()
    return (
        <div>
            {photos.length ? (
                <Fragment>
                    <h1>{title}</h1>
                    <Row gutter={16}>
                        {photos.map(item => {
                            return (
                                <Col span={8}>
                                    <img loading="lazy" src={item.thumbnailUrl} alt={item.title}/>
                                </Col>
                            )
                        })}
                    </Row>
                </Fragment>
            ) : 'No data'}
        </div>
    )
}
