import { useParams } from "react-router-dom"
import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import { useAlbum, useFetchPhotos } from '../../hooks';

export default function SingleAlbum() {
  const { id } = useParams()

  let { title } = useAlbum(id);
  let [photos] = useFetchPhotos(id);

  return (
    <div>
      {photos.length ? (
        <Fragment>
          <h1>{title}</h1>
          <Row gutter={16}>
            {photos.map(item => {
              return (
                <Col span={8} key={item.id}>
                  <img loading="lazy" src={item.thumbnailUrl} alt={item.title} />
                </Col>
              )
            })}
          </Row>
        </Fragment>
      ) : 'No data'}
    </div>
  )
}
