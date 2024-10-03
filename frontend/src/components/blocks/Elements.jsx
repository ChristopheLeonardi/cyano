import PropTypes from 'prop-types';
import pageServices from '../../services/page'

import "./Elements.css"

export const Title = ({title, description}) => {
  return (
    <section className="entete">
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  )
}
Title.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export const Card = ({data}) => {

  if(!data.attributes.image) {return}
  const imageData = data.attributes.image.data.attributes
  console.log(data)

  return (
    <a className="card" href={pageServices.getFullUrl(data.attributes.catSlug, data.attributes.slug)} title={`Aller sur la page de ${data.title}`}>
      <figure>
        
        <img 
          srcSet={`
            ${pageServices.getApiUrl(imageData.formats.large.url)} ${imageData.formats.large.width}w,
            ${pageServices.getApiUrl(imageData.formats.medium.url)} ${imageData.formats.medium.width}w,
            ${pageServices.getApiUrl(imageData.formats.small.url)} ${imageData.formats.small.width}w,
            ${pageServices.getApiUrl(imageData.formats.thumbnail.url)} ${imageData.formats.thumbnail.width}w,
          `}
          alt={imageData.alternativeText}
        />
        <figcaption>
          <h2>{data.attributes.title}</h2>
          <p>{data.attributes.description}</p>
        </figcaption>
      </figure>
    </a>
  )
}


Card.propTypes = {
  data: PropTypes.any.isRequired
};

